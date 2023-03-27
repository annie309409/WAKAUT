import {Container, Button, Form, Row, Col} from 'react-bootstrap';
import Input from '../../components/modify_input';
import Title from '../../components/title'
import {useEffect, useState} from "react";
import ModifyRadio from "../../components/modify_radio";
import ModalDetail from "../../components/modal";
import getLayout from '../../components/layouts/getLayout';
import {check_captcha, Datas, Post} from "../../components/feutils";

const Join=()=>{
    const [lgShow, setLgShow] = useState(false);
    const gender = ['남자', '여자'];
    const terms1 = ['개인정보 수집 이용 동의(선택)']
    const terms2 = ['광고성 정보, 혜택 등 수신 동의(선택)']

    const [userid, setUserid] = useState('');
    const [passwd, setPasswd] = useState('');
    const [passwd2, setPasswd2] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gen, setGen] = useState('');
    const [birth, setBirth] = useState('');
    const [agr1, setAgr1] = useState(0);
    const [agr2, setAgr2] = useState(0);

    // 중복확인 결과 저장 state
    const [isThereUserid, setIsThereUserid] = useState(true);
    const [isThereEmail, setIsThereEmail] = useState(true);

    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

    useEffect(() => {
        const recaptchaScript = document.createElement("script");
        recaptchaScript.src = "https://www.google.com/recaptcha/api.js";
        recaptchaScript.async = true;
        recaptchaScript.defer = true;
        recaptchaScript.onload = () => setRecaptchaLoaded(true);
        document.body.appendChild(recaptchaScript);
    }, []);

    const handleUserIdChange = (value) => {
        setUserid(value);
    };
    const handlePasswordChange = (value) => {
        setPasswd(value);
    };
    const handlePassword2Change = (value) => {
        setPasswd2(value);
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
    const handleBirthChange = (value) => {
        setBirth(value);
    };
    const handleAgree1Change = (value) => {
        setAgr1(value);
    };
    const handleAgree2Change = (value) => {
        setAgr2(value);
    };

    const idCheck = /^(?=.*[a-z])(?=.*\d)[a-z\d]{5,10}$/;
    const pwdCheck = /^(?=.*[a-z])(?=.*\d)[a-z\d]{5,10}$/;
    const nameCheck = /^[a-z가-힣]{3,10}$/;
    const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:[a-zA-Z]{2,}|kr|co\.kr|go\.kr)$/;
    const phoneCheck = /^01[016789]-\d{3,4}-\d{4}$/;
    const birthCheck = /^(19|20)\d{2}-(0[1-9]|1[0-2])-([0-2][1-9]|3[01])$/;

    // 아이디 중복확인 버튼 클릭
    async function handleIsOverlapUid () {
        if (userid === ''){
            alert("아이디를 입력하세요.");
        } else if(!idCheck.test(userid)){
            alert("아이디는 영소문자, 숫자 포함 5~10 글자여야 합니다.")
        }else {
            const result = await Datas('/member/isoverlapuserid', `userid=${userid}`);
            if (result.length !== 0) {
                alert("이미 있는 아이디 입니다.");
                setIsThereUserid(true);
            } else {
                alert("사용가능한 아이디 입니다.");
                setIsThereUserid(false);
            }
        }
    }

    // 이메일 중복확인 버튼 클릭
    async function handleIsOverlapEmail () {
        if(email === '' ){
            alert("이메일을 입력하세요.");
        } else if(!emailCheck.test(email)) {
            alert("이메일이 유효하지 않습니다.")
        }else {
            const result = await Datas('/member/isoverlapemail', `email=${email}`);
            if (result.length !== 0) {
                alert("이미 있는 이메일 입니다.");
                setIsThereEmail(true);
            } else {
                alert("사용가능한 이메일 입니다.");
                setIsThereEmail(false);
            }
        }
    }

    // 회원가입 버튼 클릭
    async function handleSubmit() {
        if (isThereUserid) {
            alert("아이디 중복을 확인해주세요.");
            return;
        }
        if (isThereEmail) {
            alert("이메일 중복을 확인해주세요.");
            return;
        }
        if (passwd !== passwd2) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        if (!idCheck.test(userid)) {
            alert("아이디는 영소문자, 숫자 포함 5~10 글자여야 합니다.");
            return;
        }
        if (!pwdCheck.test(passwd)) {
            alert("비밀번호는 영소문자, 숫자 포함 5~10 글자여야 합니다.");
            return;
        }
        if (!nameCheck.test(name)) {
            alert("닉네임은 한글 또는 영소문자 3~10 글자여야 합니다.");
            return;
        }
        if (!emailCheck.test(email)) {
            alert("이메일이 유효하지 않습니다.");
            return;
        }
        if (!phoneCheck.test(phone)) {
            alert("휴대폰 번호가 유효하지 않습니다.");
            return;
        }
        if (gen === '') {
            alert("성별을 선택하세요.");
            return;
        }
        if (!birthCheck.test(birth)) {
            alert("생년월일이 유효하지 않습니다.");
            return;
        }

        if (grecaptcha.getResponse() && await check_captcha(grecaptcha.getResponse())) {
            await Post(
                {
                    userid: userid,
                    passwd: passwd,
                    name: name,
                    email: email,
                    phone_number: phone,
                    gender: gen,
                    birth_date: birth,
                    agree_to_privacy_policy: agr1,
                    agree_to_advertising_info: agr2,
                },
                "/member/join"
            );
            location.href = "/";
        }
    }

    return(
        <Container className="modify-frm">
            <Title title='회원가입' />
            <Input label='아이디' placeholder="영문자, 숫자 포함 5~10 글자" btn={true} btnvalue="중복확인" variant="outline-secondary" onChange={handleUserIdChange} btnevent={handleIsOverlapUid} type="text"/>
            <Input label='비밀번호' placeholder="영문자, 숫자 포함 5~10 글자" btn={false} onChange={handlePasswordChange} type="password"/>
            <Input label='비밀번호 확인' placeholder="비밀번호를 재입력하세요" btn={false} onChange={handlePassword2Change} type="password"/>
            <Input label='닉네임' placeholder="한영문자 5~10 글자" btn={false} onChange={handleNameChange} type="text"/>
            <Input label='이메일' placeholder="exam@exam.com" btn={true} btnvalue="중복확인" variant="outline-secondary" onChange={handleEmailChange} btnevent={handleIsOverlapEmail} type="text"/>
            <Input label='휴대폰' placeholder="000-0000-0000" onChange={handlePhoneChange} type="text"/>
            <ModifyRadio type='성별' radioval={gender} onChange={handleGenderChange}/>
            <Input label='생년월일' value='' placeholder="2000-01-01" btn={false} onChange={handleBirthChange} type="text"/>
            <ModifyRadio type='선택약관동의' radioval={terms1} setLgShow={setLgShow} termsview='약관보기' onChange={handleAgree1Change}/>
            <hr className="hr"/>
            <ModifyRadio type='선택약관동의' radioval={terms2} onChange={handleAgree2Change}/>

            <Form.Group as={Row} className="mb-3" controlId="formID">
                <Col sm="5">{recaptchaLoaded && (
                    <div className="g-recaptcha cap2" data-sitekey="6LdL4OskAAAAAK7rwtgYuLMdFMXONFJgc5hhBcaX"></div>
                )}</Col>
            </Form.Group>
            <div className='mod-btn-container d-flex'>
                    <Button className="mod-info-btn col-2 shadow" variant='info'
                            onClick={handleSubmit}>회원가입 완료</Button>
            </div>

            <ModalDetail size="lg" lgShow={lgShow} setLgShow={setLgShow} title="이용약관" children="제 1 장 총칙
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

getLayout(Join,{title:'가입해요! WAKAUT',description:'워크아웃에 가입하시면 다양한 정보를 받을 수 있습니다.'});
export default Join;