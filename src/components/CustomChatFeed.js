import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const CustomChatFeed = (chatAppProps) => {
    const { chats, activeChat, userName, messages } = chatAppProps;
    const chat = chats && chats[activeChat];
    const renderMessages = () => {
        const keys = Object.keys(messages);
        keys.map((key, index) => {
            const message = messages[key];
            // Find the last message sent.
            const LastMessage = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return (
                <div key={`message_${index}`} style={{ width: "100%" }}>
                    <div className="message-block">
                        {isMyMessage ? (
                            <MyMessage message={message} />
                        ) : (
                            <TheirMessage
                                message={message}
                                lastMessage={messages[LastMessage]}
                            />
                        )}
                    </div>
                    <div
                        className="read-receipts"
                        style={{
                            marginRight: isMyMessage ? "18px" : "0px",
                            marginLeft: isMyMessage ? "0px" : "68px",
                        }}>
                        Read-receipts
                    </div>
                </div>
            );
        });
    };
    if (!chat) return "Loading...";
    return (
        <div class="chat-feed">
            <div class="chat-title-container">
                <div class="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {chat?.people?.map((person) => `${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{ width: "100px" }} />
            <div className="message-form-conti">
                <MessageForm {...chatAppProps} chatID={activeChat} />
            </div>
        </div>
    );
};

export default CustomChatFeed;
