"use client";
import React, { useState, useRef, useEffect, useContext } from "react";
import styles from "./Chat.module.css";

// LoomConfigContext for font family and future config
export interface LoomConfig {
  fontFamily?: string;
}
export const LoomConfigContext = React.createContext<LoomConfig>({});
export const useLoomConfig = () => useContext(LoomConfigContext);

export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  avatar?: string;
  name?: string;
}

export interface ChatProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
  showAvatars?: boolean;
  showTimestamps?: boolean;
  maxHeight?: string;
  variant?: "default" | "compact" | "minimal";
  className?: string;
  customColor?: string;
  customBorder?: string;
  botName?: string;
  userName?: string;
  botAvatar?: string;
  userAvatar?: string;
}

const variantStyles: Record<string, string> = {
  default: styles.default || "",
  compact: styles.compact || "",
  minimal: styles.minimal || "",
};

export const Chat: React.FC<ChatProps> = ({
  messages,
  onSendMessage,
  placeholder = "Type your message...",
  disabled = false,
  showAvatars = true,
  showTimestamps = true,
  maxHeight = "400px",
  variant = "default",
  className,
  customColor,
  customBorder,
  botName = "Bot",
  userName = "You",
  botAvatar = "🤖",
  userAvatar = "👤",
}) => {
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { fontFamily } = useLoomConfig();
  const effectiveFontFamily = fontFamily || "var(--loom-font-family)";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !disabled) {
      onSendMessage(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const chatClass = [
    styles.chat,
    variantStyles[variant],
    className || "",
  ].filter(Boolean).join(" ");

  return (
    <div
      className={chatClass}
      style={{
        fontFamily: effectiveFontFamily,
        maxHeight,
        borderColor: customBorder,
      }}
    >
      {/* Messages Container */}
      <div className={styles.messagesContainer}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${styles.message} ${styles[message.sender]}`}
          >
            {showAvatars && (
              <div className={styles.avatar}>
                {message.avatar || (message.sender === "bot" ? botAvatar : userAvatar)}
              </div>
            )}
            
            <div className={styles.messageContent}>
              <div className={styles.messageHeader}>
                <span className={styles.senderName}>
                  {message.name || (message.sender === "bot" ? botName : userName)}
                </span>
                {showTimestamps && (
                  <span className={styles.timestamp}>
                    {formatTime(message.timestamp)}
                  </span>
                )}
              </div>
              
              <div
                className={styles.messageText}
                style={{ color: customColor }}
              >
                {message.text}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <div className={styles.inputContainer}>
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            disabled={disabled}
            className={styles.messageInput}
            style={{
              borderColor: customBorder,
              color: customColor,
            }}
            rows={1}
          />
          <button
            type="submit"
            disabled={disabled || !inputValue.trim()}
            className={styles.sendButton}
            style={{
              backgroundColor: customColor,
              borderColor: customBorder,
            }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};