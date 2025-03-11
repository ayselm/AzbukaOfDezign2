import '../../page.css'

import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from '../Header.jsx';

import BackMenu from '../BackMenu.jsx';
import CatalogFilter from '../CatalogFilter.jsx';
import RelatedArticles from '../RelatedArticles.jsx';
import Pagination from '../Pagination.jsx';
import Footer from '../Footer.jsx';

const App = () => {
  return (
      <>
        <Header />
          <div className="wrapper">
              <div className="TopBlock">
                  <h1>Статьи</h1>
              </div>
              <CatalogFilter />
              <RelatedArticles />
              <Pagination />
          </div>
        <Footer />
      </>
  );
};

// Рендеринг приложения в DOM
const root = document.getElementById("reactComponentRoot");
ReactDOM.createRoot(root).render(<App />);
