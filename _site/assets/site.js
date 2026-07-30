
const menu=document.querySelector('.menu');const nav=document.querySelector('.nav-links');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close':'Menu'});document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu'}})}
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
const filters=document.querySelectorAll('[data-filter]');const items=document.querySelectorAll('[data-topic]');
filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;items.forEach(i=>i.hidden=!(f==='all'||i.dataset.topic.split(' ').includes(f)))}));

// Warm internal pages shortly before navigation without delaying the current page.
const prefetched=new Set();
function prefetchInternal(link){
  if(!link||!link.href||link.target==='_blank')return;
  const url=new URL(link.href,location.href);
  if(url.origin!==location.origin||url.pathname===location.pathname||prefetched.has(url.href))return;
  prefetched.add(url.href);
  const hint=document.createElement('link');
  hint.rel='prefetch';
  hint.href=url.href;
  hint.as='document';
  document.head.appendChild(hint);
}
document.addEventListener('pointerover',e=>prefetchInternal(e.target.closest('a')), {passive:true});
document.addEventListener('touchstart',e=>prefetchInternal(e.target.closest('a')), {passive:true});
