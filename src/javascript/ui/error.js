import '../../page.css'

import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from '../Header.jsx';

import Footer from '../Footer.jsx';
import BackMenu from "../BackMenu.jsx";
import img9 from "../../images/img9.png";

const App = () => {
  return (
      <>
        <Header />
          <div className="wrapper">
              <BackMenu />
              <div className="Error">
                  <img src={img9}/>
                  <h2>Что-то сломалось...</h2>
                  <h3>Обнови страницу<br/>или попробуй позже</h3>

              </div>
          </div>
        <Footer />
      </>
  );
};

// Рендеринг приложения в DOM
const root = document.getElementById("reactComponentRoot");
ReactDOM.createRoot(root).render(<App />);
