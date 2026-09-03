document.addEventListener("DOMContentLoaded", () => {
    const bannerMessages = ["Welcome Spartans!", "New Website!"];
    const marquee = document.querySelector('marquee');
    if (marquee) {
        // Joining with non-breaking spaces and a separator for a cleaner look
        marquee.innerHTML = bannerMessages.join("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;———&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    }
});
