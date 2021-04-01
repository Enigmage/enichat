//Imports
import { ChatEngine } from "react-chat-engine";
import CustomChatFeed from "./components/CustomChatFeed";
import './App.css';

// Code
// Chat Engine API component.
const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID={process.env.REACT_APP_PROJECT_ID}
            userName={process.env.REACT_APP_USER_NAME}
            userSecret={process.env.REACT_APP_USER_SECRET}
            renderChatFeed={(chatAppProps) => (
                <CustomChatFeed {...chatAppProps} />
            )}
        />
    );
};

export default App;
