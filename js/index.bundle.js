$(document).ready(function(){

    // Находим блок с слайдерами
    const owl = $('#slider-blog');
    // Запускаем карусель
    owl.owlCarousel({
        items: 2,
        loop: true
    });

    // Находим кастомные кнопки вперед/назад
    const prev = $('#sliderPrev');
    const next = $('#sliderNext');

    // Клик на кнопку назад и прокрутка карусели
    prev.click(function(){
        owl.trigger('prev.owl.carousel')
    });

    // Клик на кнопку вперед и прокрутка карусели
    next.click(function(){
        owl.trigger('next.owl.carousel')
    });
  });
