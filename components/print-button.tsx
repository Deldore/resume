"use client"

import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"

export function PrintButton() {
  return (
    <Button onClick={() => window.print()} variant="outline" size="sm" className="bg-slate-800 border-slate-700 hover:bg-slate-700">
      <Printer className="w-4 h-4 mr-2" />
      Сохранить как PDF
    </Button>
  )
} 