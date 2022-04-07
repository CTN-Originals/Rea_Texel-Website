

function updateElementPositions(scrollPos) {
    var nav = document.getElementById('nav');
    var footer = document.getElementById('footer');
    if (nav.offsetTop - scrollPos <= 1) {
        //add class to nav
        nav.classList.add('nav-top-position');
    }
    else {
        nav.classList.remove('nav-top-position');
    }
    console.log('\ninnerHeight: ' + window.innerHeight)
    console.log('offsetTop: ' + footer.offsetTop)
    console.log('offsetHeight: ' + footer.offsetHeight + '\n')
}