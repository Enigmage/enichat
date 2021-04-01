import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {
    const [message, setMessage] = useState("");
    const { chatID, creds } = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        const messageText = message.trim();
        console.log(messageText);
        console.log(creds);
        const {projectID, userName, userSecret} = creds;
        const authObject ={projectID, userName, userSecret} 
        const callback = (data) => console.log(`this is if api works ${Object.keys(data)}`);
        if (messageText.length > 0) sendMessage(authObject, chatID, { text:messageText }, callback);
        setMessage("");
    };
    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Chat away..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onSubmit={handleSubmit}
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default MessageForm;
