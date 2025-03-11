// javascript/Article.jsx
import React from 'react';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';

const Article = () => {
    return (
        <div className="RelatedArticles">
            <div className="TopBlock stolen">
                <h2>Статьи</h2>
                <a href="catalog.html">Показать больше</a>
                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8329 27.2471L24.167 21.9783L18.8329 16.7095" stroke="#8E9093" stroke-width="1.79399"
                          stroke-linecap="round"/>
                </svg>
            </div>

            <div className="AriclesBlock">

            </div>
        </div>
    );
};

export default Article;
