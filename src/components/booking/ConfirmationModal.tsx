"use client"

import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { CheckCircle2, X } from "lucide-react"
import { Button } from "../ui/Button"

interface ConfirmationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ConfirmationModal({ open, onOpenChange }: ConfirmationModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-pitch-black/90 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-md translate-x-[-50%] translate-y-[-50%] gap-4 border border-boundary-line/50 bg-slate-card p-6 shadow-2xl rounded-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          <div className="flex flex-col items-center text-center space-y-4 pt-4">
            <div className="w-16 h-16 rounded-full bg-turf-green/20 flex items-center justify-center text-turf-green mb-2">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <Dialog.Title className="font-display tracking-tight text-3xl text-chalk-white uppercase">
              Prototype Mode
            </Dialog.Title>
            
            <Dialog.Description className="text-chalk-white/80 leading-relaxed text-base">
              This is a frontend prototype. Backend, payments, and real booking confirmation will be wired in during the next phase. Your selections weren&apos;t saved.
            </Dialog.Description>
          </div>

          <div className="mt-6 flex justify-center w-full">
            <Dialog.Close asChild>
              <Button className="w-full">
                Understood
              </Button>
            </Dialog.Close>
          </div>

          <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-pitch-black transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-turf-green focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-card data-[state=open]:text-chalk-white text-chalk-white">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
