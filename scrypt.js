const front = "card_front";
const back = "card_back";
const Card = "card";

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
    

    initializeCards(cards)

        

}
 function initializeCards(cards){
    let cardBoard = document.getElementById("cardboard")

    cards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.dataset.Icon = card.icon
        cardElement.classList.add(Card);
        

        cardFace(front, card , cardElement)
        cardFace(back, card , cardElement)
        cardElement.addEventListener('click' , flipperface)
        cardBoard.appendChild(cardElement)
    });
   

}
function cardFace(face, card, Element){
    let faceCard = document.createElement('div');
    if(face === front){
        faceCard.classList.add(front)
        let facetech = document.createElement('img')
        facetech.src = "./assets/images/" + card.icon + ".png"
        faceCard.appendChild(facetech)

    }else{
        faceCard.classList.add(back)
        faceCard.innerHTML = "&lt/&gt"
    }
    Element.appendChild(faceCard)
    
      


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

function flipperface(){
    this.classList.add("flip")
}
