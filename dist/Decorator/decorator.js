"use strict";
//将来的にjsに組み込まれる機能
//experimentalDecoratorsをtrueにしておく。
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//デコレータを返す関数
function Logging(message) {
    return function Logging(constructor) {
        //console.log('Logging....');
        console.log(message);
        console.log(constructor);
    };
}
function Component(template, selector) {
    return function (constructor) {
        var mountedElement = document.querySelector(selector);
        var instance = new constructor();
        if (mountedElement) {
            mountedElement.innerHTML = template;
            mountedElement.querySelector('h1').textContent = instance.name;
        }
    };
}
//class全体にデコレータを適用するには引数にclassを設定しておく。
//functionは内蔵されているコンストラクタ関数
// function Logging(constructor: Function){
//     console.log('Logging....');
//     console.log(constructor);
// }
//部分的にデコることができる
//デコレータはインスタンス生成時ではなく、classの定義時に実行される
//@Logging
var User = /** @class */ (function () {
    function User() {
        this.name = 'Quill';
        console.log('creates!');
    }
    User = __decorate([
        Component('<h1>{{name}}</h1>', '#app'),
        Logging('LoggingUser') //引数をとることもできる
    ], User);
    return User;
}());
var user1 = new User();
var user2 = new User();
