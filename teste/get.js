$(document).ready(function(){
    const arr = [];
    var titulo = $('h1').html();
    arr.push(titulo);
    var descricao = $('span').html()
    arr.push(descricao);;


    $("#resposta").html(
        "Resposta: <br> arr[0]: "+arr[0] + "<br>  arr[0]: "+arr[1] 

    );
})