# 🔐 NextGen Auth.js v5

This repository is a powerful authentication system built with **Next.js 14**, **NextAuth.js v5 (Auth.js)**, and Prisma. It includes modern features like email/password login, social logins, two-factor authentication, email verification, and role-based access control.

---

---

## ✨ Getting Started

### 1. Clone the Project

```bash
git clone https://github.com/TheBinaryNumberSystem/NextGen_Auth.js.git my-next-auth-project
```

> 🔧 You can replace `my-next-auth-project` with any folder name of your choice. If you omit it, the project folder will default to the repo name: `NextGen_Auth.js`.

---

---

### 2. Update Mail Configuration

In the `mail.ts` file, **update all instances of the `from` email** to use:

```ts
from: "onboarding@resend.dev";
```

This ensures proper email delivery via the Resend service.

---

---

### 3. Install Dependencies

Run the following commands inside your project directory:

```bash
# Install core dependencies
npm i

# UI icons
npm i react-icons

# Prisma & database adapter
npm i -D prisma
npm i @prisma/client
npx prisma generate
npx prisma db push

# Auth.js Prisma adapter
npm i @auth/prisma-adapter

# Password hashing
npm i bcrypt
npm i -D @types/bcrypt

# Alternate bcrypt lib (used in some environments)
npm i bcryptjs
npm i -D @types/bcryptjs

# Install NextAuth.js beta version (v5)
npm install next-auth@beta

# UUID for unique identifiers
npm i uuid
npm i --save-dev @types/uuid

# Email service
npm i resend

# Loading spinner component
npm i react-spinners
```

---

---

### 4. Setup `.env` File

Create a `.env` file in the root and fill in your credentials:

```env
DATABASE_URL="your_database_url"
AUTH_SECRET="your_auth_secret"

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

RESEND_API_KEY=your_resend_api_key
```

---

---

### 5. Start the Development Server

```bash
npm run dev
```

Your app will be available at [http://localhost:3000](http://localhost:3000).

---

---

## ✨ Key Features

- _NextAuth.js v5 (beta)_ with full customization
- **Next.js 14** + **server actions**
- **Credential login** + **OAuth with Google & GitHub**
- 🔑 Forgot password + Email verification
- 📱 Two-factor authentication (2FA)
- 👥 Role-based access (Admin/User)
- 📟 Modular components for login, register, verification, settings, etc.
- 🔒 Protected routes, server actions, and API routes
- 💪 Settings page to update password, email, 2FA, and roles
- ⚙️ Utility hooks and components for current user and role

---

---

## 📺 Original Tutorial Source (Thanks to [Code With Antonio](https://www.youtube.com/@codewithantonio)

)

[This Project's Tutorial: ](https://youtu.be/1MTyCvS05V4)
