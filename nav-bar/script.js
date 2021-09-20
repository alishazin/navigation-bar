
var stateOpen = false;

function expandNav() {
    if (stateOpen === false) {
        stateOpen = true;
        document.getElementById('right-arrow').style.transform = 'rotate(-180deg)';
        document.getElementById('nav-bar').style.width = '150px';
    } else {
        stateOpen = false;
        document.getElementById('right-arrow').style.transform = 'rotate(0)';
        document.getElementById('nav-bar').style.width = '75px';
    }
}