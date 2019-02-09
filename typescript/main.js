"use strict";
maxValue(3, 9);
function maxValue(value1, value2) {
    return Math.max(value1, value2);
}
// definición de tipos
// boolean
let isBoolean = false;
//Number
let numerillo = 43.320;
let age = 25;
// string
let myName = 'Beatriz';
// array
let listAges = [20, 19, 35, 43];
let listNames = ['Juan', 'Ana', 'Pedro', 'Paloma'];
// tupla - array de clave-valor
let personTuple;
personTuple = ['Samuel', 30];
// enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Pink"] = 3] = "Pink";
    Color[Color["Yellow"] = 4] = "Yellow";
    Color[Color["Purple"] = 5] = "Purple";
    Color[Color["Brown"] = 6] = "Brown";
})(Color || (Color = {}));
Color.Blue;
// no se podría poner un color que no tengamos en el enum
// Any
let notSure = '298';
notSure = 80;
notSure = true;
// Void
function alertUser() {
    alert('Alert with function void');
}
// Null
let u = null;
// undefined
let ud = undefined;
// clases
class Person {
    constructor(name, age, skinColor) {
        this.name = name;
        this.age = age;
        this.skinColor = skinColor;
    }
    //métodos
    // método para saludar
    greet() {
        return `Hello, ${name}`;
    }
}
let person = new Person('Juan', 30, Color.Blue);
person.name;
person.skinColor = Color.Pink;
alert(person.greet());
// herencia
class Guy extends Person {
    greet() {
        return `My favorite color is ${this.skinColor}`;
    }
}
// clases abstractas  (no se pueden instanciar)
class People {
    constructor(name) {
        this.name = name;
    }
}
class Developer extends People {
}
let personDeveloper = new Developer('Samuel');
// condicionales
if (personDeveloper.name === 'Samuel') {
    console.log('Developer found!');
}
switch (person.skinColor) {
    case Color.Pink:
        console.log('blue');
        break;
    default:
        console.log('no color found!');
        break;
}
