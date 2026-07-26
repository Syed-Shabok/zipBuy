# 🛍️ ZipBuy

A modern, production-ready full-stack e-commerce application built with **Next.js 15**, **TypeScript**, **MongoDB**, and **Tailwind CSS**. This project demonstrates clean architecture, secure Role-Based Access Control (RBAC) authentication, advanced product filtering, and a strict 3-color custom design system utilizing Base UI and Recharts.

---

## 🚀 Features

- ⚡ **Next.js 15 App Router** for optimized server/client rendering
- 🎨 **Strict 3-Color UI Design System** with custom Tailwind variables
- 📊 **Interactive Data Visualization** using Recharts
- 🗄️ **MongoDB (Native Driver)** for scalable data management
- 🔐 **JWT Authentication & HTTP-only Cookies**
- 🛡️ **Role-Based Access Control (RBAC)** via Next.js Proxy/Middleware
- 🔍 **Advanced Explore Page** (Search, Category Filtering, Price Sorting, Pagination)
- 📦 **Complete Product CRUD APIs**
- 🛒 **Dynamic Product Details & Listing Pages**
- ➕ **Admin-Only Dashboards** (Create & Manage Products)
- 📱 **Fully Responsive Layouts** for mobile, tablet, and desktop
- 📝 **7-Section Landing Page** with animations and FAQ accordions

---

## 🛠️ Tech Stack

### Frontend
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- Base UI / shadcn components
- Recharts (Data Visualization)
- Material Symbols Outlined (Icons)

### Backend
- Next.js API Routes
- MongoDB Native Driver
- JSON Web Tokens (JWT)
- bcrypt (Password Hashing)

---

## 📁 Project Structure

```text
src
│
├── app
│   ├── api
│   │   ├── login
│   │   ├── logout
│   │   ├── me
│   │   ├── seed          # Database auto-population route
│   │   └── products
│   │       └── [id]
│   │
│   ├── products
│   │   ├── create        # Admin protected
│   │   ├── manage        # Admin protected
│   │   └── [id]
│   │
│   ├── login
│   ├── signup
│   ├── about
│   ├── contact
│   └── privacy
│
├── components
│   ├── forms
│   ├── pages
│   │   └── home          # 7 landing page sections
│   ├── shared
│   └── ui                # Reusable Base UI components
│
├── providers
│   └── AuthProvider.tsx
│
├── hooks
│   ├── useAuth.ts
│   └── use-mobile.ts
│
├── lib
│   ├── mongoConnect.ts
│   └── utils.ts
│
├── types
│
└── proxy.ts              # Next.js Middleware for Route Protection
```

---

## 🔐 Authentication & Authorization

Authentication is implemented using JWT, HTTP-only Cookies, and bcrypt password hashing. Route protection and RBAC are handled using Next.js `proxy.ts`.

**Authentication Flow:**

```text
User Login / Demo Login
      │
      ▼
API Route (/api/login) -> Verify Credentials
      │
      ▼
Generate JWT (Includes User Role)
      │
      ▼
Store HTTP-only Cookie
      │
      ▼
Protected Pages & APIs Check Role (Admin vs User)
```

---

## 📦 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products (supports filters & pages) |
| GET | `/api/products/:id` | Get a single product by ID |
| POST | `/api/products` | Create a new product (Admin) |
| PUT | `/api/products/:id` | Update a product (Admin) |
| DELETE | `/api/products/:id` | Delete a product (Admin) |
| GET | `/api/seed` | Auto-populate DB with mock e-commerce data |

---

## 🔒 Protected Routes

The following routes require an active session and an Admin role:

- `/products/create`
- `/products/manage`

Protection is handled at the edge using `src/proxy.ts`.

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory.

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/?retryWrites=true&w=majority
DATABASE_NAME=zipbuy
JWT_SECRET=your_super_secret_key_here
```

---

## 📥 Installation & Setup

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd zipbuy
```

Install dependencies:

```bash
npm install
```

Seed the Database (Optional):

Start the dev server and visit `http://localhost:3000/api/seed` in your browser to instantly populate MongoDB with realistic products.

Run the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to view the application.

---

## 📈 Future Improvements

- Shopping Cart & Global State Management (Zustand/Redux)
- Wishlist functionality
- Stripe Payment Gateway Integration
- Checkout & Order History Flow
- User Profile Dashboard
- Cloudinary / AWS S3 Image Uploads
- Product Reviews & Ratings Submissions
- Email Verification (SendGrid / Resend)
