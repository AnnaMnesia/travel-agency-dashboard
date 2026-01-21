# 🌍 Travel Agency Platform

A modern travel agency web application with an admin dashboard and a public website.
This project allows users to explore trips, generate AI-powered itineraries, and manage bookings, while admins can manage trips, users, and analytics.

---

## ✨ Why I Built This Project

I built this project to **practice building a real-world frontend application** that goes beyond simple CRUD apps.

My main goals were:
- To understand how **large React projects are structured**
- To work with **real backend services** instead of mock data
- To practice **authentication, dashboards, and data-driven UI**
- To learn how AI APIs can be integrated into real products

I wanted a project that feels like something a real company could ship, not just a tutorial demo.

---

## 🧠 Problem I Wanted to Solve

Many travel platforms:
- Don’t personalize trips well
- Have separate tools for admins and users
- Lack clear dashboards and analytics

This project solves that by:
- Generating **AI-based travel itineraries** based on user preferences
- Providing a **public booking experience**
- Giving admins a **dashboard** to manage trips, users, and statistics in one place

---

## 🛠️ Tech Stack

- **React 19**
- **React Router v7 (Framework Mode)**
- **Vite**
- **Tailwind CSS**
- **Appwrite (Auth + Database)**
- **Syncfusion (Charts & Tables)**
- **Gemini AI (Itinerary generation)**
- **Stripe (Payments)**
- **Unsplash API (Images)**

---

## 🔋 Features

- AI-powered trip itinerary generation
- Public website for browsing and booking trips
- Admin dashboard for managing trips and users
- User growth and trip analytics
- Interactive charts and statistics tables
- Responsive design (mobile & desktop)
- Secure authentication and role-based access
- Reusable and modular component architecture

---

## 📁 Project Structure

The project is organized to scale and stay maintainable:


```bash
app/
 ├── appwrite/        # Appwrite client, auth & database logic
 ├── components/      # Reusable UI components
 ├── constants/       # Static values & configs
 ├── lib/             # Helper utilities
 ├── routes/          # App routes (admin, api, root)
 ├── styles/          # Global styles
 ├── entry.client.tsx # Client entry
 ├── entry.server.tsx # Server entry
 └── root.tsx         # App root layout
```

I focused on keeping **business logic separate from UI** and making components reusable.

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- npm
- Git

### Installation

```bash
git clone https://github.com/your-username/travel-agency-platform.git
cd travel-agency-platform
npm install
```

--- 

### Environment Variables

Create a .env file in the root:
```env
VITE_SYNCFUSION_LICENSE_KEY=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_API_ENDPOINT=
VITE_APPWRITE_API_KEY=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_USERS_COLLECTION_ID=
VITE_APPWRITE_ITINERARY_COLLECTION_ID=
STRIPE_SECRET_KEY=
GEMINI_API_KEY=
UNSPLASH_ACCESS_KEY=
VITE_BASE_URL="http://localhost:5173"
```

### Run the App

```bash
npm run dev
```

--- 

## 📚 What I Learned

- How to structure a scalable React application
- Working with authentication and protected routes
- Integrating third-party APIs and services
- Building dashboards and data visualizations
- Writing cleaner, more maintainable frontend code

--- 

## 🔮 Future Improvements

- Improve error handling and loading states
- Add more trip customization options
- Improve accessibility (ARIA & keyboard support)
- Add tests for critical components





