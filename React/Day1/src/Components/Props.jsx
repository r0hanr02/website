import React from 'react'

function Props(props) {
    const {name,age,rollno}={...props}
    
  return (
    <div>
        <h1>New Player</h1>
        <h2>Name:{name} </h2>
        <h2>Age:{age} </h2>
        <h2>RollNo:{rollno} </h2>
    </div>
  )
}

export default Props