let game = {
    lockMode: false,
    firsCard: null,
    secondCard:null,

    setCArd: function (id){
    
       let card =  this.cards.filter(card=>card.id===id)[0]
       if(card.flipped || this.lockMode){
       
        return false
           
       }
    if(!this.firsCard){
        this.firsCard = card;
        this.firsCard.flipped = true
        return true

       }else{
           this.secondCard = card
           this.secondCard.flipped = true
           this.lockMode = true
           return true
       }




    },
    checkMatch: function(){
    if(!this.firsCard || !this.secondCard){
        return false
    }
     return this.firsCard.icon === this.secondCard.icon
    },
    clearCARD: function (){
        this.firsCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },
    unflipCards: function(){
        this.firsCard.flipped = false;
        this.secondCard.flipped = false
        this.clearCARD()
    },
    checkGameOver: function (){
    return this.cards.filter(card=> !card.flipped).length == 0 
    

    },
    



   techs : [
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
    
    ],
    cards : null,


    creatCardsfromtechs : function (){
        this.cards = [];
        for(let tech of this.techs){
            this.cards.push(this.creatPairfromTech(tech))
            
        }
        this.cards = this.cards.flatMap(pair => pair);
        this.suffleCards()
        return this.cards
    
    },

   creatPairfromTech:  function (tech){
        return [{
            id: this.creatIDWithTech(tech),
            icon: tech,
            flipped:false
    
        } ,
        {
            id: this.creatIDWithTech(tech),
            icon: tech,
            flipped:false
    
        }]
        
    
    },

   creatIDWithTech : function (tech){
        return tech + parseInt(Math.random() * 1000)
    },
    
   suffleCards: function (cards){
        currentIndex = this.cards.length;
        randomIndex = 0;
    
        while(currentIndex !== 0){
            randomIndex = Math.floor(Math.random()* currentIndex)
            currentIndex--;
            [this.cards[randomIndex],this.cards[currentIndex]]= [this.cards[currentIndex],this.cards[randomIndex]]
        }
    
    }







}