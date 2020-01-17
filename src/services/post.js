import { axios4Tech } from './config';

export const uploadImage = (image, comment) => {
    const data = new FormData();
    console.log(image);
    data.append('image', image);
    data.append('description', comment);
    data.append('userId', localStorage.getItem('userId'));

    return axios4Tech.post('user-activity/upload', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export const getPosts = (page = 0) => {
    return axios4Tech.get(`user-activity/${page}`);
}