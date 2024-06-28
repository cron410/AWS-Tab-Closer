browser.runtime.onMessage.addListener((message, sender) => {
  if (message === "close-tab") {
    browser.tabs.remove(sender.tab.id);
    return Promise.resolve();
  }
  return false;
});
