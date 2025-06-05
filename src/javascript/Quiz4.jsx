import React, {useState} from 'react';

const questions = [
    {
        question: "Укажите устаревшие приёмы в веб-дизайне",
        answers: [
            {text: "Макеты на основе сетки", isCorrect: false},
            {text: "Эффект тиснения", isCorrect: true},
            {text: "Использование инфографики", isCorrect: false},
            {text: "Оптимизация размеров изображения", isCorrect: false}
        ]
    },
    {
        question: "Что такое «кернинг»?",
        answers: [
            {
                text: "Операция изменения расстояния между буквами, выполняется на компьютере автоматически по заданным параметрам",
                isCorrect: false
            },
            {text: "Цифра, обозначающая порядковый номер страницы", isCorrect: false},
            {text: "Операция изменения расстояния между буквами, которая выполняется вручную", isCorrect: true},
            {text: "Графически выделенные нижние и верхние окончания букв и знаков", isCorrect: false}
        ]
    },
    {
        question: "Чем отличается символ многоточия от трех точек?",
        answers: [
            {text: "Обычные точки меньше по размеру", isCorrect: false},
            {text: "Обычные точки крупнее", isCorrect: true},
            {text: "Расстояние между обычными точками меньше", isCorrect: false},
            {text: "Многоточие можно использовать в тексте несколько раз", isCorrect: false}
        ]
    },
    {
        question: "Композиционный центр позволяет...",
        answers: [
            {text: "Создавать оптическую иллюзию", isCorrect: false},
            {text: "Преобразовывать композицию", isCorrect: false},
            {text: "Управлять вниманием зрителя", isCorrect: true},
            {text: "Создавать акцент", isCorrect: false}
        ]
    },
    {
        question: "К какой части текста относится заголовок, если интерлиньяж снизу заголовка меньше, чем сверху?",
        answers: [
            {text: "К нижней части текста", isCorrect: true},
            {text: "Относится к обеим частям текста", isCorrect: false},
            {text: "К верхней части текста", isCorrect: false},
            {text: "Не относится к тексту", isCorrect: false}
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

const Quiz4 = () => {
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

export default Quiz4;