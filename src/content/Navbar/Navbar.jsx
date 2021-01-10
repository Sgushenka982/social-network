import React from 'react';
import s from './Navbar.module.css'
import { NavLink} from 'react-router-dom'

const Navbar=(props)=>{

    let navbarElement=props.state.map(n=> 
    <div key={n.id} className={s.item} >
        <NavLink to={'/'+n.name} activeClassName={s.activeLink}>{n.name}</NavLink>
    </div>
    )
    return(
        <div className={s.content}>
            {/* <div className={s.item} >
                <NavLink to='/masseges' activeClassName={s.activeLink}>Massages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div> */}
            {navbarElement}
        </div>     
    )
}

export default Navbar;