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
                            style={{ display: openIndex === index ? "grid" : "none" }}
                        >
                            {element.content.map((item, index) => (
                                <div key={index} className='about-element'>
                                    {item.date &&
                                        <div className='about_date'>{item.date}</div>
                                    }
                                    <div className='about_title'>{item.title}</div>
                                    {item.descr &&
                                        <div className='about_descr'>{item.descr}</div>
                                    }
                                    {item.skills && (
                                        <>
                                            <p className='about_p' id='title'>Skills : </p>
                                            <div className='skills'>
                                                {item.skills.map((stuff, index) => (
                                                    <div className='skill'>
                                                        <p className='about_p' key={index}>{stuff}</p>
                                                    </div>
                                                ))}</div>
                                        </>
                                    )}
                                    {item.languages && (
                                        <>
                                            <p className='about_p' id='title'>Tools, frameworks & languages : </p>
                                            <div className='languages'>
                                                {item.languages.map((stuff, index) => (
                                                    <div className='language'>
                                                        <p className='about_p' key={index}>{stuff}</p>
                                                    </div>
                                                ))}</div>
                                        </>
                                    )}
                                    {item.link && (
                                        <div className='about_link'>
                                            <a href={item.link} target='_blank'>Check out the program</a>
                                        </div>
                                    )}
                                </div>
                            ))}
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
                date: "2025 - 2026",
                title: "Bachelor Coding Dev, 2nd year",
                descr: "IPI, Lyon",
                skills: ["Mocketing", "Client/Server Architecture", "Access to stored data", "Algorithmic logic", "Object-oriented programming", "Communication", "Computer Law", "CSR & Digital Responsible", "Process management"],
                languages: ["Angular", "JavaScript", "AJAX", "JQuery", "Python", "C/C#", "Java", "PHP/Symfony", "React", "Typescript", "Apache", "Node.js", "Next.js", ".NET", "SQL"],
                link: "https://www.ipi-ecoles.com/bachelor-developpeur/#_pltcs=eyJwcm0iOnt9LCJyZWYiOiIifQ%3D%3D"
            },
            {
                date: "2024 - 2025",
                title: "Bachelor IT",
                descr: "Ecole Hexagone, Clermont-Ferrand",
                skills: ["Computer mathematics", "Algorithmic logic", "Introduction to object-oriented programming", "System programming", "Components and best practices", "Operating system administration", "Network models and architecture", "Introduction to project management tools", "Database modeling and SQL language", "UI/UX Interfaces Design", "Introduction to web development", "PHP backend development", "Office tools", "Arduino"],
                languages: ["HTML", "CSS", "JavaScript", "Python", "C", "C++", "PHP", "MySQL", "Figma"],
                link: "https://www.ecole-hexagone.com/fr/fr/cursus/informatique/"
            },
            {
                date: "2021 - 2023",
                title: "Preparatory Class (Hypokhâgne - Khâgne) spécialised in Philosophy & Classical Languages",
                descr: "Lycée Blaise Pascal, Clermont-Ferrand",
                skills: ["critical thinking", "writing skills", "analytical thinking","french", "english", "ancient greek", "latin"]
            },
            {
                date: "2018 - 2021",
                title: "Baccalauréat (HLP, HGGSP, LLCER, Latin option) - High Distinction",
                descr: "Lycée Jules Renard, Nevers",
            }
        ]
    },
    {
        button: "My job experiences",
        content: [
            {
                date: "August 2025 - today",
                title: "My sole-trader business",
                descr: "I developp websites for small businesses and associations, as well as custom orders such as the Magellan project.",
                skills: ["Development and deployment of custom WordPress.org sites (O2Switch hosting, technical configuration)", "Graphic design (stage décor, vector format for large-scale printing and projection)", "Design of responsive web mockups using Figma"],
                IT: true
            },
            {
                date: "July - August 2025",
                title: "Web Developer Intern",
                descr: "Juliette VIALANEIX, Clermont-Ferrand",
                skills: ["bla"],
                IT: false
            }
        ]
    },
    {
        button: "Me, myself and I",
        content: [
            {
                title: "Bachelor Coding Dev, 2nd year",
                descr: "IPI Lyon",

            },
            {
                title: "Bachelor Coding Dev, 2nd year",
                descr: "IPI Lyon",
            }
        ]
    }
]

export default About