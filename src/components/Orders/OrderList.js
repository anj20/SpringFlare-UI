import React, { useState, useEffect } from 'react';
import api, { setAuthToken } from '../../api';

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
    <div className="container mx-auto mt-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gray-800 p-4 text-white">
          <h1 className="text-2xl font-semibold">Order List</h1>
        </div>
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Product ID</th>
                  <th className="py-3 px-6 text-left">Quantity</th>
                  <th className="py-3 px-6 text-left">Total Price</th>
                  <th className="py-3 px-6 text-left">Order Date</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {orders.map((order) => (
                  <tr key={order.orderId} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">{order.productId}</td>
                    <td className="py-3 px-6 text-left">{order.quantity}</td>
                    <td className="py-3 px-6 text-left">{order.totalPrice}</td>
                    <td className="py-3 px-6 text-left">{new Date(order.orderDate).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
