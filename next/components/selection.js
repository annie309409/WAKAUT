import {Form} from 'react-bootstrap';
const Selection=(props)=>{
    return(
        <Form.Select aria-label="Default select example" style={{maxWidth:'200px'}}>
        <option>{props.title}</option>
        {props.cat.map(m=>{
            return <option value={m} key={m}>{m}</option>
        })}
    </Form.Select>
    )
}
export default Selection