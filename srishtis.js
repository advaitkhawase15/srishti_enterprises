function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display !== "none") {
    dots.style.display = "none";
    moreText.style.display = "inline";
  }
  else {
    var aTag = document.getElementById("myBtn_a")
    aTag.setAttribute('href', "all products.html");
  }
}