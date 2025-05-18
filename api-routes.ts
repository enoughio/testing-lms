/**
 * Library Management System API Routes
 *
 * This document outlines all the API routes needed for the Library Management System.
 * Each route includes its path, HTTP method, purpose, required parameters, and access control.
 */

// ==================== AUTHENTICATION ROUTES ====================

/**
 * Register a new user
 *
 * Path: /api/auth/register
 * Method: POST
 * Access: Public
 *
 * Request Body:
 * {
 *   name: string,
 *   email: string,
 *   password: string,
 *   confirmPassword: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   user?: {
 *     id: string,
 *     name: string,
 *     email: string,
 *     role: string
 *   }
 * }
 */

/**
 * Login user
 *
 * Path: /api/auth/login
 * Method: POST
 * Access: Public
 *
 * Request Body:
 * {
 *   email: string,
 *   password: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   token?: string,
 *   user?: {
 *     id: string,
 *     name: string,
 *     email: string,
 *     role: string,
 *     avatar?: string
 *   }
 * }
 */

/**
 * Logout user
 *
 * Path: /api/auth/logout
 * Method: POST
 * Access: Authenticated Users
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string
 * }
 */

/**
 * Get current user
 *
 * Path: /api/auth/me
 * Method: GET
 * Access: Authenticated Users
 *
 * Response:
 * {
 *   success: boolean,
 *   user: {
 *     id: string,
 *     name: string,
 *     email: string,
 *     role: string,
 *     avatar?: string,
 *     membership?: {
 *       planId: string,
 *       planName: string,
 *       status: string,
 *       expiresAt: string
 *     },
 *     libraryId?: string,
 *     libraryName?: string
 *   }
 * }
 */

/**
 * Request password reset
 *
 * Path: /api/auth/forgot-password
 * Method: POST
 * Access: Public
 *
 * Request Body:
 * {
 *   email: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string
 * }
 */

/**
 * Reset password
 *
 * Path: /api/auth/reset-password
 * Method: POST
 * Access: Public (with token)
 *
 * Request Body:
 * {
 *   token: string,
 *   password: string,
 *   confirmPassword: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string
 * }
 */

// ==================== USER ROUTES ====================

/**
 * Get user profile
 *
 * Path: /api/users/profile
 * Method: GET
 * Access: Authenticated Users
 *
 * Response:
 * {
 *   success: boolean,
 *   profile: {
 *     id: string,
 *     name: string,
 *     email: string,
 *     role: string,
 *     avatar?: string,
 *     bio?: string,
 *     phone?: string,
 *     address?: string,
 *     createdAt: string
 *   }
 * }
 */

/**
 * Update user profile
 *
 * Path: /api/users/profile
 * Method: PUT
 * Access: Authenticated Users
 *
 * Request Body:
 * {
 *   name?: string,
 *   bio?: string,
 *   phone?: string,
 *   address?: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   profile: {
 *     id: string,
 *     name: string,
 *     email: string,
 *     role: string,
 *     avatar?: string,
 *     bio?: string,
 *     phone?: string,
 *     address?: string,
 *     createdAt: string
 *   }
 * }
 */

/**
 * Upload avatar
 *
 * Path: /api/users/avatar
 * Method: POST
 * Access: Authenticated Users
 *
 * Request Body: FormData with 'avatar' file
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   avatarUrl?: string
 * }
 */

/**
 * Change password
 *
 * Path: /api/users/change-password
 * Method: POST
 * Access: Authenticated Users
 *
 * Request Body:
 * {
 *   currentPassword: string,
 *   newPassword: string,
 *   confirmPassword: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string
 * }
 */

/**
 * Get all users (admin/super-admin)
 *
 * Path: /api/users
 * Method: GET
 * Access: Admin, Super Admin
 *
 * Query Parameters:
 * page?: number
 * limit?: number
 * search?: string
 * role?: string
 * status?: string
 *
 * Response:
 * {
 *   success: boolean,
 *   users: Array<{
 *     id: string,
 *     name: string,
 *     email: string,
 *     role: string,
 *     createdAt: string,
 *     membership?: {
 *       status: string
 *     }
 *   }>,
 *   pagination: {
 *     total: number,
 *     pages: number,
 *     page: number,
 *     limit: number
 *   }
 * }
 */

/**
 * Get user by ID (admin/super-admin)
 *
 * Path: /api/users/:id
 * Method: GET
 * Access: Admin, Super Admin
 *
 * Response:
 * {
 *   success: boolean,
 *   user: {
 *     id: string,
 *     name: string,
 *     email: string,
 *     role: string,
 *     avatar?: string,
 *     bio?: string,
 *     phone?: string,
 *     address?: string,
 *     createdAt: string,
 *     memberships: Array<{
 *       id: string,
 *       library: {
 *         id: string,
 *         name: string
 *       },
 *       plan: {
 *         id: string,
 *         name: string
 *       },
 *       status: string,
 *       startDate: string,
 *       endDate: string
 *     }>
 *   }
 * }
 */

/**
 * Update user (admin/super-admin)
 *
 * Path: /api/users/:id
 * Method: PUT
 * Access: Admin, Super Admin
 *
 * Request Body:
 * {
 *   name?: string,
 *   email?: string,
 *   role?: string,
 *   status?: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   user: {
 *     id: string,
 *     name: string,
 *     email: string,
 *     role: string
 *   }
 * }
 */

// ==================== LIBRARY ROUTES ====================

