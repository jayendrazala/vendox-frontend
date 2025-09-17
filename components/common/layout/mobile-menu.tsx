"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "#", label: "Why Us" },
    { href: "#", label: "Features" },
    { href: "#", label: "How It Works" },
    { href: "#", label: "Contact Us" }
  ]

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <div
          className="md:hidden p-2 cursor-pointer hover:bg-gray-100"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col -mt-6 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-200">
            <Button
              className="w-full bg-primary hover:bg-primary-400 text-white"
              onClick={() => setIsOpen(false)}
            >
              Get VendoX
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
