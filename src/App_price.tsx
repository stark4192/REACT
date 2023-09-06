import React from 'react'
import {useState} from 'react'

function App_price() {

    const [drink,setDrink] = useState({
        title:"Americano",
        price:8,
    })

    const handleClick = () =>{
        //drink.price = 6;
        
        // const newDrink = {
        //     title:drink.title,
        //     price:10,
        // }

        // const newDrink = {
        //     ...drink,//spread notation (copy whole drink properties)
        //     price :9
        // }

        setDrink({...drink,price:9})
    }
  return (
    <div>
        {drink.price}
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App_price
    