/**
 * Get all libraries
 *
 * Path: /api/libraries
 * Method: GET
 * Access: Public
 *
 * Query Parameters:
 * page?: number
 * limit?: number
 * search?: string
 * city?: string
 * amenities?: string (comma-separated)
 *
 * Response:
 * {
 *   success: boolean,
 *   libraries: Array<{
 *     id: string,
 *     name: string,
 *     description: string,
 *     address: string,
 *     city: string,
 *     images: string[],
 *     rating: number,
 *     reviewCount: number,
 *     amenities: string[],
 *     totalSeats: number,
 *     availableSeats: number
 *   }>,
 *   pagination: {
 *     total: number,
 *     pages: number,
 *     page: number,
 *     limit: number
 *   }
 * }
 */

/**
 * Get library by ID
 *
 * Path: /api/libraries/:id
 * Method: GET
 * Access: Public
 *
 * Response:
 * {
 *   success: boolean,
 *   library: {
 *     id: string,
 *     name: string,
 *     description: string,
 *     address: string,
 *     city: string,
 *     state: string,
 *     country: string,
 *     postalCode: string,
 *     email: string,
 *     phone: string,
 *     website?: string,
 *     images: string[],
 *     rating: number,
 *     reviewCount: number,
 *     amenities: string[],
 *     totalSeats: number,
 *     availableSeats: number,
 *     openingHours: {
 *       [key: string]: {
 *         open: string,
 *         close: string,
 *         isClosed: boolean
 *       }
 *     },
 *     membershipPlans: Array<{
 *       id: string,
 *       name: string,
 *       price: number,
 *       duration: number,
 *       features: string[]
 *     }>
 *   }
 * }
 */

/**
 * Create library (super-admin)
 *
 * Path: /api/libraries
 * Method: POST
 * Access: Super Admin
 *
 * Request Body:
 * {
 *   name: string,
 *   description: string,
 *   address: string,
 *   city: string,
 *   state: string,
 *   country: string,
 *   postalCode: string,
 *   email: string,
 *   phone: string,
 *   website?: string,
 *   amenities: string[],
 *   totalSeats: number,
 *   adminId: string,
 *   openingHours: {
 *     [key: string]: {
 *       open: string,
 *       close: string,
 *       isClosed: boolean
 *     }
 *   }
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   library: {
 *     id: string,
 *     name: string
 *   }
 * }
 */

/**
 * Update library
 *
 * Path: /api/libraries/:id
 * Method: PUT
 * Access: Admin (own library), Super Admin
 *
 * Request Body:
 * {
 *   name?: string,
 *   description?: string,
 *   address?: string,
 *   city?: string,
 *   state?: string,
 *   country?: string,
 *   postalCode?: string,
 *   email?: string,
 *   phone?: string,
 *   website?: string,
 *   amenities?: string[],
 *   totalSeats?: number,
 *   openingHours?: {
 *     [key: string]: {
 *       open: string,
 *       close: string,
 *       isClosed: boolean
 *     }
 *   }
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   library: {
 *     id: string,
 *     name: string
 *   }
 * }
 */

/**
 * Upload library images
 *
 * Path: /api/libraries/:id/images
 * Method: POST
 * Access: Admin (own library), Super Admin
 *
 * Request Body: FormData with 'images' files
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   images: string[]
 * }
 */

/**
 * Delete library image
 *
 * Path: /api/libraries/:id/images/:imageId
 * Method: DELETE
 * Access: Admin (own library), Super Admin
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string
 * }
 */

/**
 * Get library reviews
 *
 * Path: /api/libraries/:id/reviews
 * Method: GET
 * Access: Public
 *
 * Query Parameters:
 * page?: number
 * limit?: number
 * rating?: number
 *
 * Response:
 * {
 *   success: boolean,
 *   reviews: Array<{
 *     id: string,
 *     rating: number,
 *     comment?: string,
 *     createdAt: string,
 *     user: {
 *       id: string,
 *       name: string,
 *       avatar?: string
 *     }
 *   }>,
 *   pagination: {
 *     total: number,
 *     pages: number,
 *     page: number,
 *     limit: number
 *   }
 * }
 */

/**
 * Add library review
 *
 * Path: /api/libraries/:id/reviews
 * Method: POST
 * Access: Authenticated Users
 *
 * Request Body:
 * {
 *   rating: number,
 *   comment?: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   review: {
 *     id: string,
 *     rating: number,
 *     comment?: string
 *   }
 * }
 */

// ==================== MEMBERSHIP ROUTES ====================

/**
 * Get membership plans for a library
 *
 * Path: /api/libraries/:id/membership-plans
 * Method: GET
 * Access: Public
 *
 * Response:
 * {
 *   success: boolean,
 *   plans: Array<{
 *     id: string,
 *     name: string,
 *     description: string,
 *     price: number,
 *     duration: number,
 *     features: string[],
 *     allowedBookingsPerMonth: number,
 *     eLibraryAccess: boolean,
 *     maxBorrowedBooks: number,
 *     maxBorrowDuration: number
 *   }>
 * }
 */

/**
 * Create membership plan
 *
 * Path: /api/libraries/:id/membership-plans
 * Method: POST
 * Access: Admin (own library), Super Admin
 *
 * Request Body:
 * {
 *   name: string,
 *   description: string,
 *   price: number,
 *   duration: number,
 *   features: string[],
 *   allowedBookingsPerMonth: number,
 *   eLibraryAccess: boolean,
 *   maxBorrowedBooks: number,
 *   maxBorrowDuration: number
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   plan: {
 *     id: string,
 *     name: string
 *   }
 * }
 */

