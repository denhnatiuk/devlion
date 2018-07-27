$(document).ready(function() {
  // slick carousels
  $('.slider.horizontal').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.slider.vertical').slick({
    dots: true,
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    verticalSwiping: true,
    arrows:true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  });
  var horizontals = $('.slider.horizontal .item');
  var verticals = $('.slider.vertical .item');
  for (var i=0; i<horizontals.length; i++){
    var item = horizontals[i];
    item.addEventListener('click',function(){
      var equils = document.querySelector('figure[data-appearence="'+this.dataset.position+'"]');
      var index = parseInt(this.dataset.position, 10)-1;
      var btns = document.querySelectorAll('li');
      for(var j=0; j<btns.length;j++){
        if (j == index){
          btns[j].classList +='slick-active';
          btns[j].childNodes[0].click();
        } else {
          btns[j].classList = '';
        }
      }
    });
  }
  for (var i=0; i<verticals.length; i++){
    var item = verticals[i];
    item.addEventListener('click',function(){
      var equils = document.querySelector('p[data-text="'+this.dataset.appearence+'"]');
      equils.classList.toggle("hidden");
    });
  }
});
