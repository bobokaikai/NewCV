// 綁定導航列項目的點擊事件
var navLinks = document.querySelectorAll('nav ul li a');

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function(e) {
    e.preventDefault(); // 防止點擊項目時跳轉到對應的頁面
    var targetId = this.getAttribute('href'); // 獲取對應區塊的id值
    var targetElement = document.querySelector(targetId); // 獲取對應的區塊元素

    // 使用滾動函數將頁面滾動到對應的區塊
    window.scrollTo({
      top: targetElement.offsetTop, // 滾動到區塊的上方
      behavior: 'smooth', // 使用平滑的滾動效果
      duration: 1000 // 滾動動畫的持續時間為1秒
    });
  });
}

  