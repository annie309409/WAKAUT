import Title from "../components/title";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {Button, Container, Table} from "react-bootstrap";
import {AiOutlineCheckCircle} from "react-icons/ai"
import '../styles/boot-added.css';
import Col from "react-bootstrap/Col";

const Joinfin = () => {

    return (

            <Container className="finish">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formTitle">
                        <Title title="κ°μμλ£" />
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formFinish">
                        <AiOutlineCheckCircle size="200" color="54595E"/>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formFinTxt1">
                        <h2 className="h2">π νμκ°μμ΄ μλ£λμμ΅λλ€ π</h2>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formFinTxt2">
                        <h5 className="h5">λͺ¨λ  νμκ°μ μ μ°¨κ° μλ£λμμ΅λλ€.</h5>
                        <h5 className="h5">λ‘κ·ΈμΈ ν λͺ¨λ  μλΉμ€λ₯Ό μ΄μ©ν  μ μμ΅λλ€.</h5>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formTable">
                        <Col sm="6">
                    <Table striped className="joinTable" >
                        <thead>
                        <tr className="joinTitle">
                            <th>μ΄ λ¦</th>
                            <th>μμ΄λ</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="joinContent">
                            <td>κ΅¬λκ±°λΆμ΄</td>
                            <td>gudi123</td>
                        </tr>
                        </tbody>
                    </Table>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formFinishBtn">
                        <Col sm="2">
                        <Button className="btnA" variant="secondary" type="submit" >
                            λ‘κ·ΈμΈνκΈ°
                        </Button>
                        </Col>
                        <Col sm="2">
                        <Button className="btnB" variant="secondary" type="submit" >
                            λ©μΈμΌλ‘
                        </Button>
                        </Col>
                    </Form.Group>

                </Form>
            </Container>

    )
}

export default Joinfin;