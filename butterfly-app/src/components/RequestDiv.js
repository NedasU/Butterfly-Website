import React, {useEffect, useState} from "react";
import "../styles/request-styles.css";

export default function RequestDiv(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [info, setInfo] = useState("");

    const is_button_disabled = !name || !email || !info;

    return (
        <div className="background-img">
            <div className="main-container-card">
                <h2>Got a Special Request?</h2>
                <label htmlFor="name-input">Your Name <span className="important">*</span></label>
                <input id="name-input" type="text" placeholder="Your Name" onChange={(event)=> {setName(event.target.value)}}/>
                <label htmlFor="email-input">Your <span className="important">*</span></label>
                <input id="email-input" type="email" placeholder="Your Email" onChange={(event) => { setEmail(event.target.value)}}/>
                <label htmlFor="info-input">Request Details <span className="important">*</span></label>
                <input id="info-input" type="text" placeholder="Request Details" onChange={(event) => { setInfo(event.target.value)}}/>
                <button id="submit-button" type="submit" disabled={is_button_disabled} onClick={(e)=> { console.log(name, email, info)}}>Submit</button>
            </div>
        </div>
    );
}