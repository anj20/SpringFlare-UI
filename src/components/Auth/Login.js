import React, { useState,useEffect } from 'react';
import api, { setAuthToken } from '../../api';
import { redirect } from 'react-router-dom';
import { getAccessToken } from '../../api/oktatoken';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // await setAuthToken(process.env.REACT_APP_TOKEN);
    try {
      const response = await api.get(`/users`);
      console.log(response);
      redirect("/dashboard");
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  useEffect(() => {
    const fetchAccessTokenAndGetData = async () => {
      const token = process.env.REACT_APP_TOKEN;
      setAuthToken(token);
      handleLogin();
    };
    fetchAccessTokenAndGetData();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <button type="submit" className="w-full px-3 py-2 text-white bg-blue-500 rounded-md">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

