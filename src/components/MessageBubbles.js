import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const MessageBubbles = ({ messages, userName }) => {
    const keys = Object.keys(messages);
    console.log(`These are keys ${keys}`);
    return (
        <div>
            {keys.map((key, index) => {
                const message = messages[key];
                // Find the last message sent.
                const LastMessage = index === 0 ? null : keys[index - 1];
                const isMyMessage = userName === message.sender.username;
                console.log(isMyMessage);

                console.log(`I am here ${message.text} this is message`);
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
            })}
        </div>
    );
};

export default MessageBubbles;
