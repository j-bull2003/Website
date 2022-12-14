//Javascript(interactive)


//Pretrieves the input the user put in for their name
function myFunction(){
  let userInput = document.querySelector("#userInput");
  let message = document.querySelector("#message");

  //Returns the 'name' value that the user typed in for their name with a message
  message.innerHTML = "Welcome to my website, " + userInput.value + "! " + "My name is Jessica Bull and I am an aspiring software engineer, keep reading to learn more about me:";
}