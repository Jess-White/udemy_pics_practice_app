import React from "react"

function Doggo(props) {
  return (
    <div>
      <h1 style={{display: !props.name && "none"}}> Name: {props.name}</h1>
      <h2 style={{display: !props.caption && "none"}}> {props.caption}</h2>
      <h2 style={{display: !props.score && "none"}}>
          {props.score}</h2>
    </div>





    );
}