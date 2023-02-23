/* Універсальний скрипт підключення модальних вікон
 (обмеження на кількість модалок немає, потрібно тільки їх правильно перенумерувати)
 На кнопку відкриття модалки задати клас "js-open-modal" та атрибут data-modal="1" (по порядковому номеру)
 На оверлей задати клас "js-overlay-modal"
 На модалку задати атрибут data-modal="1" (по порядковому номеру)
 На кнопку закриття задати клас "js-close-modal" 
 Для бекдропа в стилях повинен бути описаний клас:
 .is-hidden {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
 */

/* Для блокування скролла на <body> потрібне підключення бібіліотеки bodyScrollLock
 в тіло тега <body>, наприклад: <script src="./js/bodyScrollLock.js"></script>*/
document.addEventListener('DOMContentLoaded', function () {
  // Записуємо в змінні масив елементів кнопок та бекдропів (підложка під модалку)
  const modalButtons = document.querySelectorAll('.js-open-modal');
  const overlaysArr = document.querySelectorAll('.js-overlay-modal');
  const closeButtons = document.querySelectorAll('.js-close-modal');

  /* Перебираємо масив кнопок */
  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      /* Запобігаємо стандартній дії елемента. Тому що кнопку можна зробити по-різному. 
      Хтось зробить посиланням, хтось кнопкою. Потрібно підстрахуватися. */
      e.preventDefault();

      /* При кожному натисканні на кнопку ми будемо забирати вміст атрибуту data-modal
      і будемо шукати модальне вікно з таким же атрибутом, і бекдроп, що відповідає модальному вікну. */
      const modalId = item.getAttribute('data-modal');
      const modalElem = document.querySelector('[data-modal="' + modalId + '"]:not(button):not(a)');
      const overlay = modalElem.closest('.js-overlay-modal');

      /* Після того, як знайшли потрібний бекдроп, видалимо клас is-hidden
      у бекдропа, щоб показати останній, і блокуємо скролл на <body>. */
      overlay.classList.remove('is-hidden');
      document.addEventListener('keydown', onPressEscape);
      bodyScrollLock.disableBodyScroll(document.body); // added
    }); // end click
  }); // end foreach

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      // Приховаємо бекдроп разом з модальним вікном і відновимо скролл на <body>
      const overlay = item.closest('.js-overlay-modal');
      overlay.classList.add('is-hidden');
      document.removeEventListener('keydown', onPressEscape);
      bodyScrollLock.enableBodyScroll(document.body); // added
    });
  }); // end foreach

  // Додамо прослуховувача на клік по всіх оверлеях і встановимо їх приховування на кліку поза модалкою
  overlaysArr.forEach(item => {
    item.addEventListener('click', function (e) {
      if (e.target === e.currentTarget) {
        item.classList.add('is-hidden');
        document.removeEventListener('keydown', onPressEscape);
        bodyScrollLock.enableBodyScroll(document.body); // added
      }
    });
  });
});
// end ready

// Функція прослуховувача події на натиснення клавіші Esc активному бекдропові
function onPressEscape(e) {
  if (e.key === 'Escape') {
    //Активний бекдроп може бути лише один
    document.querySelector('.backdrop:not(.is-hidden)').classList.add('is-hidden');
    bodyScrollLock.enableBodyScroll(document.body); // added
  }
}
