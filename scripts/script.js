// Aplicar número do WhatsApp vindo da variável CSS
(function () {
    const rootStyles = getComputedStyle(document.documentElement);
    const numero = rootStyles.getPropertyValue('--whatsapp-numero').replace(/"/g, "").trim();

    const linkWhats = document.querySelectorAll('[data-whatsapp]');

    linkWhats.forEach(link => {
        link.href = `https://wa.me/${numero}`;
    });
})();

// MENU MOBILE — toggle + fechar ao clicar fora + fechar ao clicar em link
(function () {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navAnchors = document.querySelectorAll('.nav-links a');

    if (!menuBtn || !navLinks) return;

    // Abrir/fechar menu
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navLinks.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Fechar ao clicar em link
    navAnchors.forEach(a => {
        a.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Fechar ao clicar fora
    document.addEventListener('click', (evt) => {
        const target = evt.target;
        if (navLinks.classList.contains('open') && !navLinks.contains(target) && !menuBtn.contains(target)) {
            navLinks.classList.remove('open');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Fechar com ESC
    document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape' && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });
})();

// Smooth links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (ev) => {
        const href = a.getAttribute('href');
        if (href.length > 1) {
            ev.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Envio do formulário (Formspree)
(function () {
    const form = document.querySelector("form[action*='formspree']");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const dados = new FormData(form);

        const resposta = await fetch(form.action, {
            method: "POST",
            body: dados,
            headers: { Accept: "application/json" },
        });

        if (resposta.ok) {
            alert("Mensagem enviada com sucesso! 👍");
            form.reset();
        } else {
            alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
        }
    });
})();

// Atualizar ano
(function () {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
})();

// ===== Alternância de Tema Claro / Escuro =====
(function () {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    // Carregar preferência salva
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
        btn.textContent = "☀️";
    }

    btn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');

        const isDark = document.documentElement.classList.contains('dark');
        btn.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
})();

// Trocar imagens no modo dark/light

// Detectar preferência do sistema e aplicar automaticamente
(function () {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem('theme');

    // Se o usuário nunca clicou no botão, usar o tema do sistema
    if (!savedTheme) {
        if (prefersDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
})();


(function () {
    const imgs = document.querySelectorAll(".swap-theme-img");

    function updateImages() {
        const darkMode = document.documentElement.classList.contains("dark");
        imgs.forEach(img => {
            img.src = darkMode ? img.dataset.dark : img.dataset.light;
        });
    }

    // Carrega corretamente ao abrir a página
    updateImages();

    // Reexecuta quando o tema mudar
    const btn = document.getElementById("themeToggle");
    if (btn) {
        btn.addEventListener("click", updateImages);
    }
})();

