  $(function () {
  $("body").mousemove(function (e) {
    $(".cursor").show().css({
      "left": e.pageX,
      "top": e.pageY
    });
  }).mouseout(function () {
    $(".cursor").hide();
  });
  });
