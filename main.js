document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mainHeader").onclick = function() {
      this.style.color = 'orange'
    }
})

document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByTagName("h2").onclick = function() {
      this.style.color = 'orange'
    }
})

$( document ).ready(function() {
  $( "#heading" ).click(function() {
    $( "#heading" ).fadeOut( "slow", function() {
    });
  });
});
