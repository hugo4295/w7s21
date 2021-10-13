$(document).ready(function(){

    $("#presiona").click(function(){
        alert("Me presionaste.... XD");
    });

    $("#enviar").click(function(event){
        event.preventDefault();
        var cadena = $("#nombre").val();
        alert("Bienvenido "+ cadena +", estamos empezando en jquery");
        var cadena1 = $("#cadena1").val();
        var cadena2 = $("#cadena2").val();

        if (cadena1 == cadena2){
            alert("son iguales");
        } else {
            alert("No son iguales");
        }
    });
});