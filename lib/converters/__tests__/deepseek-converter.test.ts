import { DeepSeekConverter } from "../deepseek-converter"
import type { ConversionRequest } from "../types"

// Mock environment variable
process.env.DEEPSEEK_API_KEY = "test-key"

describe("DeepSeekConverter", () => {
  let converter: DeepSeekConverter

  beforeEach(() => {
    converter = new DeepSeekConverter()
  })

  describe("isAvailable", () => {
    it("should return true when API key is configured", () => {
      expect(converter.isAvailable()).toBe(true)
    })

    it("should return false when API key is not configured", () => {
      delete process.env.DEEPSEEK_API_KEY
      const newConverter = new DeepSeekConverter()
      expect(newConverter.isAvailable()).toBe(false)
      // Restore for other tests
      process.env.DEEPSEEK_API_KEY = "test-key"
    })
  })

  describe("getModelName", () => {
    it("should return correct model name", () => {
      expect(converter.getModelName()).toBe("DeepSeek Coder")
    })
  })

  describe("generatePrompt", () => {
    it("should generate appropriate prompt for code conversion", () => {
      const request: ConversionRequest = {
        code: "console.log('Hello World')",
        targetLanguage: "python",
        targetLangLabel: "Python",
      }

      const prompt = (converter as any).generatePrompt(request)

      expect(prompt).toContain("DeepSeek Coder")
      expect(prompt).toContain("Python")
      expect(prompt).toContain("console.log('Hello World')")
      expect(prompt).toContain("Automatically identify the source programming language")
    })
  })

  describe("model switching", () => {
    it("should allow switching between models", () => {
      converter.switchModel("CHAT")
      const info = converter.getModelInfo()
      expect(info.model).toBe("deepseek-chat")
    })
  })
})
