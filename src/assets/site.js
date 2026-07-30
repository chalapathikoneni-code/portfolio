
const menu=document.querySelector('.menu');const nav=document.querySelector('.nav-links');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close':'Menu'});document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu'}})}
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
const filters=document.querySelectorAll('[data-filter]');const items=document.querySelectorAll('[data-topic]');
filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;items.forEach(i=>i.hidden=!(f==='all'||i.dataset.topic.split(' ').includes(f)))}));
