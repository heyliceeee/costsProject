import styles from './Message.module.css'; 

import { useState, useEffect } from 'react';

function Message({type, msg}) {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        //não tem mensagem, não mostra
        if(!msg){
            setVisible(false);
            return;
        }

        //se tiver mensagem, mostra
        setVisible(true);

        //mostra mensagem durante 3s
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        //clear o timeout
        return () => clearTimeout(timer);

    }, [msg]);

    return (
        <>
            {visible && (
            <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
            )}
        </>
    );
}

export default Message;