import MessageForm from "./MessageForm";
import MessageBubbles from "./MessageBubbles";

const CustomChatFeed = (chatAppProps) => {
    const { chats, activeChat, userName, messages } = chatAppProps;
    const chat = chats && chats[activeChat];
    console.log(`THis messages ${messages}`);

    if (!chat) return <div />;

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {chat?.people?.map((person) => `${person.person.username}`)}
                </div>
            </div>
            <MessageBubbles userName={userName} messages={messages} />
            <div style={{ width: "100px" }} />
            <div className="message-form-conti">
                <MessageForm {...chatAppProps} chatId={activeChat} />
            </div>
        </div>
    );
};

export default CustomChatFeed;
