var div_esquerda = document.getElementById("esquerda");
var pteste = document.getElementById("teste");

div_esquerda.addEventListener("transitionend", () => {
    pteste.style.display = "block";
    
    if (div_esquerda.style.width == "850px") {
        setTimeout(() => {
            pteste.style.opacity = "1";
        }, 100);
    }

    if (div_esquerda.style.width == "50px") {
        pteste.style.display = "none";
    }
});

function animar() {

    var div = document.getElementById("esquerda");
    var form = document.getElementById("form");
    var p = document.getElementById("div_esquerda");

    div.style.width = "850px";
    form.style.transform = "translateX(425px)";

    p.style.opacity = "0";
}

function voltar() {
    var div = document.getElementById("esquerda");
    var form = document.getElementById("form");
    var p = document.getElementById("div_esquerda");

    div.style.width = "50px";
    form.style.transform = "translateX(0px)";

    p.style.opacity = "1";

    pteste.style.opacity = "0";
}