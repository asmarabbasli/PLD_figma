const burger=document.getElementById('burger');
burger?.addEventListener('click',()=>{
  const nav=document.querySelector('nav.desktop');
  if(!nav)return;
  if(getComputedStyle(nav).display==='none'){
    nav.style.display='flex';
    nav.style.position='absolute';
    nav.style.right='20px';
    nav.style.top='64px';
    nav.style.flexDirection='column';
    nav.style.background='white';
    nav.style.padding='12px';
    nav.style.boxShadow='0 12px 30px rgba(2,6,23,0.12)';
  }else{
    nav.style.display='none';
  }
});

document.querySelector('.search-card input')?.addEventListener('keydown',e=>{
  if(e.key==='Enter'){
    e.preventDefault();
    alert('Search simulated');
  }
});
