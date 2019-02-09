// Iterators   (Bucles)

let listNumber: Array<number> =[10, 27,30];

for(let number of listNumber){
    console.log(number);  // 10, 27, 30
}

// for con in        da el index del número, es decir la posición en la que se encuentra 
for(let number in listNumber){
    console.log(number); // 0, 1, 2
}

// tambien podemos hacer el bucle normal en javascript
for(let i=0; i< listNumber.length; i++){
    console.log(i);  // esto se equivale al bucle                   for con of
    console.log(listNumber[i]);   // esto se equivale al bucle      for con in
}

// Métodos genéricos

// con <T> definimos un tipo genérico
class CustomCollection<T>{
    private itemArray: Array<T>;
    
    constructor() {
        this.itemArray = [];
    }

    // añadir nuevo item a la colección
    Add(item: T){
        this.itemArray.push(item);
    }

}

class PersonInfo{
    readonly name: string;
    constructor(name: string){
        this.name = name;
    }
}

let listName = new CustomCollection<string>();

listName.Add('Samuel');

let listAge = new CustomCollection<number>();

listAge.Add(30);

let listPersonInfo = new CustomCollection<PersonInfo>();

listPersonInfo.Add(new PersonInfo('Bea'));

// Interfaces

interface Message{
    // interfaz con tres propiedades
    title: string;
    message: string;
    errorNumber?: number;
}

function WriteMessage(message: Message){
    console.log(message);
}

// Modules y namespace

//          creamos un modulo con dos clases exportables
namespace Validator{
    export interface NumberValidator{
        // validador que devuelve un booleano
        isValidNumber(value:number): boolean
    }

    export class ZipCodeValidator implements NumberValidator{
        isValidNumber(value: number): boolean{
            return value > 0 && 10 < value;
        }
    }
}

let validador: Validator.NumberValidator = new Validator.ZipCodeValidator;

validador.isValidNumber(5);

// Decoradores

function Logged(){
    return function (target: any){
        console.log('Logged!');
    }
}

@Logged()    //       hay que modifiar el archivo tsconfig.json y descomentar la linea:     "experimentalDecorators": true, 
class TestDecorator{
    method(): boolean{
        return true;
    }
}