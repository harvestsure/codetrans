"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check, Download } from "lucide-react"
import { toast } from "sonner"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism"
import { useTheme } from "next-themes"

interface CodeBlockProps {
  code: string
  language: string
}

// 语言映射，将我们的语言标识符映射到 Prism 支持的语言
const languageMap: Record<string, string> = {
  javascript: "javascript",
  typescript: "typescript",
  python: "python",
  java: "java",
  csharp: "csharp",
  cpp: "cpp",
  c: "c",
  go: "go",
  rust: "rust",
  php: "php",
  ruby: "ruby",
  swift: "swift",
  kotlin: "kotlin",
  scala: "scala",
  dart: "dart",
  r: "r",
  matlab: "matlab",
  perl: "perl",
  lua: "lua",
  shell: "bash",
  powershell: "powershell",
  sql: "sql",
  html: "html",
  css: "css",
  json: "json",
  xml: "xml",
  yaml: "yaml",
  markdown: "markdown",
  dockerfile: "dockerfile",
  makefile: "makefile",
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const { theme } = useTheme()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      toast.success("Code copied to clipboard!")
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast.error("Failed to copy code")
    }
  }

  const handleDownload = () => {
    const element = document.createElement("a")
    const file = new Blob([code], { type: "text/plain" })
    element.href = URL.createObjectURL(file)

    // 根据语言确定文件扩展名
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

    const ext = extensions[language] || "txt"
    element.download = `converted-code.${ext}`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
    toast.success("Code downloaded!")
  }

  const prismLanguage = languageMap[language] || language

  return (
    <div className="relative h-full flex flex-col bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden">
      {/* 代码内容 */}
      <div className="flex-1 overflow-auto">
        <SyntaxHighlighter
          language={prismLanguage}
          style={theme === "dark" ? oneDark : oneLight}
          customStyle={{
            margin: 0,
            padding: "1rem",
            background: "transparent",
            fontSize: "14px",
            lineHeight: "1.6",
            height: "100%",
          }}
          showLineNumbers={true}
          lineNumberStyle={{
            minWidth: "3em",
            paddingRight: "1em",
            color: theme === "dark" ? "#6b7280" : "#9ca3af",
            userSelect: "none",
          }}
          wrapLines={true}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
