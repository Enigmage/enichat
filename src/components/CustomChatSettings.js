import {
    ChatSettingsTop,
    OptionsSettings,
    PeopleSettings,
    PhotosSettings,
} from "react-chat-engine";
import CustomOptionSettings from "./CustomOptionSettings";

const CustomChatSettings = (props) => {
    const { chats, activeChat } = props;
    const chat = chats && chats[activeChat];
    return (
        <div className="ce-settings" style={styles.settingsContainer}>
            <div
                className="ce-settings-container"
                style={{ width: "90%", paddingLeft: "5%" }}>
                <ChatSettingsTop {...props} />
                <PeopleSettings {...props} />
                <PhotosSettings {...props} />
                {props && chat && props.userName === chat.admin.username && (
                    <OptionsSettings {...props} />
                )}
                <CustomOptionSettings {...props} chatId={activeChat} chat={chat} />
            </div>
        </div>
    );
};
export default CustomChatSettings;

const styles = {
    settingsContainer: {
        height: "100%",
        overflow: "scroll",
        overflowX: "hidden",
        borderLeft: "1px solid #afafaf",
        backgroundColor: "white",
        fontFamily: "Avenir",
    },
};
