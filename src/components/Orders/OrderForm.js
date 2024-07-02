import React, { useState, useEffect } from 'react';
import api, { setAuthToken } from '../../api';
import "./OrderForm.css"

const OrderForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    productId: '',
    quantity: '',
    totalPrice: '',
    orderDate: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/orders', formData);
      console.log('Order registered:', response.data);
    } catch (error) {
      console.error('Error registering orders:', error);
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
    <div className="order-form-page min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden md:max-w-lg mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 text-white text-center">
            <h2 className="text-3xl font-bold">Add Order</h2>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="userId" className="block text-sm font-medium text-gray-700">User ID</label>
                <input
                  id="userId"
                  type="text"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="productId" className="block text-sm font-medium text-gray-700">Product ID</label>
                <input
                  id="productId"
                  type="text"
                  name="productId"
                  value={formData.productId}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                <input
                  id="quantity"
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="totalPrice" className="block text-sm font-medium text-gray-700">Total Price</label>
                <input
                  id="totalPrice"
                  type="number"
                  name="totalPrice"
                  value={formData.totalPrice}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="orderDate" className="block text-sm font-medium text-gray-700">Order Date</label>
                <input
                  id="orderDate"
                  type="date"
                  name="orderDate"
                  value={formData.orderDate}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Add Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
