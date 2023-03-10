import { Container,Form,Button } from "react-bootstrap";
import List from "../components/list";
import {Link} from "react-router-dom";
import {useState} from 'react';
import WriteModal from "./write_modal";

const Boardview=()=>{
    const [lgShow, setLgShow] = useState(false);
    let title = '게시판 제목';
    let note = '   orem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum quo porro sunt ratione pariatur sapiente aliquam atque vitae ab quia quaerat, alias, quam, nisi temporibus dolore? Unde, eligendi ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum quo porro sunt ratione pariatur sapiente aliquam atque vitae ab quia quaerat, alias, quam, nisi temporibus dolore? Unde, eligendi ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum quo porro sunt ratione pariatur sapiente aliquam atque vitae ab quia quaerat, alias, quam, nisi temporibus dolore? Unde, eligendi ab.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum quo porro sunt ratione pariatur sapiente aliquam atque vitae ab quia quaerat, alias, quam, nisi temporibus dolore? Unde, eligendi ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum quo porro sunt ratione pariatur sapiente aliquam atque vitae ab quia quaerat, alias, quam, nisi temporibus dolore? Unde, eligendi ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum quo porro sunt ratione pariatur sapiente aliquam atque vitae ab quia quaerat, alias, quam, nisi temporibus dolore? Unde, eligendi ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum quo porro sunt ratione pariatur sapiente aliquam atque vitae ab quia quaerat, alias, quam, nisi temporibus dolore? Unde, eligendi ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum quo porro sunt ratione pariatur sapiente aliquam atque vitae ab quia quaerat, alias, quam, nisi temporibus dolore? Unde, eligendi ab.';
 
    return (
        <>
            <div className="brdview">
                <header className="bg-secondary pt-5 pb-4 brdview">
                </header>
                <Container>
                    <List title={title} kd="review" time="2023-03-08" view='23'/>
                </Container>
            </div>
            
            <Container>
                <p className="viewnote">{note}</p>
                <div className="replay p-5">
                <div className="txtLft d-flex">
                    <h5>abc123</h5>
                    <p className="ms-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia obcaecati, ipsa rerum, quidem, perferendis est quaerat sunt fugiat beatae ratione? Sapiente magni a tenetur tempora numquam praesentium accusamus facilis.</p>
                </div>
                <Form>
                    <div className="reTxt d-flex align-items-end mt-4"> 
                        <Form.Control   
                        as="textarea"
                        placeholder="여기에 댓글을 달아주세요!"
                        style={{ height: '80px' ,width:'90%' }}
                        />
                    <button className="btn btn-success ms-3" type="submit">댓글 등록</button>
                    </div>
                </Form>
                </div>
                <div className="btns mt-4 mb-4 d-flex  justify-content-end">
                    
                    <Button className="ms-2" variant="primary"><Link to="/boardlist">목록으로</Link></Button>
                    <Button className="ms-2" variant="success" onClick={()=>{setLgShow(true)}}>수정하기</Button>
                    <Button className="ms-2" variant="secondary">삭제하기</Button>
                    <Button className="ms-2" variant="danger">강제삭제</Button>
                </div>
               <WriteModal title={title} note={note} setLgShow={setLgShow} lgShow={lgShow}/>
            </Container>
        </>
    )
}
export default Boardview;