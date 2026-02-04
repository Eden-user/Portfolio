import { getImageUrl } from "./ProjectsList.jsx";
import { NavLink } from "react-router-dom";

function ProjectsStructure({ title, shortdescription, sneakpeek, link }) {
    return (
        <>
            <h3>{title}</h3>
            <img className="project-img" src={getImageUrl(sneakpeek)} alt={title} />
            <p className="project-prev-desc">{shortdescription}</p>
            <NavLink to={link}>See more</NavLink>
        </>
    )
}

export default ProjectsStructure;