// javascript/Header.jsx
import React from 'react';

const Breadcrumbs = () => {
    return (
       <div className="Breadcrumbs">
           <a href="#"><svg width="24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 3 30 30"><path d="M24.167 26.689L18.8329 21.4202L24.167 16.1514" stroke="#8E9093" stroke-width="1.79399" stroke-linecap="round"></path></svg>
           </a>
           <a href="#">Главная</a>
           <a href="#">/</a>
           <a href="#">Графика</a>
           <a href="#">/</a>
           <a href="#">Беха</a>
       </div>
    );
};

export default Breadcrumbs;
