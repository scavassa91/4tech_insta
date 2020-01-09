import { axios4Tech, setToken } from './config';

export const auth = {
    login: async (user, password) => {
        try {
            const response = await axios4Tech.post('auth/login', {
                userLogin: user,
                password: password
            });
            setToken(response.data.access_token);
            return response;
        } catch(err) {
            return err.response.status;
        }
    }
};