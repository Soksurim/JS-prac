let room = "roomName";
let msg = "응애";
let sender = "sender";
let isGroupChat = false;
let replier;
let ImageDB;
let packageName = "kakaotalk";

//경로 : /storage/emulated/0/ChatBot/BotData/game/userData/
function response(
  room,
  msg,
  sender,
  isGroupChat,
  replier,
  ImageDB,
  packageName
) {
    /* 코드 시작 */

  if (msg.includes("ㅇ")) {



    let textData = {
        "room": room,
        "sender": sender,
        "msg": msgs
    }
  }

    JSON.parse(readJson);

  /* 코드 끝 */
}

function timenow(){

    var day = new Date();
    day.getFullYear + "/" +(day.getMonth() + 1) + "/" + day.getDate() + " " +day.getHours + ":" + day.getMinutes() + ":" + day.getSeconds() + ":" + day.getMilliseconds();
}
