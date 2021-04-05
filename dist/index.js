"use strict";
/**
 * 型注釈
 */
let hasvalue = true;
let float = 10.1;
let singie = 'helllo';
/**
 * 型推論
 */
let count = 10;
//初期化だけするときなどに型注釈する
let hello;
hello = 2;
/**
 * オブジェクトに型注釈をつける
 */
const person = {
    name: 'jack',
    age: 21
};
console.log(person.age);
//ネストもできる
const personName = {
    name: {
        first: 'jack',
        last: 'Smith'
    },
    age: 21
};
/**
 * 配列
 */
const fruits = ['apple', 'Banana'];
/**
 * Tuple型(配列に制限がかかったもの)
 */
const book = ['buisiness', 1500, false];
//pushはできちゃう
book.push(21);
//呼び出しはできない
//console.log(book[3]);
/**
 * Enum
 */
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
})(CoffeeSize || (CoffeeSize = {}));
var CoffeeSizeInitialize;
(function (CoffeeSizeInitialize) {
    CoffeeSizeInitialize[CoffeeSizeInitialize["SHORT"] = 0] = "SHORT";
    CoffeeSizeInitialize[CoffeeSizeInitialize["TALL"] = 1] = "TALL";
})(CoffeeSizeInitialize || (CoffeeSizeInitialize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.SHORT,
    sizeNum: CoffeeSizeInitialize.SHORT
};
//だめ
//coffee.size = 'L';
coffee.size = CoffeeSize.TALL;
console.log(CoffeeSizeInitialize.SHORT); //0になる
/**
 * any型
 */
let anithing = true;
anithing = 'hello';
anithing = 12;
anithing = ['111', '222'];
//anyが入れられちゃう
let banana = 'banana';
banana = anithing;
/**
 * Union型
 */
let unionType = 10;
//unionType.toUpperCase();  //ここではできない
unionType = 'hello';
unionType.toUpperCase(); //string入れてからだとできる
//配列もOK
let unionTypes = [10, 'aaa'];
/**
 * Literal型
 * constをつかうことによってLiteral型になる
 */
//appleしかむり
const apple = 'apple';
//const apple: 'apple' = 'hello';  //これはNG
const orange = 'orange';
//enumっぽい使い方ができる
let clothSize = 'large';
const cloth = {
    size: clothSize //largeになる
};
cloth.size = 'large';
//cloth.size = 'small';  //これはNG
//別の書き方(型注釈しちゃう)
const cloth2 = {
    size: 'small'
};
const cloth3 = {
    size: 'small'
};
console.log(cloth3.size);
/**
 *
 * 関数に型をつける
 * @param {*} num1
 * @param {*} num2
 * @return {*}
 */
function add(num1, num2) {
    return num1 + num2;
}
add(3, 2);
/**
 * 戻り値にvoid
 * 何も返さない
 * TSでは何も返さないときはvoidかany型にする必要がある
 */
function sayHello() {
    console.log('hello');
}
console.log(sayHello()); //undefinedを返す
//undefined型というものがある。定義okだがめったに使わない
let tmp;
//null型もある
let tmpNull;
//じゃあいつ使うの？
//これなら使えるけど、voidを使おう
function sayHello2() {
    console.log('hello');
    return;
}
/**
 * 関数型を使って特定の関数のみ代入できるようにする
 */
const anotherAdd = add;
//アロー関数
const dobleNumber = num => num * 2;
/**
 * callback関数の型
 */
function doubkeAndhandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubkeAndhandle(21, doubleNum => {
    return doubleNum;
});
/**
 * unlnown型
 */
let unknownInput;
let anyInput;
let text;
//unknownの場合
unknownInput = 'aaa';
unknownInput = 21;
unknownInput = true;
//text = unknownInput;　//エラー
//anyの場合
anyInput = 'aaa';
anyInput = 13;
anyInput = true;
text = anyInput; //エラーにならない！
//その型がなにか見る(typeofする)と使える
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
/**
 * never型
 * 消してなにも返さない
 */
function error(message) {
    throw new Error(message);
}
console.log(error('this is error')); //何も返らない。エラーで終わる。こういうときにnever型をつけることができる
