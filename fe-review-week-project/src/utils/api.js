import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://sorans-backend-project.onrender.com/api",
});

export const getArticles = () => {
  return articlesApi.get(`/articles`).then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return articlesApi.get(`articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return articlesApi.get(`articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const patchVotesByArticleId = (article_id, newVoteCount) => {
  return articlesApi
    .patch(`articles/${article_id}`, { inc_votes: newVoteCount })
    .then((response) => {
      console.log("api", response.data.article);
      return response.data.article.votes;
    })
    .catch((error) => {
      console.error(`Error updating article votes: ${error}`);
      throw error;
    });
};
