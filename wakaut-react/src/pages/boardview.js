import { Container,Form } from "react-bootstrap";
import List from "../components/list";

const Boardview=()=>{
    return (
        <>
            <div className="brdview">
                <header className="bg-secondary pt-5 pb-4 brdview">
                </header>
                <Container>
                    <List title="게시판 제목" kd="review"  note='이것은 테스트입니다..' time="2023-03-08"/>
                </Container>
            </div>
            
            <Container>
                <p className="viewnote">
                orem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum quo porro sunt ratione pariatur sapiente aliquam atque vitae ab quia quaerat, alias, quam, nisi temporibus dolore? Unde, eligendi ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum quo porro sunt ratione pariatur sapiente aliquam atque vitae ab quia quaerat, alias, quam, nisi temporibus dolore? Unde, eligendi ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum quo porro sunt ratione pariatur sapiente aliquam atque vitae ab quia quaerat, alias, quam, nisi temporibus dolore? Unde, eligendi ab.


                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum quo porro sunt ratione pariatur sapiente aliquam atque vitae ab quia quaerat, alias, quam, nisi temporibus dolore? Unde, eligendi ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum quo porro sunt ratione pariatur sapiente aliquam atque vitae ab quia quaerat, alias, quam, nisi temporibus dolore? Unde, eligendi ab.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum quo porro sunt ratione pariatur sapiente aliquam atque vitae ab quia quaerat, alias, quam, nisi temporibus dolore? Unde, eligendi ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum quo porro sunt ratione pariatur sapiente aliquam atque vitae ab quia quaerat, alias, quam, nisi temporibus dolore? Unde, eligendi ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum quo porro sunt ratione pariatur sapiente aliquam atque vitae ab quia quaerat, alias, quam, nisi temporibus dolore? Unde, eligendi ab.
                </p>
            </Container>
            <div className="replay pt-5 pb-5">
                <Container>
                    <div className="txtLft d-flex">
                        <h5>abc123</h5>
                        <p className="ms-5 col-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia obcaecati, ipsa rerum, quidem, perferendis est quaerat sunt fugiat beatae ratione? Sapiente magni a tenetur tempora numquam praesentium accusamus facilis.</p>
                    </div>
                    <Form>
                        <div className="reTxt d-flex align-items-end mt-4"> 
                            <Form.Control   
                            as="textarea"
                            placeholder="여기에 댓글을 달아주세요!"
                            style={{ height: '80px' ,width:'80%' }}
                            />
                        <button className="btn btn-success ms-4" type="submit">댓글 등록</button>
                        </div>
                    </Form>
                </Container>
            </div>
        </>

    )
}
export default Boardview;