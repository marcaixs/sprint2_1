//S2.1. Exercicis Bàsics

//Exercici 1.1: Arrow functions
console.log("Exercici 1.1: Arrow functions");

//Exercici 1
let add = (a, b) => a + b;

console.log("Exercici 1:");
console.log(add(1,2));

//Exercici 2
let randomNumber = () => Math.random()*100;

console.log("Exercici 2:");
console.log(randomNumber());

//Exercici 3
class person {
    name="Marc";
    greet = () => console.log(`Hola, ${this.name}`); 
}

console.log("Exercici 3:");
const persona = new person();
persona.greet();

//Exercici 4
let printNumbers = (array) =>{    
    for(let i of array){
      console.log(i);
    };
};

console.log("Exercici 4:");
printNumbers([1,2,3]);

//Exercici 1.2: Operador ternari
console.log("Exercici 1.2: Operador ternari")

//Exercici 1
function potConduir(edat){
  let conduir =  edat>=18 ? edat+ " = pot conduir": edat+ " = no pot conduir";
  return conduir;
};

console.log("Exercici 1:");
console.log(potConduir(12));
console.log(potConduir(18));
console.log(potConduir(36));

//Exercici 2
function compara(num1,num2){
  let resposta = num1 > num2 ? num1+" és més gran" : num2+" és més gran";
  return resposta;
};

console.log("Exercici 2:");
console.log(compara(2,5));
console.log(compara(4,1));


//Exercici 3
function whichSign(num){
  let sign = num == 0 ? num+" és igual a 0." : num> 0 ? num+ " és positiu." : num+" és negatiu.";
  return sign;
}

console.log("Exercici 3.1:");
console.log(whichSign(-3));
console.log(whichSign(0));
console.log(whichSign(4));

function trobarMaxim(a,b,c){
  let maxim = a>b ? a>c ? a+" és el mes gran" : c>b ? c+" és el mes gran"
   : b+" és el mes gran" : b>c ? b+ " és el mes gran" : c + " és el mes gran";
  return maxim;
};

console.log("Exercici 3.2:");
console.log(trobarMaxim(1,2,3));
console.log(trobarMaxim(5,3,1));
console.log(trobarMaxim(3,5,7));


//Exercici4
function parOimpar(array){
  let parImpar = "";
  for(let i of array){
    parImpar += i%2 == 0 ? i+ " es par \n" : i+" es impar \n";
  };
  return parImpar;
}

console.log("Exercici 4:");
console.log(parOimpar([1,2,3,4,5,6]));

//Exercici 1.3: Callbacks

//Exercici 1:
function processar(num, callback){
  callback(num);
}

console.log("Exercici 1.3: Callbacks:")
console.log("Exercici 1:");
processar(4, (num)=> console.log(num));

//Exercici 2:
function calculadora(num1, num2, callback){
  return callback(num1, num2);
}

console.log("Exercici 2:");
console.log(calculadora(3, 5, (num1,num2)=>num1+num2));

//Exercici 3:
function esperarISaludar(nom, callback){
  callback(nom);
}
console.log("Exercici 3:");
setTimeout(function() { esperarISaludar("Marc", (nom)=> console.log(nom)); }, 2000);

//Exercici 4:
function processarElements(array, callback){
  for(let i of array){
    callback(i);
  }
}

console.log("Exercici 4:");
processarElements([1,2,3,4], (array)=> console.log(array));

//Exercici 5:
function processarCadena(string, callback){
   callback(string.toUpperCase());
}

console.log("Exercici 4:");
processarCadena("cadena de text", (string)=> console.log(string));


//Exercici 1.4: Rest & Spread operators
console.log("Exercici 1.4: Rest & Spread operators:");

//Exercici 1:
const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = [...array1, ...array2];

console.log("Exercici 1:");
console.log(array3);

//Exercici 2:
function suma(...theArgs){
  let resultat = 0;
  for (let arg of theArgs) {
    resultat += arg;
  }
  return resultat;
}

console.log("Exercici 2:");
console.log(suma(5,6,7,10));

//Exercici 3:
const objecte1 = {p1: "propietat 1", p2: "propietat 2", p3: "propietat 3"};
const objecte2 = {...objecte1};

objecte1.p1 = "canvi de propietat";

console.log("Exercici 3");
console.log("Objecte 1: "+objecte1.p1);
console.log("Objecte 2: "+objecte2.p1);

//Exercici 4:
const arrayElements = [1,2,3,4,5];
let v1, v2, v3;
[v1,v2, ...v3] = arrayElements;

