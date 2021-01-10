import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <>
            <header className={s.header}>
                <img className={s.logo} src="https://image.freepik.com/free-vector/eco-green-leaf-logo-negative-space-style_126523-780.jpg" alt="logo" />
                <div className={s.loginBlok}>
                    {props.isAuth ? props.login : <NavLink to={'/login'} onClick={props.authUser}>Login</NavLink>}
                </div>
            </header>
        </>
    )
}
export default Header;