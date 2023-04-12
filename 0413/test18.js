// test18.js
'use strict';

// 오늘 날짜 전역변수 선언
const today = new Date();
const year = today.getFullYear();     // 연도 4자리
const month = today.getMonth() + 1;     // 월 (기존월 -1)
const date = today.getDate();     // 일
const hour = today.getHours();      //시
const minute = today.getMinutes();      // 분
const second = today.getSeconds();      // 초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;


// 표준 날짜
function fCheck1() {
  let temp = year + "-" + month + "-" + date;
  document.getElementById("date1").value = temp;
}

// 날짜 비교(isSameDay(날짜형식1, 날짜형식2))
function fCheck2() {
  let start = document.getElementById("date1").value;
  let Date = document.getElementById("date2").value;

  const startDate = new Date(start);
  const endDate = new Date(end);

  let temp;
  if (isSameDay(startDate, endDate)) {
    temp = "같습니다";
  } else {
    temp = "다릅니다";
  }

  demo.innerHTML = "비교한 날짜는" + temp;
}
