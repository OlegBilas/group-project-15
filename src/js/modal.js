/* Універсальний скрипт підключення модальних вікон
 (обмеження на кількість модалок немає, потрібно тільки їх правильно перенумерувати)
 На кнопку відкриття модалки задати клас "js-open-modal" та атрибут data-modal="1" (по порядковому номеру)
 На оверлей задати клас "js-overlay-modal"
 На модалку задати атрибут data-modal="1" (по порядковому номеру)
 На кнопку закриття задати клас "js-close-modal"*/

/* Для блокировки скролла на <body> требуется подключение бибилиотеки bodyScrollLock
 в тело тега <body>, например: <script src="./js/bodyScrollLock.js"></script>*/
document.addEventListener('DOMContentLoaded', function () {
  // Записываем в переменные массив элементов-кнопок и подложку.
  const modalButtons = document.querySelectorAll('.js-open-modal');
  const overlaysArr = document.querySelectorAll('.js-overlay-modal');
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

  // Добавим слушателя на клик по всем оверлеям и установим их скрытие по клику вне модалки
  overlaysArr.forEach(item => {
    item.addEventListener('click', function (e) {
      if (e.target === e.currentTarget) {
        item.classList.add('is-hidden');
        bodyScrollLock.enableBodyScroll(document.body); // added}
      }
    });
  });
});
// end ready
