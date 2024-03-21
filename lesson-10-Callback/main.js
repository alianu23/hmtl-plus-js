// function mendchilgee(name){
//     alert(" Hello " + name);
// }
// function chmend(name){
//     alert(" Ni Hao " + name);
// }
// function mend(cb){
//     const name = prompt("Write your name");
//     cb(name);
// }
// mend(mendchilgee);
// mend(chmend);

// [13, 56, 11.33, 9, 3, 2, 5, 7] өгөгдсөн array дээрх бүх элементийн
// 3-аар үржсэн,
// 2-т хуваасан,
// 2 болон 3 зэрэг дэвшүүлсэн үр дүнг гарга;
const arr = [13, 56, 11.33, 9, 3, 2, 5, 7];

for (element of arr){
    console.log(element);
}

const map1 = arr.map((element) => {
    return element * 3;
});
console.log("multiply by 3 = ", map1);

const map2 = arr.map((element) => {
    return element / 2;
});
console.log("divided by 2 = ", map2)

const map3 = arr.map((element) => {
    return element **= 2;
});
console.log("2zereg = ", map3);

const map4 = arr.map((element) => {
    return element **= 3;
});
console.log("3zereg = ", map4)

    
// [{​​​​​​​​name: "Chocolate", price: 500, quantity: 10}​​​​​​​​,
// {​​​​​​​​name: "Chocolate", price: 1000, quantity: 100}​​​​​​​​,
// {​​​​​​​​name: "Red Wine", price: 4000, quantity: 12}​​​​​​​​,
// {​​​​​​​​name: "White Wine", price: 5000, quantity: 40}​​​​​​​​,
// {​​​​​​​​name: "Laptop Asus", price: 100000, quantity: 30}​​​​​​​​,
// {​​​​​​​​name: "Laptop Apple", price: 100000, quantity: 30}​​​​​​​​,
// {​​​​​​​​name: "Laptop Dell", price: 100000, quantity: 30}​​​​​​​​,
// ]
// 1. өгөгдсөн array дээрх бүх элементүүдийн үнийг 3-аар үржсэн, 5-т хуваасан, дэвшүүлсэн үр дүнг гарга;
// 2. өгөгдсөн array ийн бүтээгдэхүүн бүрийн нийт үнийг тооцож гарга;
// 3. өгөгдсөн array ийн chocolate бүтээгдэхүүнүүдийг олох;
// 4. өгөгдсөн array ийн Wine бүтээгдэхүүнүүдийг олох;
// 5. өгөгдсөн array ийн Laptop бүтээгдэхүүнүүдийг олох;

const items = [
    {name: "Chocolate",price: 500, quantity:10},
    {name: "Chocolate",price: 1000, quantity:100},
    {name: "Red Wine",price: 4000, quantity:12},
    {name: "White Wine",price: 5000, quantity:40},
    {name: "Laptop Asus",price: 100000, quantity:30},
    {name: "Laptop Apple",price: 100000, quantity:30},
    {name: "Laptop Dell",price: 100000, quantity:30},
]

for (element of items){
    console.log(element);
}

const price1 = items.map((element) => {
    return element.price * 3;
});
console.log("multiply by 3 = ", price1);

const price2 = items.map((element) => element.price / 5);
console.log("Div 5 = ", price2);

const price3 = items.map((element) => element.price * element.price);
console.log("Dewshuulsen= ", price3);

const priceEach = items.map((element) => element.price * element.quantity);
console.log("Each items total price = ", priceEach);

const choco = items.filter((element) => element.name === "Chocolate");
console.log("Chocolate = ", choco);

const wine = items.filter((element) => element.name.includes("Wine"));
console.log("Wine = ", wine);

const laptop = items.filter((element) => element.name.includes("Laptop"));
console.log("Laptop = ", laptop);