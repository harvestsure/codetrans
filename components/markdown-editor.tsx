"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Download } from "lucide-react"
import { toast } from "sonner"

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  readOnly?: boolean
  language?: string
  title?: string
}

export function MarkdownEditor({
  value,
  onChange,
  placeholder,
  readOnly = false,
  language = "javascript",
  title = "Code",
}: MarkdownEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"
    }
  }, [value])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      toast.success("Code copied to clipboard!")
    } catch (error) {
      toast.error("Failed to copy code")
    }
  }

  const handleDownload = () => {
    const element = document.createElement("a")
    const file = new Blob([value], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `${title.toLowerCase().replace(/\s+/g, "-")}.${language}`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
    toast.success("Code downloaded!")
  }

  return (
    <div className="relative h-full flex flex-col">
      <div className="flex justify-between items-center mb-3 px-1">
        <div className="text-sm font-medium text-gray-700">{title}</div>
        {value && (
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-7 w-7 p-0 hover:bg-gray-100"
              title="Copy code"
            >
              <Copy className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDownload}
              className="h-7 w-7 p-0 hover:bg-gray-100"
              title="Download code"
            >
              <Download className="h-3.5 w-3.5" />
            </Button>
          </div>
        )}
      </div>

      <div className="flex-1 relative">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
          className={`
            w-full h-full min-h-[500px] p-4 font-mono text-sm resize-none border rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            ${readOnly ? "bg-gray-50 text-gray-800 cursor-default" : "bg-white text-gray-900"}
          `}
          style={{
            lineHeight: "1.5",
            tabSize: 2,
          }}
          spellCheck={false}
        />

        {/* Syntax highlighting overlay could be added here */}
        <div className="absolute bottom-2 right-2 text-xs text-gray-400 bg-white px-2 py-1 rounded border">
          {language}
        </div>
      </div>
    </div>
  )
}
