var _top = 6
$(function(){
  $("#newsMore").click(function(){
    _top = _top + 6;
    loadMoreNews(_top)
  })
})

/**
 * 轮播图
 */
var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  // nextButton: '.swiper-button-next',
  // prevButton: '.swiper-button-prev',
  parallax: true,
  speed: 600,
  //grabCursor : true,
  loop: true,
  autoplay: 5000,
  autoplayDisableOnInteraction: false,
});