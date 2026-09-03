document.addEventListener("DOMContentLoaded", () => {
    const bannerMessages = ["Welcome Spartans!", "New Website!"];
    const marquee = document.querySelector('marquee');
    if (marquee) {
        // Create a large spacer with non-breaking spaces and a visual separator
        const spacer = "&nbsp;".repeat(30) + "★" + "&nbsp;".repeat(30);
        
        // Repeat the entire message set multiple times to ensure even spacing and continuous flow
        const repeatedContent = new Array(15).fill(bannerMessages.join(spacer)).join(spacer);
        
        marquee.innerHTML = repeatedContent;
    }
});
