let resultados = document.querySelectorAll(".resultados");
let categorias = document.querySelectorAll(".categoria");
let iconos = document.querySelectorAll(".iconos");

fetch("data.json")
    .then(res => res.json())
    .then(data => {

        for(let i = 0; i < resultados.length; i++) {

            resultados[i].innerHTML = data[i].score;
            categorias[i].innerHTML = data[i].category;
            iconos[i].src = data[i].icon;
        }
    })