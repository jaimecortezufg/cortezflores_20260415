var canvas_dos = document.getElementById("lienzo-dos");
var canvas_dos_hidden = document.getElementById("lienzo-dos-hidden");
var canvas_tres = document.getElementById("lienzo-tres");
var canvas_cuatro = document.getElementById("lienzo-cuatro");
var canvas_cinco = document.getElementById("lienzo-cinco");
var canvas_seis = document.getElementById("lienzo-seis");


if(canvas_dos.getContext){

    var ctx_2 = canvas_dos.getContext("2d");
    var img = new Image();
    img.src = 'media/icons/rip_icon.png';
    img.onload = function(){
        ctx_2.drawImage(img,0,0,canvas_dos.width,canvas_dos.height);
    };

}else{
    console.log("No se soporta el contexto");
}



if(canvas_dos_hidden.getContext){

    var ctx_2_hidden = canvas_dos_hidden.getContext("2d");
    var img = document.getElementById("imagen");

    img.addEventListener("load",(e) => {
        ctx_2_hidden.drawImage(img,0,0,150,150);
    });

}else{
    console.log("No se soporta el contexto");
}


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
    
    var ctx_5 = canvas_cinco.getContext("2d");
    ctx_5.beginPath();
    ctx_5.setLineDash([5,15]);
    ctx_5.moveTo(0,40);
    ctx_5.lineTo(150,40);
    ctx_5.strokeStyle = '#FFFFFF';
    ctx_5.stroke();

    ctx_5.beginPath();
    ctx_5.setLineDash([]);
    ctx_5.moveTo(0,120);
    ctx_5.lineTo(150,120);
    ctx_5.strokeStyle = '#FFFFFF';
    ctx_5.stroke();

}else{
    console.log("No se soporta el contexto 5");
}

if(canvas_seis.getContext){
    
    ctx_6 = canvas_seis.getContext("2d");
    ctx_6.fillStyle = "rgb(200,200,200)";
    ctx_6.beginPath();
    ctx_6.moveTo(75,50);
    ctx_6.lineTo(100,75);
    ctx_6.lineTo(100,25);
    ctx_6.fill();

}else{
    console.log("No se soporta el contexto 6");
}