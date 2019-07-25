import BroadcastChannel from 'broadcast-channel';
import { createBrowserHistory } from 'history';

const broadcastChannel = new BroadcastChannel();

/**
 * Call this on logout function
 */
export const multiTabLogoutHandler = broadcastChannel.postMessage();

/**
 * Call this in componentDidMount of root component. Probably App.js
 * @param {string} logoutPath  relative path to be redirected to. e.g: /login
 */
export const logoutAllTabsListener = (logoutPath) => {
		createBrowserHistory.push(logoutPath);
		broadcastChannel.close();
	};