import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Form.css"

function Form({ route, method }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "LOG IN" : "SIGN IN";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                // Dispatch custom event to notify navbar of auth change
                window.dispatchEvent(new Event('authChange'));
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

  return (
    <div className="wrapper">
        <div className="logo">
            <img src="https://cdn-icons-png.flaticon.com/512/6213/6213814.png" alt="" />
        </div>
        <div className="text-center mt-4 name">
            MapMate
        </div>
        <form className="p-3 mt-3" onSubmit={handleSubmit}>
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username" 
                />
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input 
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                />
            </div>
            <button type="submit" className="btn mt-3">{name}</button>
        </form>
        <div className="text-center fs-6">
        {method === "login" ? (
            <Link to="/register">SIGN UP</Link>
        ) : (
            <Link to="/login">LOG IN</Link>
        )}
        </div>
    </div>
  );
}

export default Form;