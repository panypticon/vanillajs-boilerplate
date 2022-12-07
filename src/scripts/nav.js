import smoothscroll from 'smoothscroll-polyfill';

export const handleNavClick = (evt, navIcon) => {
    const { target } = evt.target.dataset;
    if (target) {
        evt.preventDefault();
        smoothscroll.polyfill();
        navIcon.classList.remove('nav__icon--close');
        const destination = document.getElementById(target);
        window.scrollTo({
            top: destination.offsetTop - 60,
            left: 0,
            behavior: 'smooth'
        });
    }
};

export const handleStickyNav = nav => {
    if (window.scrollY >= 350) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
};

export const handleCurrentNavItem = (sections, navItems) => {
    sections.forEach(section => {
        const { top } = section.getBoundingClientRect();
        if (top >= -150 && top <= 150)
            navItems.forEach(item => {
                if (item.children[0].dataset.target === section.id) item.classList.add('nav__list--active');
                else item.classList.remove('nav__list--active');
            });
    });
};
