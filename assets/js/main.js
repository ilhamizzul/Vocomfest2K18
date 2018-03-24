// (function(){
// 	var preload = document.getElementById("preload");
// 	var loading = 0;
// 	var id = setInterval(frame, 64);

// 	function frame() {
// 		if (loading == 100) {
// 			clearInterval(id);
// 			window.open("index.html", "_self"); 
// 		} else {
// 			loading = loading + 1;
// 			if (loading == 90) {
// 				preload.style.animation = "fadeout 1s ease";
// 			}
// 		}
// 	}
// })();

// preload = document.getElementById("preload")

// function fade(preload) {
//     var op = 1;  // initial opacity
//     var timer = setInterval(function () {
//         if (op <= 0.1){
//             clearInterval(timer);
//             preload.style.display = 'none';
//         }
//         preload.style.opacity = op;
//         preload.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op -= op * 0.1;
//     }, 50);
// }


// var myNav = document.getElementById('mynav');
// window.onscroll = function () { 
//     "use strict";
//     if (document.body.scrollTop >= 1200 ) {
//         myNav.classList.remove("collored-navbar");
//     } 
//     else {
//         myNav.classList.add("collored-navbar");
//     }
// };

// window.addEventListener('scroll', function (e) {
//         var nav = document.getElementById('mynav');
//         var a = document.getElementById('anchor');
//         if (document.documentElement.scrollTop || document.body.scrollTop > 1200) {
//                 nav.classList.add('collored-navbar');
//                 anchor.classList.add('collored-navbar');
//             } else {
//                 nav.classList.remove('collored-navbar');
//                 anchor.classList.remove('collored-navbar');
//             }
//     });

// $(window).scroll(function () {
// if ($(window).scrollTop() >= 550) {
// $('.navbar').css('background','#00796B');
// } else {
// $('.navbar').css('background','transparent');
// }
// });

$(window).scroll(function() {
  if ($(document).scrollTop() > 525) {
    $('nav').addClass('collored-navbar');
  } else {
    $('nav').removeClass('collored-navbar');
  }
});

function preload(){
	$(function() {
		$("#preload").fadeOut("slow");
	});
}
setTimeout(preload, 2000);