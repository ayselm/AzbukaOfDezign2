// javascript/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="TopBlock">
                <div className="LeftBlock"><p className="title">Подпишитесь сейчас<br/> на нашу рассылку</p>
                    <p className="descr">Мы присылаем отличные материалы<br/>и никогда не спамим. Отписаться<br/> можно в
                        любой момент
                    </p>
                    <p className="CreatedAt">2025</p></div>
                <div className="RightBlock">
                    <div className="TpBlock">
                        <div className="CustomInput"><input type="email" placeholder="Ваш email"/><span
                            className="but">Отправить</span>
                        </div>
                        <div className="policy"><input id="chBox" type="checkbox"/> <label htmlFor="chBox">Я согласен с
                            политикой
                            конфиденциальности</label></div>
                    </div>
                    <div className="CopyRightBlock"><span>Азбука дизайна</span>
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.12695" y="0.855713" width="38.9981" height="38.9825" rx="19.4912" stroke="white"
                                  stroke-opacity="0.5" stroke-width="0.75"></rect>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M24.8986 27.7538C25.1141 27.9265 25.3918 27.9696 25.6395 27.8636C25.8871 27.7568 26.0691 27.5175 26.124 27.2274C26.7056 24.1341 28.1164 16.3047 28.6458 13.4908C28.6859 13.2788 28.619 13.0584 28.4718 12.9167C28.3245 12.7751 28.1204 12.7342 27.9384 12.8107C25.1322 13.9862 16.4901 17.6559 12.9577 19.1351C12.7335 19.229 12.5876 19.4729 12.595 19.7403C12.603 20.0084 12.7623 20.241 12.9919 20.319C14.576 20.8552 16.6554 21.6013 16.6554 21.6013C16.6554 21.6013 17.6271 24.9225 18.1338 26.6116C18.1973 26.8237 18.3439 26.9903 18.5373 27.0479C18.7301 27.1047 18.9362 27.0448 19.0801 26.8911C19.8939 26.0216 21.1521 24.6771 21.1521 24.6771C21.1521 24.6771 23.5427 26.6608 24.8986 27.7538ZM17.5301 21.1817L18.6538 25.3762L18.9034 22.72C18.9034 22.72 23.2449 18.2883 25.7198 15.7623C25.7921 15.6881 25.8021 15.5639 25.7419 15.4768C25.6823 15.3897 25.5725 15.3692 25.4902 15.4283C22.6218 17.5014 17.5301 21.1817 17.5301 21.1817Z"
                                  fill="white"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
