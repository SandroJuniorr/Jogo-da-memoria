const front = "card_front";
const back = "card_back";
const Card = "card";



starGame()

function starGame(){
  
    initializeCards(game.creatCardsfromtechs())

        

}
 function initializeCards(cards){
    let cardBoard = document.getElementById("cardboard")

    game.cards.forEach(card => {
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





function flipperface(){
    this.classList.add("flip")
}
