"use client"

export const COOKIES = {
  TARGET_LANGUAGE: "code-converter-target-language",
  THEME_PREFERENCE: "code-converter-theme",
} as const

export type ThemePreference = "light" | "dark" | "system"

export function setCookie(name: string, value: string, days = 30) {
  if (typeof document === "undefined") return

  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
}

export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null

  const nameEQ = name + "="
  const ca = document.cookie.split(";")

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === " ") c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }

  return null
}

export function deleteCookie(name: string) {
  if (typeof document === "undefined") return
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

export function getThemePreference(): ThemePreference {
  const theme = getCookie(COOKIES.THEME_PREFERENCE)
  if (theme === "light" || theme === "dark" || theme === "system") {
    return theme
  }
  return "system"
}

export function setThemePreference(theme: ThemePreference) {
  setCookie(COOKIES.THEME_PREFERENCE, theme)
}