/**
 * Update membership plan
 *
 * Path: /api/membership-plans/:id
 * Method: PUT
 * Access: Admin (own library), Super Admin
 *
 * Request Body:
 * {
 *   name?: string,
 *   description?: string,
 *   price?: number,
 *   duration?: number,
 *   features?: string[],
 *   allowedBookingsPerMonth?: number,
 *   eLibraryAccess?: boolean,
 *   maxBorrowedBooks?: number,
 *   maxBorrowDuration?: number,
 *   isActive?: boolean
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   plan: {
 *     id: string,
 *     name: string
 *   }
 * }
 */

/**
 * Delete membership plan
 *
 * Path: /api/membership-plans/:id
 * Method: DELETE
 * Access: Admin (own library), Super Admin
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string
 * }
 */

/**
 * Get user memberships
 *
 * Path: /api/users/memberships
 * Method: GET
 * Access: Authenticated Users
 *
 * Response:
 * {
 *   success: boolean,
 *   memberships: Array<{
 *     id: string,
 *     startDate: string,
 *     endDate: string,
 *     status: string,
 *     autoRenew: boolean,
 *     library: {
 *       id: string,
 *       name: string
 *     },
 *     plan: {
 *       id: string,
 *       name: string,
 *       price: number,
 *       duration: number,
 *       features: string[]
 *     }
 *   }>
 * }
 */

/**
 * Purchase membership
 *
 * Path: /api/memberships/purchase
 * Method: POST
 * Access: Authenticated Users
 *
 * Request Body:
 * {
 *   libraryId: string,
 *   planId: string,
 *   paymentMethod: string,
 *   autoRenew?: boolean
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   membership: {
 *     id: string,
 *     startDate: string,
 *     endDate: string,
 *     status: string
 *   },
 *   payment: {
 *     id: string,
 *     amount: number,
 *     status: string,
 *     transactionId?: string
 *   }
 * }
 */

/**
 * Cancel membership
 *
 * Path: /api/memberships/:id/cancel
 * Method: POST
 * Access: Authenticated Users (own membership)
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string
 * }
 */

/**
 * Renew membership
 *
 * Path: /api/memberships/:id/renew
 * Method: POST
 * Access: Authenticated Users (own membership)
 *
 * Request Body:
 * {
 *   paymentMethod: string,
 *   autoRenew?: boolean
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   membership: {
 *     id: string,
 *     startDate: string,
 *     endDate: string,
 *     status: string
 *   },
 *   payment: {
 *     id: string,
 *     amount: number,
 *     status: string,
 *     transactionId?: string
 *   }
 * }
 */

// ==================== SEAT BOOKING ROUTES ====================

/**
 * Get library seats
 *
 * Path: /api/libraries/:id/seats
 * Method: GET
 * Access: Authenticated Users
 *
 * Query Parameters:
 * date?: string (YYYY-MM-DD)
 * type?: string
 * floor?: number
 * section?: string
 *
 * Response:
 * {
 *   success: boolean,
 *   seats: Array<{
 *     id: string,
 *     name: string,
 *     type: string,
 *     isAvailable: boolean,
 *     floor: number,
 *     section?: string,
 *     bookings?: Array<{
 *       id: string,
 *       startTime: string,
 *       endTime: string,
 *       date: string
 *     }>
 *   }>
 * }
 */

/**
 * Create seat
 *
 * Path: /api/libraries/:id/seats
 * Method: POST
 * Access: Admin (own library), Super Admin
 *
 * Request Body:
 * {
 *   name: string,
 *   type: string,
 *   floor: number,
 *   section?: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   seat: {
 *     id: string,
 *     name: string
 *   }
 * }
 */

/**
 * Update seat
 *
 * Path: /api/seats/:id
 * Method: PUT
 * Access: Admin (own library), Super Admin
 *
 * Request Body:
 * {
 *   name?: string,
 *   type?: string,
 *   isAvailable?: boolean,
 *   floor?: number,
 *   section?: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   seat: {
 *     id: string,
 *     name: string
 *   }
 * }
 */

/**
 * Delete seat
 *
 * Path: /api/seats/:id
 * Method: DELETE
 * Access: Admin (own library), Super Admin
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string
 * }
 */

/**
 * Get user seat bookings
 *
 * Path: /api/users/seat-bookings
 * Method: GET
 * Access: Authenticated Users
 *
 * Query Parameters:
 * status?: string
 * upcoming?: boolean
 * past?: boolean
 *
 * Response:
 * {
 *   success: boolean,
 *   bookings: Array<{
 *     id: string,
 *     date: string,
 *     startTime: string,
 *     endTime: string,
 *     status: string,
 *     seat: {
 *       id: string,
 *       name: string,
 *       type: string
 *     },
 *     library: {
 *       id: string,
 *       name: string
 *     }
 *   }>
 * }
 */

/**
 * Book a seat
 *
 * Path: /api/seat-bookings
 * Method: POST
 * Access: Authenticated Users (with active membership)
 *
 * Request Body:
 * {
 *   seatId: string,
 *   libraryId: string,
 *   date: string, // YYYY-MM-DD
 *   startTime: string, // HH:MM
 *   endTime: string // HH:MM
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   booking: {
 *     id: string,
 *     date: string,
 *     startTime: string,
 *     endTime: string,
 *     status: string
 *   }
 * }
 */

/**
 * Cancel seat booking
 *
 * Path: /api/seat-bookings/:id/cancel
 * Method: POST
 * Access: Authenticated Users (own booking), Admin (library bookings), Super Admin
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string
 * }
 */

