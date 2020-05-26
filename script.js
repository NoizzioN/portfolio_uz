$(function(){
    $('.top-title').fadeIn(3000);
    $('.twitter').show(4000);
    $('.instagram').show(4000);
    $('.menu-icon').fadeIn(5000);
    $('.heading').fadeIn(4000);
    
    function toggleNav() {
      var body = document.body;
      var hamburger = document.getElementById('js-hamburger');
      var blackBg = document.getElementById('js-black-bg');
      
      hamburger.addEventListener('click', function() {
        body.classList.toggle('nav-open');
      });
      blackBg.addEventListener('click', function() {
        body.classList.remove('nav-open');
      });
    }
    toggleNav();

    
})
  
