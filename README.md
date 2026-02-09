# 🎯 SkillZen — AI-Powered Skill Assessment Platform

**SkillZen** is a full-stack **AI-driven skill assessment and learning platform** built with **Next.js** that evaluates users through **interactive quizzes, challenges, and real-time feedback**.  
The platform helps users identify strengths, track progress, and improve skills using **intelligent question generation and performance analytics**.

---

## 🚀 Features

- 🧠 **AI-Powered Skill Assessment** — Evaluate user skills via adaptive quizzes  
- 📊 **Real-Time Scoring & Feedback** — Instant results and performance insights  
- 🔄 **Dynamic Question Generation** — AI-generated questions based on skill level  
- ⚡ **Interactive Quiz Experience** — Smooth, fast, and engaging quiz flow  
- 🎯 **Skill Progress Tracking** — Monitor growth and improvement over time  
- 🧩 **Scalable Architecture** — Modular and maintainable codebase  
- 🔐 **Secure Backend Logic** — Server actions and middleware-based routing  

---

## 🏗️ Tech Stack

**Frontend**
- Next.js (App Router)
- React.js
- Tailwind CSS
- shadcn/ui

**Backend**
- Next.js Server Actions
- Node.js

**Database**
- PostgreSQL
- Prisma ORM

**Other Tools**
- Prisma Client
- Next.js Middleware
- ESLint & PostCSS

---

## 📂 Folder Structure
```
SKILLZEN/
│
├── app/                    # Next.js App Router pages
├── actions/                # Server actions (quiz, user, results)
├── components/             # Reusable UI components
├── hooks/                  # Custom React hooks
├── data/                   # Static & seed data
├── lib/                    # Utility functions & helpers
├── prisma/                 # Prisma schema & migrations
├── public/                 # Static assets
│
├── middleware.js           # Route protection & middleware
├── next.config.mjs         # Next.js configuration
├── tailwind.config.mjs     # Tailwind configuration
├── postcss.config.mjs      # PostCSS setup
├── eslint.config.mjs       # ESLint rules
├── components.json         # shadcn/ui config
├── jsconfig.json           # Path aliases
│
├── .env                    # Environment variables
├── package.json
├── package-lock.json
└── README.md
```
## ⚙️ Setup Instructions

Follow the steps below to run **SkillZen** locally.

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Ashwin28Toppo/SkillZen.git
cd SkillZen
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Configure environment variables
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_public_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

DATABASE_URL=your_database_url

GEMINI_API_KEY = your_gemini_key
```

### 4️⃣ Setup Prisma and Database
```bash
npx prisma generate
npx prisma migrate dev
```
### 5️⃣ Run the Development Server
```bash
npm run dev
```
Visit -http://localhost:3000

## 💬 Example Use Cases

-“Start a JavaScript skill assessment”
-“Evaluate my React knowledge”
-“Show my quiz performance summary”
-“Generate practice questions for frontend development”
-"Generate Cover Letter and Resume"

## 🧩 Core Modules

| Module Name        | Description                                              |
|--------------------|----------------------------------------------------------|
| Quiz Engine        | Manages quiz flow, questions, and user interactions      |
| AI Question System | Generates adaptive skill-based questions using AI        |
| Scoring Logic      | Evaluates responses and provides real-time feedback      |
| User Progress      | Stores and tracks user performance and assessment history|
| Dashboard          | Displays analytics, scores, and skill insights           |
| Authentication     | Handles user login, onboarding, and protected routes     |


## ⭐ Contributing
Contributions are welcome!
Fork the repository, open issues, or submit pull requests.

SkillZen — Assess skills. Learn smarter. Grow faster. 🚀
