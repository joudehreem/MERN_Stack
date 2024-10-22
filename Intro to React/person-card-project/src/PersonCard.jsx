import PropTypes from 'prop-types'
import React, {useState} from 'react'
function PersonCard(props) {
  const [age, setAge] = useState(props.age);
  const ageIncrement = () => {
    setAge(age+1)
  }
    
  return (
    <div>
      <h1>{props.firstName}, {props.lastName}</h1>
      <p>Age: {age}</p>
      <p>Hair Color: {props.hairColor}</p>
      <button onClick={ageIncrement}> Birthday Button for {props.firstName} {props.lastName}</button>
    </div>
  )

}
PersonCard.protoTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age:PropTypes.number,
  hairColor:PropTypes.string
}

export default PersonCard
