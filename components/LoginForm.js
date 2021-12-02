import { useState } from "react";
import { useAuth } from "../contexts/auth";
export default function LoginForm() {
  const { login } = useAuth();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    login(userName, password);
  };
  return (
    
    <div className="relative min-h-screen border border-black">
      <h1 className="flex flex-col justify-center w-1/2 m-auto mt-40 text-2xl text-center bg-green-300 rounded-xl h-28 ">
        
    
        <a   href="https://jehadabuawwad.netlify.app/"> Made By Jehad Abu Awwad</a>
        Cookie Stand Application</h1>
      <form
        
        className="flex flex-col justify-center w-1/2 gap-2 m-auto mt-20 align-middle bg-green-400 rounded-lg"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col pt-10 m-4">
          <label className="mb-2 font-bold text-center"> User Name</label>
          <input
            className="px-1 py-1 rounded h-14"
            type="text"
            placeholder=" User Name"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="flex flex-col m-4 ">
          <label className="mb-2 font-bold text-center ">Password</label>
          <input
            className="px-1 py-1 rounded h-14"
            type="password"
            placeholder=" Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-1/4 py-1 m-auto mt-2 mb-4 bg-green-100 rounded rounded-md h-14 hover:bg-green-300"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
