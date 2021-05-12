import MessageForm from "./MessageForm";
import MessageBubbles from "./MessageBubbles";

const CustomChatFeed = (chatAppProps) => {
    const { chats, activeChat, userName, messages } = chatAppProps;
    const chat = chats && chats[activeChat];
    if (!chat) return <div />;
    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">#{chat.title}</div>
            </div>
            <MessageBubbles userName={userName} messages={messages} />
            <div style={{ height: "100px" }} />
            <div className="message-form-container">
                <MessageForm {...chatAppProps} chatId={activeChat} />
            </div>
        </div>
    );
};

export default CustomChatFeed;
