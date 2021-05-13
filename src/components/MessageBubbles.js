import MyMessage from "./MyMessage";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import TheirMessage from "./TheirMessage";
import axios from "axios";

const MessageBubbles = ({ messages, userName, chatId, userSecret }) => {
    const keys = Object.keys(messages);
    const handleDelete =  (e, data) => {
        const { chat_id, message_id } = data;
        const headerObject = {
            "Project-ID": process.env.REACT_APP_PROJECT_ID,
            "User-Name": userName,
            "User-Secret": userSecret,
        };
        try {
             axios.delete(
                `https://api.chatengine.io/chats/${chat_id}/messages/${message_id}/`,
                { headers: headerObject }
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            {keys.filter((item) => messages[item]).map((key, index) => {
                const message = messages[key];
                // Find the last message sent.
                const LastMessage =
                    index === 0 ? null : keys[index - 1];
                const isMyMessage = userName === message.sender.username;
                return (
                    <div key={`msg_${index}`} style={{ width: "100%" }}>
                        <div className="message-block">
                            {isMyMessage ? (
                                <div>
                                    <ContextMenuTrigger id={`${index}`}>
                                        <MyMessage message={message} />
                                    </ContextMenuTrigger>
                                    <ContextMenu className="right-click-menu" id={`${index}`}>
                                        <MenuItem
                                            data={{
                                                chat_id: chatId,
                                                message_id: message.id,
                                            }}
                                            onClick={handleDelete}>
                                            Delete
                                        </MenuItem>
                                    </ContextMenu>
                                </div>
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
