import Title from "../../components/title";
import {Container} from "react-bootstrap";
import MyInfoList from "../../components/myinfo_list";
import MyInfoMain from "../../components/myinfo_main";
import getLayout from "../../components/layouts/getLayout";

const MyInfo = () => {
    return(
      <Container className="myinfo">

      <Title title='내정보 관리'/>

        <MyInfoMain link="/" btnvalue="로그아웃" label="홍길동"/>
        <MyInfoMain link="/member/modify" noimage='noimage' btnvalue="회원정보수정" label="회원정보"/>

        <MyInfoList type='이름' detail='홍길동'/>
        <MyInfoList type='비밀번호' detail='●●●●●●●●●●'/>
        <MyInfoList type='이메일' detail='JoonSick@email.com'/>
        <MyInfoList type='연락처' detail='012-3456-7890'/>
        <MyInfoList type='성별' detail='남자'/>
        <MyInfoList type='생년월일' detail='2000 / 01 / 01'/>

      </Container>
    );
}

export default MyInfo;

getLayout(MyInfo,{title:'WAKAUT! 회원정보',description:'워크아웃 회원정보 페이지'})