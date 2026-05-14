"use client"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"
import { LucideMoon, LucideSun } from "lucide-react"

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
      <Button variant="default" size="icon" 
      onClick={() => setTheme(theme === "light" ? "dark" : "light")} >
        {theme === "light" ? <LucideMoon /> : <LucideSun />}
        <span className="sr-only">Switch theme</span>
      </Button>
  )
}

export { ThemeSwitcher }