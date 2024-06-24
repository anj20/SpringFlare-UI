import React, { useState, useEffect } from 'react';
import api, { setAuthToken } from '../../api';
import './ProductForm.css';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/products', formData); // Assuming /products is your endpoint for adding products
      console.log('Product registered:', response.data);
      setFormData({
        name: '',
        price: '',
        description: ''
      });
    } catch (error) {
      console.error('Error registering product:', error);
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
    <div className="product-form-page min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden md:max-w-lg mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 text-white text-center">
            <h2 className="text-3xl font-bold">ADD PRODUCT</h2>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                  rows="3"
                ></textarea>
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  id="price"
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
