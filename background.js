// use interval to loop over stored notifications
// each notification check to see if the time that was saved + duration chosen is = to current minute/time
// if that's true, send notification and remove from chrome.storage
// if false, keep looping

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.message == "listeners") {
//     //add event handler for button click
//     chrome.tabs.executeScript(null, {file: "injectedScript.js"});
//     sendResponse({message: "OK"}); //optional
//   }
// });

// var els = document.getElementsByClassName("squish-button");
// for (var z = 0; z < els.length; z++) {
//   els[z].addEventListener("click", function () {
//     var c = decodeURI(this.getAttribute("data-original-content"));
//     this.parentNode.innerHTML = c;
//   });
// }
