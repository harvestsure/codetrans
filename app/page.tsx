"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Copy, Sparkles, Zap, Code2, Github, Download } from "lucide-react"
import { toast } from "sonner"
import { CodeBlock } from "@/components/code-block"
import { LanguageSelector } from "@/components/language-selector"
import { ModelSelector } from "@/components/model-selector"
import { ThemeToggle } from "@/components/theme-toggle"
import { CodeInput } from "@/components/code-input"
import { languages } from "@/lib/languages"

export default function Home() {
  const [sourceCode, setSourceCode] = useState("")
  const [convertedCode, setConvertedCode] = useState("")
  const [sourceLanguage, setSourceLanguage] = useState("auto")
  const [targetLanguage, setTargetLanguage] = useState("python")
  const [selectedModel, setSelectedModel] = useState("deepseek")
  const [isConverting, setIsConverting] = useState(false)
  const [detectedLanguage, setDetectedLanguage] = useState<string | null>(null)

  const handleConvert = useCallback(async () => {
    if (!sourceCode.trim()) {
      toast.error("Please enter some code to convert")
      return
    }

    setIsConverting(true)
    setConvertedCode("")

    try {
      const response = await fetch("/api/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: sourceCode,
          sourceLanguage: sourceLanguage === "auto" ? undefined : sourceLanguage,
          targetLanguage,
          model: selectedModel,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Conversion failed")
      }

      const data = await response.json()
      setConvertedCode(data.convertedCode)

      if (data.detectedLanguage && sourceLanguage === "auto") {
        setDetectedLanguage(data.detectedLanguage)
      }

      toast.success("Code converted successfully!")
    } catch (error) {
      console.error("Conversion error:", error)
      toast.error(error instanceof Error ? error.message : "Failed to convert code")
    } finally {
      setIsConverting(false)
    }
  }, [sourceCode, sourceLanguage, targetLanguage, selectedModel])

  const handleCopy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success("Code copied to clipboard!")
    } catch (error) {
      toast.error("Failed to copy code")
    }
  }, [])

  const handleDownload = () => {
    const element = document.createElement("a")
    const file = new Blob([convertedCode], { type: "text/plain" })
    element.href = URL.createObjectURL(file)

    // Determine file extension based on language
    const extensions: Record<string, string> = {
      javascript: "js",
      typescript: "ts",
      python: "py",
      java: "java",
      csharp: "cs",
      cpp: "cpp",
      c: "c",
      go: "go",
      rust: "rs",
      php: "php",
      ruby: "rb",
      swift: "swift",
      kotlin: "kt",
      scala: "scala",
      dart: "dart",
      r: "r",
      matlab: "m",
      perl: "pl",
      lua: "lua",
      shell: "sh",
      powershell: "ps1",
      sql: "sql",
      html: "html",
      css: "css",
      json: "json",
      xml: "xml",
      yaml: "yml",
      markdown: "md",
    }

    const ext = extensions[targetLanguage] || "txt"
    element.download = `converted-code.${ext}`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
    toast.success("Code downloaded!")
  }

  const getLanguageDisplayName = (langCode: string) => {
    const language = languages.find((lang) => lang.value === langCode)
    return language ? language.label : langCode
  }

  const handleGithubClick = () => {
    window.open("https://github.com/harvestsure/codetrans", "_blank")
  }

  return (
    <>
      {/* SEO-friendly hidden content for crawlers */}
      <div className="sr-only">
        <h1>CodeTrans - Free AI-Powered Code Language Converter</h1>
        <p>
          Convert code between JavaScript, TypeScript, Python, Java, C#, C++, C, Go, Rust, PHP, Ruby, Swift, Kotlin,
          Scala, Dart, R, MATLAB, Perl, Lua, Shell, PowerShell, SQL, HTML, CSS, JSON, XML, YAML, Markdown and more
          programming languages using advanced AI models including DeepSeek Coder, GPT-4 Turbo, Claude 3.5 Sonnet, and
          Gemini 2.0 Flash.
        </p>
        <ul>
          <li>Free online code converter with unlimited usage</li>
          <li>No registration or sign-up required</li>
          <li>Automatic source language detection</li>
          <li>Support for 30+ programming languages</li>
          <li>AI-powered accurate code transformation</li>
          <li>Dark and light theme support</li>
          <li>Copy and download converted code</li>
          <li>Real-time code conversion</li>
        </ul>
      </div>

      <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Header */}
        <header className="flex-shrink-0 border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    CodeTrans
                  </h1>
                  <p className="text-sm text-muted-foreground">AI-Powered Code Converter</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="hidden sm:flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Free & Unlimited
                </Badge>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleGithubClick}
                  className="flex items-center gap-2 bg-transparent"
                  aria-label="Fork CodeTrans on GitHub"
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">Fork on GitHub</span>
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col px-6 py-6 min-h-0">
          {/* Hero Section */}
          <div className="text-center mb-6 flex-shrink-0">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              AI-Powered Code Conversion
            </h2>
            <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
              Automatically detect source language and convert to your target language using advanced AI models. Support
              for JavaScript, Python, Java, C++, Go, Rust, and 25+ more programming languages.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <Zap className="w-3 h-3" />
                Powered by DeepSeek Coder, OpenAI GPT-4, Claude, and Gemini
              </Badge>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center justify-center flex-shrink-0">
            <div className="flex items-center gap-2">
              <label htmlFor="target-language" className="text-sm font-medium">
                Convert to:
              </label>
              <LanguageSelector
                value={targetLanguage}
                onValueChange={setTargetLanguage}
                placeholder="Select target language"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="ai-model" className="text-sm font-medium">
                AI Model:
              </label>
              <ModelSelector value={selectedModel} onValueChange={setSelectedModel} />
            </div>
            <Button
              onClick={handleConvert}
              disabled={isConverting || !sourceCode.trim()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              aria-label="Convert code using AI"
            >
              {isConverting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Converting...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Convert Code
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>

          {/* Code Conversion Interface */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0">
            {/* Source Code */}
            <Card className="flex flex-col min-h-0 border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
              <CardHeader className="pb-3 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    Source Code
                    {detectedLanguage && sourceLanguage === "auto" && (
                      <Badge variant="secondary" className="text-xs">
                        {getLanguageDisplayName(detectedLanguage)} detected
                      </Badge>
                    )}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <LanguageSelector
                      value={sourceLanguage}
                      onValueChange={(value) => {
                        setSourceLanguage(value)
                        setDetectedLanguage(null)
                      }}
                      placeholder="Auto-detect"
                      includeAuto
                    />
                    {sourceCode && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopy(sourceCode)}
                        aria-label="Copy source code"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-0 min-h-0">
                <CodeInput
                  value={sourceCode}
                  onChange={setSourceCode}
                  placeholder="Paste your code here... The language will be automatically detected. Supports JavaScript, Python, Java, C++, Go, Rust, PHP, Ruby, Swift, Kotlin and more."
                  language={detectedLanguage || sourceLanguage}
                />
              </CardContent>
            </Card>

            {/* Converted Code */}
            <Card className="flex flex-col min-h-0 border-2 border-gray-200/50 dark:border-gray-700/50">
              <CardHeader className="pb-3 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    Converted Code
                    <Badge variant="secondary" className="text-xs">
                      {getLanguageDisplayName(targetLanguage)}
                    </Badge>
                  </CardTitle>

                  {convertedCode && (
                    <div className="flex items-center gap-2 ml-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopy(convertedCode)}
                        aria-label="Copy converted code"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleDownload}
                        aria-label="Download code"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-0 min-h-0">
                {convertedCode ? (
                  <div className="h-full overflow-hidden">
                    <CodeBlock code={convertedCode} language={targetLanguage} />
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-muted-foreground p-8">
                    <div className="text-center">
                      <Code2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Converted code will appear here...</p>
                      <p className="text-sm mt-2">
                        AI will transform your code to {getLanguageDisplayName(targetLanguage)} while maintaining
                        functionality
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  )
}
