import type { CodeConverter, ConversionResult } from "./types"
import { detectLanguageFromCode } from "@/lib/languages"

export abstract class BaseConverter implements CodeConverter {
  protected abstract getSystemPrompt(): string
  protected abstract callAI(prompt: string): Promise<string>

  async convert(code: string, sourceLanguage?: string, targetLanguage?: string): Promise<ConversionResult> {
    // Detect source language if not provided
    let detectedLanguage: string | undefined
    if (!sourceLanguage) {
      detectedLanguage = detectLanguageFromCode(code) || undefined
      sourceLanguage = detectedLanguage || "unknown"
    }

    const systemPrompt = this.getSystemPrompt()
    const userPrompt = this.buildUserPrompt(code, sourceLanguage, targetLanguage || "python")

    try {
      const convertedCode = await this.callAI(systemPrompt + "\n\n" + userPrompt)
      return {
        convertedCode: this.cleanResponse(convertedCode),
        detectedLanguage,
      }
    } catch (error) {
      throw new Error(`Conversion failed: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }

  private buildUserPrompt(code: string, sourceLanguage: string, targetLanguage: string): string {
    return `Convert the following ${sourceLanguage} code to ${targetLanguage}:

\`\`\`${sourceLanguage}
${code}
\`\`\`

Please provide only the converted code without any explanations or markdown formatting.`
  }

  private cleanResponse(response: string): string {
    // Remove markdown code blocks if present
    const codeBlockRegex = /```[\w]*\n?([\s\S]*?)\n?```/
    const match = response.match(codeBlockRegex)

    if (match) {
      return match[1].trim()
    }

    return response.trim()
  }
}
