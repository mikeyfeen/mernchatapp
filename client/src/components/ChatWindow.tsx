import React from "react";
import ChatBubble from "./ChatBubble";
import "./chatwindow.css";

const ChatWindow = () => {
    let messages = [
        { message: "Hello", isMe: true },
        { message: "Hi", isMe: false },
    ];
    return (
        <div className="chat-window">
            <div className="sidebar">
                <button className="self-center new-chat">+</button>
                <a href="#default" className="active">
                    Chat #1
                </a>
                <a href="#default">Chat #2</a>
                <a href="#default">Chat #3</a>
            </div>
            <div className="chat">
                <ul>
                    {messages.map((message, index) =>
                        message.isMe ? (
                            <li className="outgoing">
                                <ChatBubble
                                    key={index}
                                    message={message.message}
                                    isMe={message.isMe}
                                />
                            </li>
                        ) : (
                            <li className="incoming">
                                <ChatBubble
                                    key={index}
                                    message={message.message}
                                    isMe={message.isMe}
                                />
                            </li>
                        )
                    )}
                </ul>
            </div>

            <div className="message-input">
                <textarea placeholder="Type message..." />
                <button>Send</button>
            </div>
        </div>
    );
};

export default ChatWindow;
