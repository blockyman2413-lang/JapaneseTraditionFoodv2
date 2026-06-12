const footer=document.getElementById('homeFooter');

// Bottom homepage utk link masuk sos med. Link dgn style.css. Ada dlm beberapa page bila scroll habis smpi bawah

window.addEventListener('scroll',()=>{if(!footer)return;const bottom=window.innerHeight+window.scrollY>=document.body.offsetHeight-50;footer.classList.toggle('show',bottom);});
const form=document.getElementById('contactForm');

// Dummy login sites kat contact us page. Kalau org try login dia akan auto erase and acah2 sucess login bawah tu. 
// Some setting utk fade out speed "sucess" lepas login tu

if(form){form.addEventListener('submit',e=>{e.preventDefault();form.reset();const msg=document.getElementById('successMsg');msg.style.display='block';msg.style.opacity='1';setTimeout(()=>{msg.style.transition='opacity 1.5s';msg.style.opacity='0';},1300);setTimeout(()=>{msg.style.display='none';msg.style.transition='';},3000);});}

// Jump button kat page resepi. Kalau malas nak scroll boleh tekan terus makanan tu utk skip 

document.querySelectorAll('.recipe-jump a').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault();document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth',block:'start'});});});
let locked=false;

// Untuk part resepi. Ada function bila scroll dia ada sens. 

if(document.querySelector('.recipe-section')){window.addEventListener('wheel',e=>{if(locked)return;e.preventDefault();locked=true;const sections=[...document.querySelectorAll('.recipe-section')];let current=sections.findIndex(s=>Math.abs(s.getBoundingClientRect().top)<window.innerHeight/2);let next=current+(e.deltaY>0?1:-1);next=Math.max(0,Math.min(sections.length-1,next));sections[next].scrollIntoView({behavior:'smooth'});setTimeout(()=>locked=false,900);},{passive:false});}

// Music function 

const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicToggle");

if (btn && music) {
    btn.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            btn.innerHTML = "🔊";
        } else {
            music.pause();
            btn.innerHTML = "🔇";
        }
    });
}