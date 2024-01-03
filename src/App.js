import './App.css';
import { useState } from 'react';

function App() {
  const[fname, setFname] = useState({firstName:'',lastName:''});

  const handleChange=(event)=>{
    const {name, value}=event.target
    setFname((prev)=>({...prev, [name]: value}) )
  }

 

  const handleSubmit=(event)=>{
    event.preventDefault();
    const name = document.getElementById('nameDisplay');
    name.innerHTML= `Full Name: ${fname.firstName} ${fname.lastName}`
  }

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name:</label>
        <input type='text' required value={fname.firstName} id='firstName' onChange={handleChange} name='firstName'/><br/>
        <label htmlFor='lastName'>Last Name:</label>
        <input type='text' required value={fname.lastName} id='lastName' onChange={handleChange} name='lastName'/><br/>
        <button type='submit'>Submit</button>
      </form>
      <p id='nameDisplay'></p>
    </div>
  );
}

export default App;
