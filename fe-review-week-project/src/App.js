import './App.css';
import Header from './Components/Header';
import ArticlesList from './Components/ArticlesList';
import ArticleCard from './Components/ArticleCard';
import ArticleCommentsCard from './Components/ArticleCommentsCard';

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<ArticlesList />} />
      <Route path="/articles" element={<ArticlesList />} />
      <Route path="/articles/:article_id" element={<ArticleCard />} />
      <Route path="/articles/:article_id/comments" element={<ArticleCommentsCard />} />
      <Route path="/api/articles/:article_id" element={<ArticleCard />} />
      </Routes>
    </div>
  );
}

export default App;
