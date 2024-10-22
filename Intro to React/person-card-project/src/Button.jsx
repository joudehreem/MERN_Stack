import React, { useState } from 'react';

function Button() {
  const [age, setAge] = useState();
  const handleClick = (name) => alert(`OUCH ${name}`)
  
  return (
    <>
    <p>{name}</p>
    <button onClick={()=>handleClick('Reem')}>Click ME</button>
    </>
  )
}
export default Button