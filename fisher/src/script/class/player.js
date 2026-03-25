export default class Player {
    constructor(level = 1, exp = 0, cash = 0, fishcount = 0) {
        this.level = level;
        this.exp = exp;
        this.cash = cash;
        this.fishcount = fishcount;
    }

    getLevel(){
        return this.level;
    }

    setLevel(level){
        this.level = level;
    }

    getExp(){
        return this.exp;
    }

    setExp(exp){
        this.exp = exp;
    }

    getCash(){
        return this.cash;
    }

    setCash(cash){
        this.cash = Math.max(0,cash);
    }

    getFishCount(){
        return this.fishcount;
    }

    setFishCount(fishcount){
        this.fishcount = Math.max(0,fishcount);
    }

    cast(){
        let count = parseInt(Math.random()*20)
        this.setFishCount(this.getFishCount() + count);
        alert(`You got ${count} fish. Now you have ${this.getFishCount()} fish in total.`);
    }
}