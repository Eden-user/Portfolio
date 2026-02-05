import { useParams } from 'react-router-dom';
import { ProjectsList } from './ProjectsList';
import { getImageUrl } from "./ProjectsList.jsx";

function ProjectDetail() {
    // Récupère le paramètre d'URL
    const { projectId } = useParams();

    // Trouve le projet correspondant
    const project = ProjectsList.find(p => p.id === projectId);

    if (!project) {
        return <div>Projet not found</div>;
    }

    return (
        <div className="project-detail">
            <h1>{project.title}</h1>
            <br />
            {project.githubLink && (
                <a href={project.githubLink} target="_blank" className='git'>See the code</a>
            )}
            <div className='project-imgs'>
                {project.img.map((element, i) => (
                    <img key={i} className='project-img' src={getImageUrl(element)} alt={project.title + "-img" + i} />
                ))}
            </div>
            {project.technologies && (
                <div>
                    <h3>Technologies</h3>
                    <ul className='tech-list'>
                        {project.technologies.map((tech, i) => (
                            <li key={i}>{tech}</li>
                        ))}
                    </ul>
                </div>
            )}
            <div className='longDesc'>{project.longDesc}</div>
            {project.githubLink && (
                <a href={project.githubLink} target="_blank" className="git">See the code</a>
            )}
        </div>
    );
}

export default ProjectDetail;