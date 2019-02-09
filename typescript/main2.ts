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

