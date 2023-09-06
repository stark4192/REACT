import React from 'react'
import {useState} from 'react'
function App_emotion() {

    const [tags,setTags] = useState(['happy', 'cheerful'])

    const handleClick =()=>
    {
        //Add
        setTags([...tags,'exciting'])

        //Remove
        setTags(tags.filter(tag=>tag!='happy'))

        //update
        setTags(tags.map(tag=>tag==='happy'?'happiness':tag))
    }
  return (
    <div>
      
    </div>
  )
}

export default App_emotion
