function showMessage() {
  document.getElementById("message").textContent =
    "Secure, optimized, and monitored website.";
}

function submitInput() {
  const input = document.getElementById("userInput").value;
  const cleanInput = DOMPurify.sanitize(input);

  if (cleanInput.trim() === "") return;

  let messages = JSON.parse(localStorage.getItem("messages")) || [];

  messages.push(cleanInput);

  localStorage.setItem("messages", JSON.stringify(messages));

  document.getElementById("userInput").value = "";

  displayMessages();
}

function displayMessages() {
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  const output = document.getElementById("output");

  if (messages.length === 0) {
    output.innerHTML = "No messages yet.";
    return;
  }

  output.innerHTML = "<b>Stored Messages:</b><br>";

  messages.forEach((msg, i) => {
    output.innerHTML += (i + 1) + ". " + msg + "<br>";
  });
}

function clearMessages() {
  localStorage.removeItem("messages");
  displayMessages();
}

window.onload = displayMessages;
