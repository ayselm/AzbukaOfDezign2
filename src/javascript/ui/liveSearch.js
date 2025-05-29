const searchField = document.getElementById('liveSearchField');
const searchResults = document.getElementById('searchResults');
const clearBtn = document.querySelector('.clear-btn');

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function performSearch(query) {
    clearBtn.style.display = query.length >= 1 ? 'block' : 'none';

    if (!query || query.length < 1) {
        searchResults.style.display = 'none';
        return;
    }

    const results = globalThis.articles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.short_desc.toLowerCase().includes(query.toLowerCase())
    );

    searchResults.innerHTML = '';
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results">Ничего не найдено</div>';
        searchResults.style.display = 'block';
        return;
    }

    results.forEach(article => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `<a href="/articles/${article.link_page}">${article.title}</a>`;
        searchResults.appendChild(resultItem);
    });

    searchResults.style.display = 'block';
}

searchField.addEventListener('input', debounce((e) => {
    performSearch(e.target.value.trim());
}, 300));

searchField.addEventListener('focus', () => {
    performSearch(searchField.value.trim());
});

searchField.addEventListener('blur', () => {
    setTimeout(() => {
        searchResults.style.display = 'none';
    }, 200);
});

clearBtn.addEventListener('click', () => {
    searchField.value = '';
    searchResults.style.display = 'none';
    clearBtn.style.display = 'none';
    searchField.focus();
});