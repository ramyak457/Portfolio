export async function sendMessageToChatAPI(message, model) {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const response = await fetch(`${BASE_URL}/chat`, {
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
