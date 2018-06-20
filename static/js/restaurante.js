function myFunction() {
    var input, filter, ul, li, a, i, p;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

function getEstrelas() {
    var radios = document.getElementsByName('estrela');
    var valor = 5;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            valor = radios[i].value;
            break;
        }
    }
    console.log(valor);
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        var a = li[i].getElementsByClassName("classificacao")[0];
        console.log("a",a)
        if (a.innerHTML.toUpperCase().indexOf(""+valor) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
function getDinheiro() {
    var radios = document.getElementsByName('dinheiro');
    var valor = 5;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            valor = radios[i].value;
            break;
        }
    }
    console.log(valor);
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        var a = li[i].getElementsByClassName("dinheiro")[0];
        console.log("a",a)
        if (a.innerHTML.toUpperCase().indexOf(""+valor) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
function getTipo() {
    var radios = document.getElementsByName('tipo');
    var valor;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            valor = radios[i].value;
            break;
        }
    }
    console.log(valor);
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        var a = li[i].getElementsByClassName("tipo")[0];
        console.log("a",a)
        if (a.innerHTML.toUpperCase().indexOf(""+valor) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
