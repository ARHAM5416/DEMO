function login(form){
 if(form.logemail.value == "admin@gmail.com" && form.logpass.value == "123") {
    window.open("https://www.youraddress.com")
  }
 else {
   alert("Error Password or Username")/*displays error message*/
  }
}