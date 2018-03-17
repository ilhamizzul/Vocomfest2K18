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

preload = document.getElementById("preload")

function fade(preload) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            preload.style.display = 'none';
        }
        preload.style.opacity = op;
        preload.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}


// $(window).scroll(function(){
// 	if ($('.navbar').offset().top < 50) {
// 		$('.navbar').addClass('collored-navbar');
// 	} else {
// 		$('.navbar').removeClass('collored-navbar');
// 	}
// });