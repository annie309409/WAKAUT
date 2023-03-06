import {Alert,Container} from 'react-bootstrap';
import { useState } from 'react';
import '../styles/boot-added.css';

const Alerts=(props)=>{
    let [show,setShow]=useState('visible');
    if(show){        
        return(
            <Alert key={props.color} variant={props.color} className={show}>
                <Container className='d-flex justify-content-between'>
                    <p className='mb-0'>{props.msg}</p>
                    <p className='mb-0 cursor' onClick={()=>{setShow('visible no')}}>X</p>   
                </Container>
            </Alert>
        )
    }
}

export default Alerts;