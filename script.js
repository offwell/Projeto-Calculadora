// num1 = parseFloat(prompt("Digite o primeiro número:"))
// operacao = prompt("Escolha umas das operações abaixo que deseja utilizar: \n [1] - Soma \n [2] - Subtração \n [3] - Multiplicação \n [4] - Divisão \n")
// num2 = parseFloat(prompt("Escolha o segundo número:"))

// if (operacao == "1"){
//     alert(`A soma de ${num1} + ${num2} é igual a ${num1 + num2}`)

// }else if (operacao == "2"){
//     alert(`A subtração de ${num1} - ${num2} é igual a ${num1 - num2}`)

// }else if (operacao == "3"){
//     alert(`A multiplicação de ${num1} x ${num2} é igual a ${num1 * num2}`)

// }else if (operacao == "4"){
//     alert(`A divisão de ${num1} + ${num2} é igual a ${num1 / num2}`) 

// }

function addNum(numero){
    document.getElementById('visor').value += numero;
}

function displayClear(){
    document.getElementById('visor').value = ''; 
} 

function addOp(operacao){
    document.getElementById('visor').value += operacao;
}

function calcular_resultado(){
    let visor = document.getElementById('visor');
    let expressao = visor.value;
    
    try {
        let resultado = eval(expressao);
        visor.value = resultado;
    }catch (error){
        visor.value = "Erro";
}

}
