const title = document.getElementById("title-block");

const info = document.getElementById("about-me");

const footerlinks = document.getElementById("footer-links");

let infoDisplayed = false;

let footerlinksDisplayed = true;


title.addEventListener("click", function() {
    
    if (infoDisplayed == true) {
        info.style.display = "none";
        infoDisplayed = false;
        footerlinks.style.display = "flex";
        footerlinksDisplayed = true;
    } else {
        info.style.display = "block";
        infoDisplayed = true;
        footerlinks.style.display = "none";
        footerlinksDisplayed = false;
    }
})