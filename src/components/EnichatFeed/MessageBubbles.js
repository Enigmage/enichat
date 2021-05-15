import MyMessage from "./MyMessage";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import TheirMessage from "./TheirMessage";
import axios from "axios";
import { useState } from "react";

const MessageBubbles = ({ messages, userName, chatId, userSecret }) => {
    const [editMessageId, setEditMessageId] = useState(-1);
    const [newMessage, setNewMessage] = useState("");

    const keys = Object.keys(messages);

    const handleDelete = async (e, data) => {
        const { chat_id, message_id } = data;
        const headerObject = {
            "Project-ID": process.env.REACT_APP_PROJECT_ID,
            "User-Name": userName,
            "User-Secret": userSecret,
        };
        try {
            await axios.delete(
                `https://api.chatengine.io/chats/${chat_id}/messages/${message_id}/`,
                { headers: headerObject }
            );
        } catch (err) {
            console.log(err);
        }
    };

    const handleEdit = (ob) => async (e) => {
        e.preventDefault();
        const { chat_id, message_id } = ob;
        const headerObject = {
            "Project-ID": process.env.REACT_APP_PROJECT_ID,
            "User-Name": userName,
            "User-Secret": userSecret,
        };
        const body = {
            text: newMessage,
        };
        try {
            await axios.patch(
                `https://api.chatengine.io/chats/${chat_id}/messages/${message_id}/`,
                body,
                { headers: headerObject }
            );
            setEditMessageId(-1);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            {keys
                .filter((item) => messages[item])
                .map((key, index) => {
                    const message = messages[key];
                    // Find the last message sent.
                    const LastMessage = index === 0 ? null : keys[index - 1];
                    const isMyMessage = userName === message.sender.username;
                    return (
                        <div key={`msg_${index}`} style={{ width: "100%" }}>
                            <div className="message-block">
                                {isMyMessage ? (
                                    message.id == editMessageId ? (
                                        <div>
                                            <form
                                                onSubmit={handleEdit({
                                                    chat_id: chatId,
                                                    message_id: message.id,
                                                })}
                                                style={{ float: "right" }}>
                                                <input
                                                    type="text"
                                                    value={newMessage}
                                                    onChange={(e) =>
                                                        setNewMessage(
                                                            e.target.value
                                                        )
                                                    }
                                                    onSubmit={handleEdit({
                                                        chat_id: chatId,
                                                        message_id: message.id,
                                                    })}
                                                />
                                                <input
                                                    type="submit"
                                                    value="Edit"
                                                />
                                            </form>
                                        </div>
                                    ) : (
                                        <div>
                                            <ContextMenuTrigger id={`${index}`}>
                                                <MyMessage message={message} />
                                            </ContextMenuTrigger>
                                            <ContextMenu
                                                className="right-click-menu"
                                                id={`${index}`}>
                                                <MenuItem
                                                    data={{
                                                        chat_id: chatId,
                                                        message_id: message.id,
                                                    }}
                                                    onClick={handleDelete}>
                                                    Delete
                                                </MenuItem>
                                                {!message?.attachments
                                                    ?.length && (
                                                    <MenuItem
                                                        onClick={() => {
                                                            setEditMessageId(
                                                                message.id
                                                            );
                                                            setNewMessage(
                                                                message.text
                                                            );
                                                        }}>
                                                        Edit
                                                    </MenuItem>
                                                )}
                                            </ContextMenu>
                                        </div>
                                    )
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
