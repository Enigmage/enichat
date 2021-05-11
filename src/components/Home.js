import { ChatEngine } from "react-chat-engine";
import { Redirect } from "react-router";
import CustomChatFeed from "./CustomChatFeed";
import CustomChatSettings from "./CustomChatSettings";

const Home = ({ isLogin }) => {
    if (!isLogin) return <Redirect to="/login" />;
    return (
        <ChatEngine
            height="100vh"
            projectID={process.env.REACT_APP_PROJECT_ID}
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => (
                <CustomChatFeed {...chatAppProps} />
            )}
            renderChatSettings={(chatAppProps) => (
                <CustomChatSettings {...chatAppProps} />
            )}
        />
    );
};
export default Home;
