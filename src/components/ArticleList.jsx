import { useState, useEffect, useContext } from 'react';
import { fetchArticles, saveArticle } from '../services/api';
import { AuthContext } from '../contexts/AuthContext';
import Article from './Article';
import '../styles/ArticleList.css';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(10);
  const [editedValues, setEditedValues] = useState({});
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

  const handleEditValues = (id, editedTitle, editedDescription) => {
    setEditedValues((prevValues) => ({
      ...prevValues,
      [id]: { editedTitle, editedDescription },
    }));

    // Actualiza el array articlesData en api.js
    const updatedArticles = articles.map((article) =>
      article.id === id ? { ...article, title: editedTitle, description: editedDescription } : article
    );

    // Actualiza el estado local y guarda el artículo editado en la API simulada
    setArticles(updatedArticles);

    // Utiliza saveArticle para guardar los cambios
    saveArticle({ id, title: editedTitle, description: editedDescription });
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
        {currentArticles.map((article) => (
          <Article
            key={article.id}
            article={article}
            isAdmin={isAdmin}
            editedValues={editedValues[article.id]}
            onEditValues={handleEditValues}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;