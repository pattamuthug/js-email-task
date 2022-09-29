var mail = document.getElementById("mail");
var btn = document.getElementById("submit");
btn.addEventListener("click",get)
function get(){
    var email = mail.value;
    let res=email.replace(/[^A-Z,a-z]/g ,"")
    let num = email.replace(/[^0-9]/g,"")
    let spcl = email.replace(/[^@,.]/g,"")
    console.log(num);
console.log(res);
console.log(spcl);
}


