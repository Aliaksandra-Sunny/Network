import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friend from "./Friends/Friend";


const Navbar = (props) => {
     let friendsElements = props.sideBar.friends.map((friend) => <Friend key={friend.id} name={friend.name}/>);

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <div>
                <h3>Friends</h3>
                <div className={s.friends}>
                    {friendsElements}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;