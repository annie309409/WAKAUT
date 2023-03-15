import { Button } from "react-bootstrap";
import {Modal} from 'react-bootstrap';
import React from "react";

const Mgmodal=(props)=>{
    return(
        <Modal show={props.LgShow}  onHide={()=> props.setLgShow(false)}  backdrop="static">
            <div className="modal show" style={{ display: 'block'}}>
                <Modal.Dialog >
                    <Modal.Header closeButton>
                        <Modal.Title>{props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{props.msg}</p>
                    </Modal.Body>
                    <Modal.Footer className="stopmodal" >
                        <Button variant="secondary" onClick={()=> props.setLgShow(false)}>아니요</Button>
                        <Button variant="primary" onClick={()=> props.setLgShow(false)}>네</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </Modal>
    )
};
export default Mgmodal;