// ============================================================================
// Module      : fcmproxy.js
// Version     : 1.0
//
// Author      : Denis Patrice <denispatrice@yahoo.com>
// Copyright   : Copyright (c) Denis Patrice Dipl.-Ing. 2010-2025
//               All rights reserved
//
// Application : global application
// Description : Access to radiahub free iframe-based proxy API
//
// Date+Time of change   By     Description
// --------------------- ------ ----------------------------------------------
// 20-Jan-25 00:00 WIT   Denis  Deployment V. 2025 "Raymond Chandler"
//
// ============================================================================

var fcmproxy = {

	PIN : "", callback : null,

	onmessage : function(message) {
		console.info("IN fcmproxy.onmessage()");
		console.log(message);
		switch(message["dataType"]) {
			case "PIN": {
				fcmproxy.PIN = message["data"]["pin"];
				console.log("fcmproxy.PIN='" + fcmproxy.PIN + "'");
				break;
			}
			default: {
				if (typeof fcmproxy.onmessage_callback === "function") {
					fcmproxy.onmessage_callback({ dataType:message["dataType"], data:message["data"] });
				}
				break;
			}
		}
	},

	onload : function() {
		console.info("IN fcmproxy.onload()");
		window.addEventListener('message', (event) => {
			console.log(event.data);
			var message = event.data;
			message["data"] = JSON.parse(window.atob(message["data"]));
			fcmproxy.onmessage(message);
		});
	},

	sendFCMmessage : function(tokey, dataType, data, collapse, title, body, image) {
		console.info("IN fcmproxy.sendFCMmessage() PIN='" + fcmproxy.PIN + "'");
		var postMessage = {
			postType: "FCMPUSH",
			data: window.btoa(JSON.stringify({
				tokey    : tokey,
				dataType : dataType, 
				data     : data,
				collapse : (typeof collapse === "undefined") ? "" : collapse,
				title    : (typeof title === "undefined") ? "" : title,
				body     : (typeof body === "undefined") ? "" : body,
				image    : (typeof image === "undefined") ? "" : image
			}))
		};
		parent.postMessage(postMessage, "*");
	},

	init : function(onmessage_callback) {
		console.info("IN fcmproxy.init()");
		fcmproxy.onload();
		if (typeof onmessage_callback === "function") {
			fcmproxy.onmessage_callback = onmessage_callback;
		}
	}
};


// End of file: fcmproxy.js
// ============================================================================