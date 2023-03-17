import {Form,Navbar,Container,Button,Nav} from 'react-bootstrap';
import Link from "next/link";
import { useEffect } from 'react';

const Header = (props)=>{
    return(
        <header>
            <Navbar bg="light" expand="lg">
                <Container>

                    <div class="logo"><Link href="/" className='navbar-brand'>WAKAUT</Link></div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {
                            props.menu.map((e,i)=>{
                                return <div className='ms-2 menus' key={i}><Link href={props.route[i]}>{e}</Link></div>
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