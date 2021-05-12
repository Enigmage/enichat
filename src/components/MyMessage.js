import ModalImage from "react-modal-image";
const MyMessage = ({ message }) => {
    // Check if message is image or text.
    if (message && message.attachments && message.attachments.length > 0) {
        return (
            <div className="message-image" style={{ float: "right" }}>
                <ModalImage
                    small={message.attachments[0].file}
                    large={message.attachments[0].file}
                    alt="message-attachment"
                />
            </div>
        );
    }
    return (
        <div
            className="message-text"
            style={{
                float: "right",
                marginRight: "18px",
                color: "whitesmoke",
                backgroundColor: "#ab0000",
                borderRadius: "5px",
            }}>
            {message.text}
        </div>
    );
};

export default MyMessage;
