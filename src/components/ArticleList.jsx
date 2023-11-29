import { useState, useEffect, useContext } from 'react';
import { fetchArticles, saveArticle } from '../services/api';
import { AuthContext } from '../contexts/AuthContext';
import Article from './Article';
import '../styles/ArticleList.css';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(10);
  const { isAdmin } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('title');

  useEffect(() => {
    const loadArticles = async () => {
      const data = await fetchArticles();
      setArticles(data);
      setFilteredArticles(data);
    };

    loadArticles();
  }, []);

  useEffect(() => {
    const filtered = articles.filter((article) => {
      const lowerSearchTerm = searchTerm.toLowerCase();
      const lowerTitle = article.title.toLowerCase();
      const lowerDescription = article.description.toLowerCase();
      const lowerStore = article.store.toLowerCase();
      const lowerPrice = article.price.toString();
      const lowerReviewer = article.reviewer.toLowerCase();

      switch (category) {
        case 'title':
          return lowerTitle.includes(lowerSearchTerm);
        case 'description':
          return lowerDescription.includes(lowerSearchTerm);
        case 'store':
          return lowerStore.includes(lowerSearchTerm);
        case 'price':
          return lowerPrice.includes(lowerSearchTerm);
        case 'reviewer':
          return lowerReviewer.includes(lowerSearchTerm);
        default:
          return true;
      }
    });
    setFilteredArticles(filtered);
  }, [searchTerm, articles, category]);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEditValues = (index, editedValues) => {
    const updatedArticles = [...articles];
    updatedArticles[index] = { ...updatedArticles[index], ...editedValues };
    setArticles(updatedArticles);
    saveArticle(index, editedValues);
  };

  return (
    <div className='container'>
      <div className='home'>
        <img className='banner' src='/2d539a7f7017db4a713ab4aafba5f5ac-700.jpg' alt='Article Catalog' />
        <div className='search'>
          <img className='topItems' src='/top_items.png' alt='Search' />
          <div className='searchBar'>
            <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className='filterBar'>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value='title'>Title</option>
                <option value='description'>Description</option>
                <option value='store'>Store</option>
                <option value='price'>Price</option>
                <option value='reviewer'>Reviewer</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={() => paginate(currentPage - 1)}>
            {'<'}
          </button>
        )}
        {currentPage < Math.ceil(filteredArticles.length / articlesPerPage) && (
          <button onClick={() => paginate(currentPage + 1)}>
            {'>'}
          </button>
        )}
      </div>
      <div className='articles'>
        {currentArticles.map((article, index) => (
          <Article
            key={article.id}
            article={article}
            isAdmin={isAdmin}
            onEditValues={(editedValues) => handleEditValues(index, editedValues)}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;