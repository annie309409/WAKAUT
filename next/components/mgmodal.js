import { Button } from "react-bootstrap";
import {Modal} from 'react-bootstrap';
import React from "react";

const Mgmodal=(props)=>{
    return(
        <Modal show={props.LgShow}  onHide={()=> props.setLgShow(false)}  backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{props.msg}</p>
            </Modal.Body>
            <Modal.Footer className="stopmodal" >
                <Button variant="secondary" onClick={()=> {props.setLgShow(false)}}>아니요</Button>
                <Button variant="primary" onClick={()=> {props.setLgShow(false); props.setCnfirm(true)}}>네</Button>
            </Modal.Footer>
        </Modal>
    )
};
export default Mgmodal;