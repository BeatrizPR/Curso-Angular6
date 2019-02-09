"use strict";
// Iterators   (Bucles)
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let listNumber = [10, 27, 30];
for (let number of listNumber) {
    console.log(number); // 10, 27, 30
}
// for con in        da el index del número, es decir la posición en la que se encuentra 
for (let number in listNumber) {
    console.log(number); // 0, 1, 2
}
// tambien podemos hacer el bucle normal en javascript
for (let i = 0; i < listNumber.length; i++) {
    console.log(i); // esto se equivale al bucle                   for con of
    console.log(listNumber[i]); // esto se equivale al bucle      for con in
}
// Métodos genéricos
// con <T> definimos un tipo genérico
class CustomCollection {
    constructor() {
        this.itemArray = [];
    }
    // añadir nuevo item a la colección
    Add(item) {
        this.itemArray.push(item);
    }
}
class PersonInfo {
    constructor(name) {
        this.name = name;
    }
}
let listName = new CustomCollection();
listName.Add('Samuel');
let listAge = new CustomCollection();
listAge.Add(30);
let listPersonInfo = new CustomCollection();
listPersonInfo.Add(new PersonInfo('Bea'));
function WriteMessage(message) {
    console.log(message);
}
// Modules y namespace
//          creamos un modulo con dos clases exportables
var Validator;
(function (Validator) {
    class ZipCodeValidator {
        isValidNumber(value) {
            return value > 0 && 10 < value;
        }
    }
    Validator.ZipCodeValidator = ZipCodeValidator;
})(Validator || (Validator = {}));
let validador = new Validator.ZipCodeValidator;
validador.isValidNumber(5);
// Decoradores
function Logged() {
    return function (target) {
        console.log('Logged!');
    };
}
let TestDecorator = class TestDecorator {
    method() {
        return true;
    }
};
TestDecorator = __decorate([
    Logged() //       hay que modifiar el archivo tsconfig.json y descomentar la linea:     "experimentalDecorators": true, 
], TestDecorator);
