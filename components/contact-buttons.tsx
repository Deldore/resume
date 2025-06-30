"use client"

import { Button } from "@/components/ui/button"
import { Mail, MessageCircle } from "lucide-react"

export function ContactButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <a href="mailto:deldore.emil@yandex.ru" className="print:hidden">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Mail className="w-4 h-4 mr-2" />
          Написать письмо
        </Button>
      </a>
      <a href="https://t.me/PresidentOfTatarstan" target="_blank" rel="noopener noreferrer" className="print:hidden">
        <Button variant="outline" className="border-slate-600 hover:bg-slate-700 bg-transparent text-slate-300">
          <MessageCircle className="w-4 h-4 mr-2" />
          Telegram
        </Button>
      </a>
      <Button
        onClick={() => window.print()}
        variant="outline"
        className="border-slate-600 hover:bg-slate-700 bg-transparent text-slate-300 print:hidden"
      >
        Скачать резюме
      </Button>
    </div>
  )
} 