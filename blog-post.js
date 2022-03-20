var button = document.createElement("button");
button.innerHTML = "Connect with Phil on LinkedIn";

var script = document.getElementsByTagName("script")[0];
script.appendChild(button);

button.addEventListener ("click", function() {  
  link("https://www.linkedin.com/in/philgarbrecht/");
});
