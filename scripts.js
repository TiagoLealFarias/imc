function calculate() {

    let weight = document.getElementById('weight').value; /**criei variável peso**/
    let height = document.getElementById('height').value; /**criei variável altura**/
    let quadrado = (height)**2; /**c**/
    let imc = weight / (quadrado) ; /**criei variável imc e mandei o valor do cálculo**/
    
    document.getElementById('result').innerHTML = imc.toFixed(2); /**coloca 2 casas à variável imc**/
    
    let pesoParaAltura = (weight - (24,99*quadrado)); /**Quantos quilos a pessoa precisa perder**/
    let pesoParaAlturaDesnutrido = ((24,99*quadrado) - weight); /**Quantos quilos a pessoa precisa ganhar**/ 
    
    if (imc >= 40){
        document.getElementById('result').innerHTML = document.write(" Seu IMC é:",imc ,", você está com obesidade grau 3. Você precisa perder ", pesoParaAltura,"Kg");
    }
    else if (imc >= 35 && imc < 40){
        document.getElementsById('result').innerHTML = document.write(" Seu IMC é:",imc ,", você está com obesidade grau 2. Você precisa perder ", pesoParaAltura,"Kg");
    }
    else if (imc >= 30 && imc < 35){
        document.getElementById('result').innerHTML = document.write(" Seu IMC é:",imc ,", você está com obesidade grau 1. Você precisa perder ", pesoParaAltura,"Kg");
    }
    else if (imc >= 25 && imc < 30){
        document.getElementById('result').innerHTML = document.write(" Seu IMC é:", imc ," você está com sobrepeso. Você precisa perder ", pesoParaAltura,"Kg");
    }
    else if (imc >= 18 && imc < 25){
        document.getElementById('result').innerHTML = document.write(" Seu IMC é:", imc," você está com o peso adequado, Parabéns continue assim." );
    }
    else if (imc < 18){
        document.getElementById('result').innerHTML = document.write(" Seu IMC é:", imc," você está desnutrido. Você precisa adquirir", pesoParaAlturaDesnutrido,"Kg");
    }
}