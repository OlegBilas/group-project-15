!function(){function e(e){"Escape"===e.key&&(document.querySelector(".backdrop:not(.is-hidden)").classList.add("is-hidden"),bodyScrollLock.enableBodyScroll(document.body))}document.addEventListener("DOMContentLoaded",(function(){var o=document.querySelectorAll(".js-open-modal"),d=document.querySelectorAll(".js-overlay-modal"),t=document.querySelectorAll(".js-close-modal");o.forEach((function(o){o.addEventListener("click",(function(d){d.preventDefault();var t=o.getAttribute("data-modal");document.querySelector('[data-modal="'+t+'"]:not(button):not(a)').closest(".js-overlay-modal").classList.remove("is-hidden"),document.addEventListener("keydown",e),bodyScrollLock.disableBodyScroll(document.body)}))})),t.forEach((function(o){o.addEventListener("click",(function(d){o.closest(".js-overlay-modal").classList.add("is-hidden"),document.removeEventListener("keydown",e),bodyScrollLock.enableBodyScroll(document.body)}))})),d.forEach((function(o){o.addEventListener("click",(function(d){d.target===d.currentTarget&&(o.classList.add("is-hidden"),document.removeEventListener("keydown",e),bodyScrollLock.enableBodyScroll(document.body))}))}))}))}();
//# sourceMappingURL=index.0c35f465.js.map
