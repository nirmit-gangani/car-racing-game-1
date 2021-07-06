class Game{
    constructor(){
    
    }
    getState(){
        database.ref('gameState').on("value",function(data){
            gameState = data.value();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
    }
}