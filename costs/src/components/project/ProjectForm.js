import styles from './ProjectForm.module.css';

import {useEffect, useState} from 'react';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({handleSubmit, btnText, projectData}) {

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

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

   const submit = (e) => {
    e.preventDefault();
    //console.log(project);
    handleSubmit(project);
   };

   function handleChange(e) {
    setProject({...project, [e.target.name]: e.target.value});
   }

   function handleCategory(e) {
    setProject({...project, category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
    }});
   }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type="text" text="Project name" name="name" placeholder="Enter project name" value={project.name ? project.name : ''} handleOnChange={handleChange}/>
            <Input type="number" text="Total budget" name="budget" placeholder="Enter total budget" value={project.budget ? project.budget : ''} handleOnChange={handleChange}/>
            
            <Select name="category_id" text="Select the category" options={categories} value={project.category ? project.category.id : ''} handleOnChange={handleCategory}/>

            <SubmitButton text={btnText}/>
        </form>
    );
}

export default ProjectForm;