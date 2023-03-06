import {Form,InputGroup,Nav,Navbar,Container,Button} from 'react-bootstrap';
const Header = ()=>{
    return(
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">WAKAUT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">My Page</Nav.Link>
                            <Nav.Link href="#home">Community</Nav.Link>
                            <Nav.Link href="#home">Login/signIn</Nav.Link>
                        </Nav>
                        <Form className="d-flex col-5">
                        <Form.Control placeholder="운동하는곳을 검색해보세요!" aria-label="findlocation" aria-describedby="basic-addon1"/>
                            <Button className='ms-2 col-5' variant="outline-success">Search Place</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;