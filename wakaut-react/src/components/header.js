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
                    </Navbar.Collapse>
                        <Form className="d-flex">
                            <InputGroup.Text className="form-control me-2" type="search" placeholder="운동장소를 검색하세요"
                                             aria-label="Search"></InputGroup.Text>
                            <Button>Search Place</Button>
                        </Form>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;