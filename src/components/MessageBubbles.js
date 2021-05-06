import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const MessageBubbles = ({ messages, userName }) => {
    const keys = Object.keys(messages);
    return (
        <div>
            {keys.map((key, index) => {
                const message = messages[key];
                // Find the last message sent.
                const LastMessage = index === 0 ? null : keys[index - 1];
                const isMyMessage = userName === message.sender.username;
                return (
                    <div key={`msg_${index}`} style={{ width: "100%" }}>
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
                    </div>
                );
            })}
        </div>
    );
};

export default MessageBubbles;
