/**
 * Library Management System API Documentation
 *
 * This file contains detailed API documentation with mock request and response data
 * for demonstration purposes.
 */

// ==================== AUTHENTICATION ROUTES ====================

/**
 * Register a new user
 *
 * Path: /api/auth/register
 * Method: POST
 * Access: Public
 *
 * Request Body Example:
 * {
 *   "name": "John Doe",
 *   "email": "john.doe@example.com",
 *   "password": "securePassword123",
 *   "confirmPassword": "securePassword123"
 * }
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "message": "User registered successfully",
 *   "user": {
 *     "id": "user-123456",
 *     "name": "John Doe",
 *     "email": "john.doe@example.com",
 *     "role": "member",
 *     "createdAt": "2023-05-17T11:28:46.000Z"
 *   }
 * }
 *
 * Error Response Example (400 Bad Request):
 * {
 *   "success": false,
 *   "message": "Email already in use"
 * }
 */

/**
 * Login user
 *
 * Path: /api/auth/login
 * Method: POST
 * Access: Public
 *
 * Request Body Example:
 * {
 *   "email": "john.doe@example.com",
 *   "password": "securePassword123"
 * }
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "message": "Login successful",
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
 *   "user": {
 *     "id": "user-123456",
 *     "name": "John Doe",
 *     "email": "john.doe@example.com",
 *     "role": "member",
 *     "avatar": "/placeholder.svg?height=40&width=40",
 *     "membership": {
 *       "planId": "plan-1",
 *       "planName": "Premium",
 *       "status": "active",
 *       "expiresAt": "2024-12-31T00:00:00Z"
 *     }
 *   }
 * }
 *
 * Error Response Example (401 Unauthorized):
 * {
 *   "success": false,
 *   "message": "Invalid credentials"
 * }
 */

/**
 * Get current user
 *
 * Path: /api/auth/me
 * Method: GET
 * Access: Authenticated Users
 * Headers: Authorization: Bearer {token}
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "user": {
 *     "id": "user-123456",
 *     "name": "John Doe",
 *     "email": "john.doe@example.com",
 *     "role": "member",
 *     "avatar": "/placeholder.svg?height=40&width=40",
 *     "membership": {
 *       "planId": "plan-1",
 *       "planName": "Premium",
 *       "status": "active",
 *       "expiresAt": "2024-12-31T00:00:00Z"
 *     }
 *   }
 * }
 *
 * Error Response Example (401 Unauthorized):
 * {
 *   "success": false,
 *   "message": "Not authorized, token failed"
 * }
 */

// ==================== USER ROUTES ====================

/**
 * Get all users (admin/super-admin)
 *
 * Path: /api/users
 * Method: GET
 * Access: Admin, Super Admin
 * Headers: Authorization: Bearer {token}
 *
 * Query Parameters:
 * page: number (default: 1)
 * limit: number (default: 10)
 * search: string (optional)
 * role: string (optional)
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "users": [
 *     {
 *       "id": "user-123456",
 *       "name": "John Doe",
 *       "email": "john.doe@example.com",
 *       "role": "member",
 *       "createdAt": "2023-01-15T00:00:00Z",
 *       "membership": {
 *         "status": "active"
 *       }
 *     },
 *     {
 *       "id": "user-789012",
 *       "name": "Jane Smith",
 *       "email": "jane.smith@example.com",
 *       "role": "member",
 *       "createdAt": "2023-02-20T00:00:00Z",
 *       "membership": {
 *         "status": "expired"
 *       }
 *     },
 *     {
 *       "id": "user-345678",
 *       "name": "Alice Admin",
 *       "email": "alice.admin@example.com",
 *       "role": "admin",
 *       "createdAt": "2022-11-05T00:00:00Z"
 *     }
 *   ],
 *   "pagination": {
 *     "total": 25,
 *     "pages": 3,
 *     "page": 1,
 *     "limit": 10
 *   }
 * }
 *
 * Error Response Example (403 Forbidden):
 * {
 *   "success": false,
 *   "message": "Not authorized as an admin"
 * }
 */

