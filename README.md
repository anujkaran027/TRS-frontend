# TRS Frontend (React + Vite)

> A modern travel recommendation platform built with **React**, **Vite**, and **React Router**.  
> Powered by ML-driven suggestions from the [TRS Backend](https://github.com/anujkaran027/TRS-backend.git).

**Live Demo:** [MapMate](https://trs-frontend.netlify.app)

---

## Features

- **Personalized Recommendations** using ML
- User authentication (Login / Register)
- Like & save favorite destinations
- Responsive UI with Bootstrap
- Client-side routing with React Router

---

## Tech Stack

- **React 18** + **Vite**
- **React Router DOM v6**
- **Axios** for API calls
- **JWT Authentication**
- **Bootstrap 5**
- **Netlify** for hosting

---

## Local Development

### 1. Clone the repo
```bash
git clone https://github.com/anujkaran027/TRS-frontend.git
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment
```bash
# Create `.env` in the root:
VITE_API_URL=http://127.0.0.1:8000 # your backend url
```

### 4. Run dev server
```bash
npm run dev
```

---

## Deployment (Netlify)

### Netlify Settings

| Setting       | Value                          |
|-----------|-------------------------------------|
| **Build command**  | `npm run build` |
| **Publish directory**   | `dist`   |
| **Environment variable** | VITE_API_URL=`Your_Backend_Url` |

---