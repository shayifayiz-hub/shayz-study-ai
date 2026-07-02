// =========================
// Chat Controller
// =========================

const sendBtn = document.getElementById("sendBtn");
const questionBox = document.getElementById("questionBox");
const messages = document.getElementById("messages");

function sendMessage() {

    const question = questionBox.value.trim();

    if (question === "") {
        return;
    }

    // User message
    const userMessage = document.createElement("div");
    userMessage.className = "userMessage";
    userMessage.innerHTML = "👤 " + question;

    messages.appendChild(userMessage);

    // Demo AI reply
    const aiMessage = document.createElement("div");
    aiMessage.className = "aiMessage";
    aiMessage.innerHTML =
        "🤖 This is a demo response.<br>Later we'll connect a real AI.";

    messages.appendChild(aiMessage);

    questionBox.value = "";

    messages.scrollTop = messages.scrollHeight;
}

sendBtn.addEventListener("click", sendMessage);

questionBox.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});