import React from 'react'
import Like from "./components/Like"
import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai';
function App_Like() {
  return (
    <div>
      {/* <Button onClick={()=>console.log("clicked")}>My button</Button> */}
      <Like onClick={()=>console.log("clicked")}></Like>
    </div>
  )
}

export default App_Like
