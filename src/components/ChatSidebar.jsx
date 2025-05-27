"use client";

import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ChatSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;

        // Add user message to chat
        const userMessage = { role: "user", content: inputMessage };
        setMessages((prev) => [...prev, userMessage]);
        setInputMessage("");
        setIsLoading(true);

        try {
            // Call your API endpoint that integrates with ChatGPT
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: inputMessage }),
            });

            const data = await response.json();

            // Add AI response to chat
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: data.response },
            ]);
        } catch (error) {
            console.error("Error:", error);
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Sorry, I encountered an error. Please try again.",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chat Icon Button */}
            <Button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 rounded-full w-12 h-12 shadow-lg"
            >
                <MessageSquare className="h-6 w-6" />
            </Button>

            {/* Sidebar */}
            <div
                className={`fixed right-0 top-0 h-full z-50 w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold">Chat Assistant</h2>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(false)}
                    >
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Messages */}
                <ScrollArea className="h-[calc(100vh-8rem)] p-4">
                    <div className="space-y-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${
                                    message.role === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                }`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-lg p-3 ${
                                        message.role === "user"
                                            ? "bg-black text-white"
                                            : "bg-gray-100"
                                    }`}
                                >
                                    {message.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 rounded-lg p-3">
                                    Thinking...
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>

                {/* Input */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
                    <div className="flex gap-2">
                        <Input
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={(e) =>
                                e.key === "Enter" && handleSendMessage()
                            }
                            placeholder="Type your message..."
                            className="flex-1"
                        />
                        <Button
                            onClick={handleSendMessage}
                            disabled={isLoading}
                        >
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
