# Zerodha Clone — Full Stack Trading Platform

A full-stack stock trading platform built with the MERN stack, inspired by Zerodha's Kite interface. Supports user authentication, holdings, positions, orders, and interactive charts.

---

## 🔗 Live Demo

| App | URL |
|---|---|
| Frontend (Landing) | https://0dhaclone.netlify.app |
| Dashboard (Kite) | https://kite-0dha.netlify.app |
| Backend (API) | https://zerodhaclone-d8m1.onrender.com |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, React Router DOM |
| Dashboard | React.js, Chart.js |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Authentication | JWT (JSON Web Tokens), Cookie Parser |
| Charts | Chart.js, react-chartjs-2 |
| Styling | Bootstrap 5 |
| HTTP Client | Axios |
| Notifications | React Toastify |
| Deployment | Netlify (frontend + dashboard), Render (backend) |

---

## 📁 Project Structure

```
zerodha-clone/
├── frontend/         # Landing page, Login, Signup
├── dashboard/        # Kite trading dashboard
└── backend/          # Express REST API
```

---

## ✨ Features

- User Signup and Login with JWT authentication
- Protected routes using middleware
- View Holdings with value and P&L
- View Positions
- Place, modify, and delete Orders
- Interactive line charts for order prices
- Responsive UI inspired by Zerodha Kite
- Toast notifications for user feedback

---

## 🚀 Getting Started Locally

### Prerequisites

- Node.js v18+
- MongoDB Atlas account
- Git

### 1. Clone the repository

```bash
git clone https://github.com/your-username/zerodha-clone.git
cd zerodha-clone
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
MONGO_URL=your_mongodb_atlas_connection_string
TOKEN_KEY=your_jwt_secret_key
PORT=3002
```

Start the backend:

```bash
node index.js
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm start
```

### 4. Setup Dashboard

```bash
cd dashboard
npm install
npm start
```

---

## 🌐 Environment Variables

### Backend (`backend/.env`)

| Variable | Description |
|---|---|
| `MONGO_URL` | MongoDB Atlas connection string |
| `TOKEN_KEY` | Secret key for signing JWT tokens |
| `PORT` | Port to run the server (default: 3002) |

### Frontend & Dashboard

Update `src/enviornment.js` in both:

```javascript
// For local development
const BASE_URL = "http://localhost:3002";

// For production
const BASE_URL = "https://zerodhaclone-d8m1.onrender.com";

export default BASE_URL;
```

---

## 📡 API Endpoints

### Auth Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/signup` | Register a new user |
| POST | `/login` | Login and receive JWT token |
| POST | `/logout` | Logout user |

### Data Routes

| Method | Endpoint | Auth Required | Description |
|---|---|---|---|
| GET | `/allholdings` | No | Get all holdings |
| GET | `/allpositions` | No | Get all positions |
| GET | `/allorders` | ✅ Yes | Get orders for logged-in user |
| POST | `/newOrder` | ✅ Yes | Place a new order |
| PUT | `/updateOrder/:id` | No | Update an existing order |
| DELETE | `/deleteOrder/:id` | No | Delete an order |

---

## 🔐 Authentication Flow

```
1. User logs in via Frontend
2. Backend validates credentials and returns JWT token
3. Token passed in URL to Dashboard (?token=xxx)
4. Dashboard saves token to localStorage
5. All protected API calls send token in Authorization header
6. Backend verifyUser middleware validates token on each request
```

---

## 📊 Charts

Orders and portfolio data are visualized using **Chart.js** via `react-chartjs-2`:

- Line chart showing order prices per stock
- Dynamic labels based on order names
- Color-coded datasets for buy/sell modes

---

## 🚢 Deployment

### Backend → Render

| Setting | Value |
|---|---|
| Root directory | `backend` |
| Build command | `npm install` |
| Start command | `node index.js` |
| Environment variables | `MONGO_URL`, `TOKEN_KEY` |

### Frontend & Dashboard → Netlify

| Setting | Frontend | Dashboard |
|---|---|---|
| Base directory | `frontend` | `dashboard` |
| Build command | `CI=false npm run build` | `CI=false npm run build` |
| Publish directory | `frontend/build` | `dashboard/build` |

> Both frontend and dashboard have a `_redirects` file in `public/` for React Router support:
> ```
> /*    /index.html    200
> ```

---

## 📸 Screenshots
 
### 🏠 Landing Page
<img width="1915" height="938" alt="Landing Page" src="https://github.com/user-attachments/assets/2e31c6fb-2f00-425f-8173-71a74a3fa928" />

### 🔐 Login / Signup
<img width="1909" height="942" alt="Login Signup" src="https://github.com/user-attachments/assets/338f6b5b-1460-4e48-93ad-2b9372014336" />

### 📈 Dashboard — Holdings
<img width="1919" height="933" alt="image" src="https://github.com/user-attachments/assets/5bbfe11a-137b-48e9-b168-644a4a9a5ed4" />

### 🛒 Dashboard — Orders
<img width="1906" height="923" alt="Orders" src="https://github.com/user-attachments/assets/33aefffa-36d5-41cc-b1f5-a1d1c3024303" />

### 💹 Buy / Sell Window
<img width="1906" height="949" alt="Buy Sell Window" src="https://github.com/user-attachments/assets/b89dcd96-47da-47bc-a886-67b2037c1066" />

 
---

## 🙌 Acknowledgements

- Inspired by [Zerodha Kite](https://kite.zerodha.com)
- Built for learning full-stack MERN development

---
## Author 
Mukti Jain

## 📄 License

This project is for educational purposes only and is not affiliated with Zerodha.
