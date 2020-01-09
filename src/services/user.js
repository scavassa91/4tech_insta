import { axios4Tech } from './config';

export const user = {
    getById: async (id) => {
        return await axios4Tech.get(`user/${id}`);
    },
    save: async (userLogin, userName, password) => {
        return await axios4Tech.post('user', {
            userLogin,
            userName,
            password
        });
    }
};