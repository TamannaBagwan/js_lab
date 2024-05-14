
//reference copy=>changes made to reference obj ,it will also affect the original
let originalObj ={
    name : "Tom" 
}
let referenceCopy = originalObj ;
referenceCopy.name = "Jerry" ; 
console.log('reference copy',referenceCopy);
console.log('original obj',originalObj);



//shallow copy
let originalArr = [1,2,3,4] ;
let shallowCopy = [...originalArr] 
shallowCopy.push(10)
console.log('shallow copy' , shallowCopy);
console.log('original arr' , originalArr);