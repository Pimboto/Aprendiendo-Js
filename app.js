
 function Jugador(nombre){
    this.nombre = nombre;
    this.hp = 100;
    this.sp = 100;

    this.curar = function(jugadorObjetivo){
        if (this.sp > 40 ){
            this.sp -= 40;
            jugadorObjetivo.hp += 20;
        }else{
            console.info(this.nombre + " No tiene suficiente sp"+ "("+this.sp+")");
        }
        this.estado(jugadorObjetivo);
    }
    this.estado = function(jugadorObjetivo){
        console.log(this);
        console.log(jugadorObjetivo);
    }
    this.tirarFlecha = function(jugadorObjetivo){

        if (jugadorObjetivo.hp > 30){
            jugadorObjetivo.hp -= 30;
        }else{
            jugadorObjetivo.hp=0;
            console.error( jugadorObjetivo.nombre + " HA MUERTO!!");
        }

        this.estado(jugadorObjetivo);
        
    }

 }
 var pimbo = new Jugador("Pimbo");
 var kura = new Jugador("Kura");

 console.log(pimbo);
 console.log(kura);
 console.log("- . - . - . - . -");

 pimbo.curar(kura)
 
