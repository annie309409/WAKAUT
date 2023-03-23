import { Container} from 'react-bootstrap';
import Title from '../../components/title';
import {useState} from "react";
import FavoritesList from "../../components/favorites_list";
import PlaceModal from "../place_modal";
import getLayout from "../../components/layouts/getLayout";
import Paging from "../../components/pagenation";
import img from '../../assets/workaut.png';
import {Datas} from "../feutils";


// 즐겨찾기 목록 가져오기
export async function getServerSideProps(ctx){
    let member = await Datas('/member/favorites', 'userid=1');
    console.log(member);
    return{props:{member}};
}

const Favorites = ({member}) => {
    // '경기도' 다음에 공백이 하나 이상 있는 부분을 찾아서 그 단어들을 추출
    const regex = /경기도\s+([^\s]+)/;
    let region = null;


    let addr = '경기도 김포시 대평원거리 11-43';
    let des = '#용인 #호랑이 #태권';
    const title = "용인 태권도장 성남지점"
    const [lgShow, setLgShow] = useState(false)

    class Fvrlist {
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

    const fList = member.map((item) => {
        const match = item.region.match(regex);
        if(match)  region = match[1];
        else region = '';

        return {
            region: region,
            facility: item.facility,
            contact: item.contact,
        }
    });

    let lists = [];
    fList.forEach((list) => {
        lists.push(new Fvrlist(list.region, list.facility, list.contact, "삭제"));
    });

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