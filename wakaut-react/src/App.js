import BoardList from './pages/board_list';
import {Routes,Route} from "react-router";
import NotFind404 from './pages/NotFind404';
import Main from './pages/main';
import Boardview from './pages/boardview';

const App=()=>{
    return (
        <div>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/boardlist' element={<BoardList />} />
                <Route path='/boardview' element={<Boardview />} />
                <Route path='/*' element={<NotFind404 />} />
            </Routes>
        </div>
    )
}

export default App;