/**
 * Update user (admin/super-admin)
 *
 * Path: /api/users/:id
 * Method: PUT
 * Access: Admin, Super Admin
 * Headers: Authorization: Bearer {token}
 *
 * Request Body Example:
 * {
 *   "name": "John Updated",
 *   "email": "john.updated@example.com",
 *   "role": "admin"
 * }
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "message": "User updated successfully",
 *   "user": {
 *     "id": "user-123456",
 *     "name": "John Updated",
 *     "email": "john.updated@example.com",
 *     "role": "admin"
 *   }
 * }
 *
 * Error Response Example (404 Not Found):
 * {
 *   "success": false,
 *   "message": "User not found"
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
 * page: number (default: 1)
 * limit: number (default: 10)
 * search: string (optional)
 * amenities: string (comma-separated, optional)
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "libraries": [
 *     {
 *       "id": "lib-1",
 *       "name": "Central Library",
 *       "description": "A spacious library with modern amenities and a vast collection of books.",
 *       "address": "123 Main St, New York, NY 10001",
 *       "images": [
 *         "/placeholder.svg?height=400&width=600",
 *         "/placeholder.svg?height=400&width=600"
 *       ],
 *       "rating": 4.7,
 *       "reviewCount": 120,
 *       "amenities": ["wifi", "ac", "cafe", "power_outlets", "quiet_zones", "meeting_rooms"],
 *       "totalSeats": 50,
 *       "availableSeats": 35
 *     },
 *     {
 *       "id": "lib-2",
 *       "name": "Riverside Reading Hub",
 *       "description": "A cozy library with a beautiful view of the river and a friendly atmosphere.",
 *       "address": "456 River Rd, Boston, MA 02108",
 *       "images": [
 *         "/placeholder.svg?height=400&width=600"
 *       ],
 *       "rating": 4.5,
 *       "reviewCount": 85,
 *       "amenities": ["wifi", "ac", "quiet_zones", "power_outlets"],
 *       "totalSeats": 30,
 *       "availableSeats": 22
 *     }
 *   ],
 *   "pagination": {
 *     "total": 3,
 *     "pages": 1,
 *     "page": 1,
 *     "limit": 10
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
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "library": {
 *     "id": "lib-1",
 *     "name": "Central Library",
 *     "description": "A spacious library with modern amenities and a vast collection of books.",
 *     "address": "123 Main St, New York, NY 10001",
 *     "city": "New York",
 *     "state": "NY",
 *     "country": "USA",
 *     "postalCode": "10001",
 *     "email": "contact@centrallibrary.com",
 *     "phone": "+1 (555) 123-4567",
 *     "website": "https://centrallibrary.com",
 *     "images": [
 *       "/placeholder.svg?height=400&width=600",
 *       "/placeholder.svg?height=400&width=600"
 *     ],
 *     "rating": 4.7,
 *     "reviewCount": 120,
 *     "amenities": ["wifi", "ac", "cafe", "power_outlets", "quiet_zones", "meeting_rooms"],
 *     "totalSeats": 50,
 *     "availableSeats": 35,
 *     "openingHours": {
 *       "monday": { "open": "08:00", "close": "20:00", "isClosed": false },
 *       "tuesday": { "open": "08:00", "close": "20:00", "isClosed": false },
 *       "wednesday": { "open": "08:00", "close": "20:00", "isClosed": false },
 *       "thursday": { "open": "08:00", "close": "20:00", "isClosed": false },
 *       "friday": { "open": "08:00", "close": "20:00", "isClosed": false },
 *       "saturday": { "open": "10:00", "close": "18:00", "isClosed": false },
 *       "sunday": { "open": "10:00", "close": "16:00", "isClosed": false }
 *     },
 *     "membershipPlans": [
 *       {
 *         "id": "plan-1",
 *         "name": "Basic",
 *         "price": 999,
 *         "duration": 30,
 *         "features": ["Access to library", "2 seat bookings per month", "Basic e-library access"],
 *         "allowedBookingsPerMonth": 2,
 *         "eLibraryAccess": true
 *       },
 *       {
 *         "id": "plan-2",
 *         "name": "Premium",
 *         "price": 1999,
 *         "duration": 30,
 *         "features": [
 *           "Access to library",
 *           "10 seat bookings per month",
 *           "Full e-library access",
 *           "Access to meeting rooms"
 *         ],
 *         "allowedBookingsPerMonth": 10,
 *         "eLibraryAccess": true
 *       }
 *     ]
 *   }
 * }
 *
 * Error Response Example (404 Not Found):
 * {
 *   "success": false,
 *   "message": "Library not found"
 * }
 */

