import styles from './NewProject.module.css';

import { useNavigate } from 'react-router-dom';

import ProjectForm from '../project/ProjectForm';

function NewProject() {

    const history = useNavigate(); //permite fazer redirects das páginas

    function createPost(project) {
        //inicializar cost e services
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => 
            console.log(data),
            history("/projects", {message: "Project created successfully!"}) //redirect
        )
        .catch((err) => console.log(err));
    }

    return (
        <div className={styles.newProject_container}>
            <h1>Create Project</h1>
            <p>Create your project and then add the services</p>
            <ProjectForm handleSubmit={createPost} btnText="Create project"/>
        </div>
    );
}

export default NewProject;