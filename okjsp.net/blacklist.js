// ==UserScript==
// @name        zepinos
// @namespace   http://www.okjsp.net
// @include     https://www.okjsp.net
// @include     https://okjsp.net
// @match       https://www.okjsp.net/seq/*
// @match       https://okjsp.net/seq/*
// @match       http://www.okjsp.net/seq/*
// @match       http://okjsp.net/seq/*
// @version     1
// @grant       none
// @require     http://code.jquery.com/jquery-latest.js
// ==/UserScript==

// 문자열로 회원 고유 번호 입력(프로필 사진의 정보를 보면 파일명이 회원 고유 번호로 되어 있다)
var blacklist = [
    ""
];

var sidWriter = $('table.tablestyle tbody tr td#profile img').attr('alt');
var pointWriter = $('table.tablestyle tbody tr td#profile').find('sub').text().replace('(', '').replace(')', '');

// 작성자의 점수가 마이너스일 경우 본문의 배경색을 빨간색으로 변경
if (pointWriter < 0) {
    $('div#centent.wrap.content').attr('style', 'background-color:#FF0000;');
}

// 블랙리스트에 등록된 작성자일 경우 본문의 배경과 글자색을 모두 빨간색으로 변경
if (blacklist.indexOf(sidWriter) >= 0) {
    $('div#centent.wrap.content').attr('style', 'background-color:#FF0000; color:#FF0000');
}

// 블랙리스트에 등록된 댓글작성자일 경우 글자색을 흰색으로 바꿔서 내용을 표시하지 않도록 하고, 글을 보고 싶을 땐 마우스로 선택해서 볼 수 있게 함
$('div#m.tablestyle ul li.w img') .each(function () {
    var sid = $(this).attr('alt');
    
    if (typeof (sid) != undefined && blacklist.indexOf(sid) >= 0) {
        $(this) .closest('ul') .attr('style', 'color:#EEEEEE;');
    }
});
