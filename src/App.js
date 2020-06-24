import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import Rooms from "./pages/Rooms";
import Home from "./pages/Home";
import Single from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/rooms' component={Rooms}/>
        <Route path='/room/:slug' component={Single}/>
        <Route  component={Error}/>
        </Switch>
    </div>
  );
}

export default App;
