import { useState } from "react";
import { sendMessage } from "react-chat-engine";
import { PictureOutlined, SendOutlined } from "@ant-design/icons";

const MessageForm = (props) => {
    const [message, setMessage] = useState("");
    const { chatId, creds } = props;

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const messageText = message.trim();
        if (messageText.length > 0)
            sendMessage(creds, chatId, { text: messageText });
        setMessage("");
    };

    const handleUpload = (e) => {
        sendMessage(creds, chatId, { files: e.target.files, text: "" });
    };

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Chat away..."
                value={message}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
            </label>
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: "none" }}
                onChange={handleUpload}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
            </button>
        </form>
    );
};

export default MessageForm;
