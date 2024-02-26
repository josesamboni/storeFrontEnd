//import React from 'react';
import { useSelector } from 'react-redux';
import { useGetCartOrderQuery } from '../api/api';

const Cart = () => {
  const { token } = useSelector(state => state.auth);
  const { cart } = useSelector(state => state.order);
  useGetCartOrderQuery({ token });

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Cart</h2>
      {!cart ? (
        <div style={{ textAlign: 'center', color: '#999' }}>Cart is Empty</div>
      ) : (
        <div>
          <h3 style={{ color: '#555' }}>Order ID: {cart.order.id}</h3>
          {cart.info.map(item => (
            <div key={item.id} style={{ border: '1px solid #eee', padding: '10px', margin: '10px 0', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
              <h4 style={{ color: '#007bff' }}>{item.itemInfo.productName}</h4>
              <p>Price: ${item.itemInfo.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;