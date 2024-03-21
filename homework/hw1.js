// // 1. Өгөгдсөн Array - ийн хамгийн их тоог хэвлэх.
// //    (example: [1,2,3] --> 3)

let a=[1,4,6,30,56,78];
let max=a[0];
for(let i=0;i<a.length;i++){
    if(a[i]>max){
        max=a[i];
    }
}
console.log('1. Array =',a);
console.log("Max =", max)

// // 2. Өгөгдсөн Array - ийн хамгийн бага тоог хэвлэх.​​​​​​​​
//   (example: [1,2,3] --> 1)​​
let b=[6,9,2,4,10,1,7,30];
let min=b[0];
for(let i=0;i<b.length;i++){
    if(b[i]<min){
        min=b[i];
    }
}
console.log('2. Array =',b);
console.log("Min =", min)

// // ​3. Өгөгдсөн Array - г тэгш болон сондгойгоор ангилан 2 Array болго.​
// //   ( example: [1,2,3,4] --> const arrEven = [2,4] const arrOdd =[1,3])
let numbers=[1,2,3,4,5,6];
let even=[];
let odd=[];
let i=0
while(i<numbers.length){
    if(numbers[i]%2===0){
        even.push(numbers[i]);
    } else {
        odd.push(numbers[i]);
    }
    i++;
}
    console.log("3. Array =",numbers);
    console.log("Even Array =",even);
    console.log("Odd Array =",odd);

// 4. Өгөгдсөн тоо анхны эсэхийг олох
//    (example: 11 --> console.log("анхний тоо") )
let number= parseInt(prompt("Toogoo oruulna uu"));
let isPrime=false;
if(number===1){
    console.log("Anhnii too bish bn!");
} else if(number>1){
    for(let i=2;i<number;i++){
        if(number%1==0){
            isPrime=true;
            break;
        }
    }
   if (isPrime) {
        console.log('Anhnii too = ',number);
    } else {
        console.log( 'Anhnii too bish bn=',number);
    }
}
else{
    console.log("Anhnii too bish bn!!");
}
// // 5. Өгөгдсөн String -ийг эсрэгээг н болгож харуулах.
// //    (example: tur --> rut)
const s= "Anuka";
let rev="";
for(let i = s.length-1;i>-1;i--){
    rev += s[i];
} console.log(rev)

// // 6. Өгөгдсөн Array -ийн дундаж утгийг олох. 
// //   (example: [1,2,3] --> 2)
let f=[1,2,3,4,5,6,7];
let sum=0;
for (let i = 0;i<f.length;i++ ){
    sum +=f[i];
}
let avg=sum/f.length;
console.log(avg);

// // 7. Өгөгдсөн array -ийн бүх элэмэнт эерэг бол true, харин нэг болон түүнээс дээш элэмэнт н сөрөг false бол гэж хэвлэx. 
// //    (example: [1,2,3] --> true [1,-2, 3] --> false)
let j=[1,2,3,4,5,6,7];
let t=[];
for (let i=0; i<j.length;i++){
}

// // 8. Өгөгдсөн String -ийн бүх элэмэнтийг Array луу адил дараалалаар оруулаx. 
// //   (example: "tur" --> ["t","u","r"]).

let o= "anuka";
let sp=[];
for(let i=0;i<o.length;i++){
    o[i]+= o[i]
    sp.push(o[i])
    console.log(sp)
}