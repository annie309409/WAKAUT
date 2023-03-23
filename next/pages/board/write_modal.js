import Modal from '../../components/modal';
import {Form,FloatingLabel,Button} from 'react-bootstrap'; 
import Selection from '../../components/selection';
import {Post,handleInput} from '../../components/feutils';
import { useState } from 'react';


const WriteModal=(props)=>{
    const [title,setTitle] = useState(props.title);
    const [note,setNote] = useState(props.note);
    const [category,setCategory] =  useState(props.category);
    const [facility,setFacility] =  useState(props.facility);
    
    async function write(e,{bid,title,userid,content,category,facility}){
        e.preventDefault();
        if(category== undefined || facility == undefined){
            alert('카테고리 및 운동장소를 선택해주세요!');
        }else if( title == undefined || content == undefined){
            alert('제목 및 컨텐츠를 입력해주세요!');

        }else{
            let dt = Post({bid,title,userid,content,category,facility},'/board/write').then(res=>res);
            props.setLgShow(false);
            console.log(await dt);
            if (bid !== undefined && (await dt).cnt === 1) {
                location.href=`http://localhost:3000/board/boardview?bid=${bid}`;
            }else{
                location.href=`http://localhost:3000/board/boardlist`
            }
        }
    }

    return(
        <Modal lgShow={props.lgShow} setLgShow={props.setLgShow} size='lg'>
             <Form>
                <FloatingLabel controlId="title" label="제목">
                    <Form.Control className='mt-2' type="text" placeholder="제목을 입력해주세요" value={title} onChange={(e)=>handleInput(setTitle,e)}/>
                </FloatingLabel>
                <FloatingLabel controlId="writer" label="작성자">
                    <Form.Control  className='mt-2 mb-2' type="text" value={props.sename} readOnly/>
                </FloatingLabel>
                <div className='d-flex'>
                    <Selection title="말머리를 선택하세요" cat={['community','review']} change={setCategory}/>
                    <Selection title="위치를 선택하세요" cat={['부천종합운동장','경기생활체육시설']} change={setFacility}/>
                </div>
                <FloatingLabel controlId="textarea" label="상대를 배려해주세요!">
                    <Form.Control className='mt-2'
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '250px' }}
                    value={note}  onChange={(e)=>handleInput(setNote,e)}/>
                </FloatingLabel>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Control  className='mt-2' type="file" accept=".gif, .jpg, .png" multiple />
                </Form.Group>
                <div className='btns d-flex justify-content-end'>
                    <Button type="reset" variant="secondary">다시쓰기</Button>
                    <Button type="submit" variant="success" className='ms-2' onClick={(e)=>write(e,{title:title,userid:props.seid,content:note,category:category,facility:facility,bid:props.bid})}>{(props.title)?'수정하기':'글 올리기'}</Button>
                </div>   
            </Form>
        </Modal>
    )
}

export default WriteModal;
