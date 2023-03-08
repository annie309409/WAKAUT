import {Modal,Card,Button} from 'react-bootstrap';
import {AiFillStar } from "react-icons/ai";
import {CiLocationOn, CiPhone, CiFaceSmile } from "react-icons/ci";
import List from '../components/list';
import img  from '../assets/workaut.png';

const ModalDetail=(props)=>{
    let scores=[];
    for(let i = 0; i<props.score; i++) scores.push(i);
    const sc= scores.map(m=>{return <AiFillStar key={m} />});

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
            <div className='left col-6 me-1'>
                <Card className='border-0'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>시설평가하기</Card.Title>
                    <Card.Text>다른 사용자에게 의견을 들려주세요</Card.Text>
                    <Card.Text>{sc}</Card.Text>
                    <div className='btns'>
                        <Button variant="primary" className='fluid'>즐겨찾기 추가</Button>
                        <Button variant="warning" className='fluid ms-2'>카카오 공유하기</Button>
                    </div>
                </Card.Body>
                </Card>
            </div>
            <div className='right col-6 ms-1'>
                <h2>부천 종합운동장</h2>
                <p><CiLocationOn /><span> 경기도 부천시 논현1동 844-1</span></p>
                <p><CiPhone /><span> 031-888-6666</span></p>
                <p><CiFaceSmile /><span>{sc}</span></p>
                <div className='brdPrev mb-5'>
                    <List title="게시판 제목" note="이곳은 정말 좋은곳입니다." kd="review" time="2023-03-08" view="255"/>
                    <List title="게시판 제목" note="이곳은 정말 좋은곳입니다." kd="review" time="2023-03-08" view="255"/>
                </div>
                <Button variant="success">게시글 더 보기</Button>
            </div>
        </Modal.Body>
      </Modal>
    )
}

export default ModalDetail;