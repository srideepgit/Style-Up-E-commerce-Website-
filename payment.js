document.querySelector("form").addEventListener("submit",goForOTP)


function goForOTP(event){
    event.preventDefault();
   //  console.log(event)
   let usrCardNo=document.querySelector("#CardNo").value;
   let usrName=document.querySelector("#NameOnCard").value;
   let usrCVV=document.querySelector("#Cvv").value;
   let usrDOE=document.querySelector("#Doe").value;
   // let Otp=document.createElement("div");
   if(usrCardNo==123456781234 && usrCVV==123  ){
       
       alert("Authentification Successful !")
       window.location.href="OTP.html"
          
   }
   else{
       alert("WRONG CREDENTIALS!")
       window.location.reload();
   }
}