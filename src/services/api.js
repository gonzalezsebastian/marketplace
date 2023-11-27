
let articlesData = [
  { 
      id: 1,
      image: '/guayacanes.jpg',
      title: 'Westeros Custom Cloting',
      description: 'Lorem ipsum dolor sit urarde',
      store: 'PSD Templates',
      price: 14,
      reviewer: 'Johnny Fisher',
      avatar: 'https://picsum.photos/200/200',
      rating: 4
  },
  { 
    id: 2,
    image: '/books.jpeg',
    title: 'Flatland - Hero Image Composer',
    description: 'Lorem ipsum dolor sit urarde',
    store: 'PSD Templates',
    price: 12,
    reviewer: 'Odin_Design',
    avatar: 'https://picsum.photos/200/200',
    rating: 5
  },
  { 
    id: 3,
    image: '/pixeldiamond.jpg',
    title: 'Flatland - Hero Image Composer',
    description: 'Lorem ipsum dolor sit urarde',
    store: 'Shopify',
    price: 86,
    reviewer: 'Sarah-Imaginarium',
    avatar: 'https://picsum.photos/200/200',
    rating: 4
  },
  { 
    id: 4,
    image: '/heroimagecomposer.jpg',
    title: 'Miniverse - Hero Image Composer',
    description: 'Lorem ipsum dolor sit urarde',
    store: 'Hero Images',
    price: 12,
    reviewer: 'Odin_Design',
    avatar: 'https://picsum.photos/200/200',
    rating: 5
  },
  { 
    id: 5,
    image: '/coding.webp',
    title: 'New Product 1',
    description: 'Lorem ipsum dolor sit urarde',
    store: 'New Store',
    price: 20,
    reviewer: 'John Doe',
    avatar: 'https://picsum.photos/200/200',
    rating: 3
  },
  { 
    id: 6,
    image: '/dron.webp',
    title: 'New Product 2',
    description: 'Lorem ipsum dolor sit urarde',
    store: 'Another Store',
    price: 30,
    reviewer: 'Jane Doe',
    avatar: 'https://picsum.photos/200/200',
    rating: 4.5
  },
  { 
    id: 7,
    image: '/mac.jpeg',
    title: 'New Product 3',
    description: 'Lorem ipsum dolor sit urarde',
    store: 'Third Store',
    price: 25,
    reviewer: 'Bob Johnson',
    avatar: 'https://picsum.photos/200/200',
    rating: 2
  },
  { 
    id: 8,
    image: '/play4.webp',
    title: 'New Product 4',
    description: 'Lorem ipsum dolor sit urarde',
    store: 'Fourth Store',
    price: 18,
    reviewer: 'Alice Smith',
    avatar: 'https://picsum.photos/200/200',
    rating: 4
  },
  { 
    id: 9,
    image: '/psp.webp',
    title: 'New Product 5',
    description: 'Lorem ipsum dolor sit urarde',
    store: 'Fifth Store',
    price: 22,
    reviewer: 'Eva Brown',
    avatar: 'https://picsum.photos/200/200',
    rating: 3.5
  },
  { 
    id: 10,
    image: '/pc.jpeg',
    title: 'New Product 6',
    description: 'Lorem ipsum dolor sit urarde',
    store: 'Sixth Store',
    price: 28,
    reviewer: 'Chris Wilson',
    avatar: 'https://picsum.photos/200/200',
    rating: 4
  },
  {
    id: 11,
    image: '/aleta.jpeg',
    title: 'Tiburon Aleta Roja',
    description: 'Lorem ipsum dolor sit urarde',
    store: 'Alex Char',
    price: 19,
    reviewer: 'Johnny Fisher',
    avatar: 'https://picsum.photos/200/200',
    rating: 5
  },
  {
    id: 12,
    image: '/baseball.jpeg',
    title: 'Baseball',
    description: 'Lorem ipsum dolor sit urarde',
    store: 'PSD Templates',
    price: 14,
    reviewer: 'Johnny Fisher',
    avatar: 'https://picsum.photos/200/200',
    rating: 2
  },
  {
    id: 13,
    image: '/ctg.jpeg',
    title: 'Cartagena',
    description: 'Lorem ipsum dolor sit urarde',
    store: 'PSD Templates',
    price: 14,
    reviewer: 'Johnny Fisher',
    avatar: 'https://picsum.photos/200/200',
    rating: 4
  },
  {
    id: 14,
    image: '/miko.jpeg',
    title: 'Miko',
    description: 'Lorem ipsum dolor sit urarde',
    store: 'PSD Templates',
    price: 14,
    reviewer: 'Johnny Fisher',
    avatar: 'https://picsum.photos/200/200',
    rating: 5
  },
  {
    id: 15,
    image: '/monopoly.jpeg',
    title: 'Monopoly',
    description: 'Lorem ipsum dolor sit urarde',
    store: 'PSD Templates',
    price: 14,
    reviewer: 'Johnny Fisher',
    avatar: 'https://picsum.photos/200/200',
    rating: 1
  }
];


const fetchArticles = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const storedArticles = localStorage.getItem('articles');
      articlesData = storedArticles ? JSON.parse(storedArticles) : articlesData;
      resolve(articlesData);
    }, 500);
  });
};

const saveArticle = async (articleIndex, editedValues) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      articlesData = articlesData.map((article, index) =>
        index === articleIndex ? { ...article, ...editedValues } : article
      );

      console.log('Updated Articles:', articlesData);

      localStorage.setItem('articles', JSON.stringify(articlesData));
      resolve(editedValues);
    }, 500);
  });
};

export { fetchArticles, saveArticle, articlesData };