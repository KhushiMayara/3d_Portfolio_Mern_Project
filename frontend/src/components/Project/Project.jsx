import React from 'react';
import { Button, Typography } from "@mui/material";
import "./Project.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
//import { deleteProject, getUser } from "../../actions/user";
//import { useDispatch } from "react-redux";

const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
    
  }) => {
    return(
        <>
          <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>
        
      {isAdmin && (
        <Button
         style={{ color: "rgba(40,40,40,0.7)" }}
        >
          <Delete />
        </Button>
      )}
        </>
    )
  }
const Project = () => {
    const projects = [ 1, 2, 3];
  return (
    <div className='projects'>
   
    <Typography variant="h3">
        project <AiOutlineProject />
    </Typography>
    <div className="projectsWrapper">
    {projects.map((project, index) => (
          <ProjectCard
          url="https://github.com/KhushiMayara"
          projectImage="https://avatars.githubusercontent.com/u/121582684?v=4"
          projectTitle="mern"
          description="this sapmle"
          technologies="mogo"
          />
        ))}

    </div>

    <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
  </div>
  )
}

export default Project;