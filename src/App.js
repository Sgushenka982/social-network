import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HeaderContainer from './content/Header/HeaderContainer';
import NavbarContainer from './content/Navbar/NavbarContainer';
import WorkFrame from './content/WorkFrame/WorkFrame';
function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />
        <WorkFrame
          store={props.store}
          state={props.state}
          dispatch={props.dispatch}/>
        <NavbarContainer store={props.store} />
      </BrowserRouter>
    </div>
  );
}

export default App;
