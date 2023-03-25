// npm install next-auth@3.29.10 --save-dev
import NextAuth from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import axios from "axios";
import KakaoProvider from 'next-auth/providers/kakao'

export default NextAuth({
    providers: [
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID||'',
            clientSecret:'ERMSDHsOwUhONXGC0PQlgp4jNQnUNdp0'||'',
        },
        function(){
            console.log('성공!');
        }),
        Credentials({
            id: "userid-passwd-credentials",
            name: "userid-passwd-credentials",
            credentials: {
                userid: { label: "아이디", type: "text" },
                passwd: { label: "비밀번호", type: "password" },
            }, // 로그인 폼 정의
            async authorize(credentials, req) {
                const userid = credentials.userid;
                const passwd = credentials.passwd;
                // 인증 확인
                let params = [userid,passwd];
                let url =`http://localhost:3000/api/users/login?userid=${params[0]}&passwd=${params[1]}`;
                const res= await axios.get(url);
                const result  = await res.data;
                // 인증 성공시 반환
                if((await result).uid > 0){
                    return result;
                }

            }
        })
    ],
    pages: { // 인증에 사용자 정의 로그인 페이지 사용
        signIn: '/member/login'
    },
    callbacks: {
        async jwt(token, user, account, profile, isNewUser) {
            if (user?.userid) token.userid = user.userid;
            return token;  
        },
        async session(session, userOrToken) {
            (userOrToken.userid)? session.user.userid = userOrToken.userid:session.user.userid = parseInt(userOrToken.sub)
            console.log('세션값', session);
            return session;
        }
    }
});