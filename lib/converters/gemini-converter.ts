import { generateText } from "ai"
import { google } from "@ai-sdk/google"
import { BaseConverter } from "./base-converter"

export class GeminiConverter extends BaseConverter {
  protected getSystemPrompt(): string {
    return `You are an expert code converter. Convert code between programming languages while maintaining functionality, proper syntax, and best practices. Provide only the converted code without explanations.`
  }

  protected async callAI(prompt: string): Promise<string> {
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY
    if (!apiKey) {
      throw new Error("Google AI API key not configured")
    }

    try {
      const { text } = await generateText({
        model: google("gemini-2.0-flash-exp"),
        prompt,
        temperature: 0.1,
        maxTokens: 4000,
      })

      return text
    } catch (error) {
      throw new Error(`Gemini API error: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }
}
