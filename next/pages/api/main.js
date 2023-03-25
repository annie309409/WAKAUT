import axios from "axios";
import { XMLParser } from 'fast-xml-parser';

export default async(req,res)=>{
    // console.log("검색한 단어 : ", req.query);
    const URL =" https://openapi.gg.go.kr/PubPhstFtM";
    const params = {
        KEY: "59c361f5fb304a649662ff8ec90e184f",
        Type: "xml",
        pIndex: 1,  // pSize를 1000으로 설정하고 pIndex를 2로 설정하면 1001~2000까지의 데이터를 가져옴
        pSize: 1000, // 데이터 요청은 한번에 최대 1000건
    };
    const headers = {
        "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.78",
    };

    const xml = await axios.get(URL, {
        params: params,
        headers: headers,
    });

    // XML 을 JSON 으로 변환
    const parser = new XMLParser();
    let json = parser.parse(xml.data);
    let items = json["PubPhstFtM"]["row"];

    if(req.query.srch){
        items = items.filter(f=>
            f.FACLT_NM.indexOf(req.query.srch.trim())!==-1
        )
    }

    if(req.query.lists){
        items = items.map(m=> m.FACLT_NM)
    }
    
    res.status(200).json(items);
}



