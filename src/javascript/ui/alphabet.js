import '../../page.css'

import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from '../Header.jsx';

import Alphabet from '../Alphabet.jsx';
import Footer from '../Footer.jsx';

const App = () => {
  return (
      <>
        <Header />
          <div className="wrapper">
              <Alphabet />
          </div>
        <Footer />
      </>
  );
};

// Рендеринг приложения в DOM
const root = document.getElementById("reactComponentRoot");
ReactDOM.createRoot(root).render(<App />);
