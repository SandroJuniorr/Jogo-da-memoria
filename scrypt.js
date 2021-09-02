const front = "card_front";
const back = "card_back";
const Card = "card";



starGame()


function starGame(){
  
    initializeCards(game.creatCardsfromtechs())

        

}
 function initializeCards(cards){
    let cardBoard = document.getElementById("cardboard")
    cardBoard.innerHTML = ""

    game.cards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.dataset.icon = card.icon
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





function flipperface(){
    if(game.setCArd(this.id)){
    this.classList.add('flip');
    if(game.secondCard){ 
    if(game.checkMatch()){
        game.clearCARD();
       if(game.checkGameOver()){
        
            gameOver = document.getElementById('gameOver');
            
            gameOver.style.display = "flex";
        
       }
    }else{
        setTimeout(()=> {
        let firstCardView = document.getElementById(game.firsCard.id)
        let secondCardView = document.getElementById(game.secondCard.id)
        firstCardView.classList.remove('flip');
        secondCardView.classList.remove('flip')
        game.unflipCards()
        },1000)
    }
    
}}

}

function restart(){
    starGame()
    gameOver = document.getElementById('gameOver');
            
            gameOver.style.display = "none";

}