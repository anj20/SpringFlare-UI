import React, { useState, useEffect } from 'react';
import api, {setAuthToken} from '../../api';
import './ProductList.css';
import user1Image from '../../assets/images/user1.jpeg';
// import heroImg from "../../assets/images/heroimg.png";

const ProductList = () => {
  const [products , setProducts] = useState([
    {
      "id": "1",
      "name": "Oracle Database",
      "description": "A multi-model database management system produced and marketed by Oracle Corporation.",
      "price": 9999.99
    },
    {
      "id": "2",
      "name": "Oracle Cloud Infrastructure",
      "description": "A set of complementary cloud services that enable you to build and run a wide range of applications and services.",
      "price": 19999.99
    },
    {
      "id": "3",
      "name": "Oracle Enterprise Manager",
      "description": "Provides a comprehensive monitoring and management solution for Oracle Database and Engineered Systems deployed in cloud or customer data centers.",
      "price": 4999.99
    },
    {
      "id": "4",
      "name": "Oracle Java SE",
      "description": "The world's leading development platform for secure, enterprise-grade applications.",
      "price": 199.99
    },
    {
      "id": "5",
      "name": "Oracle Autonomous Database",
      "description": "A cloud database that uses machine learning to automate database tuning, security, backups, updates, and other routine management tasks traditionally performed by database administrators.",
      "price": 12999.99
    },
    {
      "id": "6",
      "name": "Oracle ERP Cloud",
      "description": "A complete, innovative, and proven solution for organizations of all sizes and industries.",
      "price": 14999.99
    },
    {
      "id": "7",
      "name": "Oracle HCM Cloud",
      "description": "A comprehensive suite of tools designed to manage human resources functions.",
      "price": 12999.99
    },
    {
      "id": "8",
      "name": "Oracle E-Business Suite",
      "description": "A comprehensive suite of integrated, global business applications.",
      "price": 19999.99
    },
    {
      "id": "9",
      "name": "Oracle CRM On Demand",
      "description": "A robust, comprehensive customer relationship management solution that provides a powerful platform for sales, marketing, and service organizations.",
      "price": 10999.99
    },
    {
      "id": "10",
      "name": "Oracle Analytics Cloud",
      "description": "A complete platform that allows you to ask any question of any data in any environment on any device.",
      "price": 7999.99
    }
  ]);
  useEffect(() => {
    const fetchProducts = async () => {
      const token = process.env.REACT_APP_TOKEN;
      setAuthToken(token);
      const response = await api.get('/products');
      console.log(response);
      setProducts(response.data);
    };
    fetchProducts();
    console.log(products);
  }, []);
  return (
    <div className="products-page min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 text-white text-center">
            <h2 className="text-3xl font-bold">Products</h2>
          </div>
          <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-50 rounded-lg shadow-md p-6 transform hover:-translate-y-2 transition-transform duration-300 product-card">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700 font-semibold mb-2">Price:</p>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
