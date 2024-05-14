// -> Logical operators (&&, || , !)

let age = 20;
let isAdult = age >=18 ;
let hasTicket = true ;
if(isAdult && hasTicket){
    console.log("You can enter the movie");
}
else{
    console.log("Access denied.");
}


let hasDiscountCode = true ;
let isMember = false ;
if (hasDiscountCode || isMember) {
    console.log("You get a discount!");
  } else {
    console.log("No discount available.");
  }



  let isWeekend = false ;
  if(!isWeekend){
    console.log("It's a weekday.");
  }else{
    console.log("It's the weekend!");
  }
