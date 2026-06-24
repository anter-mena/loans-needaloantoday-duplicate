"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const quickReplies = [
  "How do I apply for a loan?",
  "What are your interest rates?",
  "How fast can I get funded?",
  "What documents do I need?",
];

const responses = {
  apply: [
    "Great question! Applying is simple - just click 'Apply Now' and fill out our quick 3-minute form. You'll get matched with lenders instantly!",
    "Easy! Hit the 'Apply Now' button, complete our short application, and we'll connect you with the best lenders for your situation.",
    "To apply, click 'Apply Now' at the top of the page. Our streamlined process takes just a few minutes and you'll see your offers right away!",
  ],
  rates: [
    "Interest rates vary by lender and your credit profile, typically ranging from 5.99% to 35.99% APR. Apply to see personalized rates with no credit impact!",
    "Rates depend on your creditworthiness and chosen lender. Most of our partners offer rates between 5.99% - 35.99% APR. Check your rate in minutes!",
    "Our network offers competitive rates from 5.99% to 35.99% APR based on your credit score and financial situation. Get your personalized rate now!",
  ],
  funding: [
    "Many of our lenders can fund you within 24 hours of approval! Some even offer same-day funding if you apply early in the day.",
    "Fast! Most approved applicants receive funds within 1 business day. Some lenders even offer same-day deposits!",
    "You could get funded as soon as the next business day after approval. Some lenders offer same-day funding for qualifying applicants!",
  ],
  documents: [
    "You'll typically need: valid ID, proof of income (pay stubs or bank statements), and your banking information. It's that simple!",
    "Most lenders require a government-issued ID, recent pay stubs or bank statements, and your bank account details. Have these ready to speed up the process!",
    "Basic documents needed: photo ID, proof of income (last 2-3 pay stubs), and your bank account info. Some lenders may ask for additional verification.",
  ],
  default: [
    "I'm here to help! You can ask me about our application process, interest rates, funding times, or required documents. What would you like to know?",
    "Happy to assist! Feel free to ask about applying for a loan, our rates, how quickly you can get funded, or what documents you'll need.",
    "I can help with questions about loan applications, rates, funding speed, or requirements. What information are you looking for?",
  ],
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const hasInitialized = useRef(false);

  // Initialize greeting message
  useEffect(() => {
    if (!hasInitialized.current) {
      setMessages([
        {
          id: 1,
          text: "Hello! I'm here to help you find the perfect loan. How can I assist you today?",
          isBot: true,
          timestamp: new Date(),
        },
      ]);
      hasInitialized.current = true;
    }
  }, []);

  // Function to get a random response variation
  const getRandomResponse = (questionText: string) => {
    const lowerText = questionText.toLowerCase().trim();

    let responseArray: string[];

    if (lowerText.includes('apply') || lowerText.includes('application')) {
      responseArray = responses.apply;
    } else if (lowerText.includes('interest') || lowerText.includes('rate')) {
      responseArray = responses.rates;
    } else if (lowerText.includes('fast') || lowerText.includes('fund') || lowerText.includes('quick')) {
      responseArray = responses.funding;
    } else if (lowerText.includes('document') || lowerText.includes('need')) {
      responseArray = responses.documents;
    } else {
      responseArray = responses.default;
    }

    // Get random response from array
    const randomIndex = Math.floor(Math.random() * responseArray.length);
    return responseArray[randomIndex];
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: text.trim(),
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response with variation
    setTimeout(() => {
      const response = getRandomResponse(text);

      const botMessage = {
        id: messages.length + 2,
        text: response,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-toggle-btn fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group"
        style={{ backgroundColor: 'hsl(160, 84%, 39%)' }}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" style={{ color: '#FFFFFF' }} />
        ) : (
          <MessageCircle className="w-6 h-6" style={{ color: '#FFFFFF' }} />
        )}
        {!isOpen && (
          <span
            className="notification-dot absolute -top-1 -right-1 w-4 h-4 rounded-full animate-pulse pointer-events-none"
            style={{ backgroundColor: '#EF4444' }}
          />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] rounded-2xl shadow-2xl border overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300"
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: 'hsl(214, 20%, 90%)',
            fontFamily: "var(--font-dm-sans), sans-serif"
          }}
        >
          {/* Header */}
          <div
            className="p-4 flex items-center gap-3"
            style={{ backgroundColor: 'hsl(160, 84%, 39%)' }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              <Bot className="w-5 h-5" style={{ color: '#FFFFFF' }} />
            </div>
            <div>
              <h3
                className="font-semibold"
                style={{
                  color: '#FFFFFF',
                  fontFamily: "var(--font-space-grotesk), sans-serif"
                }}
              >
                NeedALoanToday Assistant
              </h3>
              <p className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Usually replies instantly
              </p>
            </div>
          </div>

          {/* Messages */}
          <div
            className="h-80 overflow-y-auto p-4 space-y-4"
            style={{ backgroundColor: 'hsl(210, 25%, 97%)' }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.isBot ? "" : "flex-row-reverse"}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0`}
                  style={{
                    backgroundColor: message.isBot ? 'hsl(160, 84%, 39%, 0.1)' : 'hsl(214, 20%, 90%)'
                  }}
                >
                  {message.isBot ? (
                    <Bot className="w-4 h-4" style={{ color: 'hsl(160, 84%, 39%)' }} />
                  ) : (
                    <User className="w-4 h-4" style={{ color: 'hsl(215, 14%, 46%)' }} />
                  )}
                </div>
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                    message.isBot ? "rounded-tl-none" : "rounded-tr-none"
                  }`}
                  style={{
                    backgroundColor: message.isBot ? '#FFFFFF' : 'hsl(160, 84%, 39%)',
                    color: message.isBot ? 'hsl(215, 28%, 12%)' : '#FFFFFF',
                    border: message.isBot ? '1px solid hsl(214, 20%, 90%)' : 'none'
                  }}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'hsl(160, 84%, 39%, 0.1)' }}
                >
                  <Bot className="w-4 h-4" style={{ color: 'hsl(160, 84%, 39%)' }} />
                </div>
                <div
                  className="rounded-2xl rounded-tl-none px-4 py-3 border"
                  style={{ backgroundColor: '#FFFFFF', borderColor: 'hsl(214, 20%, 90%)' }}
                >
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'hsl(215, 14%, 46%)', animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'hsl(215, 14%, 46%)', animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'hsl(215, 14%, 46%)', animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          <div
            className="px-4 py-2 border-t"
            style={{ backgroundColor: '#FFFFFF', borderColor: 'hsl(214, 20%, 90%)' }}
          >
            <p className="text-xs mb-2" style={{ color: 'hsl(215, 14%, 46%)' }}>
              Quick questions:
            </p>
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="quick-reply-btn text-xs px-3 py-1.5 rounded-full transition-colors"
                  style={{
                    backgroundColor: 'hsl(210, 25%, 97%)',
                    color: 'hsl(215, 28%, 12%)'
                  }}
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div
            className="p-4 border-t"
            style={{ backgroundColor: '#FFFFFF', borderColor: 'hsl(214, 20%, 90%)' }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="flex gap-2"
            >
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 h-10 px-4 rounded-full border transition-colors focus:outline-none"
                style={{
                  backgroundColor: 'hsl(210, 25%, 97%)',
                  borderColor: 'hsl(214, 20%, 90%)',
                  color: 'hsl(215, 28%, 12%)',
                  fontFamily: "var(--font-dm-sans), sans-serif"
                }}
              />

              <button
                type="submit"
                className="h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                disabled={!inputValue.trim()}
                style={{
                  backgroundColor: inputValue.trim() ? 'hsl(160, 84%, 39%)' : 'hsl(214, 20%, 90%)',
                  color: inputValue.trim() ? '#FFFFFF' : 'hsl(215, 14%, 46%)'
                }}
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
      <style jsx>{`
        .chat-toggle-btn:hover {
          background-color: hsl(160, 84%, 35%) !important;
        }
        .quick-reply-btn:hover {
          background-color: hsl(160, 84%, 39%, 0.1) !important;
        }
      `}</style>
    </>
  );
};

export default ChatBot;
