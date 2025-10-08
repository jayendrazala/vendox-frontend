"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog"
import { Download, Smartphone } from "lucide-react"
import Link from "next/link"

interface GetStartedModalProps {
  open: boolean
  // eslint-disable-next-line no-unused-vars
  onOpenChange: (open: boolean) => void
}

const GetStartedModal = ({ open, onOpenChange }: GetStartedModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <div className="bg-orange-50 p-8 md:p-12">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              Get Started Today
            </DialogTitle>
            <DialogDescription className="text-lg text-paragraph/80 leading-relaxed">
              Download{" "}
              <span className="text-orange-600 font-semibold">VendoX</span> now
              and take your service business to the next level!
            </DialogDescription>
          </DialogHeader>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {/* Android Download */}
            <Link href="#" className="flex-1">
              <Button
                variant="outline"
                className="w-full flex items-center cursor-pointer gap-2 px-6 py-3 border-orange-600 text-orange-600 hover:bg-orange-50 hover:border-orange-700 hover:text-orange-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download For Android
              </Button>
            </Link>

            {/* iOS Download */}
            <Link href="#" className="flex-1">
              <Button className="w-full flex cursor-pointer items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-400 text-white transition-colors">
                <Smartphone className="w-4 h-4" />
                Download For iOS
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default GetStartedModal
