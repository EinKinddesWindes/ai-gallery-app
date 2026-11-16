
import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { isAdmin } from "../admin";

const provider = new GoogleAuthProvider();

export default function AdminLogin() {
  const [user, setUser] = useState(null);
  const admin = isAdmin(user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  async function handleLogin() {
    setError("");

    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      if (err.code !== "auth/popup-closed-by-user") {
        setError("Die Anmeldung ist fehlgeschlagen.");
        console.error(err);
      }
    }
  }

  async function handleLogout() {
    try {
      await signOut(auth);
    } catch (err) {
      setError("Die Abmeldung ist fehlgeschlagen.");
      console.error(err);
    }
  }

  const buttonStyle = {
    background: "transparent",
    border: "none",
    color: "#777",
    fontFamily: "Arial, sans-serif",
    fontSize: 12,
    cursor: "pointer",
    padding: "8px 0",
  };

  if (loading) return null;

  return (
    <div style={{ textAlign: "center" }}>
      {user ? (
        <button style={buttonStyle} onClick={handleLogout}>
          Abmelden
        </button>
      ) : (
        <button style={buttonStyle} onClick={handleLogin}>
          Login
        </button>
      )}

      {error && (
        <p style={{ color: "#a33", fontSize: 12 }}>
          {error}
        </p>
      )}
    </div>
  );
}
