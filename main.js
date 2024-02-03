console.log('Hello World!');

const openNav = document.querySelector(".mobileBtn");
const header = document.querySelector(".header");

openNav.addEventListener("click", function () {
  header.classList.toggle("nav1")
});

//alert("by Victor Gabriel");

const changeBg = document.querySelector(".btn");
const body = document.querySelector(".mom");

changeBg.addEventListener ("click", function () {
  body.classList.toggle("us")
})