import { Food } from "./food.js";
//一覧だけを持っている
export class Foods {
    constructor() {
        this.elements = document.querySelectorAll('.food');
        this._activeElements = [];
        this._activeElementsScore = [];
        this.elements.forEach(element => {
            new Food(element);
        });
    }
    //いまactiveなものを保持しており、返す
    get activeElements() {
        this._activeElements = [];
        this.elements.forEach(element => {
            //food--activeというクラスを持っていたらtrue
            if (element.classList.contains('food--active')) {
                //配列に詰める
                this._activeElements.push(element);
            }
        });
        return this._activeElements;
    }
    //activeな状態のものの数字のみをもる配列
    get activeElementsScore() {
        this._activeElementsScore = [];
        this.activeElements.forEach(element => {
            const foodScore = element.querySelector('.food__score');
            if (foodScore) {
                this._activeElementsScore.push(Number(foodScore.textContent));
            }
        });
        return this._activeElementsScore;
    }
    //インスタンスの有無判定。一回しか実行されないようにする
    static getInstance() {
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }
}
