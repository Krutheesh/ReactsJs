import React from 'react';
import Button from './components/button';
import Display from './components/display';
import { useState } from 'react';


const History = (props) => {
  console.log(props)
  if (props.total === 0){
    return <div>until no button is pressed</div>
  }
  return <div>total = {props.total} </div>
}




function App() {

  const [right, setRight] = useState(0);
  const [total, setTotal] = useState(0);
  const [left, setLeft] = useState(0);

  const incre = () => {
    const r = right+1;
    setRight(right+1);
    
    setTotal(r+left)
  }

  const decre = () => {
    const l = left+1;
    setLeft(l);
   
    setTotal(l+right);

  }
 
  return (
    <>
      <Display text = {right} />
      <Display text = {left} />
      <Button text ="+" clickHandler={incre}/>
      <Button text= "-" clickHandler={decre}/>
      
      <p>{total}</p>
      <History total = {total} text= {right} />
    </>
  );
}

export default App;
