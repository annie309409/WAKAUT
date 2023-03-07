import {Container,Row} from 'react-bootstrap';
const Footer = ()=>{
    return(
       <footer className="bg-light pt-4 pb-4">
            <Container>
                <Row>
                <h1>WAKAUT</h1>
                </Row>
                <Row className='mt-4'>
                    <p>홈페이지 운영 문의: Tel : 1811-1111 (평일 09:30~ 17:30) E-mail : honggil@naver.com</p>
                    <p>(주)구디거북이 : 04524 서울특별시 중구 세종대로 110 </p>
                    <p>Copyright 2014 GudiTurtle. All Rights Reserved.</p>
                </Row>  
            </Container>
       </footer>
    )
}
export default Footer;