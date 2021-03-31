// const CHAT = (function(){

// init()
function init() {
  var textbox1 = document.querySelector(".chat_box1 textarea");
  var textbox2 = document.querySelector(".chat_box2 textarea");

  //Enter 키 이벤트
  textbox1.addEventListener("keydown", function (e) {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault();
      const msg = textbox1.value;
      const sender = $(".chat_box1 .nickname-box input[type=text]").val();

      console.log(msg, sender);
      //입력창 초기화
      textbox1.value = "";
    }
  });

  $(textbox2).keydown(function (e) {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault();

      // 공백전송 방지
      if (textbox2.value.trim() != "") {
        return;
      }

      const msg = textbox2.value;
      const sender = $(".chat_box2 .nickname-box input[type=text]").val();

      sendMessasge(msg, sender);
      console.log(msg, sender);

      //입력창 초기화
      textbox2.value = "";
    }
  });
}
// })

function sendMessasge(msg, sender) {
  const chatLi = createMessageTag(msg, sender);

  $(".chat_box2 .chat_log").append(chatLi);
  $(".chat_box2 .chat_log").scrollTop(
    $(".chat_box2 .chat_log").prop("scrollHeight")
  );
  console.log(chatLi.html());
}

// 메세지 태그 생성
function createMessageTag(msg, sender) {
  // div.sender 부터 가져와짐 li포함 안됨
  let chatLi = $("div.chat.format ul").clone();

  chatLi.find(".sender span").text(sender);
  chatLi.find(".message span").text(msg);

  return chatLi;
}

init();
