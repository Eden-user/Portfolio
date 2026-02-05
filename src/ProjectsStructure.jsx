import { getImageUrl } from "./ProjectsList.jsx";
import { NavLink } from "react-router-dom";

function ProjectsStructure({ title, shortdescription, sneakpeek, link }) {
    return (
        <div className="prev-project">
            <h3>{title}</h3>
            <div className="prev-img">
                <img className="project-img-prev" src={getImageUrl(sneakpeek)} alt={title} />
            </div>
            <p className="project-prev-desc">{shortdescription}</p>
            <NavLink to={link} className="project-link">See more</NavLink>
        </div>
    )
}

export default ProjectsStructure;