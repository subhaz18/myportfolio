function sendmail(){
  let parms={
    name : document.getElementById("firstname").value,
    lname : document.getElementById("lastname").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value

  }
  console.log(parms);
  emailjs.send("service_yfx1cth","template_wab7625",parms).then(alert("Email sent !!"))

}