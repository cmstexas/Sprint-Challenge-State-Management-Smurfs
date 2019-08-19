import React, { useReducer } from "react";
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
        <SmurfList />
        <Form addSmurf={addSmurf} />
      </div>
    );
  }


export default App;
