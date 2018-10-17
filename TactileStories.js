// Code for Homework 2 of Tangible User Interfaces at Wellesley

var root = $.app.mainLayer();

var background = createBackground("Media/background.jpg");
root.addChild(background);
console.log("******* background *******");

$.app.addStyleFilename("styles.css");

var state = null;  // can also be 'trip1' or 'trip2'

addDayWidget(500, 500, 1);

// addFlow(int(1920/2), int(1080/2), 256);

// trip1





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

function addDayWidget(x, y, dayNumber) {
    var dayWidget = new MultiWidgets.JavaScriptWidget();
    dayWidget.setLocation(x, y);
	dayWidget.setHeight(1000);
	dayWidget.setWidth(1000);
	dayWidget.setBackgroundColor(255,0,0,0.8);
    // dayWidget.setFixed();

    // Add text
    var dayText = new MultiWidgets.TextWidget();
    dayText.setCSSId("day"+dayNumber);
	dayText.setWidth(500);
	dayText.setHeight(100);
	dayText.setLocation(1440,850);
    dayText.setFixed();
    dayWidget.addChild(dayText);

    // Add Album
    var album = new MultiWidgets.BookWidget();

	if (album.load("Media/Trip1/day1")) {
		album.addOperator(new MultiWidgets.StayInsideParentOperator());
		album.setAllowRotation(false);
		album.setLocation(0,0);
		album.setScale(5);

		root.addChild(album);
		album.raiseToTop();
	}

    // Add Marker
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

//Creates a flow widget and add it to the application's main layer
function addFlow(x, y, size) {
	var flow = new MultiWidgets.ItemFlowWidget();
    flow.setLocation(x,y);
    
	for (var i=1; i<=2; i++) {
		var imgItem = new MultiWidgets.ImageWidget();
		var path = "./Media/NavFlow/trip"+i+".png";
		if (imgItem.load(path)) {
			imgItem.addOperator(new MultiWidgets.StayInsideParentOperator());
            imgItem.resizeToFit(new Nimble.SizeF(size,size));
			flow.addItem(imgItem);
		}
	}
	root.addChild(flow);
	flow.raiseToTop();
}