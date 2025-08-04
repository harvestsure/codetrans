import { generateText } from "ai"
import { anthropic } from "@ai-sdk/anthropic"
import { BaseConverter } from "./base-converter"

export class ClaudeConverter extends BaseConverter {
  protected getSystemPrompt(): string {
    return `You are an expert code converter. Convert code between programming languages while maintaining functionality, proper syntax, and best practices. Provide only the converted code without explanations.`
  }

  protected async callAI(prompt: string): Promise<string> {
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      throw new Error("Anthropic API key not configured")
    }

    try {
      const { text } = await generateText({
        model: anthropic("claude-3-5-sonnet-20241022"),
        prompt,
        temperature: 0.1,
        maxTokens: 4000,
      })

      return text
    } catch (error) {
      throw new Error(`Claude API error: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }
}
