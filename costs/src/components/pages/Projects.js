import Message from "../layout/Message";

import { useLocation } from "react-router-dom";

function Projects() {
    //ler o que está no newProject
    const location = useLocation();
    let message = '';

    //se tiver alguma coisa no state, vou verificar se a message existe
    if(location.state){
        message = location.state.message;
    }

    return (
        <div>
            <h1>My Projects</h1>
            {message && <Message type="success" msg={message}/>}
        </div>
    );
}

export default Projects;