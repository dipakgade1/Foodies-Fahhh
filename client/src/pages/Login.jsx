import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // for redirect after login

  const handleLogin = async () => {

    try {

      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await response.json();

      console.log(data);

      if(response.ok){

        localStorage.setItem("isLoggedIn","true"); // ⭐ SAVE LOGIN STATUS
        localStorage.setItem("userEmail", email);  // ⭐ OPTIONAL USER INFO

        alert("Login Successful");

        navigate("/"); // ⭐ redirect to Home

      }else{
        alert("Invalid Email or Password");
      }

    } catch (error) {

      console.error("Login Error:", error);

    }

  };

  return (
    <div
      className="min-h-screen pt-24 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1552566626-52f8b828add9')",
      }}
    >
      <div className="bg-black/70 p-8 rounded-xl w-96 text-white shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-white text-black outline-none"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full mb-6 p-3 rounded bg-white text-black outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;