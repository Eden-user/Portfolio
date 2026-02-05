import { ProjectsList } from "./ProjectsList.jsx";
import ProjectsStructure from "./ProjectsStructure.jsx";

function ProjectPreview() {

    return (
            <div className="allprojects-prev">
                {ProjectsList
                    .filter(project => project.featured)
                    .map((element, index) => (
                        <ProjectsStructure key={index} title={element.title} shortdescription={element.desc} sneakpeek={element.img[0]} link={element.link} />
                    ))}
            </div>
    )
}

export default ProjectPreview;