export async function sendMessageToChatAPI(message, model) {
    const BASE_URL = import.meta.env.VITE_BACKEND_URL;
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
  const data = await response.json();
  if (data.action === "open_presentation") {
        window.open(
            "https://docs.google.com/presentation/d/11rOOG5A2OZ37F8v3_9Ll9KyK-lDwNuDWdEaI9eRZ-Fk/edit?slide=id.g3c5f8273fc1_0_143#slide=id.g3c5f8273fc1_0_143",
            "_blank"
        );
        return { reply: "Opening presentation..." };
    }

  return { reply: data.reply };
}
