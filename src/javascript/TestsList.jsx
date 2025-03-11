import React from 'react';

import TestBanner2 from '../images/TestBanner2.png';
import TestBanner3 from '../images/TestBanner3.png';
import TestBanner4 from '../images/TestBanner4.png';
import TestBanner1 from '../images/TestBanner1.png';

const TestsList = () => {
    return (
        <div className="TestsList">
            <span className="Test">
                <img src={TestBanner2}/>
                <div className="TestAbsCont">
                    <h3 className="tag">Сленг</h3>
                    <h2 className="text">Проверь свой уровень<br/> знания терминов дизайна</h2>
                    <a href="test1.html"><span>Начать</span> <svg width="9" height="13" viewBox="0 0 9 13" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.87021 12.0101L7.32812 6.61907L1.87021 1.22801" stroke="#24262B"
                                  stroke-width="1.83562"
                                  stroke-linecap="round"/>
                            </svg>
                    </a>
                </div>
            </span>

            <span className="Test">
                <img src={TestBanner3}/>
                <div className="TestAbsCont">
                    <h3 className="tag">Колористика</h3>
                    <h2 className="text">Всё про иконки</h2>
                    <a href="test1.html"><span>Начать</span> <svg width="9" height="13" viewBox="0 0 9 13" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.87021 12.0101L7.32812 6.61907L1.87021 1.22801" stroke="#24262B"
                                  stroke-width="1.83562"
                                  stroke-linecap="round"/>
                            </svg>
                    </a>
                </div>
            </span>

            <span className="Test">
                <img src={TestBanner1}/>
                <div className="TestAbsCont">
                    <h3 className="tag">Колористика</h3>
                    <h2 className="text">Вопрос на хамелеон</h2>
                    <a href="test1.html"><span>Начать</span> <svg width="9" height="13" viewBox="0 0 9 13" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.87021 12.0101L7.32812 6.61907L1.87021 1.22801" stroke="#24262B"
                                  stroke-width="1.83562"
                                  stroke-linecap="round"/>
                            </svg>
                    </a>
                </div>
            </span>

            <span className="Test">
                <img src={TestBanner4}/>
                <div className="TestAbsCont">
                    <h3 className="tag">Интерфейс</h3>
                    <h2 className="text">UX исследования</h2>
                    <a href="test1.html"><span>Начать</span> <svg width="9" height="13" viewBox="0 0 9 13" fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.87021 12.0101L7.32812 6.61907L1.87021 1.22801" stroke="#24262B"
                                  stroke-width="1.83562"
                                  stroke-linecap="round"/>
                            </svg>
                    </a>
                </div>
            </span>
        </div>

    );
};

export default TestsList;
