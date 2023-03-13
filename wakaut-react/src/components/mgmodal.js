 import { Button } from "react-bootstrap";
 import '../styles/boot-added.css';
 import {Modal} from 'react-bootstrap';
 import React from "react";
 import '../styles/boot-added.css'
 const myModal = document.getElementById('myModal')
 const myInput = document.getElementById('myInput')


const Mgmodal=(props)=>{
    return(
        <Modal show={props.LgShow}  onHide={()=> props.setLgShow(false)} lgShow={props.LgShow} setLgShow={props.setLgShow}
        >
            <div
                className="modal show"
                style={{ display: 'block'}}
            >
                <Modal.Dialog >
                    <Modal.Header closeButton>
                        <Modal.Title>계정 관리</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>해당 계정을 정지시키겠습니까?</p>
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