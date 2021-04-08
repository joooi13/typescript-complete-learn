//interfaceは関数の型も定義できる

//type addFunc = (num1: number,num2: number) => number;

//この書き方だと関数の型を定義できる
interface addFunc {
    //メソッド名をかかない
    (num1:number,num2:number):number;
}

let ad: addFunc;
ad = (n1:number,n2:number) => {
    return n1 + n2;
}

interface Nameable{
    name?:string;
    //?をつけるとあってもなくでもokという意味になる
    nicName?:string;
}

const nameable: Nameable ={
    name: 'Quill',
    nicName: 'Quillaa',  //nicNameを消しても通る。?なので
}

//objectの構造を表したもの。type aliasとあんまり変わらない
//メリット：objectしか表さない
//interfaceには複数extendsできる
interface Human extends Nameable {
    //readonlyをつけられる
    //readonly name:string;
    //name: string;  //Nameableでnameがあるけど、定義できる。上書きOK
    age: number;
    //greeting: (message: string) =>void;
    greeting(message: string):void;
}


//ここにHumanをもつようにしたい
//implementsは複数呼べる
class Developer implements Human{

    //初期化しなくてもいい
    name?: string;

    //staticに影響は与えられない
    //static id: number = 0;

    //privateじゃだめ。引数を付け加えてもOK
    //nameはreadonlyにしなくてもok。implementsしているreadonlyは関係ない
    //必須パラメータは最初にかく
    constructor(public age:number,public experience: number,initName?:string) {
        if(initName){
            this.name = initName
        }
    }
    greeting(message:string = 'Hi'){
        console.log(message);
    }
}


//構造的部分型
//Humanが型として指定できる。greetingがないのに・・tsではそれがOK
const user:Human = new Developer(30,3);
user.greeting; //できる

const tmpDev = {
    name:'Quil',
    age: 38,
    experience:3,
    greeting(message: string){
        console.log(message);
    }
}

//これOK
const usertmp: Human = tmpDev;
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