import axios from "axios";

const leaveCurrentChat = async (creds, chatId) => {
    const { userSecret, userName } = creds;
    const headerObject = {
        "Project-ID": process.env.REACT_APP_PROJECT_ID,
        "User-Name": userName,
        "User-Secret": userSecret,
    };
    try {
        await axios.delete(
            `https://api.chatengine.io/chats/${chatId}/people/`,
            { headers: headerObject }
        );
    } catch (err) {
        console.log(err);
    }
};

const UtilityOptions = (props) => {
    const { creds, chatId, chat } = props;
    const leaveGroup = () => {
        leaveCurrentChat(creds, chatId);
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
export default UtilityOptions;
