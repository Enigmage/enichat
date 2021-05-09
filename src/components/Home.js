import { ChatEngine } from "react-chat-engine";
import { Redirect } from "react-router";
import CustomChatFeed from "./CustomChatFeed";

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
        />
    );
};
export default Home;
