const btnOpen = document.querySelector("#menu-open");
const btnClose = document.querySelector("#menu-close");
const menuPanel = document.querySelector(".menu-container");

// メニューボタンクリック時
btnOpen.addEventListener("click", () => {
  menuPanel.classList.add("panel-open");
});

// 閉じるボタンクリック時
btnClose.addEventListener("click", () => {
  menuPanel.classList.remove("panel-open");
});

// カーソルの位置で変色
const btn = document.querySelector("#flow-button-js");
btn.addEventListener("mousemove", (e) => {
  const rect = btn.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  // カーソル位置の計算
  btn.style.backgroundPosition = `${x}% 0`;
  // 背景位置を動的に
});
btn.addEventListener("mouseleave", () => {
  btn.Style.backgroundPosition = "0% 0";
});
// マウスを離した時
