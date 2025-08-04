import { NextResponse } from "next/server"

const models = [
  {
    id: "deepseek",
    name: "DeepSeek Coder",
    description: "Specialized for code understanding and generation",
    available: !!process.env.DEEPSEEK_API_KEY,
  },
  {
    id: "openai",
    name: "GPT-4 Turbo",
    description: "OpenAI's most capable model",
    available: !!process.env.OPENAI_API_KEY,
  },
  {
    id: "claude",
    name: "Claude 3.5 Sonnet",
    description: "Anthropic's advanced reasoning model",
    available: !!process.env.ANTHROPIC_API_KEY,
  },
  {
    id: "gemini",
    name: "Gemini 2.0 Flash",
    description: "Google's fast and efficient model",
    available: !!process.env.GOOGLE_GENERATIVE_AI_API_KEY,
  },
]

export async function GET() {
  return NextResponse.json({ models })
}
