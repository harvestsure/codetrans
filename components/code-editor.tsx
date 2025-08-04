"use client"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Copy, Download } from "lucide-react"
import { toast } from "sonner"

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  readOnly?: boolean
  language?: string
}

export function CodeEditor({
  value,
  onChange,
  placeholder,
  readOnly = false,
  language = "javascript",
}: CodeEditorProps) {
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
    element.download = `converted-code.${language}`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
    toast.success("Code downloaded!")
  }

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm font-medium text-gray-700">{readOnly ? "Output" : "Input"}</div>
        {value && (
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleCopy} className="h-8">
              <Copy className="h-4 w-4 mr-1" />
              Copy
            </Button>
            <Button variant="outline" size="sm" onClick={handleDownload} className="h-8">
              <Download className="h-4 w-4 mr-1" />
              Download
            </Button>
          </div>
        )}
      </div>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        className="min-h-[400px] font-mono text-sm resize-none"
        style={{
          backgroundColor: readOnly ? "#f8f9fa" : "white",
        }}
      />
    </div>
  )
}