/**
 * Create library (super-admin)
 *
 * Path: /api/libraries
 * Method: POST
 * Access: Super Admin
 * Headers: Authorization: Bearer {token}
 *
 * Request Body Example:
 * {
 *   "name": "Tech Innovation Library",
 *   "description": "A modern library focused on technology and innovation resources.",
 *   "address": "789 Tech Blvd, San Francisco, CA 94105",
 *   "city": "San Francisco",
 *   "state": "CA",
 *   "country": "USA",
 *   "postalCode": "94105",
 *   "email": "contact@techlibrary.com",
 *   "phone": "+1 (555) 987-6543",
 *   "website": "https://techlibrary.com",
 *   "amenities": ["wifi", "ac", "cafe", "power_outlets", "quiet_zones", "meeting_rooms", "computers"],
 *   "totalSeats": 80,
 *   "adminId": "user-345678",
 *   "openingHours": {
 *     "monday": { "open": "08:00", "close": "22:00", "isClosed": false },
 *     "tuesday": { "open": "08:00", "close": "22:00", "isClosed": false },
 *     "wednesday": { "open": "08:00", "close": "22:00", "isClosed": false },
 *     "thursday": { "open": "08:00", "close": "22:00", "isClosed": false },
 *     "friday": { "open": "08:00", "close": "22:00", "isClosed": false },
 *     "saturday": { "open": "09:00", "close": "20:00", "isClosed": false },
 *     "sunday": { "open": "09:00", "close": "18:00", "isClosed": false }
 *   }
 * }
 *
 * Success Response Example (201 Created):
 * {
 *   "success": true,
 *   "message": "Library created successfully",
 *   "library": {
 *     "id": "lib-4",
 *     "name": "Tech Innovation Library"
 *   }
 * }
 *
 * Error Response Example (403 Forbidden):
 * {
 *   "success": false,
 *   "message": "Not authorized as a super admin"
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
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "plans": [
 *     {
 *       "id": "plan-1",
 *       "name": "Basic",
 *       "description": "Basic membership with limited features",
 *       "price": 999,
 *       "duration": 30,
 *       "features": ["Access to library", "2 seat bookings per month", "Basic e-library access"],
 *       "allowedBookingsPerMonth": 2,
 *       "eLibraryAccess": true,
 *       "maxBorrowedBooks": 3,
 *       "maxBorrowDuration": 14
 *     },
 *     {
 *       "id": "plan-2",
 *       "name": "Premium",
 *       "description": "Premium membership with all features",
 *       "price": 1999,
 *       "duration": 30,
 *       "features": [
 *         "Access to library",
 *         "10 seat bookings per month",
 *         "Full e-library access",
 *         "Access to meeting rooms"
 *       ],
 *       "allowedBookingsPerMonth": 10,
 *       "eLibraryAccess": true,
 *       "maxBorrowedBooks": 10,
 *       "maxBorrowDuration": 30
 *     }
 *   ]
 * }
 *
 * Error Response Example (404 Not Found):
 * {
 *   "success": false,
 *   "message": "Library not found"
 * }
 */

/**
 * Purchase membership
 *
 * Path: /api/memberships/purchase
 * Method: POST
 * Access: Authenticated Users
 * Headers: Authorization: Bearer {token}
 *
 * Request Body Example:
 * {
 *   "libraryId": "lib-1",
 *   "planId": "plan-2",
 *   "paymentMethod": "credit_card",
 *   "autoRenew": true
 * }
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "message": "Membership purchased successfully",
 *   "membership": {
 *     "id": "mem-123456",
 *     "startDate": "2023-05-17T11:28:46.000Z",
 *     "endDate": "2023-06-16T11:28:46.000Z",
 *     "status": "active"
 *   },
 *   "payment": {
 *     "id": "pay-123456",
 *     "amount": 1999,
 *     "status": "successful",
 *     "transactionId": "txn_123456789"
 *   }
 * }
 *
 * Error Response Example (400 Bad Request):
 * {
 *   "success": false,
 *   "message": "Payment failed"
 * }
 */

// ==================== SEAT BOOKING ROUTES ====================

/**
 * Get library seats
 *
 * Path: /api/libraries/:id/seats
 * Method: GET
 * Access: Authenticated Users
 * Headers: Authorization: Bearer {token}
 *
 * Query Parameters:
 * date: string (YYYY-MM-DD, optional)
 * type: string (optional)
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "seats": [
 *     {
 *       "id": "seat-lib1-1",
 *       "name": "Seat 1",
 *       "type": "quiet_zone",
 *       "isAvailable": true,
 *       "floor": 1,
 *       "section": "A"
 *     },
 *     {
 *       "id": "seat-lib1-2",
 *       "name": "Seat 2",
 *       "type": "regular",
 *       "isAvailable": false,
 *       "floor": 1,
 *       "section": "A",
 *       "bookings": [
 *         {
 *           "id": "booking-1",
 *           "startTime": "10:00",
 *           "endTime": "14:00",
 *           "date": "2023-05-19"
 *         }
 *       ]
 *     },
 *     {
 *       "id": "seat-lib1-3",
 *       "name": "Seat 3",
 *       "type": "computer",
 *       "isAvailable": true,
 *       "floor": 1,
 *       "section": "B"
 *     }
 *   ]
 * }
 *
 * Error Response Example (404 Not Found):
 * {
 *   "success": false,
 *   "message": "Library not found"
 * }
 */

/**
 * Book a seat
 *
 * Path: /api/seat-bookings
 * Method: POST
 * Access: Authenticated Users (with active membership)
 * Headers: Authorization: Bearer {token}
 *
 * Request Body Example:
 * {
 *   "seatId": "seat-lib1-1",
 *   "libraryId": "lib-1",
 *   "date": "2023-05-20",
 *   "startTime": "09:00",
 *   "endTime": "13:00"
 * }
 *
 * Success Response Example (201 Created):
 * {
 *   "success": true,
 *   "message": "Seat booked successfully",
 *   "booking": {
 *     "id": "booking-123456",
 *     "date": "2023-05-20",
 *     "startTime": "09:00",
 *     "endTime": "13:00",
 *     "status": "confirmed"
 *   }
 * }
 *
 * Error Response Example (400 Bad Request):
 * {
 *   "success": false,
 *   "message": "Seat is not available for the selected time"
 * }
 */

