function convertir() {
    $("#resultado").empty();
    let valor = $("#string").val();
    let resultado = valor.split(",");
    for (let i=0; i <resultado.length; i++) {
        let textoAMostrar = `<h4> ${resultado[i]} </h4>`;
        $("#resultado").append(textoAMostrar);
    }
}

$("#string").keypress(function(event){
    if (event.which == 13) {
        convertir()
    }
})
