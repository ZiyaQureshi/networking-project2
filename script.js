document.addEventListener("DOMContentLoaded", function () {
  const learnBtn = document.getElementById("learnBtn");
  const submitBtn = document.getElementById("submitBtn");
  const clearBtn = document.getElementById("clearBtn");

  learnBtn.addEventListener("click", showMessage);
  submitBtn.addEventListener("click", submitInput);
  clearBtn.addEventListener("click", clearMessages);

  displayMessages();
});

function showMessage() {
  document.getElementById("message").textContent =
    "This website uses HTTPS, input sanitization, lazy loading, GitHub Pages deployment, and LocalStorage.";
}

function submitInput() {
  const inputBox = document.getElementById("userInput");
  const input = inputBox.value;

  const cleanInput = DOMPurify.sanitize(input);

  if (cleanInput.trim() === "") {
    document.getElementById("output").innerHTML = "Please enter a message first.";
    return;
  }

  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.push(cleanInput);
  localStorage.setItem("messages", JSON.stringify(messages));

  inputBox.value = "";
  displayMessages();
}

function displayMessages() {
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  const output = document.getElementById("output");

  if (messages.length === 0) {
    output.innerHTML = "No messages yet.";
    return;
  }

  output.innerHTML = "<strong>Stored Messages:</strong><br><br>";

  messages.forEach(function (msg, index) {
    output.innerHTML += `${index + 1}. ${DOMPurify.sanitize(msg)}<br>`;
  });
}

function clearMessages() {
  localStorage.removeItem("messages");
  displayMessages();
}
