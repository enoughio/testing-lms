import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/lib/auth-provider"
import "./globals.css"
import { Nav } from "react-day-picker"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LibraryHub - Modern Library Management System",
  description: "A comprehensive platform for library management, seat booking, and digital resources",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
