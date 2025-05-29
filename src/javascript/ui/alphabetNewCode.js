const alphabet = "АБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЭЮЯ".split("");

function processArticles(articles) {
    const words = {};

    // Group articles by first letter and sort within each letter
    articles.forEach(article => {
        const firstLetter = article.title[0].toUpperCase();
        const title = article.title;
        const link = article.link_page;

        if (!words[firstLetter]) {
            words[firstLetter] = [];
        }

        words[firstLetter].push([title, link]);
    });

    for (const letter in words) {
        words[letter].sort((a, b) => a[0].localeCompare(b[0], 'ru'));
    }

    return Object.keys(words)
        .sort((a, b) => a.localeCompare(b, 'ru'))
        .reduce((acc, key) => {
            acc[key] = words[key];
            return acc;
        }, {});
}

function generateDictionaryHTML(letter, words) {
    let html = "<ul>";

    (words[letter] || []).forEach(([word, link]) => {
        html += `<li><a href="articles/${link}">${word}</a></li>`;
    });

    html += '</ul>';

    return html;
}

function renderDictionaryForLetter(letter, articles) {
    const sortedWords = processArticles(articles);
    return generateDictionaryHTML(letter, sortedWords);
}


function createWordListItem(word, link) {
    return `<li><a href="articles/${link}">${word}</a></li>`;
}

function createButton(letter) {
    return `<div>${letter}</div>`;
}

function renderDictionary(articles) {
    const words = {};

    articles.forEach(article => {
        const firstLetter = article.title[0].toUpperCase();
        const title = article.title;
        const link = article.link_page;

        if (!words[firstLetter]) {
            words[firstLetter] = [];
        }

        words[firstLetter].push([title, link]);
    });

    for (const letter in words) {
        words[letter].sort((a, b) => a[0].localeCompare(b[0], 'ru'));
    }

    const sortedWords = Object.keys(words)
        .sort((a, b) => a.localeCompare(b, 'ru'))
        .reduce((acc, key) => {
            acc[key] = words[key];
            return acc;
        }, {});

    // Генерация HTML для алфавита
    const abcHtml = alphabet.map(letter => createButton(letter)).join('');

    // Генерация HTML для словаря
    const dictionaryHtml = Object.entries(sortedWords)
        .sort(([letterA], [letterB]) => letterA.localeCompare(letterB, 'ru'))
        .map(([letter, wordList]) => {
            const wordItems = wordList
                .sort((a, b) => a[0].localeCompare(b[0], 'ru'))
                .map(([word, link]) => createWordListItem(word, link))
                .join('');

            return `
                <div>
                    <h3>${letter}${letter.toLowerCase()}</h3>
                    <ul>${wordItems}</ul>
                </div>
            `;
        })
        .join('');

    // Объединение всего HTML
    return `
        <div class="Dictionary">
            ${dictionaryHtml}
            <div class="Abc">${abcHtml}</div>
        </div>
    `;
}

module.exports = { renderDictionaryForLetter, renderDictionary };