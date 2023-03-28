import {Button, Modal} from 'react-bootstrap';
import Link from "next/link";

const ModalDetail=(props)=>{    
    return(
        <Modal size={props.size} show={props.lgShow} onHide={() => {props.setLgShow(false), props.setStab(true), props.setSt(['☆','☆','☆','☆','☆'])}} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={props.class}>
            { props.children }
        </Modal.Body>
            <Modal.Footer>
                { (props.btn)
                    ? <div><Link href={props.link}><Button>{props.btn}</Button></Link></div>
                    :false }
            </Modal.Footer>
      </Modal>
    )
}

export default ModalDetail;