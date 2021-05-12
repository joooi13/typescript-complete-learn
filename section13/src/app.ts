//外部のモジュールを読むとき①
import express, {Request,Response,NextFunction } from 'express';
//外部のモジュールを読むとき②
//import express = require('express');

interface MessageReq extends Request{
 body:{
     message:string
 }
}

const app = express();

//bodyでデータを受け取るために必要
app.use(express.json());

app.use('/',(req,res,next) => {
    console.log('Hi');
    
    next();
})

app.get('/',(req,res,next) => {
    res.send('<h1>Hello</h1>');
})

app.post('/',(req:MessageReq,res,next) => {
    console.log(req.body);
    res.send(`<h1>I got ${req.body.message}</h1>`);
})


app.use((err:Error,req:Request,res:Response,next:NextFunction) => {
    console.log('Hi');
    next();
})

app.listen(3000);

//http://localhost:3000/でアクセスできる