# WAKAUT ver01
+ 내근처 운동앱 1버전

## development environment
+ express 4.18.2
+ react 16.14.0
+ exoress-session 1.17.3
+ oracledb 5.5.0

## APIs
+ [카카오 위치 공유하기](https://developers.kakao.com/docs/latest/ko/message/js-link)
+ [카카오 맵](https://apis.map.kakao.com/)
+ [경기도 생활체육 시설](https://data.gg.go.kr/portal/data/service/selectServicePage.do?page=1&sortColumn=&sortDirection=&infId=6LMU5TBQ6RJJRBLAZWBC21105087&infSeq=1&searchWord=%EC%B2%B4%EC%9C%A1%EC%8B%9C%EC%84%A4)

## Software Architecture
![이미지](../img_readme/프레젠테이션1.png)

## 개발가이드 
### 컴포넌트 제작방법 

#### 저장위치
+ src>components 폴더 안에 js파일로 생성한다.
>예시 <br>
>![이미지](../img_readme/result0306004.png) <br>

#### 선언방법 
+ 함수형으로 선언한다.
+ 선언된 부분의 내용은 wrap을 제외한 안의 부분을 묶어서 저장한다.
+ 예) <div class=cntWrap>안의 div class=content>라면, <div class="content>부터 시작하면 된다.
```javascript
import {Form,InputGroup,Nav,Navbar,Container,Button} from 'react-bootstrap';
const Content = ()=>{
    return(
        <div className="contnet">
            내용 추가 
        </div>
    )
}
export default Content;

```
#### 제작방법 
+ 제작은 [bootstrap react](https://react-bootstrap.github.io/getting-started/introduction)로 제작한다.
+ 모든 CDN은 index.html에 고정으로 지정되어있기때문에 필요한 모듈만 import해서 사용하면 된다.
+ 추가적인 모듈은 bootstrap 홈페이지에서 확인한다.
```javascript
    import {Form,InputGroup,Nav,Navbar,Container,Button} from 'react-bootstrap';
```

#### 확인방법 
+ 확인은 App.js에 모듈을 import해서 확인한다.
+ 예시
```javascript
import Board_list from './components/Board_list';

const App=()=>{
    return (
        <div>
            <Board_list />
        </div>
    )
}

export default App;
```


### 폴더설명
+ controllor : helpers, pagenation 등 view 혹은 서버에서 발생하는 처리함수 정의 
+ models : 데이터 호출에 발생하는 함수 정의 
+ route : 라우터 
+ static : 외부 사이트 api 혹은 클라이언트 사이드에서 발생하는 처리함수 정의 , api를 js로 불러온 경우, js안에 apis폴더안에 저장한다.
+ views : 페이지정의, partial 폴더안에는 모달 및 헤더와 푸터가 있다.

### 서버영역, 클라이언트 영역 구분 
+ 서버영역과 클라이언트 영역은 무언가 수정하였을때 서버를 다시 가동해서 확인할 수 있는 것들은 서버영역 
+ 서버를 가동하지 않고 이미 가동 된 서버에서 새로고침을 하여 확인할 수 있는것들은 클라이언트 영역이다.


### 함수사용 가이드 
#### kakao share api
+ 카카오 지도위치 api는 모듈화 되어 자동으로 html 특정아이디 내에 입력한 텍스트 값을 넣어주게 되어있다.
+ 이때, 텍스트는 단일위치던 부모요소를 많이 가진 위치던 상관은 없으나 , 하단의 아이디를 주의하여 사용해야한다.

| 아이디 | 설명 |
| --- | --- |
| kakaotalk-sharing-btn | 클릭하면 sharing 이벤트가 발생 할 버튼에 추가한다. |
| title | 지역명의 제목에 해당한다 |
| addr | 주소에 해당하며 반드시 옳은 주소를 입력해야 지도 위치를 공유할 수 있다. |
| hashes | 해시태그를 의미하며 없어도 무방하다. 또한, 해시태그가 아니여도 설명을 입력할 수 있다. |
| shareImg | 공유할 이미지를 의미하며, 반드시 src 속성안에 주소를 입력해야 한다. |
| avglikes | 현재받은 별점을 의미하며 반드시 부트스트랩의 bi-star-fill 혹은 bi-star로 별을 입력해야 한다. |

```html
<!--스크립트 불러오기-->
<script src="../js/apis/kakao.min.js"></script>
<script src="../js/modal_detail.js" type="module"></script>

<body>
    <button id="kakaotalk-sharing-btn">카카오 위치 공유하기</button>
    <h3 id="title">부천 종합 운동장</h3>
    <p id="addr">경기 부천시 소사로 482</p> 
    <p id="hashes">#러닝 #에어로빅 #아쿠아로빅</p>
    <img src="https://cdn.pixabay.com/photo/2014/10/22/17/25/woman-498257_960_720.jpg" id="shareImg" class="card-img-top" alt="...">
    <p id="avglikes"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i></p>
</body>
```
