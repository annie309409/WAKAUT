import Title from "../components/title";
import {Container} from "react-bootstrap";
import MyInfoList from "../components/myinfo_list";
import MyInfoMain from "../components/myinfo_main";

const MyInfo = () => {
    return(
      <Container>

      <Title title='내정보 관리'/>

        <MyInfoMain/>
        <MyInfoMain noimage='noimage'/>

        <MyInfoList type='이름' detail='홍길동'/>
        <MyInfoList type='비밀번호' detail='●●●●●●●●●●'/>
        <MyInfoList type='이메일' detail='JoonSick@email.com'/>
        <MyInfoList type='연락처' detail='012-3456-7890'/>
        <MyInfoList type='성별' detail='남자'/>
        <MyInfoList type='생년월일' detail='2000 / 01 / 01'/>

      </Container>
    );
}

export default MyInfo