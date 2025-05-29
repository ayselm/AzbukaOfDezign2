var currentTestFilter = "все";

document.querySelectorAll('.filter h4').forEach(filter => {
    filter.addEventListener('click', function() {
        const wrapper = document.querySelector('.wrapper');
        const wrapperHeight = wrapper.offsetHeight;

        currentTestFilter = this.getAttribute('data-tag');
        console.log(currentTestFilter);

        document.querySelectorAll('[data-tag]').forEach(f => f.classList.remove('active'));
        this.classList.add('active');


        if (currentTestFilter === "все") {
            document.querySelectorAll('span[data-tag]').forEach(f => f.classList.add('active'));
            wrapper.style.height = 'auto';
        } else {
            document.querySelectorAll(`[data-tag="${currentTestFilter}"]`).forEach(f => f.classList.add('active'));
            wrapper.style.height = `${wrapperHeight}px`;
        }
    });
});


const wrapper = document.querySelector('.wrapper');
if (currentTestFilter !== "все") {
    const wrapperHeight = wrapper.offsetHeight;
    document.querySelectorAll('[data-tag]').forEach(f => f.classList.remove('active'));
    document.querySelectorAll(`[data-tag="${currentTestFilter}"]`).forEach(f => f.classList.add('active'));
    wrapper.style.height = `${wrapperHeight}px`;
} else {
    wrapper.style.height = 'auto';
}


window.addEventListener('resize', () => {
    wrapper.style.height = 'auto';
});