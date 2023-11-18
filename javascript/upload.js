
/*

whatsapp: https://api.whatsapp.com/send?text=[post-title] [post-url]




Twitter social share URL:

https://twitter.com/share?url=[post-url]&text=[post-title]




LinkedIn social share URL:

https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]




Facebook social share URL:

https://www.facebook.com/sharer.php?u=[post-url]



*/  

const facebookBtn = document.querySelector(".facebook-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");


function init() {
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Check out this post from NESA UNILAG: ")

    facebookBtn.setAttribute(
        "href", 
        `https://www.facebook.com/sharer.php?u=${postUrl}`
    );

    twitterBtn.setAttribute(
        "href", 
        `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
    );

    whatsappBtn.setAttribute(
        "href", 
        `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`
    );

    linkedinBtn.setAttribute(
        "href", 
        `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
    );
}


init();

