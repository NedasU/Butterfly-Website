import React, {useEffect, useState} from "react";
import "../styles/request-styles.css";

export default function RequestDiv(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [info, setInfo] = useState("");
    const [showOverlay, setShowOverlay] = useState(false);

    const is_button_disabled = !name || !email || !info;

    function sendInfo(e) {
        e.preventDefault();
        setShowOverlay(true); // Show the overlay when the form is submitted
        setName("");
        setEmail("");
        setInfo("");

        // Optionally, you can hide the overlay after a few seconds
        setTimeout(() => {
            setShowOverlay(false);
        }, 3000); // Adjust the duration as needed
    }

    return (
        <div className="background-img">
            {showOverlay && (<div className="overlay">
                    {/* You can add any message you want here */}
                    <h2>Your request has been submitted!</h2>
                </div>)}
            <div className="main-container-card">
                <h2>Got a Special Request?</h2>
                <label htmlFor="name-input">Your Name <span className="important">*</span></label>
                <input id="name-input" type="text" placeholder="Your Name" value={name} onChange={(event)=> {setName(event.target.value)}}/>
                <label htmlFor="email-input">Your <span className="important">*</span></label>
                <input id="email-input" type="email" placeholder="Your Email" value={email} onChange={(event) => { setEmail(event.target.value)}}/>
                <label htmlFor="info-input">Request Details <span className="important">*</span></label>
                <input id="info-input" type="text" placeholder="Request Details" value={info} onChange={(event) => { setInfo(event.target.value)}}/>
                <button id="submit-button" type="submit" disabled={is_button_disabled} onClick={sendInfo}>Submit</button>
            </div>
        </div>
    );
}