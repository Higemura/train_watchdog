const filter = {
	url:
		[
			{hostContains: "youtube.com"},
			{hostPrefix: "youtube"}
		]
}
  
function logOnBefore(details) {
	console.log("onBeforeNavigate to: " + details);
	if (details.frameId !== 0) return;

	const element = document.createElement('div');
	element.innerHTML = "BeforeBegin";


	document.body.appendChild(element);
	console.log(element);
	alert(document.body);
}
  
// chrome.webNavigation.onBeforeNavigate.addListener(logOnBefore, filter);
chrome.webNavigation.onCompleted.addListener(logOnBefore, filter);