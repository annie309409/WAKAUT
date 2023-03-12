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
    <Form className="d-flex" style={{height:'60px'}}>
        <Form.Label style={{fontWeight:'bold', fontSize: '14px'}} size="lg" column lg={2}>{props.type}</Form.Label>
        <Col lg={7}>
            {props.radioval.map((val) => (
            <Form.Check
                type='radio'
                inline
                key={val}
                label={val}
                value={val}
                checked={selectedValue === val}
                onChange={handleRadioChange}
                onClick={isChecked}
                style={{fontWeight:'bold', marginLeft: "25px", fontSize: '14px'}}
            />))}
            {(props.termsview) ?
                <span style={{display:'flex', marginLeft:'380px', marginTop:'-25px', color:'#179fb8', fontSize: '14px'}} onClick={()=>props.setLgShow(true)}>{props.termsview}</span>
                :
                false}
        </Col>
    </Form>

    :

    <Form className="d-flex" style={{height:'40px', justifyContent:'center'}}>
        {props.message.map((val2) => (
        <Form.Check
            type='radio'
            inline
            key={val2}
            label={val2}
            value={val2}
            checked={selectedValue === val2}
            onChange={handleRadioChange}
            onClick={isChecked}
            style={{fontWeight:'bold', marginLeft: "25px", fontSize: '14px'}}
        />))}
    </Form>
    }
    </Container>
    )
}
export default ModifyRadio