/**
 * Get user seat bookings
 *
 * Path: /api/users/seat-bookings
 * Method: GET
 * Access: Authenticated Users
 * Headers: Authorization: Bearer {token}
 *
 * Query Parameters:
 * status: string (optional)
 * upcoming: boolean (optional)
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "bookings": [
 *     {
 *       "id": "booking-1",
 *       "date": "2023-05-19",
 *       "startTime": "10:00",
 *       "endTime": "14:00",
 *       "status": "confirmed",
 *       "seat": {
 *         "id": "seat-lib1-2",
 *         "name": "Seat 2",
 *         "type": "regular"
 *       },
 *       "library": {
 *         "id": "lib-1",
 *         "name": "Central Library"
 *       }
 *     },
 *     {
 *       "id": "booking-2",
 *       "date": "2023-05-22",
 *       "startTime": "12:00",
 *       "endTime": "18:00",
 *       "status": "confirmed",
 *       "seat": {
 *         "id": "seat-lib3-10",
 *         "name": "Seat 10",
 *         "type": "computer"
 *       },
 *       "library": {
 *         "id": "lib-3",
 *         "name": "Tech Knowledge Center"
 *       }
 *     }
 *   ]
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
 * page: number (default: 1)
 * limit: number (default: 10)
 * search: string (optional)
 * category: string (optional)
 * status: string (optional)
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "books": [
 *     {
 *       "id": "book-1",
 *       "title": "The Great Gatsby",
 *       "author": "F. Scott Fitzgerald",
 *       "isbn": "9780743273565",
 *       "coverImage": "/placeholder.svg?height=300&width=200",
 *       "publishedYear": 1925,
 *       "pageCount": 180,
 *       "status": "available",
 *       "category": {
 *         "id": "cat-1",
 *         "name": "Fiction"
 *       }
 *     },
 *     {
 *       "id": "book-2",
 *       "title": "Sapiens: A Brief History of Humankind",
 *       "author": "Yuval Noah Harari",
 *       "isbn": "9780062316097",
 *       "coverImage": "/placeholder.svg?height=300&width=200",
 *       "publishedYear": 2011,
 *       "pageCount": 443,
 *       "status": "borrowed",
 *       "category": {
 *         "id": "cat-2",
 *         "name": "Non-Fiction"
 *       }
 *     }
 *   ],
 *   "pagination": {
 *     "total": 45,
 *     "pages": 5,
 *     "page": 1,
 *     "limit": 10
 *   }
 * }
 *
 * Error Response Example (404 Not Found):
 * {
 *   "success": false,
 *   "message": "Library not found"
 * }
 */

/**
 * Add physical book
 *
 * Path: /api/libraries/:id/books
 * Method: POST
 * Access: Admin (own library), Super Admin
 * Headers: Authorization: Bearer {token}
 *
 * Request Body Example:
 * {
 *   "title": "The Catcher in the Rye",
 *   "author": "J.D. Salinger",
 *   "isbn": "9780316769488",
 *   "description": "The story of Holden Caulfield, a teenage boy who has been expelled from prep school and is wandering around New York City.",
 *   "publishedYear": 1951,
 *   "publisher": "Little, Brown and Company",
 *   "pageCount": 277,
 *   "language": "English",
 *   "genre": ["Fiction", "Coming-of-age"],
 *   "tags": ["Classic", "American Literature"],
 *   "location": "Fiction Section, Shelf 3",
 *   "condition": "good",
 *   "categoryId": "cat-1"
 * }
 *
 * Success Response Example (201 Created):
 * {
 *   "success": true,
 *   "message": "Book added successfully",
 *   "book": {
 *     "id": "book-123456",
 *     "title": "The Catcher in the Rye"
 *   }
 * }
 *
 * Error Response Example (403 Forbidden):
 * {
 *   "success": false,
 *   "message": "Not authorized to add books to this library"
 * }
 */

/**
 * Borrow a book
 *
 * Path: /api/books/:id/borrow
 * Method: POST
 * Access: Authenticated Users (with active membership)
 * Headers: Authorization: Bearer {token}
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "message": "Book borrowed successfully",
 *   "borrowing": {
 *     "id": "borrow-123456",
 *     "borrowDate": "2023-05-17T11:28:46.000Z",
 *     "dueDate": "2023-05-31T11:28:46.000Z",
 *     "status": "borrowed"
 *   }
 * }
 *
 * Error Response Example (400 Bad Request):
 * {
 *   "success": false,
 *   "message": "Book is not available for borrowing"
 * }
 */

/**
 * Return a book
 *
 * Path: /api/book-borrowings/:id/return
 * Method: POST
 * Access: Authenticated Users (own borrowing), Admin (library borrowings), Super Admin
 * Headers: Authorization: Bearer {token}
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "message": "Book returned successfully",
 *   "penalty": 0
 * }
 *
 * Error Response Example (400 Bad Request):
 * {
 *   "success": false,
 *   "message": "Book return failed"
 * }
 */

// ==================== E-BOOK ROUTES ====================

