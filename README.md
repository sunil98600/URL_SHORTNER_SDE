# 🔗 Link Analytics Dashboard

A full-stack Micro-SaaS application that allows users to shorten URLs, track total clicks, analyze usage over time, and generate QR codes for easy sharing. Built with **React**, **Redux Toolkit**, **Express.js**, **MongoDB**, and hosted on **Vercel + Render**.

---

## 🚀 Features

### ✅ Frontend (React + Redux)
- User authentication
- Create short links with custom aliases and expiration dates
- View a dashboard of all created links
- Analytics: total clicks, created date, expiration status
- Clicks over time chart (Line Chart)
- QR code generation for each shortened link
- Responsive & clean UI

### ✅ Backend (Express + MongoDB)
- User login/register with JWT auth
- Create & manage short URLs
- Track and return analytics data (clicks, device info, timestamps)
- MongoDB schema for users, links, analytics

---

## 🛠️ Tech Stack

- **Frontend**: React, Redux Toolkit, Tailwind CSS, Recharts
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Charting**: Recharts
- **QR Code**: qrcode.react
- **Deployment**: Vercel (Frontend), Render (Backend)

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/link-analytics-dashboard.git
cd link-analytics-dashboard

```
### 2.Backend Setup (in /server)
```bash
cd server
npm install
```

#### Create a .env file in server/
```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
BASE_URL=https://your-render-backend-url.com
```

#### Run
```bash
npm start
```
### 3.3. Frontend Setup (in /client)
```bash
cd ../client
npm install
```
#### Run
```bash
npm run dev
```

link-analytics-dashboard/
├── client/                # Frontend (React + Redux + Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/         # Static images, icons
│   │   ├── components/     # Reusable components (e.g., Navbar, QRCode)
│   │   ├── features/       # Redux slices
│   │   │   ├── auth/       # Auth slice
│   │   │   └── links/      # Link slice and API logic
│   │   ├── pages/          # Pages like Dashboard, Login, Register
│   │   ├── App.jsx         # Main App component
│   │   └── main.jsx        # ReactDOM rendering
│   ├── .env                # VITE_API_URL
│   ├── index.html
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/               # Backend (Node.js + Express)
│   ├── controllers/       # Logic for routes (e.g., linkController.js)
│   ├── middleware/        # Middleware like auth, error handlers
│   ├── models/            # Mongoose models (User, Link, Analytics)
│   ├── routes/            # Route definitions
│   ├── utils/             # Utility functions (optional)
│   ├── .env               # Mongo URI, JWT_SECRET, etc.
│   ├── index.js           # Entry point
│   └── package.json
│
├── .gitignore
├── README.md


### Features
Device/browser pie charts

Email link stats reports

Admin dashboard

Multi-user analytics export

### *Made with ❤️ by Sunil Patil*
