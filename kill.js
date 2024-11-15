function blockAndDisplayLinkedIn() {
    // Target the LinkedIn main feed without affecting the "Start a post" section
    const feedItems = document.querySelectorAll('[aria-label="Main Feed"] > div');
    feedItems.forEach((item, index) => {
        // Keep the first item (usually the "Start a post" section)
        if (index !== 0) {
            item.remove();
        }
    });

    // Hide LinkedIn sidebar elements
    const rightSidebar = document.querySelector('.scaffold-layout__aside');
    const leftSidebar = document.querySelector('.scaffold-layout__aside--left');
    
    if (rightSidebar) {
        rightSidebar.innerHTML = '';
    }
    if (leftSidebar) {
        leftSidebar.innerHTML = '';
    }
}

window.setInterval(blockAndDisplayLinkedIn, 100);
