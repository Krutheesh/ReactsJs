import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
let you ='';
function Recipeinfo() {
  const [m,setM] = useState([]);
  const {idMeal} = useParams()
 
  console.log(useParams())
  console.log(idMeal)
  
 
  if (idMeal !== undefined){
    fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`).then(data => data.json()).then(res => setM(res.meals[0]
      ))
     
  }
  
  if (m){
    
    const url =m.strYoutube;
    console.log(url)
    let str = url.split("=")
    console.log(str)
    you=[str.length-1]
   }

  return (
   <>
    {(!m)? <div>no info</div>:
    <div className='bg-sky-600'>
      <div className='py-8'>
      <img src={m.strMealThumb} alt=" im" className='w-[50%] m-auto p-5  h-[25rem] rounded-3xl border-2 bg-yellow-500 ' />
      </div>
    <div className='text-center text-white bg-yellow-500 w-[25%] m-auto rounded-3xl py-3 my-2'>
    <div> Meal: {m.strMeal} </div>
    <div> Area:  {m.strArea} </div>
    <div> category: {m.strCategory} </div>
    </div>

    <section className=' flex justify-around item-center py-[3rem]  text-white'>
      <ul className=' p-4 ml-[8rem]'>
        <h3 className='text-yellow-400'>Ingredients:</h3>
        <li className='py-3 '>{m.strIngredient1
}</li>
        <li className='py-3'>{m.strIngredient2
}</li>
        <li className='py-3'>{m.strIngredient3
}</li>
        <li className='py-3'>{m.strIngredient4
}</li>
        <li className='py-3'>{m.strIngredient5
}</li> 
        <li className='py-3'>{m.strIngredient6
}</li>
      </ul>
    <div className=' w-[40%]  p-4 text-base leading-8'>instructions : {m.strInstructions
}</div>
    </section>
    
  
<section className=' '>
<iframe src={`https://www.youtube.com/embed/${you}`}  className='m-auto w-[80%] h-[20rem] border-2 rounded-3xl'  title="Foloow below video to make the recipe"></iframe>
</section>


  </div>}
   </>
    
  )
}

export default Recipeinfo
