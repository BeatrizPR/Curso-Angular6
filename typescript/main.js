"use strict";
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
