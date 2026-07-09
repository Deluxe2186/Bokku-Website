"use client";
import { createContext, useContext, useEffect, useReducer } from "react";

// NOTE for backend integration: this is a MOCK auth system for frontend
// development only. Users and passwords are stored in plain text in
// localStorage, which is NOT secure. Replace signup/login/logout below
// with real API calls (e.g. POST /api/auth/signup, POST /api/auth/login)
// and swap localStorage session for a proper token/session strategy
// once the backend is ready.

const AuthContext = createContext(null);
const USERS_KEY = "bokku-users";
const SESSION_KEY = "bokku-current-user";

function authReducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, user: action.payload, loading: false };
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, { user: null, loading: true });

  useEffect(() => {
    let sessionUser = null;
    try {
      const saved = localStorage.getItem(SESSION_KEY);
      if (saved) sessionUser = JSON.parse(saved);
    } catch {
      // ignore corrupted storage
    }
    dispatch({ type: "HYDRATE", payload: sessionUser });
  }, []);

  const getUsers = () => {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    } catch {
      return [];
    }
  };

  const signup = ({ name, email, password }) => {
    const users = getUsers();
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, error: "An account with this email already exists." };
    }
    const newUser = { name, email, password };
    localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]));
    const session = { name, email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    dispatch({ type: "SET_USER", payload: session });
    return { success: true };
  };

  const login = ({ email, password }) => {
    const users = getUsers();
    const match = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!match) {
      return { success: false, error: "Incorrect email or password." };
    }
    const session = { name: match.name, email: match.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    dispatch({ type: "SET_USER", payload: session });
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    dispatch({ type: "SET_USER", payload: null });
  };

  return (
    <AuthContext.Provider value={{ user: state.user, loading: state.loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
