import React from 'react'

export const Card = ({user}) => {
  return (
    <div className='card'>
        <h1>{user.name}</h1>
        <p>{user.company.name}</p>
    </div>
  )
}

function letsJam() {
  // letsJam's scope
  let rand = 3;

  if (true) {
    const rand = 2;
  }

  if (true) {
   return rand;
  }

  // if (true) {
  //   const rand = "let's jam!"
 
  // }

  ;
}

letsJam(); 