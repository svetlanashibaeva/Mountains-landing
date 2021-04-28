// $(window).scroll(function(e){
//     parallax();
//   });
  
//   function parallax(){
//     var scrolled = $(window).scrollTop();
//     $('.hg').css('top',-(scrolled*0.0315)+'rem');
//     $('.hg > h1').css('top',-(scrolled*-0.005)+'rem');
//     $('.hg > h1').css('opacity',1-(scrolled*.00175));

//     $('.mg').css('top',-(scrolled*0.0075)+'rem');
//     $('.mg > h1').css('top',-(scrolled*-0.005)+'rem');
//     $('.mg > h1').css('opacity',1-(scrolled*.00175));
//   };

var image = document.querySelector('.hg');
var image2 = document.querySelector('.mg');

new simpleParallax(image, {
    overflow: true,
    scale: 1,
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)'
});

new simpleParallax(image2, {
    overflow: true,
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)'
});

var image3 = document.querySelector('.vg');

new simpleParallax(image3, {
    overflow: true
});

// var images = document.querySelectorAll('.promo__image');

// new simpleParallax(images, {
//     overflow: true
// });