const p=document.querySelector('.progress');addEventListener('scroll',()=>{const m=document.documentElement.scrollHeight-innerHeight;p.style.width=(m?scrollY/m*100:0)+'%'});
