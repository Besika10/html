let words3 = [ 'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'Nullam', 'lectus', 'quam' ];

for(let i = 0; i < words3.length; i++){
  let len = 0;
  
  if (len % 2 === 1){
    console.log(words3[i].toUpperCase());
    console.log(len);
    len += 1;
  }
    console.log(words3[i]);
    console.log(len);
    len += 1;
}

// let words = ['Madrid', 'Rome', 'Berlin', 'Barcelona', 'Milan', 'Batumi'].map(word => word.toLowerCase());

// var str = 'm';

// function find(words, str) {

//   str = str.split('');
//   return words.filter(function(word) {

//     return str.every(function(char) {
//       return word.includes(char);
//     });
//   });
// }

// const output = find(words, str); 
// console.log(output);
let items = [12, 'Google', 32, null, undefined, 'yahoo', 0, 'bing']

let myMap = items.map(function(item){
  if(item == null){
    console.log(item);
  }
  else if (typeof(item) == String){
    console.log(item.toUpperCase);
  }
  else console.log(item * item);
})





let users = [
  {name: 'giorgi', age: 16},
  {name: 'levani', age: 90},
  {name: 'nino', age: 30},
  {name: 'otari', age: 11},
  {name: 'mari', age: 28}
]

let names = users.filter(ages => {
  if (ages.age > 18){
    return ages;
  }
}).map(item => {
  return item.name;
})

console.log(names);



let words = ['Madrid', 'Rome', 'Berlin', 'Barcelona', 'Milan', 'Batumi']

function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  })
}

console.log(filterItems(words, 'm'));


const filterItems1 = (arr, query) =>  arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1);

console.log(filterItems1(words, 'm'));


let names1 = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names1.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {})

console.log(countedNames);