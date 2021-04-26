$(window).scroll(function(e){
    parallax();
  });
  
  function parallax(){
    var scrolled = $(window).scrollTop();
    $('.promo__wrapper').css('top',-(scrolled*0.0315)+'rem');
    $('.promo__wrapper > h1').css('top',-(scrolled*-0.005)+'rem');
    $('.promo__wrapper > h1').css('opacity',1-(scrolled*.00175));
  };