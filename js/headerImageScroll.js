const images = document.getElementsByClassName('header-image');
const scrollOptions = [
    [{x: 0,y: -100}],
    [{x: 0, y: 100}],
    [{x: -100, y: 0}],
    [{x: 100, y: 0}]
]
var activeImageIndex = 0;
var currentScrollOption = 0;


function init() {
    for (var i = 0; i < images.length; i++) {
        const target = images[i];
        if (target.classList.contains("enabled")) {
            activeImageIndex = i;
            break;
        }
    }

    headerImageCycle();
}

async function headerImageCycle() {
    var nextImageIndex = activeImageIndex + 1;
    var scrollPosition = scrollOptions[currentScrollOption]
    if (nextImageIndex > images.length - 1) { nextImageIndex = 0; }
    
    images[nextImageIndex].classList.add('activating');
    images[activeImageIndex].classList.add('deactivating');
    await sleep(1000);
    images[activeImageIndex].classList.replace('enabled', 'disabled');
    images[nextImageIndex].classList.replace('disabled', 'enabled');

    images[nextImageIndex].classList.remove('activating');
    images[activeImageIndex].classList.remove('deactivating');
    await sleep(4000);
    activeImageIndex = nextImageIndex;
    currentScrollOption++;
    if (currentScrollOption > scrollOptions.length -1) {currentScrollOption = 0;}
    headerImageCycle();
}

init();


