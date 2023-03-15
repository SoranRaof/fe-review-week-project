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

export const getArticleById = (article_id) => {
    return articlesApi.get(`articles/${article_id}`)
    .then((response) => {
        return response.data.article;
    });
};

export const getCommentsByArticleId = (article_id) => {
    return articlesApi.get(`articles/${article_id}/comments`)
    .then((response) => {
        return response.data.comments;
    });
};