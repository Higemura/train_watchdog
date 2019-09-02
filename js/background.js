const filter = {
	url:
		[
			{hostContains: "youtube.com"},
			{hostPrefix: "youtube"}
		]
}
  
function logOnBefore(details) {
	console.log("onBeforeNavigate to:::: " + details.url);
}
  
chrome.webNavigation.onCompleted.addListener(logOnBefore, filter);