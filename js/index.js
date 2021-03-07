"use strict";
{
  //ナビゲーション
  // 対象のidを取得
  const globalNav = document.getElementById("js__navi");
  const endNavi = document.querySelector(".js__naviEnd");

  window.addEventListener("scroll", function () {
    // 要素の位置座標を取得
    const clientRectstart = globalNav.getBoundingClientRect();
    const clientRectEnd = endNavi.getBoundingClientRect();

    // 画面の上端から、要素の上端までの距離
    const x = clientRectstart.top;
    const y = clientRectEnd.top;

    //ナビの位置が、ヘッダーを超えたら
    if (x > y) {
      globalNav.classList.add("navigation--bg");
    } else {
      globalNav.classList.remove("navigation--bg");
    }
  });
}

{
  //バーガーメニュー
  {
    //アイコンクリック時
    function hamburger() {
      //アイコンのclassを取得してclass名を追加・削除
      document
        .querySelector(".navigation__icon")
        .classList.toggle("navigation__icon--on");
      document
        .querySelector(".navigation__icon--line")
        .classList.toggle("navigation__icon--line--on");
      document.querySelector(".menu").classList.toggle("menu--on");
    }
    document
      .querySelector(".navigation__menu")
      .addEventListener("click", function () {
        hamburger();
      });
  }

  //各メニュークリック時
  {
    function menuClick() {
      // クリックした際に実行する処理
      document.querySelector(".menu").classList.toggle("menu--on");
      document
        .querySelector(".navigation__icon--line")
        .classList.toggle("navigation__icon--line--on");
      document
        .querySelector(".navigation__icon")
        .classList.toggle("navigation__icon--on");
    }
    // 引数に指定したclassの値をもつ要素をすべて取得
    const menus = document.getElementsByClassName("list__pageLink");
    // 上記で取得したすべての要素に対してクリックイベントを適用
    for (let i = 0; i < menus.length; i++) {
      menus[i].addEventListener("click", menuClick);
    }
  }
}

//スムーススクロール
{
  document.addEventListener("click", (e) => {
    const target = e.target;
    // clickした要素がclass属性、js-smooth-scrollを含まない場合は処理を中断
    if (!target.classList.contains("js-smooth-scroll")) return;
    e.preventDefault();
    const targetId = target.hash;
    const targetElement = document.querySelector(targetId);
    // 画面上部から要素までの距離
    const rectTop = targetElement.getBoundingClientRect().top;
    // 現在のスクロール距離
    const offsetTop = window.pageYOffset;
    // スクロール位置に持たせるバッファ
    const buffer = 64;
    const top = rectTop + offsetTop - buffer;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  });
}
