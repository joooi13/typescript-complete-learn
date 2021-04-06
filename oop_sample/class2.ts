
//abstractはインスタンスを生成できない
//継承のためにのみ使われるクラスです
abstract class PersonData{

    static species = 'Homo sapiens';
    static isAdult(age: number){
        if(age > 17){
            return true;
        }else{
            return false;
        }
    }
    
    constructor(public readonly name: string, protected age: number){
    }

    incrementAge(){
        this.age += 1;
        //static呼び出し可能
        PersonData.species;
    }

    greeting(this: PersonData){
        console.log(`hello my name is ${this.name}. Iam ${this.age} years old.`);
        this.explainJob();
    }

    
    abstract explainJob(): void;
}

//継承
class Teater extends PersonData{

    private static instance: Teater;

    explainJob(){
        console.log(`I am a teacher . I teach ${this.subject}`);
    }

    get subject(){
        if(!this._subject){
            throw new Error('No subject');

        }
        return this._subject;
    }

    set subject(value){
        if(!value){
            throw new Error('No subject');
        }
        this._subject = value;
    }
    
    //constructorにprivateをつけるとnewできなくなる
    //シングルトンパターンに使える。インスタンス1回だけ。
    private constructor(name: string, age: number, private _subject: string){
        super(name,age);
    }  

    // greeting(){
    //     console.log(`hello my name is ${this.name}. Iam ${this.age} years old. I teach ${this.subject}`);
    // }

    static getInstance(){
        if (Teater.instance){
            return Teater.instance;
        } else {
            Teater.instance =  new Teater('Jack',38,'English');
            return Teater.instance;
        }
    }
    
}

const teacher = Teater.getInstance();
const teacher2 = Teater.getInstance();

console.log(teacher,teacher2);  //同じものが出力

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