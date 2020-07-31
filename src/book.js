import React from 'react';

export default function Book(props) {
  return (
    <div className="bookmark">
         <h2>{props.title}</h2>
         <p>{props.authors}</p>
        <p>{props.description}</p>
    </div>
  ) 
}