var IMG_SRC;
window.onload = onload2();
async function take_snapshot() {
	await Webcam.snap(function (data_uri) {
		IMG_SRC = data_uri;
		document.getElementById("results").innerHTML =
			'<img id="imagecap" src="' + data_uri + '"/>';
	});
	//console.log(IMG_SRC);
	detect_emotion();
}
//console.log(IMG_SRC);

async function attachwebcam() {
	Webcam.set({
		width: 320,
		height: 240,
		image_format: "jpeg",
		jpeg_quality: 90,
	});
	Webcam.attach("#my_camera");
	IMG_SRC = "http://placecorgi.com/320/240";
	return 1;
}
var photoTimer;
function clearTimer() {
	clearInterval(photoTimer);
}
async function onload2() {
	const _ = await attachwebcam();
	photoTimer = setInterval(take_snapshot, 5000);
	return 1;
}
function tftest() {
	console.log("tftest");
	test();
}
