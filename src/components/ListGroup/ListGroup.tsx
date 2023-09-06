import { Fragment, useState } from "react";
import styles from './ListGroup.module.css';
import styled from 'styled-components'
//import { MouseEvent } from "react";

const List = styled.ul`
list-style:none;
    padding: 0;
`
interface ListItemProps{
    active:boolean,

}

const ListItem = styled.li<ListItemProps>`
padding : 5px 0;
background : ${props => props.active?'blue' :'none'}
`



//{items:[],heading :string}
interface Props{
    items: string[];
    heading: string;
    onSelectItem : (item:string) => void;
}


function ListGroup({items,heading,onSelectItem}:Props) {
// let items = ["New york", "san francisco", "tokyo", "london", "paris"];

// let selectedIndex = 0;
  //const handleClick = (event:MouseEvent) => console.log(event);

  //state HOOK, hook allows us to track state in a function component.
  //const arr = useState(-1); //return array
//   arr[0]; // variable (selectedIndex)
//   arr[1]; // updater function
    
    const [selectedIndex, setSelectedIndex] = useState(-1)
    
    
    //if (items.length == 0)
    return (
        <>
            <h1>{heading}</h1>
        {items.length == 0 && <p>No items found</p>}

        <List 
        className={[styles.listGroup,styles.container].join(' ')}
        >
        {items.map((item, index) => (
            <ListItem
            //className={selectedIndex === index? "list-group-items active": "list group item"}
            active ={selectedIndex===index}
            key={item}
            onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
            }}>  
            {item}
            </ListItem>
        ))}
        </List>
    </>
    );
}
export default ListGroup;