/**
 * Get all e-books
 *
 * Path: /api/ebooks
 * Method: GET
 * Access: Authenticated Users
 * Headers: Authorization: Bearer {token}
 *
 * Query Parameters:
 * page: number (default: 1)
 * limit: number (default: 10)
 * search: string (optional)
 * category: string (optional)
 * premium: boolean (optional)
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "ebooks": [
 *     {
 *       "id": "ebook-1",
 *       "title": "The Great Gatsby",
 *       "author": "F. Scott Fitzgerald",
 *       "coverImage": "/placeholder.svg?height=300&width=200",
 *       "publishedYear": 1925,
 *       "pageCount": 180,
 *       "isPremium": false,
 *       "category": {
 *         "id": "cat-1",
 *         "name": "Fiction"
 *       }
 *     },
 *     {
 *       "id": "ebook-2",
 *       "title": "Sapiens: A Brief History of Humankind",
 *       "author": "Yuval Noah Harari",
 *       "coverImage": "/placeholder.svg?height=300&width=200",
 *       "publishedYear": 2011,
 *       "pageCount": 443,
 *       "isPremium": true,
 *       "category": {
 *         "id": "cat-2",
 *         "name": "Non-Fiction"
 *       }
 *     }
 *   ],
 *   "pagination": {
 *     "total": 45,
 *     "pages": 5,
 *     "page": 1,
 *     "limit": 10
 *   }
 * }
 */

/**
 * Access e-book
 *
 * Path: /api/ebooks/:id/access
 * Method: POST
 * Access: Authenticated Users (with e-library access)
 * Headers: Authorization: Bearer {token}
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "message": "E-book access granted",
 *   "access": {
 *     "id": "access-123456",
 *     "fileUrl": "https://example.com/ebooks/the-great-gatsby.pdf",
 *     "startDate": "2023-05-17T11:28:46.000Z",
 *     "endDate": "2023-06-16T11:28:46.000Z"
 *   }
 * }
 *
 * Error Response Example (403 Forbidden):
 * {
 *   "success": false,
 *   "message": "Premium membership required for this e-book"
 * }
 */

/**
 * Update reading progress
 *
 * Path: /api/ebooks/:id/progress
 * Method: POST
 * Access: Authenticated Users (with access to the e-book)
 * Headers: Authorization: Bearer {token}
 *
 * Request Body Example:
 * {
 *   "page": 120,
 *   "isCompleted": false
 * }
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "message": "Reading progress updated",
 *   "progress": {
 *     "lastReadPage": 120,
 *     "isCompleted": false
 *   }
 * }
 *
 * Error Response Example (403 Forbidden):
 * {
 *   "success": false,
 *   "message": "No access to this e-book"
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
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "categories": [
 *     {
 *       "id": "cat-1",
 *       "name": "General Discussion",
 *       "description": "General topics related to libraries and reading",
 *       "icon": "MessageSquare",
 *       "postCount": 24
 *     },
 *     {
 *       "id": "cat-2",
 *       "name": "Book Recommendations",
 *       "description": "Recommend and discover new books",
 *       "icon": "BookOpen",
 *       "postCount": 56
 *     },
 *     {
 *       "id": "cat-3",
 *       "name": "Study Tips",
 *       "description": "Share and learn effective study techniques",
 *       "icon": "Lightbulb",
 *       "postCount": 38
 *     }
 *   ]
 * }
 */

/**
 * Get forum post details
 *
 * Path: /api/forum/posts/:id
 * Method: GET
 * Access: Public
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "post": {
 *     "id": "post-1",
 *     "title": "Best study techniques for long reading sessions",
 *     "content": "I'm preparing for my exams and need to read for extended periods. What techniques do you use to maintain focus during long reading sessions?",
 *     "isPinned": false,
 *     "isLocked": false,
 *     "viewCount": 157,
 *     "likeCount": 24,
 *     "commentCount": 8,
 *     "createdAt": "2023-05-12T00:00:00Z",
 *     "updatedAt": "2023-05-12T00:00:00Z",
 *     "author": {
 *       "id": "user-1",
 *       "name": "John Member",
 *       "avatar": "/placeholder.svg?height=40&width=40"
 *     },
 *     "category": {
 *       "id": "cat-3",
 *       "name": "Study Tips"
 *     },
 *     "comments": [
 *       {
 *         "id": "comment-1",
 *         "content": "I find the Pomodoro technique really effective. 25 minutes of focused study followed by a 5-minute break.",
 *         "likeCount": 12,
 *         "createdAt": "2023-05-13T00:00:00Z",
 *         "author": {
 *           "id": "user-3",
 *           "name": "Alice Admin",
 *           "avatar": "/placeholder.svg?height=40&width=40"
 *         }
 *       },
 *       {
 *         "id": "comment-2",
 *         "content": "Active recall has been a game-changer for me. Instead of just reading, I try to recall the information without looking at the text.",
 *         "likeCount": 8,
 *         "createdAt": "2023-05-13T00:00:00Z",
 *         "author": {
 *           "id": "user-2",
 *           "name": "Jane Member",
 *           "avatar": "/placeholder.svg?height=40&width=40"
 *         }
 *       }
 *     ]
 *   }
 * }
 *
 * Error Response Example (404 Not Found):
 * {
 *   "success": false,
 *   "message": "Post not found"
 * }
 */

