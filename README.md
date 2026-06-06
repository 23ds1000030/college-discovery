# 🎓 College Discovery Platform

A production-style full-stack web application that helps users discover, compare, and save colleges using dynamic search, filtering, and comparison tools.

---

## 🚀 Live Demo
(Replace after deployment)
https://your-vercel-url.vercel.app

---

## 🧠 Features

### 🔍 College Discovery
- Search colleges by name
- Pagination support
- Responsive grid UI

### 📄 College Details
- Overview
- Courses
- Placement information
- Reviews

### ⚖️ Compare Colleges
- Compare 2–3 colleges side-by-side
- Fees, ratings, location comparison

### 💾 Saved Colleges
- Save colleges per user
- View saved list

### 🔐 Authentication (Basic)
- Signup/Login (NextAuth / credentials)

---

## 🏗️ System Architecture

Frontend:
- Next.js (App Router)
- React
- Tailwind CSS
- React Query

Backend:
- Next.js API Routes
- Prisma ORM

Database:
- PostgreSQL (Neon)

---

## 🗄️ Database Schema

Main entities:
- User
- College
- Course
- Review
- SavedCollege

---

## ⚙️ Tech Stack

- Next.js 16
- TypeScript
- TailwindCSS
- Prisma
- PostgreSQL
- React Query
- Zustand

---

## 📡 API Endpoints

### Colleges
- GET `/api/colleges`
- GET `/api/colleges/[id]`

### Compare
- POST `/api/compare`

### Saved
- GET `/api/saved`
- POST `/api/saved`

### Auth
- NextAuth Credentials Provider

---

## 🧩 Key Engineering Decisions

### 1. React Query for Data Fetching
Used for caching, pagination, and performance optimization.

### 2. Prisma ORM
Ensures type-safe database access.

### 3. Modular Architecture
Separated:
- API layer
- Hooks layer
- UI components

### 4. Error Handling
All APIs use try/catch with safe JSON responses.

---

## ⚡ Performance Features

- Pagination-based API (not full dataset load)
- React Query caching
- Minimal re-renders
- Responsive UI

---

## 📱 UI Design

- Mobile-first responsive layout
- Skeleton loading states
- Toast notifications for actions

---

## 🚀 Deployment

- Frontend: Vercel
- Database: Neon PostgreSQL

---

## 📌 Future Improvements

- Advanced filtering system
- AI-based college recommendation
- Real authentication sessions
- Analytics dashboard