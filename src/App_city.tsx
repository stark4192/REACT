import React from 'react'
import {useState} from 'react'

function App_useState() {

    const [person,setPerson] = useState({
        firstName : 'Manshu',
        lastName : ' Maurya',
        adress:{
            city:'Patna',
            zipCode:800020
        }
    })

    const handleClick = () => {
      setPerson({
        ...person,
      adress: {...person.adress,zipCode:800011}})
    }

  return (
    <div>
      
    </div>
  )
}

export default App_useState