/**
 * Create forum post
 *
 * Path: /api/forum/posts
 * Method: POST
 * Access: Authenticated Users
 * Headers: Authorization: Bearer {token}
 *
 * Request Body Example:
 * {
 *   "title": "Recommendations for science fiction books",
 *   "content": "I've recently finished reading 'Dune' and loved it. Can anyone recommend similar science fiction books with rich world-building?",
 *   "categoryId": "cat-2"
 * }
 *
 * Success Response Example (201 Created):
 * {
 *   "success": true,
 *   "message": "Post created successfully",
 *   "post": {
 *     "id": "post-123456",
 *     "title": "Recommendations for science fiction books"
 *   }
 * }
 *
 * Error Response Example (400 Bad Request):
 * {
 *   "success": false,
 *   "message": "Title and content are required"
 * }
 */

// ==================== STUDY TOOLS ROUTES ====================

/**
 * Get user study sessions
 *
 * Path: /api/study/sessions
 * Method: GET
 * Access: Authenticated Users
 * Headers: Authorization: Bearer {token}
 *
 * Query Parameters:
 * startDate: string (YYYY-MM-DD, optional)
 * endDate: string (YYYY-MM-DD, optional)
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "sessions": [
 *     {
 *       "id": "session-1",
 *       "date": "2023-05-16",
 *       "startTime": "10:00",
 *       "endTime": "12:00",
 *       "duration": 120,
 *       "subject": "Mathematics",
 *       "notes": "Worked on calculus problems",
 *       "createdAt": "2023-05-16T12:00:00Z"
 *     },
 *     {
 *       "id": "session-2",
 *       "date": "2023-05-15",
 *       "startTime": "14:00",
 *       "endTime": "15:30",
 *       "duration": 90,
 *       "subject": "Physics",
 *       "notes": "Read chapter 5 on thermodynamics",
 *       "createdAt": "2023-05-15T15:30:00Z"
 *     }
 *   ]
 * }
 */

/**
 * Create study session
 *
 * Path: /api/study/sessions
 * Method: POST
 * Access: Authenticated Users
 * Headers: Authorization: Bearer {token}
 *
 * Request Body Example:
 * {
 *   "date": "2023-05-17",
 *   "startTime": "09:00",
 *   "endTime": "11:30",
 *   "subject": "Biology",
 *   "notes": "Studied cell structure and function"
 * }
 *
 * Success Response Example (201 Created):
 * {
 *   "success": true,
 *   "message": "Study session created successfully",
 *   "session": {
 *     "id": "session-123456",
 *     "date": "2023-05-17",
 *     "duration": 150
 *   }
 * }
 *
 * Error Response Example (400 Bad Request):
 * {
 *   "success": false,
 *   "message": "End time must be after start time"
 * }
 */

/**
 * Get user tasks
 *
 * Path: /api/study/tasks
 * Method: GET
 * Access: Authenticated Users
 * Headers: Authorization: Bearer {token}
 *
 * Query Parameters:
 * status: string (optional)
 * priority: string (optional)
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "tasks": [
 *     {
 *       "id": "task-1",
 *       "title": "Complete calculus assignment",
 *       "description": "Solve problems 1-10 from chapter 4",
 *       "dueDate": "2023-05-19",
 *       "priority": "high",
 *       "status": "pending",
 *       "createdAt": "2023-05-14T00:00:00Z"
 *     },
 *     {
 *       "id": "task-2",
 *       "title": "Read physics textbook",
 *       "description": "Chapter 6 on electromagnetism",
 *       "dueDate": "2023-05-22",
 *       "priority": "medium",
 *       "status": "pending",
 *       "createdAt": "2023-05-15T00:00:00Z"
 *     }
 *   ]
 * }
 */

/**
 * Update task status
 *
 * Path: /api/study/tasks/:id/status
 * Method: PUT
 * Access: Authenticated Users (own task)
 * Headers: Authorization: Bearer {token}
 *
 * Request Body Example:
 * {
 *   "status": "completed"
 * }
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "message": "Task status updated successfully",
 *   "task": {
 *     "id": "task-1",
 *     "status": "completed"
 *   }
 * }
 *
 * Error Response Example (404 Not Found):
 * {
 *   "success": false,
 *   "message": "Task not found"
 * }
 */

// ==================== PAYMENT ROUTES ====================

/**
 * Get user payments
 *
 * Path: /api/payments
 * Method: GET
 * Access: Authenticated Users
 * Headers: Authorization: Bearer {token}
 *
 * Query Parameters:
 * type: string (optional)
 * status: string (optional)
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "payments": [
 *     {
 *       "id": "pay-1",
 *       "amount": 1999,
 *       "currency": "USD",
 *       "type": "membership",
 *       "status": "successful",
 *       "paymentMethod": "credit_card",
 *       "transactionId": "txn_123456789",
 *       "receiptUrl": "https://example.com/receipts/123456",
 *       "createdAt": "2023-04-17T00:00:00Z",
 *       "membership": {
 *         "id": "mem-1",
 *         "library": {
 *           "id": "lib-1",
 *           "name": "Central Library"
 *         },
 *         "plan": {
 *           "id": "plan-2",
 *           "name": "Premium"
 *         }
 *       }
 *     },
 *     {
 *       "id": "pay-2",
 *       "amount": 500,
 *       "currency": "USD",
 *       "type": "seat_booking",
 *       "status": "successful",
 *       "paymentMethod": "wallet",
 *       "transactionId": "txn_987654321",
 *       "createdAt": "2023-05-15T00:00:00Z",
 *       "seatBooking": {
 *         "id": "booking-2",
 *         "date": "2023-05-22",
 *         "startTime": "12:00",
 *         "endTime": "18:00"
 *       }
 *     }
 *   ]
 * }
 */

