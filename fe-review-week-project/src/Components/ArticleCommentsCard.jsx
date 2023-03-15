import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../utils/api";

function ArticleCommentsCard() {
    const [commentsCardByArticleId, setCommentsCardByArticleId] = useState({});
    const {article_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getCommentsByArticleId(article_id)
        .then((commentData) => {
        setCommentsCardByArticleId(commentData)
        setIsLoading(false);
        });
    }, [article_id])

    if (isLoading) {
        return <p>Loading...</p>
    }

    return ( 
            <div className="article-comments-card">
            {commentsCardByArticleId.map((comment) => {
                return (
                    <div className="comment-card" key={comment.created_at}>
                    <h3>Comment: {comment.author} {comment.created_at}</h3>
                    <p>{comment.body}</p>
                    <p>{comment.votes}</p>
                    <p>{comment.article_id}</p>
                    </div>
                )
            })}
            </div>
     );
}

export default ArticleCommentsCard;