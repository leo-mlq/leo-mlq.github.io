$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $("#aboutme");
  var offset = startchange.offset();

  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $("nav").css('background-color', 'black');
        $(".navlist > li > a").css('color', 'white');

      } else {
        $('nav').css('background-color', 'grey');
        $(".navlist > li > a").css('color', 'black');
      }
    });
  }
});
/*add navbar active link*/

/*add expandable navagation bar when width is less than 860px;*/