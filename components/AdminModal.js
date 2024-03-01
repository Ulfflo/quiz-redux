import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./AdminModal.module.css";
import users from "@/data/users";

const AdminModal = ({ onClose }) => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  useEffect(() => {
    // Check if user is already logged in from browser storage
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
    setIsLoading(false); // Update loading state after checking login status
  }, []);

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true"); // Store login state in browser storage
     onClose(); // Close the modal after successful login
      router.push("/admin");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // Remove login state from browser storage
    setUsername("");
    setPassword("");
    setError("");
    onClose(); // Close the modal after logout
    router.push("/");
  };

  const handleClose = () => {
    setUsername("");
    setPassword("");
    setError("");
    onClose(); // Close the modal
  };

  // Render loading state if we're still checking the login status
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {!isLoggedIn ? (
          <>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleLogin}>Login</button>
            {error && <p className="error-message">{error}</p>}
          </>
        ) : (
          <>
            <p>Goodbye!</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminModal;
