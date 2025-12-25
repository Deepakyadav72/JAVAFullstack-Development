import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === "") {
      alert("Enter username");
      return;
    }

    // ✅ LOGIN SET
    localStorage.setItem("isLogin", "true");
    localStorage.setItem("user", username);

    // ✅ REDIRECT TO TODO PAGE
    navigate("/todo");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login Page</h2>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
