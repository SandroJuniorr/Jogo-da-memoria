const front = "card_front";
const back = "card_back";
let techs = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'

]
let cards = null;
starGame()

function starGame(){
    cards = creatCardsfromtechs(techs);
    suffleCards(cards)
    console.log(cards)



}
function suffleCards(cards){
    currentIndex = cards.length;
    randomIndex = 0;

    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random()* currentIndex)
        currentIndex--;
        [cards[randomIndex],cards[currentIndex]]= [cards[currentIndex],cards[randomIndex]]
    }

}


function creatCardsfromtechs(techs){
    let card = [];
    for(let tech of techs){
        card.push(creatPairfromTech(tech))
        
    }
    return card.flatMap(pair => pair)

}
function creatPairfromTech(tech){
    return [{
        id: creatIDWithTech(tech),
        icon: tech,
        flipped:false

    } ,
    {
        id: creatIDWithTech(tech),
        icon: tech,
        flipped:false

    }]
    

}
function creatIDWithTech(tech){
    return tech + parseInt(Math.random() * 1000)
}