/**
 * Get library seat bookings (admin)
 *
 * Path: /api/libraries/:id/seat-bookings
 * Method: GET
 * Access: Admin (own library), Super Admin
 *
 * Query Parameters:
 * date?: string (YYYY-MM-DD)
 * status?: string
 * seatId?: string
 *
 * Response:
 * {
 *   success: boolean,
 *   bookings: Array<{
 *     id: string,
 *     date: string,
 *     startTime: string,
 *     endTime: string,
 *     status: string,
 *     seat: {
 *       id: string,
 *       name: string,
 *       type: string
 *     },
 *     user: {
 *       id: string,
 *       name: string,
 *       email: string
 *     }
 *   }>
 * }
 */

/**
 * Create manual seat booking (admin)
 *
 * Path: /api/libraries/:id/seat-bookings
 * Method: POST
 * Access: Admin (own library), Super Admin
 *
 * Request Body:
 * {
 *   userId: string,
 *   seatId: string,
 *   date: string, // YYYY-MM-DD
 *   startTime: string, // HH:MM
 *   endTime: string // HH:MM
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   booking: {
 *     id: string,
 *     date: string,
 *     startTime: string,
 *     endTime: string,
 *     status: string
 *   }
 * }
 */

// ==================== BOOK ROUTES ====================

/**
 * Get physical books in a library
 *
 * Path: /api/libraries/:id/books
 * Method: GET
 * Access: Public
 *
 * Query Parameters:
 * page?: number
 * limit?: number
 * search?: string
 * category?: string
 * status?: string
 *
 * Response:
 * {
 *   success: boolean,
 *   books: Array<{
 *     id: string,
 *     title: string,
 *     author: string,
 *     isbn?: string,
 *     coverImage?: string,
 *     publishedYear?: number,
 *     pageCount?: number,
 *     status: string,
 *     category: {
 *       id: string,
 *       name: string
 *     }
 *   }>,
 *   pagination: {
 *     total: number,
 *     pages: number,
 *     page: number,
 *     limit: number
 *   }
 * }
 */

/**
 * Get physical book details
 *
 * Path: /api/books/:id
 * Method: GET
 * Access: Public
 *
 * Response:
 * {
 *   success: boolean,
 *   book: {
 *     id: string,
 *     title: string,
 *     author: string,
 *     isbn?: string,
 *     coverImage?: string,
 *     description?: string,
 *     publishedYear?: number,
 *     publisher?: string,
 *     pageCount?: number,
 *     language: string,
 *     genre: string[],
 *     tags: string[],
 *     status: string,
 *     location?: string,
 *     category: {
 *       id: string,
 *       name: string
 *     },
 *     library: {
 *       id: string,
 *       name: string
 *     },
 *     reviews: Array<{
 *       id: string,
 *       rating: number,
 *       comment?: string,
 *       user: {
 *         id: string,
 *         name: string
 *       }
 *     }>
 *   }
 * }
 */

/**
 * Add physical book
 *
 * Path: /api/libraries/:id/books
 * Method: POST
 * Access: Admin (own library), Super Admin
 *
 * Request Body:
 * {
 *   title: string,
 *   author: string,
 *   isbn?: string,
 *   description?: string,
 *   publishedYear?: number,
 *   publisher?: string,
 *   pageCount?: number,
 *   language?: string,
 *   genre?: string[],
 *   tags?: string[],
 *   location?: string,
 *   condition?: string,
 *   categoryId: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   book: {
 *     id: string,
 *     title: string
 *   }
 * }
 */

/**
 * Update physical book
 *
 * Path: /api/books/:id
 * Method: PUT
 * Access: Admin (own library), Super Admin
 *
 * Request Body:
 * {
 *   title?: string,
 *   author?: string,
 *   isbn?: string,
 *   description?: string,
 *   publishedYear?: number,
 *   publisher?: string,
 *   pageCount?: number,
 *   language?: string,
 *   genre?: string[],
 *   tags?: string[],
 *   location?: string,
 *   status?: string,
 *   condition?: string,
 *   categoryId?: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   book: {
 *     id: string,
 *     title: string
 *   }
 * }
 */

/**
 * Upload book cover image
 *
 * Path: /api/books/:id/cover
 * Method: POST
 * Access: Admin (own library), Super Admin
 *
 * Request Body: FormData with 'cover' file
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   coverUrl?: string
 * }
 */

/**
 * Delete physical book
 *
 * Path: /api/books/:id
 * Method: DELETE
 * Access: Admin (own library), Super Admin
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string
 * }
 */

/**
 * Get book categories
 *
 * Path: /api/book-categories
 * Method: GET
 * Access: Public
 *
 * Response:
 * {
 *   success: boolean,
 *   categories: Array<{
 *     id: string,
 *     name: string,
 *     description?: string
 *   }>
 * }
 */

/**
 * Create book category
 *
 * Path: /api/book-categories
 * Method: POST
 * Access: Admin, Super Admin
 *
 * Request Body:
 * {
 *   name: string,
 *   description?: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   category: {
 *     id: string,
 *     name: string
 *   }
 * }
 */

// ==================== BOOK BORROWING ROUTES ====================

/**
 * Get user borrowed books
 *
 * Path: /api/users/borrowed-books
 * Method: GET
 * Access: Authenticated Users
 *
 * Query Parameters:
 * status?: string
 *
 * Response:
 * {
 *   success: boolean,
 *   borrowings: Array<{
 *     id: string,
 *     borrowDate: string,
 *     dueDate: string,
 *     returnDate?: string,
 *     status: string,
 *     penalty?: number,
 *     penaltyPaid: boolean,
 *     book: {
 *       id: string,
 *       title: string,
 *       author: string,
 *       coverImage?: string
 *     },
 *     library: {
 *       id: string,
 *       name: string
 *     }
 *   }>
 * }
 */

