// javascript/Article.jsx
import React from 'react';
import img6 from '../images/img6.png';
import img_smile from '../images/img_smile.png';
import img6_mob from '../images/img6_mob.png';

const HelloAbc = () => {
    return (
        <div className="HelloAbc">
            <img className="full" src={img6}/>
            <div className="ver2">
                <h1>Привет! Это Азбука Дизайна</h1>
                <span>Веб-словарь цифрового дизайна
                    <svg width="29" height="26" viewBox="0 0 29 26" fill="none"
                                                                         xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7617 1.55176C10.7617 5.06775 13.6112 6.20275 14.9539 8.88814" stroke="#B9DBF9" stroke-width="3"
                          stroke-linecap="round"/>
                    <path d="M2.5 5.86328C2.5 9.37928 5.34952 10.5143 6.69222 13.1997" stroke="#B9DBF9" stroke-width="3"
                          stroke-linecap="round"/>
                    <path d="M1.5 23.8737C7.2005 23.8737 13.4519 24.9484 18.4433 21.6848C22.317 19.152 27.7661 13.5988 27.7661 8.55176"
                          stroke="#B9DBF9" stroke-width="2.08848" stroke-linecap="round"/>
                    </svg>
                </span>
            </div>
            <div className="inte hidden">
                <h1>Привет! Это Азбука Дизайна</h1>
                <div className="tags">

                    <h4>
                        <span>Брендбук</span>
                    </h4>

                    <h4>
                        <span>Веб-словарь цифрового дизайна</span>
                    </h4>

                    <h4 className="white">
                        <span>Заговори на языке дизайна вместе с нами!</span>
                        <img className="smile" src={img_smile}/>
                    </h4>

                    <h4>
                        <span>Цветовая кодировка</span>
                    </h4>
                </div>
            </div>
            <img className="mob" src={img6_mob}/>
        </div>
    );
};

export default HelloAbc;
