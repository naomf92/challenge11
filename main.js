// モーダル要素の取得
const modal = document.getElementById('easyModal');

// 開くボタン取得
const openBtn = document.getElementById('modalOpen');

// 閉じるボタン取得
const closeBtn = document.getElementsByClassName('modalClose')[0];

// クリックで開くイベントリスナー
openBtn.addEventListener('click', modalOpen);

// クリックで閉じるイベントリスナー
closeBtn.addEventListener('click', modalClose);

// モーダル以外の場所クリックのイベントリスナー
window.addEventListener('click', clickAnywhere);

// モーダルオープンの関数
function modalOpen() {
    modal.style.display = 'block';//開くボタンを押したらモーダルが出る
}

// モーダルを閉じる関数
function modalClose() {
    modal.style.display = 'none';//閉じるボタンを押したらモーダルが消える
}

// モーダル以外がクリックされた時に閉じる関数
function clickAnywhere() {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
}