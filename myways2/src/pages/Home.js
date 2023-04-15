import React, { useState } from 'react';
import { useContext } from 'react';
import { myContext } from '../Main';
function Home() {
 
  const [item,setItem] = useState('')
  const [ty,setTy] = useState('')
  const [time, setTime] = useState()
  //const [food , setFood] = useState([])
  const {food,setFood} = useContext(myContext)
const formHandler = (e) => {
  e.preventDefault()
  if (item === ""){
    alert("enter food item")
  }
  else{
    const newFood = {
      FoodName:item,
      FoodType:ty,
      Time:time
    }
    setFood([...food,newFood])

    
    setItem('')
    setTy('')

  }


console.log(food)


}

  return (
    <div>
    <div>
    
      <form action="" onSubmit={(e) => formHandler(e)}>
        <div className='space-y-5 border-2  w-[40%] m-auto mt-5 p-5'>
        <div>
        <label >
          Food Name:
          <input type="text" value={item}  onChange={(e)=>{
            setItem(e.target.value)
          }} className='border-2 ml-2 w-[70%]'/>
        </label>
        </div>
       
        
        <div>
          <label >  type :</label>
          <select className='w-[70%] border-2' name="meal-type" id="" value={ty} onChange={(e)=>{
            setTy(e.target.value)
          }}>
            <option value="breakfast">breakfast</option>
            <option value="launch">lunch</option>
            <option value="brunch">brunch</option>
            <option value="supper">supper</option>
            <option value="dinner">dinner</option>

          </select>


          
        </div>
        <div>
        <label >
         Max Delivary Time:
          <input type="time" className='border-2 ml-2 w-[60%]'
          onChange={(e)=>{
            setTime(e.target.value)
          }}
          />
        </label>
        </div>

      <div className='text-center'>
        <button className='bg-sky-600 text-white p-2 rounded-xl text-center'> submit</button>
      </div>
        </div>


      </form>
      </div>

      

      </div>
   
   
  )
}

export default Home
