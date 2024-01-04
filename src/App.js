import './App.css';
import { useState } from 'react';

function App() {
  const[fname, setFname] = useState({firstName:'',lastName:''});
  const [nameDisplayed, setNameDisplayed] = useState(false)


  const handleChange=(event)=>{
    const {name, value}=event.target
    setFname((prev)=>({...prev, [name]: value}) )
  }

  const hideName=()=> setNameDisplayed(false);
 

  const handleSubmit=(event)=>{
    event.preventDefault();
    setNameDisplayed(true);
  }

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name:</label>
        <input type='text' required value={fname.firstName} id='firstName' onChange={handleChange} onFocus={hideName} name='firstName'/><br/>
        <label htmlFor='lastName'>Last Name:</label>
        <input type='text' required value={fname.lastName} id='lastName' onChange={handleChange} onFocus={hideName} name='lastName'/><br/>
        <button type='submit'>Submit</button>
      </form>
      {nameDisplayed?<p id='nameDisplay'>Full Name: {`${fname.firstName} ${fname.lastName}`}</p>:' '}
    </div>
  );
}

export default App;
