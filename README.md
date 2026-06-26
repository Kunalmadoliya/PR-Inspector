<div align="center">
  <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" alt="Next.js Logo" width="120" height="120" />
  <h1>🐰 CodeRabbit</h1>
  <p>A modern, full-stack web application built with the latest technologies.</p>
</div>

---

## 🌟 Overview

**CodeRabbit** is a robust and scalable web application built on the bleeding edge of the React ecosystem. Leveraging **Next.js**, **React 19**, and **Tailwind CSS v4**, this project delivers a highly optimized, developer-friendly, and beautifully designed user experience. It features robust authentication via **Better Auth** and seamless data management with **Prisma ORM** backed by **PostgreSQL**.

## 🚀 Tech Stack

### Core
- **[Next.js](https://nextjs.org/)** - The React Framework for the Web (App Router)
- **[React 19](https://react.dev/)** - The library for web and native user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Strongly typed programming language

### Styling & UI
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn UI](https://ui.shadcn.com/)** - Reusable components built with Radix UI and Tailwind
- **[Phosphor Icons](https://phosphoricons.com/)** - Beautiful, consistent icon family
- **[Embla Carousel](https://www.embla-carousel.com/)** & **[Recharts](https://recharts.org/)** - For rich data visualization and interactive carousels

### Data & State Management
- **[Prisma ORM](https://www.prisma.io/)** - Next-generation Node.js and TypeScript ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Advanced open source relational database
- **[@tanstack/react-query](https://tanstack.com/query/latest)** - Powerful asynchronous state management

### Authentication
- **[Better Auth](https://better-auth.com/)** - Comprehensive authentication for modern apps

## ✨ Features

- 🔐 **Secure Authentication**: Full-featured auth system handling sessions, accounts, and verifications using Better Auth.
- 🗄️ **Type-Safe Database**: Fully typed database access with Prisma Client and PostgreSQL.
- 🎨 **Modern Design System**: Beautiful, accessible, and highly customizable UI components.
- ⚡ **Optimized Performance**: Next.js App Router for Server Components and blazing fast performance.
- 🌗 **Dark Mode Ready**: Built-in support for light and dark themes using `next-themes`.

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js** (v20 or higher)
- **pnpm** (Package manager used for this project)
- **PostgreSQL** (Running locally or via a cloud provider)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kunalmadoliya/coderabbit.git
   cd coderabbit
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your database connection string and authentication secrets:
   ```env
   # .env
   DATABASE_URL="postgresql://user:password@localhost:5432/coderabbit?schema=public"
   BETTER_AUTH_SECRET="your_secret_key"
   BETTER_AUTH_URL="http://localhost:3000"
   # Add your GitHub or other provider OAuth keys here
   ```

4. **Initialize the Database**
   Run Prisma migrations to create the tables in your PostgreSQL database:
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the Development Server**
   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

```text
coderabbit/
├── app/               # Next.js App Router pages and API routes
├── components/        # Reusable UI components (Shadcn UI & custom)
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and library configurations (Auth, etc.)
├── prisma/            # Prisma schema and migrations
├── public/            # Static assets
└── utils/             # Helper functions
```

## 📜 Scripts

- `pnpm dev`: Starts the Next.js development server
- `pnpm build`: Builds the application for production
- `pnpm start`: Starts the production server
- `pnpm lint`: Lints the codebase using ESLint

---

<div align="center">
  <i>Built with ❤️ using Next.js and Prisma.</i>
</div>
