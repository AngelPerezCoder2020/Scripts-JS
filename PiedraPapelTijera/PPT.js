var J1;
var J2;
var r = 0;

tiros = ["Piedra","Papel","Tijera"];

try{
    while(r<5){
        J1 = Math.floor(Math.random()*2);
        J2 = Math.floor(Math.random()*2);
    
        switch(J1){
            case 0:
                if(J2 == 1){
                    console.log(" \nJugador 1 a tirado "+tiros[0]+" y Jugador 2 ah tirado "+tiros[1]+" \n \nEl Ganador es: Jugador 2");
                }else if(J2 == 2){
                    console.log(" \nJugador 1 a tirado "+tiros[0]+" y Jugador 2 ah tirado "+tiros[2]+" \n \nEl Ganador es: Jugador 1");
                }else{
                    console.log(" \nAmbos jugadores tirarón "+tiros[0]+" \n \nEs un Empate!!");
                }
                break;
            case 1:
                if(J2 == 0){
                    console.log(" \nJugador 1 a tirado "+tiros[1]+" y Jugador 2 ah tirado "+tiros[0]+" \n \nEl Ganador es: Jugador 1");
                }else if(J2 == 2){
                    console.log(" \nJugador 1 a tirado "+tiros[1]+" y Jugador 2 ah tirado "+tiros[2]+" \n \nEl Ganador es: Jugador 2");
                }else{
                    console.log(" \nAmbos jugadores tirarón "+tiros[1]+" \n \nEs un Empate!!");
                }
                break;
            case 2: 
                if(J2 == 1){
                    console.log(" \nJugador 1 a tirado "+tiros[2]+" y Jugador 2 ah tirado "+tiros[1]+" \n \nEl Ganador es: Jugador 1");
                }else if(J2 == 0){
                    console.log(" \nJugador 1 a tirado "+tiros[2]+" y Jugador 2 ah tirado "+tiros[0]+" \n \nEl Ganador es: Jugador 2");
                }else{
                    console.log(" \nAmbos jugadores tirarón "+tiros[2]+" \n \nEs un Empate!!");
                }
                break;
        }
        r++;        
    }
}catch(error){
    console.log(error);
};