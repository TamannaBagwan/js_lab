let originalObj = {
    name : 'Rahul' ,
    address : {
        city : 'Pune' ,
        state : 'maharashtra'
    }
} ;

let deepCopy = JSON.parse(JSON.stringify(originalObj)) ;
deepCopy.name = 'Namita' ;
deepCopy.address.city = 'mumbai'
console.log('originalObj' ,originalObj);
console.log('deepCopy',deepCopy);
