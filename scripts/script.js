// MENU MOBILE — toggle + fechar ao clicar fora + fechar ao clicar em link
(function(){
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links'); // nav com class="nav-links"
const navAnchors = document.querySelectorAll('.nav-links a');

if (!menuBtn || !navLinks) return; // garante segurança se elemento não existir

// Toggle do menu
menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // evita que o click dispare o listener do document
    const isOpen = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
});

// Fecha o menu ao clicar em qualquer link do menu (boa UX em mobile)
navAnchors.forEach(a => {
    a.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
    }
    });
});

// Fecha o menu ao clicar fora (na página)
document.addEventListener('click', (evt) => {
    const target = evt.target;
    // se o menu estiver aberto e o click não for no menu nem no botão, fecha
    if (navLinks.classList.contains('open') && !navLinks.contains(target) && !menuBtn.contains(target)) {
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Fecha o menu ao pressionar ESC
document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    }
});
})();
//
function openProject(id){
alert('Abrir projeto ' + id + ' — substitua por modal/custom lightbox.');
}


// Submissão fake do formulário
function submitForm(e){
e.preventDefault();
const f = e.target;
const nome = f.nome.value.trim();
const mail = f.email.value.trim();
if(!nome || !mail){
alert('Preencha nome e email.');
return;
}

// --- Função para Atualizar Automaticamente o Ano de Copyright ---
(function() {
    const yearElement = document.getElementById('current-year');
    
    // Verifica se o elemento foi encontrado na página
    if (yearElement) {
        // Obtém o ano atual (ex: 2025)
        const currentYear = new Date().getFullYear();
        
        // Atualiza o conteúdo do elemento com o ano atual
        yearElement.textContent = currentYear;
    }
})();


// Aqui você pode adicionar fetch/ajax para enviar o formulário ao seu servidor
f.reset();
alert('Mensagem enviada! (exemplo, configure envio real no backend)');
}


// Smooth links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click', (ev)=>{
const href = a.getAttribute('href');
if(href.length>1){
ev.preventDefault();
document.querySelector(href).scrollIntoView({behavior:'smooth'});
}
})
})