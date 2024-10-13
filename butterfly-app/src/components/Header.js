import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <Link to="/" className="link">
            <header>
                Bella Accessories
            </header>
        </Link>
    );
}