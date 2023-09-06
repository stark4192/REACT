import React, { useEffect,useState } from 'react'
import ProductList from './components/ProductList'
function App_product() {
const [category,setCategory] = useState('')

    useEffect(()=>{

    })

  return (
    <div>
        <select className='form-select' onChange={(event)=>setCategory(event.target.value)}>
            <option value=""></option>
            <option value="Clothing">Clothing</option>
            <option value="Household">Household</option>
        </select>
        <ProductList category={category}/>
    </div>
  )
}

export default App_product