
// footer date

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();




// links

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");


navToggle.addEventListener("click", function(){
    // linksContainer.classList.toggle("show-links");
    // above line cant add dynamic height property to its toggle button for the links to show

    const linksHeight = links.getBoundingClientRect().height;
    // console.log(linksHeight);
    const linkscontainerHeight = linksContainer.getBoundingClientRect().height;
    // console.log(linksHeight);
    if (linkscontainerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else{
        linksContainer.style.height = 0;
    }
});

// ========== fixed navbar    ===========

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    // console.log(scrollHeight);
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    }else{
        navbar.classList.remove("fixed-nav")
    }

    // for toplink top arrow

    if(scrollHeight >500){
        topLink.classList.add("show-top-link");
    }else{
        topLink.classList.remove("show-top-link")
    }
});

// XXXXXXXX Smooth Scroll XXXXXXXXX

// select links

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((lynk)=>{
    lynk.addEventListener("click", (e)=>{
        // prevent default
        e.preventDefault();


        // navigate to specific spot
        const id  = e.currentTarget.getAttribute("href").slice(1);
        // console.log(id);
        const element = document.getElementById(id);
        // console.log(element);

        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const linkscontainerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav"); // it make sure fixed-nav class available then it works
        let position = element.offsetTop - navHeight;
        // console.log(position);
        if(!fixedNav){  // if there is no fixednav means no fixed-Nav class
            position = position - navHeight // we removed the height of the navigations links
        }
        if(navHeight > 82){
            position = position+ linkscontainerHeight; //above we removed links height so we are adding links height here along with link position/height which is position
        }
        window.scrollTo({
            left:0,top:position,
        });
        linksContainer.style.height = 0; // it will make sure toggle button off
    })
})



