var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnavbar").style.top = "0";
  } else {
    document.getElementById("topnavbar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
  if(currentScrollPos < 68 )
    {document.querySelector(".navbar").style.background = "none";
    document.querySelector(".navbar").style.boxShadow = "none";}
  else
    {document.querySelector(".navbar").style.background = "#fff";
    document.querySelector(".navbar").style.boxShadow = "1px 1px 3px rgba(0, 0, 0, 0.1)";}
}

// $(document).ready(function(){
//   $(".carousel-btn").on("mouseover mouseout",function(){
//     $(this).toggleClass("btn-outline-warning");
//     $(this).toggleClass("btn-warning");
//   });
// });
