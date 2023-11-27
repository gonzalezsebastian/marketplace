import { useState, useEffect, useContext } from 'react';
import { fetchArticles, saveArticle } from '../services/api';
import { AuthContext } from '../contexts/AuthContext';
import Article from './Article';
import '../styles/ArticleList.css';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(10);
  const { isAdmin } = useContext(AuthContext);

  useEffect(() => {
    const loadArticles = async () => {
      const data = await fetchArticles();
      setArticles(data);
    };

    loadArticles();
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEditValues = (index, editedValues) => {
    const updatedArticles = articles.map((article, i) =>
      i === index ? { ...article, ...editedValues } : article
    );

    setArticles(updatedArticles);
    saveArticle(index, editedValues);
  };

  return (
    <div className='container'>
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={() => paginate(currentPage - 1)}>
            {'<'}
          </button>
        )}
        {currentPage < Math.ceil(articles.length / articlesPerPage) && (
          <button onClick={() => paginate(currentPage + 1)}>
            {'>'}
          </button>
        )}
      </div>
      <div className='articles'>
        {currentArticles.map((article,index) => (
          <Article
            key={article.id}
            article={article}
            isAdmin={isAdmin}
            onEditValues={(editedValues)=>handleEditValues(index, editedValues)}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;