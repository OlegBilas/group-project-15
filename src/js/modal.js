!(function (e) {
  'function' != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

// Для блокировки скролла на <body> требуется подключение бибилиотеки bodyScrollLock
// в тело тега <body>, например: <script src="./js/bodyScrollLock.js"></script>!
document.addEventListener('DOMContentLoaded', function () {
  // Записываем в переменные массив элементов-кнопок и подложку.
  const modalButtons = document.querySelectorAll('.js-open-modal');
  // overlaysArr = document.querySelectorAll('.js-overlay-modal'),
  const closeButtons = document.querySelectorAll('.js-close-modal');

  /* Перебираем массив кнопок */
  modalButtons.forEach(function (item) {
    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', function (e) {
      /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
      e.preventDefault();

      /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
      и будем искать модальное окно с таким же атрибутом, и соответствующую модальному окну подложку. */
      const modalId = item.getAttribute('data-modal');
      const modalElem = document.querySelector('[data-modal="' + modalId + '"]:not(button):not(a)');
      const overlay = modalElem.closest('.js-overlay-modal');

      /* После того как нашли нужную подложку, удалим класс is-hidden
      подложке, чтобы показать ее, и блокируем скролл на <body>. */
      overlay.classList.remove('is-hidden');
      bodyScrollLock.disableBodyScroll(document.body); // added
    }); // end click
  }); // end foreach

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      // Скроем подложку вместе с модальным окном и восстановим скролл на <body>
      const overlay = this.closest('.js-overlay-modal');
      overlay.classList.add('is-hidden');
      bodyScrollLock.enableBodyScroll(document.body); // added
    });
  }); // end foreach

  // Добавим слушателя на нажатие клавиши Esc
  document.addEventListener(
    'keyup',
    function (e) {
      const key = e.key;

      if (key === 'Escape') {
        //Активная подложка может быть только одна
        document.querySelector('.backdrop:not(.is-hidden)').classList.add('is-hidden');
        bodyScrollLock.enableBodyScroll(document.body); // added
      }
    },
    false
  );

  // Добавим слушателя на клик по всем оверлеям и установим их скрытие по клику на оверлее
  // overlaysArr.forEach(item => {
  //   item.addEventListener('click', function () {
  //     item.classList.add('is-hidden');
  //     bodyScrollLock.enableBodyScroll(document.body); // added
  //   });
  // });
});
// end ready
