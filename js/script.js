function ibg(){

    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}

ibg();

    $(document).ready(function() {
        $(".icon-menu").on('click', function(event) {
    
            $(".icon-menu, .menu__body").toggleClass("active");
            $("body").toggleClass("lock");
        });
    });

    $(document).ready(function() {
        $(".search").on('click', function(event) {
    
            $(".menu__form").toggleClass("active");
        });
    });
    
    function eventHandler() {
        const header = document.querySelector('.header');
        header.addEventListener('click', function(e){
            console.log(e.target);
        })
    }
    
    eventHandler();

    const slider = new Swiper('.testimonial-swiper', {
        pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          slidesPerView: 1,
    });