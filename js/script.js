var elem = document.getElementById('hamburger-menu');
elem.addEventListener('touchstart', toggleMenu);
elem.addEventListener('click', toggleMenuDesktop);

function toggleMenu (){
    [].forEach.call(document.querySelectorAll('.header-menu'), function(el){ el.classList.toggle('hidden'); });
    elem.removeEventListener('click', toggleMenuDesktop);
}
function toggleMenuDesktop (){
    [].forEach.call(document.querySelectorAll('.header-menu'), function(el){ el.classList.toggle('hidden'); });
    elem.removeEventListener('touchstart', toggleMenu);
}


var intervalID = setInterval(function(){
    // every 4 seconds execute following
    var visibleWord = document.getElementsByClassName('elem-visible')[0],
        hiddenWord = document.getElementsByClassName('elem-hidden')[0];
    visibleWord.setAttribute('class','elem-hidden');
    hiddenWord.setAttribute('class','elem-visible');
}, 10000);
