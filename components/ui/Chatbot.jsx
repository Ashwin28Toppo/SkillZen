"use client";
import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChatbot = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true); // Start typing indicator

    const response = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await response.json();

    const botMessage = { role: "bot", content: data.reply };
    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false); // Stop typing indicator
  };

  // Auto-scroll to bottom on new message or typing
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        💬
      </button>

      {/* Chat Window with Slide Animation */}
      <div
        className={`fixed bottom-6 right-6 text-black w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transform transition-all duration-500 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex justify-between items-center font-bold">
          SkillZen AI Chat
          <button onClick={toggleChatbot} className="text-white hover:text-gray-300">
            ✖
          </button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto space-y-3 custom-scrollbar">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-xl text-sm max-w-[80%] ${
                msg.role === "user"
                  ? "bg-blue-100 ml-auto text-right"
                  : "bg-gray-100 mr-auto text-left"
              }`}
            >
              {msg.content}
            </div>
          ))}
          {isTyping && (
            <div className="p-2 rounded-xl text-sm max-w-[80%] bg-gray-100 mr-auto text-left animate-pulse">
              Thinking<span className="animate-dots">...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-3 flex border-t">
          <input
            className="flex-1 p-2 border rounded-l-full focus:outline-none focus:ring-2 bg-gray-800 text-white focus:ring-blue-300"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 rounded-r-full hover:bg-blue-700 transition"
          >
            ➤
          </button>
        </div>
      </div>
    </>
  );
}

