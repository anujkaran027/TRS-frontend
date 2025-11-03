import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Explore from "./pages/Explore"
import Suggestions from "./pages/Suggestion"
import LikedLocations from "./pages/LikedLocations"
import ProtectedRoute from "./components/ProtectedRoute"
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Logout() {
  localStorage.clear()
  // Dispatch custom event to notify navbar of auth change
  window.dispatchEvent(new Event('authChange'));
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
            }
        />
        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <Explore />
            </ProtectedRoute>
            }
        />
        <Route
          path="/suggest"
          element={
            <ProtectedRoute>
              <Suggestions />
            </ProtectedRoute>
            }
        />
        <Route
          path="/liked"
          element={
            <ProtectedRoute>
              <LikedLocations />
            </ProtectedRoute>
            }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
