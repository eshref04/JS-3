// ! TASK 1:Prompt vasitesile daxil olunmush ededin faktorialini tapin

// let eded= parseInt(prompt("eded daxil et..."))
// let umumi=1

// if (eded==0 || eded<0) {
//     console.log("normal yazzz");
// } 
// else{
//     for (let i = 1; i <= eded; i++) {
//         umumi*=i
//         }

//         console.log(umumi);
// }


// ? TASK 2:Verilmish arrayde en boyuk ededle,en kicik ededin yerini deyishen alqoritm yazin.

// let arr = [2,4,6,7,10,12,58,9]

// let kicik = 0;
// let boyuk = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[kicik]) {
//         kicik = i;
//     }
//     if (arr[i] > arr[boyuk]) {
//         boyuk = i;
//     }
// }

// let num = arr[kicik];
// arr[kicik] = arr[boyuk];
// arr[boyuk] = num;

// console.log(arr.join(", "));


// ! TASK:3 Verilmiş Arraydə tək elementlerden ən böyüyünü tapan alqoritm yazin.

// let arr=[2,4,6,9,45,78,6,3];
// let boyuk=0;

// for (let i= 0; i<arr.length; i++) {
//     if (arr[i]%2==1) {
//        if(arr[i]>boyuk){
//           boyuk=arr[i]
         
//        }
//     }
    
// }
// console.log(boyuk);



// ? TASK:4 Bir ölçülü massivin minimum və maksimum elementlərinin ədədi ortasını tapan proqram tərtib edin.

// let arr=[2,4,6,9,45,78,6,3];

// let kicik = arr[0];
// let boyuk = arr[0];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < kicik) {
//         kicik = arr[i];
//     }
//     if (arr[i] > boyuk) {
//         boyuk = arr[i];
//     }
// }

// result=(kicik+boyuk)/2

// console.log(result);


// ! TASK:5 arrayin elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə qalan elementlərin cəmini tapan function

let arr = [4, 7, 2, 9, 1, 6];


let boyuk = arr[0];
let kicik = arr[0];
let cem = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < kicik) {
        kicik = arr[i];
    }
    if (arr[i] > boyuk) {
        boyuk = arr[i];
    }
    cem += arr[i];
}

let result = cem - kicik - boyuk;

console.log(result);
