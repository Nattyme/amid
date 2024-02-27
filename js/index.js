$(document).ready(function(){

    // Находим блок с слайдерами
    const owl = $('#slider-blog');
    const prev = $('#sliderPrev');
    const next = $('#sliderNext');
    const navIcon = document.querySelector(".nav-icon");
    const nav = document.querySelector(".nav-mobile");
    const navLinks = document.querySelectorAll("#nav-mobile a");
    const bodyEl = document.body;


    /****** Мобильная навигация и кнопка ******/
    navIcon.addEventListener("click", function () {
        this.classList.toggle("nav-icon--active");
        nav.classList.toggle("nav-mobile--active");
        bodyEl.classList.toggle("lock");
    });

    navLinks.forEach(function (item) {
        item.addEventListener("click", function () {
            navIcon.classList.toggle("nav-icon--active");
            nav.classList.toggle("nav-mobile--active");
            bodyEl.classList.toggle("lock");
        });
    });

    nav.addEventListener("click", function(event) {
        if(event.target == event.currentTarget){
            navIcon.classList.remove("nav-icon--active");
            nav.classList.remove("nav-mobile--active");
            bodyEl.classList.remove("lock");
        }
      });

    // Запускаем карусель
    owl.owlCarousel({
        margin: 35,
        autoWidth:true,
        smartSpeed: 2000,
        loop: true,
        items: 1,
        responsiveClass:true,
        responsive:{
            990:{
                margin: 60,
                items:2,
            }
        }
    });

    // Клик на кнопку назад и прокрутка карусели
    prev.click(function(){
        owl.trigger('prev.owl.carousel')
    });

    // Клик на кнопку вперед и прокрутка карусели
    next.click(function(){
        owl.trigger('next.owl.carousel')
    });

  });