/**
 * Get library payments (admin)
 *
 * Path: /api/libraries/:id/payments
 * Method: GET
 * Access: Admin (own library), Super Admin
 * Headers: Authorization: Bearer {token}
 *
 * Query Parameters:
 * type: string (optional)
 * status: string (optional)
 * startDate: string (YYYY-MM-DD, optional)
 * endDate: string (YYYY-MM-DD, optional)
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "payments": [
 *     {
 *       "id": "pay-1",
 *       "amount": 1999,
 *       "currency": "USD",
 *       "type": "membership",
 *       "status": "successful",
 *       "paymentMethod": "credit_card",
 *       "transactionId": "txn_123456789",
 *       "createdAt": "2023-04-17T00:00:00Z",
 *       "user": {
 *         "id": "user-1",
 *         "name": "John Member",
 *         "email": "john.doe@example.com"
 *       }
 *     },
 *     {
 *       "id": "pay-2",
 *       "amount": 500,
 *       "currency": "USD",
 *       "type": "seat_booking",
 *       "status": "successful",
 *       "paymentMethod": "wallet",
 *       "transactionId": "txn_987654321",
 *       "createdAt": "2023-05-15T00:00:00Z",
 *       "user": {
 *         "id": "user-2",
 *         "name": "Jane Member",
 *         "email": "jane.smith@example.com"
 *       }
 *     }
 *   ],
 *   "summary": {
 *     "total": 25,
 *     "completed": 23,
 *     "pending": 1,
 *     "failed": 1,
 *     "totalAmount": 35000
 *   }
 * }
 *
 * Error Response Example (403 Forbidden):
 * {
 *   "success": false,
 *   "message": "Not authorized to view this library's payments"
 * }
 */

// ==================== NOTIFICATION ROUTES ====================

/**
 * Get user notifications
 *
 * Path: /api/notifications
 * Method: GET
 * Access: Authenticated Users
 * Headers: Authorization: Bearer {token}
 *
 * Query Parameters:
 * unread: boolean (optional)
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "notifications": [
 *     {
 *       "id": "notif-1",
 *       "title": "Seat Booking Confirmed",
 *       "message": "Your seat booking for May 19th has been confirmed.",
 *       "type": "success",
 *       "isRead": false,
 *       "createdAt": "2023-05-17T10:30:00Z"
 *     },
 *     {
 *       "id": "notif-2",
 *       "title": "Membership Expiring Soon",
 *       "message": "Your Premium membership will expire in 7 days. Renew now to avoid interruption.",
 *       "type": "warning",
 *       "isRead": true,
 *       "createdAt": "2023-05-16T08:15:00Z"
 *     }
 *   ]
 * }
 */

/**
 * Mark notification as read
 *
 * Path: /api/notifications/:id/read
 * Method: PUT
 * Access: Authenticated Users (own notification)
 * Headers: Authorization: Bearer {token}
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "message": "Notification marked as read"
 * }
 *
 * Error Response Example (404 Not Found):
 * {
 *   "success": false,
 *   "message": "Notification not found"
 * }
 */

// ==================== REPORT ROUTES ====================

/**
 * Get library reports (admin)
 *
 * Path: /api/libraries/:id/reports
 * Method: GET
 * Access: Admin (own library), Super Admin
 * Headers: Authorization: Bearer {token}
 *
 * Query Parameters:
 * type: string (members|bookings|borrowings|revenue)
 * period: string (daily|weekly|monthly|yearly)
 * startDate: string (YYYY-MM-DD, optional)
 * endDate: string (YYYY-MM-DD, optional)
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "report": {
 *     "type": "revenue",
 *     "period": "monthly",
 *     "startDate": "2023-01-01",
 *     "endDate": "2023-05-31",
 *     "data": [
 *       {
 *         "date": "2023-01",
 *         "value": 25000,
 *         "label": "January"
 *       },
 *       {
 *         "date": "2023-02",
 *         "value": 28000,
 *         "label": "February"
 *       },
 *       {
 *         "date": "2023-03",
 *         "value": 32000,
 *         "label": "March"
 *       },
 *       {
 *         "date": "2023-04",
 *         "value": 30000,
 *         "label": "April"
 *       },
 *       {
 *         "date": "2023-05",
 *         "value": 35000,
 *         "label": "May"
 *       }
 *     ],
 *     "summary": {
 *       "total": 150000,
 *       "average": 30000,
 *       "min": 25000,
 *       "max": 35000,
 *       "change": 16.67 // Percentage change from previous period
 *     }
 *   }
 * }
 *
 * Error Response Example (403 Forbidden):
 * {
 *   "success": false,
 *   "message": "Not authorized to view this library's reports"
 * }
 */

