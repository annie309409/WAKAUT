import Title from "../../components/title";
import {Container} from "react-bootstrap";
import MyInfoList from "../../components/myinfo_list";
import MyInfoMain from "../../components/myinfo_main";
import getLayout from "../../components/layouts/getLayout";
import {Datas} from "../../components/feutils";
import {getSession} from "next-auth/client";

export async function getServerSideProps(ctx) {
    // 세션 객체 가져오기
    const session = await getSession(ctx);

    // 로그인한 사용자의 아이디
    let userid = session.user.userid;
    let member = await Datas('/member/myinfo', `userid=${userid}`);
    console.log("myinfo 페이지 받아온 값 - ", member);
    return{props: {member, session}};
}

const MyInfo = ({member, session}) => {
    const mif = member[0];
    return(
        <Container className="myinfo">

            <Title title='내정보 관리'/>

            <MyInfoMain link="/" btnvalue="로그아웃" label={mif.name}/>
            <MyInfoMain link="/member/modify" noimage='noimage' btnvalue="회원정보수정" label="회원정보"/>

            <MyInfoList type='아이디' detail={mif.userid}/>
            <MyInfoList type='비밀번호' detail='●●●●●●●●●●'/>
            <MyInfoList type='이메일' detail={mif.email}/>
            <MyInfoList type='연락처' detail={mif.phone_number}/>
            <MyInfoList type='성별' detail={mif.gender}/>
            <MyInfoList type='생년월일' detail={mif.birth_date}/>

        </Container>
    );
}

export default MyInfo;

getLayout(MyInfo,{title:'WAKAUT! 회원정보',description:'워크아웃 회원정보 페이지'})