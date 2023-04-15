import React from 'react'
import { Mycontext } from './Home';
import { useContext } from 'react';
import { myContext } from '../Main';
function Store() {
console.log(useContext(myContext))
  const {food, setFood} = React.useContext(myContext)
  console.log(food)
  return (

    
   <div>
    <div >

      {food !== []  ? <div className=' flex space-x-4 flex-wrap w-[70%] m-auto'>
        
        {
      
        
      food.map( (ele , index) => (

        <div key={index} >

          <div className=' text-center mt-5'>
          <div className=' p-3   border-2 '>
            <p>FoodName:{ele.FoodName}</p>
            <p>FoodType:{ele.FoodType}</p>
            <p>Time:{ele.Time}</p>
          </div>
          </div>

        </div>

      ) 
      
      
      )
        
        
        
    }
        
        
         </div> : <div> moting found </div>}
       
      


    </div>
   </div>



  )
}

export default Store
