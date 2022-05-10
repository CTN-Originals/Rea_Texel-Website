const images = document.getElementsByClassName('header-image');
const scrollOptions = [
    {
        in: {x: '-100%', y: '0', w: '100%', h: '100%'},
        out: {x: '100%', y: '0', w: '100%', h: '100%'}
    },
    {
        in: {x: '0', y: '-100%', w: '100%', h: '100%'},
        out: {x: '0', y: '100%', w: '100%', h: '100%'}
    },
    {
        in: {x: '100%', y: '0', w: '100%', h: '100%'},
        out: {x: '-100%', y: '0', w: '100%', h: '100%'}
    },
    {
        in: {x: '0', y: '100%', w: '100%', h: '100%'},
        out: {x: '0', y: '-100%', w: '100%', h: '100%'}
    },
    {
        in: {x: '50%', y: '50%', w: '0%', h: '0%'},
        out: {x: '0', y: '0', w: '100%', h: '100%'}
    },
]
var activeImageIndex = 0;
var currentScrollOptionIndex = 0;
const headerCss = document.getElementById('header-sheet').sheet;
var headerCssRoot;
var headerCssRootIndex;


function init() {
    // console.log(headerCss)
    for (const item in headerCss.cssRules) {
        const rule = headerCss.cssRules[item];
        if (rule.selectorText.includes(':root')) {
            headerCssRoot = rule;
            headerCssRootIndex = item;
            break;
        }
    }

    for (var i = 0; i < images.length; i++) {
        const target = images[i];
        if (target.classList.contains("enabled")) {
            activeImageIndex = i;
            break;
        }
    }
    // testFunction();
    headerImageCycle();
}

async function headerImageCycle() {
    var nextImageIndex = activeImageIndex + 1;
    if (nextImageIndex > images.length - 1) { 
        nextImageIndex = 0;
        if (currentScrollOptionIndex == scrollOptions.length - 1) {
            currentScrollOptionIndex--;
        }
    }

    prepairImage(images[activeImageIndex], images[nextImageIndex]);
    await sleep(1000);
    images[activeImageIndex].classList.replace('enabled', 'disabled');
    images[nextImageIndex].classList.replace('disabled', 'enabled');
    
    images[nextImageIndex].classList.remove('activating');
    images[activeImageIndex].classList.remove('deactivating');
    await sleep(4000);
    
    activeImageIndex = nextImageIndex;
    currentScrollOptionIndex++;
    if (currentScrollOptionIndex > scrollOptions.length -1) {currentScrollOptionIndex = 0;}

    headerImageCycle();
}
function prepairImage(current, target) {
    const pos = scrollOptions[currentScrollOptionIndex];
    
    var rootValues = ':root {\n';
    rootValues += '\t--header-image-in-top:' + pos.in.y + ';\n';
    rootValues += '\t--header-image-in-left:' + pos.in.x + ';\n';
    rootValues += '\t--header-image-in-width:' + pos.in.w + ';\n';
    rootValues += '\t--header-image-in-height:' + pos.in.h + ';\n\n';
    rootValues += '\t--header-image-out-top:' + pos.out.y + ';\n';
    rootValues += '\t--header-image-out-left:' + pos.out.x + ';\n';
    rootValues += '\t--header-image-out-width:' + pos.out.w + ';\n';
    rootValues += '\t--header-image-out-height:' + pos.out.h + ';\n';
    rootValues += '}';
    headerCss.deleteRule(headerCssRootIndex);
    headerCss.insertRule(rootValues, headerCssRootIndex);
    
    target.classList.add('activating');
    current.classList.add('deactivating');
    // console.log(headerCss.cssRules[6].cssText);
}


function testFunction() {
    var stylesheet = document.styleSheets;
    // console.log(stylesheet);
}

init();