/**
 * Borrow a book
 *
 * Path: /api/books/:id/borrow
 * Method: POST
 * Access: Authenticated Users (with active membership)
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   borrowing: {
 *     id: string,
 *     borrowDate: string,
 *     dueDate: string,
 *     status: string
 *   }
 * }
 */

/**
 * Return a book
 *
 * Path: /api/book-borrowings/:id/return
 * Method: POST
 * Access: Authenticated Users (own borrowing), Admin (library borrowings), Super Admin
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   penalty?: number
 * }
 */

/**
 * Extend due date
 *
 * Path: /api/book-borrowings/:id/extend
 * Method: POST
 * Access: Authenticated Users (own borrowing), Admin (library borrowings), Super Admin
 *
 * Request Body:
 * {
 *   days: number
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   newDueDate: string
 * }
 */

/**
 * Apply penalty
 *
 * Path: /api/book-borrowings/:id/penalty
 * Method: POST
 * Access: Admin (library borrowings), Super Admin
 *
 * Request Body:
 * {
 *   amount: number
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   penalty: number
 * }
 */

/**
 * Pay penalty
 *
 * Path: /api/book-borrowings/:id/pay-penalty
 * Method: POST
 * Access: Authenticated Users (own borrowing)
 *
 * Request Body:
 * {
 *   paymentMethod: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   payment: {
 *     id: string,
 *     amount: number,
 *     status: string
 *   }
 * }
 */

/**
 * Get library borrowings (admin)
 *
 * Path: /api/libraries/:id/borrowings
 * Method: GET
 * Access: Admin (own library), Super Admin
 *
 * Query Parameters:
 * status?: string
 * overdue?: boolean
 * search?: string
 *
 * Response:
 * {
 *   success: boolean,
 *   borrowings: Array<{
 *     id: string,
 *     borrowDate: string,
 *     dueDate: string,
 *     returnDate?: string,
 *     status: string,
 *     penalty?: number,
 *     penaltyPaid: boolean,
 *     book: {
 *       id: string,
 *       title: string,
 *       author: string
 *     },
 *     user: {
 *       id: string,
 *       name: string,
 *       email: string
 *     }
 *   }>
 * }
 */

// ==================== E-BOOK ROUTES ====================

/**
 * Get all e-books
 *
 * Path: /api/ebooks
 * Method: GET
 * Access: Authenticated Users
 *
 * Query Parameters:
 * page?: number
 * limit?: number
 * search?: string
 * category?: string
 * premium?: boolean
 *
 * Response:
 * {
 *   success: boolean,
 *   ebooks: Array<{
 *     id: string,
 *     title: string,
 *     author: string,
 *     coverImage?: string,
 *     publishedYear?: number,
 *     pageCount?: number,
 *     isPremium: boolean,
 *     category: {
 *       id: string,
 *       name: string
 *     }
 *   }>,
 *   pagination: {
 *     total: number,
 *     pages: number,
 *     page: number,
 *     limit: number
 *   }
 * }
 */

/**
 * Get e-book details
 *
 * Path: /api/ebooks/:id
 * Method: GET
 * Access: Authenticated Users
 *
 * Response:
 * {
 *   success: boolean,
 *   ebook: {
 *     id: string,
 *     title: string,
 *     author: string,
 *     isbn?: string,
 *     coverImage?: string,
 *     description?: string,
 *     publishedYear?: number,
 *     publisher?: string,
 *     pageCount?: number,
 *     language: string,
 *     genre: string[],
 *     tags: string[],
 *     fileFormat: string,
 *     fileSize: number,
 *     isPremium: boolean,
 *     category: {
 *       id: string,
 *       name: string
 *     },
 *     hasAccess: boolean,
 *     reviews: Array<{
 *       id: string,
 *       rating: number,
 *       comment?: string,
 *       user: {
 *         id: string,
 *         name: string
 *       }
 *     }>
 *   }
 * }
 */

/**
 * Add e-book (super-admin)
 *
 * Path: /api/ebooks
 * Method: POST
 * Access: Super Admin
 *
 * Request Body:
 * {
 *   title: string,
 *   author: string,
 *   isbn?: string,
 *   description?: string,
 *   publishedYear?: number,
 *   publisher?: string,
 *   pageCount?: number,
 *   language?: string,
 *   genre?: string[],
 *   tags?: string[],
 *   fileFormat: string,
 *   isPremium: boolean,
 *   categoryId: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   ebook: {
 *     id: string,
 *     title: string
 *   }
 * }
 */

/**
 * Upload e-book file
 *
 * Path: /api/ebooks/:id/file
 * Method: POST
 * Access: Super Admin
 *
 * Request Body: FormData with 'file' file
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   fileUrl?: string,
 *   fileSize?: number
 * }
 */

/**
 * Update e-book
 *
 * Path: /api/ebooks/:id
 * Method: PUT
 * Access: Super Admin
 *
 * Request Body:
 * {
 *   title?: string,
 *   author?: string,
 *   isbn?: string,
 *   description?: string,
 *   publishedYear?: number,
 *   publisher?: string,
 *   pageCount?: number,
 *   language?: string,
 *   genre?: string[],
 *   tags?: string[],
 *   fileFormat?: string,
 *   isPremium?: boolean,
 *   isActive?: boolean,
 *   categoryId?: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   ebook: {
 *     id: string,
 *     title: string
 *   }
 * }
 */

/**
 * Access e-book
 *
 * Path: /api/ebooks/:id/access
 * Method: POST
 * Access: Authenticated Users (with e-library access)
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   access: {
 *     id: string,
 *     fileUrl: string,
 *     startDate: string,
 *     endDate: string
 *   }
 * }
 */

