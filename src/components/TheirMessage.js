const TheirMessage = ({ message, lastMessage }) => {
    const isFirstMessage =
        !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
        <div className="message-row">
            {isFirstMessage && (
                <div style={{ textAlign: "center" }}>
                    <div
                        className="message-avatar"
                        style={{
                            backgroundImage: `url(${message?.sender?.avatar})`,
                        }}
                    />
                    <div>
                        <span className="message-text" style={{ color: "red" }}>
                            {message.sender.username}
                        </span>
                    </div>
                </div>
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
                    className="message-text"
                    style={{
                        float: "left",
                        color: "black",
                        backgroundColor: "whitesmoke",
                        marginLeft: isFirstMessage ? "4px" : "48px",
                        borderRadius: "8px",
                    }}>
                    {message.text}
                </div>
            )}
        </div>
    );
};

export default TheirMessage;
