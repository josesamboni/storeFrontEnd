// import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetCartOrderQuery } from '../api/api';
// import { useDeleteOrderMutation } from '../api/api';
// import { useGetOrderDetailQuery } from '../api/api';

const Cart = () => {
  // const dispatch = useDispatch();
  const {token} = useSelector(state=>state.auth);
  const {cart} = useSelector(state=>state.order);
  useGetCartOrderQuery({token});
  console.log(cart)
  // Fetch orders for the current user
  
  // Remove order from the cart
  // const handleRemoveOrder = (orderId) => {
  //   dispatch(deleteOrder(orderId));
  // };

  // Render loading state
  // if (isLoading) return <div>Loading...</div>;

  // // Render error state
  // if (isError) return <div>Error fetching cart</div>;

  return (
    <div>
      <h2>Cart</h2>
      {!cart?<>Empty Cart</>:<>Order ID:{cart.order.id} {cart.info.map(item=>{
        return <div key={item.id}> <h2>{item.itemInfo.productName}</h2><p>Price: {item.itemInfo.price}</p> <p>Quantity: {item.quantity}</p></div>
      })}</>}
      {/* {orders.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <div>Order ID: {order.id}</div>
              <div>Product Name: {order.productName}</div>
              <div>Quantity: {order.quantity}</div>
              <button onClick={() => handleRemoveOrder(order.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default Cart;
