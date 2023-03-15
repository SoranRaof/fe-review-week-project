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

    if(commentsCardByArticleId.length === 0) {
        return <p>"No comments yet!"</p>
    }

    return ( 
            <div className="article-comments-card">
            {commentsCardByArticleId.map((comment) => {
                return (
                    <div className="comment-card" key={comment.created_at}>
                    <h3>Comment: {comment.author} Date: {comment.created_at.substring(0, 10)}</h3>
                    <p>{comment.body}</p>
                    <p>Votes: {comment.votes}</p>
                    </div>
                )
            })}
            </div>
     );
}

export default ArticleCommentsCard;