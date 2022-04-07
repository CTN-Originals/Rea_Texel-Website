var baseElements = {
    body: document.getElementById('body'),
    nav: document.getElementById('nav'),
    footer: document.getElementById('footer'),
    scales: {
        scrollbarWidth: getScrollbarWidth(),
    }
}

function init() {
    console.log(baseElements);
}
function updateScales() {
    baseElements.scales.scrollbarWidth = getScrollbarWidth();
    document.documentElement.style.setProperty('--scrollbarWidth', baseElements.scales.scrollbarWidth)

    console.log(getScrollbarState(baseElements.body))
}

function getScrollbarWidth() {

    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);
  
    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);
  
    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  
    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
}
function getScrollbarState(element) {
    let style = window.getComputedStyle(element);
    return !!(element.scrollTop || (++element.scrollTop && element.scrollTop--)) 
           && style["overflow"] !== "hidden" && style["overflow-y"] !== "hidden";
}

init()
