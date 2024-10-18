import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar(){
    return (
        <div className="sidebar">
            <NavLink to="/" className="nav-logo" >
                <img src="/logos/Butterfly-logo.png" alt="Nav-logo-1"/>
            </NavLink>
            <NavLink to="/bracelets" className="nav-logo">
                <img src="/logos/bracelet-icon3.png" alt="Nav-logo2"/>
            </NavLink>
        </div>
    );
}