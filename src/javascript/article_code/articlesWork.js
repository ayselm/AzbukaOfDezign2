document.addEventListener('DOMContentLoaded', function() {
    const nopaginationRelatedIsActive = nopaginationRelated ?? false;
    const currentSlug = window.location.pathname.split('/').pop().replace('.html', '');

    const articlesPerPage = nopaginationRelatedIsActive ? 5 : 6; // Количество статей на странице
    let currentPage = 1; // Текущая страница
    const urlParams = new URLSearchParams(window.location.search);
    let currentCategory = urlParams.get('filter') || 'все';

    function displayArticles(page = 1, category = 'все') {
        const filteredArticlesBySlug = globalThis.articles.filter(article => article.slug !== currentSlug);
        const filteredArticles = (category === 'все'
            ? filteredArticlesBySlug
            : filteredArticlesBySlug.filter(article => article.categories.includes(category)));

        const start = (page - 1) * articlesPerPage;
        const end = start + articlesPerPage;
        const paginatedArticles = filteredArticles.slice(start, end);

        const articlesHtml = paginatedArticles.map(article => `
            <a href="/articles/${article.link_page}">
                <div>
                    <img src="${(constArticle ? "." : "" )+ article.preview_img}" alt="${article.title}">
                    <h3>${article.title}</h3>
                    <h4 class="Descr">${article.short_desc}</h4>
                </div>
                <div class="Nav">
                    <h5 class="tag">${article.tags.join(', ')}</h5>
                    <span class="time">
                        ${ nopaginationRelatedIsActive ?
            `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.70196 18.3551C5.0449 18.3551 1.26831 14.5785 1.26831 9.92144C1.26831 5.26438 5.0449 1.48779 9.70196 1.48779C14.3607 1.48779 18.1356 5.26438 18.1356 9.92144C18.1356 14.5785 14.3607 18.3551 9.70196 18.3551" stroke="white" stroke-width="1.26505" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.50049 7.07764V10.3718L12.0913 11.9523" stroke="white" stroke-width="1.26505" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`:
           ` <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.58808 17.8202C4.9062 17.8202 1.1095 14.0235 1.1095 9.34162C1.1095 4.65974 4.9062 0.863037 9.58808 0.863037C14.2716 0.863037 18.0667 4.65974 18.0667 9.34162C18.0667 14.0235 14.2716 17.8202 9.58808 17.8202"
                    stroke="#24262B" stroke-opacity="0.5" stroke-width="1.27179" stroke-linecap="round"
                    stroke-linejoin="round"></path>
                <path d="M9.38562 6.48242V9.79415L11.9902 11.383" stroke="#24262B" stroke-opacity="0.5"
                      stroke-width="1.27179" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>`

        }
                        <span>${article.reading_time} мин</span>
                    </span>
                </div>
            </a>
        `).join('');

        document.querySelector('.AriclesBlock').innerHTML = articlesHtml;

        if(!nopaginationRelatedIsActive) {
            updatePagination(filteredArticles.length, page);
            document.querySelector('.stolen')?.classList?.add('hidden');
        }
    }

    function updatePagination(totalArticles, currentPage) {
        const totalPages = Math.ceil(totalArticles / articlesPerPage);
        let paginationHtml = '';

        if (totalPages <= 6) {
            // Show all pages if 6 or fewer
            for (let i = 1; i <= totalPages; i++) {
                paginationHtml += `<a href="#" class="${i === currentPage ? 'active' : ''}">${i}</a>`;
            }
        } else {
            // Always show first page
            paginationHtml += `<a href="#" class="${currentPage === 1 ? 'active' : ''}">1</a>`;

            // Determine start and end for middle pages
            let startPage, endPage;
            if (currentPage <= 3) {
                startPage = 2;
                endPage = 5;
            } else if (currentPage >= totalPages - 2) {
                startPage = totalPages - 4;
                endPage = totalPages - 1;
            } else {
                startPage = currentPage - 1;
                endPage = currentPage + 2;
            }

            // Ensure startPage and endPage stay within bounds
            startPage = Math.max(2, startPage);
            endPage = Math.min(totalPages - 1, endPage);

            // Adjust if we don't have enough pages to show 5 numbers
            if (endPage - startPage < 3) {
                if (currentPage <= 3) {
                    endPage = Math.min(5, totalPages - 1);
                } else {
                    startPage = Math.max(2, totalPages - 4);
                }
            }

            // Add ellipsis after first page if needed
            if (startPage > 2) {
                paginationHtml += `<span>...</span>`;
            }

            // Add middle pages
            for (let i = startPage; i <= endPage; i++) {
                paginationHtml += `<a href="#" class="${i === currentPage ? 'active' : ''}">${i}</a>`;
            }

            // Add ellipsis before last page if needed
            if (endPage < totalPages - 1) {
                paginationHtml += `<span>...</span>`;
            }

            // Always show last page
            paginationHtml += `<a href="#" class="${currentPage === totalPages ? 'active' : ''}">${totalPages}</a>`;
        }

        document.querySelector('.Pagination').innerHTML = paginationHtml;
    }

    if(!nopaginationRelatedIsActive) {
        document.querySelector('.Pagination').addEventListener('click', function (event) {
            event.preventDefault();
            if (event.target.tagName === 'A') {
                currentPage = parseInt(event.target.textContent);
                displayArticles(currentPage, currentCategory);
            }
        });
    }

    document.querySelectorAll('.filter h4').forEach(filter => {
        filter.addEventListener('click', function() {
            document.querySelectorAll('.filter h4').forEach(f => f.classList.remove('active'));

            this.classList.add('active');

            currentCategory = this.textContent.trim().toLowerCase();
            currentPage = 1;
            displayArticles(currentPage, currentCategory);
        });
    });

    document.querySelectorAll('.filter h4').forEach(f => f.classList.remove('active'));
    document.querySelector(`.filter h4[data-tag="${currentCategory}"]`)?.classList?.add('active');

    displayArticles(currentPage, currentCategory);
});



