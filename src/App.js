import React from 'react';
import {BrowserRouter, withRouter} from 'react-router-dom';
import './App.css';
import HeaderContainer from './content/Header/HeaderContainer';
import NavbarContainer from './content/Navbar/NavbarContainer';
import WorkFrame from './content/WorkFrame/WorkFrame';
import {connect, Provider} from "react-redux";
import {authUser} from "./Redux/auth-reducer";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./content/Common/Preloader/Preloader";
import store from "./Redux/redux-store";
import {compose} from "redux";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="App">
                <HeaderContainer/>
                <WorkFrame/>
                <NavbarContainer/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {authUser, initializeApp})
)(App);


const SamurayJSApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SamurayJSApp