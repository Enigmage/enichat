const CustomOptionSettings = () => {
    const logOutCurrentUser = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        window.location.reload();
    }
    return (
        <div>
            <button onClick={() => logOutCurrentUser()} className="logout-button">
                Log Out
            </button>
        </div>
    );
}
export default CustomOptionSettings;
