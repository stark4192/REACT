import Button from './components/Button/Button'
import Alert from './components/alert'
import {useState} from "react"

const App_btn = () => {
  const [alertVisible, setAAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={()=>setAAlertVisibility(false)}>My Alert</Alert>}
        <Button color ="danger" onClick={()=>setAAlertVisibility(true)}>My button</Button>
    </div>
  )
}

export default App_btn
