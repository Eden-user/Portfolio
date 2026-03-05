import { useState } from 'react';
import { Content } from './AboutList.jsx';
import { catart } from './art.jsx';

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
                                    {item.art && (
                                        <div className='about_art'>
                                            <pre aria-label="cat-staring-meme"
                                                className="text-art">{
                                                    catart
                                                    }</pre>
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

export default About