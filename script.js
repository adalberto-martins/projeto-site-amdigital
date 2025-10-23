// Menu móvel 
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
menuBtn && menuBtn.addEventListener('click', ()=>{
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('area-expanded', string(!expanded));
    if(nav.style.display === 'flex') nav.style.display = 'none'; else nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '78px';
    nav.style.right = '32px';
    nav.style.background = 'var(--glass)';
    nav.style.backdropFilter = 'blur(6px)';
    nav.style.padding = '12px';
    nav.style.borderRadius = '12px';
    nav.style.boxShadow = '0 10px 30px rgba(12,20,30,0.08)';
});

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