//Imports
import { ChatEngine } from "react-chat-engine";
import CustomChatFeed from "./components/CustomChatFeed";
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID={process.env.REACT_APP_PROJECT_ID}
            userName="Reno"
            userSecret="reno"
            renderChatFeed={(chatAppProps) => <CustomChatFeed {...chatAppProps} /> }
        />
    );
};

export default App;
