import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { BaseConverter } from "./base-converter"

export class OpenAIConverter extends BaseConverter {
  protected getSystemPrompt(): string {
    return `You are an expert code converter. Convert code between programming languages while maintaining functionality, proper syntax, and best practices. Provide only the converted code without explanations.`
  }

  protected async callAI(prompt: string): Promise<string> {
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      throw new Error("OpenAI API key not configured")
    }

    try {
      const { text } = await generateText({
        model: openai("gpt-4-turbo-preview"),
        prompt,
        temperature: 0.1,
        maxTokens: 4000,
      })

      return text
    } catch (error) {
      throw new Error(`OpenAI API error: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }
}
