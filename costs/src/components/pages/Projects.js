import styles from './Projects.module.css';

import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from '../project/ProjectCard';


function Projects() {
    
    const [projects, setProjects] = useState([]);//guardar os projetos

    //ler o que está no newProject
    const location = useLocation();
    let message = '';

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            setProjects(data)
        })
        .catch((err) => console.log(err))
    }, []);

    //se tiver alguma coisa no state, vou verificar se a message existe
    if(location.state){
        message = location.state.message;
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>My Projects</h1>
                <LinkButton to="/newproject" text="Create project"/>
            </div>

            {message && <Message type="success" msg={message}/>}

            <Container customClass="start">
                {projects.length > 0 && 
                projects.map((project) => 
                    <ProjectCard id={project.id} name={project.name} budget={project.budget} category={project.category.name} key={project.id}/>
                )}
            </Container>
        </div>
    );
}

export default Projects;