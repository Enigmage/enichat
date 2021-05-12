import { leaveChat } from "react-chat-engine";

const CustomOptionSettings = (props) => {
    const { creds, chatId, chat } = props;
    const leaveGroup = () => {
        leaveChat(creds, chatId);
    };
    const logOutCurrentUser = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        window.location.reload();
    };
    return (
        <div>
            {chat && (
                <button
                    onClick={() => leaveGroup()}
                    className="leave-group-button">
                    Leave Group
                </button>
            )}
            <button
                onClick={() => logOutCurrentUser()}
                className="logout-button">
                Log Out
            </button>

        </div>
    );
};
export default CustomOptionSettings;
