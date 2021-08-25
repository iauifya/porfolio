//owl-carousel
$(".owl-carousel").owlCarousel({
  margin: 10,
  autoHeight: true,
  loop: true,
  center: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  nav: true,
	navText: [ ],
  responsiveClass:true,
  responsive:{
    0:{
      items: 1,
    },
    800:{
      items: 2,
      autoHeight: true,
    },
  }
});