import ArticleList from '../components/ArticleList';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <div className='home'>
        <img className='banner' src='/2d539a7f7017db4a713ab4aafba5f5ac-700.jpg' alt='Article Catalog' />
        <div className='search'>
          <img className='topItems' src='/top_items.png' alt='Search' />
          <div className='searchBar'>
            <input type="text" placeholder="Search goods or services here..." />
            <button>Search Now!</button>
          </div>
        </div>
      </div>
      <ArticleList />
    </>
  );
};

export default Home;