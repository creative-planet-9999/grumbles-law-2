document.getElementById("navbar-btn").addEventListener("click", function(event){
    event.preventDefault();
    var target = document.getElementById("nav").classList;
    if ( target.contains("open") ) {
        target.remove("open"); }
    else {
        target.add("open"); }
});
