import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  
  return (

    // We Use jsx Fragmnet   <> </> using define more components
    <>

    <Navbar title="UtilText" aboutText="About UtilText"  mode={mode}  toggleMode = {toggleMode}/>  
    <div className="container my-3" >
    <TextForm heading = "Enter the text to Analyze Below!"/>
    </div>
    {/* <About/> */}
   

    </>
  );
}

export default App;
