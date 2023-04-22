import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Row({title,fetchUrl}) {
  const [moviesList, setMovieslist] = useState([]);

  const apiHandler2 = async() => {
    try{
      const apiData = await axios.get(
        fetchUrl
      );
      console.log(apiData)
      setMovieslist(apiData.data.results)
    }
    catch (err){
      console.log(err)
    }
    

  }

  useEffect(() => {
    apiHandler2()
  },[])
  console.log(moviesList)
  return (
    <>
     <div className='p-4'>
     <h2 className='text-white py-[1rem]'>{title}</h2>
    
     <div className='overflow-auto whitespace-nowrap cursor-pointer scroll-smooth scrollbar-hide relative' >
     {
      moviesList.map( (ele,index) => 
        (
          <div key={index} className=' w-[12rem] md:w-[14rem] lg:w-[16rem] hover:w-[14rem] hover:md:w-[16rem] hover:lg:w-[18rem] inline-block mx-1 '>
          <img src={`https://image.tmdb.org/t/p/original/${ele.backdrop_path}`} className='' alt="" />
          <div className='text-[14px] hover:text-[16px] absolute  text-gray-400 inline-block bg-gradient-to-t from-black  hover:bg-gradient-to-t hover:from-black w-[12rem] lg:w-[16rem] md:w-[14rem] h-[100%] hover:w-[14rem] hover:md:w-[16rem] hover:lg:w-[18rem] bottom-0 p-1 '>
            {ele.title == undefined ? <h3 className='absolute overflow-hidden w-[90%] px-1 bottom-1  text-ellipsis '>Unknown</h3>:<h3 className='absolute overflow-hidden w-[90%] px-1 bottom-1  text-ellipsis '>{ele.title}</h3>}{console.log(ele.title)}
          </div>
        </div>
        )
      )
     }
    
     </div>
     </div>
     

      



    </>
  )
}

export default Row
