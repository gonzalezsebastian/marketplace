import { useState } from 'react';
import ArticleList from '../components/ArticleList';
import AdminPanel from '../components/AdminPanel';

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  
  return (
    <>
      <AdminPanel />
      <ArticleList />
    </>
  );
};

export default Home;