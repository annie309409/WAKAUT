import {Form,Navbar,Container,Button,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = (props)=>{
    return(
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to="/" className='navbar-brand'>WAKAUT</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {
                            props.menu.map((e,i)=>{
                                return <Link to={props.route[i]} className='nav-link' key={i}>{e}</Link>
                            })
                        }
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