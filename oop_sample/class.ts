//classは型にもなる
class Person{
    
    // private name: string;
    // private age: number;
    // constructor(initName: string,initAge: number){
    //     this.name = initName;
    //     this.age = initAge;
    // }

    
    //初期化
    readonly id: number = 23;

    //初期化の処理を省略
    //readonlyは読むだけ。書き換え不可。nameは変わらないのでreadonlyにしておく
    constructor(public readonly name: string,　private  age: number){
        //ただ、constructorではreadonlyでも書き換えできる
        this.id = 31;
    }

    incrementAge(){
        this.age += 1;
    }

    greeting(this: Person){
    //greeting(this: {name: string}){
        console.log(`hello my name is ${this.name}. Iam ${this.age} years old.`);
    }
}

//classであると同時にPerson型とすることができる
let person2: Person;

//初期化したpersonを受け取る
const quill = new Person('Quill',23);
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