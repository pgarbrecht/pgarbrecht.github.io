var button = document.createElement("button");
button.innerHTML = "Connect with Phil on LinkedIn";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {  
  link("https://www.linkedin.com/in/philgarbrecht/");
});
