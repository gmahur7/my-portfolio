import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] rounded-md border-2 border-accent-foreground focus:border-accent font-light  px-4 py-5 text-base placeholder:text-shadow-primary-foreground  outline-accent",
        className 
      )}
      {...props}
    />
  )
}

export { Input }
