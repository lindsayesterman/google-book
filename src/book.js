import React from 'react';


export default function Book(props) {
  return (
    <div className="bookmark">
         <h2>{props.title}</h2>
         <p>{props.cost}</p>
         <p>{props.author}</p>
        <p>{props.description}</p>
    </div>
  ) 
}