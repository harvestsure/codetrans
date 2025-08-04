export interface ConversionResult {
  convertedCode: string
  detectedLanguage?: string
}

export interface CodeConverter {
  name: string
  convert(code: string, sourceLanguage?: string, targetLanguage?: string): Promise<ConversionResult>
}

export interface ModelInfo {
  id: string
  name: string
  description: string
  available: boolean
}

export type AIModel = "deepseek" | "openai" | "claude" | "gemini"
