import { Foodable } from "./interfaces";
import { Score } from "./score";

//特定の処理をしたい
export class Food implements Foodable{
    constructor(public element: HTMLDivElement){
        //イベントリスナーではthisは使えない
        element.addEventListener('click',this.clickEventHandler.bind(this));
    }

    
    clickEventHandler(){
        //console.log(this);

        //クリックしたものをtoggleでtrueにしておく
        this.element.classList.toggle('food--active');

        //クリックしたときにスコア表示
        const score = Score.getInstance();
        score.render();
    }
}
