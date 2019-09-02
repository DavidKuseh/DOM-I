const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//my code
//select all anchor tags
const newNav = document.querySelectorAll('a');

//assign value from siteContent to anchor tags
newNav[0].textContent = siteContent.nav['nav-item-1'];
newNav[1].textContent = siteContent.nav['nav-item-2'];
newNav[2].textContent = siteContent.nav['nav-item-3'];
newNav[3].textContent = siteContent.nav['nav-item-4'];
newNav[4].textContent = siteContent.nav['nav-item-5'];
newNav[5].textContent = siteContent.nav['nav-item-6'];


const newCta = document.querySelector('.cta h1');
newCta.textContent = siteContent.cta['h1'];

const newButton = document.querySelector('.cta button');
newButton.textContent = siteContent.cta['button'];

const newImg = document.getElementById("cta-img");
newImg.setAttribute('src', siteContent.cta["img-src"]);

//top content
const mainContentFeaturesH4 = document.querySelectorAll('.top-content h4')[0];
mainContentFeaturesH4.textContent = siteContent["main-content"]["features-h4"];

const mainContentFeaturesP = document.querySelectorAll('.top-content p')[0];
mainContentFeaturesP.textContent = siteContent["main-content"]["features-content"];

const mainContentAboutH4 = document.querySelectorAll('.top-content h4')[1];
mainContentAboutH4.textContent = siteContent["main-content"]["about-h4"];

const mainContentAboutP = document.querySelectorAll('.top-content p')[1];
mainContentAboutP.textContent = siteContent["main-content"]["about-content"];

//middle image
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//bottom content
const mainContentServicesH4 = document.querySelectorAll('.bottom-content h4')[0];
mainContentServicesH4.textContent = siteContent["main-content"]["services-h4"];

const mainContentServicesP = document.querySelectorAll('.bottom-content p')[0];
mainContentServicesP.textContent = siteContent["main-content"]["services-content"];

const mainContentProductH4 = document.querySelectorAll('.bottom-content h4')[1];
mainContentProductH4.textContent = siteContent["main-content"]["product-h4"];

const mainContentProductP = document.querySelectorAll('.bottom-content p')[1];
mainContentProductP.textContent = siteContent["main-content"]["product-content"];

const mainContentVisionH4 = document.querySelectorAll('.bottom-content h4')[2];
mainContentVisionH4.textContent = siteContent["main-content"]["vision-h4"];

const mainContentVisionP = document.querySelectorAll('.bottom-content p')[2];
mainContentVisionP.textContent = siteContent["main-content"]["vision-content"];

//Contact
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactAddress = document.querySelectorAll('.contact p')[0];
contactAddress.textContent = siteContent["contact"]["address"];

const contactPhone = document.querySelectorAll('.contact p')[1];
contactPhone.textContent = siteContent["contact"]["phone"];

const contactEmail = document.querySelectorAll('.contact p')[2];
contactEmail.textContent = siteContent["contact"]["email"];

