chrome.runtime.onMessage.addListener((request, sender, respond) => {
  const handler = new Promise((resolve, reject) => {
    if (request) {
      console.log("fired!!!!!!!!!")

      let targets = document.querySelectorAll(".css-yt6om-box"); // 追加したい要素を見つけてくる
      var entities = Object.entries(targets)
      entities.forEach(([key,value])=>{
        let element = document.createElement("div");
        element.textContent = "aaa";
        element.style.color = "red";
        element.style.fontSize = "20px";
        element.className = "css-1k18oqv-box expand"
        console.log(`${key}:${value}`)
        if (value.innerHTML.includes("Open")) console.log("This is Open")ßß
        if (value.innerHTML.includes("In Progress")) console.log("This is In Progress")
        if (value.innerHTML.includes("In Review")) console.log("This is In Review")
        if (value.innerHTML.includes("Resolved")) console.log("This is Resolved")
        if (value.innerHTML.includes("Waiting for release")) console.log("This is Waiting for release")
        if (value.innerHTML.includes("Closed")) console.log("This is Closed")
        value.appendChild(element);
      })

      
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