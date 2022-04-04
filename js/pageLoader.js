

function loadPage(target, blank = false) {
    try {
        if (blank) {
            window.open(target, '_blank').focus();
        }
        else {
            window.location.href = '../' + target;
        }
    } catch (error) {
        console.error('Page could not be loaded: \n' + target)
    }
}