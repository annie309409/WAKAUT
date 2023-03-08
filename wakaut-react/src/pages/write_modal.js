import Modal from '../components/modal';
import {Form,FloatingLabel,Button} from 'react-bootstrap'; 
import Selection from '../components/selection';

const WriteModal=(props)=>{
    return(
        <Modal lgShow={props.lgShow} setLgShow={props.setLgShow}>
            <Form>
                <FloatingLabel controlId="title" label="제목">
                    <Form.Control className='mt-2' type="text" placeholder="제목을 입력해주세요" value={(props.title)?props.title:''} />
                </FloatingLabel>
                <FloatingLabel controlId="writer" label="작성자">
                    <Form.Control  className='mt-2 mb-2' type="text" value="구디거북이" readOnly/>
                </FloatingLabel>
                <Selection title="말머리를 선택하세요" cat={['community','review']} />
                <FloatingLabel controlId="textarea" label="상대를 배려해주세요!">
                    <Form.Control className='mt-2'
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '250px' }}
                    value={(props.note)?props.note:''}/>
                </FloatingLabel>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Control  className='mt-2' type="file" multiple />
                </Form.Group>
                <div className='btns d-flex justify-content-end'>
                    <Button type="reset" variant="secondary">다시쓰기</Button>
                    <Button type="submit" variant="success" className='ms-2'>{(props.title)?'수정하기':'글 올리기'}</Button>
                </div>  
            </Form>
        </Modal>
    )
}

export default WriteModal;
