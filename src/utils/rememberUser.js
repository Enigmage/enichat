export const rememberUser = (username, password) => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
};
