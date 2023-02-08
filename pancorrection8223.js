function correctionform() {
   
    let sname = document.getElementById('lastname').value
    let frname = document.getElementById('fristname').value
    let mname = document.getElementById('middlename').value
    let dob = document.getElementById('dob').value
    let email = document.getElementById('email').value
    let number = document.getElementById('number').value
   


    if (sname === ""){
        document.getElementById('snamemessage').innerHTML = "please enter your surname"
    }
    if (frname === ""){
        document.getElementById('frnamemessage').innerHTML = "please enter your fristname"
    }
    if (mname === ""){
        document.getElementById('mnamemessage').innerHTML = "please enter your middlename"
    }
    if (dob === ""){
        document.getElementById('dobmessage').innerHTML = "please enter your DOB"
    }
    if (email === ""){
        document.getElementById('emailmessage').innerHTML = "please enter your Email"
    }
    if (number === ""){
        document.getElementById('numbermessage').innerHTML = "please enter your numbermessage"
    }
    return false
}