import React, { useState, useEffect } from 'react';
import api, { setAuthToken } from '../../api';
import './OrderList.css';

const OrderList = () => {
  const [orders, setOrders] = useState([
    {
      orderId: '1',
      userId: '41715a50-cd5c-46ec-8829-0139a413546d',
      productId: 'd4f4f8c4-628f-4b68-a927-7f61c514d426',
      productName: 'Monitor',
      quantity: 2,
      totalPrice: 238.99,
      orderDate: new Date('2023-06-15')
    },
    {
      orderId: '2',
      userId: '76eaec03-d9de-4976-842a-575a9cc28cf0',
      productId: 'b053adc7-aa08-43b7-9c40-c841a7a5b5ab',
      productName: 'Smartphone',
      quantity: 1,
      totalPrice: 599.99,
      orderDate: new Date('2023-06-16')
    },
    {
      orderId: '3',
      userId: 'dcdfdfab-6b25-48c6-91a1-011233dc90a2',
      productId: '05fbca6e-ba08-4e0e-8a4b-a8b00b681d1d',
      productName: 'Microphone',
      quantity: 3,
      totalPrice: 20.0,
      orderDate: new Date('2023-06-17')
    },
    {
      orderId: '4',
      userId: 'df9d068e-8ba3-48cb-ae97-c681a4876125',
      productId: 'e9fe36e4-3fd9-4c0d-8752-d2cfbd58332c',
      productName: 'E-reader',
      quantity: 2,
      totalPrice: 12.9,
      orderDate: new Date('2023-06-17')
    },
    {
      orderId: '5',
      userId: '0ed3fdd6-ad6d-4423-a941-d19a38fd2436',
      productId: 'f2d6f8d4-7393-47c5-9129-d660f7fd75bb',
      productName: 'Fitness Tracker',
      quantity: 4,
      totalPrice: 90,
      orderDate: new Date('2023-06-17')
    },
    {
      orderId: '6',
      userId: 'dcdfdfab-6b25-48c6-91a1-011233dc90a2',
      productId: 'f52a3d1a-063f-4fd8-b84e-7c0153d2b9fb',
      productName: 'Portable Projector',
      quantity: 9,
      totalPrice: 299.9,
      orderDate: new Date('2023-06-17')
    }
  ]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = process.env.REACT_APP_TOKEN;
      setAuthToken(token);
      try {
        const response = await api.get('/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
        // Handle error state or alert the user
      }
    };
    fetchOrders();
  }, []);
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };
  return (
    <div className="order-list-page min-h-screen bg-gray-100">
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 text-white text-center">
          <h2 className="text-3xl font-bold">Order List</h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Order No.</th>
                  <th className="py-3 px-6 text-left">User ID</th>
                  <th className="py-3 px-6 text-left">Product ID</th>
                  <th className="py-3 px-6 text-left">Product Name</th>
                  <th className="py-3 px-6 text-left">Quantity</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-left">Order Date</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {orders.map((order) => (
                  <tr key={order.orderId} className="border-b border-gray-200 hover:bg-gray-100 order-row">
                    <td className="py-3 px-6 text-left whitespace-nowrap">{order.orderId}</td>
                    <td className="py-3 px-6 text-left">{truncateText(order.userId, 10)}</td>
                    <td className="py-3 px-6 text-left">{truncateText(order.productId, 10)}</td>
                    <td className="py-3 px-6 text-left">{order.productName}</td>
                    <td className="py-3 px-6 text-left">{order.quantity}</td>
                    <td className="py-3 px-6 text-left">${order.totalPrice.toFixed(2)}</td>
                    <td className="py-3 px-6 text-left">{new Date(order.orderDate).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default OrderList;
