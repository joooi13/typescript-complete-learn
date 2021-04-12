interface Scoreable{
    readonly totalScore: number;
    render(): void;
}

interface Foodable{
    element: HTMLDivElement;
    clickEventHandler(): void;
}

interface Foosable{
    elements: NodeListOf<HTMLDivElement>;
    readonly activeElements: HTMLDivElement[];
    readonly activeElementsScore: number[];
}

//スコアの合計
class Score implements Scoreable{ 

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

//特定の処理をしたい
class Food implements Foodable{
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

//一覧だけを持っている
class Foods implements Foosable{
    
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

const foods = Foods.getInstance();