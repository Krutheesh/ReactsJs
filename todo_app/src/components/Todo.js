import React from 'react'
import { useState } from 'react'

function Todo({name,check}) {
  console.log(check)
  const [checkbox, setCheckbox] = useState(check)
  console.log(checkbox)
  return (
    <div className='text-center border-2 flex'>
      <input type="checkbox" value={checkbox}  onChange={() => setCheckbox(!checkbox)}/>
      <div className={checkbox?'line-through':""}>{name} </div>
    </div>
  )
}

export default Todo
