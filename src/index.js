import BroadcastChannel from 'broadcast-channel';
import { createBrowserHistory } from 'history';

const broadcastChannel = new BroadcastChannel();

/**
 * Call this in componentDidMount of root component. Probably App.js
 * @param {string} logoutPath  relative path to be redirected to. e.g: /login
 */
export const logoutAllTabsListener = (logoutPath) => {
	createBrowserHistory.push(logoutPath);
	broadcastChannel.close();
};

/**
 * Call this on logout function
 */
export default const logoutHandler = broadcastChannel.postMessage();