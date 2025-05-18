"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BookOpen, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/lib/auth-provider"

export default function LoginPage() {
  const { login } = useAuth()
  const { toast } = useToast()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await login(formData.email, formData.password)
      toast({
        title: "Login successful",
        description: "You have been logged in successfully.",
      })
      // Redirect is handled in the auth provider
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Invalid email or password. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Demo account login helpers
  const loginAsMember = () => {
    setFormData({
      email: "member@example.com",
      password: "password",
    })
  }

  const loginAsAdmin = () => {
    setFormData({
      email: "admin@example.com",
      password: "password",
    })
  }

  const loginAsSuperAdmin = () => {
    setFormData({
      email: "superadmin@example.com",
      password: "password",
    })
  }

  return (
    <div className=" flex h-screen  max-w-[1920px] lg:overflow-x-auto flex-col items-center justify-center bg-[#ECE3DA]">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center gap-2">
        <BookOpen className="h-6 w-6" />
        <span className="font-bold">LibraryHub</span>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[550px]">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Login</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/forgot-password" className="text-sm text-muted-foreground hover:text-primary">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-slate-500" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </div>
            </form>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground text-center mb-2">Demo Accounts</p>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" size="sm" onClick={loginAsMember}>
                  Member
                </Button>
                <Button variant="outline" size="sm" onClick={loginAsAdmin}>
                  Admin
                </Button>
                <Button variant="outline" size="sm" onClick={loginAsSuperAdmin}>
                  Super Admin
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="text-sm text-muted-foreground text-center">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
