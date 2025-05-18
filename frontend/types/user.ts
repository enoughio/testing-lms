export type UserRole = "member" | "admin" | "super-admin"

export type MembershipStatus = "active" | "expired" | "pending"

export type MembershipPlan = {
  id: string
  name: string
  price: number
  duration: number // in days
  features: string[]
  allowedBookingsPerMonth: number
  eLibraryAccess: boolean
}

export type User = {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  createdAt: string
  membership?: {
    planId: string
    planName: string
    status: MembershipStatus
    expiresAt: string
  }
  libraryId?: string // For admin users
  libraryName?: string // For admin users
}
