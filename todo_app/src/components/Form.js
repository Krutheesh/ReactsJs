import React, { useState } from 'react'
import Todo from './Todo';
function Form() {
  const [todo, addTodo] = useState([])
  const [task, setTask] = useState("");
  

  // console.log(todo)
  // console.log(task)
  const formHandler = (e) => {
    e.preventDefault();
    addTodo([...todo,{
      name: task,
      check:false,
      id: Date.now()
    }])
    setTask("");
 console.log(todo)
 console.log(task)
}
  return (
    <div>
      <form action="" onSubmit={formHandler}  className='text-center flex justify-center my-5'>
        <input type="text" value={task} placeholder='enter the task' className='p-2'  onChange={(e) => setTask(e.target.value)} required/>
        <button className='p-2 bg-sky-600 mx-2'>add</button>
      </form>
      {
        todo && todo.map ( (todo) => 
         <div key ={todo.id} >
           <Todo check={todo.check} name={todo.name} />
            
         </div>
        
        )
      }
    </div>
  )
}

export default Form
