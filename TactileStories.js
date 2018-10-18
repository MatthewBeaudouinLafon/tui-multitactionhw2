// Code for Homework 2 of Tangible User Interfaces at Wellesley

var root = $.app.mainLayer();

var background = createBackground("Media/background.jpg");
root.addChild(background);
console.log("******* background *******");

$.app.addStyleFilename("styles.css");

var state = null;  // can also be 'trip1' or 'trip2'

// addDayWidget(500, 500, 1);

// addFlow(int(1920/2), int(1080/2), 256);

// trip1

markerSensor(700, 450, 1);




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
    dayText.setCSSId("day" + dayNumber);
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

function markerSensor(x, y) {
    placeNames = {1: 'Puerto Rico'} // tripNumber to place name
    markerIds = {1: 42} // tripNumber to marker id

    markerToName = {42: 'Puerto Rico'}
    markerToNumber = {42: 1}

    tripToMarker = {1: 42}
    tripToName = {1: 'Puerto Rico'}

    //place the marker sensor in the bottom right corner
	var markerSensor = new MultiWidgets.JavaScriptWidget();
	markerSensor.setLocation(0,0);
	markerSensor.setHeight(1080); // Whole screen is an active marker area
	markerSensor.setWidth(1920);
	markerSensor.setBackgroundColor(0,0,0,0);
	markerSensor.setFixed();

	

	// // create image to add on marker down and remove on marker up
	// var wid = new MultiWidgets.JavaScriptWidget();
	// wid.setWidth(400);
	// wid.setHeight(400);
	// wid.img = new MultiWidgets.ImageWidget();
    // wid.img.addCSSClass("ImageW");
    
	// if (wid.img.load("Media/Trip1/day1/img1.jpg")) {
    //     wid.img.addOperator(new MultiWidgets.StayInsideParentOperator());
    // 	wid.img.setWidth(400);
	//     wid.img.setHeight(400);
	//     wid.addChild(wid.img);
    // 	wid.img.raiseToTop();
    // }
    
    // General trip text
    var tripText = new MultiWidgets.TextWidget();
    tripText.setCSSId("Trip to "); // This will be reset on markerdown
    tripText.setWidth(500);
    tripText.setHeight(100);
    tripText.setLocation(x,y);
    // tripText.setFixed();
    // root.addChild(tripText);
    tripText.raiseToTop();
    
    //// Load trip 1
    // Load Text

    // Load photo album
    var album1 = new MultiWidgets.BookWidget();
    if (album1.load("Media/Trip1/day1")) {
        album1.addOperator(new MultiWidgets.StayInsideParentOperator());
        album1.setAllowRotation(false);
        album1.setLocation(x, y);
        album1.setScale(5);

        album1.raiseToTop();
    }

    //// Load trip 2



	// create boolean for whether to add or remove image widget
	var isRootChild = false;

	markerSensor.onMarkerDown(function(id_as_string) {
		var idAsInt = parseInt(id_as_string);
		var gm = $.app.grabManager();
        var marker = gm.findMarker(idAsInt);
        
		if(marker.code()==tripToMarker[1]){
			console.log("**************** marker down: x: "+ marker.centerLocation().x+" y: "+marker.centerLocation().y+" *****************");
            
            if (!isRootChild) {
                
                root.addChild(album1);
                album1.raiseToTop();
                album1.setLocation(marker.centerLocation().x + 200, marker.centerLocation().y + 50); // offset location to not be hidden by marker
                
                root.addChild(tripText)
                tripText.setCSSId("day1")
                tripText.setLocation(marker.centerLocation().x,marker.centerLocation().y-100);
                tripText.raiseToTop();
                
                isRootChild = true;
            } else {
                album1.removeFromParent();
                tripText.removeFromParent();
                isRootChild = false;
            }

		} else if (marker.code()==tripToMarker[1]) {
            if (!isRootChild) {
                
                root.addChild(album1);
                album1.raiseToTop();
                album1.setLocation(marker.centerLocation().x + 200, marker.centerLocation().y + 50); // offset location to not be hidden by marker
                
                root.addChild(tripText)
                tripText.setCSSId("Trip to " + markerToName[marker.code()])
                tripText.setLocation(marker.centerLocation().x,marker.centerLocation().y-100);
                tripText.raiseToTop();
                
                isRootChild = true;
            } else {
                album1.removeFromParent();
                tripText.removeFromParent();
                isRootChild = false;
            }
        }
	});

	markerSensor.onMarkerUp(function(id_as_string) {
		var idAsInt = parseInt(id_as_string);
		var gm = $.app.grabManager();
		var marker = gm.findMarker(idAsInt);
		if (marker.code()==42 || marker.Code()==1) {
			console.log("****************** marker up *******************");
		}
	});

	root.addChild(markerSensor);
	markerSensor.raiseToTop();}


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