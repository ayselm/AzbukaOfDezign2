import React from 'react';
import ReactDOM from 'react-dom/client';

import Quiz from '../Quiz1.jsx';

const App = () => {
    return (
        <>
            <Quiz/>
        </>
    );
};

// Рендеринг приложения в DOM
const root = document.getElementById("reactComponentRoot");
ReactDOM.createRoot(root).render(<App/>);
