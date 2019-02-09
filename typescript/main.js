"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
maxValue(3, 9);
function maxValue(value1, value2) {
    return Math.max(value1, value2);
}
// definición de tipos
// boolean
var isBoolean = false;
//Number
var numerillo = 43.320;
var age = 25;
// string
var myName = 'Beatriz';
// array
var listAges = [20, 19, 35, 43];
var listNames = ['Juan', 'Ana', 'Pedro', 'Paloma'];
// tupla - array de clave-valor
var personTuple;
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
var notSure = '298';
notSure = 80;
notSure = true;
// Void
function alertUser() {
    alert('Alert with function void');
}
// Null
var u = null;
// undefined
var ud = undefined;
// clases
var Person = /** @class */ (function () {
    function Person(name, age, skinColor) {
        this.name = name;
        this.age = age;
        this.skinColor = skinColor;
    }
    //métodos
    // método para saludar
    Person.prototype.greet = function () {
        return "Hello, " + name;
    };
    return Person;
}());
var person = new Person('Juan', 30, Color.Blue);
person.name;
person.skinColor = Color.Pink;
alert(person.greet());
// herencia
var Guy = /** @class */ (function (_super) {
    __extends(Guy, _super);
    function Guy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Guy.prototype.greet = function () {
        return "My favorite color is " + this.skinColor;
    };
    return Guy;
}(Person));
// clases abstractas  (no se pueden instanciar)
var People = /** @class */ (function () {
    function People(name) {
        this.name = name;
    }
    return People;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Developer;
}(People));
var personDeveloper = new Developer('Samuel');
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
