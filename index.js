// Smooth scrolling code
$("#navigation ul li a[href^='#']").on('click', function(e) {
   // Prevent default anchor click behavior
   e.preventDefault();
   // Store hash
   var hash = this.hash;
   // Animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 500, function(){
       window.location.hash = hash;
     });
});

window.sr = ScrollReveal();

sr.reveal('#intro-words', {
  duration: 2000,
  delay: 1000
});

sr.reveal('#intro-paragraph', {
  duration: 2000,
  delay: 1000
});

sr.reveal('#skills-intro', {
  duration: 2000
});

sr.reveal('.my-skills', {
  duration: 2000,
  distance: '300px'
});

sr.reveal('.left', {
  duration: 2000,
  origin: 'right',
  distance: '300px'
});

sr.reveal('.right', {
  duration: 2000,
  origin: 'left',
  distance: '300px'
});
