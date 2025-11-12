import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { sendMessageToChatAPI } from "../api/ChatService";
import {Trash2, X} from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [engineReady, setEngineReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [model, setModel] = useState("gemini");
  const [input, setInput] = useState("");

  useEffect(() => {
      // Initialize particles engine
      initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      }).then(() => setEngineReady(true));
    },[]);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatHistory");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  } , [messages]);

  const techBubbles = ["C#", "AWS", "React", "ML/AI"];

  async function handleSend() {
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages); 
    try {
      const response = await sendMessageToChatAPI(input, model);
      const botMessage = { role: "assistant", content: response.reply };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
      setInput("");
  }

  const handleClearChat = () => {
    setMessages([]);
    localStorage.removeItem("chatHistory");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glowing radial effect following the mouse */}
      <div
        className="absolute inset-0 opacity-75"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(105, 206, 250, 0.25), transparent 40%)`
        }}
      ></div>
      
      {/* Particle background */}
      {engineReady && (
        <Particles
          id="tsparticles"
          className="absolute inset-0"            
          options={{
            fullScreen: { enable: false },
            background: { value: "#38bdf8"  },
            particles: {
              number: { value: 80 },
              size: { value: 2 },
              type: "circle",
              move: { enable: true, speed: 0.8 },
              links: { enable: true, color: "#38bdf8" },
            },
            /*interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
              },
            },*/
          }}
        />
      )}

      <div className="relative text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-300">
          Software Developer
        </h2>

        <p className="text-lg sm:text-xl py-4 text-gray-300 max-w-xl">
          Hi, I’m Ramya 👋
          A Full Stack Developer passionate about building clean, scalable, and efficient web applications.
          I turn ideas into production-ready software using C#, React, and AWS - combining strong backend logic with modern interfaces.
        </p>

        <div className="flex flex-col items-center lg:space-y-6 mt-8">
          {/* Tech bubbles */}
          <div className="flex gap-4 flex-wrap justify-center lg:justify-end">
            {techBubbles.map((tech) => (
              <div
                key={tech}
                className={`w-20 h-20 rounded-full border-2 border-blue-400 flex items-center justify-center text-sm font-semibold text-white 
                bg-gradient-to-br ${tech} shadow-lg animate-bounce`}
                style={{ animationDelay: `0.3s` }}>
                {tech}
              </div>
            ))}
          </div>

          {/* Quick tagline box */}
          <div className="bg-slate-900/80 items-center border border-slate-700 rounded-2xl p-6 w-full max-w-sm text-left shadow">
            <h3 className="text-sm text-blue-300 font-semibold">What I do</h3>
            <p className="mt-2 text-sm text-gray-300">
              <li>Design and build full-stack web apps</li>
              <li>Integrate cloud services for speed and reliability</li>
              <li>Automate CI/CD pipelines for seamless deployment</li>
            </p>
          </div>
        </div>
      </div>
      <footer>
          {/* Floating chat button */}
        <div className="fixed bottom-6 right-10 z-20">
            <div className="relative">
                {/* Chat button */}
                <button className="flex items-center justify-center px-7 py-2 bg-slate-950 hover:bg-blue-600 text-white font-semibold rounded-full border-2 border-blue-400 shadow-lg transition"
                    onClick={() => setOpen(!open)}> Ask Ramya
                </button>

                {/* Ping indicator */}
                <span className="absolute top-4 left-3 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-400"></span>
                </span>
            </div>
        </div>
      </footer>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-100 h-96 bg-slate-900 text-white rounded-2xl shadow-lg border border-blue-400 flex flex-col overflow-hidden">
          <header className="flex justify-between items-center p-3 bg-blue-500 text-white">
            <span className="font-semibold">Chat with Ramya</span>
            <div className="flex items-center space-x-4">
              <button onClick={handleClearChat} title="Clear Chat"><Trash2 size={18} /></button>
              <button onClick={() => setOpen(false)}><X size={18} /></button>
            </div>
          </header>

          <div id="chat-body" className="flex-1 p-3 overflow-y-auto text-sm space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${msg.role === "user" ? "bg-blue-600 ml-auto text-right" : "bg-slate-700 text-left"}`}
                >
                {msg.content}
              </div>
            ))}
          </div>

           <div className="p-3 border-t border-slate-700 flex space-x-2">
                <select
                id="model-select"
                className="bg-slate-800 text-white text-xs rounded-lg px-2 py-1"
                value ={model}
                onChange={(e) => setModel(e.target.value)}
                >
                <option value="gemini">Gemini</option>
                <option value="groq">Groq</option>
                </select>
                <input
                id="user-input"
                className="flex-1 bg-slate-800 rounded-lg px-2 text-white text-sm focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(); // Call the same send function
                }}}
                placeholder="Type your question..."
                />
                <button
                onClick={handleSend}
                className="bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-600"
                >
                Send
                </button>
          </div>
        </div>
      )}
      
    </section>
  );
}
