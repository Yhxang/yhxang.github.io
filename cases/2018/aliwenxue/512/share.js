(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/share_atlas_.png?1525861749604", id:"share_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"share_atlas_", frames: [[0,179,350,39],[0,0,348,177]]}
];


// symbols:



(lib.a47 = function() {
	this.spriteSheet = ss["share_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.a71 = function() {
	this.spriteSheet = ss["share_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.p6qrcode = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a71();
	this.instance.setTransform(-174,-88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174,-88.5,348,177);


(lib.imgholder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.alilogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a47();
	this.instance.setTransform(-175,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-19.5,350,39);


// stage content:
(lib.share = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p6qrcode
	this.p6qrcode = new lib.p6qrcode();
	this.p6qrcode.setTransform(247,1206.5);

	this.timeline.addTween(cjs.Tween.get(this.p6qrcode).wait(1));

	// alilogo
	this.alilogo = new lib.alilogo();
	this.alilogo.setTransform(178.4,778.8,0.862,0.862,5.8,0,0,0.3,0.2);

	this.timeline.addTween(cjs.Tween.get(this.alilogo).wait(1));

	// imgholder
	this.imgholder = new lib.imgholder();

	this.timeline.addTween(cjs.Tween.get(this.imgholder).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,667,750,1624);

})(lib0 = lib0||{}, images0 = images0||{}, createjs = createjs||{}, ss = ss||{});
var lib0, images0, createjs, ss;