import {Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";

const ModifyRadio = (props) => {
    return(
<>
    {(!props.notype) ?
    <Form className="d-flex" style={{height:'100px'}}>
        <Form.Label style={{fontWeight:'bold', fontSize: '20px', marginTop: '12px'}} size="lg" column lg={2}>{props.type}</Form.Label>
        <Col lg={7} style={{marginTop:'20px'}}>
            {props.radioval.map((val) => (
            <Form.Check
                key={val}
                inline
                label={val}
                type='radio'
                style={{fontWeight:'bold', marginLeft: "25px", fontSize: '20px'}}
            />))}
            {(props.termsview) ?
                <span style={{marginLeft:'330px', color:'#179fb8'}} onClick={()=>props.setLgShow(true)}>{props.termsview}</span>
                : false}
        </Col>
    </Form>

    :

    <Form className="d-flex" style={{height:'100px', justifyContent:'center'}}>
        {props.message.map((val2) => (
        <Form.Check
            key={val2}
            inline
            label={val2}
            type='radio'
            style={{fontWeight:'bold', marginLeft: "25px", fontSize: '20px'}}
        />))}
    </Form>
    }
</>

    )
}
export default ModifyRadio