export async function sendMessageToChatAPI(message, model) {
    const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, model }),
    });
    if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}
