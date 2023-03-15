import {Container, Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {useState} from "react";

const ModifyRadio = (props) => {
    const [checkedValue, setCheckedValue] = useState(null);
    const [selectedValue, setSelectedValue] = useState(checkedValue); // 라디오 버튼 현재 값을 저장

    const handleRadioChange = (event) => {
        setCheckedValue(event.target.value);
        setSelectedValue(event.target.value);
    }

    const isChecked = (e) => {
        const value = e.target.value;
        // 선택된 값이 이전에 선택된 값과 같으면 해제하고, 그렇지 않으면 선택함
        setSelectedValue(value === checkedValue ? null : value);
    }

    return(
    <Container>
    {(!props.notype) ?
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
                checked={selectedValue === val}
                onChange={handleRadioChange}
                onClick={isChecked}
            />))}
            {(props.termsview)
                ?
                <span className="terms" onClick={()=>props.setLgShow(true)}>
                    {props.termsview}</span>
                :
                false}
        </Col>
    </Form>

    :

    <Form className="d-flex radio-frm2">
        {props.message.map((val2) => (
        <Form.Check className="radio-btn"
            type='radio'
            inline
            key={val2}
            label={val2}
            value={val2}
            checked={selectedValue === val2}
            onChange={handleRadioChange}
            onClick={isChecked}
        />))}
    </Form>
    }
    </Container>
    )
}
export default ModifyRadio