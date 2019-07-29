import BroadcastChannel from 'broadcast-channel';

const broadcastChannel = new BroadcastChannel();

/**
 * Call this on logout function
 */
export const logoutHandler = () => broadcastChannel.postMessage();

/**
 * Call this in componentDidMount of root component. Probably App.js
 * @param {string} logoutPath  relative path to be redirected to. e.g: /login
 */
export const logoutAllTabsListener = () => {
	broadcastChannel.onmessage = event => {
		window.location.reload()
		broadcastChannel.close();
	}
};
