import {Modal} from 'react-bootstrap';

const ModalDetail=(props)=>{    
    return(
        <Modal size="lg" show={props.lgShow} onHide={() => props.setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">{props.modal_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={props.class}>
            { props.children }
        </Modal.Body>
      </Modal>
    )
}

export default ModalDetail;