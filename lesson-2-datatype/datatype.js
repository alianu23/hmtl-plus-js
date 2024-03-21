// string
let ner ="Naraa";
console.log('name =', ner);


// number
let too = 2023;
let too1 = -2023;
let too2 = 20.23;
console.log("too =", too);
console.log("too1 =", too1);
console.log("too2 =", too2);

// boolean
let c = true;
let d = false;
console.log("c =",c);
console.log("d =",d);

// undefined
let i;
console.log("i =",i);

// Null
let j = null;
console.log("j=", j);

//Non-primitive => reference type

let person = {
    ner: "naraa",
    age: 20,
    adult: true,
}
console.log("person", person);
console.log("Ner =",person.ner);
console.log("Age =",person["age"]);
console.log("Adult =",person.adult);

// Array type
let arr = [10, 20, 30, 40, 50];
let arr1 = ["Naraa", "Saraa", "Bold", "Bat", "Dorj"];
let arr2 = ["Naraa", 20, "Bold", 100, true];
console.log("Array = ", arr);
console.log("Arr 0 index = ", arr[0]);
console.log("Arr 1 index = ", arr[1]);
console.log("Arr 2 index = ", arr[2]);
console.log("Arr 3 index = ", arr[3]);
console.log("Arr 4 index = ", arr[4]);
console.log("Array1 = ", arr1);
console.log("arr1 0 index = ", arr1[0]);
console.log("arr1 1 index = ", arr1[1]);
console.log("arr1 2 index = ", arr1[2]);
console.log("arr1 3 index = ", arr1[3]);
console.log("arr1 4 index = ", arr1[4]);
console.log("Array2 = ", arr2);
console.log("arr2 0 index = ", arr2[0]);
console.log("arr2 1 index = ", arr2[1]);
console.log("arr2 2 index = ", arr2[2]);
console.log("arr2 3 index = ", arr2[3]);
console.log("arr2 4 index = ", arr2[4]);
let ovog = arr2[0];
console.log("Ovog = ", ovog);
arr2[0] = "Saraa";
console.log(arr2[0]);
console.log(arr2);



