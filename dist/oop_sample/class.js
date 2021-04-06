"use strict";
//classは型にもなる
var Person = /** @class */ (function () {
    //初期化の処理を省略
    //readonlyは読むだけ。書き換え不可。nameは変わらないのでreadonlyにしておく
    function Person(name, age) {
        this.name = name;
        this.age = age;
        // private name: string;
        // private age: number;
        // constructor(initName: string,initAge: number){
        //     this.name = initName;
        //     this.age = initAge;
        // }
        //初期化
        this.id = 23;
        //ただ、constructorではreadonlyでも書き換えできる
        this.id = 31;
    }
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    Person.prototype.greeting = function () {
        //greeting(this: {name: string}){
        console.log("hello my name is " + this.name + ". Iam " + this.age + " years old.");
    };
    return Person;
}());
//classであると同時にPerson型とすることができる
var person2;
//初期化したpersonを受け取る
var quill = new Person('Quill', 23);
quill.incrementAge();
//quill.age = 50;   //privateなのでこれはできない
//console.log(quill.age);  //これもNG
quill.greeting();
console.log(quill);
// const another = {
//     name: 'anotherQuil',
//     greeting(){},
//     anotherGreeting: quill.greeting
// }
// another.anotherGreeting();
