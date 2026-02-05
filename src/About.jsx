import Links from './Links.jsx';
import Image from "./Image.jsx";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Toggle() {
    const [display, setDisplay] = useState("none");

    return (
        <>
            <button
                type="button"
                className='collapsible'
                onClick={() => setDisplay(display === "none" ? "block" : "none")}>
                My studies
            </button>
            <div className='content' style={{ display: display }}>
                <p>lala</p>
            </div >
        </>
    )
}

function About() {

    return (
        <>
            <h1>So you want to learn more about...</h1>
            <div className='about-collapsibles'>
                <Toggle />
                <button type="button" className='collapsible'>My job experiences</button>
                <div className='content'>
                    <p>lala</p>
                </div>
                <button type="button" className='collapsible'>Me, myself and I</button>
                <div className='content'>
                    <p>tralala</p>
                </div>
            </div>
        </>
    )
}

export default About