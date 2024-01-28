
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, { useState } from 'react';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const ShowAlert= (message,type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      ShowAlert("Dark mode has been enabled","success");
      document.title = "TextUtils - Dark Mode";
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      ShowAlert("Light mode has been enabled","success");
      document.title = "TextUtils - Light Mode";
    }
  }
  
  return (

    // We Use jsx Fragmnet   <> </> using define more components
    <>
    {/* <Router> */}
    <Navbar title="UtilText" aboutText="About UtilText"  mode={mode}  toggleMode = {toggleMode}/>  
    <Alert alert={alert}/>
    <div className="container my-3" >
    {/* <Routes> */}
    {/* <Route exact path="/about" element={<About />} /> */}
    {/* <Route exact path="/" element={ */}
    <TextForm ShowAlert={ShowAlert} heading="Enter the text to Analyze Below!" mode={mode} />
    {/* } /> */}
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
