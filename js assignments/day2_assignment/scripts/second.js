console.log("functions of string and array");
let a ="hai i am a string content";
console.log(a);
// to find length of a string
console.log("the length of the string is:",a.length);
// to find index of particular word in that string
console.log("the index of i is :",a.indexOf("i"));
// to find the last index of the specified value
console.log("the last index of i is:",a.lastIndexOf("i"));
// to find element after  specified position
console.log("the another index of i is :",a.indexOf("i",3));
// difference between search and index is we cannot find another occurence of that elemtn in search. but we can do it in index 
// searching for particular element
console.log("the search of word 'am' is",a.search("am"));
// slicing of the string gives elements within the values. 
console.log("the slicing of 4-13 is:",a.slice(4,13));
// from 4 it will print
console.log("the slicing of 4 is:",a.slice(4));
// last 4 element will get printed
console.log("the slicing of -4 is:",a.slice(-4));
//  from -2 to -4 it willl get printed
console.log("the slicing of -4-2 is:",a.slice(-4,-2));
// print content betweeen 3 and 15
console.log("the substring",a.substr(3,15));
console.log("the substring -3 is:",a.substr(-3));

console.log("ARRAY FUNCTIONS");

let b=["audi","bmw","skoda","benz"];
console.log("the array elements are:",b);
// pop will delete the last element
console.log("the pooped element is :",b.pop());
// push will add the element to the existing array
console.log("the number of added element is :",b.push('benz'));
// shift is used to remove first element
console.log("the removed first element is:",b.shift());
// unshift will add the new element to the list at first position
console.log("the element added to the array is:",b.unshift("renault"));
console.log(b);
