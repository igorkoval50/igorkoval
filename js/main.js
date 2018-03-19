$(function() {
	$('.slick').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
   {
      breakpoint: 1350,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
      {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
  {
      breakpoint: 945,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
     {
      breakpoint: 530,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
         {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});