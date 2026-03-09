import { useParams } from 'react-router-dom';
import { ProjectsList, getImageUrl } from './ProjectsList';
import { useState } from "react";

function ProjectDetail() {
    const { projectId } = useParams();
    const [enlargedIndex, setEnlargedIndex] = useState(null);
    
    const project = ProjectsList.find(p => p.id === projectId);
    
    if (!project) {
        return <div>Projet not found</div>;
    }
    
    return (
        <div className="project-detail">
            <h1>{project.title}</h1>
            <br />
            
            {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className='git'>
                    See the code
                </a>
            )}
            
            <div className='project-imgs'>
                {project.img.map((element, i) => (
                    <img
                        key={i}
                        className='project-img'
                        src={getImageUrl(element)}
                        alt={`${project.title}-img-${i}`}
                        onClick={() => setEnlargedIndex(i)}
                        style={{ cursor: 'pointer' }}
                    />
                ))}
                {project.video && (
                    <video src={getImageUrl(project.video)} className='projet-img' controls/>
                )}
            </div>
            
            {/* Lightbox overlay */}
            {enlargedIndex !== null && (
                <div 
                    className="lightbox-overlay"
                    onClick={() => setEnlargedIndex(null)}
                >
                    <img
                        className="lightbox-image"
                        src={getImageUrl(project.img[enlargedIndex])}
                        alt={`${project.title}-enlarged`}
                        onClick={(e) => e.stopPropagation()} // Empêche la fermeture au clic sur l'image
                    />
                    <button 
                        className="lightbox-close"
                        onClick={() => setEnlargedIndex(null)}
                    >
                        ✕
                    </button>
                </div>
            )}
            
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
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="git">
                    See the code
                </a>
            )}
        </div>
    );
}

export default ProjectDetail;