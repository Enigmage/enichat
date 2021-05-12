import GenericProfilePicture from "../utils/images/generic-profile-pic.png";
import ModalImage from "react-modal-image";

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
                            backgroundImage:
                                message &&
                                message.sender &&
                                message.sender.avatar
                                    ? `url(${message.sender.avatar})`
                                    : `url(${GenericProfilePicture})`,
                        }}
                    />
                </div>
            )}
            {message &&
            message.attachments &&
            message.attachments.length > 0 ? (
                <div>
                    {isFirstMessage && (
                        <div>
                            <span
                                className="message-heading"
                                style={{ color: "red" }}>
                                {message.sender.username}
                            </span>
                        </div>
                    )}
                    <div
                        className="message-image"
                        style={{ marginLeft: isFirstMessage ? "4px" : "48px" }}>
                        <ModalImage
                            small={message.attachments[0].file}
                            alt="message-attachment"
                            large={message.attachments[0].file}
                        />
                    </div>
                </div>
            ) : (
                <div>
                    {isFirstMessage && (
                        <div>
                            <span
                                className="message-heading"
                                style={{ color: "red" }}>
                                {message.sender.username}
                            </span>
                        </div>
                    )}
                    <div
                        className="message-text"
                        style={{
                            float: "left",
                            color: "black",
                            backgroundColor: "#a9a9a9",
                            marginLeft: isFirstMessage ? "4px" : "48px",
                            borderRadius: "5px",
                        }}>
                        {message.text}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TheirMessage;
