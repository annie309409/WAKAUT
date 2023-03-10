import '../styles/boot-added.css';
import {Container, Button} from 'react-bootstrap';
import Input from '../components/modify_input';
import Title from '../components/title'
import React, {useState} from "react";
import InfoModifyModal from "../components/modify_modal";
import ModifyRadio from "../components/modify_radio";

const Join=()=>{
    const [lgShow, setLgShow] = useState(false);
    const gender = ['남자', '여자', '선택안함'];
    const terms1 = ['개인정보 수집 이용 동의(선택)']
    const terms2 = ['광고성 정보, 혜택 등 수신 동의(선택)']
    const message = ['SMS', '이메일']

    return(
        <Container>
            <Title title='회원가입' />
            <Input label='아이디' placeholder="아이디를 입력해 주세요" btn={true} btnvalue="중복확인" variant="outline-secondary"/>
            <Input label='비밀번호' placeholder="6~20자 이내 영문,숫자,특문 조합으로 입력해 주세요" btn={false}/>
            <Input label='비밀번호 확인' placeholder="비밀번호를 다시 한 번 입력해주세요" btn={false}/>
            <Input label='이름' placeholder="이름을 입력해 주세요" btn={false}/>
            <Input label='이메일' placeholder="이메일을 입력해 주세요" btn={true} btnvalue="중복확인" variant="outline-secondary"/>
            <Input label='휴대폰' placeholder="번호를 입력해 주세요" btn={true} btnvalue="다른번호 인증" variant="outline-info"/>

            <Container>
                <ModifyRadio type='성별' radioval={gender} />
            </Container>

            <Input label='생년월일' value='' placeholder="" btn={false}/>

            <Container>
                <ModifyRadio type='선택약관동의' radioval={terms1} setLgShow={setLgShow} termsview='약관보기'/>
            </Container>
            <hr style={{backgroundColor:'#17a1b8', height:'3px'}}/>
            <Container>
                <ModifyRadio type='선택약관동의' radioval={terms2}/>
            </Container>

            <ModifyRadio message={message} notype={true} />

            <div className='d-flex' style={{justifyContent: 'center', marginTop: '-40px'}}>
               <Button style={{fontWeight:'bold', height:'60px', marginTop:'5px', fontSize: '20px', color: 'white', marginLeft:'20px',}} className='col-2 shadow' variant='info'>회원가입 완료</Button>
            </div>

            <InfoModifyModal lgShow={lgShow} setLgShow={setLgShow} />

        </Container>
    )
}

export default Join;