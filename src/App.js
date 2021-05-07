//Imports
import { ChatEngine } from "react-chat-engine";
import CustomChatFeed from "./components/CustomChatFeed";
import './App.css';
import LoginForm from "./components/LoginForm";

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID={process.env.REACT_APP_PROJECT_ID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <CustomChatFeed {...chatAppProps} /> }
        />
    );
};

export default App;
