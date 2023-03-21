// npm install next-auth@3.29.10 --save-dev
import NextAuth from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import axios from "axios";

export default NextAuth({
    providers: [
        Credentials({
            id: "userid-passwd-credentials",
            name: "userid-passwd-credentials",
            credentials: {
                userid: { label: "아이디", type: "text" },
                passwd: { label: "비밀번호", type: "password" },
                // uid : {label: "고유번호",type:"number"}
            }, // 로그인 폼 정의
            async authorize(credentials, req) {
                const userid = credentials.userid;
                const passwd = credentials.passwd;
                const uid = credentials.uid;
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
            console.log('jwt',token);
            return token;
        },

        async session(session, userOrToken) {
            session.user.userid = userOrToken.userid;
            return session;
        }
    }
});