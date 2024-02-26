$(document).ready(function(){

    // Находим блок с слайдерами
    const owl = $('#slider-blog');
    const prev = $('#sliderPrev');
    const next = $('#sliderNext');
    const navIcon = document.querySelector(".nav-icon");
    const nav = document.querySelector(".nav-mobile");

    // Запускаем карусель
    owl.owlCarousel({
        margin:60,
        autoWidth:true,
        smartSpeed: 2000,
        items: 2
    });

    // Клик на кнопку назад и прокрутка карусели
    prev.click(function(){
        owl.trigger('prev.owl.carousel')
    });

    // Клик на кнопку вперед и прокрутка карусели
    next.click(function(){
        owl.trigger('next.owl.carousel')
    });

    /****** Мобильная навигация и кнопка ******/
    navIcon.addEventListener("click", function () {
    this.classList.toggle("nav-icon--active");
    nav.classList.toggle("nav-mobile--active");
    // bodyEl.classList.toggle("lock");
    });


  });
