const menuBtn = document.querySelector('.menubtn');
const links = document.querySelector('.links');
const linksContainer = document.querySelector(".links-container");

menuBtn.addEventListener('click', () => {
    const linksHeight = links.getBoundingClientRect().height;
    // console.log(linksHeight);
    const linkscontainerHeight = linksContainer.getBoundingClientRect().height;
    // console.log("linkscontainerHeight =",linkscontainerHeight);
    if (linkscontainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }
    // links.classList.toggle('showlinks')
    // console.log("hii")
});


// ================for fixed nav==============

const navbar = document.getElementById('nav');
const toplink = document.querySelector('.top-link');
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    // console.log(scrollHeight);
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
    // for top link floating arrow button
    if (scrollHeight > 500) {
        toplink.classList.add('show-top-link');
    } else {
        toplink.classList.remove('show-top-link');
    }

});

//=========for smooth scroll and clickable links

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((lynk) => {
    lynk.addEventListener('click', (e) => {
        e.preventDefault(); // to prevent default actions

        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);// slice(1) returns an array but 1 not inclusive which means except 1st item it will give all items in an array
        // console.log(id);
        //calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        // console.log("navHeight =", navHeight);
        const linkscontainerHeight = linksContainer.getBoundingClientRect().height;
        const fixednav = navbar.classList.contains('fixed-nav');// it make sure fixed-nav class available then it works
        const element = document.getElementById(id);
        if (!element) {
            return; // element with specified id was not found, do nothing
        }

        let position = element.offsetTop - navHeight; //above i defined element
        // console.log(position);
        if (!fixednav) {  // if there is no fixednav means no fixed-Nav class
            position = position - navHeight;// we removed the height of the navigations links
        }
        if (navHeight > 82) {
            position = position + linkscontainerHeight;
            //above we removed links height so we are adding links height here along with link position/height which is position
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0; // it will make sure toggle button off
    });
});

// for scrollspy

const scrollspylinks = document.querySelectorAll('#simple-list-example a');
const sections = document.querySelectorAll('.scrollspy-example h4');

function makeActive(scrollspylinks) {
    for (let i = 0; i < scrollspylinks.length; i++) {
        scrollspylinks[i].classList.remove('active');
    }
    scrollspylinks.classList.add('active');
}

function checkActive(section) {
    for (let i = 0; i < sections.length; i++) {
        const currentSection = sections[i];
        const currentLink = scrollspylinks[i];
        if (currentSection.offsetTop <= window.scrollY + 200 && (currentSection.offsetTop + currentSection.offsetHeight) > window.scrollY + 200) {
            makeActive(currentLink);
        }
    }
}

window.addEventListener('scroll', function () {
    checkActive(this);
});





// for footer date

const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // months are 0-indexed, so we need to add 1
const year = currentDate.getFullYear();

document.getElementById('fdate').innerHTML = day+" /";
document.getElementById('fmonth').innerHTML = month+" /";
document.getElementById('fyear').innerHTML = year;



//================ digital clock-- at footer section
let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    //digital clock
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM"

    //convert 24h clock to 12h clock

    if (h > 12) {
        h = h - 12;
    }
    // add zero before sngle digite

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
});
