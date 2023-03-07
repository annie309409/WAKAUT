import {Modal,Card,Button} from 'react-bootstrap';
import { AiFillStar } from "react-icons/ai";

const ModalDetail=(props)=>{
    let scores=[];
    for(let i = 0; i<props.score; i++) scores.push(i);

    return(
        <Modal
        size="lg"
        show={props.lgShow}
        onHide={() => props.setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            시설 자세히보기
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex'>
            <div className='left col-6'>
                <Card className='border-0'>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>시설평가하기</Card.Title>
                    <Card.Text>다른 사용자에게 의견을 들려주세요</Card.Text>
                    <Card.Text>
                        {
                            scores.map(m=>{
                                return <AiFillStar key={m} />
                            })
                        }

                    </Card.Text>
                    <div className='btns'>
                        <Button variant="primary" className='fluid'>즐겨찾기 추가</Button>
                        <Button variant="warning" className='fluid ms-2'>카카오 공유하기</Button>
                    </div>
                </Card.Body>
                </Card>
            </div>
            <div className='right col-6'></div>
        </Modal.Body>
      </Modal>
    )
}

export default ModalDetail;