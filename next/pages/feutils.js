import axios from 'axios';
const Datas=async()=>{
    let url = `http://localhost:3000/api/board/boardlist`;
    const res = await axios.get(url);
    const boards = await res.data;
    return boards;
}

export default Datas;
