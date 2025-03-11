import '../../page.css'

import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from '../Header.jsx';

import HelloAbc from '../HelloAbc.jsx';
import Categories from '../Categories.jsx';
import RelatedArticles from '../RelatedArticles.jsx';
import Footer from '../Footer.jsx';

const App = () => {
  return (
      <>
        <Header />
          <div className="wrapper">
              <HelloAbc />
              <Categories />
              <RelatedArticles />
          </div>
        <Footer />
      </>
  );
};

// Рендеринг приложения в DOM
const root = document.getElementById("reactComponentRoot");
ReactDOM.createRoot(root).render(<App />);
