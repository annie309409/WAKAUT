import Modal from '../components/modal'
import {Card,Button} from 'react-bootstrap';
import {AiFillStar,AiOutlineHighlight} from "react-icons/ai";
import {CiLocationOn, CiPhone, CiFaceSmile } from "react-icons/ci";
import List from '../components/list';
import kakaoShare from '../services/kakaoShare';

const PlaceModal=(props)=>{
    console.log(props.img);
    let scores=[];
    for(let i = 0; i<props.score; i++) scores.push(i);
    const sc= (props.score) ? scores.map(m=>{return <AiFillStar key={m} />}): false;
    
    return(
        <Modal lgShow={props.lgShow} setLgShow={props.setLgShow} class='d-flex' title="정보 상세보기">
            <div className='left col-6 me-1'>
                <Card className='border-0'>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>시설평가하기</Card.Title>
                    <Card.Text>다른 사용자에게 의견을 들려주세요</Card.Text>
                    <Card.Text>{sc}</Card.Text>
                    <div className='btns'>
                        <Button variant="primary" className='fluid'>즐겨찾기 추가</Button>
                        <Button variant="warning" className='fluid ms-2' onClick={()=>{kakaoShare({'addr':props.addr, 'title':props.title, 'des':props.des, 'img':props.img, 'likes':props.score})}}>카카오 공유하기</Button>
                    </div>
                </Card.Body>
                </Card>
            </div>
            <div className='right col-6 ms-1'>
                <h2>{props.title}</h2>
                <p><CiLocationOn /><span>{props.addr}</span></p>
                <p><AiOutlineHighlight /><span>{props.des}</span></p>
                <p><CiFaceSmile /><span>{sc}</span></p>
                <div className='brdPrev mb-5'>
                    <List title="게시판 제목" note="이곳은 정말 좋은곳입니다." kd="community" time="2023-03-08" view="255"/>
                    <List title="게시판 제목" note="이곳은 정말 좋은곳입니다." kd="review" time="2023-03-08" view="255"/>
                </div>
                <Button variant="success">게시글 더 보기</Button>
            </div>
        </Modal>
    )
}
export default PlaceModal;