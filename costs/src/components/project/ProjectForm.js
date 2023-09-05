import styles from './ProjectForm.module.css';

import {useEffect, useState} from 'react';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({btnText}) {

    const [categories, setCategories] = useState([]);

    //executar a API apenas quando é necessário
   useEffect(() => {

        //request a API
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data) //colocou os dados no setCategories
        })
        .catch(err => console.log(err))
   }, [])

    return (
        <form className={styles.form}>
            <Input type="text" text="Project name" name="name" placeholder="Enter project name"/>
            <Input type="number" text="Total budget" name="budget" placeholder="Enter total budget"/>
            
            <Select name="category_id" text="Select the category" options={categories}/>

            <SubmitButton text={btnText}/>
        </form>
    );
}

export default ProjectForm;