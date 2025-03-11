import React from 'react';

const Alphabet = () => {
    return (
        <div className="AlphabetBlock">
            <div className="switcher">
                <button id="btnAlphabet" className="active">
                    Алфавит
                </button>
                <button id="btnDictionary">Словарь</button>
            </div>
            <div id="content"></div>
        </div>
    );
};

export default Alphabet;
