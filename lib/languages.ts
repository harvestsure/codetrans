export const languages = [
  { value: "javascript", label: "JavaScript", extensions: [".js", ".mjs"] },
  { value: "typescript", label: "TypeScript", extensions: [".ts"] },
  { value: "python", label: "Python", extensions: [".py"] },
  { value: "java", label: "Java", extensions: [".java"] },
  { value: "csharp", label: "C#", extensions: [".cs"] },
  { value: "cpp", label: "C++", extensions: [".cpp", ".cc", ".cxx"] },
  { value: "c", label: "C", extensions: [".c"] },
  { value: "go", label: "Go", extensions: [".go"] },
  { value: "rust", label: "Rust", extensions: [".rs"] },
  { value: "php", label: "PHP", extensions: [".php"] },
  { value: "ruby", label: "Ruby", extensions: [".rb"] },
  { value: "swift", label: "Swift", extensions: [".swift"] },
  { value: "kotlin", label: "Kotlin", extensions: [".kt"] },
  { value: "scala", label: "Scala", extensions: [".scala"] },
  { value: "dart", label: "Dart", extensions: [".dart"] },
  { value: "r", label: "R", extensions: [".r", ".R"] },
  { value: "matlab", label: "MATLAB", extensions: [".m"] },
  { value: "perl", label: "Perl", extensions: [".pl"] },
  { value: "lua", label: "Lua", extensions: [".lua"] },
  { value: "shell", label: "Shell", extensions: [".sh"] },
  { value: "powershell", label: "PowerShell", extensions: [".ps1"] },
  { value: "sql", label: "SQL", extensions: [".sql"] },
  { value: "html", label: "HTML", extensions: [".html", ".htm"] },
  { value: "css", label: "CSS", extensions: [".css"] },
  { value: "json", label: "JSON", extensions: [".json"] },
  { value: "xml", label: "XML", extensions: [".xml"] },
  { value: "yaml", label: "YAML", extensions: [".yaml", ".yml"] },
  { value: "markdown", label: "Markdown", extensions: [".md"] },
  { value: "dockerfile", label: "Dockerfile", extensions: ["Dockerfile"] },
  { value: "makefile", label: "Makefile", extensions: ["Makefile"] },
]

export function detectLanguageFromCode(code: string): string | null {
  const trimmedCode = code.trim()

  // JavaScript/TypeScript patterns
  if (
    /^(import|export)\s+.*from\s+['"]/.test(trimmedCode) ||
    /\b(const|let|var)\s+\w+\s*=/.test(trimmedCode) ||
    /function\s+\w+\s*\(/.test(trimmedCode) ||
    /=>\s*{/.test(trimmedCode)
  ) {
    if (/:\s*(string|number|boolean|any)\b/.test(trimmedCode) || /interface\s+\w+/.test(trimmedCode)) {
      return "typescript"
    }
    return "javascript"
  }

  // Python patterns
  if (
    /^(def|class|import|from)\s+/.test(trimmedCode) ||
    /^\s*#.*python/i.test(trimmedCode) ||
    /print\s*\(/.test(trimmedCode) ||
    /if\s+__name__\s*==\s*['"]__main__['"]/.test(trimmedCode)
  ) {
    return "python"
  }

  // Java patterns
  if (
    /^(public|private|protected)\s+(class|interface)/.test(trimmedCode) ||
    /System\.out\.println/.test(trimmedCode) ||
    /public\s+static\s+void\s+main/.test(trimmedCode)
  ) {
    return "java"
  }

  // C++ patterns
  if (
    /#include\s*<.*>/.test(trimmedCode) ||
    /std::(cout|cin|endl)/.test(trimmedCode) ||
    /using\s+namespace\s+std/.test(trimmedCode)
  ) {
    return "cpp"
  }

  // C patterns
  if (
    /#include\s*<.*\.h>/.test(trimmedCode) ||
    /printf\s*\(/.test(trimmedCode) ||
    /int\s+main\s*\(/.test(trimmedCode)
  ) {
    return "c"
  }

  // Go patterns
  if (
    /^package\s+\w+/.test(trimmedCode) ||
    /import\s*\(/.test(trimmedCode) ||
    /func\s+\w+\s*\(/.test(trimmedCode) ||
    /fmt\.Print/.test(trimmedCode)
  ) {
    return "go"
  }

  // Rust patterns
  if (
    /fn\s+\w+\s*\(/.test(trimmedCode) ||
    /let\s+mut\s+/.test(trimmedCode) ||
    /println!\s*\(/.test(trimmedCode) ||
    /use\s+std::/.test(trimmedCode)
  ) {
    return "rust"
  }

  // PHP patterns
  if (/^<\?php/.test(trimmedCode) || /\$\w+\s*=/.test(trimmedCode) || /echo\s+/.test(trimmedCode)) {
    return "php"
  }

  // Ruby patterns
  if (/^(class|module|def)\s+\w+/.test(trimmedCode) || /puts\s+/.test(trimmedCode) || /end\s*$/.test(trimmedCode)) {
    return "ruby"
  }

  // C# patterns
  if (
    /using\s+System/.test(trimmedCode) ||
    /namespace\s+\w+/.test(trimmedCode) ||
    /Console\.WriteLine/.test(trimmedCode) ||
    /public\s+(static\s+)?void\s+Main/.test(trimmedCode)
  ) {
    return "csharp"
  }

  // Swift patterns
  if (
    /import\s+Foundation/.test(trimmedCode) ||
    /func\s+\w+\s*\(/.test(trimmedCode) ||
    /var\s+\w+\s*:/.test(trimmedCode) ||
    /print\s*\(/.test(trimmedCode)
  ) {
    return "swift"
  }

  // Kotlin patterns
  if (/fun\s+\w+\s*\(/.test(trimmedCode) || /val\s+\w+\s*=/.test(trimmedCode) || /println\s*\(/.test(trimmedCode)) {
    return "kotlin"
  }

  // SQL patterns
  if (
    /^(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP)\s+/i.test(trimmedCode) ||
    /FROM\s+\w+/i.test(trimmedCode) ||
    /WHERE\s+/i.test(trimmedCode)
  ) {
    return "sql"
  }

  // HTML patterns
  if (/^<!DOCTYPE\s+html/i.test(trimmedCode) || /<html\b/.test(trimmedCode) || /<\/\w+>/.test(trimmedCode)) {
    return "html"
  }

  // CSS patterns
  if (/\w+\s*{[^}]*}/.test(trimmedCode) || /\.\w+\s*{/.test(trimmedCode) || /#\w+\s*{/.test(trimmedCode)) {
    return "css"
  }

  // JSON patterns
  if (
    (/^\s*{/.test(trimmedCode) && /}\s*$/.test(trimmedCode)) ||
    (/^\s*\[/.test(trimmedCode) && /\]\s*$/.test(trimmedCode))
  ) {
    try {
      JSON.parse(trimmedCode)
      return "json"
    } catch {
      // Not valid JSON
    }
  }

  return null
}
