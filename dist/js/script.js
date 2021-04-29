//preloading
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 2500);
}

//parallax
var hg = document.querySelector('.hg');
var mg = document.querySelector('.mg');
var vg = document.querySelector('.vg');

new simpleParallax(hg, {
    overflow: true,
    scale: 1
});

new simpleParallax(mg, {
    overflow: true,
    scale: 1.4
});

new simpleParallax(vg, {
    overflow: true
});
