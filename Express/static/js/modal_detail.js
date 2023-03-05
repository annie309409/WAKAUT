import kakaoShare from "../js/apis/kakaoShare.js";

let btn  = document.querySelector('#kakaotalk-sharing-btn');
btn.addEventListener('click',()=>{
        kakaoShare({
            'addr':document.querySelector('#addr').textContent, 
            'title':document.querySelector('#title').textContent, 
            'des':document.querySelector('#hashes').textContent, 
            'img':document.querySelector('.card-img-top').src, 
            'likes':document.querySelectorAll('#avglikes .bi.bi-star-fill').length
        }
    );
});