(function(doc, win, px, rem) {
  // 获取设备
  var docE1 = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    // 计算
    recalc = function() {
      // 屏幕宽度
      var clientWidth = docE1.clientWidth;
      // 不存在屏幕宽度
      if (!clientWidth) return;
      // 将屏幕宽度xxx px的html下的font-size设置为rem px,设计稿宽度为xxx px
      docE1.style.fontSize = rem * (clientWidth / px) + "px";
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window, 375, 50);
