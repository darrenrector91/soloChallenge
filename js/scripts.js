$(document).ready(function () {

    $('.generate').on('click', counterClick);
    $('.container').on('click', '.swap', swapClass);
    $('.container').on('click', '.delete', removeDiv);

    function counterClick() {
        console.log('button clicked');
        $('body').append('<div class="counter"><p><button class="swap">Swap</button><button class="delete">Delete</button></p></div>');
    };

    function removeDiv() {
        console.log('delete clicked');
        $('.counter').remove();
    };

    function swapClass() {
        console.log('swap clicked');
        $('.container').toggleClass('counterTwo');
    };
});