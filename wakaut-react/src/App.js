import BoardList from './pages/board_list';
import {Routes,Route} from "react-router";
import NotFind404 from './pages/NotFind404';
import Main from './pages/main';
import Boardview from './pages/boardview';
import InfoModify from "./pages/modify_myinfo";
import MyPage from "./pages/mypage";
import Favorites from "./pages/favorites";
import MyInfo from "./pages/myinfo";

const App=()=>{
    return (
        <div>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/boardlist' element={<BoardList />} />
                <Route path='/boardview' element={<Boardview />} />
                <Route path='/mypage' element={<MyPage />} />
                <Route path='/myinfo' element={<MyInfo />} />
                <Route path='/modify' element={<InfoModify />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/*' element={<NotFind404 />} />
            </Routes>
        </div>
    )
}

export default App;