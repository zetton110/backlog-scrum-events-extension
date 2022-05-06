chrome.runtime.onMessage.addListener((request, sender, respond) => {
  const handler = new Promise((resolve, reject) => {
    if (request) {
      console.log("fired!!!!!!!!!")

      // document.body.style.backgroundColor = "black";
      let element = document.createElement("div"); // <button></button> ができる
      element.textContent = "Push Me!!!!!!!!!!!!!";               // <button>Push Me!</button> ができる
      element.style.color = "red"
      element.style.fontSize = "100px"
      let target = document.querySelector("div.LS8OJ"); // 追加したい要素を見つけてくる
      target.appendChild(element); // 追加する
      // let target = document.getElementsByClassName("FPdoLc lJ9FBc"); // 追加したい要素を見つけてくる
      // let target = document.getElementsByClassName("css-1fbld2x-box"); // 追加したい要素を見つけてくる
      // let target = document.querySelector(".css-1fbld2x-box"); // 追加したい要素を見つけてくる
      
      //いいねが全て消えるまで
      // while(target.length != 0){
      //   //いいねの要素を削除
      //   target[0].parentNode.appendChild(element);
      // }
      // target.appendChild(element); // 追加する
      resolve(`Hi from contentPage! You are currently on!!!sdfasd!????!!: ${window.location.href}`);
    } else {
      reject('request is empty.');
    }
  });

  handler.then(message => respond(message)).catch(error => respond(error));

  return true;
});





// //いいねを消し去る
// function hide_like(){
//   //要素を取得
//   var elements = document.getElementsByClassName('css-1k18oqv-box');

//   while(elements.length != 0){
//       //いいねの要素を削除
//       elements[0].parentNode.removeChild(elements[0]);
//   }
// }

// //ストリーム変更時にいいねを消し去る
// function ObserveStream(){
//   //オブザーバーの作成
//   var observer = new MutationObserver(hide_like);
//   //監視の開始
//   observer.observe(document.getElementsByClassName('stream-items')[0], {
//       attributes: true,
//       childList:  true
//   });
//   hide_like();
// } 
// //body変更時にObserveStreamを設定する。
// //オブザーバーの作成
// var observer = new MutationObserver(ObserveStream);
// //監視の開始
// observer.observe(document.getElementsByTagName("body")[0], {
//   attributes: true
// });