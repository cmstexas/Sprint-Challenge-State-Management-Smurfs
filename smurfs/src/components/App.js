import React, { Component, useReducer } from "react";
import "./App.css";
import SmurfList from './SmurfList';
import Form from './Form';
import { reducer, initialState } from '../reducers/reducer';



function App () {

  const [ state, dispatch ] = useReducer(reducer, initialState);
  console.log('state', state);

  const addSmurf = item => {
    dispatch({ type: "ADD_ITEM", payload: item});
  };

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfList />
        <Form addSmurf={addSmurf} />
      </div>
    );
  }


export default App;
