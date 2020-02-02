
var showcount = 0;

$(".showmore-reviews").click(function(){
  if (showcount == 0) {
  $(".hide-review1").show();
    showcount++;
  } else if (showcount==1){
    $(".hide-review2").show();
    showcount++;
  } else if (showcount==2){
    $(".hide-review3").show();
    showcount++;
    $("a.showmore-reviews").html(`<a class="showmore showmore-reviews">Less</a>`);
} else if (showcount==3){
$(".hide").hide();
  showcount=0;
  $("a.showmore-reviews").html(`<a class="showmore showmore-reviews">More</a>`);
}
});


var showcounti = 0;

$(".showmore-interviews").click(function(){
  if (showcounti == 0) {
  $(".hide-interview1").show();
    showcounti++;
  } else if (showcounti==1){
    $(".hide-interview2").show();
    showcounti++;
  } else if (showcounti==2){
    $(".hide-interview3").show();
    showcounti++;
    $("a.showmore-interviews").html(`<a class="showmore showmore-interviews">Less</a>`);
} else if (showcounti==3){
$(".hide-interview").hide();
  showcounti=0;
  $("a.showmore-interviews").html(`<a class="showmore showmore-interviews">More</a>`);
}
});



var showcountv = 0;

$(".showmore-visits").click(function(){
  if (showcountv == 0) {
  $(".hide-visit1").show();
    showcountv++;
    $("a.showmore-visits").html(`<a class="showmore showmore-visits">Less</a>`);
  } else if (showcountv==1){
    $(".hide-visit1").hide();

    showcountv=0;
    $("a.showmore-visits").html(`<a class="showmore showmore-visits">More</a>`);
  }
});
