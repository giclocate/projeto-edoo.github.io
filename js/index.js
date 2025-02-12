document.addEventListener('DOMContentLoaded', () => {
    // Ativar menu responsivo
    const navbarBurgers = document.querySelectorAll('.navbar-burger');
    
    navbarBurgers.forEach(burger => {
        burger.addEventListener('click', () => {
            const target = document.getElementById(burger.dataset.target);
            burger.classList.toggle('is-active');
            target.classList.toggle('is-active');
        });
    });
});