/**
 * Get e-book content
 *
 * Path: /api/ebooks/:id/content
 * Method: GET
 * Access: Authenticated Users (with access to the e-book)
 *
 * Response:
 * {
 *   success: boolean,
 *   content: {
 *     fileUrl: string,
 *     lastReadPage?: number
 *   }
 * }
 */

/**
 * Update reading progress
 *
 * Path: /api/ebooks/:id/progress
 * Method: POST
 * Access: Authenticated Users (with access to the e-book)
 *
 * Request Body:
 * {
 *   page: number,
 *   isCompleted?: boolean
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   progress: {
 *     lastReadPage: number,
 *     isCompleted: boolean
 *   }
 * }
 */

/**
 * Add bookmark
 *
 * Path: /api/ebooks/:id/bookmarks
 * Method: POST
 * Access: Authenticated Users (with access to the e-book)
 *
 * Request Body:
 * {
 *   page: number,
 *   position?: string,
 *   title?: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   bookmark: {
 *     id: string,
 *     page: number,
 *     title?: string
 *   }
 * }
 */

/**
 * Get bookmarks
 *
 * Path: /api/ebooks/:id/bookmarks
 * Method: GET
 * Access: Authenticated Users (with access to the e-book)
 *
 * Response:
 * {
 *   success: boolean,
 *   bookmarks: Array<{
 *     id: string,
 *     page: number,
 *     position?: string,
 *     title?: string,
 *     createdAt: string
 *   }>
 * }
 */

/**
 * Add note
 *
 * Path: /api/ebooks/:id/notes
 * Method: POST
 * Access: Authenticated Users (with access to the e-book)
 *
 * Request Body:
 * {
 *   page: number,
 *   content: string,
 *   color?: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   note: {
 *     id: string,
 *     page: number,
 *     content: string
 *   }
 * }
 */

/**
 * Get notes
 *
 * Path: /api/ebooks/:id/notes
 * Method: GET
 * Access: Authenticated Users (with access to the e-book)
 *
 * Response:
 * {
 *   success: boolean,
 *   notes: Array<{
 *     id: string,
 *     page: number,
 *     content: string,
 *     color?: string,
 *     createdAt: string
 *   }>
 * }
 */

// ==================== FORUM ROUTES ====================

/**
 * Get forum categories
 *
 * Path: /api/forum/categories
 * Method: GET
 * Access: Public
 *
 * Response:
 * {
 *   success: boolean,
 *   categories: Array<{
 *     id: string,
 *     name: string,
 *     description?: string,
 *     icon?: string,
 *     postCount: number
 *   }>
 * }
 */

/**
 * Get forum posts
 *
 * Path: /api/forum/posts
 * Method: GET
 * Access: Public
 *
 * Query Parameters:
 * page?: number
 * limit?: number
 * category?: string
 * search?: string
 *
 * Response:
 * {
 *   success: boolean,
 *   posts: Array<{
 *     id: string,
 *     title: string,
 *     content: string,
 *     isPinned: boolean,
 *     viewCount: number,
 *     likeCount: number,
 *     commentCount: number,
 *     createdAt: string,
 *     author: {
 *       id: string,
 *       name: string,
 *       avatar?: string
 *     },
 *     category: {
 *       id: string,
 *       name: string
 *     }
 *   }>,
 *   pagination: {
 *     total: number,
 *     pages: number,
 *     page: number,
 *     limit: number
 *   }
 * }
 */

/**
 * Get forum post details
 *
 * Path: /api/forum/posts/:id
 * Method: GET
 * Access: Public
 *
 * Response:
 * {
 *   success: boolean,
 *   post: {
 *     id: string,
 *     title: string,
 *     content: string,
 *     isPinned: boolean,
 *     isLocked: boolean,
 *     viewCount: number,
 *     likeCount: number,
 *     commentCount: number,
 *     createdAt: string,
 *     updatedAt: string,
 *     author: {
 *       id: string,
 *       name: string,
 *       avatar?: string
 *     },
 *     category: {
 *       id: string,
 *       name: string
 *     },
 *     comments: Array<{
 *       id: string,
 *       content: string,
 *       likeCount: number,
 *       createdAt: string,
 *       author: {
 *         id: string,
 *         name: string,
 *         avatar?: string
 *       }
 *     }>
 *   }
 * }
 */

/**
 * Create forum post
 *
 * Path: /api/forum/posts
 * Method: POST
 * Access: Authenticated Users
 *
 * Request Body:
 * {
 *   title: string,
 *   content: string,
 *   categoryId: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   post: {
 *     id: string,
 *     title: string
 *   }
 * }
 */

/**
 * Add comment to post
 *
 * Path: /api/forum/posts/:id/comments
 * Method: POST
 * Access: Authenticated Users
 *
 * Request Body:
 * {
 *   content: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   comment: {
 *     id: string,
 *     content: string,
 *     createdAt: string
 *   }
 * }
 */

// ==================== STUDY TOOLS ROUTES ====================

/**
 * Get user study sessions
 *
 * Path: /api/study/sessions
 * Method: GET
 * Access: Authenticated Users
 *
 * Query Parameters:
 * startDate?: string (YYYY-MM-DD)
 * endDate?: string (YYYY-MM-DD)
 *
 * Response:
 * {
 *   success: boolean,
 *   sessions: Array<{
 *     id: string,
 *     date: string,
 *     startTime: string,
 *     endTime: string,
 *     duration: number,
 *     subject: string,
 *     notes?: string,
 *     createdAt: string
 *   }>
 * }
 */

