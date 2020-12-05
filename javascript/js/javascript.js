// let string = 'besikaaaa she kaziolooo';
// let number = 65123873526;
// let boolean = true;
// let n = null;
// let u;

// let users = ['temo','levani','beso'];

// let x = 123;
// let y = '123';

// console.log(x + y)

// let numbers1 = [ 3, 4, 5, 6, 7, 34, 6]

// let numbers = [[ 2, 3, 4, 6], [ 7, 10, 32 ,34]]

// for( let i=0;i<numbers.length;i++){
//     let number = numbers[i];

//     for (let x = 0; x < number.length; x++){
//         if(number[x] % 2 === 1){
//             continue;
//         }
//         console.log(number[x])
//     }
// }
// let i = 0;

// while  (i < numbers.length){
//     if (numbers[i] > 10)
//      {
//          break;
//      }
//      else console.log(numbers[i]);
//      i++;
// }

// let user = {
//     name: 'giorgi',
//     age: 19,
//     email: 'besodvalishvili1234@gmail.com',
//     languages: ['javascript','react','c#']
// };
// console.log(user['languages'][2])



// let total = sum(2, 3, 124, 1214, 142);
// console.log(total);
// sum(34, 56, 1345, 1463);
// sum(3432, 256, 12, 1214, 124);
// sum(32354, 56432, 135345);

// let x = 123;

// function sum(x, y, ...numbers){
//     let newNum = x + y;
//     for(i = 0;i < numbers.length; i++){
//         newNum += numbers[i];
//     }
//     return newNum;
// }

// console.log(x);
// function sendemail( subject, text){
//     console.log(subject);
//     console.log(text);
// }
// sendemail('email text', 'hello world')
// let x;

// if (true){
//     x = 123;
// }
// console.log(x);


// function sum(x,z){
//     let y = x + z;
//     console.log(y);
// }


// function outside(x){
//     return function inside(y){
//         return x + y;
//     }
// }
// let f = outside(3);
// let result = f(124309);
// console.log(result);

// let x = 123;

// function logx(){
//     let x = 222;
//     console.log(x);
// }

// logx();

// function outside(x){
//     function inside(y){
//         return x + y;
//         }
//     }
//     return inside;
// }

// let f1 = outside(23);
// let f2 = outside(345);

// console.log(f1(23)(2143));
// console.log(f2(234));


let arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];

for (let i = 0; i < arr.length;i++){
    if (arr[i].length >= 5)
    {
        console.log(arr[i])
    }
}


let arr1 = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];

for (let i = 0; i < arr1.length; i++){
    let number = arr1[i];
    for ( let j = 0; j < number.length; j++){
        if ( number[j] > 0){
            console.log(number[j]);
        }
    }
}


function getMax(...numbers){
    let ans = 0;
    for (let i = 0; i < numbers.length; i++){
       if (numbers[i] > ans){
           ans = numbers[i];
       }
       else continue;
    }
    console.log(ans);
}

getMax(4,1324,352,433);



let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isLoggedIn: true
  }

  function printName(x, y){
    if (user.isLoggedIn = false){
        return false;
    }
    else return x + ' ' + y;
  }

let name = printName(user.firstname,user.lastname);
console.log(name);

let arr2 = [32, 10, 'foo', false, 30, null, '40', '50', 100];

for (let i = 0; i < arr2.length; i++){

    if (arr2[i] % 5 === 0 && typeof arr2[i] == 'number'){
        console.log(arr2[i]);
    }
}