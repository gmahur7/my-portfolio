"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Palette } from "lucide-react"

const themes = [
  { name: "Default", value: "theme-default" },
  { name: "Blue", value: "theme-blue" },
  { name: "Green", value: "theme-green" },
  { name: "Red", value: "theme-red" },
  { name: "Orange", value: "theme-orange" },
]

export function ThemeCustomizer() {
  const [mounted, setMounted] = React.useState(false)
  const [colorTheme, setColorTheme] = React.useState("theme-default")

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(...themes.map(t => t.value))
    root.classList.add(colorTheme)
  }, [colorTheme])

  if (!mounted) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Customize theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => setColorTheme(theme.value)}
          >
            {theme.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}