maxValue(3, 9);

function maxValue(value1: number, value2: number){
    return Math.max(value1, value2);
}

// definición de tipos

// boolean

let isBoolean: Boolean = false;

//Number

let numerillo: number = 43.320;

let age: number = 25;

// string
let myName: string = 'Beatriz';

// array

let listAges:number[] = [20, 19, 35, 43];
let listNames: Array<string> =['Juan', 'Ana', 'Pedro', 'Paloma'];

// tupla - array de clave-valor

let personTuple:[string, number];
personTuple = ['Samuel', 30];

// enums

enum Color{
    Red, 
    Green, 
    Blue,
    Pink,
    Yellow, 
    Purple,
    Brown
}

Color.Blue;
// no se podría poner un color que no tengamos en el enum

// Any

let notSure: any = '298';
notSure = 80;
notSure = true;

// Void

function alertUser(): void {
    alert('Alert with function void');
}

// Null

let u:null = null;

// undefined

let ud: undefined = undefined;
