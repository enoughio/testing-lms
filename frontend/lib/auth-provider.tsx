"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { mockAuthService } from "@/lib/mock-api/auth-service"
import type { User } from "@/types/user"

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  register: (userData: any) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if user is logged in on initial load
    const checkAuth = async () => {
      try {
        const userData = await mockAuthService.getCurrentUser()
        setUser(userData)
      } catch (error) {
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  useEffect(() => {
    // Handle route protection
    if (!isLoading) {
      // Public routes accessible to all
      const publicRoutes = ["/", "/about", "/contact", "/libraries", "/forum", "/login", "/register"]
      const isPublicRoute = publicRoutes.some((route) => pathname === route || pathname.startsWith("/libraries/") || pathname.startsWith("/forum/"))

      if (!user && !isPublicRoute) {
        router.push("/login")
        return
      }

      // Role-based route protection
      if (user) {
        const memberRoutes = ["/dashboard/member"]
        const adminRoutes = ["/dashboard/admin"]
        const superAdminRoutes = ["/dashboard/super-admin"]

        const isMemberRoute = pathname.startsWith("/dashboard/member")
        const isAdminRoute = pathname.startsWith("/dashboard/admin")
        const isSuperAdminRoute = pathname.startsWith("/dashboard/super-admin")

        if (user.role === "member" && (isAdminRoute || isSuperAdminRoute)) {
          router.push("/dashboard/member")
        } else if (user.role === "admin" && (isMemberRoute || isSuperAdminRoute)) {
          router.push("/dashboard/admin")
        } else if (user.role === "super-admin" && (isMemberRoute || isAdminRoute)) {
          router.push("/dashboard/super-admin")
        }
      }
    }
  }, [isLoading, user, pathname, router])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const userData = await mockAuthService.login(email, password)
      setUser(userData)

      // Redirect based on role
      if (userData.role === "member") {
        router.push("/dashboard/member")
      } else if (userData.role === "admin") {
        router.push("/dashboard/admin")
      } else if (userData.role === "super-admin") {
        router.push("/dashboard/super-admin")
      }
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    mockAuthService.logout()
    setUser(null)
    router.push("/")
  }

  const register = async (userData: any) => {
    setIsLoading(true)
    try {
      const newUser = await mockAuthService.register(userData)
      setUser(newUser)
      router.push("/dashboard/member")
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return <AuthContext.Provider value={{ user, isLoading, login, logout, register }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
