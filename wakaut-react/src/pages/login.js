import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Title from "../components/title";
import {Link} from "react-router-dom";
import naver  from '../assets/naverbtn.png';
import kakao  from '../assets/kakaobtn.png';
import {Image} from "react-bootstrap";
function Login(){
    return (

            <Container className="panel">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formTitle">
                        <Col sm="6">
                            <Title className="title" title="로그인" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formID">
                        <Col sm="6">
                            <Form.Control type="text" placeholder="아이디를 입력하세요" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPassword">
                        <Col sm="6">
                            <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="sns">
                        <Col sm>
                            <Image src={kakao}/>
                            <Image className="ms-2" src={naver}/>
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCheckbox">
                        <Form.Check type="checkbox" label="아이디 자동 저장" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formForget">
                        <Link to="#">비밀번호를 잊으셨나요?</Link>
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3" controlId="formSubmit">
                        <Col sm>
                        <Button variant="secondary" type="submit" >
                            로그인하기
                        </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>

    );
}

export default Login