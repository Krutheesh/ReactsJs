import React from 'react'

function Movieinfo({info}) {
  return (
    <section>

    <div className='text-center md:flex md:justify-center text-white  '>
     <div className='md:w-[30%] px-[2rem] '>
     <img src={info.Poster} alt="" className='md:w-[16rem] m-auto rounded-xl' />
     </div>

      <div className='md:w-[30%]  text-left leading-[1.8] px-[3rem] py-[1rem] '>
      
      <p className='md:text-[1.5rem] font-bold'> Title : <span className=' text-[#9961d8]'>{info.Title}</span></p>
      <p> Director <span className=' text-[#9961d8]'>{info.Director}</span></p>
      <p> Writer
: <span className=' text-[#9961d8]' >{info.Writer
}</span></p>
      <p> Actors : <span className=' text-[#9961d8]' >{info.Actors}</span></p>
      <p> Plot
:<span className=' text-[#9961d8]' >{info.Plot
}</span></p>
      <p> Released:<span className=' text-[#9961d8]' >{info.Released}</span></p>

      </div>
    </div>

    </section>
    
  )
}

export default Movieinfo