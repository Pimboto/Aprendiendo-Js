
    function Jugador(nombre){
        this.nombre = nombre;
        this.hp = 100;
        this.mana = 100;

            this.Mostrar = function(){
                console.log("Jugador: " + pimbo.nombre + " Vida: " + pimbo.hp + " Mana: " + pimbo.mana);
                console.log("Jugador: " + kura.nombre + " Vida: " + kura.hp + " Mana: " + kura.mana);
                console.log("- . - . - . - . -");
            }

            this.Curar = function(){
                if (this.hp <1){
                    console.warn(this.nombre + " No se pude curar porque esta muerto xd");
                }else{
                    
                    this.mana -= 50;
                    if (this.mana <0){
                        console.warn(this.nombre + " No tiene suficiente mana "
                        +"("+(this.mana = 0 )+")");
                    }else{
                        this.hp += 20;
                        this.Mostrar();
                    }
                    
                }
            }
            this.Pegar = function(jugadorObjetivo){
                
                
                if (this.hp < 1){
                    console.warn(this.nombre + " no pude golpear porque esta muerto");
                }else{
                    
                    if (jugadorObjetivo.hp < 30){
                        console.error(jugadorObjetivo.nombre+ " HA MUERTO");
                        jugadorObjetivo.hp = 0;
                    }else{
                        jugadorObjetivo.hp -= 30;
                        this.Mostrar();
                    }
                    
                }
                
            }


    }
    
    pimbo = new Jugador("Pimboto")
    kura = new Jugador("Kura1215")
    
    pimbo.Mostrar()


