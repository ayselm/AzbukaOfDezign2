import React, {useState} from 'react';

const questions = [
    {
        question: "Что такое «цветовой круг»?",
        answers: [
            {text: "Инструмент для измерения температуры цвета", isCorrect: false},
            {text: "Графическое представление цветов и их взаимосвязей", isCorrect: true},
            {text: "Метод создания цветовых палитр", isCorrect: false},
            {text: "Система классификации оттенков", isCorrect: false}
        ]
    },
    {
        question: "Какой цвет считается тёплым?",
        answers: [
            {text: "Синий", isCorrect: false},
            {text: "Зеленый", isCorrect: false},
            {text: "Красный", isCorrect: true},
            {text: "Фиолетовый", isCorrect: false}
        ]
    },
    {
        question: "Что такое «комплементарные цвета»?",
        answers: [
            {text: "Цвета, которые находятся рядом друг с другом на цветовом круге", isCorrect: false},
            {text: "Цвета, которые усиливают друг друга", isCorrect: false},
            {text: "Цвета, которые находятся напротив друг друга на цветовом круге", isCorrect: true},
            {text: "Цвета, которые создают гармонию", isCorrect: false}
        ]
    },
    {
        question: "Какой из следующих факторов влияет на восприятие цвета?",
        answers: [
            {text: "Освещение", isCorrect: false},
            {text: "Контекст", isCorrect: false},
            {text: "Культура", isCorrect: false},
            {text: "Все вышеперечисленное", isCorrect: true}
        ]
    },
    {
        question: "Что такое «цветовая палитра»?",
        answers: [
            {text: "Набор инструментов для рисования", isCorrect: false},
            {text: "Список всех возможных цветов", isCorrect: false},
            {text: "Выбор определенных цветов для проекта", isCorrect: true},
            {text: "Методология тестирования цветов", isCorrect: false}
        ]
    }
];

const results = [
    {
        title: "Любознательный джун",
        descr: "Тебя впереди ожидает большой,<br/>но очень интересный путь!",
        img: '/images/img11.png'
    },
    {
        title: "Любознательный джун",
        descr: "Тебя впереди ожидает большой,<br/>но очень интересный путь!",
        img: '/images/img11.png'
    },
    {title: "Уверенный миддл", descr: "У тебя неплохой результат!<br/>ты уверенный миддл!", img: '/images/img10.png'},
    {title: "Уверенный миддл", descr: "У тебя неплохой результат!<br/>ты уверенный миддл!", img: '/images/img10.png'},
    {title: "Заряженный сениор", descr: "У тебя высокий результат,<br/>ты большой молодец!", img: '/images/img12.png'}
];

const Quiz2 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            setScore((prevScore) => prevScore + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        } else {
            setShowResult(true);
            setTimeout(() => {
                window.adjustFooterPosition();
            }, 100);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setTimeout(() => {
            window.adjustFooterPositionBreak();
        }, 100);
    };

    return (
        <div className="Quiz">
            {showResult ? (
                <div className="result">
                    <img src={results[score].img} alt="Результат"/>
                    <h2>{score}/{questions.length}</h2>
                    <h3>{results[score].title}</h3>
                    <p dangerouslySetInnerHTML={{__html: results[score].descr}}/>
                    <button onClick={restartQuiz}>Пройти тест снова</button>
                </div>
            ) : (
                <>
                    <div className="progress-bar">
                        {questions.map((_, index) => (
                            <div
                                key={index}
                                className={`progress-block ${index <= currentQuestion ? 'filled' : ''}`}
                            />
                        ))}
                    </div>
                    <div className="quest">
                        <div className="question-number">
                            {String(currentQuestion + 1).padStart(2, '0')}
                        </div>
                        <div className="question-text">{questions[currentQuestion].question}</div>
                    </div>

                    <div className="answers">
                        {questions[currentQuestion].answers.map((answer, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerClick(answer.isCorrect)}
                            >
                                {answer.text}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Quiz2;