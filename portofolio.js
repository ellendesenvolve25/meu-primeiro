function toggleMenu() {
    const nav = document.getElementById('nav').querySelector('ul');
    nav.classList.toggle('show');
}

// Navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Fecha o menu mobile se estiver aberto
            const nav = document.getElementById('nav').querySelector('ul');
            nav.classList.remove('show');
            
            // Scroll suave
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});