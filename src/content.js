const validHosts = [
  "127.0.0.1:35001", 
  "127.0.0.1:58377"
];
const validMessages = [
  "Authentication details received, processing details. You may close this window at any time.",
  "AWS CLI has been given requested permissions"
];

if (
  validHosts.includes(window.location.host) &&
  validMessages.some(msg => document.body.innerText.includes(msg))
) {
  browser.runtime.sendMessage("close-tab");
}
