function trecho()
 {
    let e1 = document.getElementById("cxaTexto1")
    
    let valor = parseInt(e1.value)
    console.log("valor", valor);
}

function validar() 
{
    let e2 = document.getElementById("cxaTexto2")
    let idade = parseInt(e2.value)
    console.log("idade", idade);

    if (idade >= 18) {
        alert("Maior de idade")
    } else {
        alert("Menor de idade")
    }
}