

const genero = "H"

class Persona {

    constructor(nombre = "", edad= 0, DNI, sexo = genero, peso = 0, altura = 0){
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;


    }
}

let personaAlex = new Persona ("Alex", 30, "111F", 80, 1.82);
let personaBea = new Persona ("Bea", 29,"222F", 60, 1.64);
let personaHector = new Persona ("Hector", 27, 75, 1.77);
let personaManel = new Persona ("Manel", 38, 82, 1.82);

console.log(personaAlex);
console.log(personaBea);
console.log(personaHector);
console.log(personaManel);