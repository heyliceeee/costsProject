import styles from './NewProject.module.css';

import ProjectForm from '../project/ProjectForm';

function NewProject() {
    return (
        <div className={styles.newProject_container}>
            <h1>Create Project</h1>
            <p>Create your project and then add the services</p>
            <ProjectForm/>
        </div>
    );
}

export default NewProject;