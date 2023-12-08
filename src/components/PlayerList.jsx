import React from 'react'
import Data from '../DataBase/Data'
import 'bootstrap/dist/css/bootstrap.css'
export default function PlayerList(props) {
  console.log({props})
  return (
    
    <div>
    <div class="card" style={{width: "18rem"}}>
  <img src={props.playerImage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">{props.playerName}</p>
  </div>
</div>
    </div>
  )
}
