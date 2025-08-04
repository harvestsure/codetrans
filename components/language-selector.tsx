"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { languages } from "@/lib/languages"
import { useState } from "react"

interface LanguageSelectorProps {
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  includeAuto?: boolean
}

export function LanguageSelector({
  value,
  onValueChange,
  placeholder = "Select language",
  includeAuto = false,
}: LanguageSelectorProps) {
  const [open, setOpen] = useState(false)

  const allOptions = includeAuto ? [{ value: "auto", label: "Auto-detect" }, ...languages] : languages

  const selectedLanguage = allOptions.find((lang) => lang.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between bg-transparent"
        >
          {selectedLanguage ? selectedLanguage.label : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandList>
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              {allOptions.map((language) => (
                <CommandItem
                  key={language.value}
                  value={language.value}
                  onSelect={(currentValue) => {
                    onValueChange(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === language.value ? "opacity-100" : "opacity-0")} />
                  {language.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
