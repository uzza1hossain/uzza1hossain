"use strict";

$(".homepage-slides").owlCarousel({
	items: 1,
	loop: true,
	autoplay: false,
	dots: false,
	nav: true,
	navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]

});

$(".product-promotions").owlCarousel({
	items: 1,
	loop: true,
	autoplay: false,
	dots: true,
	nav: false,
});

$(".product-list").masonry();


$(".menu-trigger").on("click", function() {
	$(".off-canvar-menu, .off-canvar-overlay").("active");
	return false;

});