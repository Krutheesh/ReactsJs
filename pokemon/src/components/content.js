import React from 'react'

function Content({search, result}) {
  console.log(search)
  console.log(result)
  return (
    <div>
      {search? <div className='text-center text-white'> Search in the above search bar  </div>:
      !result? <div className='text-center text-white'> Not found</div> : 
        
      <div>
        <h3 className='text-center text-orange-400 text-[2rem]' >Berries</h3>
          <div className='text-center w-[20rem] m-auto border-2 rounded-3xl p-3 text-white'>
        
        <p >name: <span className='text-orange-400'> {result.name}</span></p>
        <p > item_name <span className='text-orange-400'> {result.item.name}</span> </p>
        <p >max_harvest: <span className='text-orange-400'> {result.max_harvest}</span> </p>
        <p>natural_gift_power : <span className='text-orange-400' > {result.natural_gift_power}</span> </p>
        <p>natural_gift_type: <span className='text-orange-400'>  {result.natural_gift_type.name}</span></p>
        <p>size: <span className='text-orange-400'>  {result.size}</span></p>
        <p>smoothness: <span className='text-orange-400'>  {result.smoothness}</span></p>
        <p>soil_dryness: <span className='text-orange-400'>  {result.soil_dryness
}</span></p>
      </div>

      </div>
        }
      
    </div>
  )
}

export default Content