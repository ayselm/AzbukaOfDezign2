// javascript/Article.jsx
import React from 'react';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import authorImg from '../images/author.png';

const Article = () => {
    return (
        <article className="article">
            <h1>Беха</h1>
            <div className="article-info">
                <span>24 ноября 2024</span>
                <span className="time">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.58808 17.8202C4.9062 17.8202 1.1095 14.0235 1.1095 9.34162C1.1095 4.65974 4.9062 0.863037 9.58808 0.863037C14.2716 0.863037 18.0667 4.65974 18.0667 9.34162C18.0667 14.0235 14.2716 17.8202 9.58808 17.8202" stroke="#24262B" stroke-opacity="0.5" stroke-width="1.27179" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.38562 6.48242V9.79415L11.9902 11.383" stroke="#24262B" stroke-opacity="0.5" stroke-width="1.27179" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
 <span>15 мин</span></span>
                <span className="tag">Джун</span>
            </div>
            <div className="content">
                <p>Behance — это многомиллионная коллекция работ от дизайнеров, разработчиков и творческих людей со всего Мира...</p>
                <aside className="note">
                    Behance — бесплатный сервис, на котором можно разместить свои<br/> работы в онлайн портфолио.
                </aside>
                <p>Также, разместив свое портфолио на Behance, в дальнейшем вы можете отправлять ссылку на него потенциальным клиентам или работодателям.</p>
                <div className="BlockImages">
                    <div className="img">
                        <img src={img1}/>
                        <span>Главный экран с витриной работ</span>
                    </div>

                    <div className="img">
                        <img src={img2}/>
                        <span>Логотип сервиса</span>
                    </div>
                </div>

                <div className="author">
                    <img src={authorImg} alt="Елизавета Киреева" className="avatar" />
                    <div className="author-info">
                        <h2>Елизавета Киреева</h2>
                        <span>Автор статьи</span>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Article;
