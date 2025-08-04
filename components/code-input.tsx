"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface CodeInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  language?: string
  className?: string
}

export function CodeInput({ value, onChange, placeholder, language, className }: CodeInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      // Auto-resize textarea
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"
    }
  }, [value])

  return (
    <div className="relative h-full">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full h-full resize-none border-0 bg-transparent p-4 font-mono text-sm min-h-0",
          "placeholder:text-muted-foreground/60",
          "focus:outline-none focus:ring-0",
          "transition-all duration-200",
          "focus:bg-blue-50/30 dark:focus:bg-blue-950/20",
          "caret-blue-600 dark:caret-blue-400",
          "selection:bg-blue-200 dark:selection:bg-blue-800/50",
          className,
        )}
        style={{
          lineHeight: "1.6",
          tabSize: 2,
        }}
        spellCheck={false}
        aria-label="Source code input"
      />

      {/* 焦点指示器 */}
      <div className="absolute inset-0 pointer-events-none rounded-lg transition-all duration-200 opacity-0 focus-within:opacity-100">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10" />
        <div className="absolute inset-0 rounded-lg ring-1 ring-blue-500/20 dark:ring-blue-400/20" />
      </div>

      {/* 语言标识 */}
      {language && language !== "auto" && (
        <div className="absolute bottom-2 right-2 px-2 py-1 text-xs text-muted-foreground bg-background/80 backdrop-blur-sm rounded border">
          {language}
        </div>
      )}
    </div>
  )
}
