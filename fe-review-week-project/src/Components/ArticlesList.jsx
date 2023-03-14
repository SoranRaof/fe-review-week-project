import { useState, useEffect } from "react";
import { getArticles } from '../utils/api';

function ArticlesList() {
   
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((articlesData) => {
          setArticles(articlesData);
        });
      }, []);
    
      return (
        <ul className="articles-list">
          {articles.map((article) => {
            return (
                <li>
                <h2 key={article.article_id}>{article.title}</h2>
                <p>Author: {article.author}</p>
                <p>Topic: {article.topic}</p>
                <p>Date: {article.created_at}</p>
                <img src={article.article_img_url} alt="article-img" />
                <p>{article.body}</p>
                <p>Votes: {article.votes}</p>
                <p>{article.comments}</p>
                </li>
            );
          })}
        </ul>
        
      );
    }

    export default ArticlesList;