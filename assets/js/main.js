"use strict";
function toggleTheme() {
  document.querySelector("body").classList.toggle("theme-dark");
}

function toggleMenu(forcedState) {
  let el = document.querySelector("nav");
  let el2 = document.querySelector("#btn-menu > div");
  if (typeof forcedState === "undefined") {
    el.classList.toggle("nav-open");
    el2.classList.toggle("nav-open");
  } else if (forcedState === false) {
    el.classList.remove("nav-open");
    el2.classList.remove("nav-open");
  } else if (forcedState === true) {
    el.classList.add("nav-open");
    el2.classList.add("nav-open");
  }
}

function onLoad() {
  // restore theme
  let theme = JSON.parse(localStorage.getItem("isThemeLight"));
  if (theme) {
    toggleTheme();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", onLoad);
} else {
  onLoad();
}

window.addEventListener("beforeunload", event => {
  let theme = document.querySelector("body").classList.contains("theme-dark");
  localStorage.setItem("isThemeLight", JSON.stringify(!theme));
});
