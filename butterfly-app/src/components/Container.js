import React from "react";
import Sidebar from "./Sidebar";


export default function Container({ children }) {
    return (
        <div className="container">
            <Sidebar/>
            {children}
        </div>
    );
}