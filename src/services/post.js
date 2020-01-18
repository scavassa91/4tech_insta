import { axios4Tech } from './config';

export const uploadImage = (image, comment) => {
    const data = new FormData();
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

export const sendComment = (userId, mediaId, comment) => {
    return axios4Tech.put('user-activity/comment-in-activity', {
        userId,
        mediaId,
        comment
    });
}

export const sendLike = (userId, mediaId) => {
    return axios4Tech.put('user-activity/like-or-dislike', {
        userId,
        mediaId
    });
}