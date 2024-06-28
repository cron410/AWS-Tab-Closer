if (window.location.host === "127.0.0.1:35001" && document.body.innerText.includes("Authentication details received, processing details. You may close this window at any time.")) {
  browser.runtime.sendMessage("close-tab");
}
