import React, {useState} from 'react';

const questions = [
    {
        question: "Что такое «персона» в UX дизайне?",
        answers: [
            {text: "Виртуальный персонаж в игре", isCorrect: false},
            {text: "Вымышленный пользователь, представляющий целевую аудиторию", isCorrect: true},
            {text: "Реальный пользователь, участвующий в тестировании", isCorrect: false},
            {text: "Специалист по UX-дизайну", isCorrect: false}
        ]
    },
    {
        question: "Какой метод используется для сбора качественных данных о пользователях?",
        answers: [
            {text: "Опросы", isCorrect: false},
            {text: "Интервью", isCorrect: true},
            {text: "Анализ данных", isCorrect: false},
            {text: "A/B тестирование", isCorrect: false}
        ]
    },
    {
        question: "Что такое «пользовательское тестирование»?",
        answers: [
            {text: "Процесс проверки дизайна на соответствие стандартам", isCorrect: false},
            {text: "Процесс наблюдения за пользователями во время взаимодействия с продуктом", isCorrect: true},
            {text: "Процесс разработки продукта", isCorrect: false},
            {text: "Процесс создания прототипов", isCorrect: false}
        ]
    },
    {
        question: "Какой из следующих методов позволяет понять, как пользователи воспринимают интерфейс?",
        answers: [
            {text: "Фокус-группы", isCorrect: true},
            {text: "SWOT-анализ", isCorrect: false},
            {text: "Анализ конкурентов", isCorrect: false},
            {text: "Статистический анализ", isCorrect: false}
        ]
    },
    {
        question: "Что такое «карта пути пользователя»?",
        answers: [
            {text: "Графическое представление этапов взаимодействия пользователя с продуктом", isCorrect: true},
            {text: "Список всех функций продукта", isCorrect: false},
            {text: "Методология оценки пользовательского опыта", isCorrect: false},
            {text: "Инструмент для создания интерфейсов", isCorrect: false}
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

const Quiz3 = () => {
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

export default Quiz3;