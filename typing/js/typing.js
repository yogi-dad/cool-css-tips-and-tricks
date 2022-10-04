const typewriterWrapper = document.querySelectorAll(".typewritter");
typewriterWrapper.forEach(element => {
    element.style.setProperty('--elementSize',element.textContent.length);
})