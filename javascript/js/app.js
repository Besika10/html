let test = 'geolab';

let user = {
    username: '...',
    email: '...'
}

// console.log(test[0])
// console.log(test.replace('geolab','grab'));
// console.log(test.charAt(3))



// numbers.forEach((item, index) => console.log(item,index))

// let result = numbers.filter((item) => item % 2 === 1).forEach(i => console.log(i))

// let results = numbers.map(item => item * item).sort((a, b) => b - a)

// console.log(results);

// let result = [];

// for(let i = 0; i < numbers.length; i++){
//     let number = numbers[i] * numbers[i];
//     result.push(number);
// }

// console.log(result);

function map(arr, callback){
    let result = [];
    arr.forEach(item => {
        result.push(callback(item));
    })

    return result;
}

// let finalResult = map(numbers, (item) => item * item);


// console.log(finalResult);

function filter(arr, callback){
    let result = [];
    arr.forEach(item => {
        if(callback(item)){
            result.push(item);
        }
    })
    return result;
}

// let finalResult = filter(numbers, (item) => item > 5);

// console.log(finalResult);

let numbers = [[1, 2, 3],[ 4, 5, 6, ]]

let finalArray = numbers.reduce((final, current) => {
    return final.concat(current);
}, []);

console.log(finalArray);

// let sum = numbers.reduce((total, current) => {
//     return total * current;
// });

// console.log(sum);