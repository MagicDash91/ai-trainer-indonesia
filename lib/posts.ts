export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; code: string; caption?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "cta"; text: string }

export type Post = {
  slug: string
  title: string
  description: string
  date: string
  readingTime: string
  tags: string[]
  body: Block[]
}

export const POSTS: Post[] = []

export function getAllPosts(): Post[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug)
}
