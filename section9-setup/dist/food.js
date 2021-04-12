import { Score } from "./score.js";
//特定の処理をしたい
export class Food {
    constructor(element) {
        this.element = element;
        //イベントリスナーではthisは使えない
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        //console.log(this);
        //クリックしたものをtoggleでtrueにしておく
        this.element.classList.toggle('food--active');
        //クリックしたときにスコア表示
        const score = Score.getInstance();
        score.render();
    }
}
