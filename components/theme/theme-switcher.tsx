"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { LucideMoon, LucideSun} from "lucide-react"

export const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
    >
      {resolvedTheme === "dark" ? <LucideSun /> : <LucideMoon />}
    </button>
  )
}