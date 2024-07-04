import React, { useState, useEffect } from 'react';
import api, { setAuthToken } from '../../api';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginUser = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const findUser = (users, formData) => {
    if (!Array.isArray(users) || !formData || !formData.username || !formData.password) {
      return null;
    }
    const user = users.find(user => {
      return String(user.userName) === String(formData.username) && String(user.password) === String(formData.password)
    });
    return user;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = process.env.REACT_APP_TOKEN;
      setAuthToken(token);
      const response = await api.get('/users');
      const users = response.data;
      const user = findUser(users, formData);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        console.log('User logged in:', user);
        navigate('/');
        window.location.reload();
      } 
      else {
        console.error('Login error: Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-user-page min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden md:max-w-lg mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 text-white text-center">
            <h2 className="text-3xl font-bold">Login User</h2>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
