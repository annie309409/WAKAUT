import { Container} from 'react-bootstrap';
import Title from '../../components/title';
import {useState} from "react";
import FavoritesList from "../../components/favorites_list";
import PlaceModal from "../place_modal";
import getLayout from "../../components/layouts/getLayout";
import Paging from "../../components/pagenation";
import img from '../../assets/workaut.png';



const Favorites = () => {
    let addr = '경기도 김포시 대평원거리 11-43';
    let des = '#용인 #호랑이 #태권';
    const title = "용인 태권도장 성남지점"
    const [lgShow, setLgShow] = useState(false)

    class Favlist {
        constructor(region,gym,contact,btn) {
            this.region = region
            this.gym = gym
            this.contact = contact
            this.btn = btn
        }
        handleModal(){
            return setLgShow(true);
        }
    }

    const lists = [
        new Favlist("지역", "시설명","연락처",null),
        new Favlist("의정부시", "팀매드 의정부점","098-7654-3210",'삭제'),
        new Favlist("안양시", "슈퍼클라이밍","123-4567-8901","삭제"),
        new Favlist("하남시", "하남 스카이다이빙","123-4567-8901","삭제")
    ];

    return(
<>
        <Container className="favorites">
            <Title title='즐겨찾기 목록'/>
            <hr className="hr"/>
            <FavoritesList lists={lists}/>
            <Paging cnt={2}/>
            <PlaceModal lgShow={lgShow} setLgShow={setLgShow} score={3}
                        addr={addr} title={title} des={des} img={img}/>
        </Container>
</>
    )
}

export default Favorites;

getLayout(Favorites,{title:'WAKAUT! 즐겨찾기목록',description:'워크아웃 즐겨찾기목록 페이지'})