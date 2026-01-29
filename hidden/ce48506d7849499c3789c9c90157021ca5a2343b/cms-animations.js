// -- Fades --
const animationFadeIn = document.getElementById('animation-fade-in-checkbox');
const animationFadeInUp = document.getElementById('animation-fade-in-up-checkbox');
const animationFadeInDown = document.getElementById('animation-fade-in-down-checkbox');
const animationFadeInLeft = document.getElementById('animation-fade-in-left-checkbox');
const animationFadeInRight = document.getElementById('animation-fade-in-right-checkbox');

// -- Flys --
const animationFlyInUp = document.getElementById('animation-fly-in-up-checkbox');
const animationFlyInDown = document.getElementById('animation-fly-in-down-checkbox');
const animationFlyInLeft = document.getElementById('animation-fly-in-left-checkbox');
const animationFlyInRight = document.getElementById('animation-fly-in-right-checkbox');

// -- Grows --
const animationGrowUp = document.getElementById('animation-grow-up-checkbox');
const animationGrowDown = document.getElementById('animation-grow-down-checkbox');
const animationGrowRight = document.getElementById('animation-grow-right-checkbox');
const animationGrowLeft = document.getElementById('animation-grow-left-checkbox');

// -- Pop --
const animationPopIn = document.getElementById('animation-pop-in-checkbox');

// -- Scroll --
const animationFadeOutShrink = document.getElementById('animation-fade-out-shrink-checkbox');
const animationFadeOutGrow = document.getElementById('animation-fade-out-grow-checkbox');

function invokeAnimationMenu() {
  if (currentlySelected) {
    currentlySelected = getLinkChild(currentlySelected) || currentlySelected;
    animations.classList.remove('content-hide');
    loadedPage.classList.add("sidebar-active");
    cmsMainMenu.classList.add("sidebar-active");
    checkRestrictedControls();
    loadStylesFromSelected();
  }
}