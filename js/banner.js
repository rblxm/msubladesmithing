document.addEventListener("DOMContentLoaded", () => {
    const bannerMessages = ["Welcome Spartans!", "New Website!"];
    const marqueeWrapper = document.querySelector('.marquee-wrapper');
    
    if (marqueeWrapper) {
        // Clear loading text
        marqueeWrapper.innerHTML = '';
        
        // Create the content container
        const contentDiv = document.createElement('div');
        contentDiv.className = 'marquee-content';
        
        // Create a single set of messages
        const spacer = "&nbsp;".repeat(20) + "★" + "&nbsp;".repeat(20);
        const messageString = bannerMessages.join(spacer) + spacer;
        
        // Duplicate the content for seamless looping
        // We repeat it enough times to cover the screen, then double THAT for the seamless effect
        const singleSet = messageString;
        const repeatedSet = new Array(5).fill(singleSet).join('');
        
        contentDiv.innerHTML = repeatedSet + repeatedSet;
        
        marqueeWrapper.appendChild(contentDiv);
    }
});
