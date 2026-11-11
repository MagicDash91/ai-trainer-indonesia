// IndexNow ping: tells Bing (which powers ChatGPT search), Yandex, Naver, Seznam
// that URLs on this site are new or changed. Run AFTER a deploy is live:
//   node scripts/indexnow.mjs                 -> submits every URL in the live sitemap
//   node scripts/indexnow.mjs /some-path ...  -> submits only those paths
// The key file public/860ac0a263fdbdd938a91a782e01b5df.txt must be live at the site root first.

const SITE_URL = "https://aitrainerindonesia.id"
const KEY = "860ac0a263fdbdd938a91a782e01b5df"

const host = new URL(SITE_URL).host
const args = process.argv.slice(2)

async function sitemapUrls() {
  const res = await fetch(`${SITE_URL}/sitemap.xml`)
  if (!res.ok) throw new Error(`sitemap.xml returned HTTP ${res.status}`)
  const xml = await res.text()
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
}

const keyRes = await fetch(`${SITE_URL}/${KEY}.txt`)
if (!keyRes.ok || (await keyRes.text()).trim() !== KEY) {
  console.error(`Key file ${SITE_URL}/${KEY}.txt is not live yet. Deploy first, then rerun.`)
  process.exit(1)
}

const urlList = args.length
  ? args.map((p) => new URL(p, SITE_URL).toString())
  : await sitemapUrls()

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key: KEY, keyLocation: `${SITE_URL}/${KEY}.txt`, urlList }),
})

console.log(`IndexNow: HTTP ${res.status} for ${urlList.length} URL(s) on ${host}`)
urlList.forEach((u) => console.log("  " + u))
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text())
  process.exit(1)
}
