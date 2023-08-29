//Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello World!")

//Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

alert("Informe dois números...")

let numberOne = Number(prompt("Informe o primeiro número:"))
let numberTwo = Number(prompt("Informe o segundo número:"))

let som = numberOne + numberTwo

alert(`A soma dos dois números informados é: ${som}`)

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
//💡 Para saber o tipo de dado você pode usar o operador `typeof`

let value = true

if (typeof value == "number") {
  alert("É um número")
} else {
  alert("Não é um número")
}

//Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

if (typeof value == "string") {
  alert("É uma string")
} else {
  alert("Não é uma string")
}

//Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

if (typeof value == "boolean") {
  alert("É um booleano")
} else {
  alert("Não é um booleano")
}

//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let sub = numberOne - numberTwo

alert(`A subtração dos dois números informados é: ${sub}`)

//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let mult = numberOne * numberTwo

alert(`A multiplicação dos dois números informados é: ${mult}`)

//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let div = numberOne / numberTwo

alert(`A divisão dos dois números informados é: ${div}`)

//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

if (numberOne % 2 == 0) {
  alert("É um número par")
} else {
  alert("Não é um número par")
}

//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

if (numberOne % 2 != 0) {
  alert("É um número ímpar")
} else {
  alert("Não é um número ímpar")
}