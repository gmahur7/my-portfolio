"use client"
import { useTheme } from "@/hooks/useThemes"
import { Switch } from "../ui/switch"
import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"

export function ThemeToggle() {
  const { setTheme: toggleTheme } = useTheme()
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(()=>{
    toggleTheme('light');
  },[])

  const handleToggleTheme = () => {
    setTheme((prev) => {
      if (!prev) {
        toggleTheme('dark')
      } else {
        toggleTheme('light')
      }
      return !prev;
    })
  }

  return (
    <div className="flex gap-4 items-center">
    <SunIcon className={!theme?'text-accent':'text-primary'}  />
    <Switch
      checked={theme}
      onCheckedChange={handleToggleTheme}
    />
    <MoonIcon className={theme?'text-accent':'text-primary'} />
    </div>
  )
}