import {Container} from 'react-bootstrap';
import Input from '../../components/modify_input';
import Title from '../../components/title'
import React, {useState} from "react";
import ModifyRadio from "../../components/modify_radio";
import ModalDetail from "../../components/modal";
import getLayout from "../../components/layouts/getLayout";
import {Datas, Post} from "../feutils";

export async function getServerSideProps(ctx){
    let member = await Datas('/member/modify', 'uid=1');
    console.log(member);
    return{props:{member}};
}


const InfoModify=({member})=>{
    const mdf = member[0];
    const [lgShow, setLgShow] = useState(false);
    const gender = ['남자', '여자'];
    const terms1 = ['개인정보 수집 이용 동의(선택)'];
    const terms2 = ['광고성 정보, 혜택 등 수신 동의(선택)'];

    const [userid, setUserid] = useState('');
    const [garbage1, setGarbage1] = useState('')  ; // 현재비밀번호(의미없음)
    const [passwd, setPasswd] = useState('');
    const [garbage2, setGarbage2] = useState('');   // 새비밀번호확인(의미없음)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gen, setGen] = useState('');
    const [birth, setBirth] = useState('');
    const [agr1, setAgr1] = useState('');
    const [agr2, setAgr2] = useState('');

    const handleUserIdChange = (value) => {
        setUserid(value);
    };
    const handlePasswordChange = (value) => {
        setPasswd(value);
    };
    const handleNameChange = (value) => {
        setName(value);
    };
    const handleEmailChange = (value) => {
        setEmail(value);
    };
    const handlePhoneChange = (value) => {
        setPhone(value);
    };
    const handleGenderChange = (value) => {
        setGen(value);
    };
    const handleBirthIdChange = (value) => {
        setBirth(value);
    };
    const handleAgree1Change = (value) => {
        setAgr1(value);
    };
    const handleAgree2Change = (value) => {
        setAgr2(value);
    };



    class Btn {
        constructor (className,variant, link, value) {
            this.className = className;
            this.variant = variant;
            this.link = link;
            this.value = value;
        }
    }

    const btn = [
        new Btn('mod-leave-btn col-2 shadow',"outline-info",'/',"탈퇴하기"),
        new Btn('mod-info-btn col-2 shadow','info','/member/myinfo',"회원정보 수정")
    ];

    // 회원정보 수정 버튼 클릭시 이벤트 핸들러를 부모요소에서 생성하고 ModifyRadio의 props로 전달할거임.
    async function handleSubmit () {
        await Post({
            userid: userid, passwd: passwd,
            name: name, email: email,
            phone_number: phone, gender: gen,
            birth_date: birth,
            agree_to_privacy_policy: agr1, agree_to_advertising_info: agr2
        }, '/member/modifyudt');
        }

    return(
        <Container className='modify-frm'>
            <Title title='개인 정보 수정' />
            <Input label='아이디' value={mdf.userid} placeholder="" btn={false} btnvalue="" variant="" onChange={handleUserIdChange}/>
            <Input label='현재 비밀번호' value={mdf.passwd} btn={false} onChange={setGarbage1}/>
            <Input label='새 비밀번호' placeholder="새 비밀번호를 입력해 주세요" btn={false} onChange={handlePasswordChange}/>
            <Input label='새 비밀번호 확인' placeholder="새 비밀번호를 다시 입력해 주세요" btn={false} onChange={setGarbage2}/>
            <Input label='닉네임' value={mdf.name} btn={false} onChange={handleNameChange}/>
            <Input label='이메일' value={mdf.email} btn={true} btnvalue="중복확인" variant="outline-secondary" onChange={handleEmailChange}/>
            <Input label='휴대폰' value={mdf.phone_number} btn={true} btnvalue="다른번호 인증" variant="outline-info" onChange={handlePhoneChange}/>
            <ModifyRadio type='성별' radioval={gender} checked={mdf.gender} onChange={handleGenderChange}/>
            <Input label='생년월일' value={mdf.birth_date2} btn={false} onChange={handleBirthIdChange}/>
            <ModifyRadio
                type='선택약관동의'
                radioval={terms1}
                setLgShow={setLgShow}
                termsview='약관보기'
                agree1={mdf.agree_to_privacy_policy}
                onChange={handleAgree1Change}
            />
            <hr className="hr"/>
            <ModifyRadio
                type='선택약관동의'
                radioval={terms2}
                agree2={mdf.agree_to_advertising_info}
                onChange={handleAgree2Change}
            />
            <ModifyRadio btn={btn}
                         notype={true}
                         mdf={mdf}
                         handleModify={handleSubmit}
                         userid={userid}
                         passwd={passwd}
                         name={name}
                         email={email}
                         phone={phone}
                         gen={gen}
                         birth={birth}
                         agr1={agr1}
                         agr2={agr2}
            />
            <ModalDetail lgShow={lgShow} setLgShow={setLgShow} title="이용약관" children="제 1 장 총칙
                제 1 조 (목적)이 약관은「공유마당」(이하 “사이트”라 칭함)에서 제공하는 인터넷관련서비스(이하 '서비스'라 칭함)를 이용함에 있어 「공유마당」과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.제 2 조 (용어의 정의)이 약관에서 사용하는 주요한 용어의 정의는 다음과 같습니다.
                ① ‘회원’이라 함은 이 약관에 동의하고, 「공유마당」과 서비스 이용 계약을 체결하여 이용자 아이디(ID)를 부여 받은 개인 및 기관을 말합니다.
                ② ‘회원 아이디’(이하 ‘ID’라 칭함)라 함은 회원의 식별과 회원의 서비스 이용을 위하여 회원이 선정하고 신청함에 따라 「공유마당」에서 승인한 문자나 숫자 혹은 그 조합을 말합니다. 기관의 정보로 가입한 ID는 관련 법규가 인정하는 범위에서 개인정보와 같은 권리와 의무를 가지며 이하 개인과 개인정보로 언급되는 모든 약관은 기관과 기관정보를 포함합니다.
                ③ ‘비밀번호’라 함은 회원ID로 식별되는 회원의 본인 여부를 검증하고, 회원 자신의 비밀을 보호하기 위하여 회원이 선정하여 사이트에 등록한 고유의 문자와 숫자의 조합을 말합니다.
                ④ ‘이용중지’라 함은 사이트가 본 약관에 의거하여 회원의 서비스 이용을 제한하는 것을 말합니다.
                ⑤ ‘해지’라 함은 사이트 또는 회원이 일방적으로 이용계약을 장래에 소멸시키는 것을 말합니다.
                ⑥ “저작권”이란 인간의 사상 또는 감정을 표현한 창작물인 저작물에 대한 배타적·독점적 권리이며, 이러한 저작물에는 소설·시·논문·강연·연술(演述)·각본·음악·연극·무용·회화·서예·도안(圖案)·조각·공예·건축물·사진·영상(映像)·도형(圖形)·컴퓨터프로그램 등이 있다.
                제 3 조 (약관의 효력 및 변경)
                ① 이 약관은 서비스를 통하여 온라인으로 공시하고 회원의 동의와 서비스의 승낙으로 효력이 발생됩니다.
                ② 서비스는 사정상 중요한 사유가 발생할 경우 사전 고지 없이 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 정당한 절차에 따라 서비스를 통하여 공지함으로써 효력을 발휘합니다.
                ③ 회원은 변경된 약관에 동의하지 않을 경우 회원 가입에 제약이 따르거나, 회원 탈퇴를 요청할 수 있으며, 변경된 약관의 효력 발생일 이후 10일 이내에 해지 요청을 하지 않을 경우 약관의 변경 사항에 동의한 것으로 간주됩니다.
                ④ 회원은 정기적으로 서비스에 방문하여 약관의 변경사항을 확인하여야 합니다. 변경된 약관에 대한 정보를 알지 못해 발생하는 회원의 피해는 서비스에서 책임지지 않습니다.
                제 4 조 (약관 외 준칙)본 약관에 명시되지 아니한 사항에 대해서는 전기통신기본법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 기타 관련 법령의 규정에 따릅니다. 제 2장 서비스 이용 계약제 5 조 (서비스 이용 신청)회원으로 가입하여 서비스를 이용하기를 희망하는 자는 서비스에서 정한 가입 양식에 따라 회원정보를 기입하고, 요청하는 제반 정보(개인인적사항이나 기관정보 등)를 제공하여 이용신청을 합니다."
            />
        </Container>
    )
}

export default InfoModify;

getLayout(InfoModify,{title:'WAKAUT! 회원정보수정',description:'워크아웃 회원정보수정 페이지'})