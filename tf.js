var img;
var Model;
const emotions = [
	"angry",
	"disgust",
	"fear",
	"happy",
	"sad",
	"surprise",
	"neutral",
];
async function detect_emotion() {
	Model = await loadModel();
	//preprocess
	var img = document.getElementById("imagecap");
	img = tf.browser.fromPixels(img);
	img = img.resizeBilinear([100, 100]);
	img = img.div(255);
	img = img.expandDims(0);
	var result = Model.predict(img);
	result = result.argMax(1).dataSync()[0];
	console.log("Emotion is ", emotions[result]);
}

async function loadModel() {
	Model = tf.loadLayersModel("../resources/model.json");
	return Model;
}
