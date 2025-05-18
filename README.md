# 📚 StudentAdda - Library Management & Student Productivity Platform

**StudentAdda** is a full-stack web application designed to transform traditional libraries into smart, digital-first hubs. This system enables seat bookings, book borrowing, digital library access, student productivity tools, community forums, and much more. Built with scalability and real-world use in mind, it serves Super Admins, Library Admins, and Users through well-defined portals.

---

## 🚀 Features

### 🎓 User Features
- Seat booking with live availability and payment
- Membership plans: daily, monthly, quarterly
- Book borrowing using membership ID
- Access to e-Library for digital reading
- Productivity tools: Pomodoro Timer, Habit Tracker, Streak System
- Public community forum (login required to post/answer)
- Quiz practice zone with progress tracking

### 🧑‍💼 Admin Features
- Manage library profile, bookings, inventory, and payments
- Track member activity and book allocations
- Daily reports and library analytics

### 🛡 Super Admin Features
- Manage all libraries and admins
- Block/remove users/admins
- Global settings and system-wide settlements (daily/commission based)

---

## 🛠️ Tech Stack

| Layer       | Tech Choices                       |
|-------------|------------------------------------|
| Frontend    | React.js / Next.js                 |
| Backend     | Node.js with Express / NestJS      |
| Database    | PostgreSQL / MongoDB + Prisma ORM  |
| Auth        | Firebase Auth / Auth0              |
| Hosting     | Vercel / AWS / Cloudflare          |
| Payment     | Razorpay / Stripe                  |

---

## 🔒 Access & Roles

- **Super Admin** – full control over platform & financials
- **Library Admin** – manages one library (books, users, bookings)
- **User** – can be a guest or paid member with access to features

---

## 📁 Project Structure




/client --> Frontend application (React/Next.js) /server --> Backend APIs & services (Node.js) /docs --> Design & system documentation /database --> Schemas and seed data

yaml
Copy
Edit

---

## 📌 Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/<your-org>/studentadda-lms.git
Install dependencies:

bash
Copy
Edit
cd client
npm install
cd ../server
npm install
Create .env files for both client and server (sample files included)

Start development servers:

bash
Copy
Edit
# In /client
npm run dev

# In /server
npm run dev
Access the app at http://localhost:3000
# testing-lms
