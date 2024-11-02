import React,{useState} from "react"
function UserForm() {

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
  
    const [firstnameError, setFirstNameError] = useState("");
    const [lastnameError, setlastnameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [confirmpasswordError, setconfirmpasswordError] = useState("");

    const createUser = (e) => {

      e.preventDefault();
  
      const newUser = { 
          firstname: firstname, 
          lastname:lastname,
          email: email, 
          password: password,
          confirmpassword:confirmpassword
      };
      console.log("Welcome", newUser);
  };
  
  function handelFirstNameChange(event){
    setFirstName(event.target.value)
    if (event.target.value.length < 2 && event.target.value) {
      setFirstNameError('First Name must be at least 2 characters')
    }
      else {
      setFirstNameError('')
    }
  }
  function handelLastNameChange(event){
    setLastName(event.target.value)
    if (event.target.value.length < 2 && event.target.value) {
      setlastnameError('Last Name must be at least 2 characters')
    }
      else {
        setlastnameError('')
    }

  }
  function handelEmailChange(event) {
    setEmail(event.target.value)
    if (event.target.value.length < 2 && event.target.value) {
      setemailError('Email must be at least 2 characters')
    }
      else {
        setemailError('')
    }

  }
  function handelPasswordChange(event) {
    setPassword(event.target.value)
    if (event.target.value.length < 8 && event.target.value) {
      setpasswordError('Password must be at least 8 characters')
    }
      else {
        setpasswordError('')
    }

  }
  function handelConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value)
    if (event.target.value != password && event.target.value) {
      setconfirmpasswordError('Password must match')
    }
      else {
        setconfirmpasswordError('')
    }
  }
  return(<div>
    <form onSubmit={createUser}>
        <div>
          <label>First Name</label>
        <input type="text" onChange={handelFirstNameChange} value={firstname} />
        <p> { firstnameError } </p>
        </div>
        <div>
          <label>Last Name</label>
        <input type="text" onChange={handelLastNameChange} value={lastname} />
        <p>{ lastnameError }</p>
        </div>
        <div>
          <label>Email</label>
        <input type="email" onChange={handelEmailChange} value={email} />
        <p>{ emailError }</p>
        </div>
        <div>
          <label>Password</label>
        <input type="password" onChange={handelPasswordChange} value={password} />
        <p>{ passwordError }</p>
        </div>
        <div>
          <label>Confirm Password</label>
        <input type="password" onChange={handelConfirmPasswordChange} value={confirmpassword} />
        <p>{ confirmpasswordError}</p>
          <input type="submit" value="Create User" />
      </div>
      
    </form>
    <div>Your Form Data</div>
    <p>First Name: {firstname}</p>
    <p>Last Name: {lastname}</p>
    <p>Email: {email}</p>
    <p>Password: {password}</p>
    <p>Confirm Password: {confirmpassword}</p> 
  </div>)

}
export default UserForm