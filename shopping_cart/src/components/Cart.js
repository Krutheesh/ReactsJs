import React from 'react'

function Cart({cartItem,removeFromCart,buyNow}) {
  console.log(cartItem)
  let amount = 0;
  cartItem.forEach(item => {
    amount = parseFloat(amount) + parseFloat(item.idMeal)
  })
  return (
    <div className="w-[30%]">
      <div className="  mb-4">
        <h5 className="text-xl font-bold leading-none text-white bg-gray-900 p-6 mt-3 mr-2 rounded-lg">products in cart</h5>
        
   </div>
      {cartItem.map((cart) => {
        return(
          <div key={cart.idMeal} className="w-full max-w-md p-4 mt-3 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src= {cart.strMealThumb} alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {cart.strMeal}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {cart.strArea}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        RS:{cart.idMeal}
                    </div>
                    <div>
                    <a onClick={() => {
                      removeFromCart(cart)
                    }} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            remove
        </a>
                    </div>
                </div>
            </li>
            
        </ul>
   </div>
</div>
        )
      })}

      {cartItem.length >= 1 ? 
      <div className='flex justify-between items-center bg-blue-600 mt-5 rounded-xl' >
        <h3 className='  p-5 rounded-xl text-white'>Total amount :<span className='text-white font-bold'>{amount}</span> </h3>
        <div className='text-center'>
        <button onClick={() => buyNow()} className='  my-1 bg-green-600 p-2 rounded-xl mr-3  text-white '>paynow</button>
        </div>

      </div> : 
      <div className='bg-green-600 p-4 rounded-xl mr-2 text-white font-bold'> cart is empty </div>}

    </div>
  )
}

export default Cart
