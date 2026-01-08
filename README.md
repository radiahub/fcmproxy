# fcmproxy
Free iframe-based proxy for easy Firebase Cloud Messaging instant messaging integration

This FREE module enables Firebase Cloud Messaging on most web sites, based on radiahub-105 Firebase Project.
<br>&nbsp;</br>

Licensed under [MIT License](https://github.com/radiahub/fcmproxy?tab=MIT-1-ov-file)
<br>&nbsp;</br>


## Advantages

- 100% Free usage (for radiahub-registered users websites only),
- Comfortable Fair Usage Practice (FUP) set by default to 50000 messages per day,
- Does not require to create a Google development account,
- Avoids some pretty cumbersome development and testing headache,
- Front-end to your application based on pure JavaScript (asynchronous), does not require additional extensions.
<br>&nbsp;</br>


## Pre-requisites

- Your web site must be able to run in an iframe (not only in top-level)
- You must register for an API key 
	- at web page http://radiahub.22web.org/
	- [using Google Forms](https://docs.google.com/forms/d/e/1FAIpQLSfxhndoVHp21zhWzkvZysKdd58_5FXRy3CM_K9KMDqVJbyRcw/viewform?usp=publish-editor)
	- using radiahub authenticator application [download here](https://drive.google.com/file/d/1WHfBoQ9xZBG2Xk2PTTI4_TTjDC3LDm-V/view?usp=drive_link)
<br>&nbsp;</br>


## Integration of your web site

You must embed your web site in radiahub proxy application, which provides a full-screen iframe in which your web site will run.

URL			: http://radiahub.22web.org/fcmproxy.php
Method	: GET (preferred)

Parameters (GET)

<table>
	<tr>
		<th>Name</th>
		<th>Description</th>
		<th>Example</th>
		<th>Scope<th>
	</tr>
	<tr>
		<td>apikey</td>
		<td>Your API key</td>
		<td>10 digits code, ex 1234567890</td>
		<td>Mandatory</td>
	</tr>
	<tr>
		<td>overflow</td>
		<td>How the iframe window handles overflow</td>
		<td>Any valid CSS overflow style value, ex "auto", "hidden", etc.</td>
		<td>Optional, default "hidden"</td>
	</tr>
</table>

You may want to redirect the access point of your web site to the radiahub fcmproxy URL
For this, you have to rename the access point script (typically index.html or index.php, etc.) to some backup name, and implements a new access script.

Here is an example of basic script redirecting your site entry point to the iframe-based proxy:

```html
<html>
<head>
<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
<meta charset="UTF-8">
<script>
window.document.location = "http://radiahub.22web.org/fcmproxy.php?apikey=1234567890&overflow=hidden&title=My%20pretty%20website&url=https://path_to_my_website.html";
</script>
</head>
<body></body>
</html>
```

<b>Important</b><br/>
Like in the example above, do not forget that the location should be URL-encoded according to the script language in use (here, html and JavaScript)
<br>&nbsp;</br>

## Download and bind script fcmproxy.js

### Download from GitHub

- Download fcmproxy.js [download here](https://github.com/radiahub/fcmproxy/blob/main/js/fcmproxy.js)
- Clone fcmproxy repository [clone](https://github.com/radiahub/fcmproxy/tree/main)

### Bind script

Example (minimized JavaScript file):

```html
<script src="fcmproxy.min.js"></script>
```

Binding script fcmproxy.js exposes a new object: fcmproxy

### Initialize fcmproxy object

call fcmproxy.init() as early as possible in your initialization script

Trivial examples:

```html
<html>
	<head>
		...
		<script src="fcmproxy.min.js"></script>
		...
	</head>
	<body onload="fcmproxy.init();">
		...
	</body>
</html>
```

At the end of body section:

```html
<body>
	...
	<script src="fcmproxy.min.js"></script>
	<script>fcmproxy.init();</script>
</body>
```

<br>&nbsp;</br>


## Free code and free applications: showcases catching your attention!

This is definitively the primary goal!
The free applications are not only productive tools (just use them, they are free!), they introduce a little part of my commitment and my development work to you, with the hope that you will consider extending these applications to your specific needs, or develop your own software solution.
<br>&nbsp;</br>

### radiahub public directories on GitHub

<table>
	<tr>
		<th>Description</th>
		<th>Link</th>
	</tr>
	<tr>
		<td>iframe-based proxy for easy Firebase Cloud Messaging instant messaging integration</td>
		<td><a href="https://github.com/radiahub/fcmproxy">https://github.com/radiahub/fcmproxy</a></td>
	</tr>
</table>

<br>&nbsp;</br>

---
Copyright &copy; radiahub Denis Auguste Patrice 2026 - All rights reserved
