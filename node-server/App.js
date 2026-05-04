//1. Express 라이브러리 임포트
import express from 'express';

//2. Express 객체 생성
const port = 9000;
const app = express();

//3. 미들웨어 - Expreaa 서버 정책

//4. 라우팅 - 프론트에서 요청하는 처리를 담당
//http://localhost:8080/ 요청이 들어오면, 응답
app.get('/', (req, res) => {
    console.log('node-server의 root 요청!!');
    res.send('Hello Express!!');   
});     
app.get('/test', (req, res) => {
    console.log('/test 요청이 들어왔습니다.');
    res.send('/test 요청 ==> 응답 결과!!');   
});     

//5. Express 서버 실행
app.listen(port, () => {
    console.log(`Express 서버가 ${port}에서 실행 중입니다.`);
});

