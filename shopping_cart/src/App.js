import React from 'react'
import { useState } from 'react';
import Buypage from './components/Buypage';

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Cart from './components/Cart';
function App() {


const [cartItem, setCartItem] = useState([]);


//adding items to cart

const addInCart = item => {
  const isAlreadyExist = cartItem.findIndex((ele) => ele.idMeal === item.idMeal)
  console.log(isAlreadyExist)
  if (isAlreadyExist !== -1){
    // toast("already exist in the cart", {
    //   type:"error"
    // });
    toast.error(" already exist in the cart ")
    return;
  }
 
  setCartItem([...cartItem,item]);
};

//remove from cart

const removeFromCart = (item) => {
  setCartItem(cartItem.filter(ele => ele.idMeal !== item.idMeal));
}

//buy cart items

const buyNow = () => {
  setCartItem([]);
  toast("purchased successfully",{
    type:"success"
  });
}


  return (
    <div className='flex justify-between' >
      <Buypage addToCart={addInCart}  />
      <Cart  cartItem={cartItem} removeFromCart={removeFromCart} buyNow={buyNow}/>
      <ToastContainer />
    </div>
    
  )
}

export default App
