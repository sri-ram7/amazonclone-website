import {todayDeal} from "./todaydeal.js";
console.log(todayDeal);


let slideBtnLeft = document.getElementById("slider-btn-left");
let slideBtnRight = document.getElementById("slider-btn-right");
let imgItem = document.querySelectorAll(".image-item"); 
console.log(imgItem.length - 1);

let startSlider = 0;
let endSlider = imgItem.length - 1;

slideBtnLeft.addEventListener("click", handleLeft);

function handleLeft() {
   
    if (startSlider < 0) {
        startSlider = startSlider + 100;
        imgItem.forEach(element => {
            element.style.transform = `translateX(${startSlider}%)`;
        });
    }
}

slideBtnRight.addEventListener("click", handleRight);

function handleRight() {
   
    if (startSlider > -100 * endSlider) {
        startSlider = startSlider - 100;
        imgItem.forEach(element => {
            element.style.transform = `translateX(${startSlider}%)`;
        });
    }
}



const sidebarnavigationcloseEl =document.getElementById("sidebar-navigation-close");
const sidebarnavigationEl = document.getElementById("sidebar-container-navigation-id");
const sidebaropennavigationEl = document.getElementById("open-nav-sidebar");
let value = 0;
let value1 = -100;
sidebaropennavigationEl.addEventListener("click", () => {
    sidebarnavigationEl.style.transform= `translateX(${value}%)`; 
});

sidebarnavigationcloseEl.addEventListener("click", () => {
    sidebarnavigationEl.style.transform = `translateX(${value1}%)`;
})

function renderSlideAuto() {

    if (startSlider > -100 * endSlider) {
        handleRight()
    }
    else {
        startSlider = 0;
    }
}
setInterval(renderSlideAuto, 4000);





let todayDealProducttListEl = document.querySelector(".today_deals_product_list");
console.log(todayDealProducttListEl)

let todayDealProductHTML = ""

let todayDeallength = todayDeal.length;

for( let i = 0 ; i < todayDeallength ; i++){
    console.log(todayDeal[i])

    todayDealProductHTML += `
        <div class="today_deals_product_item">
              <img src = ${todayDeal[i].img}  />        
        </div>
    
    `
}
todayDealProducttListEl.innerHTML = todayDealProductHTML
console.log(todayDealProductHTML)

let today_deal_btn_prevEl = document.getElementById("today-deal-btn-prev");
let today_deal_btn_nextEl = document.getElementById("today-deal-btn-next");
let today_deals_product_itemEl = document.querySelectorAll(".today_deals_product_item");

let startproduct = 0;
let productWidth = 525; 
let totalItems = today_deals_product_itemEl.length;
let maxSlide = -productWidth * (totalItems - 1);

today_deal_btn_prevEl.addEventListener("click", () => {


    
    if (startproduct < 0) {
        startproduct += productWidth; 
    }

    today_deals_product_itemEl.forEach(item => {
        item.style.transform = `translateX(${startproduct}px)`;
    });
});

today_deal_btn_nextEl.addEventListener("click", () => {
    
    
    if (startproduct > maxSlide) {
        startproduct -= productWidth;  
    }

    today_deals_product_itemEl.forEach(item => {
        item.style.transform = `translateX(${startproduct}px)`;
    });
});


let today_deal1_btn_prevEl = document.getElementById("today-deal1-btn-prev");
let today_deal1_btn_nextEl = document.getElementById("today-deal1-btn-next");
let today_deals1_product_itemEl = document.querySelectorAll(".today_deals_product_item1");

let startproduct1 = 0;
let productWidth1 = 525;
let totalItems1 = today_deals1_product_itemEl.length;
let maxSlide1 = -productWidth * (totalItems1 - 1);

today_deal1_btn_prevEl.addEventListener("click", () => {



    if (startproduct1 < 0) {
        startproduct1 += productWidth1; 
    }

    today_deals1_product_itemEl.forEach(item => {
        item.style.transform = `translateX(${startproduct1}px)`;
    });
});

today_deal1_btn_nextEl.addEventListener("click", () => {
    
   
    if (startproduct1 > maxSlide1) {
        startproduct1 -= productWidth1; 
    }

    today_deals1_product_itemEl.forEach(item => {
        item.style.transform = `translateX(${startproduct1}px)`;
    });
});