console.log("Exercici 4:");
console.log("Variable 1: "+v1+";\nVariable 2: "+v2+";\nVariable 3: "+v3);

//Exercici 5:
function funcioSpread(a,b,c){
  console.log(a,b,c);
}
console.log("Exercici 5:")
const arraySpread = ["A","B","C"];
funcioSpread(...arraySpread);

//Exercici 6:
const objecteA = {p1: "propietat 1", p2: "propietat 2"};
const objecteB = {p3: "propietat 3", p4: "propietat 4"};
const objecteC = {...objecteA, ...objecteB};

console.log("Exercici 6:");
console.log(objecteC);

//Exercici 1.5: Array Transformations
console.log("Exercici 1.5: Array Transformations");

//Exercici 1
const arNumbers = [5, 9, 22, 27];
const newArr = arNumbers.map((x) => x * x);

console.log("Exercici 1:");
console.log(newArr);

//Exercici 2
const arrNumbers = [1, 2, 3, 4];
const result = arrNumbers.filter((x) => x % 2 == 0);

console.log("Exercici 2:");
console.log(result);

//Exercici 3
const arrayNumbers = [1, 10, 8, 11];
const found = arrayNumbers.find((x) => x > 10);

console.log("Exercici 3:");
console.log(found);

//Exercici 4:
const arrNum = [13, 7, 8, 21];
const initialValue = 0;
const resultatSuma = arrNum.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log("Exercici 4:");
console.log(resultatSuma);

//Exercici 5
const arrayN = [1,3,7,10,15,17,11,5,8,12,9];

function arr (array){
  const initialValue = 0;
  const resultat = (array.filter((x) => x >=10)).map((x) => x * 2).reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue);
  return resultat;
}
const arrayR = arr(arrayN);

console.log("Exercici 5");
console.log(arrayR);

//Exercici 6
arrayEv = [11,12,13,14];
let resultatMajor;
if(arrayEv.some((numbr)=>numbr > 10)){
  if (arrayEv.every((numbr)=>numbr > 10)){
    resultatMajor = "Tots els nombres són majors a 10.";
  }else{
    resultatMajor = "Algun o alguns nombres són majors a 10.";
  }
}else{
  resultatMajor = "Cap nombre és major a 10."
};

console.log("Exercici 6:");
console.log(resultatMajor);


//Exercici 1.6: Array loops

//Exercici 1:
let noms = ['Anna', 'Bernat', 'Clara'];
console.log("Exercici 1:");
noms.forEach((nom) => console.log(nom));

//Exercici 2:
console.log("Exercici 2:");
for (let nom of noms) {
  console.log(nom);
};

//Exercici 3
const arrNumbrs = [1, 2, 3, 4, 5, 6];
const resultNmbrs = arrNumbrs.filter((x) => x % 2 == 0);

console.log("Exercici 3:");
console.log(resultNmbrs);

//Exercici 4
let obj = { nom: "Ona", edat: 25, ciutat: 'Barcelona' };

console.log("Exercici 4:")

for (const property in obj) {
  console.log(`${property}: ${obj[property]}`);
}

//Exercici 5
let numeros = [1, 2, 3, 4, 5, 6];
console.log("Exercici 5:")
for(let i of numeros){
  console.log(i);
  if(i==5){
    break;
  }
};

//Exercici 6
console.log("Exercici 6")
for(let [i, v] of noms.entries()){
  console.log(i, v);
};

//Exercici 1.7: Promises & Async/Await
console.log("Exercici 1.7: Promises & Async/Await");

//Exercici 1
console.log("Exercici 1 i 2:");
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hola, món!");
  }, 2000);
});

//Exercici 2
promise.then(result => {   
    console.log(result); 
  })
  
//Exercici 3
console.log("Exercici 3:");

const promesa = new Promise((resolve, reject) => {
  const input = "Hola!";
  if(input == "Hola!"){
    setTimeout(() => {
      resolve("Hola!");
    }, 2000);
  }else{
    reject("L'input no és 'Hola!'")
  }
});

promesa.then(result => {   
  console.log(result); 
})

//Exercici 4
console.log("Exercici 4:");

async function asFunction() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hola, món!");
    }, 2000);
  });
  const result = await promise;
  console.log(result);
}
asFunction();

//Exercici 5
console.log("Exercici 5:");

async function asyFunction() {
  try {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hola, món!");
      }, 2000);
    });
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

asyFunction();



















