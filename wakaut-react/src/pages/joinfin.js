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
                        <Title title="가입완료" />
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formFinish">
                        <AiOutlineCheckCircle size="200" color="54595E"/>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formFinTxt1">
                        <h2 className="h2">🎉 회원가입이 완료되었습니다 🎉</h2>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formFinTxt2">
                        <h5 className="h5">모든 회원가입 절차가 완료되었습니다.</h5>
                        <h5 className="h5">로그인 후 모든 서비스를 이용할 수 있습니다.</h5>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formTable">
                        <Col sm="6">
                    <Table striped className="joinTable" >
                        <thead>
                        <tr className="joinTitle">
                            <th>이 름</th>
                            <th>아이디</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="joinContent">
                            <td>구디거북이</td>
                            <td>gudi123</td>
                        </tr>
                        </tbody>
                    </Table>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formFinishBtn">
                        <Col sm="2">
                        <Button className="btnA" variant="secondary" type="submit" >
                            로그인하기
                        </Button>
                        </Col>
                        <Col sm="2">
                        <Button className="btnB" variant="secondary" type="submit" >
                            메인으로
                        </Button>
                        </Col>
                    </Form.Group>

                </Form>
            </Container>

    )
}

export default Joinfin;