/**
 * Create study session
 *
 * Path: /api/study/sessions
 * Method: POST
 * Access: Authenticated Users
 *
 * Request Body:
 * {
 *   date: string, // YYYY-MM-DD
 *   startTime: string, // HH:MM
 *   endTime: string, // HH:MM
 *   subject: string,
 *   notes?: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   session: {
 *     id: string,
 *     date: string,
 *     duration: number
 *   }
 * }
 */

/**
 * Get user tasks
 *
 * Path: /api/study/tasks
 * Method: GET
 * Access: Authenticated Users
 *
 * Query Parameters:
 * status?: string
 * priority?: string
 *
 * Response:
 * {
 *   success: boolean,
 *   tasks: Array<{
 *     id: string,
 *     title: string,
 *     description?: string,
 *     dueDate?: string,
 *     priority: string,
 *     status: string,
 *     createdAt: string
 *   }>
 * }
 */

/**
 * Create task
 *
 * Path: /api/study/tasks
 * Method: POST
 * Access: Authenticated Users
 *
 * Request Body:
 * {
 *   title: string,
 *   description?: string,
 *   dueDate?: string, // YYYY-MM-DD
 *   priority?: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   task: {
 *     id: string,
 *     title: string
 *   }
 * }
 */

/**
 * Update task status
 *
 * Path: /api/study/tasks/:id/status
 * Method: PUT
 * Access: Authenticated Users (own task)
 *
 * Request Body:
 * {
 *   status: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   task: {
 *     id: string,
 *     status: string
 *   }
 * }
 */

/**
 * Get user habits
 *
 * Path: /api/study/habits
 * Method: GET
 * Access: Authenticated Users
 *
 * Response:
 * {
 *   success: boolean,
 *   habits: Array<{
 *     id: string,
 *     title: string,
 *     description?: string,
 *     frequency: string,
 *     timeOfDay: string,
 *     streak: number,
 *     completionHistory: Array<{
 *       date: string,
 *       completed: boolean
 *     }>
 *   }>
 * }
 */

/**
 * Create habit
 *
 * Path: /api/study/habits
 * Method: POST
 * Access: Authenticated Users
 *
 * Request Body:
 * {
 *   title: string,
 *   description?: string,
 *   frequency: string,
 *   timeOfDay: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   habit: {
 *     id: string,
 *     title: string
 *   }
 * }
 */

/**
 * Mark habit as completed
 *
 * Path: /api/study/habits/:id/complete
 * Method: POST
 * Access: Authenticated Users (own habit)
 *
 * Request Body:
 * {
 *   date: string, // YYYY-MM-DD
 *   completed: boolean
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   streak: number
 * }
 */

/**
 * Get user study streak
 *
 * Path: /api/study/streak
 * Method: GET
 * Access: Authenticated Users
 *
 * Response:
 * {
 *   success: boolean,
 *   streak: {
 *     currentStreak: number,
 *     longestStreak: number,
 *     totalStudyDays: number,
 *     totalStudyHours: number,
 *     dailyGoalHours: number,
 *     streakHistory: Array<{
 *       date: string,
 *       hours: number,
 *       goalMet: boolean
 *     }>
 *   }
 * }
 */

// ==================== PAYMENT ROUTES ====================

/**
 * Get user payments
 *
 * Path: /api/payments
 * Method: GET
 * Access: Authenticated Users
 *
 * Query Parameters:
 * type?: string
 * status?: string
 *
 * Response:
 * {
 *   success: boolean,
 *   payments: Array<{
 *     id: string,
 *     amount: number,
 *     currency: string,
 *     type: string,
 *     status: string,
 *     paymentMethod?: string,
 *     transactionId?: string,
 *     receiptUrl?: string,
 *     createdAt: string,
 *     membership?: {
 *       id: string,
 *       library: {
 *         id: string,
 *         name: string
 *       },
 *       plan: {
 *         id: string,
 *         name: string
 *       }
 *     },
 *     seatBooking?: {
 *       id: string,
 *       date: string,
 *       startTime: string,
 *       endTime: string
 *     },
 *     bookBorrowing?: {
 *       id: string,
 *       book: {
 *         id: string,
 *         title: string
 *       }
 *     },
 *     eBookAccess?: {
 *       id: string,
 *       eBook: {
 *         id: string,
 *         title: string
 *       }
 *     }
 *   }>
 * }
 */

/**
 * Get library payments (admin)
 *
 * Path: /api/libraries/:id/payments
 * Method: GET
 * Access: Admin (own library), Super Admin
 *
 * Query Parameters:
 * type?: string
 * status?: string
 * startDate?: string (YYYY-MM-DD)
 * endDate?: string (YYYY-MM-DD)
 *
 * Response:
 * {
 *   success: boolean,
 *   payments: Array<{
 *     id: string,
 *     amount: number,
 *     currency: string,
 *     type: string,
 *     status: string,
 *     paymentMethod?: string,
 *     transactionId?: string,
 *     createdAt: string,
 *     user: {
 *       id: string,
 *       name: string,
 *       email: string
 *     }
 *   }>,
 *   summary: {
 *     total: number,
 *     completed: number,
 *     pending: number,
 *     failed: number,
 *     totalAmount: number
 *   }
 * }
 */

/**
 * Get all payments (super-admin)
 *
 * Path: /api/admin/payments
 * Method: GET
 * Access: Super Admin
 *
 * Query Parameters:
 * type?: string
 * status?: string
 * startDate?: string (YYYY-MM-DD)
 * endDate?: string (YYYY-MM-DD)
 * libraryId?: string
 *
 * Response:
 * {
 *   success: boolean,
 *   payments: Array<{
 *     id: string,
 *     amount: number,
 *     currency: string,
 *     type: string,
 *     status: string,
 *     paymentMethod?: string,
 *     transactionId?: string,
 *     createdAt: string,
 *     user: {
 *       id: string,
 *       name: string,
 *       email: string
 *     },
 *     library?: {
 *       id: string,
 *       name: string
 *     }
 *   }>,
 *   summary: {
 *     total: number,
 *     completed: number,
 *     pending: number,
 *     failed: number,
 *     totalAmount: number,
 *     byType: {
 *       membership: number,
 *       seatBooking: number,
 *       penalty: number,
 *       ebook: number,
 *       other: number
 *     }
 *   }
 * }
 */

