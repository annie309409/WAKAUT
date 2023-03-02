# 내근처 운동 가이드 앱 컴포넌트 가이드 (UI)
## 모든 가이드는 [Bootstrap](https://getbootstrap.com/) 5.3ver을 기반으로 한다.
## 사용 에디터는 snnipet의 편리한 사용을 위하여 VSCODE를 활용한다. 
## 설치 가이드 
1. 모든 작업은 현재 폴더 기준에서 UI제작_이름 형식으로 작성하여 작업한다. (branch는 반드시 본인 branch사용 staging사용 금지)
> 예시<br>
> ![이미지](../img_readme/result0302009.png) <br>

2. snippet 설정방법. 
    1. inc/html.json파일을 열어둔다
    2. ctrl+a를 활용해 전체를 복사한다.
    > 예시<br>
    > ![이미지](../img_readme/result0302010.png) <br>
    3. VSCode에서 ctrl+shift+p를 누른뒤 sni를 검색하고 snippet 클릭한다.
    > 예시<br>
    > ![이미지](../img_readme/result0302011.png) <br>
    4. html snippet 선택한다.
    > 예시<br>
    > ![이미지](../img_readme/result0302012.png) <br>
    5. 전체를 아까 2.에서 복사한 내용으로 업데이트 한다.
    6. 테스트해본다 (html파일 만들고 boot 작성 후 탭)
    > 예시<br>
    > ![이미지](../img_readme/result0302013.png) <br>
    > ![이미지](../img_readme/result0302014.png) <br>
    

3. 기초 가이드 
    1. VSCODE에서 반드시 emmet확장자가 필요하다.
    2. 하나의 큰 덩어리를 잡을땐 pan을 사용한다.
    3. 그리드 안 하나의 큰 덩어리가 반으로 나눠졌더라도 pan을 사용한 뒤 그 안에 banpan을 추가한다.
    4. 필요한 CSS는 bootstrap가이드를 준수하며, 만약 태그가 부득이하게 추가되어야한다면 /css/style_added.css에 본인 이름과 추가한 내용을 쓴다.
    > 예시<br>
    > ![이미지](../img_readme/result0302015.png) <br>


4. 스니펫 단축키 설명

| 단축키명 | 설명 |
| --- | --- |
| boot | 부트스트랩 기초세팅 head안에 들어옴 |
| pan | 그리드기초 |
| banpan | 그리드 내 반으로 나뉨 |
| mainpan | 그리드 메인 |
| mal | 말풍선 |
| lists | 게시판리스트(쉐도우있는 블럭) |
| sel | 셀렉트 |
| paging | 페이징 |
| lab | 레이블(리뷰나 커뮤니티등 들어갈 라벨들) |
| alert | 최상단 알림창 |
| search | 검색영역 |
| btn | 버튼 |
| modal | 모달기본 |
| modalBtn | 모달 실행버튼 |
| upimg | 위 이미지 아래 텍스트 구조 |
| txts | 옆으로 나열되는 텍스트 |
| brdTxt | 게시판 내 텍스트 |
| inptxt | 인풋태그 |

