import './App.css';
import ArticlesList from './Components/ArticlesList';
import Header from './Components/Header';
import ArticleCard from './Components/ArticleCard';

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
      <Route  path="/" element={<ArticlesList />} />
      <Route path="/articles" element={<ArticlesList />} />
      <Route path="/articles/:article_id" element={<ArticleCard />} />

      </Routes>
    </div>
  );
}

export default App;
