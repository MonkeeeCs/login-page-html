function login() {
  var user = document.getElementById("user")
  var pass = document.getElementById("pass")
  if (user.value === "Monkeee") {
    console.log(user.value)
    if (pass.value !== "example") {
      alert("Wrong Username or password!")
    }
    if (pass.value === "example") {
      console.log(pass.value)
      alert("You have Loggged in!");
      console.log(user.value + " has logged in!")
      window.location.replace("./login.html")
    }
  }
  else if (user.value !== "Monkeee") {
  alert("Wrong Username or password!")  
  }
  else if (pass.value !== "example") {
  alert("Wrong Password or password")  
  }
}