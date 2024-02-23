import React from "react";
import "./chatbubble.css";

const ChatBubble = (props) => {
    return (
        <>
            {props.isMe ? (
                <div className="chat-bubble chat-bubble--me">
                    <p>{props.message}</p>
                </div>
            ) : (
                <div className="chat-bubble chat-bubble--other">
                    <p>{props.message}</p>
                </div>
            )}
        </>
    );
};

export default ChatBubble;
