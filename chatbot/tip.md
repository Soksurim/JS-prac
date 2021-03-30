이벤트 리스너
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName)
-> 채팅이 수신되면 호출되는 이벤트 리스너.
room	채팅이 수신된 채팅방의 이름
msg	수신된 채팅 내용
sender	채팅을 보낸 사람의 닉네임
isGroupChat	단체 채팅방인지 아닌지. 단체 채팅방이라면 true, 아니면 false.
replier	세션 캐싱 답장 메소드 객체
ImageDB	이미지 정보가 담겨 있는 객체
packageName	채팅이 수신된 앱의 패키지명
replier
replier.reply(msg); - 채팅이 수신된 채팅방으로 답장 전송
replier.reply(room, msg); - 채팅이 수신된 앱의 해당 채팅방으로 답장 전송
replier.reply(room, msg, packageName); - 해당 패키지명을 가진 앱의 해당 채팅방으로 답장 전송
replier.markAsRead(); - 채팅의 수신된 채팅방에서 읽음처리
replier.markAsRead(room); - 채팅의 수신된 메신저 앱의 해당 채팅방에서 읽음처리
replier.markAsRead(room, packageName); - 해당 메신저 앱의 해당 채팅방에서 읽음처리
ImageDB
ImageDB.getImage(); - 사진이 수신된 경우, 그 사진을 Base64 인코딩된 상태로 가져옴. 불안정함.
ImageDB.getImageBitmap(); - 사진이 수신된 경우, 그 사진을 Bitmap으로 가져옴. 불안정함.
ImageDB.getProfileImage(); - 채팅을 보낸 사람의 프로필 사진을 Base64 인코딩된 상태로 가져옴. 안드로이드 7.0 이상부터 작동.
ImageDB.getProfileImageBitmap(); - 채팅을 보낸 사람의 프로필 사진을 Bitmap으로 가져옴. 안드로이드 7.0 이상부터 작동.
ImageDB.getProfileBitmap(); - ImageDB.getProfileImageBitmap();와 동일
function onLoaded(ctx)
-> 리로드 버튼을 눌러서 스크립트가 리로드되면 수신되면 호출되는 이벤트 리스너.
ctx	컨텍스
전처리기 및 함수
print(msg);
-> 해당 내용을 토스트 메시지로 출력
#include "파일명"
-> 봇 소스 파일과 같은 경로에 있는 해당 파일의 내용을 리로드 직전에 봇 소스에 포함시킴
Api
Api.getContext();
-> Context를 가져옴.
Api.reload(name);
-> 해당 이름을 가진 봇 리로드
Api.compile(name);
-> Api.reload(name);와 동일.
Api.isOn(name);
-> 해당 이름을 가진 봇이 켜진 상태인지 확인
Api.on(name);
-> 해당 이름을 가진 채팅 자동응답 봇을 킴
Api.off(name);
-> 해당 이름을 가진 채팅 자동응답 봇을 끔
Api.showToast(msg, leng);
-> 화면에 토스트 출력
Api.UiThread(func);
-> UI 쓰레드에서 해당 함수 실행.
Api.canReply(room, msg, packageName);
-> 해당 채팅방으로 채팅을 전송할 수 있는지 확인. room은 방 이름, packageName은 채팅을 보낼 앱의 패키지명이고 생략시 가장 최근에 알림이 뜬 앱
Api.replyRoom(room, msg, packageName);
-> 해당 채팅방으로 채팅 전송. room은 방 이름, msg는 채팅 내용, packageName은 채팅을 보낼 앱의 패키지명이고 생략시 가장 최근에 알림이 뜬 앱
Api.markAsRead(room, packageName);
-> 채팅의 수신된 메신저 앱의 해당 채팅방에서 읽음처리. room은 방 이름, packageName은 읽음 처리를 할 앱의 패키지명이고 생략시 가장 최근에 알림이 뜬 앱
Api.getScriptNames();
-> 모든 봇 목록을 배열로 반환.
Api.gc();
-> 아마도 가비지 컬렉터 강제 실행.
Api.papagoTranslate(lang1, lang2, value);
-> value를 언어코드가 lang1인 해당하는 언어라고 가정하고 언어코드가 lang2인 언어로 번역.
Api.papagoTranslate(lang1, lang2, value, clientId, clientSecret);
-> Api.papagoTranslate(lang1, lang2, value);와 동일하나, 사용자가 개인적으로 발급받은 네이버 파파고 api의 clientId와 clientSecret 사용 가능.
Bot
Bot.send(room, msg, packageName);
-> Api.replyRoom();과 동일
Bot.getContext();
-> Context를 가져옴.
Bot.getVersion();
-> 채팅 자동응답 봇의 버전을 가져옴.
Bot.getJsVersion();
-> 현재 설정되어 있는 채팅 자동응답 봇 (JS)의 자바스크립트 버전을 가져옴.
Bot.reload(name);
-> Api.reload(name);와 동일.
Bot.getName();
-> 해당 봇의 이름을 가지고 옴.
Bot.runOnUiThread(name, func);
-> 해당 이름을 가진 채팅 자동응답 봇의 UI 쓰레드에서 실행.
Bot.on(name);
-> 해당 이름을 가진 채팅 자동응답 봇을 킴
Bot.off(name);
-> 해당 이름을 가진 채팅 자동응답 봇을 끔
Utils
Utils.toast(msg);
-> 해당 내용을 토스트 메시지로 출력.
Utils.getWebText(url, removeTags);
-> Jsoup 라이브러리를 이용하여 해당 URL 크롤링.
Utils.getWebText2(url, encoding);
-> java.net 패키지를 이용하여 해당 URL 크롤링, 사이트 인코딩(?) 설정 가능.
Utils.getHtmlFromWeb(url);
-> java.net 패키지를 이용하여 해당 URL 크롤링. Utils.getWebText(); 또는 Utils.getWebText2(); 사용 권장
Utils.removeTags(str);
-> 해당 문자열에서 HTML 태그 삭제.
Utils.parse(url);
-> Jsoup 라이브러리를 이용하여 해당 URL을 크롤링한 내용을 org.jsoup.nodes.Document 형태로 반환
Utils.copyToClipboard(value);
-> 해당 내용을 클립보드로 복사함.
Utils.compress();
-> 투명문자 1000개 반환. 보낼 채팅 내용 같은거 사이에 적당히 잘 끼워넣으면, 전체보기로 만들기 가능.
Utils.vibrate(sec);
-> sec초 동안 진동.
Utils.delay(mil);
-> mil 밀리초동안 딜레이.
Utils.sleep(mil);
-> Utils.delay();와 동일.
File FileStream 사용 권장
File.getSdcardPath();
-> 내장메모리 최상위 경로(?)를 가져옴
File.save(path, value);
-> 해당 경로에 해당 내용을 가진 파일 저장. 이미 파일이 있는 경우 내용 덮어쓰기.
File.save(path, value, isAppend);
-> 해당 경로에 해당 내용을 가진 파일 저장. isAppend가 true라면 기존에 있던 내용 뒤에 붙이고, false라면 덮어쓰기.
File.read(path);
-> 해당 경로에 있는 파일의 내용을 읽어옴.
File.remove(path);
-> 해당 경로에 있는 파일 삭제.
File.createFolder(path);
-> 해당 경로를 가지는(?) 폴더 생성.
FileStream
FileStream.getSdcardPath();
-> 내장메모리 최상위 경로(?)를 가져옴
FileStream.write(path, value);
-> 해당 경로에 해당 내용을 가진 파일 저장. 이미 파일이 있는 경우 내용 덮어쓰기.
FileStream.append(path, value);
-> 해당 경로에 있는 파일 뒤에 해당 내용을 붙여서 저장(?).
FileStream.save(path, value, isAppend);
-> 해당 경로에 해당 내용을 가진 파일 저장. isAppend가 true라면 기존에 있던 내용 뒤에 붙이고, false라면 덮어쓰기.
FileStream.remove(path);
-> 해당 경로에 있는 파일 삭제. 삭제 성공시 true, 실패시 false 반환
FileStream.createDir(path);
-> 해당 경로를 가지는(?) 폴더 생성.
FileStream.saveJson(path, json);
-> 해당 경로에 해당 json을 문자열로 바꾸어서 저장.
FileStream.readJson(path);
-> 해당 경로에 있는 문자열로 저장된 json을 읽어옴.
Device
Device.getModelName();
-> 기기 모델명 반환.
Device.getPhoneModel();
-> Device.getModelName();와 동일.
Device.getPhoneBrand();
-> 기기 제조사 반환.
Device.getAndroidVersion();
-> 안드로이드 버전 반환.
Device.getAndroidVersionName();
-> Device.getApiLevel();와 동일.
Device.getApiLevel();
-> 안드로이드 API 레벨 반환.
Device.getAndroidVersionCode();
-> Device.getApiLevel();와 동일.
Device.getBuild();
-> android.os.Build();값 반환.
Device.getBatteryIntent();
-> 배터리 관련 Intent 반환.
Device.getBatteryLevel();
-> 배터리 잔량 반환. 단위는 %.
Device.getBatteryTemp();
-> 배터리 온도 반환. 단위는 ℃.
Device.getBatteryHealth();
-> 배터리 건강 상태(?) 반환.
Device.getBatteryStatus();
-> 배터리 상태 반환.
Device.getBatteryVoltage();
-> 배터리 전압 반환.
Device.isCharging();
-> 배터리가 충전중인지 반환.
Log
Log.info(log, isGlobal);
-> 로깅. isGlobal가 참이면 글로벌 로그로 로깅
Log.debug(log, isGlobal);
-> 로깅. isGlobal가 참이면 글로벌 로그로 로깅
Log.error(log, isGlobal, hideToast);
-> 로깅. isGlobal가 참이면 글로벌 로그로 로깅, hideToast가 true이면 토스트 출력 안함
Log.i();
-> Log.info();와 동일
Log.d();
-> Log.debug();와 동일
Log.e();
-> Log.error();와 동일
Bridge
Bridge.isAllowed(botName);
-> 해당 봇에 Bridge를 통해 접근할 수 있는지 확인
Bridge.getScopeOf(botName);
-> 해당 봇의 전역 스코프를 가지고 옴
Bridge.evaluateStringIn(botName, source);
-> 해당 이름을 가진 봇에서 eval 실행.
Bridge.getVariable(room, name);
-> 단순 자동응답 기능에 있는 변수의 값을 가지고 옴.
Bridge.setVariable(room, name, value);
-> 단순 자동응답 기능에 있는 변수의 값을 value로 설정.
Bridge.getGlobalVariable(name);
-> 단순 자동응답 기능에 있는 전체변수의 값을 가지고 옴.
Bridge.setGlobalVariable(name, value);
-> 단순 자동응답 기능에 있는 전체변수의 값을 value로 설정.
© 2018-2020 Dark Tornado, All rights reserved.