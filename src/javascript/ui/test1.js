import '../../page.css'

import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from '../Header.jsx';

import Quiz from '../Quiz.jsx';
import Footer from '../Footer.jsx';

const App = () => {
  return (
      <>
        <Header />
          <div className="wrapper">
              <Quiz />
          </div>
        <Footer />
      </>
  );
};

// Рендеринг приложения в DOM
const root = document.getElementById("reactComponentRoot");
ReactDOM.createRoot(root).render(<App />);
