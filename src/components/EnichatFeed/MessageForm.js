import axios from "axios";
import { useState } from "react";
import { PictureOutlined, SendOutlined } from "@ant-design/icons";

const sendChatMessage = async (creds, chatId, messageObject) => {
    const { userSecret, userName } = creds;
    const headerObject = {
        "Project-ID": process.env.REACT_APP_PROJECT_ID,
        "User-Name": userName,
        "User-Secret": userSecret,
    };
    const formData = new FormData();
    if (messageObject.files) {
        formData.append(
            "attachments",
            messageObject.files[0],
            messageObject.files[0].name
        );
    }
    formData.append("text", messageObject.text);
    try {
        await axios.post(
            `https://api.chatengine.io/chats/${chatId}/messages/ `,
            formData,
            { headers: headerObject }
        );
    } catch (err) {
        console.log(err);
    }
};

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
            sendChatMessage(creds, chatId, { text: messageText });
        setMessage("");
    };

    const handleUpload = (e) => {
        sendChatMessage(creds, chatId, { files: e.target.files, text: "" });
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
