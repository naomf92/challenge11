// モーダル要素の取得
const modal = document.getElementById('easyModal');
console.log(modal);

// 開くボタン取得
const open = document.getElementById('modalOpen');
console.log(open);

// 閉じるボタン取得
const close = document.getElementsByClassName('modalClose');//?
//const close = document.getElementById('close');
console.log(close);

// クリックで開くイベントリスナー
open.addEventListener('click', modalOpen);

// クリックで閉じるイベントリスナー
close.addEventListener('click', modalClose);

// モーダル以外の場所クリックのイベントリスナー
// .addEventListener('click', clickAnywhere);

// モーダルオープンの関数
function modalOpen() {

}

// モーダルを閉じる関数
function modalClose() {

}

// モーダル以外がクリックされた時に閉じる関数
function clickAnywhere() {

}