import axios from 'axios';
import {useState} from 'react';
import useForm from "../utils/useForm";


const LoginForm = () => {
    const [credentials, setCredentials] = useForm({username:'', password:''});
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': process.env.REACT_APP_PROJECT_ID, 
                             'User-Name': credentials.username,
                             'User-Secret': credentials.password }
        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            localStorage.setItem('username', credentials.username);
            localStorage.setItem('password', credentials.password);
            window.location.reload();
            setError('');
        } catch(error) {
            setError('Invalid credentials !!');
        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Enichat</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        name="username"
                        type="text"
                        value={credentials.username}
                        onChange={setCredentials}
                        className="input"
                        placeholder="Username"
                        required
                    />
                    <input 
                        name="password"
                        type="password"
                        value={credentials.password}
                        onChange={setCredentials}
                        className="input"
                        placeholder="Password"
                        required
                    />
                    <div align="center">
                        <button className="button" type="submit"><span>Login</span></button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    );
}



export default LoginForm;
