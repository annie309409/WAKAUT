import {Container,Form, Button} from 'react-bootstrap';
import Selection from './selection';

const Search=(props)=>{
    return(
    <Container>
        <Form className='fluid d-flex justify-content-center'>
            <div className="left d-flex col-9">
                <Selection  title='카테고리 선택' cat={props.cat}/>
                <Form.Control className='ms-2'
                placeholder="검색어를 입력하세요!"/>
            </div>
            <div className="right ms-2">
                {props.btn.map((m,i)=>{
                    return <Button className='ms-2' variant={props.btncol[i]} key={i} onClick={props.click[i]}>{m}</Button>
                })}
            </div>
        </Form>
    </Container>
    )
}

export default Search;