// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// User roles and authentication
enum UserRole {
  MEMBER
  ADMIN
  SUPER_ADMIN
}

enum UserStatus {
  ACTIVE
  INACTIVE
  SUSPENDED
  PENDING
}

enum MembershipPlan {
  FREE      //RR
  BASIC
  PREMIUM
}

model User {
  id            String       @id @default(cuid()) @map("_id")
  name          String
  email         String       @unique
  password      String
  role          UserRole     @default(MEMBER)
  status        UserStatus   @default(ACTIVE)
  plan          MembershipPlan @default(FREE)
  joinDate      DateTime     @default(now())
  avatar        String?  //self generated
  bio           String?
  
  // Relationships
  library       Library?     @relation(fields: [libraryId], references: [id])
  libraryId     String?
  bookings      Booking[]
  posts         Post[]
  comments      Comment[]
  quizAttempts  QuizAttempt[]
  notifications Notification[]
  readingGoals  ReadingGoal[]
  readingHistory ReadingHistory[]
  savedBooks    SavedBook[]
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}

// Library management
enum LibraryStatus {
  ACTIVE
  PENDING
  INACTIVE
}

model Library {
  id            String       @id @default(cuid()) @map("_id")
  name          String
  location      String
  description   String?
  status        LibraryStatus @default(ACTIVE)
  joinDate      DateTime     @default(now())

  //documentation 2-3
  
  // Relationships
  admin         User?        @relation(name: "LibraryAdmin", fields: [adminId], references: [id])
  adminId       String?
  members       User[]
  books         Book[]
  bookings      Booking[]
  transactions  Transaction[]
  seats         Seat[]
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}

// Book inventory
enum BookStatus {
  AVAILABLE
  LOW_STOCK
  OUT_OF_STOCK
  RESERVED
}

model Book {
  id            String       @id @default(cuid()) @map("_id")
  title         String
  author        String
  isbn          String       @unique
  category      String
  description   String?
  cover         String?
  status        BookStatus   @default(AVAILABLE)
  copies        Int          @default(1)
  checkedOut    Int          @default(0)
  rating        Float?
  
  // Relationships
  library       Library      @relation(fields: [libraryId], references: [id])
  libraryId     String
  readingHistory ReadingHistory[]
  savedBy       SavedBook[]
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}

// Seat booking system
enum BookingStatus {
  CONFIRMED
  PENDING
  CANCELLED
}

model Booking {
  id            String       @id @default(cuid()) @map("_id")
  date          DateTime
  startTime     String
  endTime       String
  status        BookingStatus @default(PENDING)
  
  // Relationships
  user          User         @relation(fields: [userId], references: [id])
  userId        String
  library       Library      @relation(fields: [libraryId], references: [id])
  libraryId     String
  seat          Seat         @relation(fields: [seatId], references: [id])
  seatId        String
  payment       Payment?
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}

model Seat {
  id            String       @id @default(cuid()) @map("_id")
  number        String
  type          String       @default("Standard") // Standard, Premium,
  isAvailable   Boolean      @default(true)
  
  // Relationships
  library       Library      @relation(fields: [libraryId], references: [id])
  libraryId     String
  bookings      Booking[]
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}

// Financial transactions
enum TransactionStatus {
  COMPLETED
  PENDING
  FAILED
}

enum TransactionType {
  MEMBERSHIP
  BOOKING
  COMMISSION
  REFUND
}

model Transaction {
  id            String       @id @default(cuid()) @map("_id")
  amount        Float
  commission    Float?
  status        TransactionStatus @default(PENDING)
  type          TransactionType
  reference     String?
  
  // Relationships
  library       Library?     @relation(fields: [libraryId], references: [id])
  libraryId     String?
  payment       Payment?     @relation(fields: [paymentId], references: [id])
  paymentId     String?      @unique
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}

model Payment {
  id            String       @id @default(cuid()) @map("_id")
  amount        Float
  method        String       // Credit Card, PayPal, etc.
  status        String       // Successful, Failed, etc.
  
  // Relationships
  booking       Booking?     @relation(fields: [bookingId], references: [id])
  bookingId     String?      @unique
  transaction   Transaction?
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}

