import axios from 'axios';

const articlesApi = axios.create({
    baseURL: 'https://sorans-backend-project.onrender.com/api'
});

export const getArticles = () => {
    return articlesApi.get(`/articles`)
        .then(({ data }) => {
            return data.articles;
        });
};