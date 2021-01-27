import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Link } from "@reach/router";
import './App.css';
import AddNewPet from './components/AddNewPet';
import AllPets from './components/AllPets';
import EditPet from './components/EditPet';
import ViewPet from './components/ViewPet';

function App() {
  return (
    <div className="App container p-4 bg-light text-light">
      <div>
        <h1 style={{color:"black"}}>Welcome To The Pet Shelter</h1>
      </div>
      <div style={{display:"flex"}}>
        <Link style={{marginLeft:"70%"}} to="/new"><button className="btn btn-info btn-outline-dark m-4">Add Pet To Shelter</button></Link>
      </div>
      <Router>
        <AllPets path="/" />
        <AddNewPet path="/new" />
        <EditPet path="update/:_id" />
        <ViewPet path="/:_id" />
      </Router>
    </div>
  );
}

export default App;