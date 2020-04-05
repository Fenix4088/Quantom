
    // HEADER MENU DROPDOWN CLICK
    const arrowBtn = document.querySelector('[data-select]');

    // fined real select 
    const selectReal = document.querySelector('#selectReal');

    //listener event click inside of select container
    arrowBtn.addEventListener('click', function(event) {
        // test of where click happend
        // event.target - show in what exacly HTML elemet was clicked
        // If you clicked on a item inside dropdown
        if (event.target.hasAttribute('data-select-item')) {

            // take value from attribute data-select-item from this element
            console.log('Click on ITEM');

            // finding a title of our main element and change a text on a value of a select menu
            const itemTitle = event.target.getAttribute('data-select-item');
            console.log(itemTitle);

            // dropdown become hidden
            event.target.closest('[data-select]').querySelector('[data-select-title]').textContent = itemTitle;
            event.target.closest('[data-select]').querySelector('.header-select__dropdown').classList.toggle('hidden');


            // Connection with real SELECT
            // In a Real Select  changing a value in a value-attr
            selectReal.value = itemTitle;

        } else {

            // ELSE: click was not on a dropdown-element. This is TITLE or area around it
            console.log('Click on TITLE and around');

            //  Hidden or show dropdown
            this.querySelector('.header-select__dropdown').classList.toggle('hidden');
        }

    });




