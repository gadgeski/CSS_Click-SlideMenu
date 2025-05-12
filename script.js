const btnOpen = document.querySelector("#menu-open");
const btnClose = document.querySelector("#menu-close");
const menuPanel = document.querySelector(".menu-container");

// メニューボタンクリック時
btnOpen.addEventListener("click", () => {
  menuPanel.classList.add("pannel-open");
});

// 閉じるボタンクリック時
btnClose.addEventListener("click", () => {
  menuPanel.classList.remove("panel-open");
});
