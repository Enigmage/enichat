import { ChatEngine } from "react-chat-engine";
import { Redirect } from "react-router";
import EnichatFeed from "./EnichatFeed";
import EnichatSettings from "./EnichatSettings";

const Home = ({ isLogin }) => {
    if (!isLogin) return <Redirect to="/login" />;
    return (
        <ChatEngine
            height="100vh"
            projectID={process.env.REACT_APP_PROJECT_ID}
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => (
                <EnichatFeed {...chatAppProps} />
            )}
            renderChatSettings={(chatAppProps) => (
                <EnichatSettings {...chatAppProps} />
            )}
        />
    );
};
export default Home;
