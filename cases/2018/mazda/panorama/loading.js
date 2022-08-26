(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 750,
	height: 1200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/a00.png?1518406379229", id:"a00"},
		{src:"images/a01.png?1518406379229", id:"a01"},
		{src:"images/a02.png?1518406379229", id:"a02"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.a00 = function() {
	this.initialize(img.a00);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,192);


(lib.a01 = function() {
	this.initialize(img.a01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,132);


(lib.a02 = function() {
	this.initialize(img.a02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,415,414);


(lib.loadnum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.num = new cjs.Text("1%", "25px 'Microsoft YaHei'", "#FFFFFF");
	this.num.name = "num";
	this.num.textAlign = "center";
	this.num.lineHeight = 35;
	this.num.lineWidth = 100;
	this.num.setTransform(0,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.num).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-18.5,104,37);


(lib.glowbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a02();
	this.instance.setTransform(-207.5,-207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.5,-207,415,414);


(lib.bag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 2
	this.instance = new lib.a01();
	this.instance.setTransform(-72,-119);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// 图层 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("As/KyIAAzkIZ/AAIAATkg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:1,y:69.1}).wait(1));

	// 图层 1
	this.instance_1 = new lib.a00();
	this.instance_1.setTransform(-71.5,-73.5);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-73.5,143,192);


(lib.glow = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.glowbg();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},299).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.5,-207,415,414);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// 图层 1
	this.bag = new lib.bag();
	this.bag.setTransform(0,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.bag).wait(1).to({y:-32.5},6).to({y:-22.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-96,143,192);


// stage content:



(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.bag.gotoAndStop(0);
		this.bag.bag.gotoAndStop(1);
	}
	this.frame_14 = function() {
		this.stop();
		p0playEnd();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(1));

	// loadnum
	this.loadnum = new lib.loadnum();
	this.loadnum.setTransform(372,722.1);

	this.timeline.addTween(cjs.Tween.get(this.loadnum).wait(10).to({y:742.1,alpha:0},4).wait(1));

	// bag
	this.bag = new lib.bg();
	this.bag.setTransform(373.5,600);

	this.timeline.addTween(cjs.Tween.get(this.bag).wait(1).to({scaleX:0.94,scaleY:0.94},0).to({scaleX:1.08,scaleY:1.08},3).to({scaleX:1,scaleY:1},4).wait(1).to({alpha:0},5).wait(1));

	// 图层 2
	this.instance = new lib.glow();
	this.instance.setTransform(363.5,614);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,600,750,1200);

})(lib0 = lib0||{}, images0 = images0||{}, createjs = createjs||{}, ss = ss||{});
var lib0, images0, createjs, ss;