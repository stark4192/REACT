import ListGroup from "./components/ListGroup";
import {BsCardList} from 'react-icons/bs';
import "./App.css"
function App() {
  let items = ["New york", "san francisco", "tokyo", "london", "paris"];
  const handleSelectedItems = (item: string) => { 
    console.log(item)
  }
  
    return (<div><BsCardList color='red' size='40px'></BsCardList><ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectedItems} /></div>);
}

export default App;
