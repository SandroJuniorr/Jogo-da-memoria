let game = {
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