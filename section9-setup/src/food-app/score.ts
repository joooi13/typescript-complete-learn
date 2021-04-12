import { Scoreable } from "./interfaces.js";
import { Foods } from "./foods.js";

//スコアの合計
export class Score implements Scoreable{ 

    private static instance: Score;

    get totalScore(){
        const foods = Foods.getInstance();

        //reduceで合計していく。初期値は0
        return foods.activeElementsScore.reduce((total,score) => total + score, 0)
    }

    //scoreを表示する
    render(){
        document.querySelector('.score__number')!.textContent = String(this.totalScore);
    }

    private constructor(){}

    static getInstance(){
        if(!Score.instance){
            Score.instance = new Score();
        }
        return Score.instance;
    }
}