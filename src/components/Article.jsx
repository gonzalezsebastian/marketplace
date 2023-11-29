import { useState } from 'react';
import '../styles/Article.css';

const StarRating = ({ value, onClick }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div>
      {stars.map((star) => (
        <span
          className='star'
          key={star}
          onClick={() => onClick(star)}
          style={{ cursor: 'pointer', color: star <= value ? '#ffd71b' : "#d2d2d2" }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Article = ({ article, isAdmin, onEditValues }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(article.title);
  const [editedDescription, setEditedDescription] = useState(article.description);
  const [editedStore, setEditedStore] = useState(article.store);
  const [editedPrice, setEditedPrice] = useState(article.price);
  const [editedReviewer, setEditedReviewer] = useState(article.reviewer);
  const [editedRating, setEditedRating] = useState(article.rating);

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleSaveClick = () => {
    onEditValues({
      title: editedTitle,
      description: editedDescription,
      store: editedStore,
      price: editedPrice,
      reviewer: editedReviewer,
      rating: editedRating,
    });

    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedTitle(article.title);
    setEditedDescription(article.description);
    setEditedStore(article.store);
    setEditedPrice(article.price);
    setEditedReviewer(article.reviewer);
    setEditedRating(article.rating);
    setIsEditing(false);
  };

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setEditedDescription(event.target.value);
  };

  const handleStoreChange = (event) => {
    setEditedStore(event.target.value);
  };

  const handlePriceChange = (event) => {
    setEditedPrice(event.target.value);
  };

  const handleReviewerChange = (event) => {
    setEditedReviewer(event.target.value);
  };

  const handleRatingChange = (value) => {
    const clampedValue = Math.min(Math.max(value, 0), 5);
    setEditedRating(clampedValue);
  };

  return (
    <div className='article'>
      {isEditing ? (
        <div className='editArticle'>
          <div>
            <p>Title:</p>
            <input type="text" value={editedTitle} onChange={handleTitleChange} />
          </div>
          <div>
            <p>Description:</p>
            <textarea value={editedDescription} onChange={handleDescriptionChange} />
          </div>
          <div>
            <p>Store:</p>
            <input type="text" value={editedStore} onChange={handleStoreChange} />
          </div>
          <div>
            <p>Price:</p>
            <input type="number" value={editedPrice} onChange={handlePriceChange} min={0} />
          </div>
          <div>
            <p>Reviewer:</p>
            <input type="text" value={editedReviewer} onChange={handleReviewerChange} />
          </div>
          <div className='buttons'>
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className='article-container'>
          <img src={article.image} alt={article.title} />
          <div className='product'>
            <h1>{editedTitle}</h1>
            <p className='description'>{editedDescription}</p>
            <div className='seller'>
              <p className='store'>{editedStore}</p>
              <p className='price'>${editedPrice}</p>
            </div>
            <hr />
            <div className='review'>
              <div className='reviewer'>
                <img src={article.avatar} alt={article.reviewer} />
                <p> {editedReviewer}</p>
              </div>
              <div className='rating'>
                <StarRating value={editedRating} onClick={handleRatingChange} />
              </div>
            </div>
            <div className='buttons'>
              {isAdmin && <button onClick={handleEditClick}>Edit</button>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Article;