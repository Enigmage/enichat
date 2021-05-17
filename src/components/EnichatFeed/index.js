import MessageForm from "./MessageForm";
import MessageBubbles from "./MessageBubbles";

const EnichatFeed = (chatAppProps) => {
    const { chats, activeChat, userName, messages, userSecret } = chatAppProps;
    const chat = chats && chats[activeChat];
    return (
        <div className="chat-feed">
            {chat && (
                <div>
                    <div className="chat-title-container">
                        <div className="chat-title">#{chat.title}</div>
                    </div>
                    <MessageBubbles
                        userName={userName}
                        messages={messages}
                        chatId={activeChat}
                        userSecret={userSecret}
                    />
                    <div style={{ height: "100px" }} />
                    <div className="message-form-container">
                        <MessageForm {...chatAppProps} chatId={activeChat} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default EnichatFeed;
