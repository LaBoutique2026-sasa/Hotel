/* ==========================
   LA BOUTIQUE HOTEL VIP JS
========================== */

/* Navbar Background On Scroll */

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background =
"rgba(0,0,0,0.95)";

}else{

navbar.style.background =
"rgba(0,0,0,0.75)";

}

});


/* Smooth Animation */

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform=
"translateY(0px)";

}

});

},

{
threshold:0.15
}

);


const elements = document.querySelectorAll(

".room-card,.review-card,.about-image,.feature,.gallery-grid img"

);

elements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition="all .8s ease";

observer.observe(el);

});


/* Gallery Lightbox */

const images =
document.querySelectorAll(".gallery-grid img");

images.forEach(img=>{

img.addEventListener("click",()=>{

const lightbox =
document.createElement("div");

lightbox.style.position="fixed";
lightbox.style.top="0";
lightbox.style.left="0";
lightbox.style.width="100%";
lightbox.style.height="100%";
lightbox.style.background=
"rgba(0,0,0,0.95)";
lightbox.style.display="flex";
lightbox.style.alignItems="center";
lightbox.style.justifyContent="center";
lightbox.style.zIndex="9999";

const image =
document.createElement("img");

image.src = img.src;

image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="15px";

lightbox.appendChild(image);

document.body.appendChild(lightbox);

lightbox.addEventListener("click",()=>{

lightbox.remove();

});

});

});


/* Contact Form */

const form =
document.querySelector("form");

form.addEventListener("submit",

function(e){

e.preventDefault();

alert(
"Thank you for contacting La Boutique Hotel. We will get back to you soon."
);

form.reset();

});


/* Auto Hero Text Effect */

const title =
document.querySelector(".hero h1");

const originalText =
title.innerText;

title.innerText = "";

let i = 0;

function typeWriter(){

if(i < originalText.length){

title.innerHTML +=
originalText.charAt(i);

i++;

setTimeout(typeWriter,70);

}

}

window.onload = typeWriter;


/* Scroll To Top Button */

const topBtn =
document.createElement("button");

topBtn.innerHTML =
"↑";

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.background="#d4af37";
topBtn.style.color="#000";
topBtn.style.display="none";
topBtn.style.zIndex="9999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY > 400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});


console.log(
"La Boutique Hotel VIP Website Loaded Successfully"
);