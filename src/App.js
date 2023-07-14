import Navbar from './components/Navbar';
import './App.css';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => { //manually if we close the alert box it doesn't work again until we reload the page
      setAlert(null)
    },
      400);  //alert box goes out after .4secs 

  }


  const [mode, setmode] = useState('light'); //Wheather dark mode is enabled or not
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');   //setmode is a function it cannot be assigned 
      document.body.style.backgroundColor = '#333333';
      showAlert("Dark mode enabled", "success");
      //document.title = 'TextUtils - Dark Mode';     // Dark Mode text appear in title after dark mode enabled  

    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      //document.title = 'TextUtils - White Mode';    // White Mode text appear in title after white mode enabled  
    }
  }
  return (
    <Router>
    <>
      
      <Navbar title='TextUtils' mode={mode} togglemode={togglemode}></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-3" >
        
          <Switch>
            <Route exact path="/" render={() => <TextForm showAlert={showAlert} mode={mode} heading="Try textutils Word Counter , Character Counter" />} />
            <Route path="/about" render={() =><About mode={mode}/>} />
          </Switch>
          {/* <TextForm showAlert={showAlert} mode={mode} heading="Enter text"></TextForm> */}
        
      </div>

    </>
    </Router>
  );
}

export default App;






/* <Navbar title="TextUtils" aboutText="About TextUtils"></Navbar> */


// Site Content Which will be displayed 
//<></> jsx fragement

//if node modules folder accidentaly deleted the can be installed by npm install
//Close tag properly with </> for tags like img , a
//To put an empty href use / href="/"


// Props = Property
// props can be used to define custom features for different webiste which use the same component
// simply variable values

//navbar is custom made component and improted here , can be resued and code looks clean