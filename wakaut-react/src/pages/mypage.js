import Title from "../components/title";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";
import {BsChevronCompactRight, BsPencilSquare} from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import { AiOutlineLogout  } from "react-icons/ai";
import MyPageList from "../components/mypage_list";


const MyPage = () => {
    return(
        <Container>

        <Title title='마이페이지'/>

            <div style={{display: 'flex',alignItems:"center", justifyContent: 'center'}}>
                <div style={{width:'300px', height: '300px', backgroundColor: '#ccc', borderRadius:'20px'}}>
                    &nbsp;
                </div>
            </div>

            <div style={{display: 'flex',alignItems:"center", justifyContent: 'center', fontSize: '30px', marginTop:'20px', fontWeight:'bold'}}>홍길동</div>

            <div className='d-flex' style={{height:'100px', fontSize:'26px', marginTop:'10px'}}>
                <Link to='#' className='col-lg-5' style={{textAlign:'end'}}>
                    <BsPencilSquare style={{color:'#17a0b8'}}/>
                </Link>

                <Link to='#' className='col-lg-2' style={{textAlign:'center', textDecoration: 'none', color:'black'}}>
                    남긴 글
                </Link>

                <div className='col-lg-5' style={{textAlign:'start', color:'#17a0b8'}}>(12)</div>
            </div>

            <MyPageList link='/myinfo' type='내 정보 관리' bsicon={BsBook} icon2={BsChevronCompactRight}/>
            <MyPageList link='/modify' type='내 정보 수정' bsicon={BsPencilFill} icon2={BsChevronCompactRight}/>
            <MyPageList link='/favorites' type='즐겨찾기 목록' bsicon={BsSuitHeartFill} icon2={BsChevronCompactRight}/>
            <MyPageList aiicon={AiOutlineLogout} bg='#17a0b8' color='white'/>

        </Container>
    )
}

export default MyPage;