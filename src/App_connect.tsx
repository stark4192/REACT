import React, { useEffect } from 'react'

const connect = () =>console.log('Connecting')
const disconnect = () =>console.log('Disconnect')   
function App_connect() {

    useEffect(()=>{
        connect();
        return ()=>disconnect()
    })

  return (
    <div>App_connect</div>
  )
}

export default App_connect