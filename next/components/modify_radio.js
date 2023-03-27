import {Button, Container, Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {useEffect, useState} from "react";

const ModifyRadio = (props) => {

    const [selectedGender, setSelectedGender] = useState(props.checked === '남자' ? '남자' : '여자');
    const [selectedAgree1, setSelectedAgree1] = useState(props.agree1 === 1 ? true : false);
    const [selectedAgree2, setSelectedAgree2] = useState(props.agree2 === 1 ? true : false);


    const handleRadioChange = (e) => {
        const val = e.target.value;
        const isChecked = e.target.checked;

        if (val === '여자' || val === '남자') {
            setSelectedGender(val);
            props.onChange(val);
        } else if (val === '개인정보 수집 이용 동의(선택)') {
            setSelectedAgree1(isChecked );
            props.onChange(isChecked ? 1 : 0);
        } else if (val === '광고성 정보, 혜택 등 수신 동의(선택)') {
            setSelectedAgree2(isChecked);
            props.onChange(isChecked ? 1 : 0);
        }
    };

    useEffect(() => {
        setSelectedAgree1(props.agree1 === 1 ? true : false);
        setSelectedAgree2(props.agree2 === 1 ? true : false);
    }, [props.agree1, props.agree2]);

    // 회원정보 수정 버튼을 누르면 부모컴포넌트의 handleSubmit 함수 호출
    const handleModify = () => {
        props.handleModify(
            props.userid,
            props.passwd1,
            props.passwd2,
            props.passwd3,
            props.name,
            props.email,
            props.phone,
            props.gen,
            props.birth,
            props.agr1,
            props.agr2
        );
    };

    const handleLeave = () => {
        props.handleLeave();
    };
    return(
        <Container>
            {(!props.notype)
                ?
                <Form className="radio-frm1 d-flex">
                    <Form.Label className="radio-type" size="lg" column lg={2}>{props.type}</Form.Label>

                    <Col lg={7}>
                        {(props.type==="성별")
                            ?
                            props.radioval.map((val) => (
                                <Form.Check className="radio-btn"
                                            type='radio'
                                            inline
                                            key={val}
                                            label={val}
                                            value={val}
                                            name={props.type}
                                            defaultChecked={
                                                (selectedGender === '남자' && val === '남자') ||
                                                (selectedGender === '여자' && val === '여자')
                                            }
                                            onChange={handleRadioChange}
                                />
                            ))
                            :
                            null}

                        {props.type !== "성별"
                            ?
                            (
                                <Form.Check
                                    className="radio-btn"
                                    type="checkbox"
                                    inline
                                    label={props.radioval}
                                    value={props.radioval}
                                    defaultChecked={
                                        (selectedAgree1 === true && props.radioval === '개인정보 수집 이용 동의(선택)') ||
                                        (selectedAgree2 === true && props.radioval === "광고성 정보, 혜택 등 수신 동의(선택)")
                                    }
                                    onChange={handleRadioChange}
                                />
                            )
                            :
                            null}


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
                           {btn.value}
                        </Button>
                    ))}
                </div>
            }
        </Container>
    )
}
export default ModifyRadio;