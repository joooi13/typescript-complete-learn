"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//外部のモジュールを読むとき①
const express_1 = __importDefault(require("express"));
const app = express_1.default();
//bodyでデータを受け取るために必要
app.use(express_1.default.json());
app.use('/', (req, res, next) => {
    console.log('Hi');
    next();
});
app.get('/', (req, res, next) => {
    res.send('<h1>Hello</h1>');
});
app.post('/', (req, res, next) => {
    console.log(req.body);
    res.send(`<h1>I got ${req.body.message}</h1>`);
});
app.use((err, req, res, next) => {
    console.log('Hi');
    next();
});
app.listen(3000);
//http://localhost:3000/でアクセスできる