const navigationSlipper = document.querySelector('.navigationSlipper');
const razmetkaArticle = document.querySelector('.razmetkaArticle');
const author = document.querySelector('.author-info');

if (navigationSlipper && razmetkaArticle && author) {
    const slipper = navigationSlipper.querySelector('.slipper');
    const topMargin = 80; // Отступ от верха окна
    const triggerOffset = 40; // Смещение на 40 пикселей выше верхней части .razmetkaArticle

    function scrollArticleOption() {
        const scrollPosition = window.scrollY;
        const articleTop = razmetkaArticle.offsetTop - triggerOffset; // Точка активации: верх статьи - 40px
        const articleBottom = razmetkaArticle.offsetTop + razmetkaArticle.offsetHeight;
        const authorTop = author.offsetTop; // Верхняя позиция .author-info
        const slipperHeight = slipper.offsetHeight;

        // Check if top of .author-info is below scroll position
        if (scrollPosition < articleBottom) {
            navigationSlipper.style.alignItems = 'flex-start'; // Set align-items to flex-start
        } else {
            navigationSlipper.style.alignItems = 'flex-end'; // Set align-items to flex-end when .author-info top is hidden
        }

        // Existing positioning logic
        if (scrollPosition > authorTop) {
            // Если верх .author-info достиг или пересёк верх окна
            slipper.style.position = 'unset';
        } else if (scrollPosition > articleTop) {
            // Если прокрутили дальше точки активации (.razmetkaArticle верх - 40px)
            if (scrollPosition + slipperHeight + topMargin < articleBottom) {
                // Если не достигли конца статьи
                slipper.style.position = 'fixed';
                slipper.style.top = topMargin + 'px';
            } else {
                // Если достигли конца статьи
                navigationSlipper.style.alignItems = 'flex-end';
                slipper.style.position = 'unset';
            }
        } else {
            // Если выше точки активации (.razmetkaArticle - 40px)
            slipper.style.position = 'unset';
        }
    }

    // Initial call
    scrollArticleOption();
    // Event listener for scroll
    window.addEventListener('scroll', scrollArticleOption);
}