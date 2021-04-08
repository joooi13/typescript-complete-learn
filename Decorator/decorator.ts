//将来的にjsに組み込まれる機能
//experimentalDecoratorsをtrueにしておく。

//デコレータを返す関数
function Logging(message: string){
    return function Logging(constructor: Function){
    //console.log('Logging....');
    console.log(message);
    console.log(constructor);
    }
}

function Component(template:string,selector:string){
    return function(constructor: {new(...args: any[]): {name:string}}){
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if(mountedElement){
            mountedElement.innerHTML = template;
            mountedElement.querySelector('h1')!.textContent = instance.name;
        }
    }

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
@Logging('LoggingUser')  //引数をとることもできる  //デコレータは下から上に実行される
@Component('<h1>{{name}}</h1>','#app')
class User {
    name = 'Quill';
    constructor(){
        console.log('creates!');
    }
}




const user1 = new User();
const user2 = new User();