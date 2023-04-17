let section = document.getElementById("section"),
  icons = document.getElementById("icons");

// 야간모드 / 주간모드
icons.onclick = () => {
  section.classList.toggle("dark");
}

// 1000ms(1초)마다 시:분:초 업데이트
setInterval(() => {
  let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

  // hour가 12보다 작으면 am / 작으면 am
  // 13이상이면 12를 빼서 12시간 형식으로
  // 0시를 오전 12시로 표시
  let d;
  d = hour < 12 ? "AM" : "PM";
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour == 0 ? hour = 12 : hour;

  // 시,분,초 10 이하일 경우 앞자리 0붙이기
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  // 값 넘기기
  document.getElementById("hour_num").innerHTML = hour;
  document.getElementById("min_num").innerHTML = min;
  document.getElementById("sec_num").innerHTML = sec;
  document.getElementById("am_pm").innerHTML = d;
}, 1000);