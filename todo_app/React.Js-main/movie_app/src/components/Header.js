import React, { useEffect } from 'react'
import { useState } from 'react';
import Movieinfo from './Movieinfo';
function Header() {
  const [info, setInfo] = useState({});
  const [title, setTitle] = useState();
  const [dtitle,setDtitle] = useState("");
  const [error, setError] = useState(false)
  const [notfound, setNotfound] = useState(false)
  const api =  async () => {
    try{
    console.log(dtitle)
    
    const movieApi = await fetch(`http://www.omdbapi.com/?t=${dtitle}&apikey=6e49bcbd`)
    console.log(movieApi)
   
    const movieJson = await movieApi.json()
    console.log(movieJson)
    setInfo(movieJson)
    if(movieJson.Error === 'Movie not found!'){
      setNotfound(true)
  
 
    }
    
    
    }
    catch(error){
      console.log("hello master iam the error")
      console.log(error.message)
      setError(true);
    }
  }


  

const formHandler = (e) => {
  setNotfound(false)
  e.preventDefault();
  if(title === undefined || title === ""){
    alert("enter movie name")
  }
  else{
    setDtitle(title)
  
  }
  
}

useEffect(() => { 
  api()
},[dtitle])
 

//console.log(error)
  if(error){
    return (<div className='text-red-600 py-[1rem] text-[1.2rem] font-bold bg-black h-[100vh] text-center'>something went wrong! please try again later..</div>)
  } 
//console.log(notfound)


  return (
    <>
   <div className='bg-black h-[100vh]'>
   <header >
      <form action="" className='flex justify-center  px-[1rem] py-[2rem] md:p-[3rem] ' onSubmit={ (e) => {formHandler(e)}}>
        <input className='p-[1rem] outline-none rounded-xl md:w-[60%] w-[100%]'   type="text" placeholder='search movie name'  onChange={(e) => setTitle(e.target.value)}/>
        <button className='py-[1rem] px-[2rem] bg-[#541e92] rounded-xl mx-2 md:mx-5  text-white'>search</button>
      </form>
   </header>
      {!notfound?(dtitle !== "")?<Movieinfo info={info}/>: <div className='text-white text-center md:text-[1.2rem] p-3'> Search  your favourite movie in above search bar </div>: <div className='text-white text-center text-[1.3rem]'> movie not found</div>}
    </div>
    </>
  )
}

export default Header