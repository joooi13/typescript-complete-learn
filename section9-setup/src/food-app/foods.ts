//import  * as Interfaces  from "./interfaces.js";　　　//全部とることも可
import { Foosable } from "./interfaces.js";
import { Food } from "./food.js";

//一覧だけを持っている
export class Foods implements Foosable{
    
    private static instance: Foods;

    elements = document.querySelectorAll<HTMLDivElement>('.food');
    private _activeElements: HTMLDivElement[] = [];
    private _activeElementsScore: number[] = [];
    
    //いまactiveなものを保持しており、返す
    get activeElements(){
        this._activeElements = [];
        this.elements.forEach(element => {
            //food--activeというクラスを持っていたらtrue
            if(element.classList.contains('food--active')){
                //配列に詰める
                this._activeElements.push(element);
            }
        })

        return this._activeElements;
    }

    //activeな状態のものの数字のみをもる配列
    get activeElementsScore(){
        this._activeElementsScore = [];
        this.activeElements.forEach(element => {
            const foodScore = element.querySelector('.food__score');
            if(foodScore){
                this._activeElementsScore.push(Number(foodScore.textContent));
            }
        })
        return this._activeElementsScore;

    }
    private constructor(){
        this.elements.forEach(element => {
            new Food(element);
        })

    }

    //インスタンスの有無判定。一回しか実行されないようにする
    static getInstance(){
        if(!Foods.instance){
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }

    
}