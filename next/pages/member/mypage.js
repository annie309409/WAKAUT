import Title from "../../components/title";
import {Container} from "react-bootstrap";
import {BsChevronCompactRight, BsPencilSquare, BsBook,BsPencilFill,BsSuitHeartFill} from "react-icons/bs";
import MyPageList from "../../components/mypage_list";
import { AiOutlineLogout  } from "react-icons/ai";
import Link from "next/link";

export default function(){
    return(
        <Container className="mypg">

        <Title title='마이페이지'/>

            <div className="img-wrap">
                <div className="mypg-img">&nbsp;</div>
            </div>

            <div className="mypg-name">홍길동</div>

            <div className='write d-flex'>
                <Link href="/boardlist" className='write-ic col-lg-5'><BsPencilSquare className="sq-pen"/></Link>
                <Link href="/boardlist" className='write-history col-lg-2'>남긴 글</Link>
                <div className='history-amount col-lg-5'>(12)</div>
            </div>

            <MyPageList link='/myinfo' type='내 정보 관리'
                        bsicon={BsBook} icon2={BsChevronCompactRight}/>
            <MyPageList link='/modify' type='내 정보 수정'
                        bsicon={BsPencilFill} icon2={BsChevronCompactRight}/>
            <MyPageList link='/favorites' type='즐겨찾기 목록'
                        bsicon={BsSuitHeartFill} icon2={BsChevronCompactRight}/>
            <MyPageList aiicon={AiOutlineLogout}/>

        </Container>
    )
}