import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
export default function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  function handleClick() {
    navigate("/home/profile", { state :{username} });
  }

  return (
    <div>
      <h1>DashBoard</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleClick}>Go to Profile page</button>
    </div>
  );
}
