import React, { useState } from 'react';

const questions = [
    {
        question: "Какое назначение иконок в интерфейсе?",
        answers: [
            { text: "Увеличить размер текста", isCorrect: false },
            { text: "Упростить восприятие информации", isCorrect: true },
            { text: "Изменить цвет фона", isCorrect: false },
            { text: "Добавить анимацию", isCorrect: false }
        ]
    },
    {
        question: "Какой стиль иконок считается наиболее универсальным?",
        answers: [
            { text: "Ретро", isCorrect: false },
            { text: "Плоский (flat)", isCorrect: true },
            { text: "Объемный (3D)", isCorrect: false },
            { text: "Минималистичный", isCorrect: false }
        ]
    },
    {
        question: "Что такое «иконографика»?",
        answers: [
            { text: "Научная дисциплина, изучающая иконки", isCorrect: false },
            { text: "Искусство создания иконок и символов", isCorrect: true },
            { text: "Методология тестирования иконок", isCorrect: false },
            { text: "Процесс выбора шрифтов для иконок", isCorrect: false }
        ]
    },
    {
        question: "Какой из следующих форматов файлов чаще всего используется для веб-иконок?",
        answers: [
            { text: "JPEG", isCorrect: false },
            { text: "PNG", isCorrect: true },
            { text: "PDF", isCorrect: false },
            { text: "DOCX", isCorrect: false }
        ]
    },
    {
        question: "Что важно учитывать при создании иконок для мобильных приложений?",
        answers: [
            { text: "Размер экрана и разрешение", isCorrect: true },
            { text: "Цвет шрифта", isCorrect: false },
            { text: "Длительность анимации", isCorrect: false },
            { text: "Стиль музыки", isCorrect: false }
        ]
    }
];

const results = [
    { title: "Любознательный джун", descr: "Тебя впереди ожидает большой,<br/>но очень интересный путь!", img: '/images/img11.png' },
    { title: "Любознательный джун", descr: "Тебя впереди ожидает большой,<br/>но очень интересный путь!", img: '/images/img11.png' },
    { title: "Уверенный миддл", descr: "У тебя неплохой результат!<br/>ты уверенный миддл!", img: '/images/img10.png' },
    { title: "Уверенный миддл", descr: "У тебя неплохой результат!<br/>ты уверенный миддл!", img: '/images/img10.png' },
    { title: "Заряженный сениор", descr: "У тебя высокий результат,<br/>ты большой молодец!", img: '/images/img12.png' }
];

const Quiz1 = () => {
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
            setTimeout(()=>{
                window.adjustFooterPosition();
            }, 100);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setTimeout(()=>{
            window.adjustFooterPositionBreak();
        }, 100);
    };

    return (
        <div className="Quiz">
            {showResult ? (
                <div className="result">
                    <img src={results[score].img} alt="Результат" />
                    <h2>{score}/{questions.length}</h2>
                    <h3>{results[score].title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: results[score].descr }} />
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

export default Quiz1;