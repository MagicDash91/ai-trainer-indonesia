// Michael Wiryaseputra's training programs, productized from what he genuinely teaches
// (verified from his bootcamp experience + Bank Jateng corporate training). No invented
// fixed durations — format is described as customizable, which is honest.

export type Program = {
  slug: string
  name: string
  audience: string
  format: string
  summary: string
  topics: string[]
}

export type Tool = { name: string; logo: string }
export type ToolCategory = { category: string; note: string; tools: Tool[] }

// Tools genuinely taught/used in Michael's sessions. Logos stored locally in /public/tools.
export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    category: "Orkestrasi & Agentic AI",
    note: "Membangun workflow multi-agent dan aplikasi LLM",
    tools: [
      { name: "LangChain", logo: "/tools/langchain.png" },
      { name: "LangGraph", logo: "/tools/langgraph.png" },
      { name: "CrewAI", logo: "/tools/crewai.jpg" },
    ],
  },
  {
    category: "Fine-tuning",
    note: "Menyesuaikan model untuk kebutuhan spesifik",
    tools: [{ name: "Unsloth", logo: "/tools/unsloth.png" }],
  },
  {
    category: "Observability & LLMOps",
    note: "Memantau, mengevaluasi, dan mengoperasikan LLM",
    tools: [{ name: "LangSmith", logo: "/tools/langsmith.png" }],
  },
  {
    category: "LLM Providers",
    note: "Model bahasa dari berbagai penyedia",
    tools: [
      { name: "Google Gemini", logo: "/tools/googlegemini.svg" },
      { name: "OpenAI", logo: "/tools/openai.svg" },
      { name: "Claude (Anthropic)", logo: "/tools/anthropic.svg" },
    ],
  },
  {
    category: "RAG & Vector Database",
    note: "Menyimpan dan mencari konteks untuk retrieval",
    tools: [
      { name: "FAISS", logo: "/tools/faiss.jpg" },
      { name: "ChromaDB", logo: "/tools/chroma.png" },
    ],
  },
  {
    category: "Backend & Bahasa",
    note: "Fondasi membangun dan men-deploy aplikasi AI",
    tools: [
      { name: "Python", logo: "/tools/python.svg" },
      { name: "FastAPI", logo: "/tools/fastapi.svg" },
    ],
  },
]

export const PROGRAMS: Program[] = [
  {
    slug: "agentic-ai-korporat",
    name: "Pelatihan Agentic AI untuk Korporat",
    audience: "Tim teknis, data, dan produk di perusahaan",
    format: "Workshop on-site atau online, dikustomisasi per industri & use case",
    summary:
      "Membangun sistem AI agentik produksi dengan LangChain dan LangGraph — bukan sekadar menyambungkan tool no-code. Program yang sama yang dibawakan untuk pelatihan Agentic AI Bank Jateng.",
    topics: [
      "Arsitektur multi-agent dengan LangChain & LangGraph",
      "RAG pipeline untuk data internal perusahaan",
      "Tool execution & modul memory",
      "LLMOps: monitoring, evaluasi, dan deployment ke produksi",
    ],
  },
  {
    slug: "bootcamp-rag",
    name: "Bootcamp RAG (Retrieval-Augmented Generation)",
    audience: "Engineer, developer, dan tim data",
    format: "Multi-sesi hands-on build-along, individual atau tim",
    summary:
      "Dari RAG dasar hingga arsitektur RAG lanjutan. Peserta membangun sendiri pipeline RAG end-to-end, bukan hanya memahami teorinya.",
    topics: [
      "Chunking, embedding, dan vector database",
      "Agentic RAG, Hybrid RAG, dan Adaptive RAG",
      "Evaluasi kualitas retrieval & jawaban",
      "Deployment RAG ke sistem produksi",
    ],
  },
  {
    slug: "fine-tuning-llmops",
    name: "Fine-tuning LLM & LLMOps",
    audience: "Tim teknis yang sudah familiar dasar AI/ML",
    format: "Workshop hands-on, dikustomisasi sesuai stack perusahaan",
    summary:
      "Menyesuaikan model bahasa untuk kebutuhan spesifik, lalu mengoperasikannya secara andal — dengan praktik LLMOps yang nyata.",
    topics: [
      "Teknik fine-tuning LLM",
      "Evaluasi model dan pengujian",
      "LLMOps dengan LangSmith",
      "Manajemen biaya dan keandalan di produksi",
    ],
  },
  {
    slug: "fondasi-ai-ml-engineering",
    name: "Fondasi AI/ML Engineering",
    audience: "Pemula dan career-switcher menuju AI engineer",
    format: "Bootcamp bertahap, dari nol hingga membangun aplikasi",
    summary:
      "Dasar membangun aplikasi AI end-to-end — Machine Learning, NLP, hingga integrasi LLM — untuk yang ingin masuk ke AI engineering dengan fondasi yang benar.",
    topics: [
      "Machine Learning dan Natural Language Processing",
      "Dasar Large Language Models & Generative AI",
      "Membangun aplikasi AI dengan Python & FastAPI",
      "Alur kerja end-to-end: dari model hingga deployment",
    ],
  },
]
