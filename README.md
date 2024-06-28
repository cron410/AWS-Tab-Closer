# AWS-VPN-Tab-Closer

A Firefox extension to automatically close the tab that AWS VPN opens. Based on the [Chrome extension](https://github.com/rzambranoi/AWS-VPN-Tab-Closer) by the same name.

## How it works

Every time you connect to AWS VPN, a new tab will open in your browser with the following address: http://127.0.0.1:35001/
This extension will detect it and close it automatically when it is fully loaded.