/**
 * Get platform reports (super-admin)
 *
 * Path: /api/admin/reports
 * Method: GET
 * Access: Super Admin
 * Headers: Authorization: Bearer {token}
 *
 * Query Parameters:
 * type: string (libraries|members|revenue|activity)
 * period: string (daily|weekly|monthly|yearly)
 * startDate: string (YYYY-MM-DD, optional)
 * endDate: string (YYYY-MM-DD, optional)
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "report": {
 *     "type": "members",
 *     "period": "monthly",
 *     "startDate": "2023-01-01",
 *     "endDate": "2023-05-31",
 *     "data": [
 *       {
 *         "date": "2023-01",
 *         "value": 120,
 *         "label": "January"
 *       },
 *       {
 *         "date": "2023-02",
 *         "value": 145,
 *         "label": "February"
 *       },
 *       {
 *         "date": "2023-03",
 *         "value": 180,
 *         "label": "March"
 *       },
 *       {
 *         "date": "2023-04",
 *         "value": 210,
 *         "label": "April"
 *       },
 *       {
 *         "date": "2023-05",
 *         "value": 250,
 *         "label": "May"
 *       }
 *     ],
 *     "summary": {
 *       "total": 905,
 *       "average": 181,
 *       "min": 120,
 *       "max": 250,
 *       "change": 19.05 // Percentage change from previous period
 *     },
 *     "breakdown": {
 *       "active": 750,
 *       "expired": 120,
 *       "pending": 35
 *     }
 *   }
 * }
 *
 * Error Response Example (403 Forbidden):
 * {
 *   "success": false,
 *   "message": "Not authorized as a super admin"
 * }
 */

// ==================== MAINTENANCE ROUTES ====================

/**
 * Get library maintenance records
 *
 * Path: /api/libraries/:id/maintenance
 * Method: GET
 * Access: Admin (own library), Super Admin
 * Headers: Authorization: Bearer {token}
 *
 * Query Parameters:
 * status: string (optional)
 * priority: string (optional)
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "records": [
 *     {
 *       "id": "maint-1",
 *       "title": "Fix broken chair in reading area",
 *       "description": "Chair in the main reading area (near window) has a broken leg",
 *       "status": "pending",
 *       "priority": "medium",
 *       "category": "furniture",
 *       "scheduledDate": "2023-05-20",
 *       "completedDate": null,
 *       "cost": null,
 *       "notes": null,
 *       "createdAt": "2023-05-16T09:30:00Z"
 *     },
 *     {
 *       "id": "maint-2",
 *       "title": "Replace light bulbs in study room 3",
 *       "description": "Two light bulbs need replacement in study room 3",
 *       "status": "completed",
 *       "priority": "low",
 *       "category": "electrical",
 *       "scheduledDate": "2023-05-15",
 *       "completedDate": "2023-05-15",
 *       "cost": 25.99,
 *       "notes": "Replaced with energy-efficient LED bulbs",
 *       "createdAt": "2023-05-14T11:45:00Z"
 *     }
 *   ]
 * }
 *
 * Error Response Example (403 Forbidden):
 * {
 *   "success": false,
 *   "message": "Not authorized to view this library's maintenance records"
 * }
 */

/**
 * Create maintenance record
 *
 * Path: /api/libraries/:id/maintenance
 * Method: POST
 * Access: Admin (own library), Super Admin
 * Headers: Authorization: Bearer {token}
 *
 * Request Body Example:
 * {
 *   "title": "Clean air conditioning vents",
 *   "description": "All AC vents need cleaning as part of regular maintenance",
 *   "priority": "medium",
 *   "category": "cleaning",
 *   "scheduledDate": "2023-05-25",
 *   "recurring": true,
 *   "recurringFrequency": "monthly"
 * }
 *
 * Success Response Example (201 Created):
 * {
 *   "success": true,
 *   "message": "Maintenance record created successfully",
 *   "record": {
 *     "id": "maint-123456",
 *     "title": "Clean air conditioning vents"
 *   }
 * }
 *
 * Error Response Example (400 Bad Request):
 * {
 *   "success": false,
 *   "message": "Title and description are required"
 * }
 */

/**
 * Update maintenance record status
 *
 * Path: /api/maintenance/:id/status
 * Method: PUT
 * Access: Admin (own library), Super Admin
 * Headers: Authorization: Bearer {token}
 *
 * Request Body Example:
 * {
 *   "status": "completed",
 *   "completedDate": "2023-05-17",
 *   "notes": "All vents cleaned and filters replaced"
 * }
 *
 * Success Response Example (200 OK):
 * {
 *   "success": true,
 *   "message": "Maintenance record status updated successfully",
 *   "record": {
 *     "id": "maint-123456",
 *     "status": "completed"
 *   }
 * }
 *
 * Error Response Example (404 Not Found):
 * {
 *   "success": false,
 *   "message": "Maintenance record not found"
 * }
 */