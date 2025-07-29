# 🛒 CartCraze - (Pre College Repo)

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://mysql.com/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

CartCraze is a modern, full-stack e-commerce platform built with Next.js App Router, featuring a sleek dark theme design and comprehensive shopping functionality. Shop the latest trends with flash sales, top deals, and trending brands all in one place.

### HomePage

![HomePage](<Screenshot 2025-07-28 at 10.50.34 PM-min.png>)

### Cart SideBar

![CartSideBar](<Screenshot 2025-07-28 at 10.53.25 PM-min.png>)

### Trending Brands

![Trending Brands](<Screenshot 2025-07-28 at 10.51.01 PM-min.png>)

### One of the category

![One of the category](<Screenshot 2025-07-28 at 10.51.34 PM-min.png>)

## Product

![Product](<Screenshot 2025-07-28 at 10.52.43 PM-min.png>)

### Login page

![Login page](<Screenshot 2025-07-28 at 10.54.00 PM-min.png>)

### Checkout page

![Checkout page 1st half](<Screenshot 2025-07-28 at 10.54.40 PM-min.png>)
![Checkout page 2nd half](<Screenshot 2025-07-28 at 10.54.48 PM-min.png>)

## Features

### Shopping Experience

- **Flash Sales** - Limited time offers with countdown timers
- **Top Deals** - Best prices on premium products
- **Trending Brands** - Popular products from trusted brands
- **Smart Search** - Advanced product search functionality
- **Product Categories** - Organized shopping across multiple categories

### Modern UI/UX

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Theme** - Elegant gray-scale design with accent colors
- **Smooth Animations** - Hover effects and transitions
- **Interactive Elements** - Dynamic cart, ratings, and product cards

### User Management

- **Authentication System** - Secure login and signup
- **User Profiles** - Personalized shopping experience
- **Order Management** - Track purchases and returns

### Shopping Cart & Checkout

- **Dynamic Cart** - Real-time cart updates
- **Sidebar Cart** - Quick cart access without page reload
- **Secure Checkout** - Streamlined purchase process
- **Order Tracking** - Complete order management

## Tech Stack

### Frontend

- **Next.js 14** - App Router for modern React applications
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Comprehensive icon library

### Backend

- **Next.js API Routes** - Server-side API endpoints
- **MySQL** - Relational database for data storage
- **RESTful APIs** - Clean API architecture

### Key Libraries

- **React Hooks** - Modern state management
- **Next.js Image** - Optimized image loading
- **Custom Components** - Reusable UI components

## Project Structure

```
cartcraze/
├── public/
│   ├── Care/                           # Personal care product images
│   ├── Essentials/                     # Essential product images
│   ├── Gadgets/                        # Gadget product images
│   ├── Travel/                         # Travel product images
│   ├── favicon.png                     # Site favicon
│   └── login.jpg                       # Login page background
├── src/
│   ├── lib/
│   │   └── db.js                       # Database connection & queries
│   └── app/
│       ├── page.js                     # Main homepage
│       ├── layout.js                   # Root layout component
│       ├── globals.css                 # Global styles
│       ├── [slug]/
│       │   └── page.js                 # Dynamic product detail pages
│       ├── products/
│       │   ├── cares/page.js           # Personal care category
│       │   ├── essentials/page.js      # Essential products category
│       │   ├── gadgets/page.js         # Tech gadgets category
│       │   └── travels/page.js         # Travel accessories category
│       ├── search/
│       │   └── [slug]/page.js          # Dynamic search results
│       ├── authentication/
│       │   ├── login/                  # User login page
│       │   └── signup/                 # User registration page
│       ├── checkout/                   # Purchase flow pages
│       ├── components/                 # Reusable UI components
│       ├── Data/
│       │   ├── CartCraze-DB.sql        # Database schema & structure
│       │   └── userData/
│       │       └── userPurchases.json  # User orders storage
│       └── api/
│           ├── highlights/
│           │   └── route.js            # Featured products API
│           ├── products/
│           │   └── [slug]/route.js     # Product details API
│           ├── search/
│           │   └── [slug]/route.js     # Search functionality API
│           └── purchase/
│               └── route.js            # Order management API
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MySQL database
- npm or yarn package manager

### Installation

1. **Clone the repository**

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Environment Setup**

Create a `.env.local` file in the root directory:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD="yourpassword"
DB_NAME=cartcrazeDB
DB_PORT=3306
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. **Database Setup**

Set up your MySQL database, take help from the Data/CartCraze-DB.sql for setup:

5. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🎯 Key Pages & Functionality

### 🏠 Homepage (`/`)

- Hero section with call-to-action
- Flash sales with limited-time offers
- Top deals showcase
- Trending brands section
- Dynamic product loading from API

### 📱 Category Pages

- **Essentials** (`/essentials`) - Daily necessities
- **Cares** (`/cares`) - Personal care products
- **Gadgets** (`/gadgets`) - Latest technology
- **Travels** (`/travels`) - Travel accessories

### 🔍 Search & Discovery

- **Search Page** (`/search/[slug]`) - Advanced product search
- **Product Slug Pages** - Dynamic product details
- **Category Filtering** - Easy product discovery

### 👤 User Features

- **Login** (`/login`) - User authentication
- **Signup** (`/signup`) - New user registration
- **Checkout** (`/checkout`) - Secure purchase flow

## 🔧 API Endpoints

### Product Management

- `POST /api/highlights` - Get featured products
- `GET /api/search/[slug]` - Search products
- `GET /api/products/[slug]` - Get product details

### Order Management

- `POST /api/purchases` - Create new order

## 🎨 UI Components

### Core Components

- **Header** - Navigation with cart and user menu
- **Footer** - Site information and links
- **CartButton** - Add to cart with quantity selection
- **BuyButton** - Direct purchase functionality
- **CartSidebar** - Slide-out shopping cart

### Features

- **Responsive Design** - Mobile-first approach
- **Loading States** - Smooth user experience
- **Error Handling** - Graceful error management
- **Accessibility** - WCAG compliant

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

### Code Style

- **Tailwind CSS** for styling
- **Component-based architecture**

## Database Schema

### Key Tables

- **gadgets**
- **travels**
- **essentials**
- **cares**

## Deployment

### Build & Deploy

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## Authors

- **ABHISEK DASH** - _mian_ - [@abhisekdash](https://github.com/Abhisek-Dash-Official/)

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- React Icons for the comprehensive icon library

---

**CartCraze** - _Shop Smart, Shop Easy_ 🛒✨
