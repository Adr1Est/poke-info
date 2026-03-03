'use client'
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { getQueryClient } from "@/app/get-query-client"
import { ThemeProvider } from "next-themes"

export default function Providers({ children }: { children: ReactNode }){
  const queryClient = getQueryClient()

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  )
}