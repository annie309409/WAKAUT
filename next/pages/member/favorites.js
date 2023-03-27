import { Container} from 'react-bootstrap';
import Title from '../../components/title';
import FavoritesList from "../../components/favorites_list";
import getLayout from "../../components/layouts/getLayout";
import {Datas, Post} from "../../components/feutils";
import {getSession} from "next-auth/client";


// 즐겨찾기 목록 가져오기
export async function getServerSideProps(ctx){
    // 세션 객체 가져오기
    const session = await getSession(ctx);
    // 로그인한 사용자의 아이디
    let userid = session.user.userid;
    let Flist = await Datas('/member/favorites', `userid=${userid}`);
    return{props:{Flist}};
}

const Favorites = ({Flist}) => {
    // '경기도' 다음에 공백이 하나 이상 있는 부분을 찾아서 그 단어들을 추출
    const regex = /경기도\s+([^\s]+)/;
    let region = null;

    class Fvrlist {
        constructor(fid, region,gym,contact,btn) {
            this.fid = fid
            this.region = region
            this.gym = gym
            this.contact = contact
            this.btn = btn
        }
    }

    const fList = Flist.map((item) => {
        const match = item.region.match(regex);
        if(match)  region = match[1];
        else region = '';
        return {
            fid: item.fid,
            region: region,
            facility: item.facility,
            contact: item.contact,
        }
    });

    let lists = [{region:'지역', gym:'시설명', contact:'연락처', btn:null}];
    fList.forEach((list) => {
        lists.push(new Fvrlist(list.fid, list.region, list.facility, list.contact, "삭제"));
    });

    // 즐겨찾기 삭제 버튼 클릭
    async function handleDelete (userid) {
        await Post({userid: userid}, '/member/deletefavorites');
        location.href="/member/favorites";
    }
    return(
        <>
            <Container className="favorites">
                <Title title='즐겨찾기 목록'/>
                <hr className="hr"/>
                <FavoritesList lists={lists} onClick={handleDelete}/>
            </Container>
        </>
    )
}

export default Favorites;

getLayout(Favorites,{title:'WAKAUT! 즐겨찾기목록',description:'워크아웃 즐겨찾기목록 페이지'})