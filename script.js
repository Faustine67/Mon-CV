//NAVBAR //
let lastScrollTOP=0;
navbar= document.getElementById('navbar');

window.addEventListener('scroll',function() {
    const scrollTop = window.pageTOffset ||
    this.document.documentElement.scrollTop;

// si scrollTOp est sup à la derniere fois que l'on a scrollé (soit lorsque l'on remonte, soit lorsque l'on descend) alors la nav bar disparait
// Pour faire disparaitre la nav bar, on agit sur son style, en la faisant remonter de 50px
if (scrollTop > lastScrollTop) {
        nav.style.top="-50px";
    } else{
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
})

//TYPED //
var typed= new Typed('.typed',{
strings: ["Bonjour,je m'apelle Faustine",
"Je suis passionnée par le digital, le web et les nouvelles technologies. J'ai eu la chance de pouvoir évoluer dans le marketing digital avant de me tourner à présent vers le développement Web et Web Mobile. Je cherche une entreprise dans laquelle je pourrais m'épanouir pour un stage de deux mois."],
typeSpeed: 20,

});