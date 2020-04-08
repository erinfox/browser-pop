var button = document.getElementById("button");

button.addEventListener("click", saveNotification);

function saveNotification() {
  var len = document.getElementById("len").value;
  const url = chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    ([currentTab]) => {
      // add url + len to local storage
      console.log(currentTab.url);
      window.alert("We'll notify you of " + currentTab.url + " in " + len);
    }
  );
  console.log(len);
}

// chrome://extensions/
// https://github.com/erinfox/chrome-extension-tutorial/blob/master/manifest.json
// https://medium.com/@aidobreen/fixing-twitter-with-a-chrome-extension-1f53320f5a01
