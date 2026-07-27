document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const icon = menuBtn.querySelector('i');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        if(navLinks.classList.contains('show')){
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 2. Scroll Animation (Reveal on Scroll)
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on initial load

    // 3. Testimonial Slider
    const slides = document.querySelectorAll('.testi-slide');
    if (slides.length > 0) {
        let currentSlide = 0;

        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); // ይቀየራል በየ 5 ሰከንድ
    }
});
/* ================= LOADING SCREEN ================= */

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

setTimeout(()=>{

loader.classList.add("hide");

},2000);

});
/* ================= COUNTER ================= */

const counters=document.querySelectorAll(".counter");

const speed=100;

const startCounter=()=>{

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=Math.ceil(target/speed);

if(count<target){

counter.innerText=count+increment;

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

};

update();

});

};

const counterSection=document.querySelector(".counter-section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter();

observer.unobserve(counterSection);

}

});

});


/* ================= FAQ ================= */

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

faqItems.forEach(faq=>{

if(faq!==item){

faq.classList.remove("active");

}

});

item.classList.toggle("active");

});

});
/* ================= WHATSAPP SHOW/HIDE ================= */

const whatsapp=document.querySelector(".whatsapp");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

whatsapp.style.opacity="1";
whatsapp.style.visibility="visible";

}else{

whatsapp.style.opacity="0";
whatsapp.style.visibility="hidden";

}

});
/* ================= BACK TO TOP ================= */

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

backToTop.style.opacity="1";
backToTop.style.visibility="visible";

}else{

backToTop.style.opacity="0";
backToTop.style.visibility="hidden";

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});
/* ================= SCROLL REVEAL ================= */

const reveals=document.querySelectorAll(".reveal");

function revealSections(){

reveals.forEach(section=>{

const windowHeight=window.innerHeight;

const revealTop=section.getBoundingClientRect().top;

const revealPoint=120;

if(revealTop<windowHeight-revealPoint){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();
/* ================= NEWSLETTER ================= */

const newsletter=document.querySelector(".newsletter-form");

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you for subscribing to Tsega Milk!");

newsletter.reset();

});
