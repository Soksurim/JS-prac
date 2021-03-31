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
      room: room,
      sender: sender,
      msg: msgs,
    };
  }

  JSON.parse(readJson);

  /* 코드 끝 */
}

function timenow() {
  var day = new Date();
  day.getFullYear +
    "/" +
    (day.getMonth() + 1) +
    "/" +
    day.getDate() +
    " " +
    day.getHours +
    ":" +
    day.getMinutes() +
    ":" +
    day.getSeconds() +
    ":" +
    day.getMilliseconds();
}

// 경로 : /storage/emulated/0/ChatBot/BotData/game/userData/

let path = "/storage/emulated/0/ChatBot/BotData/game/userData/";

function response(
  room,
  msg,
  sender,
  isGroupChat,
  replier,
  ImageDB,
  packageName
) {
  //let data = room + " // " + sender + " : " + msg + "\n";
  var day = new Date();
  var time =
    day.getFullYear() +
    "/" +
    (day.getMonth() + 1) +
    "/" +
    day.getDate() +
    " " +
    day.getHours() +
    ":" +
    day.getMinutes() +
    ":" +
    day.getSeconds() +
    "." +
    day.getMilliseconds();
  print(time);

  let textData = {
    room: room,
    sender: sender,
    msg: msg,
    time: time,
  };

  var objData = JSON.stringify(textData);

  //print(textData.msg);

  FileStream.createDir(path + "/folder");

  File.save(path + sender + ".json", objData, true); // true면 append, false면 cover

  //var readJson = FileStream.readJson(path + sender + ".json");

  //var parsed = JSON.parse(readJson);
}




