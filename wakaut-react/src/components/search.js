import { useState } from 'react';
import {Container,Form, Button} from 'react-bootstrap';

const Search=(props)=>{
    return(
    <Container>
        <Form className='fluid d-flex'>
            <div className="left d-flex col-9">
                <Form.Select aria-label="Default select example" style={{maxWidth:'200px'}}>
                    <option>카테고리 선택</option>
                    {props.cat.map(m=>{
                        return <option value={m} key={m}>{m}</option>
                    })}
                </Form.Select>
                <Form.Control className='ms-2'
                placeholder="검색어를 입력하세요!"/>
            </div>
            <div className="right ms-2">
                {props.btn.map((m,i)=>{
                    return <Button className='ms-2' variant={props.btncol[i]} key={i}>{m}</Button>    
                })}
            </div>
        </Form>
    </Container>
    )
}

export default Search;