let arr1=[1,3,2]; 
let arr2=[5,4,6];
let arr3=arr1.concat(arr2);
console.log(arr3);

arr3.splice(2,2);
console.log(arr3);

arr3.sort();
console.log(arr3);

console.log(arr1.includes(3));

console.log(arr3.indexOf(4));