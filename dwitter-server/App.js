/**
 * Express 서버 구축
 */

import express from 'express';
const port = 8080;
const server = express();

// 미들웨어

server.get('/dwitter', (req, res, next) => {
    res.send('welcome to dwitter!!');   
});

server.listen(port, () => {
    console.log(`Express 서버가 ${port}에서 실행 중입니다.`);
});