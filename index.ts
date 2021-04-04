/** 
 * 型注釈
 */
let hasvalue: boolean = true;
let float: number = 10.1;
let singie: string = 'helllo';

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
const person: {
    name: string;
    age: number;
} = {
    name: 'jack',
    age: 21
}


console.log(person.age);


//ネストもできる
const personName = {
    name: {
        first: 'jack',
        last: 'Smith'
    },
    age: 21
}

/** 
 * 配列
 */
const fruits: string[] = ['apple','Banana']


/** 
 * Tuple型(配列に制限がかかったもの)
 */
const book: [string,number,boolean] = ['buisiness',1500,false]
//pushはできちゃう
book.push(21);
//呼び出しはできない
//console.log(book[3]);


/** 
 * Enum
 */
enum CoffeeSize {
    SHORT =  'SHORT',
    TALL =  'TALL'
}

enum CoffeeSizeInitialize {
    SHORT,
    TALL
}

const coffee = {
    hot: true,
    size: CoffeeSize.SHORT,
    sizeNum: CoffeeSizeInitialize.SHORT
}
//だめ
//coffee.size = 'L';
coffee.size = CoffeeSize.TALL;
console.log(CoffeeSizeInitialize.SHORT); //0になる


/** 
 * any型
 */
let anithing: any = true;
anithing = 'hello';
anithing = 12;
anithing = ['111','222'];

//anyが入れられちゃう
let banana = 'banana';
banana = anithing;

/** 
 * Union型
 */
let unionType: number | string = 10; 
//unionType.toUpperCase();  //ここではできない
unionType = 'hello';
unionType.toUpperCase();   //string入れてからだとできる

//配列もOK
let unionTypes : (number | string)[] = [10,'aaa'];

/** 
 * Literal型
 * constをつかうことによってLiteral型になる
 */
//appleしかむり
const apple: 'apple' = 'apple';
//const apple: 'apple' = 'hello';  //これはNG

const orange = 'orange';

//enumっぽい使い方ができる
let clothSize: 'small' | 'medium' | 'large' = 'large';
const cloth = {
    size:clothSize //largeになる
}

cloth.size = 'large';
//cloth.size = 'small';  //これはNG


//別の書き方(型注釈しちゃう)
const cloth2: {
    size: 'small' | 'medium' | 'large'
} = {
    size: 'small' 
}


/** 
 * typeエイリアス
 * 型を変数の様にあつかう
 */
type ClothSize = 'small' | 'medium' | 'large'

const cloth3: {
    size: ClothSize
} = {
    size: 'small' 
}

console.log(cloth3.size);




/**
 *
 * 関数に型をつける
 * @param {*} num1
 * @param {*} num2
 * @return {*} 
 */
function add(num1: number,num2: number): number {
    return num1 + num2;
}

add(3,2);


/** 
 * 戻り値にvoid
 * 何も返さない
 * TSでは何も返さないときはvoidかany型にする必要がある
 */
function sayHello(): void{
    console.log('hello');
}

console.log(sayHello()); //undefinedを返す

//undefined型というものがある。定義okだがめったに使わない
let tmp: undefined;
//null型もある
let tmpNull: null;

//じゃあいつ使うの？
//これなら使えるけど、voidを使おう
function sayHello2(): undefined {
    console.log('hello');
    return;
}


/** 
 * 関数型を使って特定の関数のみ代入できるようにする
 */
const anotherAdd: (n1:number,n2:number) => number = add;

//アロー関数
const dobleNumber:(num: number) => number = num => num * 2;

/** 
 * callback関数の型
 */
function doubkeAndhandle(num: number,cb: (num: number) => number):void{
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}

doubkeAndhandle(21,doubleNum => {
    return doubleNum
});

/** 
 * unlnown型
 */

 let unknownInput: unknown;
 let anyInput: any;
 let text: string;


 //unknownの場合
unknownInput = 'aaa';
unknownInput = 21;
unknownInput = true;
//text = unknownInput;　//エラー

//anyの場合
anyInput = 'aaa';
anyInput = 21;
anyInput = true;
text = anyInput;  //エラーにならない！

//その型がなにか見る(typeofする)と使える
if(typeof unknownInput === 'string'){
    text = unknownInput;
}


/** 
 * never型
 * 消してなにも返さない
 */
function error(message: string): never {　
    throw new Error(message);
}
console.log(error('this is error'));  //何も返らない。エラーで終わる。こういうときにnever型をつけることができる


