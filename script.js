let isScrolling = false;
let scrollTimeout;

window.addEventListener('scroll', () => {
    if (window.innerWidth > 1000) {
        if (!isScrolling) {
            isScrolling = true;

            scrollTimeout = setTimeout(() => {
                isScrolling = false;
                const scrollY = window.scrollY;
                const viewportHeight = window.innerHeight;
                const remainder = scrollY % viewportHeight;
                const scrollTo = remainder > viewportHeight / 2
                    ? scrollY + (viewportHeight - remainder)
                    : scrollY - remainder;

                window.scrollTo({
                    top: scrollTo,
                    behavior: 'smooth'
                });
            }, 100);
        } else {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
                const scrollY = window.scrollY;
                const viewportHeight = window.innerHeight;
                const remainder = scrollY % viewportHeight;
                const scrollTo = remainder > viewportHeight / 2
                    ? scrollY + (viewportHeight - remainder)
                    : scrollY - remainder;

                window.scrollTo({
                    top: scrollTo,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.texts1');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    boxes.forEach(box => {
        observer.observe(box);
    });
});

