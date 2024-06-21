import React, {useState, useEffect} from 'react';
import api, { setAuthToken } from '../../api';
const UserRegister = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    role: ''
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users', formData);
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  useEffect(() => {
    const setToken = async () => {
      const token = process.env.REACT_APP_TOKEN;
      setAuthToken(token);
    };
    setToken();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E2A38]">
      <div className="max-w-md w-full bg-white rounded-lg overflow-hidden md:max-w-xl shadow-lg">
        <div className="md:flex">
          <div className="w-full p-4 px-6 py-8">
            <h2 className="text-xl font-semibold text-[#333333] mb-2 text-center">User Registration</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="userName" className="block text-sm font-medium text-[#BBBBBB]">Username</label>
                <input
                  id="userName"
                  type="text"
                  value={formData.userName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-[#CCCCCC] rounded-md shadow-sm focus:outline-none focus:border-[#008080] focus:ring-[#008080]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#BBBBBB]">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-[#CCCCCC] rounded-md shadow-sm focus:outline-none focus:border-[#008080] focus:ring-[#008080]"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#BBBBBB]">Password</label>
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-[#CCCCCC] rounded-md shadow-sm focus:outline-none focus:border-[#008080] focus:ring-[#008080]"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-[#BBBBBB]">Role</label>
                <input
                  id="role"
                  type="text"
                  value={formData.role}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-[#CCCCCC] rounded-md shadow-sm focus:outline-none focus:border-[#008080] focus:ring-[#008080]"
                />
              </div>
              <div>
                <button type="submit" className="w-full bg-[#008080] hover:bg-[#006666] text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008080] focus:ring-opacity-50">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserRegister;
