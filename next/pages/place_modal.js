import Modal from '../components/modal'
import {Card,Button} from 'react-bootstrap';
import {AiFillStar,AiOutlineHighlight,AiOutlinePhone} from "react-icons/ai";
import {CiLocationOn, CiFaceSmile } from "react-icons/ci";
import List from '../components/list';
import Link from "next/link";
import KakaoSet from '../services/kakaoSet';
import {Post,kakaoInit} from "../components/feutils";


const PlaceModal=(props)=>{
    let scores=[];
    let lis = props.bdList.boards;
    if(lis == undefined) lis = ['','']; 
    for(let i = 0; i<props.score; i++) scores.push(i);
    const sc= (props.score) ? scores.map(m=>{return <AiFillStar key={m} />}): false;

    // 즐겨찾기 추가
    async function fvrAdd(e,{userid, facility, region, contact}){
        e.preventDefault();
        await Post({userid: userid, facility: facility, region: region, contact: contact}, '/member/addfavorites');
    }

    return(
        <Modal size={props.size} lgShow={props.lgShow} setLgShow={props.setLgShow} class='d-flex' title="정보 상세보기">
            <div className='left col-6 me-1'>
                <Card className='border-0'>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>시설평가하기</Card.Title>
                    <Card.Text>다른 사용자에게 의견을 들려주세요</Card.Text>
                    <Card.Text>{sc}</Card.Text>
                    <div className='btns'>
                        <Button variant="primary" className='fluid'
                                onClick={(e)=>{ fvrAdd(e,{
                                    userid:1, facility:props.title, region:props.addr, contact:props.contact})}}
                        >즐겨찾기 추가</Button>
                        <Button variant="warning" onClick={()=>{KakaoSet(kakaoInit(),{props})}} className='fluid'>카카오 공유하기</Button>
                    </div>
                </Card.Body>
                </Card>
            </div>
            <div className='right col-6 ms-1'>
                <h2>{props.title}</h2>
                <p><CiLocationOn /><span>{props.addr}</span></p>
                <p><AiOutlinePhone /><span>{props.contact}</span></p>
                <p><AiOutlineHighlight /><span>{props.des}</span></p>
                <p><CiFaceSmile /><span>{sc}</span></p>
                <div className='brdPrev mb-5'>
                     {(lis[0]!=undefined)?<List title={lis[0].title} note={lis[0].content} kd={lis[0].category} time={lis[0].regdate2} view={lis[0].views}/>:''}
                     {(lis[1]!=undefined)?<List title={lis[1].title} note={lis[1].content} kd={lis[1].category} time={lis[1].regdate2} view={lis[1].views}/>:''}
                </div>
                <Button variant="success"> <Link href="/board/boardlist">게시글 더 보기</Link></Button>
            </div>
        </Modal>
    )
}
export default PlaceModal;