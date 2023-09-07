import styles from '../project/ProjectForm.module.css';

import { useState } from 'react';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

function ServiceForm({handleSubmit, btnText, projectData}) {
    const [service, setService] = useState({});


    function submit(e){
        e.preventDefault(); //não submeter o formulario
        projectData.services.push(service); //adiciono o servico ao projeto
        handleSubmit(projectData); //coloco os projetos todos atualizados
    }


    function handleChange(e) {
        setService({...service, [e.target.name]: e.target.value}); //...service(servico atual) e mostra os dados atuais
    }


    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type="text" text="Service name" name="name" placeholder="Enter the service name" handleOnChange={handleChange}/>
            <Input type="number" text="Service cost" name="cost" placeholder="Enter the total amount" handleOnChange={handleChange}/>
            <Input type="text" text="Service description" name="description" placeholder="Describe the service" handleOnChange={handleChange}/>

            <SubmitButton text={btnText}/>
        </form>
    );
}

export default ServiceForm;