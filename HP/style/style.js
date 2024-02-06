window.addEventListener('scroll', function () {
    var navBar = document.querySelector('.navbar');
    var headersupport = document.querySelector('.header-support');
    var image = document.getElementById('logo-img');
    navBar.style.backgroundColor = 'transparent'; // 初期の背景色を透明に設定
    var scrollPosition = window.scrollY;
    // スクロール量に応じて背景色を計算して変化させる処理を記述する
    var maxScroll = 0; // 背景色変化の最大スクロール量
    var links = document.getElementsByClassName('nav-a');

    if (scrollPosition == maxScroll) {
        navBar.style.backgroundColor = 'rgb(0 0 0 / 0%)';
        navBar.style.height = 'auto';
        headersupport.style.border = '0'
        image.src = './img/logo.svg'; // スクロール量が一定範囲内の場合は最初の画像を表示
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = 'white'; // 初期文字色を白に設定
        }

    } else {
        navBar.style.backgroundColor = 'white';
        navBar.style.height = '92px';
        navBar.style.width = '100vw'
        headersupport.style.border = '#00727c solid 2px';
        image.src = './img/logo2.svg'; // スクロール量が一定範囲を超えた場合は別の画像を表示
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = 'black';
        }
    }
});


const scrollButton = document.getElementById('scroll-down-button');

function scrollToBottom(duration) {


    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollStep = (scrollHeight - scrollTop) / duration;
    let prevHeight = 0;

    let timer = setInterval(() => {
        console.log(document.documentElement.scrollTop)
        document.documentElement.scrollTop += scrollStep;
        if (prevHeight == document.documentElement.scrollTop) {
            clearInterval(timer);
        }
        prevHeight = document.documentElement.scrollTop;
    }, 16);
}

