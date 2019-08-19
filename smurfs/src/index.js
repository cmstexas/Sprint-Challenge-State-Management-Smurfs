import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./components/App";
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import { reducer } from './reducers/reducer';
// import thunk from 'redux-thunk';

// export const store = createStore(reducer, applyMiddleware(thunk));
// console.log(store);


const rootElement = document.getElementById('root');
ReactDOM.render(
    // <Provider store={store}>
        <App />,
    // </Provider>,
    rootElement
);





// OLD 
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));