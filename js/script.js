chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		greyscale();
	}
});


const filter = {
	url:
		[
			{hostContains: "youtube.com"},
			{hostPrefix: "youtube"}
		]
}
  
function logOnBefore(details) {
	console.log("onBeforeNavigate to: " + details.url);
}
  
browser.webNavigation.onBeforeNavigate.addListener(logOnBefore, filter);

function greyscale() {
	$("img").each(function(index) {
		console.log('グレースケール');
		$(this).css("-webkit-filter","grayscale(100%)");
	});
}