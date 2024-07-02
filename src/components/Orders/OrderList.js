import React, { useState, useEffect } from 'react';
import api, { setAuthToken } from '../../api';
import './OrderList.css';

const OrderList = () => {
  const [orders, setOrders] = useState([
    {
      orderId: 'order1',
      userId: 'user1',
      productId: 'product1',
      quantity: 2,
      totalPrice: 50.0,
      orderDate: new Date('2023-06-15')
    },
    {
      orderId: 'order2',
      userId: 'user2',
      productId: 'product2',
      quantity: 1,
      totalPrice: 30.0,
      orderDate: new Date('2023-06-16')
    },
    {
      orderId: 'order3',
      userId: 'user1',
      productId: 'product3',
      quantity: 3,
      totalPrice: 80.0,
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
                  <th className="py-3 px-6 text-left">Order ID</th>
                  <th className="py-3 px-6 text-left">User ID</th>
                  <th className="py-3 px-6 text-left">Product ID</th>
                  <th className="py-3 px-6 text-left">Quantity</th>
                  <th className="py-3 px-6 text-left">Total Price</th>
                  <th className="py-3 px-6 text-left">Order Date</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {orders.map((order) => (
                  <tr key={order.orderId} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">{order.orderId}</td>
                    <td className="py-3 px-6 text-left">{order.userId}</td>
                    <td className="py-3 px-6 text-left">{order.productId}</td>
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
