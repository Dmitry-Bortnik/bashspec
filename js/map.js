setTimeout(function(){
    var elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=7f1cfca7-b63e-455b-9c7b-64905eee2b19&lang=ru_RU&onload=getYaMap';
    document.getElementsByTagName('body')[0].appendChild(elem);
  }, 2000);
  function getYaMap(){
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [54.727573,55.937067],
              zoom: 13
          }, {
              searchControlProvider: 'yandex#search'
          }),
  
  
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'г. Уфа, ул. Коммунистическая, д. 40, кв. 106',
              // balloonContent: 'Это красивая метка'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: '/img/geo.svg',
              // Размеры метки.
              iconImageSize: [50, 74],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -68]
          });
  

      myMap.geoObjects
          .add(myPlacemark)
  });
}
