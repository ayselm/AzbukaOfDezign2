import '../../page.css'

import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from '../Header.jsx';

import CatalogFilter from '../CatalogFilter.jsx';
import TestsList from '../TestsList.jsx';
import Pagination from '../Pagination.jsx';
import Footer from '../Footer.jsx';

const App = () => {
  return (
      <>
        <Header />
          <div className="wrapper">
              <div className="TopBlock">
                  <h1>Все</h1>
              </div>
              <CatalogFilter />
              <TestsList />
              <Pagination />
          </div>
        <Footer />
      </>
  );
};

// Рендеринг приложения в DOM
const root = document.getElementById("reactComponentRoot");
ReactDOM.createRoot(root).render(<App />);
