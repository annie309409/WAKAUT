import {Button, Container, Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {useState} from "react";
import Link from "next/link";

const ModifyRadio = (props) => {
    const [selectedGender, setSelectedGender] = useState(props.checked === '남자' ? 'm' : 'w');
    const [selectedAgree1, setSelectedAgree1] = useState(props.agree1 === 1 ? true : false);
    const [selectedAgree2, setSelectedAgree2] = useState(props.agree2 === 1 ? true : false);

    const handleGenderChange = (e) => {
        const val = e.target.value;

        if (val === '여자') {
            setSelectedGender('여자');
            props.onChange("여자");
        } else if (val === '남자') {
            setSelectedGender('남자');
            props.onChange("남자");
        } else if (val === '개인정보 수집 이용 동의(선택)') {
            setSelectedAgree1((prevState) => !prevState);
            props.onChange(selectedAgree1 ? 0 : 1);
        } else if (val === '광고성 정보, 혜택 등 수신 동의(선택)') {
            setSelectedAgree2((prevState) => !prevState);
            props.onChange(selectedAgree2 ? 0 : 1);
        }
    };

    const handleAgreeChange = (event) => {
        const val = event.target.value;
        if (val === '개인정보 수집 이용 동의(선택)') {
            setSelectedAgree1(prevState => !prevState); // 체크된 상태면 체크 해제, 체크되지 않은 상태면 체크
        } else if (val === '광고성 정보, 혜택 등 수신 동의(선택)') {
            setSelectedAgree2(prevState => !prevState); // 체크된 상태면 체크 해제, 체크되지 않은 상태면 체크
        }
    };

    // 회원정보 수정 버튼을 누르면 부모컴포넌트의 handleSubmit 함수 호출
    const handleModify = () => {
        props.handleModify(
            props.userid,
            props.passwd,
            props.name,
            props.email,
            props.phone,
            selectedGender,
            props.birth,
            selectedAgree1,
            selectedAgree2
        );
    };

    const handleLeave = () => {

    };
    return(
        <Container>
            {(!props.notype)
                ?
                <Form className="radio-frm1 d-flex">
                    <Form.Label className="radio-type"
                                size="lg" column lg={2}>{props.type}</Form.Label>
                    <Col lg={7}>
                        {props.radioval.map((val) => (
                            <Form.Check className="radio-btn"
                                        type='radio'
                                        inline
                                        key={val}
                                        label={val}
                                        value={val}
                                        checked={
                                            (selectedGender === 'm' && val === '남자') ||
                                            (selectedGender === 'w' && val === '여자') ||
                                            (selectedAgree1 === true && val === '개인정보 수집 이용 동의(선택)') ||
                                            (selectedAgree2 === true && val === '광고성 정보, 혜택 등 수신 동의(선택)')
                                        }
                                        onChange={handleGenderChange}
                                        onClick={handleAgreeChange}
                            />
                        ))}

                        {(props.termsview)
                            ?
                            <span className="terms" onClick={()=>props.setLgShow(true)}>
                           {props.termsview}
                            </span>
                            :
                            false
                        }
                    </Col>
                </Form>

                :

                <div className='mod-btn-container d-flex'>
                    {props.btn.map((btn) => (
                        <Button
                            key={btn.value}
                            className={btn.className}
                            variant={btn.variant}
                            onClick={(e) => {
                                e.preventDefault();
                                if (btn.value === "회원정보 수정") {
                                    handleModify();
                                } else {
                                    handleLeave();
                                }
                            }}
                        >
                            <Link href={btn.link}>{btn.value}</Link>
                        </Button>
                    ))}
                </div>
            }
        </Container>
    )
}
export default ModifyRadio;