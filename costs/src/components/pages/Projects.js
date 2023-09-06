import styles from './Projects.module.css';

import { useLocation } from "react-router-dom";

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

function Projects() {
    //ler o que está no newProject
    const location = useLocation();
    let message = '';

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
                <p>Projects...</p>
            </Container>
        </div>
    );
}

export default Projects;