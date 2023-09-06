import React from 'react'
import Button from "./components/btn"
import {AiFillHeart} from 'react-icons/ai';
function App_Button() {
  return (
    <div>
      {/* <Button onClick={()=>console.log("clicked")}>My button</Button> */}
      <Button onClick={()=>{console.log('Fuck-off')}}><AiFillHeart color='pink' size='40px' onClick={()=>console.log("clicked")}></AiFillHeart></Button>
    </div>
  )
}

export default App_Button
