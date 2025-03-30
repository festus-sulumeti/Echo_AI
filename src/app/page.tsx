"use client";

import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "User", text: input }]);
      setInput("");
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "AI", text: "This is a simulated AI response." },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="bg-white p-2">
        <div className="flex lg:flex-1 items-center justify-center">
          <a href="#" className="m-1.5">
            <span className="sr-only">Echo Ai Application</span>
            <img
              className="h-8 w-auto"
              src="/logo.png"
              alt="Echo Ai Application Logo"
            />
          </a>
          <h1 className="text-2xl font-bold text-gray-900">Echo Ai Application</h1>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded ${
                message.sender === "User"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-300 text-black self-start"
              }`}
            >
              <strong>{message.sender}:</strong> {message.text}
            </div>
          ))}
        </div>
      </main>
      <footer className="p-4 bg-white flex items-center">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded p-2 mr-2"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSend}
        >
          Send
        </button>
      </footer>
    </div>
  );
}