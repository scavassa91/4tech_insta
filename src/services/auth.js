import { axios4Tech } from './config';

export const login = async (user, password) => {
    try {
        const response = await axios4Tech.post('auth/login', {
            userLogin: user,
            password: password
        });
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("userId", response.data._id);
        return response;
    } catch (err) {
        return err.response.status;
    }
};

export const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
}

export const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
};
