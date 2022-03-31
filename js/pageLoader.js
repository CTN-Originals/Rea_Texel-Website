

function loadPage(target) {
    try {
        window.location.href = '../' + target;
    } catch (error) {
        console.error('Page could not be loaded: \n' + target)
    }
}