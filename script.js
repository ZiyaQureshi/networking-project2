function showMessage() {
  const message = document.getElementById("message");
  message.textContent =
    "This project uses HTTPS, input sanitization, performance optimization, and traffic monitoring.";
}

function submitInput() {
  const input = document.getElementById("userInput").value;
  const cleanInput = DOMPurify.sanitize(input);

  const output = document.getElementById("output");

  if (cleanInput.trim() === "") {
    output.textContent = "Please enter a valid message.";
  } else {
    output.textContent = "Sanitized Output: " + cleanInput;
  }

  document.getElementById("userInput").value = "";
}
