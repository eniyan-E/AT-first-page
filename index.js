// const bar = document.querySelector(".fa-bars");
// const menu = document.querySelector(".menu");

// bar.addEventListener("click", () => {
//   menu.classList.toggle("show-menu");
// });

// const btnEl = document.querySelector(".btn-web-app");
// const helloEl = document.getElementById("content-first")


// btnEl.addEventListener("click", ()=> {
//     helloEl.innerText = "hellom everyone"

// })

const webAppEl = document.querySelector(".btn-web-app");
const mobileAppEl = document.querySelector(".btn-mobile-app");
const digitalMarketingEl = document.querySelector(".btn-digital-marketing");


const  pEl = document.getElementById("content-first");
const h3El = document.getElementById("content-second");
const h5El = document.getElementById("content-third");

webAppEl.addEventListener("click", () => {
    pEl.innerHTML = "WEB APPLICATION"
    h5El.innerHTML = "We Create Awesome Website That Suits Your Business And Create a<br>User Experience That Your Customer Love."
    h3El.innerHTML = "Flourish Your Business<br>With App Teq"
})

mobileAppEl.addEventListener("click", () => {
    pEl.innerHTML = "MOBILE APPLICATION"
    h3El.innerHTML = "Make Your Business Smart!!"
    h5El.innerHTML = "Our Mobile Appication development spans from simple consumer<br>mobile apps to complex enterprise mobility solutions."
})

digitalMarketingEl.addEventListener("click", () => {
    pEl.innerHTML = "DIGITAL MARKETING"
    h3El.innerHTML = "Search Engine Optimization & <br>Marketing "
    h5El.innerHTML = "Search Engine Optimiztion is fundamental to success of your<br>business. Our SEO strategies will earn your higher site ranking in<br>search results."
})