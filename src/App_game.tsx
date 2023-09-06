import React from 'react'
import {useState} from 'react'
function App_game() {

    const [game,setGame]= useState ({
        id:1,
        player:{
            name:'manshu'
        },
        skills:['Archery'],
        properties:[
            {agent:'hulk', health: 90, attack:95},
            {agent:'iron-man', health:80, attack:70}
        ]
    })
    let i=game.skills.length-1;
const handleClick = ()=>{
    setGame({
        ...game,
        player:{...game.player,name:'bob'},
        skills:[...game.skills,'fight'],
        properties:[...game.properties.map(item=>item.agent==='hulk'?{...item, attack:91}:item)]
    })
    }

    
  return (
    <>
    <div>
        
    {
        <h1 key={game.id}>name: {game.player.name}<br></br>skills: {game.skills[i]}<br key={game.properties[0].agent}></br>properties: [agent-{game.properties[0].health}, attack-{game.properties[0].attack}]</h1>

    }
      <button onClick={handleClick}>Click me</button>
    </div>
    </>
  )
}

export default App_game
