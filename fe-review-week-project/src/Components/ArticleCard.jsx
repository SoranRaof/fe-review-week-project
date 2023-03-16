import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, patchVotesByArticleId } from "../utils/api";
import thumbsUpIcon from "../img/icon-thumbs-up.png";
import thumbsDownIcon from "../img/icon-thumbs-down.png";

function ArticleCard() {
  const [article, setArticle] = useState({});
  const [voteLikes, setVoteLikes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleVoteLikes = () => {
    if (!hasVoted) {
      setHasVoted(true);
      setVoteLikes((currentVotes) => currentVotes + 1);
      patchVotesByArticleId(article_id, 1);
    }
  };

  const handleVoteDislikes = () => {
    if (!hasVoted) {
      setHasVoted(true);
      setVoteLikes((currentVotes) => currentVotes - 1);
      patchVotesByArticleId(article_id, -1);
    }
  };

  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Date: {article.created_at.substring(0, 10)}</p>
      <img src={article.article_img_url} alt="article-img" />
      <p>{article.body}</p>
      <div>
        <button type="button" onClick={handleVoteLikes}>
          <img src={thumbsUpIcon} alt="thumbs up" className="icon" />
        </button>
        {article.votes + voteLikes}
        <button type="button" onClick={handleVoteDislikes}>
          <img src={thumbsDownIcon} alt="thumbs down" className="icon" />
        </button>
      </div>
      <p>Comments: {article.comment_count}</p>
    </div>
  );
}

export default ArticleCard;
