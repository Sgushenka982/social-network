import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SamurayJSApp from "./App";

//Закомментировано подключение к самодельному store
// let rerenderTree=()=>{

ReactDOM.render(<SamurayJSApp/>, document.getElementById('root'));

// }

/*rerenderTree(store.getState());

store.subscribe(()=>{
  let state = store.getState();
  rerenderTree(state);
})*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
