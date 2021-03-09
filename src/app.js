var bol = 0;

function cambioTema() {
    if (bol == 0) {
        bol = 1;
    } else {
        bol = 0
    }
    if (bol == 0) {
        document.getElementById("body").className = "bg-dark";
        document.getElementById("btn").className = "btn btn-light button2";
        document.getElementById("btn1").className = "btn btn-light button2";
        document.getElementById("btn2").className = "btn btn-light button2";
        document.getElementById("btn3").className = "btn btn-light button2";
        document.getElementById("btn4").className = "btn btn-light button2";
        document.getElementById("btn5").className = "btn btn-light button2";
        document.getElementById("btn6").className = "btn btn-light button2";
        document.getElementById("btn7").className = "btn btn-light button2";
        document.getElementById("btn8").className = "btn btn-light button2";
        document.getElementById("btn9").className = "btn btn-dark button";
        document.getElementById("btn10").className = "btn btn-dark button";
        document.getElementById("btn11").className = "btn btn-dark button";
        document.getElementById("btn12").className = "btn btn-dark button";
        document.getElementById("btn13").className = "btn btn-light button2";
        document.getElementById("btn14").className = "btn btn-dark button";
        document.getElementById("btn15").className = "btn btn-dark button";
        document.getElementById("btn16").className = "btn btn-light button2";
        document.getElementById("btnTheme").className = "btn btn-dark buttom3";
        document.getElementById("text").className = "text-center text-white";
        document.getElementById("res").className = "form-control mt-1 bg-dark text-white res";
        document.getElementById("res2").className = "form-control mt-1 bg-dark text-white res2";
    } else {
        document.getElementById("body").className = "bg-light";
        document.getElementById("btn").className = "btn btn-dark button";
        document.getElementById("btn1").className = "btn btn-dark button";
        document.getElementById("btn2").className = "btn btn-dark button";
        document.getElementById("btn3").className = "btn btn-dark button";
        document.getElementById("btn4").className = "btn btn-dark button";
        document.getElementById("btn5").className = "btn btn-dark button";
        document.getElementById("btn6").className = "btn btn-dark button";
        document.getElementById("btn7").className = "btn btn-dark button";
        document.getElementById("btn8").className = "btn btn-dark button";
        document.getElementById("btn9").className = "btn btn-light button2";
        document.getElementById("btn10").className = "btn btn-light button2";
        document.getElementById("btn11").className = "btn btn-light button2";
        document.getElementById("btn12").className = "btn btn-light button2";
        document.getElementById("btn13").className = "btn btn-dark button";
        document.getElementById("btn14").className = "btn btn-light button2";
        document.getElementById("btn15").className = "btn btn-light button2";
        document.getElementById("btn16").className = "btn btn-dark button";
        document.getElementById("btnTheme").className = "btn btn-light buttom3";
        document.getElementById("text").className = "text-center text-dark";
        document.getElementById("res").className = "form-control mt-1 bg-light text-dark res";
        document.getElementById("res2").className = "form-control mt-1 bg-light text-dark res2";
    }
}

function auxResultado() {
    var input1 = document.getElementById("res");
    var input2 = document.getElementById("res2");
    var valor = input1.value;
    if(valor >= 9999999999999){
        input1.style.fontSize = "24px";
    }else{
        input1.style.fontSize = "36px";
    }
    input2.value = eval(valor);
}
function resultado() {
    var input1 = document.getElementById("res");
    var input2 = document.getElementById("res2");
    var valor = input2.value;
    input1.value = valor;
    input2.value = "";
}
function reset() {
    var input1 = document.getElementById("res");
    var input2 = document.getElementById("res2");
    input1.value = "";
    input2.value = "";
    input1.style.fontSize = "36px";
}

