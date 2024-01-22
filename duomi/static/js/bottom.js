
// 广告内容前端调用<div id="B1"></div> <div id="B2"></div>... 依此类推，创建对应的广告容器，直到B9
const ads = {
  //B1: '<a href="/b19.html" target="_blank"><img src="https://02.zjgs01.top/forum/202210/07/151547rvflz3u6jzv3djqs.jpg" alt="B1"></a>',
  //B2: '', // 这个广告没有内容，留空
  //B12: '<a href="/b19.html" target="_blank"><img src="https://cdn.bncloudfl.com/bn/397/54b/d69/39754bd69d6d5fb8c6da7e63e4879a5063d178ff.gif" alt="B9"></a>',
  // 可以继续添加其他广告，根据需要
  //
};

// 放置广告函数
function placeAd(adName) {
  const adContainer = document.getElementById(adName);
  if (adContainer && ads[adName]) {
    adContainer.innerHTML = ads[adName];
  }
}

// 在页面加载完毕后放置广告
window.addEventListener('load', function() {
  for (let i = 1; i <= 12; i++) {
    placeAd(`B${i}`);
  }
});
