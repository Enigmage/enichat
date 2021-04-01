const TheirMessage = ({ message, lastMessage }) => {
    const isFirstMessage =
        !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
        <div className="message-row">
            {isFirstMessage && (
                <div
                    class="message-avatar"
                    style={{
                        backgroundImage: `url(${message?.sender?.avatar})`,
                    }}
                />
            )}
            {message?.attachments?.length > 0 ? (
                <img
                    src={message.attachments[0].file}
                    alt="message-attachment"
                    className="message-image"
                    style={{ marginLeft: isFirstMessage ? "4px" : "48px" }}
                />
            ) : (
                <div
                    class="message-text"
                    style={{
                        float: "left",
                        color: "black",
                        backgroundColor: "whitesmoke",
                        marginLeft: isFirstMessage ? "4px" : "48px",
                    }}>
                    {message.text}
                </div>
            )}
        </div>
    );
};

export default TheirMessage;
