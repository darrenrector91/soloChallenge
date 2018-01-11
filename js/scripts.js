$(document).ready(function () {

    $('.generate').on('click', counterClick);
    $('.container').on('click', '.swap', swapClass);
    $('.container').on('click', '.delete', removeDiv);

    function counterClick() {
        console.log('generate clicked');
        $('.container').append('<div class="counter"><p><button class="swap">Swap</button><button class="delete">Delete</button></p></div>');
    };

    function removeDiv() {
        console.log('delete clicked');
        $(this).parent().parent().remove();
    };

    function swapClass() {
        console.log('swap clicked');
        $('counter').toggleClass('counterTwo');
    };
});