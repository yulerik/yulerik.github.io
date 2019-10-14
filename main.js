document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mainHeader").onclick = function() {
      this.style.color = 'orange'
    }
})

document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByTagName("h1").onclick = function() {
      this.style.color = 'orange'
    }
})