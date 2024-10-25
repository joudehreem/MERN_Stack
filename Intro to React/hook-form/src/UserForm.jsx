import React,{useState} from "react"
function UserForm() {

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
  
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
  }
  function handelLastNameChange(event){
    setLastName(event.target.value)

  }  function handelEmailChange(event){
    setEmail(event.target.value)

  }  function handelPasswordChange(event){
    setPassword(event.target.value)

  }  function handelConfirmPasswordChange(event){
    setConfirmPassword(event.target.value)

  }
  return(<div>
    <form onSubmit={createUser}>
        <div>
          <label>First Name</label>
          <input type="text" onChange={handelFirstNameChange} value={firstname} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" onChange={handelLastNameChange} value={lastname}/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" onChange={handelEmailChange} value={email}/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" onChange={handelPasswordChange} value={password}/>
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" onChange={handelConfirmPasswordChange} value={confirmpassword} />
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