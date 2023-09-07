import styles from './Project.module.css';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { parse, v4 as uuidv4 } from 'uuid';

import Loading from './../layout/Loading';
import Container from './../layout/Container';
import ProjectForm from './../project/ProjectForm';
import Message from './../layout/Message';
import ServiceForm from '../service/ServiceForm';

function Project() {

    const { id } = useParams(); //passar o id do projeto para esta página
    const [project, setProject] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [message, setMessage] = useState();
    const [type, setType] = useState();
    const [showServiceForm, setShowServiceForm] = useState(false);

    //obter o projeto selecionado
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


    //editar projeto
    function editProject(project){
        setMessage('');

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

    //criar servico (adicionar ao projeto)
    function createService() {
        //validar servico
        const lastService = project.services[project.services.length - 1]; //ultimo servico

        lastService.id = uuidv4(); //gerar id do ultimo servico

        const lastServiceCost = lastService.cost; //custo do último servico
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost); //custo total do projeto (custo atual do projeto + custo do servico)

        //validar se o custo total do projeto passou do valor budget
        if(newCost > parseFloat(project.budget)){ //se passou do valor
            setMessage('Budget exceeded, check the price of the service!');
            setType('error');
            project.services.pop();//remover este serviço do projeto

            return false;
        }

        //se não passou do valor, adicionar o custo do serviço ao custo total do projeto
        project.cost = newCost; //custo atual do projeto será atualizado, adicionando o valor do serviço

        //atualizar projeto
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(project)
        }).then((resp) => resp.json())
            .then((data) => {
                //mostrar os servicos
                console.log(data);
                /* setProject(data);
                setShowProjectForm(false);
                
                setMessage('Project updated!');
                setType('success'); */
        })
        .catch((err) => console.log(err));
    }

    // mostrar/esconder formulario de projeto
    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm);
    }
    

    // mostrar/esconder formulario de servico do projeto
    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm);
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

                <div className={styles.service_form_container}>
                    <h2>Add a service:</h2>
                    <button className={styles.btn} onClick={toggleServiceForm}> {/* //se não mostra o form mostra o botão 'edit project', se o form tiver a mostra mostra o botão 'close' */}
                        {!showServiceForm ? 'Add service' : 'Close'}
                    </button> 
                    <div className={styles.project_info}>
                        {showServiceForm && (<ServiceForm handleSubmit={createService} btnText="Add service" projectData={project}/>)}
                    </div>
                </div>

                <h2>Services</h2>
                <Container customClass="start">
                    <p>Service items</p>
                </Container>
            </Container>
        </div>
        
        ) : (<Loading/>)}
        </>
    );
}

export default Project;