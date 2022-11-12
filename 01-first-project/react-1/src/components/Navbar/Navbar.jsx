import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialog" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
                <div>
                    <NavLink to="/News"className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
                </div>
                <div>
                    <NavLink to="/Music" className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
                </div>
                <div>
                    <NavLink to="/Settings"className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar