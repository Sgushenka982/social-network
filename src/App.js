import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HeaderContainer from './content/Header/HeaderContainer';
import NavbarContainer from './content/Navbar/NavbarContainer';
import WorkFrame from './content/WorkFrame/WorkFrame';
import {connect} from "react-redux";
import {authUser} from "./Redux/auth-reducer";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./content/Common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="App">
                    <HeaderContainer/>
                    <WorkFrame
                        store={this.props.store}
                        state={this.props.state}
                        dispatch={this.props.dispatch}/>
                    <NavbarContainer store={this.props.store}/>
                </div>
            </BrowserRouter>
        );
    }
}

let mapStateToProps =(state)=>{
    return{
        initialized:state.app.initialized
    }
}

export default connect(mapStateToProps,{authUser,initializeApp})(App);
