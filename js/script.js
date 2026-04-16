var canvas_tres = document.getElementById("lienzo-tres");
var canvas_cuatro = document.getElementById("lienzo-cuatro");
var canvas_cinco = document.getElementById("lienzo-cinco");
var canvas_seis = document.getElementById("lienzo-seis");

if(canvas_tres.getContext){
    console.log("Sí se soporta el contexto 3");

    var ctx_3 = canvas_tres.getContext("2d");
    
    ctx_3.fillStyle = "rgb(200,0,0)";
    ctx_3.fillRect(10,10,55,50);  //fillRect(posicion x,posicion y,ancho,alto)

    ctx_3.fillStyle = "rgba(0,0,200,0.5)";
    ctx_3.fillRect(30,30,55,50); //fillRect(posicion x,posicion y,ancho,alto)

    ctx_3.fillStyle = "rgba(0,200,0,0.5)";
    ctx_3.fillRect(50,50,55,50); //fillRect(posicion x,posicion y,ancho,alto)
}else{
    console.log("No se soporta el contexto 3");
}

if(canvas_cuatro.getContext){
    console.log("Sí se soporta el contexto 4");

    var ctx_4 = canvas_cuatro.getContext("2d");

    ctx_4.beginPath(); //NUEVO TRAZADO
    ctx_4.moveTo(5,5); //COLOCA EL PUNTERO EN LA POSICIÓN 5,5
    ctx_4.lineTo(125,125); //TRAZA NA LINEA IMAGINARIA HASTA LA POSICIÓN 125,125
    ctx_4.strokeStyle = "#FFFFFF"; //ASIGNA UN COLOR
    ctx_4.stroke(); //DIBUJA EL TRAZADO QUE INICIALMENTE ERA IMAGINARIO
}

if(canvas_cinco.getContext){
    console.log("Sí se soporta el contexto 5");

}

if(canvas_seis.getContext){
    console.log("Sí se soporta el contexto 6");

}