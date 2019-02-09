"use strict";
// Iterators   (Bucles)
var listNumber = [10, 27, 30];
for (var _i = 0, listNumber_1 = listNumber; _i < listNumber_1.length; _i++) {
    var number = listNumber_1[_i];
    console.log(number); // 10, 27, 30
}
// for con in        da el index del número, es decir la posición en la que se encuentra 
for (var number in listNumber) {
    console.log(number); // 0, 1, 2
}
// tambien podemos hacer el bucle normal en javascript
for (var i = 0; i < listNumber.length; i++) {
    console.log(i); // esto se equivale al bucle                   for con of
    console.log(listNumber[i]); // esto se equivale al bucle      for con in
}
// Métodos genéricos
// con <T> definimos un tipo genérico
var CustomCollection = /** @class */ (function () {
    function CustomCollection() {
        this.itemArray = [];
    }
    // añadir nuevo item a la colección
    CustomCollection.prototype.Add = function (item) {
        this.itemArray.push(item);
    };
    return CustomCollection;
}());
var PersonInfo = /** @class */ (function () {
    function PersonInfo(name) {
        this.name = name;
    }
    return PersonInfo;
}());
var listName = new CustomCollection();
listName.Add('Samuel');
var listAge = new CustomCollection();
listAge.Add(30);
var listPersonInfo = new CustomCollection();
listPersonInfo.Add(new PersonInfo('Bea'));
function WriteMessage(message) {
    console.log(message);
}
