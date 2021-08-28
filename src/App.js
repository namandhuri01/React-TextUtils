// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import React, { useState } from 'react'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
function App() {
	const [mode, setMode] = useState('light');
	const [alert, setAlert] = useState(null);
	const showAlert = (message, type)=>{
		setAlert({
			message:message,
			type:type
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	}
	const toggleMode = ()=>{
		if(mode === 'light'){
			setMode('dark');
			document.body.style.backgroundColor = '#042743';
			showAlert("Dark mode has been enabled", "success");
		}
		if(mode === 'dark'){
			setMode('light');
			document.body.style.backgroundColor = '#fff';
			showAlert("Light mode has been enabled", "success");
		}
	}
  return (
    <>
     {/* <Router> */}
        <Navbar title="React Text Format" mode={mode} toggleMode={toggleMode} key={new Date()} />
        <div className="container mb-3" >
			<Alert alert={alert}/>
			{/* <Switch>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/"> */}
					<Home showAlert={showAlert} heading="Enter Your Text Here" mode={mode} />
				{/* </Route>
			</Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
