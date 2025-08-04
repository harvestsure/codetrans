import { type NextRequest, NextResponse } from "next/server"
import { ConverterFactory } from "@/lib/converters/converter-factory"

export async function POST(request: NextRequest) {
  try {
    const { code, sourceLanguage, targetLanguage, model } = await request.json()

    if (!code || !targetLanguage) {
      return NextResponse.json({ error: "Code and target language are required" }, { status: 400 })
    }

    const converter = ConverterFactory.createConverter(model || "deepseek")
    const result = await converter.convert(code, sourceLanguage, targetLanguage)

    return NextResponse.json({
      convertedCode: result.convertedCode,
      detectedLanguage: result.detectedLanguage,
    })
  } catch (error) {
    console.error("Conversion error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 },
    )
  }
}
