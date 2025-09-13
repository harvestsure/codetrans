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

// Language mapping, mapping our language identifiers to the languages supported by Prism
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

  const prismLanguage = languageMap[language] || language

  return (
    <div className="relative h-full flex flex-col bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden">
      {/* Code content */}
      <div className="flex-1 overflow-auto">
        <div style={{ userSelect: "text" }}>
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
            // wrapLines={true}   // 删除
            // wrapLongLines={true}   // 删除
            PreTag="pre"
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
