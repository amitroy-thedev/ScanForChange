import React, { useState } from 'react';
import { Key, Mail } from 'lucide-react';
import image from "./imageForLogin.jpg"
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with', email, password);
  };

  return (
<div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-400 to-white">
    <div>
    <div className="flex flex-col items-center  p-4 rounded-lg">
      <h1 className="text-3xl font-bold">
        <span>ScanForChange</span>
      </h1>
      <p className="text-gray-600">Recycle Smart, Earn Rewards</p>
    </div>
  <div className="w-full max-w-3xl shadow-lg rounded-2xl bg-white p-10 flex flex-col md:flex-row items-center">
    <img src={image} className="w-1/2 max-w-xs md:max-w-sm" alt="login image" />
    <div className="flex-1 w-full md:w-1/2">
      <h2 className="text-green-600 text-2xl font-bold text-center mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">Email</label>
          <div className="flex items-center border rounded p-2">
            <Mail className="mr-2 text-gray-500" />
            <input
              id="email"
              type="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-[20px] outline-none"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium">Password</label>
          <div className="flex items-center border rounded p-2">
            <Key className="mr-2 text-gray-500" />
            <input
              id="password"
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full h-[20px] outline-none"
            />
          </div>
        </div>
        <button type="submit" className="w-full h-[40px] bg-green-600 hover:bg-green-700 text-white p-2 rounded text-lg">
          Log in
        </button>
      </form>
    </div>
    </div>
  </div>
</div>

  );
};

export default Login;
