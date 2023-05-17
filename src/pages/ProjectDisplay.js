import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from '@mui/icons-material/Link';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="project"/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div>
        <a href={project.repo} target="blank">
        <GitHubIcon className="git-icon" />
        </a>
      <a href={project.live} target="blank">
      <LinkIcon />
      </a>
      
      </div>    
    </div>
  );
}

export default ProjectDisplay;