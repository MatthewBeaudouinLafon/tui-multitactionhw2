/* CompositeLab.js
 *
 * A starter code for am example composite application demonstrating: TextWidgets, ImageWidgets, 
 * VideoWidgets, JavaScriptWidgets, BookWidget, ItemsFlowWidget.
 * Also demonstrates creating a marker sensor widget and styling using CSS.
 * 
 * 
 * Solution is written by Jasmine Davis, August 2015
 * Solution was updated and modified by Orit Shaer, September 2016
 */


var root = $.app.mainLayer();


var background = createBackground("Media/background.jpg");
root.addChild(background);
//log to console
console.log("******* background *******");

//add below a call to markerSensor (step #22)


//Add a stylesheet to the app
$.app.addStyleFilename("styles.css");


//add below code for creating 4 TextWidgets (step #8)


//add below code for invoking the addImage function (step #12)



//add below code for invoking the addVideo function (step #15)


// add below code for adding a BookWidget (steps #17-18)

//add below code for invoking the addFlow function (step #20)

addImage(100, 100, 500, 500, 'C:/dev/TUI/HW2/Media/WClogo.png')


/*
* Utility functions
*/
// Code below is taken from the solution because I did with my lab 3 group on a different computer.


function createBackground (background) {
	var w = new MultiWidgets.JavaScriptWidget();

	w.setWidth(root.width());
	w.setHeight(root.height());
	w.setFixed();
	w.setAutoRaiseToTop(false);

	w.image = new MultiWidgets.ImageWidget();

	if (w.image.load(background)) {
	    w.image.setWidth(w.width());
	    w.image.setHeight(w.height());
    	w.image.setFixed();
    	w.image.setAutoRaiseToTop(false);
    	w.addChild(w.image);
    	w.image.raiseToTop();
	}
	

	return w;
}

//Creates a customized JavaSCriptWidget with an image
// and adds it to the application's main layer.
function addImage(x, y, sizeX, sizeY, image) {
	var w = new MultiWidgets.JavaScriptWidget();

	w.setLocation(x, y);
	w.setWidth(sizeX);
	w.setHeight(sizeY);
	w.img = new MultiWidgets.ImageWidget();
	w.img.addCSSClass("ImageW");

	if (w.img.load(image)) {
	    w.img.addOperator(new MultiWidgets.StayInsideParentOperator());
    	w.img.setLocation(x,y);
    	w.img.setWidth(sizeX);
	    w.img.setHeight(sizeY);
	    w.addChild(w.img);
    	w.img.raiseToTop();
	}

	root.addChild(w);
	w.raiseToTop();
}

//Creates a VideoWidget and adds it to the application's main layer
function addVideo(x, y, size, video) {
	var vid = new MultiWidgets.VideoWidget();
	vid.setWidth(size);
	vid.setHeight(size);

	if (vid.load(video)) {
		vid.addOperator(new MultiWidgets.StayInsideParentOperator());
		//vid.resizeToFit(new Nimble.SizeF(size, size));
		vid.setLocation(x, y);
		//vid.setFixed();
		//vid.displayControls(true);
		vid.setAudioEnabled(true);
		vid.setPreviewPos(5, true); //sets preview image to 3 seond spot in video

		root.addChild(vid);
		vid.raiseToTop();

	}

}

//Creates a book widget and add it to the application's main layer
function addBook(x, y, size, book) {
	var bk = new MultiWidgets.BookWidget();

	if (bk.load("./Research")) {
		bk.addOperator(new MultiWidgets.StayInsideParentOperator());
		bk.setAllowRotation(false);
		bk.setLocation(x, y);
		bk.setScale(1);

		root.addChild(bk);
		bk.raiseToTop();
	}
}

//Creates a flow widget and add it to the application's main layer
function addFlow(x, y, size) {
	var flow = new MultiWidgets.ItemFlowWidget();
	flow.setLocation(x,y);
	for (var i=1; i<=9; i++) {
		var imgItem = new MultiWidgets.ImageWidget();
		var path = "./Media/mmimage0"+i+".jpg";
		if (imgItem.load(path)) {
			imgItem.addOperator(new MultiWidgets.StayInsideParentOperator());
   	 		imgItem.resizeToFit(new Nimble.SizeF(size,size));
			flow.addItem(imgItem);
		}
	}
	root.addChild(flow);
	flow.raiseToTop();
}


/*
*
* Marker functions
*/

function markerSensor() {
	
	//add code here (step #21)

	}