// Community features
model Category {
  id            String       @id @default(cuid()) @map("_id")
  name          String       @unique
  description   String?
  count         Int          @default(0)
  // Relationships
  posts         Post[]
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}

model Post {
  id            String       @id @default(cuid()) @map("_id")
  title         String
  content       String
  likes         Int          @default(0)
  
  // Relationships
  author        User         @relation(fields: [authorId], references: [id])
  authorId      String
  category      Category     @relation(fields: [categoryId], references: [id])
  categoryId    String
  comments      Comment[]
  tags          Tag[]        @relation("PostToTag")
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}


model Comment {                                             ///like and bookmark
  id            String       @id @default(cuid()) @map("_id")
  content       String
  likes         Int          @default(0)
  
  // Relationships
  author        User         @relation(fields: [authorId], references: [id])
  authorId      String
  post          Post         @relation(fields: [postId], references: [id])
  postId        String
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}

model Tag {
  id            String       @id @default(cuid()) @map("_id")
  name          String       @unique
  
  // Relationships
  posts         Post[]       @relation("PostToTag")
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}

// Quiz system
enum QuizDifficulty {
  BEGINNER
  INTERMEDIATE
  ADVANCED
}

model Quiz {
  id            String       @id @default(cuid()) @map("_id")
  title         String
  description   String?
  category      String
  difficulty    QuizDifficulty  @default(BEGINNER)
  timeLimit     Int          // in minutes
  
  // Relationships
  questions     Question[]
  attempts      QuizAttempt[]
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}

model Question {
  id            String       @id @default(cuid()) @map("_id")
  text          String
  options       String[]     // Array of option texts
  correctAnswer Int          // Index of the correct answer in options array
  
  // Relationships
  quiz          Quiz         @relation(fields: [quizId], references: [id])
  quizId        String
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}

model QuizAttempt {
  id            String       @id @default(cuid()) @map("_id")
  score         Int
  completed     Boolean      @default(false)
  
  // Relationships
  user          User         @relation(fields: [userId], references: [id])
  userId        String
  quiz          Quiz         @relation(fields: [quizId], references: [id])
  quizId        String
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}

// Notification system
enum NotificationType {
  BOOKING
  BOOK
  QUIZ
  COMMUNITY
  MEMBERSHIP
  SYSTEM
  ACHIEVEMENT
}

model Notification {
  id            String       @id @default(cuid()) @map("_id")
  title         String
  message       String
  read          Boolean      @default(false)
  type          NotificationType
  
  // Relationships
  user          User         @relation(fields: [userId], references: [id])
  userId        String
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}

// Reading features
model ReadingGoal {
  id            String       @id @default(cuid()) @map("_id")
  target        Int
  current       Int          @default(0)
  period        String       // Monthly, Weekly, etc.
  
  // Relationships
  user          User         @relation(fields: [userId], references: [id])
  userId        String
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}

model ReadingHistory {
  id            String       @id @default(cuid()) @map("_id")
  startDate     DateTime
  endDate       DateTime?
  progress      Int          @default(0) // Percentage
  
  // Relationships
  user          User         @relation(fields: [userId], references: [id])
  userId        String
  book          Book         @relation(fields: [bookId], references: [id])
  bookId        String
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}

model SavedBook {
  id            String       @id @default(cuid()) @map("_id")
  
  // Relationships
  user          User         @relation(fields: [userId], references: [id])
  userId        String
  book          Book         @relation(fields: [bookId], references: [id])
  bookId        String
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt

  @@unique([userId, bookId])
}

// Achievement system
model Badge {
  id            String       @id @default(cuid()) @map("_id")
  name          String
  description   String
  image         String?
  
  // Relationships
  userBadges    UserBadge[]
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}

model UserBadge {
  id            String       @id @default(cuid()) @map("_id")
  earnedDate    DateTime     @default(now())
  
  // Relationships
  user          User         @relation(fields: [userId], references: [id])
  userId        String
  badge         Badge        @relation(fields: [badgeId], references: [id])
  badgeId       String
  
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt

  @@unique([userId, badgeId])
} 


