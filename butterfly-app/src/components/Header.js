import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <header>
            <Link to="/" className="link">
                Bella Accessories
            </Link>
        </header>
    );
}