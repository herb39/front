// test1.js
'use strict'

function regexCheck() {
  // 정규 표현식 변수 생성
  const regex1 = /atom/g;     // 'atom'이라는 문자열이 포함되어 있으면 true / 없으면 false
  const regex2 = /mbc|kbs|sbs/g;      // mbc or kbs or sbs 문자열 포함 ?
  const regex3 = /홍길(동|순)/g;       // 홍길동 or 홍길순 ?
  const regex4 = /[a-z]/gm;     // 영문 소문자 포함 ?
  const regex5 = /[^a-z]/gm;     // 영문 소문자만 포함 ?
  const regex6 = /[A-Z]/gm;     // 영문 대문자 포함 ?
  const regex7 = /[^A-Z]/gm;     // 영문 대문자만 포함 ?
  const regex8 = /[0-9]/gm;     // 숫자 포함 ?
  const regex9 = /[^0-9]/gm;     // 숫자만 포함 ?
  const regex10 = /[가-힣]/gm;     // 한글 포함 ?
  const regex11 = /[^가-힣]/gm;     // 한글만 포함 ?
  const regex12 = /[a-zA-Z0-9]/gm;     // 영문자 and 숫자 포함 ?
  const regex13 = /[^a-zA-Z0-9]/gm;     // 영문자 and 숫자만 포함 ?
  const regex14 = /[^a-zA-Z0-9_]/gm;     // 영문자 and 숫자 and 밑줄_만 포함 ?


  const regex21 = /\./g;      // . 포함 ?
  const regex22 = /\d/g;      // 숫자 포함 ?
  const regex23 = /\D/g;      // 숫자 안 포함 ?
  const regex24 = /\w/g;      // 영문자 / 숫자 / _ 포함 ?
  const regex25 = /\W/g;      // 영문자 / 숫자 / _ 포함 ?
  const regex26 = /\s/g;      // 공백(tap) 포함 ?


  // 와일드카드 : 1개 글자만 포함유무(?), 복수 개의 문자 포함 유무(+, *)
  const regex31 = /홍길동?/g;
  const regex32 = /홍길동+/g;
  const regex33 = /홍길동*/g;


  let content = document.getElementById("content").value.trim();
  if (content == "") alert("문자열을 입력하세요");
  // else if (!content.match(regex1)) alert("atom 문자열을 포함하고 있지 않음");
  // else if (!content.match(regex2)) alert("방송국 선택");
  // else if (!content.match(regex3)) alert("홍길동 / 홍길순 아님");
  // else if (!regex4.test(content)) alert("영문 소문자 포함하고 있지 않음");
  // else if (regex5.test(content)) alert("영문 소문자 외 다른문자 포함");
  // else if (!regex6.test(content)) alert("영문 대문자 포함하고 있지 않음");
  // else if (regex7.test(content)) alert("영문 대문자 외 다른문자 포함");
  // else if (!regex8.test(content)) alert("숫자 포함하고 있지 않음");
  // else if (regex9.test(content)) alert("숫자 외 다른문자 포함");
  // else if (!regex10.test(content)) alert("한글 포함하고 있지 않음");
  // else if (regex11.test(content)) alert("한글 외 다른문자 포함");
  // else if (regex12.test(content)) alert("영문자와 숫자 포함하고 있지 않음");
  // else if (regex13.test(content)) alert("영문자와 숫자 외 다른문자 포함");
  // else if (regex14.test(content)) alert("영문자와 숫자와 밑줄_ 외 다른문자 포함");


  // else if(regex21.test(content)) alert("입력한 문자열에 . 포함");
  // else if(regex22.test(content)) alert("입력한 문자열에 숫자 포함");
  // else if(regex23.test(content)) alert("입력한 문자열에 숫자만 포함");
  // else if(regex24.test(content)) alert("입력한 문자열에 영문자, 숫자, _ 포함");
  // else if(regex25.test(content)) alert("입력한 문자열에 영문자, 숫자, _만 포함");
  // else if (regex26.test(content)) alert("입력한 문자열에 공백 포함");
  
  
  else if (regex31.test(content)) alert("입력한 문자열에 홍길'동' 포함");
  // else if (regex32.test(content)) alert("입력한 문자열에 홍길'동' 포함");
  // else if (regex33.test(content)) alert("입력한 문자열에 홍길'동' 포함");





  else alert("정상 통과");
}