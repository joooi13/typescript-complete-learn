"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//abstractはインスタンスを生成できない
//継承のためにのみ使われるクラスです
var PersonData = /** @class */ (function () {
    function PersonData(name, age) {
        this.name = name;
        this.age = age;
    }
    PersonData.isAdult = function (age) {
        if (age > 17) {
            return true;
        }
        else {
            return false;
        }
    };
    PersonData.prototype.incrementAge = function () {
        this.age += 1;
        //static呼び出し可能
        PersonData.species;
    };
    PersonData.prototype.greeting = function () {
        console.log("hello my name is " + this.name + ". Iam " + this.age + " years old.");
        this.explainJob();
    };
    PersonData.species = 'Homo sapiens';
    return PersonData;
}());
//継承
var Teater = /** @class */ (function (_super) {
    __extends(Teater, _super);
    //constructorにprivateをつけるとnewできなくなる
    //シングルトンパターンに使える。インスタンス1回だけ。
    function Teater(name, age, _subject) {
        var _this = _super.call(this, name, age) || this;
        _this._subject = _subject;
        return _this;
    }
    Teater.prototype.explainJob = function () {
        console.log("I am a teacher . I teach " + this.subject);
    };
    Object.defineProperty(Teater.prototype, "subject", {
        get: function () {
            if (!this._subject) {
                throw new Error('No subject');
            }
            return this._subject;
        },
        set: function (value) {
            if (!value) {
                throw new Error('No subject');
            }
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    // greeting(){
    //     console.log(`hello my name is ${this.name}. Iam ${this.age} years old. I teach ${this.subject}`);
    // }
    Teater.getInstance = function () {
        if (Teater.instance) {
            return Teater.instance;
        }
        else {
            Teater.instance = new Teater('Jack', 38, 'English');
            return Teater.instance;
        }
    };
    return Teater;
}(PersonData));
var teacher = Teater.getInstance();
var teacher2 = Teater.getInstance();
console.log(teacher, teacher2); //同じものが出力
//static呼び出し可能
// console.log(PersonData.species);
// console.log(PersonData.isAdult(38));
// console.log(Teater.species);
// console.log(Teater.isAdult(20));
// const teacher = new Teater('jack',30,'Math');
// //teacher.age  //ここはNG
// teacher.subject;
// teacher.subject = 'Music';
// teacher.greeting();
//static
//Math.random();
