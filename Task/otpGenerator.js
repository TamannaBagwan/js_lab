
function generateOtp(){
    let otpLength = 4 ;
    let otp ='' ;
    for(let i=0;i<otpLength;i++){
        otp += Math.floor(Math.random()*9)
    }
   return otp
}
console.log(generateOtp());