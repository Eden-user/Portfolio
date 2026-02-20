import Links from './Links.jsx';
import Image from "./Image.jsx";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function About() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <>
            <h1>So you want to learn more about...</h1>
            <div className='about-collapsibles'>
                {Content.map((element, index) => (
                    <div key={index}>
                        <button
                            type="button"
                            className='collapsible'
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            {element.button}
                        </button>
                        <div
                            className='content'
                            style={{ display: openIndex === index ? "block" : "none" }}
                        >
                            <p>{element.content.map((item, index) => (
                                <div key={index}>
                                    <div className='about_date'>{item.date}</div>
                                    <div className='about_title'>{item.title}</div>
                                    <div className='about_school'>{item.school}</div>
                                </div>
                            ))}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

const Content = [
    {
        button: "My studies",
        content: [
            {
                date: "2025-2026",
                title: "Bachelor Coding Dev, 2nd year",
                school: "IPI Lyon",
            },
            {
                date: "2025-2026",
                title: "Bachelor Coding Dev, 2nd year",
                school: "IPI Lyon",
            }
        ]
    },
    {
        button: "My job experiences",
        content: [
            {
                date: "2025-2026",
                title: "Bachelor Coding Dev, 2nd year",
                school: "IPI Lyon",
            },
            {
                date: "2025-2026",
                title: "Bachelor Coding Dev, 2nd year",
                school: "IPI Lyon",
            }
        ]
    },
    {
        button: "Me, myself and I",
        content: [
            {
                date: "2025-2026",
                title: "Bachelor Coding Dev, 2nd year",
                school: "IPI Lyon",
            },
            {
                date: "2025-2026",
                title: "Bachelor Coding Dev, 2nd year",
                school: "IPI Lyon",
            }
        ]
    }
]

export default About