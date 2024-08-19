function sendmail(){

   const name = document.getElementById("firstname").value
   const lname = document.getElementById("lastname").value
   const email = document.getElementById("email").value
   const subject = document.getElementById("subject").value
  const message = document.getElementById("message").value

  emailjs.send("service_yfx1cth","template_wab7625",{
    name: "subhash",
    lname: "p",
    email: "abc@hjghj",
    subject: "fe",
    message: "hello",
    reply_to: "psubhash@gmail.com"
    }).then(alert("Email sent !!"))

}