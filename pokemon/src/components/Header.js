import React, { useState } from 'react'
import Content from './content';
function Header() {
  const [inp, setInp] = useState();
  const [result, setResult] = useState(false);
  const [search, setSearch] = useState(true);
 

console.log(typeof(inp))
  const formHandler = (e) => {
    console.log(inp)
    if (inp === undefined){
      alert("plese enter pokemon")
    }
    e.preventDefault()

    if(inp !== undefined){
      console.log(inp);
      fetch(`https://pokeapi.co/api/v2/berry/${inp}`).then( data => data.json()).then( res => {
        setResult(res)
        console.log(res)
      }).catch(setResult(false))
      setSearch(false)
    }
   

  }
  return (
    <>
    <section className='bg-black h-[100vh]'>
    <header >
    <h1 className='text-center text-[2rem] text-orange-400'>search pokemon with name or id</h1>

    <form onSubmit={(e) => {formHandler(e)}}>
      <div className='flex justify-center py-[2rem]'>
        <input type="text" name="" id="" placeholder=' search pokemon name or id' className='border-2 outline-none mx-2 rounded-xl px-2 py-1 w-[50%]' onChange={(e) => {setInp(e.target.value)}} />
        <button type="submit" className='bg-orange-400 px-2 py-1 text-white rounded-xl mx-2'>Search</button>
      </div>
    </form>
    </header>
     <Content search = {search} result ={result} />
    </section>
    </>
  )
}

export default Header