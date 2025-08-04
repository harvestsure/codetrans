import { BaseConverter } from "./base-converter"

export class DeepSeekConverter extends BaseConverter {
  protected getSystemPrompt(): string {
    return `You are an expert code converter specializing in translating code between different programming languages. 
Your task is to convert code while maintaining:
1. Original functionality and logic
2. Proper syntax for the target language
3. Best practices and idiomatic patterns
4. Comments and documentation where appropriate

Provide only the converted code without explanations.`
  }

  protected async callAI(prompt: string): Promise<string> {
    const apiKey = process.env.DEEPSEEK_API_KEY
    if (!apiKey) {
      throw new Error("DeepSeek API key not configured")
    }

    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-coder",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.1,
        max_tokens: 4000,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(`DeepSeek API error: ${response.status} ${errorData.error?.message || response.statusText}`)
    }

    const data = await response.json()
    return data.choices[0]?.message?.content || ""
  }
}
