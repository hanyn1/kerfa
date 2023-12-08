import React from 'react'
import PlayerList from './PlayerList'
import Data from '../DataBase/Data'
import 'bootstrap/dist/css/bootstrap.css'
export default function Players() {
  if (!Array.isArray(Data)) {
    console.error('Data is not an array');
    return null; 
  }
  return (
    <div>
      {
        Data.map((ele)=>(
          <div class="card mb-3" style={{width: "540px"}} key={ele.id}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={ele.image} class="img-fluid rounded-start" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{ele.name}</h5>
        <p class="card-text">{ele.jersyNumber}</p>
        <p class="card-text"><small class="text-body-secondary">{ele.nationality}</small></p>
        <PlayerList playerName={ele.name} playerImage={ele.image} key={ele.id}/>
      </div>
    </div>
  </div>
</div>
        ))
      }
      
    </div>
  )
}
