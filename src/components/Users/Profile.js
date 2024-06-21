import React from 'react';
import { useState,useEffect } from 'react';
import api, { setAuthToken } from '../../api';
import userImg from '../../assets/images/user1.png'

const Profile = () => {
  const dusers = [
    {
      userId: 'dummyId1',
      userName: 'dummyUser1',
      email: 'dummy1@example.com',
      password: 'dummyPassword1',
      role: 'user'
    },
    {
      userId: 'dummyId2',
      userName: 'dummyUser2',
      email: 'dummy2@example.com',
      password: 'dummyPassword2',
      role: 'admin'
    },
    {
      userId: 'dummyId3',
      userName: 'dummyUser3',
      email: 'dummy3@example.com',
      password: 'dummyPassword3',
      role: 'user'
    },
    {
      userId: 'dummyId3',
      userName: 'dummyUser3',
      email: 'dummy3@example.com',
      password: 'dummyPassword3',
      role: 'user'
    }
  ];
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const token = process.env.REACT_APP_TOKEN;
  //     setAuthToken(token);
  //     const response = await api.get('/users');
  //     setUsers(response.data);
  //   };
  //   console.log(users);
  //   fetchUsers();
  // }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-800 p-4 text-white text-center">
            <h2 className="text-2xl font-semibold">User Profiles</h2>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {dusers.map((user, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-4">
                <div className="flex items-center mb-4">
                  <img
                    className="w-16 h-16 rounded-full mr-4"
                    src={userImg}
                    alt="User Avatar"
                  />
                  <div>
                    <p className="text-xl font-semibold text-gray-900">{user.userName}</p>
                    <p className="text-gray-600">{user.email}</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-2">Role:</p>
                  <p className="text-gray-600">{user.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
