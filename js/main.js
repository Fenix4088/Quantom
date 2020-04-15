// HEADER MENU DROPDOWN CLICK
const selectAllElements = document.querySelectorAll('[data-select]');

selectAllElements.forEach(function(item){
    item.addEventListener('click', function () {

        const realSelect = this.nextElementSibling;

        // if click was on a item in dropdown
        if (event.target.hasAttribute('data-select-item')) {

            // We are fined a title in a dropdown menu and saved it to text from data atrr data-select-item 
            let itemTitle = event.target.getAttribute('data-select-item');
            this.querySelector('[data-select-title]').textContent = itemTitle;

            // dropdown become hidden
            this.querySelector('.header-select__dropdown').classList.toggle('hidden');

            // Connection with real SELECT
            // In a Real Select  changing a value in a value-attr
            if (realSelect) {
                realSelect.value = itemTitle;
            }

        } else {
            // if click was on a title
            //  Hidden or show dropdown
            this.querySelector('.header-select__dropdown').classList.toggle('hidden');
        }



    })
});

// OWl Carousel 
$(document).ready(function(){
    $("#slider__carousel").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: []
    });
  });


//   Click on icons inside cart item 

const hartIcon = document.querySelectorAll('.shop__item-icon-hart');
const cartIcon = document.querySelectorAll('.shop__item-icon-cart');

function clickOnIcons(icon) {
    for(let item of icon) {
    
        item.addEventListener('click', function(){
            this.classList.toggle('active');
    
      })
    
    }
}

clickOnIcons(hartIcon);
clickOnIcons(cartIcon);


//  Click on menu icin in a card with item and show specification list

const cards = document.querySelectorAll('.shop__item');

for (let item of cards){
    item.addEventListener('click', function(event){
        const itemMenuIcon = item.querySelector('.shop__item-icon-menu path');
        const itemMenuList = item.querySelector('.shop__item-specification');
        if(event.target == itemMenuIcon){
            itemMenuIcon.classList.toggle('active');
            itemMenuList.classList.toggle('shop__item-specification--show');
        }
    })
}