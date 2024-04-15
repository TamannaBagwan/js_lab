// Program to find longest word in a given sentence ?
// function findLongestWord(sentence) {
//     let words = sentence.split(" ") ;
//     let longestWord = '' ;
//     let maxLength = 0 ;
//     for(let i=0;i<words.length;i++){
//         let word = words[i].replace(/[^a-zA-Z]/g,"")
//         if(word.length>maxLength){
//             maxLength = word.length ;
//             longestWord = word
//         }
//     }
//     return longestWord ;
// }
// let sentence = 'my name is Tamannaah' ;
// console.log(findLongestWord(sentence));


// 2. How to check whether a string is palindrome or not ?
// function isPalindrome(str){
//     let newStr = str.split('').reverse().join('') ;
//     return newStr == str? `${str} is palindrome` : `${str} is not palindrome` ;
// }
// console.log(isPalindrome("madam"));

// 3.Write a program to remove duplicates from an array ?
//  #1st way
// let arr = [1,2,1,2,4,6,2] 
// let result = new Set([...arr]) ;
// console.log(result);

// # 2nd way
// let arr = ['hi','hello','hi','hey','hey','bye'] ;
// let newArr = [] ;
// for(let i=0;i<arr.length;i++){
//         if(newArr.indexOf(arr[i])===-1){
//                 newArr.push(arr[i])
//         }
// }
// console.log(newArr);

// #3rd  way
// let arr = [10,20,10,20,40] ;
// let newArr = arr.filter((item,index)=>{
//     return  arr.indexOf(item)===index
// });
// console.log(newArr);


// #4th way
// function removeDuplicates(arr){
//     const uniqueMap = {} ;
//     arr.forEach(item => {
//         uniqueMap[item] = true;
//     });
//     return Object.keys(uniqueMap);
// }

// let arr = [1,1,5,7,13,] ;
// console.log(removeDuplicates(arr));


//4. Program to find Reverse of a string without using built-in method ?
// first way
// function reverseStr(str) {
//     let reversed = '';
//     for(let i=str.length-1;i>=0;i--){
//         reversed+=str[i]
//     }
//     return reversed;
// }
// console.log(reverseStr("hello"));


// 2nd way
// function toReverseStr(str){
//     let reversed = '' ;
//     for(let i=0;i<str.length;i++){
//         reversed = str[i] + reversed
//     }
//     return reversed;
// }
// console.log(toReverseStr('heyy'));


// 5. Find the max count of consecutive 1’s in an array ?
// function maxConsecutiveOnes(arr) {
//     let maxCount = 0;
//     let currentCount = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 1) {
//             currentCount++;
//             maxCount = Math.max(maxCount, currentCount);
//         } else {
//             currentCount = 0; 
//         }
//     }

//     return maxCount;
// }

// const array = [1, 1, 0, 1, 1, 1, 0, 2,2,2,2,2,2,2];
// const maxConsecutive = maxConsecutiveOnes(array);
// console.log("Max consecutive 1's:", maxConsecutive); 


//6 Find the factorial of given number ?
// function findFactorial(n) {
//     if (n == 0 || n == 1) {
//         return 1;
//     } else {
//         let result = 1;
//         for (let i = 2; i <= n; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }
// console.log(findFactorial(5)); 


//7.Write a JS function that takes an array of numbers and returns a new array with only the even numbers.
// function getEvenNumbers(arr) {
//     return arr.filter(num => num % 2 === 0);
// }

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 

// 8.Write a JavaScript function to check if a given number is prime.
// function isPrime(n){
//     if(n<=1){
//         return false
//     }
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(71));


// 9.  write a javascript function to count the occurrences of each character in the string.
// function countOccurrences(str){
//     let counts={} ;
//     for(let char of str){
//         if(counts[char]){
//             counts[char] +=1
//         }else{
//             counts[char] =1
//         }
//     }
//     return counts; 
// }
// console.log(countOccurrences('hello'))



 //10 Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] 
// function sortArray(arr1,arr2) {
//     let mergedArr = arr1.concat(arr2) ;
//     mergedArr.sort((a,b)=>a-b)
//     return mergedArr
// }
// console.log(sortArray([0,3,4,31],[4,6,30]));


// 11.Given two strings. Find if one string can be formed by rearranging the letters of other string.
// function canFormByRearranging(str1,str2){
//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');
//     return sortedStr1 === sortedStr2
// }
// console.log(canFormByRearranging('listen', 'silent'));


// 12.Write logic to get unique objects from below array ?
// function getUniqueObjects(arrOfObjects){
// let uniqueNames = new Set();
// let uniqueObjects = [];
// for(let obj of arrOfObjects){
//     if(!uniqueNames.has(obj.name)){
//         uniqueNames.add(obj.name)
//         uniqueObjects.push(obj)
//     }
// }
// return uniqueObjects
// }
// let arrOfObjects =[
//     {name : "farhan"} ,
//     {name : "atif"} ,
//     {name: "atif"} ,
//     {name : "sajal"}
// ]
// console.log(getUniqueObjects(arrOfObjects));


// 13. Write a JavaScript program to find the maximum number in an array.
// function findMaxNum(arr) {
//     if(arr.length==0){
//         return undefined
//     }
//     let maxNum = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>maxNum){
//             maxNum = arr[i]
//         }
//     }
//     return maxNum
// }
// console.log(findMaxNum([2,45,12,56]));


// 14.Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
// function getEvenNums(arr){
//     return arr.filter((num)=> num%2==0) 
// }
// console.log(getEvenNums([1,34,5,12,7]));


// 15 Write a javascript function that sorts an array of numbers in ascending order.
// function sortAscending(arr) {
//     const n = arr.length ;
//     for(let i=0;i<n-1;i++){
//         for(let j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1] ;
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }
// console.log(sortAscending([7,1,3,9,5]));


// 16  Write a javascript function that sorts an array of numbers in ascending order.
// function sortDescending(arr) {
//     let n = arr.length ;
//     for(let i=0;i<n-1;i++){
//         for(let j=0;j<n-i-1;j++){
//             if(arr[j]<arr[j+1]){
//                 let temp = arr[j] ;
//                 arr[j] = arr[j+1] ;
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }
// console.log(sortDescending([2,4,68,13,5]));


// 17 function that flattens a nested array into a single-dimensional array.
// function flattenArr(arr) {
//     let flattened = [] ;
//     for(let num of arr){
//         if(Array.isArray(num)){
//             flattened.push(...flattenArr(num))
//         }else{
//             flattened.push(num)
//         }
//     }
//     return flattened
// }
// console.log(flattenArr( [[1, 2, [3]], 4, [5, [6, 7]]]));