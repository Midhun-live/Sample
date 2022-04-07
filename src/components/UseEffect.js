import React,{useState,useEffect} from 'react'

function UseEffect() {
  const [count,setCount]=useState(0);
  useEffect(
      ()=>{
        document.title=`${count} times`
      })
  return (
    <div>
        <button onClick={()=>{setCount(count+1)}} >CLICK</button>
    </div>
  )
}

export default UseEffect