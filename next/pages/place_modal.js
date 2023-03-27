import Modal from '../components/modal'
import {Card,Button} from 'react-bootstrap';
import {AiFillStar,AiOutlineHighlight,AiOutlinePhone} from "react-icons/ai";
import {CiLocationOn, CiFaceSmile } from "react-icons/ci";
import List from '../components/list';
import Link from "next/link";
import KakaoSet from '../services/kakaoSet';
import {Post,kakaoInit} from "../components/feutils";
import {useState} from "react";

const PlaceModal=(props)=>{
    let scores=[];
    const [stab,setStab] =  useState(true);
    const [isCompleteAdd, setIsCompleteAdd] = useState(false);
    const [st,setSt] = useState(['☆','☆','☆','☆','☆']);
    let lis = props.bdList.boards;
    if(lis == undefined) lis = ['','']; 
    
    // 별점관련
    const setStar = (idx)=>{
        for(let i=0; i<5 ; i++){
            if(i<=idx) scores.push('★');
            else scores.push('☆')
        }
        if(stab)setSt(scores);
    }

    const fixStar =async (idx)=>{
        if(stab){
            await Post({facility:props.title,score:idx+1},'/member/addscore');
            setStab(false);
            props.setPeops(parseInt(props.peops)+1);
            if(props.score!=null){
                props.setScs((parseInt(props.score)+(idx+1))/2);
            }else{
                props.setScs(idx+1);
            }
        }else{
            alert('이미 평가하셨습니다 👨')
        }
    }


    // 즐겨찾기 추가
    async function fvrAdd(e,{userid, facility, region, contact}){
        e.preventDefault();
        if(userid !== null){
            await Post({
                userid: userid,
                facility: facility,
                region: region,
                contact: contact
            }, '/member/addfavorites');
            setIsCompleteAdd(true);
            // 즐겨찾기 추가 성공 후 콜백함수 호출
            props.onFavoriteAdd();
        }else location.href = "/member/login"
    }
    
    return(
    <>
        <Modal size={props.size} lgShow={props.lgShow} setLgShow={props.setLgShow} class='d-flex' title="정보 상세보기" setStab={setStab} setSt={setSt}>
        <div className='left col-6 me-1'>
            <Card className='border-0'>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>시설평가하기</Card.Title>
                <Card.Text>다른 사용자에게 의견을 들려주세요</Card.Text>
                <Card.Text className='scores'>{st.map((m,idx)=><span onMouseOver={()=>{setStar(idx)}} onClick={()=>{fixStar(idx)}}>{m}</span>)}</Card.Text>
                <div className='btns'>
                    <Button variant="primary" className='fluid'
                            onClick={(e)=>{ fvrAdd(e,{
                                userid:props.userid, facility:props.title, region:props.addr, contact:props.contact})}}
                    >즐겨찾기 추가</Button>
                    <Button variant="warning" onClick={()=>{KakaoSet(kakaoInit(),{props})}} className='fluid ms-2'>카카오 공유하기</Button>
                </div>
            </Card.Body>
            </Card>
        </div>
        <div className='right col-6 ms-1'>
            <h2>{props.title}</h2>
            <p><CiLocationOn /><span>{props.addr}</span></p>
            <p><AiOutlinePhone /><span>{props.contact}</span></p>
            <p><AiOutlineHighlight /><span>{props.des}</span></p>
            <p><CiFaceSmile /><span className='scores'> {props.score}점 ({props.peops}명이 평가함)</span></p>
            <div className='brdPrev mb-5'>
                 {(lis[0]!=undefined)?<List title={lis[0].title} note={lis[0].content} kd={lis[0].category} time={lis[0].regdate2} view={lis[0].views}/>:''}
                 {(lis[1]!=undefined)?<List title={lis[1].title} note={lis[1].content} kd={lis[1].category} time={lis[1].regdate2} view={lis[1].views}/>:
                 <p className='mt-2'>게시글이 없습니다. 글을 남겨보세요!😁</p>}
            </div>
            <Button variant="success"> <Link href="/board/boardlist">게시글 더보기</Link></Button>
        </div>
        </Modal>
        <Modal title="알림" class="searchModal" size="md" lgShow={isCompleteAdd}
            setLgShow={setIsCompleteAdd}  children="나의 즐겨찾기에 추가됐습니다."
            btn="즐겨찾기 보기" link="/member/favorites"/>
    </>
    )
}
export default PlaceModal;