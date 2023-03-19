import {Form} from 'react-bootstrap';
const Selection=(props)=>{
    return(
    <>
        <Form.Select aria-label="select category" style={{maxWidth:'200px'}} onChange={(e)=>{props.change(e.target.value)}}>
            <option>{props.title}</option>
            {props.cat.map(m=>{
                return <option value={m} key={m}>{m}</option>
            })}
        </Form.Select>
    </>
    
    )
}
export default Selection