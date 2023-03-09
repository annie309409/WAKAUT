import '../styles/boot-added.css';
import {Container, Button} from 'react-bootstrap';
import Input from '../components/modify_input';
import Title from '../components/title'
import React, {useState} from "react";
import InfoModifyModal from "../components/modify_modal";
import ModifyRadio from "../components/modify_radio";

const InfoModify=()=>{
    const [lgShow, setLgShow] = useState(false);
    const gender = ['남자', '여자', '선택안함'];
    const terms1 = ['개인정보 수집 이용 동의(선택)']
    const terms2 = ['광고성 정보, 혜택 등 수신 동의(선택)']
    const message = ['SMS', '이메일']

    return(
<Container>
    <Title title='개인 정보 수정' />
    <Input label='아이디' value='gildong' placeholder="" btn={false} btnvalue="" variant=""/>
    <Input label='현재 비밀번호' placeholder="비밀번호를 입력해 주세요" btn={false}/>
    <Input label='새 비밀번호' placeholder="새 비밀번호를 입력해 주세요" btn={false}/>
    <Input label='새 비밀번호 확인' placeholder="새 비밀번호를 다시 입력해 주세요" btn={false}/>
    <Input label='이름' value='홍길동' btn={false}/>
    <Input label='이메일' value='gildong@email.com' btn={true} btnvalue="중복확인" variant="outline-secondary"/>
    <Input label='휴대폰' value='012-1234-5678' btn={true} btnvalue="다른번호 인증" variant="outline-info"/>

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
    <Button style={{fontWeight:'bold', height:'60px', marginTop:'5px', fontSize: '20px'}} className='col-2 shadow' variant="outline-info">탈퇴하기</Button>
    <Button style={{fontWeight:'bold', height:'60px', marginTop:'5px', fontSize: '20px', color: 'white', marginLeft:'20px',}} className='col-2 shadow' variant='info'>회원정보 수정</Button>
</div>

<InfoModifyModal lgShow={lgShow} setLgShow={setLgShow} />

</Container>
    )
}

export default InfoModify;