// ==================== NOTIFICATION ROUTES ====================

/**
 * Get user notifications
 *
 * Path: /api/notifications
 * Method: GET
 * Access: Authenticated Users
 *
 * Query Parameters:
 * unread?: boolean
 *
 * Response:
 * {
 *   success: boolean,
 *   notifications: Array<{
 *     id: string,
 *     title: string,
 *     message: string,
 *     type: string,
 *     isRead: boolean,
 *     createdAt: string
 *   }>
 * }
 */

/**
 * Mark notification as read
 *
 * Path: /api/notifications/:id/read
 * Method: PUT
 * Access: Authenticated Users (own notification)
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string
 * }
 */

/**
 * Mark all notifications as read
 *
 * Path: /api/notifications/read-all
 * Method: PUT
 * Access: Authenticated Users
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string
 * }
 */

/**
 * Send notification (admin)
 *
 * Path: /api/admin/notifications
 * Method: POST
 * Access: Admin, Super Admin
 *
 * Request Body:
 * {
 *   title: string,
 *   message: string,
 *   type?: string,
 *   userIds?: string[], // If empty, send to all users
 *   libraryId?: string // For library-specific notifications
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   sentCount: number
 * }
 */

// ==================== REPORT ROUTES ====================

/**
 * Get library reports (admin)
 *
 * Path: /api/libraries/:id/reports
 * Method: GET
 * Access: Admin (own library), Super Admin
 *
 * Query Parameters:
 * type: string (members|bookings|borrowings|revenue)
 * period: string (daily|weekly|monthly|yearly)
 * startDate?: string (YYYY-MM-DD)
 * endDate?: string (YYYY-MM-DD)
 *
 * Response:
 * {
 *   success: boolean,
 *   report: {
 *     type: string,
 *     period: string,
 *     startDate: string,
 *     endDate: string,
 *     data: Array<{
 *       date: string,
 *       value: number,
 *       label?: string
 *     }>,
 *     summary: {
 *       total: number,
 *       average: number,
 *       min: number,
 *       max: number,
 *       change: number // Percentage change from previous period
 *     }
 *   }
 * }
 */

/**
 * Get platform reports (super-admin)
 *
 * Path: /api/admin/reports
 * Method: GET
 * Access: Super Admin
 *
 * Query Parameters:
 * type: string (libraries|members|revenue|activity)
 * period: string (daily|weekly|monthly|yearly)
 * startDate?: string (YYYY-MM-DD)
 * endDate?: string (YYYY-MM-DD)
 *
 * Response:
 * {
 *   success: boolean,
 *   report: {
 *     type: string,
 *     period: string,
 *     startDate: string,
 *     endDate: string,
 *     data: Array<{
 *       date: string,
 *       value: number,
 *       label?: string
 *     }>,
 *     summary: {
 *       total: number,
 *       average: number,
 *       min: number,
 *       max: number,
 *       change: number // Percentage change from previous period
 *     },
 *     breakdown?: {
 *       [key: string]: number // For example, revenue by type
 *     }
 *   }
 * }
 */

/**
 * Get library performance report (super-admin)
 *
 * Path: /api/admin/reports/library-performance
 * Method: GET
 * Access: Super Admin
 *
 * Query Parameters:
 * period: string (monthly|quarterly|yearly)
 * metric: string (revenue|members|utilization|activity)
 *
 * Response:
 * {
 *   success: boolean,
 *   report: {
 *     period: string,
 *     metric: string,
 *     libraries: Array<{
 *       id: string,
 *       name: string,
 *       value: number,
 *       change: number, // Percentage change from previous period
 *       rank: number
 *     }>
 *   }
 * }
 */

// ==================== MAINTENANCE ROUTES ====================

/**
 * Get library maintenance records
 *
 * Path: /api/libraries/:id/maintenance
 * Method: GET
 * Access: Admin (own library), Super Admin
 *
 * Query Parameters:
 * status?: string
 * priority?: string
 *
 * Response:
 * {
 *   success: boolean,
 *   records: Array<{
 *     id: string,
 *     title: string,
 *     description: string,
 *     status: string,
 *     priority: string,
 *     scheduledDate?: string,
 *     completedDate?: string,
 *     cost?: number,
 *     notes?: string,
 *     createdAt: string
 *   }>
 * }
 */

/**
 * Create maintenance record
 *
 * Path: /api/libraries/:id/maintenance
 * Method: POST
 * Access: Admin (own library), Super Admin
 *
 * Request Body:
 * {
 *   title: string,
 *   description: string,
 *   priority?: string,
 *   scheduledDate?: string, // YYYY-MM-DD
 *   cost?: number,
 *   notes?: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   record: {
 *     id: string,
 *     title: string
 *   }
 * }
 */

/**
 * Update maintenance record status
 *
 * Path: /api/maintenance/:id/status
 * Method: PUT
 * Access: Admin (own library), Super Admin
 *
 * Request Body:
 * {
 *   status: string,
 *   completedDate?: string, // YYYY-MM-DD (required if status is COMPLETED)
 *   notes?: string
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   record: {
 *     id: string,
 *     status: string
 *   }
 * }
 */
