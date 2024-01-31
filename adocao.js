// Criei uma variável para armazenar a idade dos cães em anos humanos.
let myAge = 19;
// Define a idade do cão em anos humanos
let earlyYears = 2;
// Multiplica a idade dos primeiros anos por 10.5 (taxa de crescimento para cães)
earlyYears *=  10.5;
// Supondo que 'myAge' é a idade em anos humanos
let laterYears = myAge-2;
// Multiplica a diferença entre a idade e 2 por 4 (taxa de crescimento após os primeiros anos)
laterYears*=4
// Calcula a idade total em anos de cão somando os anos iniciais com os anos posteriores
let myAgeInDogYears = earlyYears+laterYears
// Define o nome 'Pedro' em letras minúsculas
let myName = 'Pedro'.toLowerCase()
// O seguinte console.log irá imprimir uma mensagem com os valores calculados
console.log(`Meu nome é ${myName}. Tenho ${myAge} anos em anos humanos, que são ${myAgeInDogYears} anos em anos de cão.`)