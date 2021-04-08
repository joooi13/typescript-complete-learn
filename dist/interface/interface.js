"use strict";
//interfaceは関数の型も定義できる
var ad;
ad = function (n1, n2) {
    return n1 + n2;
};
var nameable = {
    name: 'Quill',
    nicName: 'Quillaa', //nicNameを消しても通る。?なので
};
//ここにHumanをもつようにしたい
//implementsは複数呼べる
var Developer = /** @class */ (function () {
    //staticに影響は与えられない
    //static id: number = 0;
    //privateじゃだめ。引数を付け加えてもOK
    //nameはreadonlyにしなくてもok。implementsしているreadonlyは関係ない
    //必須パラメータは最初にかく
    function Developer(age, experience, initName) {
        this.age = age;
        this.experience = experience;
        if (initName) {
            this.name = initName;
        }
    }
    Developer.prototype.greeting = function (message) {
        if (message === void 0) { message = 'Hi'; }
        console.log(message);
    };
    return Developer;
}());
//構造的部分型
//Humanが型として指定できる。greetingがないのに・・tsではそれがOK
var user = new Developer(30, 3);
user.greeting; //できる
var tmpDev = {
    name: 'Quil',
    age: 38,
    experience: 3,
    greeting: function (message) {
        console.log(message);
    }
};
//これOK
var usertmp = tmpDev;
//user.experience; //これは呼び出せない。けど、tmpDevを入れることはできる。けど呼べない。
//user.name = 'shelly'; //readonlyなのでできない
// const human= {
//     name: 'Jack',
//     age: 20,
//     greeting(message: string){
//         console.log(message);
//     }
// }
//let tmpFunc(message:string):void;
