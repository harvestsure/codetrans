import type { CodeConverter } from "./types"
import { DeepSeekConverter } from "./deepseek-converter"
import { OpenAIConverter } from "./openai-converter"
import { ClaudeConverter } from "./claude-converter"
import { GeminiConverter } from "./gemini-converter"

export class ConverterFactory {
  static createConverter(model: string): CodeConverter {
    switch (model.toLowerCase()) {
      case "deepseek":
        return new DeepSeekConverter()
      case "openai":
        return new OpenAIConverter()
      case "claude":
        return new ClaudeConverter()
      case "gemini":
        return new GeminiConverter()
      default:
        return new DeepSeekConverter() // Default fallback
    }
  }
}
