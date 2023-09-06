import styles from './Project.module.css';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Loading from './../layout/Loading';
import Container from './../layout/Container';
import ProjectForm from './../project/ProjectForm';
import Message from './../layout/Message';

function Project() {

    const { id } = useParams(); //passar o id do projeto para esta página
    const [project, setProject] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [message, setMessage] = useState();
    const [type, setType] = useState();

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            }).then((resp) => resp.json())
            .then((data) => {
                setProject(data);
            })
            .catch((err) => console.log(err))
        }, 300);

    }, [id]);


    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm);
    }


    function editProject(project){
        //budget validation

        if(project.budget < project.cost){
           setMessage('The budget cannot be less than the project cost!');
           setType('error');

           return false;
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(project)
        }).then((resp) => resp.json())
        .then((data) => {
            setProject(data);
            setShowProjectForm(false);
            
            setMessage('Project updated!');
            setType('success');
        })
        .catch((err) => console.log(err));
    }


    return (
        <>
        {project.name ? (

        <div className={styles.project_details}>
            <Container customClass="column">
                {message && <Message type={type} msg={message}/>}
                <div className={styles.details_container}>
                    <h1>Project: {project.name}</h1>
                    <button className={styles.btn} onClick={toggleProjectForm}> {/* //se não mostra o form mostra o botão 'edit project', se o form tiver a mostra mostra o botão 'close' */}
                        {!showProjectForm ? 'Edit project' : 'Close'}
                        </button> 
                    {!showProjectForm ?
                    (<div className={styles.project_info}>
                        <p>
                            <span>Category:</span> {project.category.name}
                        </p>
                        <p>
                            <span>Total Budget:</span> {project.budget}€
                        </p>
                        <p>
                            <span>Total Used:</span> {project.cost}€
                        </p>
                    </div>) 
                    : 
                    (<div className={styles.project_info}>
                        <ProjectForm handleSubmit={editProject} btnText="Save changes" projectData={project}/>
                    </div>)
                    }
                </div>
            </Container>
        </div>
        
        ) : (<Loading/>)}
        </>
    );
}

export default Project;