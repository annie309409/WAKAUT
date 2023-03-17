import Title from "../../components/title";
import {Container} from "react-bootstrap";
import React from "react";
import {BsChevronCompactRight, BsBook,BsPencilFill,BsSuitHeartFill} from "react-icons/bs";
import MyPageList from "../../components/mypage_list";
import { AiOutlineLogout  } from "react-icons/ai";
import getLayout from "../../components/layouts/getLayout";
import MyPgWrite from "../../components/mypage_write";

const MyPage = () => {
    return(
        <Container className="mypg">

            <Title title='마이페이지'/>
            <div className="img-wrap"><div className="mypg-img">&nbsp;</div></div>
            <div className="mypg-name">홍길동</div>

            <MyPgWrite/>

            <MyPageList link='/member/myinfo' type='내 정보 관리'
                        bsicon={BsBook} icon2={BsChevronCompactRight}/>
            <MyPageList link='/member/modify' type='내 정보 수정'
                        bsicon={BsPencilFill} icon2={BsChevronCompactRight}/>
            <MyPageList link='/member/favorites' type='즐겨찾기 목록'
                        bsicon={BsSuitHeartFill} icon2={BsChevronCompactRight}/>
            <MyPageList aiicon={AiOutlineLogout}/>

        </Container>
    )
}

export default MyPage;

getLayout(MyPage,{title:'WAKAUT! 마이페이지',description:'워크아웃 마이페이지'})
