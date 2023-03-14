import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getArticleById } from '../utils/api';

function ArticleCard() {
    
    const [article, setArticle] = useState({});
    const {article_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getArticleById(article_id)
        .then((articleData) => {
        setArticle(articleData)
        setIsLoading(false);
        });
    }, [article_id])

    if (isLoading) {
        return <p>Loading...</p>
    }

return (
        <div className="article-card">
            <h2>{article.title}</h2>
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>Date: {article.created_at}</p>
            <img src={article.article_img_url} alt="article-img" />
            <p>{article.body}</p>
            <p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
        </div>
    )
}

export default ArticleCard;