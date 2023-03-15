import { useState, useEffect } from "react";
import { getArticles } from '../utils/api';
import { Link } from 'react-router-dom'

function ArticlesList() {
   
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getArticles().then((articlesData) => {
          setArticles(articlesData);
          setIsLoading(false);
        });
      }, []);
    
return (
    <>
      {isLoading ? (
            <p>Loading...</p>
            ) : (
              <ul className="articles-list">
              {articles.map((article) => {
              return (
              <Link key={article.article_id} to={`/articles/${article.article_id}`}>
              <li>
              <h2>{article.title}</h2>
              <p>Author: {article.author}</p>
              <p>Topic: {article.topic}</p>
              <p>Date: {article.created_at.substring(0, 10)}</p>
              <img src={article.article_img_url} alt="article-img" />
              <p>Votes: {article.votes}</p>
              </li>
              </Link>
                );
              })}
            </ul>
        )}
    </>
  ); 
}

export default ArticlesList;