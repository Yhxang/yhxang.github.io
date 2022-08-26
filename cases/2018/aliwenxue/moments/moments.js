(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 640,
	height: 1385,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/a01.png?1523461420516", id:"a01"},
		{src:"images/a02.png?1523461420516", id:"a02"},
		{src:"images/a03.png?1523461420516", id:"a03"},
		{src:"images/a04.png?1523461420516", id:"a04"},
		{src:"images/a05.png?1523461420516", id:"a05"},
		{src:"images/a06.png?1523461420516", id:"a06"},
		{src:"images/a07.jpg?1523461420516", id:"a07"},
		{src:"images/a07_1.png?1523461420516", id:"a07_1"},
		{src:"images/a08.png?1523461420516", id:"a08"},
		{src:"images/a09.png?1523461420516", id:"a09"},
		{src:"images/a10.png?1523461420516", id:"a10"},
		{src:"images/a11.png?1523461420516", id:"a11"},
		{src:"images/a12.png?1523461420516", id:"a12"},
		{src:"images/a13.png?1523461420516", id:"a13"},
		{src:"images/a14.jpg?1523461420516", id:"a14"},
		{src:"images/a16.jpg?1523461420516", id:"a16"},
		{src:"images/a17.jpg?1523461420516", id:"a17"},
		{src:"images/a18.jpg?1523461420516", id:"a18"},
		{src:"images/a19.png?1523461420516", id:"a19"},
		{src:"images/a23.jpg?1523461420516", id:"a23"},
		{src:"images/a23_1.png?1523461420516", id:"a23_1"},
		{src:"images/a24.png?1523461420516", id:"a24"},
		{src:"images/a25.png?1523461420516", id:"a25"},
		{src:"images/a28.jpg?1523461420516", id:"a28"},
		{src:"images/a29.jpg?1523461420516", id:"a29"},
		{src:"images/d01.jpg?1523461420516", id:"d01"},
		{src:"images/d02.jpg?1523461420516", id:"d02"},
		{src:"images/d03.jpg?1523461420516", id:"d03"},
		{src:"images/d04.jpg?1523461420516", id:"d04"},
		{src:"images/d05.jpg?1523461420516", id:"d05"},
		{src:"images/d06.jpg?1523461420516", id:"d06"},
		{src:"images/d07.jpg?1523461420516", id:"d07"},
		{src:"images/d08.jpg?1523461420516", id:"d08"},
		{src:"images/d09.jpg?1523461420516", id:"d09"},
		{src:"images/x1.png?1523461420516", id:"x1"},
		{src:"images/x2.png?1523461420516", id:"x2"},
		{src:"images/x3.png?1523461420516", id:"x3"},
		{src:"images/x4.png?1523461420516", id:"x4"},
		{src:"images/x5.png?1523461420516", id:"x5"},
		{src:"images/x6.png?1523461420516", id:"x6"},
		{src:"images/x7.png?1523461420516", id:"x7"},
		{src:"images/x8.png?1523461420516", id:"x8"},
		{src:"images/x9.png?1523461420516", id:"x9"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.a01 = function() {
	this.initialize(img.a01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,87);


(lib.a02 = function() {
	this.initialize(img.a02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,19);


(lib.a03 = function() {
	this.initialize(img.a03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,16);


(lib.a04 = function() {
	this.initialize(img.a04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,11);


(lib.a05 = function() {
	this.initialize(img.a05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,44);


(lib.a06 = function() {
	this.initialize(img.a06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,47);


(lib.a07 = function() {
	this.initialize(img.a07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,3800);


(lib.a07_1 = function() {
	this.initialize(img.a07_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,24);


(lib.a08 = function() {
	this.initialize(img.a08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,45);


(lib.a09 = function() {
	this.initialize(img.a09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,206);


(lib.a10 = function() {
	this.initialize(img.a10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,76);


(lib.a11 = function() {
	this.initialize(img.a11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,54);


(lib.a12 = function() {
	this.initialize(img.a12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,96);


(lib.a13 = function() {
	this.initialize(img.a13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,127);


(lib.a14 = function() {
	this.initialize(img.a14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,221);


(lib.a16 = function() {
	this.initialize(img.a16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,393,261);


(lib.a17 = function() {
	this.initialize(img.a17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,26);


(lib.a18 = function() {
	this.initialize(img.a18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,23);


(lib.a19 = function() {
	this.initialize(img.a19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,98);


(lib.a23 = function() {
	this.initialize(img.a23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,323,244);


(lib.a23_1 = function() {
	this.initialize(img.a23_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,48);


(lib.a24 = function() {
	this.initialize(img.a24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,31);


(lib.a25 = function() {
	this.initialize(img.a25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,50);


(lib.a28 = function() {
	this.initialize(img.a28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1038);


(lib.a29 = function() {
	this.initialize(img.a29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,48);


(lib.d01 = function() {
	this.initialize(img.d01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,375,31);


(lib.d02 = function() {
	this.initialize(img.d02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,523,739);


(lib.d03 = function() {
	this.initialize(img.d03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,522,850);


(lib.d04 = function() {
	this.initialize(img.d04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,139);


(lib.d05 = function() {
	this.initialize(img.d05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,522,113);


(lib.d06 = function() {
	this.initialize(img.d06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,271);


(lib.d07 = function() {
	this.initialize(img.d07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,145);


(lib.d08 = function() {
	this.initialize(img.d08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,133);


(lib.d09 = function() {
	this.initialize(img.d09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,40);


(lib.x1 = function() {
	this.initialize(img.x1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,122);


(lib.x2 = function() {
	this.initialize(img.x2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,117);


(lib.x3 = function() {
	this.initialize(img.x3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,139);


(lib.x4 = function() {
	this.initialize(img.x4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,131);


(lib.x5 = function() {
	this.initialize(img.x5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,131);


(lib.x6 = function() {
	this.initialize(img.x6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,113);


(lib.x7 = function() {
	this.initialize(img.x7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,116);


(lib.x8 = function() {
	this.initialize(img.x8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,116);


(lib.x9 = function() {
	this.initialize(img.x9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,116);


(lib.wenhao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a25();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,37,50);
p.frameBounds = [rect];


(lib.speedline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF656B").ss(2,1,1).p("AtMIvQIOtOLekZAWOtZQwWHXkpGLAkAmsQpODwo/QW");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-143.2,-86.8,286.5,173.7);
p.frameBounds = [rect];


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(151,170,208,0.698)").s().p("AljBBQiUgbAAgmQAAglCUgcQCUgbDPAAQDQAACUAbQCUAcgBAlQABAmiUAbQiUAcjQAAQjPAAiUgcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.4,-9.3,100.8,18.7);
p.frameBounds = [rect];


(lib.postphoto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AreLeIAA28IW8AAIAAW8g");
	this.shape.setTransform(73.5,73.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,147,147);
p.frameBounds = [rect];


(lib.pop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#97AAD0").s().p("AhcB0QgUAAAAgUIAAg+IguggIAugeIAAhDQAAgUAUAAIDnAAQAUAAAAAUIAAC/QAAAUgUAAgAA4AdIA2AAIAAgzIg2AAgAg/AdIA2AAIAAgzIg2AAg");
	this.shape.setTransform(15.9,11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,31.9,23.3);
p.frameBounds = [rect];


(lib.photo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.p16photo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25).wait(1));

	// 图层 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AoZFnIAArMIQzAAIAALMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:279.2,y:382.7}).wait(25));

	// 图层 4
	this.instance = new lib.a23_1();
	this.instance.setTransform(309,396,1,1,180);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(5).to({x:409},0).wait(5).to({x:309},0).wait(5).to({x:409},0).wait(10));

	// 图层 7
	this.instance_1 = new lib.a24();
	this.instance_1.setTransform(326,369);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(25));

	// 图层 2
	this.instance_2 = new lib.a19();
	this.instance_2.setTransform(181,124);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(25));

	// 图层 1
	this.instance_3 = new lib.a23();
	this.instance_3.setTransform(0,0,1.421,1.421);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,459,346.8);
p.frameBounds = [rect, rect=new cjs.Rectangle(0,0,459,400), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.p15copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.d06();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,640,271);
p.frameBounds = [rect];


(lib.p3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a07();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,640,3800);
p.frameBounds = [rect];


(lib.mouthimg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a04();
	this.instance.setTransform(-8.5,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.5,-5.5,17,11);
p.frameBounds = [rect];


(lib.legshape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE000C").s().p("AAWDRIhXgMQhRgTAag6IBDhqQANgXgFgdIgdiEQgHgeAmgKQAqgDANAlIAVB/QAQAygYArIgbBBQAygGATAIQBFATgLAqQgLAng8AAQgOAAgSgCg");
	this.shape.setTransform(12.8,21.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,25.5,42.4);
p.frameBounds = [rect];


(lib.legbookright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE000C").s().p("Ag0DRIgBAAQgRgBgLgGQgYgNABgbQAAgcANgXIATgcQAXglAFglQAEgYgGghQgDgSgNgpQgMgjAAgJQgBgqAZgLQARgHASAFQAPAGAOAPQANAOAPA7QAQA5gBAbQAAAggaBeQAJAFAXAHQANAEAQALQAVAQgNAeQgOAegfACIhqAGIgBAAg");
	this.shape.setTransform(10.6,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,21.1,42);
p.frameBounds = [rect];


(lib.legbookleft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE000C").s().p("AhXDhQgbgKADgeQAEgfAegOQAWgLANAAQAbgBATgEQAAgBgXg4QgWhGAChAQABgqASgtQAMgeAMgUQAKgPAQgGQAUgIASAMQARAKABAZQABAMgDAKIgNBSQgDAeAAAoQABAmANAzQALApALAUQAJASgBATQgBAWgQAIQgRAIgXAEQgPADglAEQgjAFgYAAQgVAAgKgEg");
	this.shape.setTransform(11.3,23);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,22.6,46);
p.frameBounds = [rect];


(lib.inputline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#426BF2").s().p("AgNClIAAlJIAbAAIAAFJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.4,-16.6,2.9,33.2);
p.frameBounds = [rect, rect, rect, rect=null, rect, rect];


(lib.hrtop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.008)").ss(2,1,1).p("Egx/AAAMBj/AAA");
	this.shape.setTransform(320,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,642,2);
p.frameBounds = [rect];


(lib.hr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7E7E7").s().p("Egx/AAFQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQABAAAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAgBMBj+AAAQABABAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAAAABAAQgBAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABg");
	this.shape.setTransform(320,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,642,2);
p.frameBounds = [rect];


(lib.heartbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a01();
	this.instance.setTransform(-54,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-43,108,87);
p.frameBounds = [rect];


(lib.headimg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.handbookright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3A45").s().p("AgiC9QhcgWgnhNQgnhNAFhdQACgvAdhGQAYBbAMAbQAMAcAgApQAgAnAbAJQAaAJAigCQAkgBAIgTQAEgNAQgMQASgOATgEQAzgLAPBLQAQBRhRArQgpAWgrAFIgZAAQgdAAgdgIg");
	this.shape.setTransform(20.1,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,40.3,39.6);
p.frameBounds = [rect];


(lib.handbookleft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3A45").s().p("Ag2CGIgugKQgUgHgWgMQgqgYgGgaQgGgcATgQQARgLAYAAIA5AIQAlAFALgEQAMgFAbgkQAagkAIgSQAJgVAmgSQAsgUAgATQAfASgFAsQgCAXgIASQgSAdgcAiQg4BFg1AUQgTAHgZAAQgQAAgUgCg");
	this.shape.setTransform(19.3,13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,38.5,27.4);
p.frameBounds = [rect];


(lib.eyeimg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a02();
	this.instance.setTransform(-9,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-9.5,18,19);
p.frameBounds = [rect];


(lib.eyeflash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8F1E7").s().p("AnjDyQgFAAgQgFIgFgDQgGgDAAgIQABgHAGgEQAFgCAHACIALAEIAFgBIASABIASgEIAFgEIAHgFQAHgGAHAGQAFACABAHQACABACAEQACAIgFAFQgCACgHADIgQAFQgIADgSgBIgBAAIgLAAIgJAAgAjKDXIgLgBIgHgCQgLgFgBgIQgBgHAFgEQAGgFAGADIAFACIAHABIAFAAIACABIAiAAIAMgDIADAAIABgBQAGgHAJAFQAIAEgCAJQgBAIgJAGQgDACgCABQgDABgEAAIgMAAIgPABIgMAAQgLAAgEgBgAoADPIgEgCQgFgEABgHQABgEADgDQgDgEAAgGQgCgMAJgIIAJgGQAXgOAaACQALABAHADQAJAEAFAHQAHAMgHANQgFAIgIADIgCABIgCABIgDAAIgHAAQgWAAgTALIgJAFIgGABIgHgCgAjVCzIgCAAIgDgBIgCgBIgCgBIgBgBIAAgBIgBgBIAAgDIgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgCIABgBIACgEIACgCIABAAQACgEAGgCQgCgIAIgDQAGgDAIAAIASACIAJACIAJAAQAFAAAPAHQACAAADADQADAEAAAEQABAIgHAEQgEACgGAAQgHAAgFgCIgKgEIgIgBQgMAAgKAFIgEACIgCABIAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgBAAIAAABIgBAAIgBABIgDABIgBAAIgBAAIgCABgACxhoIgCAAIgUAAIgGgBQgJgCAAgKQgBgEADgEQADgDAEgBQADgBAGABQAHABAMgBIAEgBIABgCIADgDIAMgIIABgBIAAgBIABgBIABgBIACgCQABgCAFgBQAGgBAEAFIACADIACAFQAEACABAEQADAKgHAFIgHADIgDACIgNAGIgFABIgKACIgEAAIgBAAIgCABIgBAAgACMiRQgGgBgDgFQgDgEACgHQACgDAFgFIAEgCIALgHIAFgCIAEgCIAJgDIATgBQAHAAAEACQAFACABAGQABAFgCAEIgDAEQgFAEgDACIgTAEIgPAEIgKAEIgEABgAGmiZQgGgEAAgGQABgHAFgEQAEgBAIgCQAKgBASgGIANgDIAPgGIAHgEIABgCQAHgIAJAFQAJAEgDAKIgBAEQgCAEgFADIgEADIgBABIgCABIgEADIgEACIgDADQgDADgFABQgQAGgcACIgGABQgLAAgDgCgAGyi7QgDAAgDgBQgIgDABgKQABgJAHgFIAEgEIADgFQACgDAEgCIAPgFIAIgBIAHgCQANgEAGgBQAOAAAFAHQAEAIgEAHQgCADgEADIgEAEQgFACgEAAIgHAAQgJAAgIACIgFACQgFABgDADIgFAIQgDAGgJAAIgDgBg");
	this.shape.setTransform(52.2,-13.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,-38,104.3,48.6), rect, rect, rect];


(lib.eye2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AguAWIgCgaIBXgjIAKAcIgrAQIAfAHIgGAcg");
	this.shape.setTransform(0.3,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXBNQgggKgQgeQgPgeAKgeQAKggAegPQAegQAeAJQAgALAPAeQARAegKAeQgLAggeAPQgTAKgSAAQgKAAgNgEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.2,-8.1,16.4,16.3);
p.frameBounds = [rect];


(lib.carimg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{opendoor:1,incar:2,cargo:3,speed:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// 图层 2
	this.instance = new lib.a10();
	this.instance.setTransform(-115,-81);

	this.instance_1 = new lib.a11();
	this.instance_1.setTransform(-111,-69);

	this.instance_2 = new lib.a13();
	this.instance_2.setTransform(85.8,-86.6,1,1,6.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B0DB83").ss(2,1,1).p("AKQDNQIQCRF5iHADftRQG7BkF+iCAEcqmQG7BkCWhFANAGMQIQCREZiHA5jJpQAtA+AyArQB9BuCYgEA5oLmQBbCLCCgB");
	this.shape.setTransform(76.9,-35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// 图层 1
	this.instance_3 = new lib.a09();
	this.instance_3.setTransform(-100,-146);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-100,-146,243,206);
p.frameBounds = [rect, new cjs.Rectangle(-115,-146,258,206), new cjs.Rectangle(-111,-146,254,206), new cjs.Rectangle(-100,-146,288.1,206), new cjs.Rectangle(-100,-146,342.1,206)];


(lib.book = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a06();
	this.instance.setTransform(-13.5,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-13.5,-23.5,27,47);
p.frameBounds = [rect];


(lib.postmoment = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_129 = function() {
		this.stop();
		this.parent.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(129).call(this.frame_129).wait(1));

	// 图层 7
	this.instance = new lib.a29();
	this.instance.setTransform(412,20,0.549,0.549);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).wait(21));

	// 图层 6
	this.instance_1 = new lib.a29();
	this.instance_1.setTransform(341,20,0.549,0.549);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(102).to({_off:false},0).wait(28));

	// 图层 2
	this.instance_2 = new lib.inputline();
	this.instance_2.setTransform(26.9,33.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(13).to({x:56.9},0).wait(5).to({x:82.9},0).wait(5).to({x:107.9},0).wait(9).to({x:134.4},0).wait(6).to({x:160.2},0).wait(6).to({x:186.7},0).wait(6).to({x:213.2},0).wait(7).to({x:237.7},0).wait(6).to({x:263.7},0).wait(11).to({x:289.7},0).wait(4).to({x:314.7},0).wait(4).to({x:343.2},0).to({_off:true},6).wait(28));

	// 图层 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_27 = new cjs.Graphics().p("EggSAENIAAmtMBAlAAAIAAGtg");
	var mask_graphics_32 = new cjs.Graphics().p("EggSAENIAAmtMBAlAAAIAAGtg");
	var mask_graphics_37 = new cjs.Graphics().p("EggSAENIAAmtMBAlAAAIAAGtg");
	var mask_graphics_46 = new cjs.Graphics().p("EggSAENIAAmtMBAlAAAIAAGtg");
	var mask_graphics_52 = new cjs.Graphics().p("EggSAENIAAmtMBAlAAAIAAGtg");
	var mask_graphics_58 = new cjs.Graphics().p("EggSAENIAAmtMBAlAAAIAAGtg");
	var mask_graphics_64 = new cjs.Graphics().p("EggSAENIAAmtMBAlAAAIAAGtg");
	var mask_graphics_71 = new cjs.Graphics().p("EggSAENIAAmtMBAlAAAIAAGtg");
	var mask_graphics_77 = new cjs.Graphics().p("EggSAENIAAmtMBAlAAAIAAGtg");
	var mask_graphics_88 = new cjs.Graphics().p("EggSAENIAAmtMBAlAAAIAAGtg");
	var mask_graphics_92 = new cjs.Graphics().p("EggSAENIAAmtMBAlAAAIAAGtg");
	var mask_graphics_96 = new cjs.Graphics().p("EggSAENIAAmtMBAlAAAIAAGtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_graphics_27,x:-152.1,y:27}).wait(5).to({graphics:mask_graphics_32,x:-125.6,y:27}).wait(5).to({graphics:mask_graphics_37,x:-100.6,y:27}).wait(9).to({graphics:mask_graphics_46,x:-74.1,y:27}).wait(6).to({graphics:mask_graphics_52,x:-48.1,y:27}).wait(6).to({graphics:mask_graphics_58,x:-21.6,y:27}).wait(6).to({graphics:mask_graphics_64,x:4.4,y:27}).wait(7).to({graphics:mask_graphics_71,x:29.9,y:27}).wait(6).to({graphics:mask_graphics_77,x:55.9,y:27}).wait(11).to({graphics:mask_graphics_88,x:81.4,y:27}).wait(4).to({graphics:mask_graphics_92,x:106.4,y:27}).wait(4).to({graphics:mask_graphics_96,x:133.4,y:27}).wait(34));

	// 图层 3
	this.instance_3 = new lib.d01();
	this.instance_3.setTransform(31,17);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).wait(103));

	// 图层 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ax1CoIAAlPMAjrAAAIAAFPg");
	this.shape.setTransform(141.1,33.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(27).to({_off:false},0).wait(103));

	// 图层 9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AptW7IAA27IW8AAIAAW7g");
	mask_1.setTransform(84.8,146.8);

	// photo
	this.photo = new lib.postphoto();
	this.photo.setTransform(96.1,220.1,1,1,0,0,0,73.5,73.5);

	this.photo.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.photo).wait(130));

	// 图层 1
	this.instance_4 = new lib.a28();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFEFF4").s().p("Egx/A3oMAAAhvPMBj+AAAMAAABvPg");
	this.shape_1.setTransform(320,1394.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_4}]}).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,640,1750.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.photo13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 2
	this.instance = new lib.a05();
	this.instance.setTransform(61,102);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// 图层 4
	this.instance_1 = new lib.eyeflash();
	this.instance_1.setTransform(92.3,97.6,1,1,0,0,0,19.8,5.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// 图层 1
	this.instance_2 = new lib.a14();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,280,221);
p.frameBounds = [rect, rect];


(lib.muban_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// photo
	this.photo = new lib.p16photo();
	this.photo.setTransform(110,140);

	this.timeline.addTween(cjs.Tween.get(this.photo).wait(1));

	// 图层 6
	this.instance = new lib.d02();
	this.instance.setTransform(95,550);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hr
	this.instance_1 = new lib.hr();
	this.instance_1.setTransform(0,1311);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 8
	this.instance_2 = new lib.d09();
	this.instance_2.setTransform(0,501);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层 7
	this.instance_3 = new lib.d08();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hrtop
	this.hrtop = new lib.hrtop();

	this.timeline.addTween(cjs.Tween.get(this.hrtop).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,642,1312.5);
p.frameBounds = [rect];


(lib.muban_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 6
	this.instance = new lib.d09();
	this.instance.setTransform(0,382);

	this.instance_1 = new lib.d05();
	this.instance_1.setTransform(95,421);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// hr
	this.instance_2 = new lib.hr();
	this.instance_2.setTransform(0,547.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// photo
	this.photo = new lib.photo13();
	this.photo.setTransform(108,155);

	this.timeline.addTween(cjs.Tween.get(this.photo).wait(1));

	// 图层 5
	this.instance_3 = new lib.d04();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// hrtop
	this.hrtop = new lib.hrtop();

	this.timeline.addTween(cjs.Tween.get(this.hrtop).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,642,548.8);
p.frameBounds = [rect];


(lib.mouth1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{laugh:9});

	// timeline functions:
	this.frame_8 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(2));

	// 图层 3
	this.instance = new lib.a07_1();
	this.instance.setTransform(-17,-9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1));

	// 图层 1
	this.instance_1 = new lib.mouthimg();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:0.1,y:-1.2},4).to({x:0,y:0},4).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-8.5,-5.5,17,11);
p.frameBounds = [rect, new cjs.Rectangle(-8.4,-5.8,17,11), new cjs.Rectangle(-8.4,-6.1,17,11), new cjs.Rectangle(-8.4,-6.4,17,11), new cjs.Rectangle(-8.4,-6.7,17,11), new cjs.Rectangle(-8.4,-6.4,17,11), new cjs.Rectangle(-8.4,-6.1,17,11), new cjs.Rectangle(-8.4,-5.8,17,11), new cjs.Rectangle(-8.5,-5.5,17,11), new cjs.Rectangle(-17,-9,32,24)];


(lib.likes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_22 = function() {
		reflow();
		//this.stop();
	}
	this.frame_42 = function() {
		reflow();
	}
	this.frame_60 = function() {
		reflow();
	}
	this.frame_78 = function() {
		reflow();
	}
	this.frame_95 = function() {
		reflow();
	}
	this.frame_114 = function() {
		reflow();
	}
	this.frame_133 = function() {
		reflow();
	}
	this.frame_153 = function() {
		reflow();
	}
	this.frame_155 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(22).call(this.frame_22).wait(20).call(this.frame_42).wait(18).call(this.frame_60).wait(18).call(this.frame_78).wait(17).call(this.frame_95).wait(19).call(this.frame_114).wait(19).call(this.frame_133).wait(20).call(this.frame_153).wait(2).call(this.frame_155).wait(1));

	// hr
	this.instance = new lib.hr();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({y:84.8},0).wait(20).to({y:116.4},0).wait(18).to({y:148.4},0).wait(18).to({y:190.8},0).wait(17).to({y:226.3},0).wait(19).to({y:267.1},0).wait(19).to({y:303.1},0).wait(20).to({y:607.5},0).wait(3));

	// 图层 13
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#101012").s().p("AgMBWIAAgcIAZAAIAAAcgAgFAmIgHh7IAZAAIgHB7g");
	this.shape.setTransform(452,138.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#101012").s().p("AhGBvIABgtIAAhaQgEAIgOAUQgHgGgJgEQAMgNARggQASggAFgbQAOAGAIACQgHAJgOAhIAAB+IABAtgAA4BXQARABAGgBQAGgCAAgIIAAiLIgRAAQgPAAgNACIAAgUIAcABIAkAAIgBAnIAAB9QABAPgLAEQgNAEgPACQgDgMgGgLgAgWBuIAAgoIAAhbIAAghIAUAAIgBAcIAACIgAgPhdIAOgMQAHAKAGAJIANASQgJAFgHAHQgGgMgSgZg");
	this.shape_1.setTransform(432.5,139.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#101012").s().p("AhWBXQATAAAGgDQAGgCAAgJIAAgnQgkAJgLAEQgBgNgFgIQARgCAkgIIAAgmIgzABIAAgRIAzABIAAgfIgnAIQgDgKgFgHQAOAAAegHQAdgGAPgJIAMASQgIADgbAFIAAAkIAuAAIAAhGQAKACAKAAQgCAOAAARIAAAlIAqAAIAhgBIAAARIgggBIgqAAQADArAJAUQAUgTAOgjQAIAHAMAGQgIAGgMATQgMATgNAOQAHALAJAHQAIAIAFABQAGACACgHQACgHABgOQAKAHAKAFQgIAagIAGQgJAHgPgIQgQgJgRgXQggAWgRAKQgGgLgIgGQAbgKAagVQgNgagDgyIgvAAIAAAjQAVgFAMgFIABASIgiAIIAAAwQABASgNAFQgMAFgQADQgBgKgIgLgAAphTIANgNQAYAWAKAMQgHAFgIAIQgPgVgRgNg");
	this.shape_2.setTransform(408.4,139.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#101012").s().p("AhtBUQA9gdAqhiQgCgIgPgPQgOgPgPgGQALgIAFgIQAYARAMAQQAOAQAVA1QAWA0A1AaQgNAJgFAPQgWgPgVgYQgUgYgahAQgYBMhHA2QgEgJgNgLg");
	this.shape_3.setTransform(383.1,139.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#101012").s().p("AhkBdQARgSAJgVQAJgVADgSQAEgRABgMIACgdIgOAAIgVABIAAgTQAKACANAAIANAAIAAgXIAAgXIAXACIgDAQIgCAcIAxAAIgBAQIgIB2QgCASgLADQgMADgOABQAAgIgFgNQAQABAGgBQAHgCABgKIAGhuIghAAQgCAkgEAUQgEAWgFAQQgFAPgJAQQgJAQgHAIQgGgHgMgGgAAZBlIABgmIAAheIgBgnIBMAAIgBAnIAABRIABAvIgSAAIAAgWIgoAAIAAAagAArA4IAoAAIAAhtIgoAAg");
	this.shape_4.setTransform(357.4,139.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#101012").s().p("AgGBYQARAAAFgCQAGgDAAgHIAAhNIgBghIAUAAIgBAhIAABXQAAAMgLAFQgKAEgSADQgBgKgGgMgAhMBsIAAgwIAAhZIgQAaQgGgGgKgHQARgTAOgXQAOgYAGgbQAHAFAPAFQgGAHgRAhIAAB4IABAvgAguA6QAYgYAQghIAQAJIgPAbQgLAQgPARIgPgMgAA3AIIAPgIQAWAeARAbIgSALQgQgegUgegAgugQQAWgZAMgcQALgcAAgJQAKAFANADQgGAEgLAZIBiAAIgIAXIgKAbIgTgEIAMgeIhOAAQgLAYgPAVQgHgFgNgDg");
	this.shape_5.setTransform(333.1,139.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#101012").s().p("AhuBgQATgTAKgHIAAhTIgaABIAAgRIAbABIASAAIAAAoIAAA2QAbATA4ACQA6ACAggEQgHANgCAJQglAAgbgBQgbgBgQgDQgTgCgPgGQgPgFgIgGQgJgFgHAKIgRAVIgPgNgAAYBKIABgkIAAhcIgBgnIBHAAIgBAmIAABJQAAASgIAEQgIAFgOABQgDgKgFgIQANAAAEgEQADgEAAgIIAAhZIgiAAIAAB0QAAAPACAUgAgsAnQAIgHgBgOIAAhMIgBghQAfgFANgMQAFALAIAIQgLABgbAIIAABtIAdgRIACATQgKADgkAVgAhihjQAJgEAKgCQAMAhADANQgKABgJAEQgDgMgMghg");
	this.shape_6.setTransform(308.2,139.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#101012").s().p("AgpBcQAVgIAMgNQALgMAHgOQAHgOACgNIADgUIABgaIAWADQgDASAAAKQAAAMAIAQQAHAQALAMQAKALALAGQALAHAJACQgIAIgFAMQglgYgKgRQgLgRgEgOQgKAagNAQQgLAQgYARQgIgIgJgIgAhsBQQANgOAJgOQAJgOAMgYIgOgTIgSgXIAPgLIALAQIAPAUIAHgZQAEgOADgSIgdAAIggABIAAgRIAfABIAyAAIgFAYIgGAZQgCANgEAKIgFANIANAUIAPAaQgIAEgIAGIgKgSIgLgUQgHAQgJAQQgKAQgLAQQgJgHgJgFgAgVgNQAFgKAFgLQAFgLACgNIAEgZIAFgYIAXAFQgFAJgDAJIgFATIBTAAIgHASQgEALgEAUQgLgDgIgBIAFgQIAEgOIg/AAIgHAVIgHAXQgKgFgHgCg");
	this.shape_7.setTransform(283.5,139.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#101012").s().p("AgJAWIAJgXIgJAAIAAgUIAUAAIAAAUIgLAXg");
	this.shape_8.setTransform(261.3,147.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#101012").s().p("AgMBuIACgsIgCgyIBYAAIgBArIABAvIgSAAIAAgSIg2AAIAAAWgAAEBJIA2AAIAAgpIg2AAgAhnBOIABhSIgBhIIA9AAIgBBFIABBDIgSAAIAAgTIgZAAIAAAlgAhVAZIAZAAIAAhWIgZAAgAgogKQAPgLAJgKQAIgKAHgNQAEgNAFgOQAEgOAEgOIAYAGIgDAIQAIAbASARQARAQAXALQgFADgNAPIgTgQIAAARIgUgBIgcAAIgTABIAAgQQgKANgLAIQgHgFgLgFgAAQg0QgHAOgJAQIASABIAbAAQAMAAAHgCQgOgNgKgQQgIgPgFgNQgFAOgGAOg");
	this.shape_9.setTransform(246.1,139.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#101012").s().p("AgLBuIABgsIgBgyIBYAAIgBArIABAvIgSAAIAAgSIg3AAIAAAWgAAEBJIA3AAIAAgpIg3AAgAhmBOIABhSIgBhIIA8AAIgBBFIABBDIgSAAIAAgTIgZAAIAAAlgAhVAZIAZAAIAAhWIgZAAgAgogKQAPgLAIgKQAJgKAHgNQAEgNAFgOQAFgOADgOIAZAGIgEAIQAIAbARARQASAQAYALQgGADgMAPIgUgQIAAARIgUgBIgdAAIgSABIAAgQQgKANgLAIQgGgFgMgFgAAQg0QgHAOgJAQIARABIAcAAQAMAAAHgCQgOgNgJgQQgKgPgFgNQgEAOgGAOg");
	this.shape_10.setTransform(221.1,139.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#101012").s().p("AgJA1IAAgVIATAAIAAAVgAgJggIAAgUIATAAIAAAUg");
	this.shape_11.setTransform(197,142);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3E5586").s().p("AhhBmIAJgVIALgXIARAGIgJASIgLAaQgKgFgHgBgABBBAIAPgIQASAaAHAPIgQAIQgJgUgPgVgAgeBVIgGgSQAHgBAKgEIAKAnQgJABgIACIgEgTgAAOBAIAPgFIAIATIAHAVQgKABgHADQgCgPgLgYgAg9AzQACgNAAgKIgQAIIgUALQgEgJgFgHQAVgFAYgMIAAgWIglABIAAgPIAlABIgBgWIAQAAIAAAbIAAAmIAAAdgAA8AtQgKgBgDgEQgDgFAAgIIAAgsIAAgcIAQAAIgBAQIAAAQQAXgLAJgKIANAQQgKACgMAHQgLAHgMACIAAAQQAAANAFABIAMAAQAIAAACgEQADgFAAgLIAQAKQgEASgGADQgGADgKABIgJAAIgKAAgAgWAqIABgfIgBgfIAyAAIgBAfIABAfgAgFAbIAQAAIAAggIgQAAgAghgmIABgfIgjAAQgOgBgSABIAAgPIAfABIAkAAIgBgXIATAAIgBAXIAhAAIgBgYIATAAIgBAYIAlAAIAggBIAAAPIhFAAIABAfgAgPgzIAhAAIAAgSIghAAg");
	this.shape_12.setTransform(178.9,139.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3E5586").s().p("ABAALIh6AAIgvABIAAgXIAvABIB4AAIAsgBIAAAXIgqgBg");
	this.shape_13.setTransform(155.2,138.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3E5586").s().p("AhnBdQAKgKAOgbQANgcAFgQQALAHAMAEQgKAJgLAbIgSAuQgLgGgPgGgAA+BbIg7AAIgvABIAAgUIAvABIASAAIAAiOIgLAAIgpAAIAAgTIApABIAsAAQAVAAAVgDIAAAVIgoAAIgQAAIAACOIAWAAIAvgBIAAAUIgvgBgAhsgYIAKgSQAXAJAVAMQgIAHgEAMQgTgOgXgIgAhahYQAFgGAFgKQAWAMATANQgIAJgFAJQgUgRgSgKg");
	this.shape_14.setTransform(131,139.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#101012").s().p("AgMBVIAAgcIAZAAIAAAcgAgGAbIgGhvIAZAAIgGBvg");
	this.shape_15.setTransform(315.5,176.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#101012").s().p("AAtBqIhDAAQgRAAgCgVIAAhXIAAgjIAWAAIgBAiIAABPQAAALALAAIAqAAQALABADgGQADgGACgWQAKAIAMACQgHAegGAHQgGAFgIAAIgCAAgAhsA4QANglAHgvIAXAEQgDAGgEAWIgOA6QgLgEgLgCgAAzgVQAJgEAIgHQAWAeATAcQgKAFgJAIQgUglgTgXgAgXheIARgLQAIASAXAgQgLAFgKAHQgNgfgOgUg");
	this.shape_16.setTransform(295.4,175.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#101012").s().p("AAWBmQgWAAAAgYIAAiKIgBgoIASAAIgBAlIAAAnQAsgVAVgVQAIAKAIAJIggASQgVALgcANIAABMQAAAOAMAAIAjAAQAHAAADgGQADgGAEgSQAIAFAOADQgHAagHAGQgIAHgIAAgAhlBRQAFgDACgMIAAh7IgBgnIAVAAIgBAkIAAAhIAWAAIAngBIAAATIgngBIgWAAIAABQIAagMIAigRIADAUIgsAVQgXALgJAHQgGgHgHgMg");
	this.shape_17.setTransform(270.6,175.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#101012").s().p("AAtBqIhDAAQgRAAgCgVIAAhXIAAgjIAWAAIgBAiIAABPQAAALALAAIAqAAQALABADgGQADgGACgWQAKAIAMACQgHAegGAHQgGAFgIAAIgCAAgAhsA4QANglAHgvIAXAEQgDAGgEAWIgOA6QgLgEgLgCgAAzgVQAJgEAIgHQAWAeATAcQgKAFgJAIQgUglgTgXgAgXheIARgLQAIASAXAgQgLAFgKAHQgNgfgOgUg");
	this.shape_18.setTransform(245.4,175.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#101012").s().p("AAWBmQgWAAAAgYIAAiKIgBgoIASAAIgBAlIAAAnQAsgVAVgVQAIAKAIAJIggASQgVALgcANIAABMQAAAOAMAAIAjAAQAHAAADgGQADgGAEgSQAIAFAOADQgHAagHAGQgIAHgIAAgAhlBRQAFgDACgMIAAh7IgBgnIAVAAIgBAkIAAAhIAWAAIAngBIAAATIgngBIgWAAIAABQIAagMIAigRIADAUIgsAVQgXALgJAHQgGgHgHgMg");
	this.shape_19.setTransform(220.6,175.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3E5586").s().p("Ag8BsQADgRAAgPIAAiVQAAgNgEgVIAXAAQgCAVAAAOIAACUIABAggAgSBoIABg0IgBg0IB5AAIgBA1IABAwIgUAAIAAgRIhTAAIAAAUgAAyBFIAgAAIAAg2IggAAgAAABFIAgAAIAAg2IggAAgAhmBQQACgYAAgPIAAhVIgCggIAVAAQgCARAAAOIAABWQAAAPACAYgAARgoQAHgFAHgGQAGAHANALQANAMAGAIQgLAIgDAEQgQgTgWgUgAgjgYQATgTANgYQAKgZADgPIAaAKQgIAGgFAJIgIAPIA3AAQAPAAATgCIAAATQgRgCgPAAIhAAAQgPAZgMAOQgJgIgHgDg");
	this.shape_20.setTransform(179.3,175.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3E5586").s().p("AhuBVQAbgIAegXQAdgZANgrIgzAAIgkABIAAgUIAkABIA2AAIAAgzIgnAAIgiABIAAgUIAiABIBeAAIAhgBIAAAUIghgBIgnAAIAAAzIA9AAIAfgBIAAAUIgegBIg7AAQAOAhAXAaQAZAZAmAJQgNAKgCAJQgdgKgZgWQgYgXgSgoQgJAmgZAXQgYAWglARQgEgKgLgIg");
	this.shape_21.setTransform(155.3,176.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3E5586").s().p("Ag/BpIABgZIAAg5QgGALgTASQgIgJgHgFQATgPAOgQQANgOAJgVIAXALIgNANIAsAAQgCgHgDgGIASgHIAIAUIAuAAIAWgBIAAAPIgXgBIgxAAIAAAQIAmAAIAfgCIAAAQIgfgBIgmAAIAAAOIAmAAIAfgCIAAARIgfgBIgmAAIAAAQIA2AAIAZgBIAAAQIgZgCIh8AAIAAAKgAguBSIA1AAIAAgQIg1AAgAguA0IA1AAIAAgOIg1AAgAguAZIA1AAIAAgQIg1AAgAhbgoIAmgHQATgEAVgHIAAgeIgrAAIgcABIAAgRIAcABIA7AAIgBAbIAAAaIABAbIgQAAIAAgTIgjAKQgVAFgNAGQgEgJgFgKgABQgWIAAgTIgcAGQgRAFgSAGQgDgJgGgKQATgCATgEIAigIIAAgfIgiAAIgfABIAAgRIAfABIA0AAQgBAGAAAXIAAAVIABAfgAhHhLIAPgKQAIAJAJAPQgIADgJAHQgGgMgJgMgAAUhNIAPgJIAQAYIgQAKQgEgMgLgNg");
	this.shape_22.setTransform(130.5,176.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#101012").s().p("AgJA1IAAgVIATAAIAAAVgAgJggIAAgUIATAAIAAAUg");
	this.shape_23.setTransform(197,142);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#101012").s().p("AhuBfQAOgKASgQIAAhFIgbAAIAAgQIAaABIATAAIAAAeIAAA1QAYAWA4AAQA7AAAfgFQgFAMgDALIg/AAIgrgCQgRgCgLgEQgMgEgMgIQgMgIgHAHQgIAIgKAOQgIgJgJgFgAgaBJQACgUAAghIgBg5IAoAAIAFgTIg/ABIAAgRQAOABBFAAIAPglIAUAIQgHAHgKAWIA0gBIAAARIhHgBIgEATIA2AAIgBA5IABA1gAgFA6IBMAAIAAgSIhMAAgAgFAZIBMAAIAAgRIhMAAgAgFgEIBMAAIAAgSIhMAAgAhbhaQALgCAJgDQAHASAFAXQgJACgKAEIgNgqgAgRhhIANgLIASAaIgOAKQgGgLgLgOg");
	this.shape_24.setTransform(514.1,215.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#101012").s().p("AhiBgQAMgLAJgOQAKgPAGgPQAHgQACgPIgxABIAAgQIA0ABQADgTAAgcIgWAAQgFANgJARIgSgEQAGgKAGgPQAHgQAEgOIAGgaIAWAFQgEAGgDAJIgHATQA1AAALgBIAAARIgdAAQAAAUgDAbIAmgBIAAAQIgogBQgBALgDAJIATAOQAKAIAOATQgGADgHAKQgJgOgIgJIgTgQQgFAPgMARQgMARgLANQgFgGgKgFgAAOBeIABgmIAAhiIgBgiIBYAAIAAAiIAABfIAAAlIgTAAIAAgZIgxAAIAAAdgAAiAyIAxAAIAAhvIgxAAg");
	this.shape_25.setTransform(489.6,216);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#101012").s().p("AgNBmIABgpIAAhbQgcAngyAiQgIgMgGgEQASgJAfgZQAggcAYgxIg8AAIgmABIAAgTIAsACICAAAIAegCIAAATIgdgBIg3AAIgQAeIAABzIABApgAAWgbQAHgHAGgHIAmAkIAeAdQgKAIgHAIQgSgXgugsg");
	this.shape_26.setTransform(465,216.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#101012").s().p("AAdBrIABgqIAAhzIgBgsIBLAAIgZBTQARAQAHAPQAHAPgBANQgCAOgJAFQgJAGgWAGQgCgJgGgNQASAAAHgEQAIgDgBgMQgBgMgLgOQgLgMgIgJQAHgSANg0IghAAIAAC6gAhNBmIABglIAAgmIgTAMQgFgJgIgFQATgKAPgLQAQgKAOgPIg7ABIAAgQIAwABIAAgcIglABIAAgPIAlABIgBgeIATAAQgBAGAAAYIAYgBIAAAPIgYgBIAAAcIAGAAQAXgfAMggIARAMQgIAJgJAPQgHAPgJAMIAkgBIAAAQIgugBIgZAXIA5AAIgBAwIABAzIgPAAIAAgNIg2AAIAAAOgAg8BKIA2AAIAAgWIg2AAgAg8AmIA2AAIAAgXIg2AAg");
	this.shape_27.setTransform(440.6,216.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#101012").s().p("AhpBjQANgRAPgbIARALIgcArQgFgGgMgEgAA7A9QAJgEAHgHQAVAcAMASQgJADgIAIQgLgVgVgZgAgoBBQAKgCAHgFQALAVAGAUQgNAEgFADQgEgPgMgagAAJBAIAOgKQAUAbAGAOIgRAJQgHgSgQgWgAgaAnQASgJAMgSQAOgRAJgbIggABIAAgQIAhABQABgtgBgNQALACAJAAQgCAQAAAoIA0gBIAAAQIgwgBQAIAYAPAPQAPASAWAKQgMAHgGAIQgUgNgMgQQgMgQgJgSQgGAQgNARQgLASgRAPQgHgHgLgHgAhkAoQAXgLAQgSQgHgJgRgKQAHgGAEgIQAPANAJAJQAHgHAFgJQgNgNgOgJIAKgOQAQAMAJAJQAGgMACgTIgnAAQgMAUgTAZQgHgGgLgDQATgTALgXQAMgXAGgRQAJAFAMADQgFAHgJAQIA3AAQgEASgHAZQgGAZgWAWQgVAZgXAOQgGgHgLgFgAA6hVIAMgMQAQAOAOARIgOAMQgNgSgPgNg");
	this.shape_28.setTransform(416.1,216.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#101012").s().p("AgsBnIAAgoIAAglIA1AAIAAgcIhEAAQgEAlgJAaQgJAagIAOQgIgJgKgGQAMgNAGgRQAFgTACgTQADgSAAggIAAhGICoAAIgBAcIABAbIg9AAIAAAdIAoAAIAogBIAAASIgogBIgoAAIAAAcIA9AAIgBAmIABAmIgTAAIAAgQIhhAAIAAARgAgbBHIBhAAIAAgeIhhAAgAg7gSIBEAAIAAgdIhEAAgAg7g/ICBAAIAAgXIiBAAg");
	this.shape_29.setTransform(391.4,216.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#101012").s().p("AhnBaQAZgCAYgLQAYgKAKgWIgnAAIgiAAIAAgQIAiABIArAAIABgQIASADQgBAFgBAIIBPAAQgBANgCASQgDASgDAJQgEAJgJADQgIADgaACQgBgJgKgLQAeACAFgEQAGgDACgHIADgcIg8AAQgJAdgXAMQgWANghAJQgEgKgLgIgABIALQgMgLgDgRQgCgUACgdIgZABIgDAhIASALQgIAHgEAGIgNgJQgOARgTANQgGgHgNgFQAagHAKgVQgGgEgLgGQAHgGADgHIANAJIADgYQgOAAgJACIgCgPIAZAAQAAgSgCgLQAJACANABQgDAJAAAQIAugBQgDATAAATQgBAUAEAKQAEALAEABQAFAAAAgWQAHAIAMABQgFAVgEAGQgEAFgGABIgCAAQgGAAgLgJgAhXAAQAUAAADAAQADgBAAgKIAAgRIgoAMQgDgLgFgGQARgCAfgHIAAgVIgpABIAAgRIApABIgBgbIAVAAQgDAJAAASIAXgBIAAARIgXgBIAAASQALgCALgEIgBAPIgVAFIAAAgQgCALgJADIgZAFQgBgKgGgKg");
	this.shape_30.setTransform(342.6,216);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#101012").s().p("AgmBTQASAAAHgCQAIgCgCgKIAAgqIhDAAIggAAIAAgRIAgABIBDAAIAAghIgpAAIgiABIAAgSIAiABIApAAIAAgjIhKAEQgDgLgFgIQAhABA3gEQAzgEAXgJQAFANAHAJIhKAGIAAAmIAqAAIAggBIAAASIgggBIgqAAIAAAhIBDAAIAdgBIAAARIgdAAIhDAAIAAAzQABAOgKAFQgIAFgXADQgBgMgIgKg");
	this.shape_31.setTransform(318.4,216.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#101012").s().p("AAfBXQASABALgCQAKgCAEgHQACgGABggIADhXIg3AAQgHASgOAYQgFgHgJgDQAIgMAGgQQAIgPAFgTQAGgTABgKIAXAIQgGAIgCAJIgHARIBCAAIgBAkQgBA4gDAzQgCARgQAGQgQAFgUACQgBgKgHgLgAhhBmIABgmIAAhUIgBgpIAbAAQAFgWACgXIAXAGQgGAJgIAeIArAAIgBAoIAABQIABApIgTAAIAAgTIgwAAIAAAVgAhOBBIAwAAIAAgyIgwAAgAhOAAIAwAAIAAgtIgwAAgAAZAQIgMgTIASgKIAKAVIAOAdIgSAJIgMgeg");
	this.shape_32.setTransform(293.8,216.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#101012").s().p("AhuBcQAggMAVgTQAWgTAKgZQAJgXADggQAEghgCgmIAVADQgEAOAAAOIAAAlQAAAWAJAUQAJAXANAPQAMAPASALQARAKAaAHQgLALgGALQgUgKgOgJQgNgJgLgKQgLgLgLgPQgJgPgFgYQgFAWgIAOQgIAPgLAMQgJAMgPALIghAXQgGgKgOgIgAhbgBQAFgJAGgRQAFgRAEgVQAIADANACQgEAGgFATQgFAUgGAQIgVgCgAAkgIQAJgPAHgQIAKgeQAIAFAOADQgHAHgHAUQgIAVgHANQgIgFgLgDg");
	this.shape_33.setTransform(269.4,216);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#101012").s().p("ABJBRQgtACgzAFQgzAEgGAEIgIgXQAOgBAiglQAkgjAeg6QAJAJAMAGQgGAGgPAWQgQATgWAaQgXAZgSAQIA1gDIBAgEQgQgagKgOQAJgGAHgGIAdApIAZAoQgHACgNAKQgGgLgJgNgAhqAHQAXgLAdgiQAdgjAPgfQAKAIAIAEIgOAZQgMAUgUAWQgTAXgiAaQgHgKgIgHg");
	this.shape_34.setTransform(244.7,216);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#101012").s().p("AAlBrQgYAAgPgDQgQgCgKgEQgKgFgLgIQgLgIgNALQgMALgGAIQgJgMgFgEQAcgTAJgEIAAhIQgQAAgPACIAAgQIAyAAIgBAaIAAA4QAVAZAzAAQA1AAAfgFQgGAKgCANIg9AAgAgkA7QARgFARgMQAPgMAJgNQgKgMgjgbIANgNQAeAYANANQANgUAGgZQhFAAgRABIAAgRIAaABIBJAAIAfgBIAAARIgYgBQgLAkgNAWIAUATIAYAaQgKAGgHAJIgSgWIgWgXQgMAPgNAJIggAWQgDgHgLgKgAhfhWQAHgEAJgIQAZAfAGALIgQAMQgOgZgRgRgAAAhfQAJgGAEgFIAeAfIgPAMQgEgJgYgXg");
	this.shape_35.setTransform(220,215.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3E5586").s().p("AguBlQgSAAgLgEQgJgFgBgLQAAgLAKgKQAKgJAOgLIAkgWIAngXIhGAAIgpABIAAgRIApABIB5AAIAAAPQgRADgLAEIgaAOIghAVQgVAMgRAPQgSAPAJADQAIADAVAAIBYAAQALAAADgGQADgGABgTQALAHANACQgHAegKAEQgIAEgMAAgAgrgeIABgbIghAAIgcABIAAgSIAcABIAhAAIgBgbIAUAAQgCALAAAQIAuAAIgBgbIAUAAIgBAbIAhAAIAggBIAAASIgggBIghAAIABAaIgTAAIAAgaIguAAIAAAbg");
	this.shape_36.setTransform(179.5,215.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3E5586").s().p("AgDBiQAJgJAJgLQAJgKAFgMQAFgLADgMQADgMAAgMIAAgdIAVAAQgBAVAAAMQABALAEAMQAEAMAHALQAGALAJAJQAIAIAKAHQgKAGgGAIQgOgOgLgRQgMgQgEgXQgDAQgKATQgJASgTAUQgJgJgFgEgAheBqIABg0IgBgtIBUAAIgBAsIABAsIgRAAIAAgKIgxAAIAAATgAhMBKIAxAAIAAgTIgxAAgAhMAqIAxAAIAAgTIgxAAgAgagGIg5AAIgZABIAAgPIAVAAIAqAAQAKgaAEgNQAKAGAKADQgIAKgKAUIAdAAIAAAPIgagBgAAFgUQAFgIAEgLIAGgWIAEgXIADgVIAVAFIgJAiIBAAAIgIAXQgEALgCAMIgSgDIAJgdIgsAAIgNAoIgSgIgAhXg0IAPgFIAKAeIgRAFQgDgOgFgQgAgdhAIgrAAIgeABIAAgPIAeABIArAAIAcgBIAAAPIgcgBgAhAhpQAHgDAKgCIAJAbIgRAEQgCgMgHgOg");
	this.shape_37.setTransform(155.5,215.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3E5586").s().p("AgNBaQAJgGgBgNIAAhJIgaABIAAgRIAaABIAAgvIgBgpIASAAIgBAoIAAAwIAxAAIAkgBIAAARIgjgBIgQAAQAHAhARAUQARAUAUALQgKAHgEAIQgXgNgSgaQgRgbgFghIgSAAIAABMQAJgFAPgMIAGATIgYAPQgKAGgIAJIgMgQgAhaBQQAVACAIgEQAHgCABg5Ig0AAQACgdABghIAzAAIAAgjIgXAAIgeABIAAgRIAdABIArAAIgBAgIABAhIg0AAIgCAgIA0AAIgDAtIgDAgQgCAKgKAEQgKAEgVACQgBgIgGgNgAAVgnQAZgZATgkIARAMQgXAhgZAcQgHgJgGgDg");
	this.shape_38.setTransform(131.7,216.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#101012").s().p("AgGBYQARAAAFgCQAGgDAAgHIAAhNIgBghIAUAAIgBAhIAABXQAAAMgLAFQgKAEgSADQgBgKgGgMgAhMBsIAAgwIAAhZIgQAaQgGgGgKgHQARgTAOgXQAOgYAGgbQAHAFAPAFQgGAHgRAhIAAB4IABAvgAguA6QAYgYAQghIAQAJIgPAbQgLAQgPARIgPgMgAA3AIIAPgIQAWAeARAbIgSALQgQgegUgegAgugQQAWgZAMgcQALgcAAgJQAKAFANADQgGAEgLAZIBiAAIgIAXIgKAbIgTgEIAMgeIhOAAQgLAYgPAVQgHgFgNgDg");
	this.shape_39.setTransform(333.1,139.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#101012").s().p("AgJA1IAAgVIATAAIAAAVgAgJggIAAgUIATAAIAAAUg");
	this.shape_40.setTransform(197,142);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#101012").s().p("AgXBgQAXgQAKgWQANgWABgSIABgjQAKACAMAAIgDAPQgBAGACAPQACAPAVAWQAVAWAQAGQgLAHgFAJQgggVgWglQgNAigbAdQgGgHgMgEgAhoBZQAggZAKggQAMgggBgPQANABAJADQgEAJgHAeQAZAPAPANIgLANQgJgLgYgOQgRAigZAXQgGgIgMgEgAhkgSQAagJAZgYQAZgYAIgfIAVAEIgFAKQAfA0A8APQgIAHgFALQg8gWgZguQgZAug2AbQgFgKgJgGg");
	this.shape_41.setTransform(460.4,252.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#101012").s().p("AAvBuIABgjIAAgZIguAAIAAgPIAuAAIAAgjIgnAAIAAgOIAnABIAAghIgoABIAAgQIA0ABQAKgXAIgaQALAGAKACIgJAPIgNAaIAcgBIAAAQIgogBIAAAhIANAAIAYgBIAAAOIglAAIAAAjIAtAAIAAAPIgtAAIAAAZIABAjgAhPBqQABgOAAg9QgHALgJAJQgFgHgKgDQAKgJAJgNQAJgOAEgJIgTABIAAgQIAWABQADgOAAgKIgfABIAAgQIAfABIAAgbIgVABIAAgQIAYAAIA+AAIgBAqIAMgBIAAAQIgMgBIABAmIg2AAQgGAPgEAHIBBAAIgBAoIABApIgRAAIAAgRIgnAAIAAAYgAg9BEIAnAAIAAgjIgnAAgAg5gSIAiAAIAAgYIgfAAIgDAYgAg2g4IAfAAIAAgbIgfAAgAAQhjQAGgDAHgGQAIAKALAQIgPALQgJgQgIgMg");
	this.shape_42.setTransform(436,252.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#101012").s().p("AhvBgQAQgRAHgaQAIgbACgaQABgbAAgXIgBgiIAjgBQASAAAQgDIAkgHQAUgEASgHQAHAPAGAEQgBAAgLACIgWAFQABAgADAWQADAVAHAUQAHAVAOATQAOASASANQgNAJgFAIQgLgJgMgPQgMgPgKgXQgJgWgGgbQgFgeAAgnIggAGIgCBPQgBAagFAnIAagHIgKgVIARgGIAKAXIAOAdQgLAEgGAFIgIgUQgRADgGAEQgJADgQAKQgGgMgFgGQAIgFACgNQADgMACgUQABgVABgYIAAg4IgkABIgBAxQgBAUgDAXQgEAWgGAVQgHAUgKAVQgKgHgLgFg");
	this.shape_43.setTransform(412.3,252.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#101012").s().p("ABFBoIg7AAQgMABgJgIQgJgIAFgPQAEgPAPgSQAPgSAfgbIgYAAIglABIAAgRIAjABIA3AAIAAAQQgLADgfAeQgdAfgGAKQgCALACAEQAEAEAOgBIAwAAQAJgBAEgHQADgIACgOQAHAHAMADQgGAZgJAFQgIAGgKAAIgDgBgAhoBSIABgkIAAhWIgBglIBCAAIgBAlIAABKIABAjIgRAAIAAgaIggAAIAAAngAhXAdIAgAAIAAhbIggAAgAglgTQAIgKAMgVQANgVAKghQAKAHAKADQgDABgFAJIgJASIAzAAIAmgBIAAASIgmgBIg6AAQgMAYgLARQgIgHgIgDg");
	this.shape_44.setTransform(388.5,251.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#101012").s().p("AAeBXQATABALgCQALgCACgHQADgGABggIADhXIg2AAQgIASgOAYQgFgHgJgDQAJgMAFgQQAHgPAHgTQAFgTABgKIAXAIQgFAIgEAJIgHARIBDAAIgBAkQgBA4gEAzQgCARgQAGQgQAFgTACQgBgKgIgLgAhhBmIABgmIAAhUIgBgpIAbAAQAFgWADgXIAVAGQgEAJgJAeIAqAAIgBAoIAABQIABApIgTAAIAAgTIgvAAIAAAVgAhOBBIAvAAIAAgyIgvAAgAhOAAIAvAAIAAgtIgvAAgAAZAQQgGgNgGgGIARgKIALAVIAOAdIgSAJIgMgeg");
	this.shape_45.setTransform(364.3,252.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#101012").s().p("AgBBtIABgxIAAhsIgBguIBqAAIgBAvIAABoIABAyIgTAAIAAgSIhHAAIAAAUgAAPBJIBHAAIAAgrIhHAAgAAPAOIBHAAIAAgjIhHAAgAAPgkIBHAAIAAgqIhHAAgAg/BtIAAgpIAAg/QgMAigPAVQgHgKgHgGQAHgGAMgYQAMgVAHghIgiABIAAgSIAlABIAAg0IAUAAIgBA0IAjgBIAAASIgjgBIAAAjIAKgLQASAQALARIgNAMQgLgSgPgNIAABFIABAqg");
	this.shape_46.setTransform(339.9,252);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#101012").s().p("AAxBZQgRgIgLgDIALgNQAQAEAPAGIAjAPQgLALgEAFQgPgKgTgHgAhhBeQAYgHAPgHQAPgHAMgIIAQAMQgPAJgTAHIgjANIgNgMgAA/A8Ih/AAIgqABIAAgRIAcAAIAMAAIAAhJIgBgdIA2AAIABgQIg3AAIgdABIAAgPIAcABIA7AAIABgSIAUABQgDAGgCALIA2AAIAggBIAAAPIgggBIg5AAIgBAQIBCAAIgCAbIAABLIAOAAIAaAAIAAARIgsgBgAgvAsIBfAAIAAgMIhfAAgAgvASIBfAAIAAgLIhfAAgAgvgGIBfAAIAAgLIhfAAgAgvgfIBfAAIAAgNIhfAAg");
	this.shape_47.setTransform(316.3,252.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#101012").s().p("AgbBdQAigkgChQIAAgoIgBgqIBeAAIgBApIAACFQABASgIAFQgGAGgZADQgBgKgIgNQAQACAGgCQAHgBgBgJIAAgxIg3AAQgGAwgZAnQgJgJgKgEgAAYACIA2AAIAAgkIg2AAgAAYgxIA2AAIAAgoIg2AAgAhhA/IABgqIAAhOIgBgoIBNAAIgCApIAABCIACAoIgSAAIAAgNIgoAAIAAAagAhOAUIAoAAIAAgsIgoAAgAhOgoIAoAAIAAgqIgoAAg");
	this.shape_48.setTransform(292.1,252.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#101012").s().p("AgNBmIABgpIAAhbQgcAngyAiQgHgMgIgEQATgJAggZQAegcAZgxIg9AAIglABIAAgTIAsACICAAAIAfgCIAAATIgegBIg3AAIgQAeIAABzIABApgAAWgbQAHgHAGgHIAmAkIAeAdQgKAIgHAIQgSgXgugsg");
	this.shape_49.setTransform(268,252.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#101012").s().p("AgKBuIABgrIAAhDIgBgmIATAAIgBAmIAABCIABAsgAhtgJQAtgSAZgeQAYgdAJgXIAUAIIgGAJQAnA6A/ATQgJALgFAIQg9gYgkg5QgiA3g6AdQgFgHgLgJg");
	this.shape_50.setTransform(244.2,251.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#101012").s().p("AhsBcQATgLAMgVQAMgWACgTIAXAHIgKAVQARASAYAHIAAg+Ig8AAIgkABIAAgOIAkABICIAAIAjgBIAAAOIgjgBIg8AAIAAAYQA3AAARgBIAAARQgRgBg3AAIAAAdQARACAbAAQAaAAAggDQgIAJgCANIgvAAQgVAAgSgCQgQgDgRgGQgRgHgUgRQgEAHgHAKQgHALgOAOQgJgIgKgGgAhHgTIABguIgBgoICKAAIgBAoIABAugAgzgjIBiAAIAAgUIhiAAgAgzhGIBiAAIAAgTIhiAAg");
	this.shape_51.setTransform(220.5,252.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#101012").s().p("AgSBiQAQgMAIgOQAKgPAEgPQAGgQABgQIAEghIgdABIAAgRIAdABQABglgBghIATACQgDAWAAAuIAhAAIAXgBIAAARIgWgBIgiAAQgBAegFAWQgEAXgKASQgKASgSAXQgHgIgKgFgAhSBZQAWABAEgDQACgDAAgIIAAg4IgmAAIABgdIgBgdIBXAAIgBAgIABAaIghAAIAABAQAAAOgIAFQgIAEgUACQgBgMgHgIgAhKAGIA0AAIAAgeIg0AAgAA+BnQgNgCAAgTIAAg0IgBgjIATAAIgBAeIAAA2QABAIAEABIALAAQAFAAACgGQACgGABgOQAHAGAMADQgFAWgGAFQgEAFgKABIgFAAIgTgBgAhuBJQAMgNAOgeIASAJIgMATIgPAZQgHgFgKgFgAghAlIAPgLQALAPAKAWQgGAEgHAGQgIgRgPgTgAA7hRIAOgKIAZAkQgLAEgGAFQgGgMgQgXgAgXg4Ig0AAIggABIAAgQIAgABIA0AAIAggBIAAAQIgggBgAhHhjQAJgGAGgFQAQARAHAMIgOAKQgJgOgPgOg");
	this.shape_52.setTransform(196.3,252);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#101012").s().p("AhWBXQATAAAGgDQAGgCAAgJIAAgnQgkAJgLAEQgBgNgFgIQARgCAkgIIAAgmIgzABIAAgRIAzABIAAgfIgnAIQgDgKgFgHQAOAAAegHQAdgGAPgJIAMASQgIADgbAFIAAAkIAuAAIAAhGQAKACAKAAQgCAOAAARIAAAlIAqAAIAhgBIAAARIgggBIgqAAQADArAJAUQAUgTAOgjQAIAHAMAGQgIAGgMATQgMATgNAOQAHALAJAHQAIAIAFABQAGACACgHQACgHABgOQAKAHAKAFQgIAagIAGQgJAHgPgIQgQgJgRgXQggAWgRAKQgGgLgIgGQAbgKAagVQgNgagDgyIgvAAIAAAjQAVgFAMgFIABASIgiAIIAAAwQABASgNAFQgMAFgQADQgBgKgIgLgAAphTQAIgHAFgGQAYAWAKAMQgHAFgIAIQgPgVgRgNg");
	this.shape_53.setTransform(172.4,252.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3E5586").s().p("AhWBXQATAAAGgDQAGgCAAgJIAAgnQgkAJgLAEQgBgNgFgIQARgCAkgIIAAgmIgzABIAAgRIAzABIAAgfIgnAIQgDgKgFgHQAOAAAegHQAdgGAPgJIAMASQgIADgbAFIAAAkIAuAAIAAhGQAKACAKAAQgCAOAAARIAAAlIAqAAIAhgBIAAARIgggBIgqAAQADArAJAUQAUgTAOgjQAIAHAMAGQgIAGgMATQgMATgNAOQAHALAJAHQAIAIAFABQAGACACgHQACgHABgOQAKAHAKAFQgIAagIAGQgJAHgPgIQgQgJgRgXQggAWgRAKQgGgLgIgGQAbgKAagVQgNgagDgyIgvAAIAAAjQAVgFAMgFIABASIgiAIIAAAwQABASgNAFQgMAFgQADQgBgKgIgLgAAphTIANgNQAYAWAKAMQgHAFgIAIQgPgVgRgNg");
	this.shape_54.setTransform(131.4,252.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#101012").s().p("AgJA1IAAgVIATAAIAAAVgAgJggIAAgUIATAAIAAAUg");
	this.shape_55.setTransform(197,142);

	this.instance_1 = new lib.a18();
	this.instance_1.setTransform(208,508);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#101012").s().p("AAAAJQgKgJgJAAQgGAAgFACQgDAGgEALIgKgKQAHgLAGgKQAFgIAJgBQAKAAALANQAMAJAHAAQAEAAAFgEQAGgFADgLIAKAMQgGALgHAIQgIAJgJAAQgGAAgMgMg");
	this.shape_56.setTransform(385.8,547.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#101012").s().p("AAfBXQASABALgCQALgCACgHQAEgGABggIAChXIg3AAQgHASgOAYQgEgHgKgDQAJgMAFgQQAIgPAFgTQAGgTABgKIAWAIQgEAIgEAJIgGARIBCAAIgBAkQgBA4gEAzQgBARgRAGQgQAFgTACQgBgKgHgLgAhhBmIABgmIAAhUIgBgpIAbAAQAFgWACgXIAWAGQgEAJgJAeIArAAIgBAoIAABQIABApIgTAAIAAgTIgwAAIAAAVgAhOBBIAwAAIAAgyIgwAAgAhOAAIAwAAIAAgtIgwAAgAAZAQIgLgTIARgKIALAVIANAdIgSAJIgMgeg");
	this.shape_57.setTransform(367.3,556.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#101012").s().p("AALBsQgRgCAAgSIAAhRIgBgYIARAAIAAAXIAAAWQAMgEAQgLQAQgKALgJIAQAQIggAPQgSALgVAJIAAAgQAAAPALAAIAnAAQAKAAAFgJQAFgJAAgHQALAIAJADQgGATgHAFQgIAGgJAAgAhWBWQAIgHAAgIIAAhSIgLAAIgUABIAAgTIAUABIAdAAIAAAfIAABBQANgLARgRIAKASIgcAXIgYAVIgOgQgAgugGQAPgKALgNQALgNAJgQQAIgRAEgMQAFgMACgIQAIAEAMAEIgEAHQAIATAVAZQAVAZAZAMQgHAFgHAJQgagQgRgXQgSgYgIgQQgJASgMAUQgLAUgcAYIgNgMgAhfhUQAHgGAFgHIArAkIgOAOQgQgSgZgTg");
	this.shape_58.setTransform(342.8,556.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#101012").s().p("AAaBuIABghIAAg4IgeAAIggABIAAgSIAgABIAeAAIAAhYIg3ABIAAgSIAgABIA9AAIAkgBIAAASIg3gBIAABYIAdAAIAkgBIAAASIgkgBIgdAAIAAA4IABAhgAhVBMQAKgGgBgKIAAhRIgiABIAAgTIAXABIAeAAIgBAmIAAA6IAZgZIAKAQIgbAZQgMAJgKALQgFgKgIgIgAA8gMQAPgeAGgXIAWAHQgBACgIASIgQAhQgJgFgJgCgAgdg4QAKgDAHgEQAPAfAGASQgJADgIAFQgJgfgMgTgAhbhhIAOgMQALAJAVAaQgIAGgGAHQgKgPgWgVg");
	this.shape_59.setTransform(318.2,556.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#101012").s().p("ABABuIAAgNIhhAAIAAANIgTAAIABghIAAg4QgPAQgcATQgHgKgIgGQAVgJATgRQAVgPALgSIgkAAIggABIAAgQIAgABIAsAAQAEgIACgKIgYAAIgeABIAAgQIAeABIAcAAIADgQIgeAAIglADIgIgSQAaABA4gCQA3gDAlgJIANAUQgUAAgYACQgZADgaABIgCASIAzAAIAjgBIAAAQIgjgBIg2AAIgHASIBPAAQAVAAAVgCIAAARIgqgBIhUAAIgMARIBvAAIgBAhIAAArIABAkgAghBSIBhAAIAAgPIhhAAgAghA1IBhAAIAAgPIhhAAgAghAYIBhAAIAAgOIhhAAg");
	this.shape_60.setTransform(293.6,556.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#101012").s().p("AgLBpIABgkIAAg4QgTAggWATQgVATgSAKQgGgJgLgIQAigPAUgVQAVgVAEgIIgxAAQgLAAgPACIAAgRIAaABIBDAAIAAg2Ig1AAQgQAAgLACIAAgSIAaABIA2AAIAAgNIgBgTIATAAIgBAUIAAAMIA4AAIAZgBIAAASQgNgCgMAAIg4AAIAAA2IBBAAIAfgBIAAAQIgfgBIgxAAQAHAKAJAIQAJAJALAHQALAJANAGQANAFAMADQgJAIgDAFQgDAFAAAEQgUgJgNgJQgMgJgLgKQgLgKgIgKQgHgKgEgHIAAA1IABAkgAAagMIAWgnQAJADAHAFIgWAmIgQgHgAhDgoIANgKQAPARAKASQgJAEgHAFQgJgRgNgRg");
	this.shape_61.setTransform(269.3,556.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#101012").s().p("AhsBcQATgLAMgVQAMgWACgTIAXAHIgKAVQARASAYAHIAAg+Ig8AAIgkABIAAgOIAkABICIAAIAjgBIAAAOIgjgBIg8AAIAAAYQA3AAARgBIAAARQgRgBg3AAIAAAdQARACAbAAQAaAAAggDQgIAJgCANIgvAAQgVAAgSgCQgQgDgRgGQgRgHgUgRQgEAHgHAKQgHALgOAOQgJgIgKgGgAhHgTIABguIgBgoICKAAIgBAoIABAugAgzgjIBiAAIAAgUIhiAAgAgzhHIBiAAIAAgSIhiAAg");
	this.shape_62.setTransform(245,557.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3E5586").s().p("AgBBjQAVgWALghQAMgiAAgzIgaABIAAgQIAaABQAAgegCgWQANACAJAAQgCAMAAAMIAAAaIAvAAIgDAnIgEBhQAAAOgKADQgKAEgOACQgBgJgJgLQAUgBADgCQADgCAAgFIAFhzIgbAAQgBA9gKAdQgKAcgWAfQgJgGgKgDgAhnBMIAzgEIAAgRIgqABIAAgPIAqABIAAgMIgqABIAAgPIAqABIAAgMIgsAAIABgTIgBgTIAsAAIAAgMIgdAAIABgcIgbABIAAgQIAbABIgBgRIATAAIgBARIAnAAIgBgRIATAAIgBARIAYgBIAAAQIgYgBIABAcIgeAAIAAAMIArAAIAAATIAAATIgrAAIAAAMIAqgBIAAAPIgqgBIAAAMIAqgBIAAAPIgqgBIAAAPIAqgFIgBAOQgfAEgdAEQgcAEgNAEQgBgHgGgMgAgkgGIAcAAIAAgOIgcAAgAhOgGIAaAAIAAgOIgaAAgAg/g7IAnAAIAAgOIgnAAg");
	this.shape_63.setTransform(178.9,556.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3E5586").s().p("AgBBjQAVgWALghQAMgiAAgzIgaABIAAgQIAaABQAAgegCgWQANACAJAAQgCAMAAAMIAAAaIAvAAIgDAnIgEBhQAAAOgKADQgKAEgOACQgBgJgJgLQAUgBADgCQADgCAAgFIAFhzIgbAAQgBA9gKAdQgKAcgWAfQgJgGgKgDgAhnBMIAzgEIAAgRIgqABIAAgPIAqABIAAgMIgqABIAAgPIAqABIAAgMIgsAAIABgTIgBgTIAsAAIAAgMIgdAAIABgcIgbABIAAgQIAbABIgBgRIATAAIgBARIAnAAIgBgRIATAAIgBARIAYgBIAAAQIgYgBIABAcIgeAAIAAAMIArAAIAAATIAAATIgrAAIAAAMIAqgBIAAAPIgqgBIAAAMIAqgBIAAAPIgqgBIAAAPIAqgFIgBAOQgfAEgdAEQgcAEgNAEQgBgHgGgMgAgkgGIAcAAIAAgOIgcAAgAhOgGIAaAAIAAgOIgaAAgAg/g7IAnAAIAAgOIgnAAg");
	this.shape_64.setTransform(154.9,556.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3E5586").s().p("AAkBXIAWAAQAGgBAAgIIAAgkIgbAAIgjABIAAgNIgVAJQgCgHgJgKQAcgFAYgOQgIgEgMgGIALgNQAUALAFAEQATgOAHgJIg5AAQgNAQgOAKQgBgDgNgLQAMgEAMgNQAKgNAGgNQAJAFAKADIgHAIIBPAAIgQAVQgKAMgMAJQgLAIgPAIIgWALIAaABIAbAAIgBgWIATAAIgBAWIAagBIAAARIgagBIAAAsQAAALgHADQgHAEgXAEQgEgMgEgJgAg3BrIABgmIAAgbIgOAQIgYAYIgOgQIAVgRIAfgdIAAgdIgBgmIATAAQgCAVAAARIAABOIABAmgAAABEQgCgHgEgFIAOgJQAFAGAEAHQAEAHACAIIgQAIQgDgJgEgGgAhkgSIAMgMIAOAOIAQAQIgOALQgLgNgRgQgAgng1IABgSIgWAAIgmABIAAgRIAmABIAWAAIgBgVIAUAAQgCALAAAKIAwAAIgBgUIAUAAIgBAUIAWAAIAmgBIAAARIgmgBIgWAAIABARIgUAAIABgRIgwAAIABASg");
	this.shape_65.setTransform(130.9,556.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3E5586").s().p("AgxBaQAJgGgBgLIAAghIgYAAQgCASgGARQgGARgMAQQgHgHgKgFQAKgMAGgNQAFgNADgNQACgOAAgXIgCgjICXAAIAbgCIAAAQIgbgBIiDAAIAAAoICJAAIAcgBIAAAQIgegBIg5AAQAHALAQAMQAOgJAMgNQAHAIAJAGQgHACgHAFIgPAKQAaAMAhACQgJAIgDANQhMgNgYg2IgVAAIAAAoIAagNQACAIADAKIgRAHQgPAHgOAJgAAtALIg2AAIgoABIAAgOIAiACIA8AAIAlgCIAAAOIglgBgAhGgpIABgiQAAgSgCgNICXAAIgBAgIABAhgAg0g1IByAAIAAgNIhyAAgAg0hOIByAAIAAgQIhyAAg");
	this.shape_66.setTransform(179.2,518.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3E5586").s().p("AgJBdQAHgEABgOIAAg5QgSAXgPAPQgHgIgJgGQAygqANg4IgZAAIgbABIAAgSIAaABIAkAAQgBgGgJgYIATgGQADAGADALIAFATIAlAAIAZgBIAAASIgYgBIgwAAQgGAagNAWIAABWQAQgNAJgJIAHATQgeAXgNAMQgDgHgJgKgAhJBqIABgsIAAhYQgJASgOASQgGgJgHgDQAMgPAOgcQAPgcAMgkQAGAEAOAFQgIAHgLAhIAAB5IABAtgAAuAiQgQgngDgWQAIgCAIgDQAFAaAGALQATgNAOgWIAQAQQgDAFgNAJQgNAJgOANQASAtAfARIgQARQgfgagQgpg");
	this.shape_67.setTransform(155,517.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3E5586").s().p("AAaBrIABggIAAhQQgNAdgMASQgJAUgJAHIgSgNQAMgLAKgOIAQgdQAJgNAJgcIgMAAIgUABIAAgRIAUABIARAAIAAgcQgBgNgBgKIAVAAQgBAFAAATIAAAbIAcAAQAOAAANgCIAAASIgZgBIgbAAQAHAVAIAOQAIANAKAKQAJALAIAFIANAJIgJAKIgHAJQgZgWgKgTQgMgSgDgJIAABQIABAggAhJBrIABgoIAAhAQgJAZgQAbIgNgVQAJgLAJgRQAJgOAIgfIgfABIAAgRIAiABIAAgXIgBgbIAVAAIgBAbIAAAXIAfgBIAAARIgfgBIAAAgIAPgIIATAdIgSAKQgEgLgMgRIAABHIABAog");
	this.shape_68.setTransform(131.3,517.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#101012").s().p("AAAAKQgKgKgJgBQgGAAgEAEQgEAEgEAMIgJgLQAGgKAFgKQAGgJAJAAQAKAAALAMQAMAKAHAAQAEAAAFgEQAGgFADgMIAJAMQgGAMgGAJQgIAJgJAAQgHgBgLgLg");
	this.shape_69.setTransform(312.3,471.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#101012").s().p("AgHBsIABg2IgBgvIBiAAQgBAMAAAkIABAyIgSAAIAAgMIhAAAIAAAPgAAJBPIBAAAIAAgWIhAAAgAAJArIBAAAIAAgWIhAAAgAhSBVQAJgIAAgLIAAgtIgbABIAAgQIAbABIAAgZIgOABIAAgRIATABIATAAIARgBIAAARIgXgBIAAAZIAggBIAAAQIgggBIAAAuQAPgMAJgLQAEAKAEAIIgXASQgMAKgLALIgNgQgABRgNIhPAAIgXABIAAgQIAbABIAAgfIgVABIAAgRIAVABIgBgfIATAAIgBAfIAiAAIAAgeIATAAIgBAeIAbgBIAAARIgbgBIAAAfIAjgBIAAAQIgdgBgAAXgbIAiAAIAAgfIgiAAgAhugmQASgSAJgSQAKgSAFgPIAWALQgMANgHANIAjgBIAAARIgrgBQgMARgMAPIgNgPg");
	this.shape_70.setTransform(293.6,480.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#101012").s().p("AgNBnIABgrIAAhaQgcAngyAhQgHgLgIgFQATgHAggbQAegbAZgxIg9AAIglABIAAgTIAsABICAAAIAfgBIAAATIgegBIg3AAIgPAdIAABzIAAArgAAWgcQAHgGAGgGIAmAkIAeAcQgJAHgIAJQgSgWgugug");
	this.shape_71.setTransform(269,481);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#101012").s().p("AAeBXQATABALgCQALgCACgHQADgGACggIAChXIg2AAQgIASgOAYQgEgHgKgDQAIgMAGgQQAIgPAFgTQAGgTABgKIAWAIQgEAIgEAJIgGARIBCAAIgBAkQgBA4gEAzQgBARgRAGQgQAFgTACQgBgKgIgLgAhhBmIABgmIAAhUIgBgpIAbAAQAFgWADgXIAVAGQgEAJgJAeIArAAIgCAoIAABQIACApIgUAAIAAgTIgvAAIAAAVgAhOBBIAvAAIAAgyIgvAAgAhOAAIAvAAIAAgtIgvAAgAAZAQIgLgTIAQgKIAMAVIANAdIgSAJIgMgeg");
	this.shape_72.setTransform(244.8,480.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#101012").s().p("AhVBZQARAAAFgCQAEgBAAgEIAAg7QgYAIgMAHQgDgJgHgKQAPgCAfgLIAAgsIglABIAAgRIAlABIgBg2IAUAAQgCATABAjIAfgBIAAARIgfgBIAAAmIAYgJIACAOIgaAKIAABKQgBAMgIADIgbAGQgBgMgHgJgAgBBsIABgnIAAhgIgBgrIAdAAQAFgXACgQQAMADAMABQgFAGgIAdIA8AAIgBAqIAABhIABAkIgSAAIAAgZIhJAAIAAAcgAAPBAIBJAAIAAg0IhJAAgAAPgBIBJAAIAAg1IhJAAg");
	this.shape_73.setTransform(219.6,480.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3E5586").s().p("AgxBZQAJgFgBgKIAAgiIgYAAQgCATgGAQQgGARgMAPQgHgGgKgFQAKgMAGgNQAFgNADgOQACgNAAgXIgCgkICXAAIAbgBIAAARIgbgBIiDAAIAAAnICJAAIAcgBIAAAQIgegBIg5AAQAHALAQALQAOgIAMgNQAHAIAJAGQgHABgHAGIgPAJQAaANAhACQgJAIgDAMQhMgNgYg1IgVAAIAAAoIAagNQACAJADAJIgRAIQgPAGgOAIgAAtAMIg2AAIgoABIAAgPIAiABIA8AAIAlgBIAAAPIglgBgAhGgoIABgjQAAgSgCgOICXAAIgBAhIABAigAg0g1IByAAIAAgNIhyAAgAg0hOIByAAIAAgQIhyAAg");
	this.shape_74.setTransform(179.2,481);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3E5586").s().p("AgyBdQAfgIALgQQAJgPgBgZIghABIAAgQIAiABIBEAAIAigBIAAAQIgtgBIAAAwQgBAKAGABQAGACAJAAQAJAAABgIIABgOQAKAGAKACQgDATgHAFQgGAFgKgBIgZAAQgTgBABgTIAAg3IgWAAQABAmgRARQgPASgZAIQgCgHgKgKgAhsBQIABg2IAAhFIgBgnIBHAAIgBAnIAAA+IABArIgTAAIAAgNIghAAIAAAfgAhYAjIAgAAIAAgsIggAAgAhYgXIAgAAIAAgtIggAAgABRALQgNgCgOgJQgNgIgJgKQgHAFgMAFIgYAJQgFgHgIgHQAYgGAYgLQgKgQgFgQQgPADgQAFIgHgSIAhgEIgFggIATgBQgDAGAHAXQAtgIAbgHIAFAPIhJAOQAHATAGAHQAZgQAKgNQAHAIAKAIQgFABgJAGIgcATQARASAKAAQAJgBACgVIAUALQgMAfgMAAIgCAAg");
	this.shape_75.setTransform(155.4,480.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3E5586").s().p("ABGBcIiFAAIgpAAIAAgSIApABIA4AAIAAhJIgdAAIgoAAIAAgRIAoABIAdAAIAAg7IgoAAIgrABIAAgTIAqABIBnAAIAkgBIAAATIgkgBIgtAAIAAA7IAjAAIAfgBIAAARIgfAAIgjAAIAABJIA8AAIAigBIAAASIgiAAg");
	this.shape_76.setTransform(131.2,481.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#101012").s().p("AgNBVIAAgcIAaAAIAAAcgAgGAbIgHhvIAaAAIgGBvg");
	this.shape_77.setTransform(362.5,442.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#101012").s().p("AhhBbQAsgEAGgTQAFgRgCgPIBRAAIAAApQABANAMAAIAXAAQAKAAABgYQALAIALACQgHAcgSABIguAAQgRgBgBgSIAAgmIgmAAQgEAegOANQgOAMgfAIQgCgLgLgJgAhpAnIABgSIgBgSIDPAAIgBASIABARIgUAAIAAgTIimAAIAAAUgAhCgMIABgVIgBgVICCAAIgBAVIABAVgAgtgYIBZAAIAAgSIhZAAgAA9hIIh5AAIgmABIAAgRIAlABIAyAAQgDgLgFgHIATgGIAJAYIA0AAIAkgBIAAARIgkgBg");
	this.shape_78.setTransform(342.9,442.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#101012").s().p("AABBbQAUAAAAgJIAAgmIghAAIgiABIAAgQIAoABIBQAAIAegBIAAAQIgdgBIgkAAIAAAuQAAAIgHAEQgHAEgOAEIgKgTgABMBTIgUgRQAGgEAGgJIAUASIAWARIgOAOQgJgKgLgJgAgyBbQAJgIALgKQAKgKAHgMIAQAKIgPARQgKALgOAMIgOgKgAhtBWIAKgMQAFgHAKgVQAJgUAHgVQAHAJAIAFIgOAdIgMAbIgMAYIgSgNgAA5AKIg2AAIggABIAAgNIAfABIA2AAIAfgBIAAANIgegBgAhVgbIgWgLQAFgJADgHIAVAKQAMAGALAHQgHAIgDAJQgIgHgMgGgAgkgRIABgZIgBgaIAmAAIAAgTIgKAAIggABIAAgPIAgABIBLAAIAjgBIAAAPIgigBIgNAAIAAATIAoAAIAAAaIAAAZgAA3geIAVAAIAAgYIgVAAgAARgeIAWAAIAAgYIgWAAgAgSgeIAUAAIAAgYIgUAAgAARhEIAWAAIAAgTIgWAAgAhLhSQgGgGgLgHQAGgEAFgKIARANQAKAHAIAIQgJAGgEAIIgQgPg");
	this.shape_79.setTransform(318.1,442.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#101012").s().p("AhmBaQAYgCAYgLQAYgKAKgWIgoAAIghAAIAAgQIAhABIAsAAIAAgQIAUADQgCAFgCAIIBQAAQAAANgDASQgDASgDAJQgEAJgJADQgIADgaACQgBgJgJgLQAcACAHgEQAFgDACgHIAEgcIg9AAQgJAdgXAMQgWANgiAJQgDgKgKgIgABIALQgLgLgDgRQgDgUADgdIgZABIgFAhIAUALQgJAHgFAGIgMgJQgOARgSANQgHgHgMgFQAZgHAKgVQgGgEgKgGQAGgGADgHIANAJIADgYQgOAAgJACIgCgPIAZAAQAAgSgBgLQAIACANABQgDAJABAQIAtgBQgCATgBATQgCAUAFAKQAEALAFABQADAAAAgWQAIAIAMABQgFAVgEAGQgEAFgHABIgBAAQgGAAgLgJgAhYAAQAVAAADAAQADgBAAgKIAAgRIgnAMQgDgLgGgGQARgCAfgHIAAgVIgoABIAAgRIAoABIgBgbIAUAAQgDAJAAASIAYgBIAAARIgYgBIAAASQAMgCALgEIgBAPIgWAFIAAAgQgBALgJADIgZAFQgBgKgHgKg");
	this.shape_80.setTransform(293.6,442.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#101012").s().p("AgnBTQATAAAHgDQAHgCAAgJIAAgrIhEAAIggABIAAgRIAgABIBEAAIAAghIgqAAIgjABIAAgSIAjABIAqAAIAAgjIhKADQgEgKgFgIQAiACA1gFQA1gEAWgIQAFANAHAIIhKAHIAAAlIArAAIAfgBIAAASIgfgBIgrAAIAAAhIBCAAIAegBIAAARIgegBIhCAAIAAA0QABANgKAGQgHAGgYACQgBgLgJgLg");
	this.shape_81.setTransform(269.4,443);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#101012").s().p("AgJBuIAAgrIAAhDIgBgmIATAAIgBAmIAABCIABAsgAhtgJQAtgSAYgeQAZgdAJgXIAVAIIgHAJQAnA6A/ATQgJALgFAIQg9gYgjg5QgjA3g6AdQgFgHgLgJg");
	this.shape_82.setTransform(244.7,442.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#101012").s().p("AgJA1IAAgVIATAAIAAAVgAgJgfIAAgVIATAAIAAAVg");
	this.shape_83.setTransform(197,445.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3E5586").s().p("AhNBcQAOAAAYgEQAZgEANgFQgRgOgTgXIgUASQgMALgVAOQgHgHgHgGQATgJATgPQATgPAQgZIgMAAIghABIAAgOIAhABIATAAQAFgJADgNQAMAFAFACIgHAPIA7AAIAjgBIAAAOIgkgBIhAAAIgPAWIBmAAQgSAdgbAUQAKADAWADQAXADAUgBQgFAHgHAMQgIAAgZgEQgZgEgXgJQgYAJgRAEIgmAHQgDgLgHgGgAANBHQARgKAPgSIg+AAQAOARAQALgAhfgHIABgQIgBgSIAuAAQgLgTgJgIIAMgJIgYABIgHgRQAiACA1gEQAzgDAjgKQAFAOAHAGIhIAFIgZACIATAeQgFACgJAIIAlAAQAMgQAKgbIAUALQgJAIgPAXIAtAAIgBAVIABANIgTAAIAAgUIihAAIAAAVgAg2hNIAVAaIgOAKIAyAAQgHgTgKgLIANgKIg1AEg");
	this.shape_84.setTransform(178.8,442.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3E5586").s().p("AhuBVQAbgHAegZQAdgXANgsIgzAAIgkABIAAgUIAkABIA2AAIAAgzIgnAAIgiABIAAgTIAiAAIBeAAIAhAAIAAATIghgBIgnAAIAAAzIA9AAIAfgBIAAAUIgegBIg7AAQAOAhAXAZQAZAaAmAJQgNAKgCAJQgdgLgZgVQgYgWgSgpQgJAlgZAXQgYAYglAQQgEgKgLgIg");
	this.shape_85.setTransform(155.3,443.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3E5586").s().p("AgNBaQAJgGgBgNIAAhJIgaABIAAgQIAaAAIAAguIgBgqIASAAIgBAoIAAAwIAxAAIAkAAIAAAQIgjgBIgQAAQAHAhARAUQARAUAUALQgKAHgEAJQgXgNgSgcQgRgagFghIgSAAIAABMQAJgFAPgMIAGATIgYAPQgKAGgIAJIgMgQgAhaBRQAVABAIgDQAHgDABg5Ig0AAQACgcABgiIAzAAIAAgjIgXAAIgeAAIAAgRIAdABIArAAIgBAhIABAhIg0AAIgCAfIA0AAIgDAuIgDAgQgCAKgKAEQgKAEgVACQgBgIgGgMgAAVgoQAZgZATgiIARALQgXAigZAbQgHgIgGgFg");
	this.shape_86.setTransform(131.7,443.1);

	this.instance_2 = new lib.a17();
	this.instance_2.setTransform(359,391);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#101012").s().p("AhmBcQAaAAARgEQARgFANgKQANgKADgbIAVACQgIAggKALQgLALgSAHQgSAIgjADQgDgKgHgIgAAwBcQgRgHgVgFIAJgOIAhAJQARAGAXAKQgGAHgFAJQgPgJgSgGgAhPBEIABgbIgBgbICcAAQgCAMAAALQAAAMACAPIgUAAIAAgkIh0AAIAAAogAhtAEQAQgFAHgJQAHgJADgSIgYABIAAgPIAtAAIAAgTIgWAAIgIAPQgIgEgKgCQAIgKAGgMQAEgMABgJIATAHQgFAGgCAIIARAAIAAgaIAUAAIgCAaIAbgBIAAAPIgbgBIAAATIAbAAIAAAPIgRgBIAAAUIATgLQABAHACAIQgEACgMAHIgTALIgKgLQAGgHAAgJIAAgRIgOAAQgGAagJAKQgIAIgNAKIgPgNgAgIAAQAOgFAGgJQAIgKABgNIgVABIAAgPIAoAAIAAgTIgZAAQgEAGgBAIIgPgGQAFgIACgKQADgJADgPIASAEQgGAIAAAJIAUAAQAAgPgCgLIAUAAIgBAaIAkgBIAAAPIgkgBIAAATIAtAAIAAAPIghgBIAAARQAAAIAFABQAFABAGgBQAIgBAAgOQAIAFAJAEQgDAMgFAFQgFACgIAAIgUAAQgMAAgCgCQgCgEAAgIIAAgZIgPAAQgDASgJAMQgIAKgNAHIgNgKg");
	this.shape_87.setTransform(318.8,403.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#101012").s().p("ABABAQAJgFAGgGIAdAtIgTALQgIgSgRgbgAhqBjQAMgQALggQAJAEAMACIgaA0QgHgGgLgEgAAHBAIAQgKQATAiAEAJIgSAKQgHgSgOgZgAgsBBQAIgDAJgGIASAqIgVAJQgBgKgNgggAhLApIACglIgCgmIA8AAIAAgvIAAgbIATAAIgBAfIA9AAIAegBIAAASIgegBIg9AAIAAAbIBIAAIgBAnIABAkgAg2AZIBuAAIAAgrIhuAAg");
	this.shape_88.setTransform(294.2,403.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#101012").s().p("AgIBuIABgtIgBgxIBcAAIgBAsIABAuIgTAAIAAgQIg4AAIAAAUgAAJBLIA4AAIAAgqIg4AAgAhnBMQAQAAAUgFQATgEAVgGQgCAKABAIIgiAJQgVAGgNAGIgHgYgAhiAbQAJAAAJgMQAIgMAJgQIgTABQgLABgIADQgDgIgFgLQAIgDAKgRQAKgQAKgqIAWAIQgGAFgJAYQgKAYgJAQIAbgBQAHgNAGgTQAKAEAMADQgGAGgGAKIgRAhQgMAVgGAKIAogGQgEALgBAJQgLAAgPACIggAGIgHgVgAgjgKQAMgHAKgNQAKgMAFgNQAHgMAGgNIAJgdIAYAHIgHALQANAaAQASQARASAXAKQgJAHgFAKQgPgJgKgJIAAAQIgSgBIgeAAIgXABIAAgNQgEAKgOALQgGgHgLgHgAATgvQgHANgJANIAUABIAcAAIATgBQgQgOgIgNIgNgaIgOAbg");
	this.shape_89.setTransform(245.4,403.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#101012").s().p("AgPBgQAPgOAMgPQALgQAFgQQAEgQACgSIADgoIgQAAIgWABIAAgSIAYABIAOAAIAAgbIgBgaQALADALAAQgCAJgBAMIAAAdIA0AAIgCAbIgEBpQgDASgNAFQgMAEgQACQgDgLgHgKQAVABAHgDQAIgDAAgKIAFhtIghAAQgCAngEAVQgFAWgJASQgIATgbAdQgIgKgHgDgAhnA4QANgHAJgXQAKgWAFgQIgHAAIghABIAAgRIAhABIAkAAIAlgBIAAARIgkgBIgKAAIgNAeQgHARgJAQQAkgDATgEQgFgLgKgRQAKgGAFgEIAQAdIAMAdIgPAJIgHgOIgwAHQgSADgNAFQgEgJgGgJgAgqhBIgWAAIgdABIAAgSIAcABIAXAAIAkgBIAAASIgkgBg");
	this.shape_90.setTransform(220.5,403.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#101012").s().p("AgnBTQATAAAHgCQAHgCAAgKIAAgqIhEAAIggAAIAAgRIAgABIBEAAIAAghIgqAAIgjABIAAgSIAjABIAqAAIAAgjIhKADQgDgKgGgIQAiACA1gFQA1gEAWgJQAGAOAGAIIhKAGIAAAmIArAAIAfgBIAAASIgfgBIgrAAIAAAhIBCAAIAegBIAAARIgeAAIhCAAIAAAzQABAOgKAFQgHAGgYACQgBgLgJgLg");
	this.shape_91.setTransform(196.4,403.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#101012").s().p("AgJA1IAAgVIATAAIAAAVgAgJgfIAAgVIATAAIAAAVg");
	this.shape_92.setTransform(173,406.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#3E5586").s().p("AAwBNIATAAQADAAAAgIIAAhrIgrAAIAACIIgTAAIABgkIAAhTIgBggIBSAAIgCAXIAABsQAAAOgJADQgJADgOABQgBgJgHgNgAhdBiIABgkIAAhTIgBggIBSAAIgBAaIAABmQgBAOgIADQgIADgQACQAAgKgHgNIATABQADgBAAgHIAAhpIgsAAIAACIgAAegCQAHgDAGgFIAZAuIgOAJQgJgVgPgagAhGgCQAHgDAGgFIAZAuIgPAJQgIgVgPgagABMhRIiLAAIgtABIAAgSIAsABICLAAIAigBIAAASIghgBg");
	this.shape_93.setTransform(155.3,404);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3E5586").s().p("AAVBPQAlABAEgCQAFgCADgHQAEgGABgWQACgWAAgOIiIAAIADglIADgnIAYAEQgEAJgDARQgDARAAAPIBLAAIAEgmIAEgkIhYAAIgnABIAAgTIAnABIBtAAQgEAagCAZIgEAoIArAAIgDAsQgCAZgEAQQgFAQgLAEQgMAEggACQAAgKgIgNgAASAyIhRAAIgiABIAAgSIAiABIBRAAIAogBIAAASIgogBg");
	this.shape_94.setTransform(130.9,403.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#101012").s().p("AAAAJQgKgJgJgBQgGAAgFAEQgDAEgEAMIgKgLQAGgKAHgJQAFgKAJABQAKgBALAMQAMAKAHAAQAEAAAFgDQAGgGADgMIAJAMQgFAMgHAJQgIAIgJABQgGgBgMgMg");
	this.shape_95.setTransform(337.3,357.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#101012").s().p("AgvBMQAYABAGgCQAHgBAAgLIAAhJQAAgWgDgIQAOgHA1gkIhhAAIgrABIAAgTIAiABICLAAIAAAUQgKAEgcATQgcATgMAJIAABpQgBAQgOAEQgPAEgQACQgFgUgFgGg");
	this.shape_96.setTransform(318.9,367.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#101012").s().p("AhtBfQAOgKAQgQIAAhFIgbAAIAAgQIAaABIAUAAIgBAeIAAA1QAZAWA4AAQA7AAAfgFQgFAMgCALIhAAAIgqgCQgTgCgLgEQgLgEgLgIQgMgIgIAHQgHAIgKAOQgJgJgIgFgAgaBJQACgUAAghIgBg5IAoAAIAFgTIg/ABIAAgRQAOABBGAAIANglIAVAIQgGAHgLAWIA1gBIAAARIhHgBIgFATIA2AAIgBA5IABA1gAgGA6IBMAAIAAgSIhMAAgAgGAZIBMAAIAAgRIhMAAgAgGgEIBMAAIAAgSIhMAAgAhahaQALgCAIgDQAHASAFAXQgJACgLAEIgLgqgAgShhIAPgLIARAaIgOAKQgGgLgMgOg");
	this.shape_97.setTransform(294.1,366.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#101012").s().p("AhjBgQAMgLALgOQAJgPAHgPQAGgQACgPIgyABIAAgQIA1ABQADgTAAgcIgWAAQgFANgJARIgTgEQAHgKAHgPQAGgQAFgOIAGgaIAVAFQgFAGgDAJIgGATQA2AAALgBIAAARIgfAAQAAAUgCAbIAmgBIAAAQIgogBQgBALgDAJIATAOQAKAIAOATQgGADgHAKQgJgOgIgJIgSgQQgGAPgMARQgMARgMANQgEgGgLgFgAANBeIABgmIAAhiIgBgiIBZAAIAAAiIAABfIAAAlIgTAAIAAgZIgyAAIAAAdgAAhAyIAyAAIAAhvIgyAAg");
	this.shape_98.setTransform(269.6,367.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#101012").s().p("AgSBiQAPgMAIgOQALgPAFgPQAFgQACgQIACghIgbABIAAgRIAbABQABglgBghIAUACQgDAWABAuIAgAAIAXgBIAAARIgWgBIghAAQgCAegFAWQgEAXgKASQgKASgTAXQgGgIgKgFgAhSBZQAWABADgDQADgDAAgIIAAg4IgnAAIABgdIgBgdIBYAAIgBAgIABAaIghAAIAABAQAAAOgIAFQgIAEgVACQgBgMgGgIgAhLAGIA1AAIAAgeIg1AAgAA/BnQgOgCAAgTIAAg0IgBgjIATAAIgBAeIAAA2QABAIAFABIAKAAQAFAAADgGQACgGABgOQAGAGAMADQgGAWgEAFQgFAFgKABIgFAAIgSgBgAhuBJQAMgNAOgeIASAJIgMATIgPAZQgIgFgJgFgAggAlIAOgLQALAPAKAWQgFAEgJAGQgGgRgPgTgAA6hRIAQgKIAYAkQgKAEgHAFQgGgMgRgXgAgXg4Ig1AAIgeABIAAgQIAeABIA1AAIAggBIAAAQIgggBgAhGhjQAIgGAFgFQAQARAJAMIgQAKQgHgOgPgOg");
	this.shape_99.setTransform(245.3,367.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#101012").s().p("AgIBqIABg+Ig8AAIglABIAAgUIAlABIA8AAIAAgeIhDAAIABgzIgBgyICWAAIgBAxIABA0IhBAAIAAAeIA6AAIAkgBIAAAUIgkgBIg6AAIAAA+gAg2gVIBuAAIAAgaIhuAAgAg2g+IBuAAIAAgZIhuAAg");
	this.shape_100.setTransform(220.7,367.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#101012").s().p("AgJA1IAAgVIATAAIAAAVgAgJgfIAAgVIATAAIAAAVg");
	this.shape_101.setTransform(173,370);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3E5586").s().p("AgKBeQAMgGAQgKQAQgKAJgLQgHgNgGgPQgGgPgFgWIgJASQgHgEgHgEQANgYAJgfQAKgfACgWQAMAEAJACIgFANIgIAcIArAAIAWgBIAAARIgPgBQAAAPgGAfQgFAggNAXQAJAMAMAJQAMAJAKADQgLAJgEAHQgLgGgJgJQgKgIgJgMQgKALgMAIQgMAIgSAJQgCgIgJgFgAAegiQAJA1APAWQAJgWADgUQAEgWABgVIglAAgAhmBdQAsgKAQgSIgrgLQAGgJAJgTIgfABIAAgRIAlABQAEgJABgIIAVAGQgEACgEAJIAxAAQgDAXgPAXIAWALIgHAOQgIgGgRgFQgTAUguAQQgEgKgIgEgAg+AtIAfAIQAHgKAHgRIgjAAIgKATgAhqgOQAIgCAOgLQAOgKAIgLIgkABIAAgRIAwABIgBgrIATAAIgBArIArgBIAAARIgrgBIABAqIgTAAIABghQgFAIgNALQgNAMgLAHQgFgJgJgEgAgegfIAKgLIAVAZIgKALIgVgZgAgWhIQAHgMAHgTIAOAHIgGAOIgHAQIgPgGgAhehcQAIgGAEgFQANANAJAOIgPAIQgGgNgNgLg");
	this.shape_102.setTransform(155,367.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3E5586").s().p("AABBYQARAAAFgCQAFgCAAgKIAAg7IgcABQgOAAgKAEQgEgNgFgHQAJgGAGgLQAGgLAIgYIgfABIAAgSIAjABQAHgTAEgVQANAGAKACQgFAGgDAHIgHATIAxAAIAcgBIAAASIgcgBIg3AAIgJAXIgMAdIAkAAIgBgmIAUAAIgBAmIARAAIAhAAIAAAQIghgBIgRAAIAABJQABAJgLAFQgLAFgQACQgCgKgGgLgAhrBqIABgvIAAhsIgBgsIBMAAQgOAkgNApQANAQAGALQAFALgBANQgBAMgKAIQgKAHgQADQgDgNgHgJQASAAAGgHQAGgGgGgOQgGgPgPgPQAMgcAKgiIgfAAIAAC2gAgnBSIARgXQAKgNAHgRQAJAIAIAFQgFAEgfAwQgIgHgHgFgAA7AqQAHgFAIgGQAJALAZAlQgHADgMAJQgOgdgQgUg");
	this.shape_103.setTransform(131.7,367);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#101012").s().p("AAAAJQgLgKgIABQgHAAgDACQgEAGgEALIgKgLQAGgLAGgIQAHgJAIAAQAKAAALAMQANAJAGAAQAEAAAGgDQAFgGADgLIAKALQgHAMgHAIQgGAJgKAAQgHAAgLgMg");
	this.shape_104.setTransform(459.3,318.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#101012").s().p("AgIBuIABgfIAAgbQgOAPgTANQgUANgjAOQgFgJgHgHQAYgEAWgLQAVgMAQgRIgqAAIgdABIAAgPIAdABIA7AAIgBgOIAQAAIgBAOIA4AAIAigBIAAAPIgigBIgoAAQAQAQAWALQAWAKAZAFQgGAEgGANQgggKgWgPQgXgPgMgRIAAAgIABAdgAAQACQgRALgZAFQgZAFgdABQgBgIgHgJQAXACAWgCQAVgDARgEIg+gMQAOgOAGgHIgSAAIgbABIAAgPIAbABIAcAAQALgMAGgNIAQAMQgCgBgMAOIBRAAIAdgBIAAAPIglgBQgLAPgPAMIA/AQIgHARQgggNglgMgAgogTIAzAIQAMgGAMgQIg/AAIgMAOgAhYg3IABgPIgBgOIBRAAQgFgKgGgHQAMgEAEgEQAIAQAEAJIBPAAIgBANIABAPIgSAAIAAgQIiNAAIAAARg");
	this.shape_105.setTransform(440.8,328);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#101012").s().p("AAvBvIAAgQIhcAAIAAAQIgTAAIABgnIgBgjICBAAIgBAkIABAmgAgtBOIBcAAIAAgbIhcAAgAhvARQAUgEAQgIQARgGANgKQANgJAIgLQAJgMAGgMQAJAGAJADIgFAGQAkAlBHAKQgIAJgEALQgdgIgggPIAAANIgTgBIgmAAIgVABIAAgLIgbAQIgdANQgEgJgLgJgAgiABIAhABQAXAAAJgCQgWgNgMgPQgPAQgQANgAA6hFIgZAAIgOAXIgTgJQAJgJAJgQQAHgPAFgOQAJAFANADQgJAJgEAIIAnAAIAfAAIAAAQIgigBQALATADAKIgTAHQgGgUgGgQgAg1hFIgNAAQgLATgNAQQgGgGgKgGQALgLALgSQAKgRAFgSQALAIAMADQgIAGgEAJIAfAAIAeAAIAAAQIgZgBIgNAAIALAdIgRAHQgCgJgKgbg");
	this.shape_106.setTransform(416.2,328);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#101012").s().p("AguBkQANgSAHgSQAHgRACgZIACg6QABglgCgUQAjgBAZgDQAZgCAUgGQAEAJAHAKQgUABgXACIg4AFIAAArIBKAAIAggBIAAAQIgfgBIgMAAIAAAvIAtAeQgJAIgEAIQgRgPgPgKIAAAXIABAnIgUAAIABgnIAAghIgjgVIAJgPIAaAPIAAglIgsAAQgBAZgBAVQgCATgFAUQgEATgQAcQgJgHgKgEgAhXBRQAHgGABgLIAAhbIgdABIAAgPIAcAAIAUAAIgBAnIAAA7IAUgWQADAJAGAIIgVAWQgKAKgJANQgIgKgHgGgAhZhhQAHgGAGgHQAUARAPARIgOANQgSgTgQgPg");
	this.shape_107.setTransform(367.1,328.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#101012").s().p("AA4BrIAAgRIhuAAIAAAQIgVAAIABgrIgBgvICXAAIgBAoIABAzgAg2BLIBuAAIAAgrIhuAAgABTgCIigAAIgcABIAAgRIAdABIBIAAIAAgjIg5AAIgOAYQgHgFgLgEQAWgfALggIAUALQgCABgMAVIAyAAIAAgPQAAgTgBgFIATAAQgBAFAAARIAAARIAsAAIAcgBIAAARIgWgBIgyAAIAAAjIBFAAIAZgBIAAARIgYgBg");
	this.shape_108.setTransform(342.7,328.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#101012").s().p("AgSBiQAQgMAHgOQALgPAEgPQAFgQADgQIACghIgbABIAAgRIAbABQABglgBghIAUACQgCAWAAAuIAgAAIAWgBIAAARIgVgBIghAAQgDAegEAWQgEAXgKASQgKASgTAXQgGgIgKgFgAhSBZQAXABACgDQADgDAAgIIAAg4IgnAAIABgdIgBgdIBYAAIgBAgIABAaIghAAIAABAQAAAOgIAFQgIAEgVACQgBgMgGgIgAhLAGIA1AAIAAgeIg1AAgAA/BnQgOgCAAgTIAAg0IgBgjIATAAIgBAeIAAA2QABAIAFABIAKAAQAFAAADgGQACgGABgOQAGAGAMADQgGAWgEAFQgFAFgKABIgFAAIgSgBgAhuBJQAMgNAOgeIASAJIgMATIgPAZQgIgFgJgFgAggAlIAOgLQALAPAKAWQgFAEgJAGQgGgRgPgTgAA6hRIAQgKIAYAkQgKAEgHAFQgGgMgRgXgAgXg4Ig1AAIgeABIAAgQIAeABIA1AAIAggBIAAAQIgggBgAhGhjQAIgGAFgFQAQARAJAMIgQAKQgHgOgPgOg");
	this.shape_109.setTransform(318.3,328.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#101012").s().p("AgpBpQgeAAAAgcIAAhmQgHAHgRAPQgGgHgKgGQAZgUAQgWQAPgWAKgaQAMAIAKACQgGAGgKARIB5AAIAAAhIgDBPQgBAPgKAFQgKAFgYADQgDgMgFgIQAYgBAFgDQAEgBACgOQACgpAAgsIhvAAIgVAcIBhAAIgBAgIABAiIhQAAIAAAkQgBAPASACQA0ADAvgCQAMgCAFgFQAEgFAFgWQAIAHANACQgIAdgHAFQgHAGgSgBIg6ACQgbAAgbgCgAg0AVIA9AAIAAghIg9AAg");
	this.shape_110.setTransform(293.7,327.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#101012").s().p("AhmBRIAjgGIA4gPIABARIg+ARIgVAIQgEgMgFgJgABJBhIg5AAIgeABIAAgSIAfABIATAAIAAiMIgKAAIggABIAAgRIAeABIAsAAIAhgBIAAARIghgBIgOAAIAACMIATAAIAigBIAAASIgigBgAhjAiQALgEALgNQALgMANgSIgWACQgMAAgMAEIgHgSQAIgBAPgYQAPgZAIgaQAMAHAIACQgHAKgJAPQgIAPgSAaIAmgBQANgWADgKQAHAGALAGIgQAXQgLAQgfAmIA3gIQgCAJAAAHQguAGgLADIgTAEIgIgRg");
	this.shape_111.setTransform(269,327.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#101012").s().p("AgIBuIABgtIgBgxIBcAAIgBAsIABAuIgTAAIAAgQIg4AAIAAAUgAAJBLIA4AAIAAgqIg4AAgAhnBMQAQAAAUgFQATgEAVgGQgCAKABAIIgiAJQgVAGgNAGIgHgYgAhiAbQAJAAAJgMQAIgMAJgQIgTABQgLABgIADQgDgIgFgLQAIgDAKgRQAKgQAKgqIAWAIQgGAFgJAYQgKAYgJAQIAbgBQAHgNAGgTQAKAEAMADQgGAGgGAKIgRAhQgMAVgGAKIAogGQgEALgBAJQgLAAgPACIggAGIgHgVgAgjgKQAMgHAKgNQAKgMAFgNQAHgMAGgNIAJgdIAYAHIgHALQANAaAQASQARASAXAKQgJAHgFAKQgPgJgKgJIAAAQIgSgBIgeAAIgXABIAAgNQgEAKgOALQgGgHgLgHgAATgvQgHANgJANIAUABIAcAAIATgBQgQgOgIgNIgNgaIgOAbg");
	this.shape_112.setTransform(244.9,328);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#101012").s().p("AhHBaQAVgDAVgHQAUgHAOgKQgOgQgUgeQgKARgQAQQgQAQgSANQgEgHgLgHQAOgIANgMQAOgMAPgUQAPgSAKgdIglABQgOABgGACQgDgIgFgJQAKgCAEgNQAEgMAFgZQAHAEAOADQgFAKgEAKIgIAWIArAAQAHgeAEgbQAIAFAMABQgFAKgDALIgFAeIBJAAIAcgBIAAASIgcgBIhNAAIgMAcIBhAAQgSApggAdQAaASAwAFQgGAIgFALQgTgEgTgHQgUgHgTgNQgPAKgTAIQgWAJgWAGQgCgJgIgJgAATA2QAVgRAQgeIhHAAQANAXAVAYgAAiheQAHgFAGgIIAgAlQgGAEgKAIQgPgVgOgPg");
	this.shape_113.setTransform(219.9,328.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#101012").s().p("AgJA1IAAgVIATAAIAAAVgAgJgfIAAgVIATAAIAAAVg");
	this.shape_114.setTransform(197,331);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3E5586").s().p("AgcBhQATgPAJgRQAKgQAGgSQAHgSACgXQADgZABghIglABIAAgTIAlABIBNAAIgICXQgBAbgLAGQgKAGgZADQgBgLgIgNQAZAAAHgCQAFgDABgSIAHiBIgoAAIgDAzQgCAXgFAVQgGAWgMAUQgLAVgTATQgGgHgLgFgAg9BtIABgdIAAhCQgLAOgWASIgMgRQASgKAQgTQAQgQANgZIgVAAIgdABIAAgTIAcABIAwAAIgKAXQgGAOgJAPIALAIQAHgFAMgSIAOAPIgKAHIgMALIATAVQgIAGgHAIIgOgTIgNgOIAABCIABAdgAhAhlIARgHIAQAfIgRAJQgIgSgIgPg");
	this.shape_115.setTransform(178.6,328.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3E5586").s().p("AAIBaQAMABAIgBQAIgBAAgJIAAgdIgNAAIgXABIAAgPIAXABIANAAIAAgZIgOAAIgaABIAAgOIAbAAIANAAIAAgZIgNAAIgUABIAAgMIgGAJQgEgIgGgGQANgPAHgTIANghQAJAFALACIgHALIgDAKIAzAAQgFAIgGALIgKAXIAjAAIgBAcIAAAKIARAAIAAAOIgRgBIAAANIABAjIgRAAIAAgKIgaAAIAAAjQgBAMgHAFQgHAEgYACQAAgJgFgKgAA0AmIAaAAIAAgZIgaAAgAA0AAIAaAAIAAgZIgaAAgAAFgoIAcABIAJAAIANgcIggAAIgSAbgAg2BbQAVAAgBgJIAAgLIgxAAIAAAjIgRAAIABgYIAAg3IgBgbIBUAAIgCAbIAAA5QABAOgIAEQgHAEgQACQAAgIgGgJgAhTA6IAxAAIAAgRIgxAAgAhTAcIAxAAIAAgPIgxAAgAgjgMIgvAAIgcAAIAAgPIAcABIAPAAIAAgPIgQAAIgQABIAAgPIAQABIAQAAIAAgPIgQAAIgZABIAAgPIAZABIAQAAIgBgWIATAAIgBAWIAMAAIAfgBIAAAPIgfgBIgMAAIAAAPIAMAAIAUgBIAAAPIgVgBIgLAAIAAAPIAPAAIAbgBIAAAPIgbAAg");
	this.shape_116.setTransform(155.3,328);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3E5586").s().p("AgNBaQAJgGgBgNIAAhJIgaABIAAgRIAaABIAAgvIgBgpIASAAIgBAoIAAAwIAxAAIAkgBIAAARIgjgBIgQAAQAHAhARAUQARAUAUALQgKAHgEAIQgXgNgSgaQgRgbgFghIgSAAIAABMQAJgFAPgMIAGATIgYAPQgKAGgIAJIgMgQgAhaBRQAVABAIgEQAHgCABg5Ig0AAQACgdABghIAzAAIAAgjIgXAAIgeABIAAgRIAdAAIArAAIgBAhIABAhIg0AAIgCAfIA0AAIgDAuIgDAgQgCAKgKAEQgKAEgVACQgBgIgGgMgAAVgoQAZgYATgkIARAMQgXAigZAbQgHgJgGgEg");
	this.shape_117.setTransform(131.7,328.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#101012").s().p("AgNBVIAAgcIAaAAIAAAcgAgGAbIgHhvIAaAAIgGBvg");
	this.shape_118.setTransform(407.5,290.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#101012").s().p("AgGBYQARAAAFgCQAGgDAAgHIAAhNIgBghIAUAAIgBAhIAABXQAAAMgLAFQgKAEgSADQgBgKgGgMgAhMBsIAAgwIAAhZIgQAaQgGgGgKgHQARgTAOgXQAOgYAGgbQAHAFAPAFQgGAHgRAhIAAB4IABAvgAguA6QAYgYAQghIAQAJIgPAbQgLAQgPARIgPgMgAA3AIIAPgIQAWAeARAbIgSALQgQgegUgegAgugQQAWgZAMgcQALgcAAgJQAKAFANADQgGAEgLAZIBiAAIgIAXIgKAbIgTgEIAMgeIhOAAQgLAYgPAVQgHgFgNgDg");
	this.shape_119.setTransform(388.1,290.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#101012").s().p("ABKBjIiSAAIgiABIAAgUIAiABIA2AAIAAiWIgBgeIAUAAIgBAdIAAAoIA1AAIAkgBIAAAVIgmgBIgzAAIAABcIBKAAIAhgBIAAAUIghgBg");
	this.shape_120.setTransform(364.3,289.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#101012").s().p("AgJBrIAAghIAAgrIguAAIAAA7IgUAAIABgkIgBgnIBCAAIAAgWIATAAIgCAWIBEAAIgBAbIAAAYQAAAUgJAEQgJAFgTACQgCgMgGgJQAWABACgCQACgDABgIIAAghIgxAAIAAArIACAhgABWANIAAgaIiqAAIAAAaIgRAAIABgWIgBgTIDLAAIAAApgAg7gmIABgaIgSAAIgaACIAAgTIAaABIASAAIgBgaIATAAIgBAaIAjAAIgCgaIATAAIgBAaIAhAAIAAgZIASAAIgBAZIALAAIAggBIAAATIgggCIgLAAIABAYIgSAAIAAgYIghAAIABAYIgTAAIACgYIgjAAIABAag");
	this.shape_121.setTransform(340.2,290.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#101012").s().p("ABJBhIAAgRIiTAAIAAARIgRAAIAAgxIAAhcIAAg1IC3AAIgBA1IAABcIABAxgAhJBBICSAAIAAiSIiSAAgAgqAfIABgdIAAgVIgBgaIBUAAIAAAbIAAAUIAAAdgAgYAPIAwAAIAAgtIgwAAg");
	this.shape_122.setTransform(316.1,290.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#101012").s().p("AgQBgIABgeIAAiPIgzAAIglABIAAgTIAlABICGAAIAkgBIAAATIgkgBIhBAAIAACPIABAegAARgPIAOgOQAZAUAkAkQgJAHgIAIQgPgUgrglg");
	this.shape_123.setTransform(292.2,290.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#3E5586").s().p("AhWBXQATAAAGgDQAGgCAAgJIAAgnQgkAJgLAEQgBgNgFgIQARgCAkgIIAAgmIgzABIAAgRIAzABIAAgfIgnAIQgDgKgFgHQAOAAAegHQAdgGAPgJIAMASQgIADgbAFIAAAkIAuAAIAAhGQAKACAKAAQgCAOAAARIAAAlIAqAAIAhgBIAAARIgggBIgqAAQADArAJAUQAUgTAOgjQAIAHAMAGQgIAGgMATQgMATgNAOQAHALAJAHQAIAIAFABQAGACACgHQACgHABgOQAKAHAKAFQgIAagIAGQgJAHgPgIQgQgJgRgXQggAWgRAKQgGgLgIgGQAbgKAagVQgNgagDgyIgvAAIAAAjQAVgFAMgFIABASIgiAIIAAAwQABASgNAFQgMAFgQADQgBgKgIgLgAAphTQAIgHAFgGQAYAWAKAMQgHAFgIAIQgPgVgRgNg");
	this.shape_124.setTransform(251.4,290.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#101012").s().p("AhkBcQAbAAAbgFQAbgFAKgEQgTgMgTgPQAJgGAEgGIgGAAIgQAQQgIAHgOAJQgEgFgKgHQATgKANgNQAOgMAGgNIgZAAIABgVIAAgvQgLALgSAOQgHgIgHgGQAWgMAQgRQAPgRAJgRQAJAGAKADQgFADgJALIBlAAIAhgBIAAAQIgcgBIhyAAIgPAOICKAAIgBAkIABAhIheAAIgKAOIBkAAQgLASgMAMQgMAMgNAKQAPAEAWAEQAWAEAaABQgEAGgFANQgngGgWgGQgWgFgLgFQgVAJgWAFQgWAFggAEQgFgNgDgFgAAHBFQASgKAPgUIhIAAQASASAVAMgAgvgBIBoAAIAAgOIhoAAgAgvgdIBoAAIAAgPIhoAAg");
	this.shape_125.setTransform(227.3,290.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#101012").s().p("ABJBhIAAgRIiTAAIAAARIgRAAIAAgxIAAhcIAAg1IC3AAIgBA1IAABcIABAxgAhJBBICSAAIAAiSIiSAAgAgqAfIABgdIAAgVIgBgaIBUAAIAAAbIAAAUIAAAdgAgYAPIAwAAIAAgtIgwAAg");
	this.shape_126.setTransform(203.1,290.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#3E5586").s().p("AA1BQQAUABABgDQACgEAAgHIAAhoIhCAAIAACCIgQAAIAAiCIhBAAIAACIIgVAAQACgSAAgbIAAhFQAAgUgCgSIBWAAIAAgeIhEAAIgdABIAAgSIAcABICOAAIAlgBIAAASIglgBIg5AAIAAAeIBVAAIgBAnIAABbQAAATgNADQgPACgIAAQgBgLgEgKgAAWAoIANgOIAaAXQgHAFgGAIQgIgLgSgLgAgtAxIgOgLIALgOIAOAMIAOAMQgHAGgGAIIgMgNgAAWgJQAEgIAGgHIAeAWIgMAOQgOgMgOgJgAg4gJIAMgPIAaAXQgGAEgFAIQgOgMgNgIg");
	this.shape_127.setTransform(179.4,290.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#3E5586").s().p("Ag4BQQAFgKABgJQATADAaAIIA4AQQgFAIgDAMQgXgKhMgSgAggAmQADgKABgJQASADAQAFIAlAMIgGATQgvgQgWgEgAhsARQA6gLAmgSQgUgUgQgUQgPASgSAUQgGgHgKgGQAVgRAQgWQAQgWAHgTQAIAGANADQgGAGgIAMIBqAAQgJAQgQASQgPATgUAQQAoASA1AGQgKAMgDAJQg8gPgigUQgkATg/ASQgDgJgIgKgAADgXQAVgRATgZIhQAAQAUAZAUARg");
	this.shape_128.setTransform(155.3,289.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#3E5586").s().p("AhiBZQAOgRAGgdQAHgdABgdQABgfgCg5ICqAAIgBAqIAACLQgBAQgIAEQgIACgeACQAAgHgHgMQAZABAGgDQAGgCAAgIIAAifIiFAAQAABJgCAYQgCAagGAZQgGAYgMAUQgFgHgNgIgAggBEIABgYIAAgRIgBgTIBWAAIgBASIAAAVIABAVgAgNA1IAxAAIAAgeIgxAAgAAdgHIgjAAIgmABIAAgSIAuABIAAgVIglAAIAAgSIAlABIgBgVIATAAIgBAVIAmgBIAAASIgmAAIAAAVIAzgBIAAASIgpgBg");
	this.shape_129.setTransform(130.2,290.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#101012").s().p("AhWBXQATAAAGgDQAGgCAAgJIAAgnQgkAJgLAEQgBgNgFgIQARgCAkgIIAAgmIgzABIAAgRIAzABIAAgfIgnAIQgDgKgFgHQAOAAAegHQAdgGAPgJIAMASQgIADgbAFIAAAkIAuAAIAAhGQAKACAKAAQgCAOAAARIAAAlIAqAAIAhgBIAAARIgggBIgqAAQADArAJAUQAUgTAOgjQAIAHAMAGQgIAGgMATQgMATgNAOQAHALAJAHQAIAIAFABQAGACACgHQACgHABgOQAKAHAKAFQgIAagIAGQgJAHgPgIQgQgJgRgXQggAWgRAKQgGgLgIgGQAbgKAagVQgNgagDgyIgvAAIAAAjQAVgFAMgFIABASIgiAIIAAAwQABASgNAFQgMAFgQADQgBgKgIgLgAAphTQAIgHAFgGQAYAWAKAMQgHAFgIAIQgPgVgRgNg");
	this.shape_130.setTransform(172.4,252.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#101012").s().p("AgJA1IAAgVIATAAIAAAVgAgJggIAAgUIATAAIAAAUg");
	this.shape_131.setTransform(149,254.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#101012").s().p("AgGBYQARAAAFgCQAGgDAAgHIAAhNIgBghIAUAAIgBAhIAABXQAAAMgLAFQgKAEgSADQgBgKgGgMgAhMBsIAAgwIAAhZIgQAaQgGgGgKgHQARgTAOgXQAOgYAGgbQAHAFAPAFQgGAHgRAhIAAB4IABAvgAguA6QAYgYAQghIAQAJIgPAbQgLAQgPARIgPgMgAA3AIIAPgIQAWAeARAbIgSALQgQgegUgegAgugQQAWgZAMgcQALgcAAgJQAKAFANADQgGAEgLAZIBiAAIgIAXIgKAbIgTgEIAMgeIhOAAQgLAYgPAVQgHgFgNgDg");
	this.shape_132.setTransform(367.1,215.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#101012").s().p("AAlBrQgYAAgPgDQgQgCgKgEQgKgFgLgIQgLgIgNALQgMALgGAIQgJgMgFgEQAcgTAJgEIAAhIQgQAAgPACIAAgQIAyAAIgBAaIAAA4QAVAZAzAAQA1AAAfgFQgGAKgCANIg9AAgAgkA7QARgFARgMQAPgMAJgNQgKgMgjgbIANgNQAeAYANANQANgUAGgZQhFAAgRABIAAgRIAaABIBJAAIAfgBIAAARIgYgBQgLAkgNAWIAUATIAYAaQgKAGgHAJIgSgWIgWgXQgMAPgNAJIggAWQgDgHgLgKgAhfhWQAHgEAJgIQAZAfAGALIgQAMQgOgZgRgRgAAAhfQAJgGAEgFIAeAfIgPAMQgEgJgYgXg");
	this.shape_133.setTransform(220,215.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#101012").s().p("AgJA1IAAgVIATAAIAAAVgAgJggIAAgUIATAAIAAAUg");
	this.shape_134.setTransform(197,218.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#101012").s().p("AgJA1IAAgVIATAAIAAAVgAgJggIAAgUIATAAIAAAUg");
	this.shape_135.setTransform(197,178.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#101012").s().p("AhWBXQATAAAGgDQAGgCAAgJIAAgnQgkAJgLAEQgBgNgFgIQARgCAkgIIAAgmIgzABIAAgRIAzABIAAgfIgnAIQgDgKgFgHQAOAAAegHQAdgGAPgJIAMASQgIADgbAFIAAAkIAuAAIAAhGQAKACAKAAQgCAOAAARIAAAlIAqAAIAhgBIAAARIgggBIgqAAQADArAJAUQAUgTAOgjQAIAHAMAGQgIAGgMATQgMATgNAOQAHALAJAHQAIAIAFABQAGACACgHQACgHABgOQAKAHAKAFQgIAagIAGQgJAHgPgIQgQgJgRgXQggAWgRAKQgGgLgIgGQAbgKAagVQgNgagDgyIgvAAIAAAjQAVgFAMgFIABASIgiAIIAAAwQABASgNAFQgMAFgQADQgBgKgIgLgAAphTIANgNQAYAWAKAMQgHAFgIAIQgPgVgRgNg");
	this.shape_136.setTransform(408.4,139.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#101012").s().p("AgGBYQARAAAFgCQAGgDAAgHIAAhNIgBghIAUAAIgBAhIAABXQAAAMgLAFQgKAEgSADQgBgKgGgMgAhMBsIAAgwIAAhZIgQAaQgGgGgKgHQARgTAOgXQAOgYAGgbQAHAFAPAFQgGAHgRAhIAAB4IABAvgAguA6QAYgYAQghIAQAJIgPAbQgLAQgPARIgPgMgAA3AIIAPgIQAWAeARAbIgSALQgQgegUgegAgugQQAWgZAMgcQALgcAAgJQAKAFANADQgGAEgLAZIBiAAIgIAXIgKAbIgTgEIAMgeIhOAAQgLAYgPAVQgHgFgNgDg");
	this.shape_137.setTransform(333.1,139.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#101012").s().p("AgJA1IAAgVIATAAIAAAVgAgJggIAAgUIATAAIAAAUg");
	this.shape_138.setTransform(197,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{y:142,x:197}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:333.1,y:139.1}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:408.4,y:139.4}},{t:this.shape_1},{t:this.shape}]},78).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_23,p:{y:142}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:333.1,y:139.1}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:408.4,y:139.4}},{t:this.shape_1},{t:this.shape},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_11,p:{y:178.8,x:197}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},17).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_40,p:{y:142}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_39,p:{x:333.1,y:139.1}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:408.4,y:139.4}},{t:this.shape_1},{t:this.shape},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_23,p:{y:178.8}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_11,p:{y:218.8,x:197}},{t:this.shape_35,p:{y:215.8}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_5,p:{x:367.1,y:215.9}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},19).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_55,p:{x:197,y:142}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_39,p:{x:333.1,y:139.1}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:408.4,y:139.4}},{t:this.shape_1},{t:this.shape},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_40,p:{y:178.8}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_23,p:{y:218.8}},{t:this.shape_35,p:{y:215.8}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_5,p:{x:367.1,y:215.9}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_54},{t:this.shape_11,p:{y:254.8,x:149}},{t:this.shape_53,p:{x:172.4,y:252.2}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},19).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_138},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_137},{t:this.shape_4},{t:this.shape_3},{t:this.shape_136},{t:this.shape_1},{t:this.shape},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_135},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_134},{t:this.shape_133},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_132},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_54},{t:this.shape_131},{t:this.shape_130},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_55,p:{x:269,y:293}},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_39,p:{x:391.6,y:328.1}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_2,p:{x:196.4,y:367.3}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_5,p:{x:269.6,y:403.2}},{t:this.shape_88},{t:this.shape_87},{t:this.instance_2},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_35,p:{y:442.4}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_40,p:{y:483.5}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_23,p:{y:520.7}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_11,p:{y:559.5,x:197}},{t:this.shape_53,p:{x:220.4,y:556.8}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.instance_1}]},20).wait(3));

	// 图层 15
	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#3E5586").s().p("AhyBhQARgJAOgOQAOgOAMgRQALgRAHgTQAHgSACgWIgmAAIgkABIAAgTIAkABIApAAIACgcQAAgRgCgRIAbAGQgFAIgBAOIgCAiIBNAAQASAAARgCIAAAUIgjgBIgwAAIAABXIAYgfQALgRAHgQQANAGAMAEQgOAMgOAVQgNAWgZAVQgBARAEABIALACIAfAAIARgCQAFgBADgZQAKAKANACQgKAVgFAFQgFAFgLAAIg6AAQgQAAgDgEQgEgFAAgNQgEAFgMAHIgVALQgDgGgMgJQAOgFAPgJQAQgJAHgIIAAhjIgMAAQgFAcgGAQQgGARgIAQQgJAQgOARQgOAQgYAUQAAgGgTgKgAAchZIAPgNQAMAMAPAUIgQANQgJgOgRgSg");
	this.shape_139.setTransform(577.8,35.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3E5586").s().p("Ag1BhQAigJALgQQAJgQgBgaIgiABIAAgRIAjABIBGAAIAlgBIAAARIgvgBIAAAyQgBAKAGACQAGABAJAAQAKAAABgHIABgPQAKAGAKACQgCAUgHAFQgHAFgLgBIgZAAQgUgBABgUIAAg5IgXAAQABAogSASQgPASgbAJQgCgIgLgKgAhwBTIABg4IAAhHIgBgqIBJAAIgBAqIAABAIABAtIgTAAIAAgOIgjAAIAAAggAhcAlIAiAAIAAguIgiAAgAhcgYIAiAAIAAgvIgiAAgABVALQgPgCgNgJQgOgIgKgLQgGAFgNAGIgZAJQgFgHgJgHQAZgHAZgMQgKgQgFgRQgRADgQAGIgHgTIAigFQgDgKgCgXIAUgBQgDAGAHAYQAvgHAcgIIAGAPIhMAPQAGAUAGAHQAbgQAKgOIASARQgFABgKAGIgdAUQASATAKgBQAKAAACgXIAVAMQgNAggNAAIgBAAg");
	this.shape_140.setTransform(555.5,35.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3E5586").s().p("AgNBeQAJgHgBgMIAAhNIgcABIAAgSIAcABIAAgwIgBgrIASAAIgBAqIAAAxIA0AAIAlgBIAAASIgkgBIgRAAQAHAjASAUQARAVAWALQgLAIgEAJQgYgOgSgcQgSgcgFgiIgUAAIAABPQAKgFAQgMIAGATIgZAQQgLAGgIAKIgMgRgAheBUQAWABAIgDQAIgDABg8Ig3AAQADgdABgjIA1AAIAAglIgYAAIggABIAAgSIAfABIAsAAIAAAiIAAAjIg1AAIgCAhIA2AAIgDAwIgEAhQgBAKgLAEQgLAEgVACQgBgJgHgMgAAWgpQAagbAUgjIASAMQgZAigZAdQgIgJgGgEg");
	this.shape_141.setTransform(533.3,35.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#3E5586").s().p("AgPAcQAPgJAAgTIgQAAIAAgkIAhAAIAAAlQgDAZgTALg");
	this.shape_142.setTransform(503.1,44.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#3E5586").s().p("AA3BUQAVABABgEQACgEAAgGIAAhtIhEAAIAACHIgSAAIAAiHIhDAAIAACOIgVAAQACgTAAgdIAAhIQAAgUgCgSIBYAAIAAggIhGAAIgfABIAAgUIAeADICUAAIAngDIAAAUIgngBIg7AAIAAAgIBZAAIgCAnIAABfQAAAUgOADQgOACgKABQgBgMgEgKgAAXAqIANgPIAcAYQgJAGgFAHQgJgKgSgMgAgvA0IgPgMIAMgOIAOALIAPANQgIAHgFAHQgGgGgHgGgAAXgJQAEgJAHgHQAPAMAQALIgNAPQgOgNgPgJgAg5gJQAEgIAHgIIAbAYQgGAEgFAJQgPgNgMgIg");
	this.shape_143.setTransform(488.2,35.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#3E5586").s().p("Ag6BTQAFgKABgKQAUAEAaAIIA7AQQgEAJgDANQgZgLhPgTgAghAoQADgLABgJQATADARAFIAnAMQgFAMgCAIQgxgRgXgDgAhxARQA9gLAogTQgVgVgQgUQgQASgTAVQgGgHgLgHQAWgRARgXQARgXAHgUQAIAGANAEQgGAGgHANIBuAAQgKAQgQATQgQATgVARQAqATA3AGQgLANgDAKQg+gQgkgVQglAUhCATQgDgKgJgLgAADgYQAWgRAVgbIhUAAQAVAbAUARg");
	this.shape_144.setTransform(465.7,35);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#3E5586").s().p("AhnBcQAPgRAHgeQAHgfABgdQABgggCg8ICyAAIgBAsIAACQQgBARgJADQgJAEgeACQgBgIgHgMQAaABAHgDQAGgCgBgJIAAilIiLAAQAABMgCAZQgCAagGAaQgGAagMAUQgGgHgOgJgAghBHIABgZIAAgRIgBgUIBaAAIgBASIAAAWIABAWgAgOA3IAzAAIAAgfIgzAAgAAegHIgkAAIgoAAIAAgSIAwABIAAgWIgmABIAAgTIAmABIgBgXIATAAIAAAXIAogBIAAATIgogBIAAAWIA1gBIAAASIgrAAg");
	this.shape_145.setTransform(442.2,35.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#3E5586").s().p("AgPAcQAPgJAAgTIgQAAIAAgkIAhAAIAAAlQgDAZgTALg");
	this.shape_146.setTransform(413.5,44.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#3E5586").s().p("AgwBpQgTAAgLgEQgKgFAAgMQAAgMAKgKQAJgJAQgLIAlgXIAqgZIhKAAIgqABIAAgRIAqABIB+AAIAAAPQgRAEgMADIgaAPIgkAWQgVANgTAPQgSAQAJADQAJAEAVAAIBdAAQAKAAADgHQAEgGABgUQAMAHAOACQgJAggIAEQgKAEgMAAgAgtgfIABgdIgiAAIgdABIAAgSIAdABIAiAAIgBgcIAVAAQgCALAAARIAxAAIgCgcIAVAAIgBAcIAiAAIAhgBIAAASIghgBIgiAAIABAcIgTAAIAAgcIgxAAIAAAdg");
	this.shape_147.setTransform(398.7,35.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#3E5586").s().p("AgDBlQAKgIAJgMQAJgLAFgLQAGgMADgNQADgNAAgLIAAgfIAWAAQgCAWABAMQAAAMAFANQAEAMAHALQAHAMAIAJQAJAJALAHQgLAGgGAIQgOgOgNgSQgMgRgEgXQgDARgKATQgKATgUAUQgIgJgGgFgAhiBuIABg1IgBgvIBYAAIgBAtIABAtIgTAAIAAgJIgyAAIAAATgAhPBNIAyAAIAAgTIgyAAgAhPAsIAyAAIAAgVIgyAAgAgbgHIg7AAIgbABIAAgQIAXABIArAAQALgbAEgOQAKAGALAEQgJAKgLAVIAfgBIAAAQIgbgBgAAGgVQAEgIAEgMQAEgLADgMIAEgYIADgVIAWAEIgJAkIBCAAIgIAYIgHAYIgSgDIAKgfIguAAIgOAqIgSgIgAhbg3IARgFIAJAgIgRAFQgDgPgGgRgAgfhCIgrAAIggABIAAgQIAfABIAsAAIAegBIAAAQIgegBgAhDhtIASgFIAKAbQgKACgIADQgDgNgHgOg");
	this.shape_148.setTransform(376.3,35.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#3E5586").s().p("AgNBeQAJgHgBgMIAAhNIgcABIAAgSIAcABIAAgwIgBgrIASAAIgBAqIAAAxIA0AAIAlgBIAAASIgkgBIgRAAQAHAjASAUQARAVAWALQgLAIgEAJQgYgOgSgcQgSgcgFgiIgUAAIAABPQAKgFAQgMIAGATIgZAQQgLAGgIAKIgMgRgAheBUQAWABAIgDQAIgDABg8Ig3AAQADgdABgjIA1AAIAAglIgYAAIggABIAAgSIAfABIAsAAIAAAiIAAAjIg1AAIgCAhIA2AAIgDAwIgEAhQgBAKgLAEQgLAEgVACQgBgJgHgMgAAWgpQAagbAUgjIASAMQgZAigZAdQgIgJgGgEg");
	this.shape_149.setTransform(354.1,35.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#3E5586").s().p("AgPAcQAPgJAAgTIgQAAIAAgkIAhAAIAAAlQgDAZgTALg");
	this.shape_150.setTransform(323.9,44.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#3E5586").s().p("Ag+BwQACgRAAgQIAAibQAAgOgDgVIAXAAQgCAVAAAPIAACaIABAhgAgSBsIABg2IgBg2IB9AAIgBA3IABAyIgVAAIAAgRIhVAAIAAAUgAA0BIIAhAAIAAg4IghAAgAABBIIAfAAIAAg4IgfAAgAhrBTQACgYAAgQIAAhZIgCghIAWAAQgCARAAAPIAABaQAAAQACAYgAASgqQAHgFAGgHQAIAIANAMQAOALAGAJIgPANQgRgUgWgVgAgkgZQATgUANgZQALgaAEgPIAaAJQgIAHgFAJIgJAQIA7AAQAPAAATgCIAAATQgRgCgQAAIhCAAQgRAbgMAOQgKgJgGgCg");
	this.shape_151.setTransform(309,35.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#3E5586").s().p("AhzBZQAcgJAfgZQAfgYAOguIg2AAIgkABIAAgUIAkABIA4AAIAAg1IgpAAIgjAAIAAgUIAjABIBjAAIAjgBIAAAUIgjAAIgoAAIAAA1IA+AAIAigBIAAAUIghgBIg8AAQAOAjAZAbQAZAaAoAJQgNAMgEAIQgdgLgagXQgagWgSgsQgJAogaAYQgZAZgnAQQgDgKgNgIg");
	this.shape_152.setTransform(286.5,35.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#3E5586").s().p("AhCBtIABgaIAAg6QgGAKgUATQgIgJgIgFQAVgQAOgQQAOgPAKgWIAWALIgNAOIAuAAQgCgIgEgGIAUgIIAIAWIAwAAIAXgBIAAAPIgYgBIgzAAIAAARIAoAAIAfgBIAAAQIgfgBIgoAAIAAAOIAoAAIAfgBIAAASIgfgBIgoAAIAAAPIA4AAIAbgBIAAAQIgbgBIiAAAIAAAKgAgvBVIA2AAIAAgPIg2AAgAgvA2IA2AAIAAgOIg2AAgAgvAaIA2AAIAAgRIg2AAgAhegqIAngHQATgEAWgIIAAgeIgsAAIgdABIAAgSIAcABIA9AAIgBAcIAAAaIABAcIgQAAIAAgTIglAKQgVAGgNAGIgJgUgABTgXIAAgUIgcAHQgSAEgTAGQgDgJgHgKQAVgCASgEIAkgJIAAgfIgkAAIgfABIAAgSIAfABIA3AAIgBAeIAAAWIABAggAhKhOIAQgLQAIAKAIAPIgRALQgGgNgJgMgAAVhQIAQgJIAQAYIgQALQgFgNgLgNg");
	this.shape_153.setTransform(263.3,35.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#3E5586").s().p("AgPAcQAPgJAAgTIgQAAIAAgkIAhAAIAAAlQgDAZgTALg");
	this.shape_154.setTransform(234.3,44.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#3E5586").s().p("AhlBqIAKgVIALgYIARAGIgJATIgMAbQgKgFgHgCgABEBDIAPgJQATAbAIAQIgSAJQgJgWgPgVgAgfBYIgHgSQAIgBAKgEIALAoQgKABgHADIgFgVgAAOBDIARgFIAHATIAIAWQgLABgHAEQgCgQgMgZgAhAA1QACgOAAgJIgQAIIgVALQgEgKgGgGQAWgGAZgMIAAgXIgmABIAAgQIAmABIgBgXIASAAIgCAdIAAAnIACAegAA/AvQgLgBgDgFQgDgFAAgIIAAguIAAgdIARAAIgBARIAAARQAYgMAJgLQAFAIAIAJQgKADgMAHIgYAJIAAARQgBAOAFAAIAOABQAHAAADgFQADgFAAgMIARALQgFASgGAEQgHADgJABIgKAAIgKAAgAgXArIABggIgBggIA0AAIgBAgIABAggAgFAdIAQAAIAAgiIgQAAgAgigoIABggIgkAAQgPgBgTABIAAgQIAhABIAlAAIgBgYIATAAIgBAYIAjAAIgBgZIAUAAIgBAZIAmAAIAhgBIAAAQIhHAAIABAggAgQg1IAjAAIAAgTIgjAAg");
	this.shape_155.setTransform(219,35.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#3E5586").s().p("ABCALIh/AAIgxABIAAgXIAxABIB+AAIAugBIAAAXIgtgBg");
	this.shape_156.setTransform(196.9,35);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#3E5586").s().p("AhsBhQALgLAOgdQAOgcAFgRQAMAIAMAEQgKAKgMAcIgSAwQgMgHgQgGgABABeIg9AAIgxABIAAgUIAxAAIASAAIAAiUIgKAAIgrACIAAgVIArABIAtAAQAWAAAWgCIAAAWIgqgCIgQAAIAACUIAWAAIAxAAIAAAUIgxgBgAhwgaIAJgSQAZAJAVANQgIAIgEAMQgUgOgXgKgAhehcIALgRQAWANAUANIgOATQgUgRgTgLg");
	this.shape_157.setTransform(174.2,35.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#3E5586").s().p("AgzBdQAIgGAAgLIAAgjIgZAAQgCAUgGARQgGARgNARQgHgGgLgGQALgNAGgNQAFgNADgPQADgOgBgYIgCglICeAAIAcgBIAAARIgcgBIiJAAIAAApICQAAIAdgBIAAAQIgggBIg8AAQAIAMAQAMQAPgJANgNQAGAHAJAHQgFACgIAFIgQALQAbAMAjADQgKAIgDANQhPgOgZg4IgWAAIAAAqIAbgNQACAIADAKQgEABgNAHQgQAHgPAJgAAvAMIg5AAIgpABIAAgPIAkABIA+AAIAngBIAAAPIgngBgAhIgrIAAgjQABgTgCgOICcAAIgBAiIABAigAg2g3IB3AAIAAgOIh3AAgAg2hSIB3AAIAAgQIh3AAg");
	this.shape_158.setTransform(582.9,67.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#3E5586").s().p("AgJBhQAGgFABgOIAAg7QgSAXgQAQQgHgIgJgHQA0grAOg6IgaAAIgdABIAAgTIAcABIAlAAQgBgHgJgYIATgHIAGASIAGAUIAmAAIAbgBIAAATIgagBIgyAAQgGAagNAYIAABZQARgNAIgKQADAKAFAKQgfAYgOANQgDgIgJgKgAhMBvIABguIAAhcQgKATgOASQgGgJgIgEQANgPAPgdQAPgdANgmQAGAEAOAGQgIAHgLAiIAAB/IABAvgAAwAkQgQgpgEgXQAIgCAJgEQAFAcAGALQAUgNAOgYIASASQgEAFgNAJQgOAJgOAOQASAvAhARIgRASQgggbgRgqg");
	this.shape_159.setTransform(560.3,67.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#3E5586").s().p("AAbBvIABggIAAhUQgOAegLATQgKAUgJAJIgUgOQANgMALgOQAKgPAGgQQAJgOAKgdIgMAAIgVABIAAgRIAUABIASAAIAAgdQAAgOgCgLIAXAAQgBAGAAAUIAAAcIAcAAQAQAAANgCIAAASIgbgBIgcAAQAHAXAJAPQAJAMAJALQAJALAJAGIANAIIgIALIgIAKQgZgYgMgTQgMgTgCgJIAABUIABAggAhMBvIABgpIAAhDQgKAbgQAbIgNgVQAJgMAKgRQAIgPAKghIghABIAAgRIAjABIAAgZIgBgcIAWAAIgBAcIAAAZIAggBIAAARIgggBIAAAiQAGgFAKgEIATAfQgIAEgLAHQgFgNgLgRIAABKIABApg");
	this.shape_160.setTransform(538.2,67.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#3E5586").s().p("AgPAdQAPgLAAgSIgQAAIAAgkIAhAAIAAAlQgDAZgTALg");
	this.shape_161.setTransform(508.3,76.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#3E5586").s().p("AgzBdQAJgGAAgLIAAgjIgaAAQgCAUgGARQgGARgNARQgHgGgLgGQALgNAGgNQAGgNACgPQACgOAAgYIgBglICdAAIAcgBIAAARIgcgBIiJAAIAAApICPAAIAegBIAAAQIgfgBIg9AAQAIAMARAMQAOgJANgNQAHAHAJAHQgHACgHAFIgQALQAbAMAjADQgKAIgDANQhPgOgag4IgVAAIAAAqIAcgNQABAIADAKQgFABgNAHQgPAHgOAJgAAwAMIg6AAIgpABIAAgPIAkABIA/AAIAlgBIAAAPIglgBgAhJgrIABgjQAAgTgCgOICeAAIgBAiIABAigAg2g3IB3AAIAAgOIh3AAgAg2hSIB3AAIAAgQIh3AAg");
	this.shape_162.setTransform(493.3,67.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#3E5586").s().p("ABJBfIiLAAIgqABIAAgUIAqABIA7AAIAAhLIgfAAIgoABIAAgTIAoABIAfAAIAAg9IgrAAIgsABIAAgUIAsABIBrAAIAmgBIAAAUIgmgBIgvAAIAAA9IAkAAIAigBIAAATIgigBIgkAAIAABLIA/AAIAkgBIAAAUIgkgBg");
	this.shape_163.setTransform(448.5,67.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#3E5586").s().p("AgPAdQAPgLAAgSIgQAAIAAgkIAhAAIAAAlQgDAZgTALg");
	this.shape_164.setTransform(418.7,76.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#3E5586").s().p("AhRBgQAPAAAagEQAZgEANgGQgRgPgUgXIgUATQgNALgWAPQgHgIgIgGQAVgKAUgPQATgQARgZIgOAAIghABIAAgPIAhABIAVAAQAFgKADgNQAMAFAHACIgIAQIA+AAIAkgBIAAAPIglgBIhDAAIgQAWIBqAAQgTAegcAVQALAEAXADQAYADAVgBQgGAGgHANQgJAAgZgEQgagEgZgJQgYAJgSAEQgSAEgVADQgEgLgIgGgAANBKQATgLAQgSIhCAAQAPARAQAMgAhjgHIABgSIgBgSIAwAAQgMgUgJgIIANgJIgaABIgHgSQAkACA3gEQA2gEAjgJQAGAOAHAGIhLAGIgaACQALAQAJAPQgGACgJAIIAmAAQANgRALgcIAUAMQgIAJgQAXIAuAAIgBAWIABAOIgTAAIAAgVIioAAIAAAWgAg4hQQAIAJAOASIgPAKIA0AAQgIgUgKgLQAHgEAGgGIg2AEg");
	this.shape_165.setTransform(403.3,67.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#3E5586").s().p("AhzBYQAcgIAfgYQAggZAMguIg2AAIgkABIAAgVIAkABIA5AAIAAg0IgpAAIgjABIAAgVIAjABIBjAAIAjgBIAAAVIgjgBIgoAAIAAA0IA/AAIAggBIAAAVIgggBIg8AAQANAjAaAbQAZAaAoAKQgOAKgCAJQgegLgagXQgZgXgTgqQgKAogZAYQgaAYglAQQgFgKgMgJg");
	this.shape_166.setTransform(381.3,67.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#3E5586").s().p("AgNBeQAJgHgBgNIAAhMIgcABIAAgRIAcABIAAgyIgBgrIASAAIgBAqIAAAzIA0AAIAlgBIAAARIgkgBIgRAAQAHAjASAVQARAUAWALQgLAIgEAIQgYgNgSgcQgSgbgFgjIgUAAIAABPQAKgGAQgMIAGAUIgZAPQgLAHgIAJIgMgQgAheBUQAWABAIgDQAIgDABg7Ig3AAQADgdABgkIA1AAIAAglIgYAAIggABIAAgRIAfABIAsAAIAAAiIAAAiIg1AAIgCAhIA2AAIgDAwIgEAgQgBALgLAEQgLAEgVADQgBgJgHgNgAAWgpQAagaAUglIASAMQgZAkgZAcQgIgJgGgEg");
	this.shape_167.setTransform(359.3,67.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#3E5586").s().p("AgPAdQAPgLAAgSIgQAAIAAgkIAhAAIAAAlQgDAZgTALg");
	this.shape_168.setTransform(329.1,76.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#3E5586").s().p("AAzBQIATAAQAEAAAAgIIAAhwIguAAIAACNIgTAAIAAglIAAhXIAAggIBUAAIAAAYIAABwQgBAPgJACQgJAEgQACQgBgKgGgOgAhgBlIABglIAAhXIgBggIBVAAIgBAbIAABqQgBAPgJADQgIACgQACQgBgJgHgOIAUABQAEgBAAgHIAAhuIguAAIAACNgAAggCQAHgDAHgFIAZAvIgPAKQgIgWgQgbgAhIgCQAGgDAHgFIAaAvIgPAKQgJgWgPgbgABQhVIiSAAIgvABIAAgSIAuABICSAAIAjgBIAAASIgigBg");
	this.shape_169.setTransform(314.1,68.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#3E5586").s().p("AAWBTQAmAAAFgCQAFgCADgGQAEgHABgXQACgXAAgPIiOAAIAEgmIADgpIAZAEQgFAJgCASQgDASAAAQIBNAAIAFgoIADglIhbAAIgpABIAAgUIApABIByAAIgHA2IgEApIAtAAIgEAtQgBAagEARQgFARgMAEQgMAEghACQgBgLgIgMgAATA0IhVAAIgjABIAAgTIAjABIBVAAIApgBIAAATIgpgBg");
	this.shape_170.setTransform(291.4,67.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#3E5586").s().p("AgPAdQAPgLAAgSIgQAAIAAgkIAhAAIAAAlQgDAZgTALg");
	this.shape_171.setTransform(261.9,76.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#3E5586").s().p("AgKBiQANgGAQgLQAQgKAKgLQgHgOgHgPQgGgQgFgXIgJASIgPgIQAOgZAJggQAKghADgXQAMAFAKACIgFANIgKAeIAtAAIAYgBIAAARIgQgBQgBAQgFAgQgGAhgNAZQAJAMANAJQAMAJALAEQgMAJgEAIQgLgHgKgJQgKgJgKgMQgLALgMAJIgeASQgEgJgIgFgAAggkQAIA4AQAWQAKgWADgVQAEgXABgWIgmAAgAhqBhQAugLARgSIgtgMQAGgJAJgUIggABIAAgSIAmABQAEgJACgIIAWAGQgFACgFAJIA1AAQgEAYgPAZQAPAGAHAFQgEAGgDAIQgIgGgSgFQgTAVgwARQgFgLgIgEgAhBAvIAhAIQAHgKAHgSIgkAAIgLAUgAhvgOQAJgDAPgLQAOgLAIgLIglABIAAgSIAyABIgBgtIAUAAIgBAtIAtgBIAAASIgtgBIABAsIgUAAIABgjQgFAIgNAMQgOANgMAGQgFgIgKgEgAgfghIAKgLIAXAaIgLAMIgWgbgAgXhLQAIgNAHgTQAIAFAGACIgGAOIgHARQgIgEgIgCgAhihgQAJgGAEgFQANAOAJANIgOAJQgIgOgNgLg");
	this.shape_172.setTransform(246.7,67.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#3E5586").s().p("AABBbQASAAAFgCQAFgCAAgKIAAg+IgdABQgOABgLAEQgEgOgFgIQAJgFAGgMQAGgMAJgYIggABIAAgTIAkABQAIgUAEgWQAOAHAJACQgFAGgDAHIgHAUIAzAAIAdgBIAAATIgdgBIg5AAIgKAXIgNAfIAmAAIgBgoIAVAAIgBAoIASAAIAjgBIAAARIgjgBIgSAAIAABMQABAKgLAFQgMAGgQACQgCgLgHgMgAhvBvIABgyIAAhwIgBguIBPAAQgPAmgNAqQANARAGALQAGAMgBANQgBANgLAIQgKAIgRADQgDgOgHgKQATAAAGgGQAFgHgFgPQgGgPgQgQQAMgcALglIghAAIAAC/gAgpBVIATgYQAJgOAIgRIASANQgFAFghAyQgIgIgIgFgAA+ArIAPgLQAKALAZAnQgGADgNAJQgPgdgQgWg");
	this.shape_173.setTransform(225,67.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#3E5586").s().p("AgPAdQAPgLAAgSIgQAAIAAgkIAhAAIAAAlQgDAZgTALg");
	this.shape_174.setTransform(194.7,76.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#3E5586").s().p("AgdBkQATgPAKgRQALgRAGgTQAGgSADgZQADgaABgiIgmABIAAgUIAmABIBQAAIgICdQgBAdgLAGQgLAGgZADQgBgMgJgMQAaAAAHgDQAGgDABgTIAHiGIgqAAIgDA1QgCAYgGAWQgGAXgMAVQgMAWgTATQgHgHgLgGgAhABxIABgeIAAhEQgLAOgXATIgMgSQASgLARgTQARgRANgaIgVAAIgfABIAAgUIAeABIAxAAIgKAYQgGAOgKAQIAMAJQAHgFANgUIAOAQIgKAIIgNAMQAMALAIAKQgJAHgHAIQgJgPgFgFIgOgOIAABEIABAegAhChqIARgGIARAgQgIADgLAGQgHgTgIgQg");
	this.shape_175.setTransform(179,67.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#3E5586").s().p("AAIBdQANABAJgBQAHgBABgJIAAgeIgOAAIgYABIAAgQIAYABIAOAAIAAgaIgPAAIgbABIAAgOIAcAAIAOAAIAAgaIgOAAIgUABIAAgNIgGAJQgFgIgHgGQAOgPAIgUIANgjQAJAFAMADQgEAGgDAFIgEAKIA2AAQgHAJgEALIgLAYIAkAAIgBAeIAAAKIARgBIAAAPIgRgBIAAAOIABAlIgSAAIAAgLIgbAAIAAAkQgBANgHAFQgIAFgYACQAAgKgGgLgAA2AnIAbAAIAAgaIgbAAgAA2AAIAbAAIAAgaIgbAAgAAFgqIAdABIAKAAIANgdIghAAIgTAcgAg4BeQAWAAgCgJIAAgLIgyAAIAAAlIgSAAIABgaIAAg5IgBgcIBXAAIgBAcIAAA7QAAAPgIAEQgIAEgPADQgBgJgGgKgAhWA8IAyAAIAAgSIgyAAgAhWAdIAyAAIAAgQIgyAAgAglgNIgwAAIgeABIAAgQIAeABIAPAAIAAgQIgQAAIgRABIAAgPIARABIAQAAIAAgQIgQAAIgbABIAAgPIAbABIAQAAIgBgYIATAAIAAAYIANAAIAfgBIAAAPIgfgBIgNAAIAAAQIANAAIAVgBIAAAPIgWgBIgMAAIAAAQIAPAAIAcgBIAAAQIgcgBg");
	this.shape_176.setTransform(157.4,67.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#3E5586").s().p("AgNBeQAJgHgBgNIAAhMIgcABIAAgRIAcABIAAgyIgBgrIASAAIgBAqIAAAzIA0AAIAlgBIAAARIgkgBIgRAAQAHAjASAVQARAUAWALQgLAIgEAIQgYgNgSgcQgSgbgFgjIgUAAIAABPQAKgGAQgMIAGAUIgZAPQgLAHgIAJIgMgQgAheBUQAWABAIgDQAIgDABg7Ig3AAQADgdABgkIA1AAIAAglIgYAAIggABIAAgRIAfABIAsAAIAAAiIAAAiIg1AAIgCAhIA2AAIgDAwIgEAgQgBALgLAEQgLAEgVADQgBgJgHgNgAAWgpQAagaAUglIASAMQgZAkgZAcQgIgJgGgEg");
	this.shape_177.setTransform(135.3,67.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#3E5586").s().p("Ag1BhQAigJALgQQAJgQgBgaIgiABIAAgRIAjABIBGAAIAlgBIAAARIgvgBIAAAyQgBAKAGACQAGABAJAAQAKAAABgHIABgPQAKAGAKACQgCAUgHAFQgHAFgLgBIgZAAQgUgBABgUIAAg5IgXAAQABAogSASQgPASgbAJQgCgIgLgKgAhwBTIABg4IAAhHIgBgqIBJAAIgBAqIAABAIABAtIgTAAIAAgOIgjAAIAAAggAhcAlIAiAAIAAguIgiAAgAhcgYIAiAAIAAgvIgiAAgABVALQgPgCgNgJQgOgIgKgLQgGAFgNAGIgZAJQgFgHgJgHQAZgHAZgMQgKgQgFgRQgRADgQAGIgHgTIAigFQgDgKgCgXIAUgBQgDAGAHAYQAvgHAcgIIAGAPIhMAPQAGAUAGAHQAbgQAKgOIASARQgFABgKAGIgdAUQASATAKgBQAKAAACgXIAVAMQgNAggNAAIgBAAg");
	this.shape_178.setTransform(555.5,35.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#3E5586").s().p("AgPAcQAPgJAAgTIgQAAIAAgkIAhAAIAAAlQgDAZgTALg");
	this.shape_179.setTransform(234.3,44.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#3E5586").s().p("AgBBnQAVgXANgjQAMgjAAg1IgcABIAAgQIAcABQAAgfgCgYQANACAJAAQgCANAAAMIAAAcIAxAAIgDAoIgEBlQAAAPgKADIgaAHQgBgKgJgMQAVgBADgCQAEgCAAgFIAFh4IgdAAQgBBAgKAeQgKAdgYAhQgIgHgLgDgAhsBPIA1gEIAAgSIgrABIAAgQIArABIAAgLIgrABIAAgQIArABIAAgNIgtAAIABgUIgBgUIAtAAIAAgMIgdAAIABgdIgcABIAAgQIAcABIgBgSIATAAIgBASIAoAAIAAgSIATAAIgBASIAZgBIAAAQIgZgBIABAdIgeAAIAAAMIAtAAIgBAUIABAUIgtAAIAAANIArgBIAAAQIgrgBIAAALIArgBIAAAQIgrgBIAAAQIArgFIgBAOIg+AJQgeAEgNAEQgCgIgGgMgAglgGIAcAAIAAgPIgcAAgAhRgGIAaAAIAAgPIgaAAgAhCg9IAoAAIAAgPIgoAAg");
	this.shape_180.setTransform(179.3,99.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#3E5586").s().p("AgBBnQAVgXANgjQAMgjAAg1IgcABIAAgQIAcABQAAgfgCgYQANACAJAAQgCANAAAMIAAAcIAxAAIgDAoIgEBlQAAAPgKADIgaAHQgBgKgJgMQAVgBADgCQAEgCAAgFIAFh4IgdAAQgBBAgKAeQgKAdgYAhQgIgHgLgDgAhsBPIA1gEIAAgSIgrABIAAgQIArABIAAgLIgrABIAAgQIArABIAAgNIgtAAIABgUIgBgUIAtAAIAAgMIgdAAIABgdIgcABIAAgQIAcABIgBgSIATAAIgBASIAoAAIAAgSIATAAIgBASIAZgBIAAAQIgZgBIABAdIgeAAIAAAMIAtAAIgBAUIABAUIgtAAIAAANIArgBIAAAQIgrgBIAAALIArgBIAAAQIgrgBIAAAQIArgFIgBAOIg+AJQgeAEgNAEQgCgIgGgMgAglgGIAcAAIAAgPIgcAAgAhRgGIAaAAIAAgPIgaAAgAhCg9IAoAAIAAgPIgoAAg");
	this.shape_181.setTransform(156.9,99.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#3E5586").s().p("AAlBbIAXgBQAGAAAAgJIAAglIgbAAIglABIAAgOIgWAKQgDgIgIgLQAdgFAYgOQgIgEgMgHIALgNQAVALAGAFQATgPAHgJIg6AAQgOAQgPALQgCgEgMgLQALgEANgNQALgOAGgOQAJAFALADIgIAJIBTAAIgRAWQgKAMgMAKQgMAIgQAJIgWALIAaABIAcAAIgBgXIAUAAIgBAXIAbgBIAAASIgbgBIAAAuQAAAKgIAEQgHAEgXAEQgEgMgFgJgAg6BvIABgnIAAgcIgOAQIgZAZIgOgRIAVgRIAggfIAAgeIgBgnIAUAAQgCAWAAARIAABSIABAngAAABGIgGgLIAPgKIAIANQAEAHADAJIgQAJIgIgRgAhpgTQAHgFAGgHIAPAOIAQARIgOAMQgMgOgSgRgAgpg4IABgSIgXAAIgoABIAAgSIAoABIAXAAIgBgVIAVAAQgCAKAAALIAyAAIgBgUIAVAAIgBAUIAXAAIAngBIAAASIgngBIgXAAIABARIgVAAIABgRIgyAAIABASg");
	this.shape_182.setTransform(134.5,99.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#3E5586").s().p("AgPAdQAPgLAAgSIgQAAIAAgkIAhAAIAAAlQgDAZgTALg");
	this.shape_183.setTransform(194.7,76.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154,p:{x:234.3}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150,p:{x:323.9}},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146,p:{x:413.5}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142,p:{x:503.1}},{t:this.shape_141},{t:this.shape_140,p:{x:555.5,y:35.3}},{t:this.shape_139}]},22).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_179},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_154,p:{x:323.9}},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_150,p:{x:413.5}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_146,p:{x:503.1}},{t:this.shape_141},{t:this.shape_178},{t:this.shape_139},{t:this.shape_142,p:{x:592.7}},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:194.7}},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171,p:{x:261.9}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168,p:{x:329.1}},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164,p:{x:418.7}},{t:this.shape_163},{t:this.shape_140,p:{x:471.1,y:67.3}},{t:this.shape_162},{t:this.shape_161,p:{x:508.3}},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158}]},20).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_179},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_154,p:{x:323.9}},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_150,p:{x:413.5}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_146,p:{x:503.1}},{t:this.shape_141},{t:this.shape_178},{t:this.shape_139},{t:this.shape_142,p:{x:592.7}},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_183},{t:this.shape_173},{t:this.shape_172},{t:this.shape_174,p:{x:261.9}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_171,p:{x:329.1}},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_168,p:{x:418.7}},{t:this.shape_163},{t:this.shape_140,p:{x:471.1,y:67.3}},{t:this.shape_162},{t:this.shape_164,p:{x:508.3}},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_161,p:{x:597.9}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},18).wait(96));

	// 图层 16
	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#3E5586").ss(2,1,1).p("AAehLQAbgKAQAcQAQAcgKAfQgJAghGAtQhFgtgJggQgKgfAQgcQAQgcAbAKQATAIAKAOQALgOATgIg");
	this.shape_184.setTransform(136.5,35.6);
	this.shape_184._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_184).wait(22).to({_off:false},0).wait(134));

	// 图层 17
	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#E1E2E3").ss(1,1,1).p("EgovAAAMBReAAA");
	this.shape_185.setTransform(366.3,117.9);
	this.shape_185._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_185).wait(78).to({_off:false},0).wait(78));

	// 图层 18
	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#F3F3F5").s().p("Ego1AD6IAAmVIDGAAIBeheIBfBeMBLpAAAIAAGVg");
	this.shape_186.setTransform(365.5,30.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#F3F3F5").s().p("Ego1AGaIAArVIDGAAIBeheIBfBeMBLpAAAIAALVg");
	this.shape_187.setTransform(365.5,46.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#F3F3F5").s().p("Ego1AI7IAAwXIDGAAIBeheIBfBeMBLpAAAIAAQXg");
	this.shape_188.setTransform(365.5,62.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F3F3F5").s().p("Ego1AMQIAA3BIDGAAIBeheIBfBeMBLpAAAIAAXBg");
	this.shape_189.setTransform(365.5,83.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F3F3F5").s().p("Ego1APAIAA8hIDGAAIBeheIBfBeMBLpAAAIAAchg");
	this.shape_190.setTransform(365.5,101.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#F3F3F5").s().p("Ego1ASMMAAAgi5IDGAAIBeheIBfBeMBLpAAAMAAAAi5g");
	this.shape_191.setTransform(365.5,121.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#F3F3F5").s().p("Ego1AVAMAAAgohIDGAAIBeheIBfBeMBLpAAAMAAAAohg");
	this.shape_192.setTransform(365.5,139.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#F3F3F5").s().p("Ego1AsyMAAAhYFIDGAAIBeheIBfBeMBLpAAAMAAABYFg");
	this.shape_193.setTransform(365.5,291.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_186}]},22).to({state:[{t:this.shape_187}]},20).to({state:[{t:this.shape_188}]},18).to({state:[{t:this.shape_189}]},18).to({state:[{t:this.shape_190}]},17).to({state:[{t:this.shape_191}]},19).to({state:[{t:this.shape_192}]},19).to({state:[{t:this.shape_193}]},20).wait(3));

	// 图层 2
	this.instance_3 = new lib.hr();
	this.instance_3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(156));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.5,-0.5,641,1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-0.5,-0.5,641,85.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-0.5,-0.5,641,117.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-0.5,-0.5,641,149.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-0.5,-0.5,641,191.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-0.5,-0.5,641,227.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-0.5,-0.5,641,268.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-0.5,-0.5,641,304.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-0.5,-0.5,641,608.5), rect, rect];


(lib.eye1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.eyeimg();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-30},4).to({rotation:0},4).wait(3).to({rotation:-30},4).to({rotation:0},4).wait(3).to({scaleY:0.28},2).to({scaleY:1},2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9,-9.5,18,19);
p.frameBounds = [rect, new cjs.Rectangle(-10.1,-10.5,20.3,21.2), new cjs.Rectangle(-11.1,-11.4,22.3,23), new cjs.Rectangle(-11.9,-12.2,23.9,24.4), new cjs.Rectangle(-12.5,-12.7,25.1,25.5), new cjs.Rectangle(-11.9,-12.2,23.9,24.4), new cjs.Rectangle(-11.1,-11.4,22.3,23), new cjs.Rectangle(-10.1,-10.5,20.3,21.2), rect=new cjs.Rectangle(-9,-9.5,18,19), rect, rect, rect, new cjs.Rectangle(-10.1,-10.5,20.3,21.2), new cjs.Rectangle(-11.1,-11.4,22.3,23), new cjs.Rectangle(-11.9,-12.2,23.9,24.4), new cjs.Rectangle(-12.5,-12.7,25.1,25.5), new cjs.Rectangle(-11.9,-12.2,23.9,24.4), new cjs.Rectangle(-11.1,-11.4,22.3,23), new cjs.Rectangle(-10.1,-10.5,20.3,21.2), rect=new cjs.Rectangle(-9,-9.5,18,19), rect, rect, rect, new cjs.Rectangle(-9,-6,18,12.1), new cjs.Rectangle(-9,-2.6,18,5.3), new cjs.Rectangle(-9,-6,18,12.1), rect=new cjs.Rectangle(-9,-9.5,18,19), rect, rect, rect];


(lib.car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// 图层 1
	this.carimg = new lib.carimg();
	this.carimg.setTransform(-21.9,43);

	this.timeline.addTween(cjs.Tween.get(this.carimg).wait(1).to({scaleY:0.96,y:45.5},3).to({scaleY:1,y:43},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-121.9,-103,243,206);
p.frameBounds = [rect, rect, new cjs.Rectangle(-121.9,-100.1,243,203.2), new cjs.Rectangle(-121.9,-97.3,243,200.3), new cjs.Rectangle(-121.9,-94.5,243,197.5), new cjs.Rectangle(-121.9,-97.3,243,200.3), new cjs.Rectangle(-121.9,-100.1,243,203.1), new cjs.Rectangle(-121.9,-103,243,206)];


(lib.muban_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.instance = new lib.d03();
	this.instance.setTransform(95,468);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hr
	this.instance_1 = new lib.hr();
	this.instance_1.setTransform(0,1333.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 8
	this.instance_2 = new lib.d09();
	this.instance_2.setTransform(0,423);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// car
	this.car = new lib.car();
	this.car.setTransform(345,323.4);

	this.timeline.addTween(cjs.Tween.get(this.car).wait(1));

	// photo
	this.instance_3 = new lib.a16();
	this.instance_3.setTransform(102,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 图层 7
	this.instance_4 = new lib.d07();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// hrtop
	this.hrtop = new lib.hrtop();

	this.timeline.addTween(cjs.Tween.get(this.hrtop).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,642,1335.1);
p.frameBounds = [rect];


(lib.muban = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// likes
	this.likes = new lib.likes();
	this.likes.setTransform(0,539.4);

	this.timeline.addTween(cjs.Tween.get(this.likes).wait(1));

	// pop
	this.pop = new lib.pop();
	this.pop.setTransform(587.8,499.6);

	this.timeline.addTween(cjs.Tween.get(this.pop).wait(1));

	// time
	this.time = new cjs.Text("54分钟前", "19px 'SimHei'", "#505050");
	this.time.name = "time";
	this.time.lineHeight = 21;
	this.time.setTransform(109.8,502.6);

	this.timeline.addTween(cjs.Tween.get(this.time).wait(1));

	// photo
	this.photo = new lib.photo();
	this.photo.setTransform(105,115);

	this.timeline.addTween(cjs.Tween.get(this.photo).wait(1));

	// 图层 2
	this.instance = new lib.d01();
	this.instance.setTransform(111,68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// username
	this.username = new cjs.Text("抓取用户微信名称", "28px 'SimHei'", "#3E5586");
	this.username.name = "username";
	this.username.lineHeight = 30;
	this.username.lineWidth = 506;
	this.username.setTransform(107,27.8);

	this.timeline.addTween(cjs.Tween.get(this.username).wait(1));

	// headimg
	this.headimg = new lib.headimg();
	this.headimg.setTransform(20,24.8);

	this.timeline.addTween(cjs.Tween.get(this.headimg).wait(1));

	// hrtop
	this.hrtop = new lib.hrtop();

	this.timeline.addTween(cjs.Tween.get(this.hrtop).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,642,540.9);
p.frameBounds = [rect];


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{handout:16,land:23,towalk:30,walkloop:37,jump:49,torun:54,land2:59,jump2:63,jump3:70,jump3stop:75,land3:82,book:89,jump4:96,land4:102,walk4:103,backrun:120,stopcar:145,backcar:151,takebook:157});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		//this.parent.play();
		this.stop();
	}
	this.frame_23 = function() {
		//this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		this.gotoAndPlay("walkloop");
	}
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}
	this.frame_75 = function() {
		this.stop();
	}
	this.frame_88 = function() {
		this.stop();
	}
	this.frame_95 = function() {
		this.stop();
	}
	this.frame_119 = function() {
		this.gotoAndPlay("walk4");
	}
	this.frame_144 = function() {
		this.gotoAndPlay("backrun");
	}
	this.frame_173 = function() {
		this.gotoAndPlay("takebook");
	}
	this.frame_181 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(7).call(this.frame_23).wait(7).call(this.frame_30).wait(18).call(this.frame_48).wait(1).call(this.frame_49).wait(20).call(this.frame_69).wait(6).call(this.frame_75).wait(13).call(this.frame_88).wait(7).call(this.frame_95).wait(24).call(this.frame_119).wait(25).call(this.frame_144).wait(29).call(this.frame_173).wait(8).call(this.frame_181).wait(1));

	// finger
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F00E45").s().p("AgMArQgMgPgEgXQgFgVAFgSQAGgSAMgCQAKgCAMANQANAPAEAXQAFAVgGASQgGATgMACIgDAAQgIAAgLgMg");
	this.shape.setTransform(79.8,-19.4);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F00E45").s().p("AgLBJQgPgCgIgXQgIgYAEgcQAFgfANgVQAPgTAOACQARADAJAXQAIAYgDAcQgGAfgPAUQgOASgMAAIgEgBg");
	this.shape_1.setTransform(86.6,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},89).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},6).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(89).to({_off:false},0).wait(1).to({x:80.4,y:-17.7},0).wait(1).to({x:80.9,y:-16},0).wait(1).to({x:81.5,y:-14.2},0).wait(1).to({x:82,y:-12.5},0).wait(1).to({x:82.6,y:-10.8},0).wait(1).to({x:83.1,y:-9.1},0).to({_off:true},1).wait(86));

	// book
	this.instance = new lib.book();
	this.instance.setTransform(69.5,-11.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({x:73.7,y:-5},6).wait(1).to({rotation:15,x:75.5,y:19.5},0).to({_off:true},6).wait(80));

	// line
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("As3ErQgDgCgBgEQgUhmAshdQABgEAEgCQAEgBAEACQAEABABAEQACAEgCAEQgpBYATBfQAAAEgCADQgCAEgEABIgCAAQgDAAgDgCgAt8DxQgDgDgBgDQgJg2AZg7QACgEAEgBQADgCAEACQAEABACAEQABAEgBAEQgXA1AIAwQAAAEgCAEQgDADgDABIgBAAQgEAAgDgCgANZhzQgEgBgCgEQgrh3hRggQgEgCgBgEQgCgEACgDQABgEAEgCQAEgCAEACQBYAiAvCBQACAEgCAEQgCADgEACIgDAAIgEgBgAN0jNQgDgCgCgDQgRgzgpgTQgEgCgCgEQgBgEACgDQABgEAEgCQAEgBAEACQAxAWAUA7QACAEgCAEQgCADgEACIgDAAIgFgBg");
	this.shape_2.setTransform(6.4,-17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AshEvQgEgDAAgEQgUhmArhdQACgEAEgBQAEgCAEACQADACACAEQABAEgCAEQgoBXASBfQABAEgCAEQgDADgEABIgBAAQgDAAgDgBgAtmD0QgEgCAAgEQgKg2Aag7QABgDAEgCQAEgCAEACQAEACABAEQACADgCAEQgXA1AIAxQABAEgDADQgCADgEABIgBAAQgEAAgCgCgANEh2QgEgCgCgEQgrh2hRghQgEgBgBgEQgCgEACgEQABgEAEgBQAEgCAEACQBYAiAvCAQACAEgCAEQgCAEgEABIgDABIgEgBgANfjQQgDgCgCgEQgRgygpgUQgEgBgCgEQgBgEACgEQABgEAEgBQAEgCAEACQAxAXAUA7QACADgCAEQgCAEgEABIgDABIgFgBg");
	this.shape_3.setTransform(10.7,-16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("ANHDOQgEgBgCgDQgDgDABgFQAWh8g2hFQgCgBAAgEQABgEADgCQADgDAEAAQAFABACADQA8BIgYCHQgBAEgEADQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgDAAgAOZBuQgCgEAAgEQALg0gagmQgDgDABgEQABgFADAAQADgCAFABQAEAAACACQAfAsgMA9QAAAEgEACQgDACgEAAQgEgBgDgDgAtiAAQgDAAgBgEQgUhmAshdQABgEAEgCQAEgBAEACQAEABABAEQACAEgCAEQgpBYATBfQAAAEgCADQgCACgEABIgCAAQgDAAgDgCgAung4QgDgDgBgDQgJg2AZg7QACgEAEgBQADgCAEACQAEABACAEQABAEgBAEQgXA1AIAwQAAAEgCAEQgDADgDABIgCAAQgDAAgDgCg");
	this.shape_4.setTransform(20.7,-8.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("ArfEYQgEgCAAgEQgUhmArhdQACgEAEgCQAEgBAEACQADABACAEQABAEgCAEQgoBYASBfQABAEgCADQgDAEgEABIgBAAQgDAAgDgCgAskDeQgEgDAAgDQgKg2Aag7QABgEAEgBQAEgCAEACQAEABABAEQACAEgCAEQgXA1AIAwQABAEgDAEQgCADgEABIgBAAQgEAAgCgCgAL/g+QgEgCgCgEQgrh2hRghQgEgBgBgEQgCgEACgEQABgEAEgBQAEgCAEACQBYAiAvCAQACAEgCAEQgCAEgEABIgDABIgEgBgAMdi6QgEgCgBgEQgRgygqgUQgEgBgBgEQgCgEACgEQACgEAEgBQAEgCAEACQAxAXAUA7QABADgCAEQgCAEgDABIgDABIgFgBg");
	this.shape_5.setTransform(7.7,-36.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},82).to({state:[{t:this.shape_3}]},13).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},6).to({state:[]},18).to({state:[{t:this.shape_5}]},37).wait(25));

	// mouth
	this.mouth = new lib.mouth1();
	this.mouth.setTransform(-0.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(23).to({_off:true},97).wait(62));

	// eye2
	this.eyel2 = new lib.eye2();
	this.eyel2.setTransform(11,-7.1);
	this.eyel2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.eyel2).wait(30).to({_off:false},0).to({_off:true},40).wait(112));

	// eye2
	this.eyer2 = new lib.eye2();
	this.eyer2.setTransform(-11.6,-9.4,1,1,0,7.7,-172.3);
	this.eyer2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.eyer2).wait(30).to({_off:false},0).wait(40).to({_off:true},33).wait(79));

	// eye1
	this.eyel1 = new lib.eye1();
	this.eyel1.setTransform(11,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.eyel1).wait(23).to({_off:true},7).wait(40).to({_off:false},0).to({_off:true},50).wait(62));

	// eye1
	this.eyer1 = new lib.eye1();
	this.eyer1.setTransform(-11.6,-9.6);

	this.timeline.addTween(cjs.Tween.get(this.eyer1).wait(23).to({_off:true},7).wait(73).to({_off:false},0).to({_off:true},17).wait(37).to({_off:false},0).wait(25));

	// cheek
	this.instance_1 = new lib.a03();
	this.instance_1.setTransform(-36,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:true},97).wait(62));

	// papa
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF3D6C").s().p("AgxCjQgEgCgBgFQgCgFACgDQADgGAMgEIB8gpIgpgQQgPgFgGAAIgRAEQgJABgEgHQgFgIAMgOQA6g5AxgtQhCgDg7AVQgTAIgGgJQgGgIALgQIAigwIhhA8QgZAQgRAFQgUAEgCgLQgCgIAIgGQAEgDAKgDQANgEARgLICPhZQAOgJAHABQAGAAAFAEQAFAEgBAGQAAAFgGAEIgLAGQgOAJgNAYQgPAegGAIQAPgGAZgDIAegCIAogCQAYgCAKgCIAOgBQAHACADAGQACAJgQAJQgMAHgUATIhXBRQArAMAwATQAMAFACAHQACAMgUAFIiZAyQgGACgFAAIgGgBg");
	this.shape_6.setTransform(65,39.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,61,108,0.831)").s().p("AgzCoQgEgCgBgFQgCgFACgEQADgFAMgEICAgrIgqgQQgPgGgGABIgSADQgKABgEgGQgEgJAMgOQA7g7AzguQhEgDg8AWQgUAIgHgKQgGgIALgQIAkgxIhkA9QgaARgSAEQgUAFgCgMQgCgIAIgGQAFgDAKgDQANgEARgMICThbQAPgJAHAAQAHAAAFAFQAEAEAAAGQgBAFgGAFIgLAGQgPAIgNAaQgPAegHAIQAQgGAagDIAfgCIApgCQAZgCAKgCIAOgBQAIACACAGQACAJgQAKQgMAHgUAUIhaBTQAsAMAyAUQALAFACAHQADAMgUAGIieAzQgGACgFAAIgHgBg");
	this.shape_7.setTransform(66.6,38.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,61,108,0.667)").s().p("Ag0CsQgEgCgBgFQgCgFACgEQADgFAMgFICEgrIgrgRQgQgGgGABIgSAEQgLABgEgHQgEgJAMgPQA9g8A0gwQhGgDg+AXQgUAIgHgKQgGgIAMgRIAkgzIhnBAQgaARgSAFQgVAEgDgMQgCgIAJgGQAEgDALgDQANgFASgMICXheQAPgJAIABQAGAAAGAEQAEAFAAAFQgBAGgGAEIgMAHQgOAJgOAaQgQAfgGAIQAQgGAbgDIAfgCIAqgCQAagCAKgCIAPgBQAIABACAHQACAJgQAKQgNAIgVAUIhcBVQAuANAyAUQANAFACAHQACANgVAGIiiA0QgHACgFAAIgGgBg");
	this.shape_8.setTransform(68.1,37.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,61,108,0.502)").s().p("Ag2CxQgEgCgBgFQgCgGACgDQADgGANgFICHgsIgsgSQgQgGgHABIgSAEQgLABgEgHQgFgJANgPQA/g+A1gxQhIgEg/AYQgVAIgHgKQgHgJAMgRIAmg0IhqBCQgbARgTAFQgVAFgDgNQgCgIAJgGQAFgEALgDQANgEATgNICbhgQAPgKAIABQAHAAAFAEQAFAFAAAGQgBAGgGAEIgMAHQgQAJgOAbQgQAggHAIQARgGAcgDIAggCIArgDQAbgBAKgCIAPgCQAIACADAHQACAJgRALQgNAHgVAVIhfBYQAvANA0AVQAMAEACAIQADANgVAGIinA2QgHACgFAAQgEAAgDgBg");
	this.shape_9.setTransform(69.7,36.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,61,108,0.333)").s().p("Ag3C1QgFgCgBgFQgBgGACgDQADgHANgEICKguIgtgSQgQgFgHAAIgTAEQgLABgEgHQgFgJANgQQBAg/A4gzQhLgDhBAXQgVAJgHgKQgHgJAMgSIAng1IhsBDQgdASgTAFQgVAFgDgNQgCgIAIgHQAGgDALgEQAOgEASgNICghjQAPgKAJABQAHAAAFAFQAFAEAAAHQgBAFgHAFIgMAHQgQAJgOAcQgRAhgHAIQARgGAdgEIAhgBIAtgDQAbgCALgCIAPgBQAIACADAHQACAKgRAKQgOAIgWAVIhhBaQAwANA2AWQAMAFACAIQADANgWAGIirA3QgHADgFAAQgEAAgDgCg");
	this.shape_10.setTransform(71.3,35.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,61,108,0.169)").s().p("Ag5C6QgEgDgBgFQgCgFACgEQADgHAOgEICOgvIgvgSQgRgHgHABIgTAEQgLABgFgHQgFgKAOgQQBChBA4g0QhMgDhDAYQgVAKgIgLQgHgJANgSIAng3IhvBFQgcASgUAFQgWAFgDgNQgCgIAJgHQAFgEALgDQAPgEATgOICkhmQAPgJAJAAQAHAAAGAFQAFAFgBAGQAAAGgHAFIgNAHQgQAKgPAcQgRAhgHAJQASgHAdgDIAigCIAtgCQAcgCALgCIAQgBQAIACADAHQADAJgSALQgOAIgXAWIhjBcQAxAOA3AWQANAFACAIQACAOgWAGIivA5QgHADgFAAQgEAAgEgCg");
	this.shape_11.setTransform(72.9,35.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,61,108,0)").s().p("Ag6C/QgFgDgBgFQgBgGACgEQADgGAOgFICRgwIgvgTQgSgGgHAAIgUAFQgLABgFgIQgFgKAOgQQBEhDA6g1QhOgDhFAZQgWAJgIgLQgHgJANgTIAog4IhxBHQgeASgUAGQgXAFgDgOQgCgIAJgHQAGgEALgDQAPgFAUgOICohoQAQgKAJABQAHAAAGAFQAFAFgBAGQAAAGgHAFIgNAHQgRAKgPAdQgRAjgIAJQASgHAegEIAjgCIAvgCQAcgCAMgCIAQgCQAIACADAIQADAKgTALQgOAIgXAWIhmBfQAzAOA4AXQANAFACAIQADAOgXAHIi0A6QgHACgFAAQgFAAgDgBg");
	this.shape_12.setTransform(74.4,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},23).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).wait(152));

	// papa
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF3D6C").s().p("AALChQgJgHADgVQAHgtAhgiQgDgCgPACQgIABgMgDIgSgFQgkgJgmAIIgJACIgKAAQgFgBgEgDQgEgEAAgEQAAgGAIgIIAbgaIAZgYQAMgKAfgSQghgfgRgNQgdgYgcgGQgTgFgBgIQgBgEADgFQACgEAFgCQAGgCAMABQA/ADA9gCQAfgBAQgEIAOgCQAJAAADAHQADAHgHAGQgEAEgJACQgUAGguABIg7AAQAwAvAYARQAMAHAAAIQgBAIgOAFQguAUghAnQAXgFAVAFQAVAGAKACQAXAEAWgGQAKgDAEAAQAJAAAEAHQADAGgFAKQgHARgMASIgSAbQgIARACAOIBPhNQAIgIAFgCQAKgEAFAHQAFAHgFAHQgBADgIAIQgeAbgeAfQgWAWgNAFQgGACgGAAQgHAAgGgFg");
	this.shape_13.setTransform(-57.7,78.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,61,108,0.831)").s().p("AALCmQgJgHADgWQAIgvAigjQgEgCgPACQgJABgLgCIgUgGQglgJgnAJIgJACIgLAAQgFgBgEgEQgEgEAAgEQAAgHAIgHIAcgcIAagYQANgKAfgUQghgfgSgOQgegZgdgGQgTgFgCgIQgBgFADgEQADgEAEgCQAHgDAMABQBBADA/gBQAhgCAQgEIAPgCQAJAAADAIQADAHgHAFQgEAFgJACQgVAGgwABIg9AAQAyAwAYASQANAIAAAIQgBAIgPAGQgvAUgjApQAYgGAWAFQAWAGAKACQAYAFAXgGQAKgDAFAAQAIAAAEAGQAEAHgGALQgHARgMASIgSAdQgJARACAOIBShPQAIgJAFgBQALgEAFAHQAFAHgFAHQgBADgJAJQgfAbgfAhQgXAWgMAFQgHADgFAAQgIAAgHgGg");
	this.shape_14.setTransform(-59.6,79);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,61,108,0.667)").s().p("AAMCsQgKgIADgWQAIgwAkglQgEgCgQACQgJABgMgCIgUgGQgmgKgoAJIgLACIgKAAQgGgBgDgDQgFgEAAgFQAAgGAIgIIAegdIAagZQANgLAhgTQgjghgSgOQgfgagegGQgUgFgCgJQgBgFADgEQADgFAFgCQAHgCAMABQBDADBCgCQAhgBARgEIAPgDQAJAAAEAIQADAIgHAGQgEAEgKACQgVAGgyABIg/ABQA0AyAZASQANAIAAAIQgBAIgPAGQgxAVgkAqQAZgFAWAFQAXAGAKACQAZAFAXgGQALgDAFAAQAJAAAEAHQADAGgFALQgHASgNATIgTAdQgJATADAOIBUhSQAIgJAFgBQAMgFAFAIQAFAHgFAIIgKALQggAdggAhQgYAYgNAFQgHADgGAAQgIAAgGgGg");
	this.shape_15.setTransform(-61.5,79.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,61,108,0.502)").s().p("AAMCyQgKgIADgYQAIgxAlgmQgEgCgQACQgJABgNgCIgVgGQgngKgqAJIgKACIgLAAQgGgBgDgDQgFgEAAgFQAAgHAIgIIAfgeIAbgaQANgLAigUQgkgigSgPQghgagegHQgVgFgCgJQgBgEADgFQADgFAFgCQAHgDANABQBFAEBEgCQAigBASgEIAQgDQAJAAAEAIQACAIgHAGQgEAEgKACQgWAHgzABIhCABQA2AzAaATQAOAIgBAJQgBAIgPAGQgzAWglArQAagFAXAFIAiAJQAaAFAYgHQALgDAFAAQAJAAAFAHQADAGgGAMQgHATgNATIgUAeQgJATADAPIBWhVQAJgJAFgBQAMgFAFAIQAGAHgFAIQgCADgJAJQghAeghAiQgYAZgOAFQgHACgGAAQgJAAgGgFg");
	this.shape_16.setTransform(-63.4,80.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,61,108,0.333)").s().p("AAMC3QgKgJADgYQAJgzAlgmQgEgDgQADQgKABgNgDIgVgGQgpgKgrAJIgKADIgMAAQgFgCgEgDQgFgEAAgGQAAgHAJgIIAfgeIAcgbQAOgLAjgWQglgigUgQQghgbgggHQgVgFgCgJQgBgFAEgFQACgEAGgDQAHgDANABQBIAEBFgCQAkgBASgEIAQgDQAKAAADAIQADAIgHAGQgFAFgKACQgXAHg0ABIhEABQA3A0AcAUQAOAIgBAKQgBAIgQAGQg0AWgmAuQAagGAYAFIAkAJQAaAFAZgHQALgDAFAAQAKAAAEAHQAEAHgGAMQgIAUgNATIgVAgQgJATADAPIBZhXQAJgJAGgCQAMgFAFAIQAGAIgGAIQgBADgJAKQgiAegjAkQgZAZgOAFQgHADgGAAQgJAAgHgGg");
	this.shape_17.setTransform(-65.3,80.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,61,108,0.169)").s().p("AANC9QgLgJAEgZQAIg0AngoQgEgDgRADQgKABgOgDIgVgHQgrgKgrAKIgMACIgLAAQgGgBgEgDQgFgFAAgFQAAgHAJgJIAggfQAWgXAHgFQAOgMAkgVQgmgkgUgQQgigcghgHQgWgFgBgKQgBgFADgFQADgFAFgCQAIgDANABQBKADBHgBQAlgBATgFIARgDQAJAAAEAJQADAIgHAHQgFAEgKACQgYAIg2ABIhGAAQA5A3AcATQAPAJgBAKQgBAJgRAGQg1AXgnAuQAbgFAYAFQAZAHAMACQAbAFAZgHQAMgDAFAAQALAAAEAIQADAGgFANQgIAUgOAUIgVAgQgKAUADAQIBchaQAJgJAGgCQANgFAFAIQAGAIgGAJQgBADgKAJQgjAfgjAlQgaAagPAFQgIAEgGAAQgJAAgGgGg");
	this.shape_18.setTransform(-67.2,81.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,61,108,0)").s().p("AANDCQgLgJAEgZQAJg2AogpQgFgDgRADQgKABgOgDIgXgHQgrgKgtAKIgMACIgMAAQgGgBgEgEQgFgEAAgGQAAgHAJgJIAhggIAegdQAPgMAlgWQgnglgVgQQgjgdgigHQgWgGgCgKQgBgFADgFQADgFAGgCQAHgDAOABQBMADBKgBQAmgCATgEIARgDQAKAAAEAJQADAIgHAHQgFAFgLACQgYAHg4ABIhIABQA7A4AdAUQAPAJgBAKQgBAJgRAHQg3AXgpAwQAcgGAZAGQAaAHAMACQAcAGAagIQAMgDAGAAQAKAAAFAIQADAHgGANQgIAUgOAVIgWAhQgKAVADAQIBfhdQAJgJAGgCQANgFAGAIQAGAIgGAJQgBADgKAKQgkAgglAmQgaAbgPAFQgIADgHAAQgJAAgHgGg");
	this.shape_19.setTransform(-69.1,82);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13}]},23).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[]},1).wait(152));

	// lefthand
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF3942").s().p("AANAuQgHgBgEgDQgEgDgCgGQgBgFACgIQACgIACgIIACgEQAAgCgDgDQgHgJgNgBIgKABIgKAAQgFAAgFgEQgEgEgCgFQgBgFADgGQADgFAFgBIAFgBIAGABIAPgBQAUgBARANQAOAJAEAOQAEAMgHAMQAJgBAGADQAIAEACAHQABAFgDAGQgCAFgGABIgFABIgGAAIgMABIgGAAIgFAAg");
	this.shape_20.setTransform(50.5,-11.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF3942").s().p("AASBAQgJgCgHgEQgFgEgDgHQgCgIADgLQACgLAFgLIACgGQAAgDgEgFQgKgMgSgBIgOACIgNAAQgIgBgHgFQgGgFgCgHQgCgIAEgIQAEgHAIgCIAHAAIAJAAIAUgBQAcgCAYASQAUAOAFASQAFASgKAQQAMAAAJAEQALAFADAKQACAHgEAIQgEAHgIACQgDABgEAAIgIAAIgQABIgJAAIgHAAg");
	this.shape_21.setTransform(52.8,-9.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF3942").s().p("AAXBSQgLgCgJgFQgHgGgEgJQgDgKAEgOQAEgOAFgPIADgHQAAgEgFgGQgOgQgWgBIgSACIgRAAQgKgBgIgGQgIgHgDgJQgCgKAFgJQAFgKAJgCQAEgBAGAAIAKABQAJAAASgCQAkgCAfAXQAZARAHAYQAGAXgMAVQAPgBALAGQAOAGAEAMQADAKgGAJQgEAKgKACQgEACgGAAIgKAAIgVABIgLAAIgJAAg");
	this.shape_22.setTransform(55,-8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF3942").s().p("AAcBjQgOgBgKgHQgKgHgEgLQgDgMAEgRQAFgRAHgSIADgJQABgFgHgIQgRgTgcgBIgVACQgNABgIgBQgMgBgKgIQgKgIgDgLQgDgMAGgLQAGgMALgDIAMgBIAOABQAKABAVgDQAtgCAmAcQAdAVAJAdQAIAcgPAaQATgBAOAGQAQAHAFAQQADAMgGALQgGALgLAEQgFACgIAAIgNgBIgYABIgOABIgLgBg");
	this.shape_23.setTransform(57.2,-6.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF3942").s().p("AAhB1QgQgCgMgHQgMgJgFgNQgEgOAFgUQAFgUAJgVIAEgLQABgHgIgJQgVgWgggBIgZACQgQACgJgBQgOgCgMgJQgMgKgDgNQgEgOAHgNQAIgOANgDQAGgCAIABIAPABQANAAAZgDQA1gDAsAhQAkAZAKAiQAJAigRAeQAWgBAQAIQATAIAGATQAEANgIAOQgHANgNAEQgGACgJAAIgPAAIgdABIgQABIgNgBg");
	this.shape_24.setTransform(59.4,-4.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF3D45").s().p("AgnCSQgNgDgSgTQgTgXgDgNQgDgSALgOIAUgSIAbgWIAVgNIAOgLIADgHQACgFgBgHQgBgTgNgMQgEgEgIgEIgOgGQgTgMgDgSQgEgRALgNQALgOASAAQANABAPAJQAoAVAUAYQAcAgACAlQABATgGAUQgFAPgKAYQgMAcgJAOQgOAVgSALQgMAIgSAGQgNADgJAAIgIgBg");
	this.shape_25.setTransform(50.6,11.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF3D45").s().p("AgiCZIgIgCQgGgCgGgEIgNgMIgBgBQgNgMgFgJQgEgHgCgGQgBgGABgGIACgJQACgGAEgGQADgEAMgKIAEgDIAZgWIAHgFIANgJIANgMIAGgFQABgDAAgEIgBgEQgFgVgQgOQgFgFgIgEIgQgKIgJgIQgJgIgEgIIgDgKIgBgJQABgNAHgKIACgDQAJgLANgCIAJgBIAMACQAIADALAHIAKAIQAfAUATAVQAbAfAJAhIABAGIABAHQACAPgDAOIAAADQgDAQgJAYIgGANQgIASgIALQgHALgIAJQgIAIgJAGQgNAIgRAHIgKADQgIACgHAAIgDABIgCgBg");
	this.shape_26.setTransform(51.7,11.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF3D45").s().p("AgnCfQgGgBgHgEIgOgLIgBgBQgOgLgGgKQgEgGgBgGQgBgHABgGIACgKIAFgKQADgFALgKIADgEIAYgWIAHgEIAMgKIANgLIAFgHIACgEIgCgFQgIgVgSgQIgOgMIgRgMIgLgJQgKgKgEgJQgDgFgBgFQgBgFABgGQAAgOAIgLIADgFQAJgLAOgCQAFgBAFABIAMACQAJAEAKAHIANAJQAdAWAVAXQAcAfAOAiIACAGIACAHQAEAOgBAOIAAADQgBARgJAYIgFAOQgIARgJANQgHAKgJAJQgIAJgJAGQgNAKgRAHIgKAEQgIADgGAAIgGABIgIgCg");
	this.shape_27.setTransform(53,11.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF3D45").s().p("AgdCnQgGgBgIgEIgPgKIgBAAQgPgLgGgKQgEgGgBgHQgBgGAAgHIADgKQABgFADgFQADgGAKgJIADgEIAWgWIAHgEIAMgKIAMgLIAFgHIACgFIgDgFQgMgVgTgSIgPgNQgMgJgGgGIgMgKQgNgMgEgKQgCgEgBgGQgBgGAAgGQABgRAIgMIAEgFQAKgMAOgCIAMABQAFAAAHADQAIADALAIIANAKQAdAZAXAZQAeAfASAiIACAFIADAHQAIAPAAANIAAAEQACARgJAYIgFAPQgHAQgLAOQgHAKgJAKQgIAIgJAHQgOALgSAJIgIAEQgIADgHACIgGABIgIgBg");
	this.shape_28.setTransform(53.5,11.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF3D45").s().p("AgTCvQgHgBgJgDIgPgKIgBAAQgRgKgGgJQgEgGgBgHQgBgHABgHIACgKIAEgKQADgIAIgIIADgDIAVgWIAGgFIAMgJIALgMIAGgFIABgFIgDgFQgQgXgUgTIgQgPIgUgSIgNgMQgPgOgEgKIgDgLIgBgNQABgTAKgNIAEgHQALgMAPgBIAMABIAMADQAJAEALAKQAHAEAGAHQAcAaAaAbQAfAfAWAiIAEAGIAEAGQAKAPABANIABADQAEAUgIAXIgFAPQgHAQgMAPQgHAKgKAKIgRAQQgOAMgSAJIgJAFQgIAEgFADIgHABIgIAAg");
	this.shape_29.setTransform(54.1,11.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF3D45").s().p("AgaCzIgQgIIgBAAQgSgKgHgJQgDgGgBgHQgBgHABgIIACgKIADgKQADgIAHgIIADgEIAUgVIAFgFIALgKIALgLIAFgFIACgEIgEgGQgTgWgWgXIgRgQIgVgVIgPgNQgQgQgEgKQgDgFgBgHQgBgGABgIQABgVAKgPIAFgHQALgMAQgBQAGgBAHACQAGABAHADQAIAEAMAKIAOAMIA3A5QAgAgAbAiIAFAGIAFAHQAMAOADAMIABAEQAGAUgHAYIgGAPQgGAPgMAQIgSAVIgRAQQgPANgRALIgKAFQgIAFgHADIgFACIgIAAQgHAAgKgDg");
	this.shape_30.setTransform(54.6,12.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF3D45").s().p("AgRC7IgSgHQgUgKgHgIQgGgKABgSQAEgVAKgQQAIgMATgSQAUgUAGgJQgzg6g3g1QgSgSgFgKQgEgLAAgRQACgXAKgQQAOgUAUgBQANgBAOAHQAOAHAVAVIB7CAQAYAZAGAOQANAdgPAiQgLAYgbAdQgbAcggAVQgQAMgNABIgCAAQgHAAgIgDg");
	this.shape_31.setTransform(55.3,12.3);
	this.shape_31._off = true;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF3D45").s().p("AALCWIgEAAIgFgBIgHgBQgPgDgFgEQgCgDgBgFIABgJQADgMAIgJIACgBQAFgEAJgIIAAgDQALgKABgHIABgDIgVgTIgqgmIgggbIgTgSIgDgDQgOgPgGgKIgBgBQgHgMAAgPIAAAAQAAgMADgKQADgKAGgIIACgCQALgNAQgCIAHgBQAMAAAMAGIADACQAJAFAOALIANAMIAKAIQAWASAdARIARAKIAcARIALAHQAQANAIAIIACACQALANgBARIAAAQIgBAGQgBANgIANQgEAKgIAKIgLAOQgOAQgRANIgNAJQgMAJgMACIgIACIgIAAIgEAAg");
	this.shape_32.setTransform(55.4,7.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF3D45").s().p("AAFBxIABgDIAJgFIABAAQAEACAEgDIABgBQAFgFgGgEIgBgCIgYgPIgtgiQgTgPgPgNIgUgRIgEgEQgNgNgIgLIgBgCQgJgNgBgOIAAAAQgBgLAEgLQADgKAHgHIACgCQALgNARgBIAHAAQAMABAMAHIAEABQAJAGAOALIAOALIALAIIAiAAQAHgBAIAAIAeAHIAMADIAbAMIADABQAPAIADAOIAFAMIABAGQAEAKgDANQgCAKgFAKIgKARQgNARgRANIgNAJQgMAIgMAEIgIABIgMACIgDABIgEABQgCACgDAAIgNAEQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAg");
	this.shape_33.setTransform(56,4.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF3D45").s().p("AAfBkIgCgBQgOgEgPgHQgRgLgegUQgVgOgPgMIgVgTIgDgEQgNgLgJgMIgCgBQgLgOgCgNIAAAAQgCgMAEgLQAEgKAGgHIADgCQAMgLARAAIAHABQANABAMAIIADACIAYAQIAPALIAMAHQADgRAQgTQAFgHAHgDQAKgDAUgCIANAAQASADAOAAIADAAQASACAIAJIALAKIAEAFQAJALAAAMQACALgFAMQgCAIgFAJQgLAQgSAOIgNAKQgMAIgNACIgIACIgLADIgCADIgDADIgDAGQgFAJgBAGIAAACIACAEIAGALIABABIABAKIAAABIgCAAIgMgCg");
	this.shape_34.setTransform(57.1,1.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF3D45").s().p("AAhCCQgQgCgQgGQgRgHgigUQgXgNgOgMIgWgUIgEgEIgXgYIgCgCQgNgPgDgKIAAAAQgCgLAEgMQAEgKAHgHIADgCQAMgKASACIAHABQANACAMAIIAEACIAYARIAQALIANAGQgHgjALgkQAEgNAGgIQAIgIAWgIIAOgDQATgDAQgEIAEAAQAWgFAMAFQAGACAKAGIAGAEQAOAJAFAMQAEALgCANQgCAJgEAKQgKAUgRAOQgHAGgHAEQgMAGgNACIgIACQgIACgDADIgBAEIgCAFIABAJQgBAPACALIABAIIACAJQAEAQAAAMIABACQgBAOgFAHIgCACQgGAHgUAAIgEAAg");
	this.shape_35.setTransform(58.3,-2.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF3D45").s().p("AACCgQgRgFgmgTQgZgNgOgLQgIgGgSgSIgZgZQgRgRgEgMQgDgLAEgMQAFgLAKgGQANgJATADQAQADAQAJIAdATQARAMANADQgRgxAFg3QACgTAGgLQALgSAjgQIArgSQAagKAQAAQALABATAIQAUAIAIAMQAMATgKAaQgIAVgRAPQgSAQgWAEQgPADgDAFQgCAEABAIIAOA9QAIAmgDAZQgDAUgJAMQgNAPgdADIgNABQgOAAgOgDg");
	this.shape_36.setTransform(59.5,-7.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF3D45").s().p("AAiCHQgQgBgRgGQgRgHgigUQgYgNgOgMIgWgTIgDgEIgYgZIgCgBQgNgQgDgLIAAAAQgDgKAEgMQAEgKAHgHIADgCQANgJASACIAHABQAMACANAIIAEADIAYARIAQAKQAHAEAGACQgJglALgoQADgOAGgIQAJgJAVgJIAOgEIAkgIIAEgBQAXgFAMAEIARAHIAHAEQAPAJAFAMQAFALgCANQgCAJgEAKQgJAUgSAPQgGAFgHAEQgNAIgNADIgIABQgIABgCADIgCAEIgBAFIABAKQAAAQACALIABAJIADALQAEARAAANIAAADQgBAPgFAIIgDACQgHAHgVABIgEAAg");
	this.shape_37.setTransform(58.5,-3.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF3D45").s().p("AAhBtIgDgBQgPgDgPgHQgRgKgfgTQgWgOgPgNIgUgTIgEgEIgXgWIgBgCQgMgOgCgNQgCgLAEgMQADgKAHgHIADgCQAMgKASAAIAHABQAMACANAIIADACIAYAQIAPALIAMAGQAAgWAPgZQADgJAHgEQAKgFAVgEIANgBQASAAAPgBIADAAQAUAAAJAIIAMAJIAFAFQALAKACAMQACALgDAMQgDAJgFAJQgKATgSAMIgNAJQgMAIgNADIgIACQgHABgEADIgCACIgCAEIgCAIQgEAKAAAIIABAEIACAGIAFAQIABACQABAKgCAEIgBABQgCACgGAAIgKgBg");
	this.shape_38.setTransform(57.5,0.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF3D45").s().p("AAfBkQAGACgCACIAAAAIgBAAQgBAAgCgEgAAcBjIgBgBIADABIABABIgDgBgAAWBgIgCAAIABgBIAAAAIgVgLIgughQgUgOgPgNIgVgTIgDgDQgNgMgJgLIgBgBQgKgOgBgNIAAgBQgCgLAEgLQADgKAHgHIACgCQAMgMARAAIAHAAQAMABANAHIADACIAXARIAPALIALAHQAJgIASgKQAGgEAHgBIAeAAIANACQARAFANACIACABQARAFAFALIAIAMIADAFQAGALgBANQAAAKgFAKIgJAQQgMASgRAOIgNAJQgMAIgNADIgIABIgLADIgDACIgDACQgBADgDABQgIAGgCADIAGACIAAABIgFgCg");
	this.shape_39.setTransform(56.5,2.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF3D45").s().p("AgCB9QgCgBAAgEIABgEQADgGAFgEIABgBQAEAAAGgFIABgBQAHgHgEgFIABgCIgYgRIgsgjIghgcIgUgRIgDgDQgOgOgHgLIgBgBQgIgNgBgOIAAgBQgBgLAEgKQADgLAGgHIADgCQALgNAQgBIAHAAQAMAAAMAHIAEABQAJAGAOALIAOALIAKAIQAPAHAZAFQAHAAAIADQAMAFASAFIALAEIAbAPIACACQAOAKACAOIADAMIAAAHQADALgFANQgDAKgGALIgKAPQgNARgRANIgNAJQgNAJgLADIgIABIgMABIgEABIgEABIgHABIgKAAIgDAAg");
	this.shape_40.setTransform(55.8,5.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF3D45").s().p("AAHCdIgEgBIgDgBIgJgBQgRgFgFgEQgCgEgBgFIABgKQADgNAIgLIACgBQAGgFAJgJIADgDQAJgLACgHIACgDIgVgUIgpgmIgggcIgTgSIgDgDQgOgPgGgKIgBgBQgGgLAAgQIAAAAQAAgMADgKQADgKAGgIIACgCQALgNAQgDIAHgBQAMABAMAGIADABQAJAFANALIAOAMIAJAIQAYAVAeAVIARALIAcATIALAHQAQAOAIAJIABACQALANgCATIgBAQIgBAHQgDAMgHAOQgFAJgIAKIgMAPQgOAPgRANIgNAJQgMAIgMADIgIACIgGAAIgGAAg");
	this.shape_41.setTransform(55.4,8.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF3D45").s().p("AAaC7IgTgGQgPgGgKgHIgDgCQgIgJgCgPQgDgSAFgOIABgFQADgKAIgOQAIgNADgKIADgHIgngqQgkgogigjQgRgTgFgMQgGgMAAgPIAAgBQgBgYAJgQQAHgNAKgGQAIgEAJgBQANAAAOAHQALAGATAYIADADQAYAdAYAaIA7A6IAVATIAaAWIALAMQAMARACATQABAIgBAIQAAARgNAYIgFAKQgJARgPARQgKAMgNAJQgIAHgIAEQgIADgIAAIgCABQgHAAgJgDg");
	this.shape_42.setTransform(56.7,11.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF3D45").s().p("ABBC8IgUgFQgRgGgMgFIgDgCQgMgIgDgMQgIgPgCgMIgCgFQgBgJABgOQADgNgCgKIgBgHQgYgZgQgTQgmgtgfgkQgRgUgGgNQgHgNgBgOIAAgBQgDgZAIgRQAFgOALgGQAIgFAJAAQAOgBAOAJQAIAEAUAeIADADQAXAgAbAbQAhAjAcAYIAXASQAQAMANAIIAOAKQAOANAKAOIAGANQAIAPgEAXIgBAKQgEATgLATQgIAOgNAKQgIAHgJAFQgIADgIABIgEAAIgPgBg");
	this.shape_43.setTransform(58.7,11.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF3D45").s().p("ABiC8IgVgDIgggJIgDgCQgOgGgIgJQgPgMgGgLIgEgEQgFgJgHgOQgDgMgHgMIgDgHQgbgZgPgUIhFhWQgQgVgHgOQgIgPgCgNIAAgBQgFgaAGgRQAEgPAMgHQAIgFAKgBQAOAAAOAKQAGAEAUAiIACAEQAWAjAdAbQAlAmAcAWIAYAQQASAMAPAHQAIAFAJADIAiASQAHAFAFAFQARAMAEAXIACALQADAUgIAWQgHAQgNALQgIAIgKAEQgHAEgJAAIgJABIgKgBg");
	this.shape_44.setTransform(61.4,10.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF3D45").s().p("ACBC8IgXgCIgigHIgEgCQgQgEgMgGQgVgJgNgKIgGgEQgJgIgNgOIgWgYIgFgHQgegbgPgUQgog1gbgnQgPgVgJgPQgJgRgCgMIAAAAQgIgcAEgSQADgPAMgIQAKgFAJgBQAOgBAPAMQAEADAUAnIACAFQAVAmAeAcQArAoAZAVIAaAPQAUALARAGQAJADALACQATAGAaADIASAHQAYAKANAXIAGAKQAJAWgGAYQgFASgMANQgIAIgLAFQgHADgJABIgOACIgFgBg");
	this.shape_45.setTransform(64.3,9.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF3D45").s().p("ABhC2Qg8gKgigPQgXgMgpgiQgoghgPgWQhdiCgLgjQgTg4AagQQAZgPAXAUQADACAUAtQAUAtAhAeQAuArAcAQQAhAZAhAHQAXAFA3gCQAxADAdAfQAaAbgEAhQgFAigeAOQgOAGgZAAQgYAAgigGg");
	this.shape_46.setTransform(67.4,9.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF3C45").s().p("ABoCYIgHAAQgvgEgegFQgVgGgigUIgHgFQgngYgQgQQgUgTgQgTIgfgmQgPgUgJgQQgMgXgDgNQgJgiAHgTQAEgKAKgGQAXgNAYAOIACAEQAIAIAOAZQAMARANAOIAZAXIADACIATARIAWATIAHAGQALAHAIACQAPAFASABIAFAAIAogBIAcAAIAIABQAgAEAXAQIAOALIAMANQAOAUAAAXIgBAHQgDAZgUAOQgGAEgJACQgSAHgjAAIgNAAg");
	this.shape_47.setTransform(65.2,9.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF3C45").s().p("AgQBtIgHgCQgkgOgSgKQgWgMgQgRQgSgRgPgRQgQgUgIgNQgMgVgCgPQgHghAKgSQAEgJAKgGQAVgMAZAKIACADQAKAEAOATIAaAVQAQAIAGAFIABAAQACAEAJAHIAMAMIAEADQAGADAHABQAIABAPgDIAFgBQAPgDAXgBQAMgBAPABIAHABQAeAEAYAQIAOAKIALAKQAQARADAVIAAAHQABAXgPAPQgEAEgHAEQgQAMglAGIgGACIhGAEQgWgBgegMg");
	this.shape_48.setTransform(63,10.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF3C45").s().p("AAABhIgFAAQgjgFgSgEQgYgFgRgNQgTgNgQgRQgRgSgHgPQgLgSgBgQQgEgfALgSQAFgHAKgGQAUgMAZAFIABACQANACAOAMQAQAGALAGQAPACACAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAAAIgBABIAEADIACAFIAAgBQACABAEgCQAEgFANgFIADgCQANgHAVgBQAMgBAPABIAHABQAbAEAZAPIAOAKIAMAKQAQAQAGATIABAFQAFAUgKAQQgCAFgFAEQgKARgdANIgGADIg+ATQgLACgOAAIgagCg");
	this.shape_49.setTransform(61,11.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF3B45").s().p("AhUBoQgTgKgSgRQgRgQgHgOQgJgTAAgSQgCgbANgRQAFgHAKgFQASgLAagBIABACQAOgCAOAHQASAAALACQATgDgFgHIgBgBQgKgHAEAEIgHgCIgEgEIgCgIQAAgJAKgIIAEgDQANgKARgCQALgBAPABIAGABQAaAFAZAOIAOAJIANAJQARAOAIARIADAFQAIATgEAQQgBAFgCAFQgFAVgWAUIgEAEIg3AiQgTAJgdAFIgHABQgfAFgUABIgLABQgSAAgOgHg");
	this.shape_50.setTransform(59,10.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF3B45").s().p("AhGCJQgUgHgTgPQgSgPgHgOQgIgRABgUQAAgbAQgQQAFgGAKgEQARgKAagFIABABQAQgFAOAAIAfgHQARgIgKgNIgBgCQgPgMACADIgRgKIgIgGQgFgGgEgJQgGgOAJgMIADgEQAMgMASgDQAKgCAMACIAGABQAYAFAZAOIAPAJIAMAHQATAMALAPIADAEQAMARACATQABAGAAAGQABAXgPAbIgDAGQgPAVghAbQgSAOgbANIgHADQgcAPgWAHQgQAHgNAAQgJAAgHgDg");
	this.shape_51.setTransform(57.2,10.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF3A45").s().p("Ag8CpQgUgDgVgOQgTgOgGgNQgHgQACgVQADgaARgQQANgMAtgRQAwgSAPgLQAWgPgTgUIgVgQIgcgRQgQgLgLgTQgOgXALgQQALgQAQgDQAMgCASAEQAUAFAZANIAcAOQAVAMAQAPQAVATAHAdQAHAggKAlQgKAphJA9QhAA6ghAAIgGgBg");
	this.shape_52.setTransform(55.7,10);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF3A45").s().p("AgeCKQgGgBgHgCQgMgEgIgGIgGgHQgIgKgEgPIgBgEQgDgVAJgQIAAgCQAEgMAXgOIAIgHIAKgIIAPgJQAJgEADgDQALgLgRgOIgLgFQgNgHgCABIgdgMQgTgGgLgPIgBgBQgLgNAAgLIAAgFIADgIIACgCQAJgOAQgFQAMgEASABQAWABAZAIQAGABAUAHQAXAHARAKQAXAKAIAUIACADQAJAZAAAiQAAAJgEAIQgHAfglApIgFAHQgbAegTAOIgDADQgIAGgHACIgIAAQgGAAgHgBg");
	this.shape_53.setTransform(59.2,5.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF3A45").s().p("AATBxIgIgEQgJgHgHgLIgCgDQgIgRAAgRIgBgCQgFgOAQgQIADgIQACgFAAgEIACgIQABAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAQAFgGgSgJIgMgCQgMgFgEACIgegGQgXgCgLgMIgBgBQgNgKgCgMIgBgFIADgIIABgDQAIgNARgIQAMgEASgCQAYgDAYADQAJgCARAEQAYABASAFQAbACAKAOIACACQALATAJAdQACAHAAAIQAGAbgVAjIgCAGQgOAbgKARIgBADQgFAJgFAEQgGAFgKADQgEACgGAAIgEAAQgJAAgIgCg");
	this.shape_54.setTransform(60,1.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF3A45").s().p("ABVBnQgMgDgNgIIgDgCQgMgNgKgRIgBgCQgOgRAIgQIgBgKQgBgGgDgEQgFgGgEgBIgIABIgWgFIgOAAQgMgBgFACQgRAAgPgBQgbACgKgJIgBAAQgPgJgEgLIgBgFIABgJIABgDQAGgMAUgKQALgHASgEQAZgHAXgCQAMgEARgBQAXgEATAAQAfgFALAIIADABQANAMATAYQADAGADAHQATAYgEAcIABAGIgCArIABAEIgDASQgDAJgHAHQgEAEgFADQgJAGgLAAIgKgBg");
	this.shape_55.setTransform(61.7,-3.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF3A45").s().p("ABqBjIgEgBQgSgIgTgSIgCgCQgWgUgBgRQgBgHgEgFQgEgGgHgFQgMgIgIAAIgRAGQgNADgUABIgPAEQgLABgHACIghAFQgfAGgLgGIgBAAQgRgGgFgLIgCgGQgBgCACgFIABgDQAEgLAVgNQAMgIARgHQAagLAXgHQAOgHAPgEIAtgPQAjgNALADIADAAQAPAFAdATIALAKQAgAVANAYIAEAGQANATAIAWIABAEQAEAMABAKQABAOgFALQgDAHgEAGQgIAKgNAEIgLACQgOAAgRgFg");
	this.shape_56.setTransform(65.6,-8.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF3A45").s().p("ACTBrQgagBgggYQgfgVgIgTQgIgPgUgKQgSgJgMACIhXAeQhRAcgSgDQgUgEgHgLQgGgIAEgLQAFgRAygaQCYhWAYgIQATgFA5AYQAyAVAfAVQAdATARAaQATAfgFAdQgFAdgWALQgPAIgXAAIgNgBg");
	this.shape_57.setTransform(69.8,-13.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF3A45").s().p("ABoBSIgEgCQgegNgMgLQgKgKgVgHIgBAAIgMgDQgLgDgHACIgtAMIgqALIgFABQgWAFgSADQgoAIgMgFQgJgDgGgEQgGgFgDgGQgCgDAAgDQgBgGABgGQAEgJANgLQAOgLAWgJIAOgGQAggRAfgMIA8gcIAhgRQALgEAVAEQAQABAVAHQAXAFASAHIAhAOQARAJAOAMQAHAGAHAIQATAXAAAZQgBANgEAJQgDAKgIAIQgIAGgMAFQgJAEgOACIgDABIgLAAQgSAAgVgHg");
	this.shape_58.setTransform(67.6,-12.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF3A45").s().p("Ai3BHQgIgEgFgFQgFgFgDgGIgBgGQgBgGACgFQADgJAMgKQAOgLAVgHIANgFQAdgOAhgIQAmgNAUgJQAVgKAKgIQAKgFATAAQAOgBASADQAVABAQADIAeAHQAQAFAOAIQAIAFAGAGQAVASADAUQACAKgCAIQABAKgFAKQgFAIgKAHQgIAIgMAEIgEACQgVAIgbAAIgFgBQgegDgPgFQgMgFgVgDIgCAAIgNgBQgKgCgIABQgWAGgXADIgqAIIgEAAQgWADgTgBIgUABQgVAAgJgFg");
	this.shape_59.setTransform(65.4,-10.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF3A45").s().p("AiFBNQgkgCgMgKQgIgEgEgGQgEgGgCgGIgBgHQAAgFACgFQADgJALgJQANgIAUgHIANgEQAagKAjgFQAlgIASgIQASgIALgLQAJgGARgDQANgEAQgBQASgDANgBIAbgBQAPACAPAFQAIACAGAEQAWAMAHARQAEAIABAIQAFAKgDAMQgCAHgIALQgHAKgKAIIgEADQgUANgbAIIgEABQgeAGgSACIglABIgCAAIgPAAQgJgBgIABQgWAFgXACIgqADIgFAAIgFABQgSAAgRgEg");
	this.shape_60.setTransform(63.6,-8.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF3A45").s().p("AhaBdIgEAAQgVgCgVgHQghgHgMgMQgHgGgDgGQgDgHgCgGIAAgHIACgJQADgJAKgIQANgIAUgFIALgDQAXgGAlgBQAlgEAPgHQAQgGAMgOQAJgHANgFQANgIAMgEIAbgNQAKgEAPgEQANgBAQAAQAHABAGACQAXAFALANQAGAGADAHQAKAKAAAOQAAALgGAOQgFALgJAKIgDAEQgTAUgcAQIgEACQgdAPgWAJQgRAHgXADIgCABIgPABIgRABQgVADgZABIgqgBg");
	this.shape_61.setTransform(62,-6.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF3A45").s().p("AgzBwIgpgFIgFAAQgUgFgVgJQgfgMgMgPQgHgHgCgHQgCgHgBgHIAAgGIADgJQADgIAJgIQAMgIASgDIAMgBQATgCAnACQAlABAOgGQALgFAQgQIARgRIAVgSIAWgVQAHgIAPgHQAMgFAQgDIAOgCQAYgBAPAJQAIAEAGAGQANAKADAQQADANgEAQQgEAQgHAOIgDAFQgTAWgbAaIgEADQgdAZgZAPQgUAMgXAHIgDABIgQADIgRABIgZACIgVgBg");
	this.shape_62.setTransform(60.4,-4.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF3A45").s().p("Ag2CGIgugKQgUgHgWgMQgqgYgGgaQgGgcATgQQARgLAYAAIA5AIQAlAFALgEQAMgFAbgkQAagkAIgSQAJgVAmgSQAsgUAgATQAfASgFAsQgCAXgIASQgSAdgcAiQg4BFg1AUQgTAHgZAAQgQAAgUgCg");
	this.shape_63.setTransform(58.9,-3.5);

	this.instance_2 = new lib.handbookleft();
	this.instance_2.setTransform(44,1,1,1,0,0,0,4.4,18.2);
	this.instance_2._off = true;

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF3A45").s().p("AAsC1Qi5iEgtiRQgXhUAbgRQAfgZAZAtQABAWA+BgQBdBSBZAvIAnAVQBIAfg7BEQgVARgbAAQgiAAgtgag");
	this.shape_64.setTransform(65.4,11.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF3A45").s().p("Ai8DvQgDgvAcgOQBdg1BDhZQA3hOgKiCQADhUBAgGQBGAGAGBPQASBohHCHQh8CRieA4QgggEgGgUg");
	this.shape_65.setTransform(62.2,-20.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF3A45").s().p("AhDDNQghhPAciHQAUiKBLhPQASgTAVABQAoAMgaA3QgtA5AACeIATCPQgCAxgkAOIgMABQgnAAgcgog");
	this.shape_66.setTransform(-52.5,16);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF3A45").s().p("AhDDNQghhPAciHQAUiKBLhPQASgTAWABQAnAMgaA3QgsA5gBCeIATCPQgCAxgjAOIgNABQgnAAgcgog");
	this.shape_67.setTransform(-52.5,15.2);
	this.shape_67._off = true;

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF3A45").s().p("AhDDNQghhPAciHQAUiKBLhPQASgTAWABQAnAMgaA3QgsA5gBCeIATCPQgCAxgjAOIgNABQgoAAgbgog");
	this.shape_68.setTransform(-52.5,12.7);
	this.shape_68._off = true;

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF3A45").s().p("AAKCQQgSgGgMgIQgSgLgOgVQgJgOgMgcQgKgYgFgPQgGgUABgTQACglAcggQAUgYAogVQAPgJANgBQASAAALAOQALANgEARQgDASgTAMIgOAGQgIAEgEAEQgNAMgBATQgBAHACAFIADAHIAOALIAVANIAbAWIAUASQALAOgDASQgDANgTAXQgSATgNADIgIABQgJAAgNgDg");
	this.shape_69.setTransform(-56.1,-2.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF3A45").s().p("AgVB3QgigIgRgmQgHgVgGgcQgLg2AGgkQAHgmAKgKQAHgGAUAAQAOAAAKASIAHASIARCFIArg4QAIgGAJgDQATgHAIAOQAIAMgKAYQgEANgHAJIgvA8QgQAMgRAAQgIAAgJgCg");
	this.shape_70.setTransform(-58.1,-10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20}]},9).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},10).to({state:[{t:this.shape_25}]},7).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},5).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},4).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},7).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},6).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},17).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},6).to({state:[]},6).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(36).to({_off:false},0).wait(1).to({_off:true},1).wait(10).to({_off:false},0).wait(6).to({_off:true},1).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({rotation:14.2,y:1.1},6).to({_off:true},1).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.shape_67).wait(121).to({_off:false},0).wait(1).to({y:14.4},0).wait(1).to({y:13.6},0).to({_off:true},1).wait(2).to({_off:false,y:11.1},0).to({_off:true},1).wait(2).to({_off:false,y:13.6},0).wait(1).to({y:14.4},0).wait(1).to({y:15.2},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({y:14.4},0).wait(1).to({y:13.6},0).to({_off:true},1).wait(2).to({_off:false,y:11.1},0).to({_off:true},1).wait(2).to({_off:false,y:13.6},0).wait(1).to({y:14.4},0).wait(1).to({y:15.2},0).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.shape_68).wait(124).to({_off:false},0).wait(1).to({y:11.9},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({y:12.7},0).to({_off:true},1).wait(7).to({_off:false},0).wait(1).to({y:11.9},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({y:12.7},0).to({_off:true},1).wait(41));

	// righthand
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF3942").s().p("AgdA5QgNgHgHgIQgJgLAAgMQAAgJAGgJQAFgFAHgCQAJgCAIAIQAGAEADAKQACAHACABQADABAEgBIADgFQAFgHAHgOIAEgNIABgIQABgMAFgMQADgJAFgDQAEgDAFABQAFAAAEADQAHAGACANQAEAagQAeQgSAigaAMQgHADgGAAQgHAAgLgHg");
	this.shape_71.setTransform(-49,-13.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF3942").s().p("AgoBNQgRgKgJgLQgMgPAAgPQAAgMAHgMQAHgIAJgDQANgCAKAKQAIAGAEAOQADAJADACQAEACAGgDIAEgGQAHgJAJgUQAFgLABgGQABgDAAgIQACgQAGgQQAEgMAHgEQAFgEAGABQAHABAFAEQAKAHADARQAGAkgWAoQgYAugkAQQgJAEgJAAQgJAAgPgJg");
	this.shape_72.setTransform(-51,-11.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF3942").s().p("AgUBsQgMAAgSgLQgWgNgLgNQgPgTAAgTQAAgPAJgPQAJgLALgDQAQgEANAOQAKAIAFASQADAKAFADQAFACAGgDQAEgDADgFQAIgLAMgZQAGgPABgHIABgOQACgUAIgVQAFgPAIgFQAHgEAIABQAJABAGAFQAMAJAEAWQAHAtgbAyQgeA6gtAUQgLAFgKAAIgCAAg");
	this.shape_73.setTransform(-53,-9.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF3942").s().p("AgZCCQgNgBgXgMQgagQgNgQQgTgWAAgYQAAgRAMgSQAKgOAOgEQASgEAQAQQAMAKAGAWQAEAMAGADQAGADAHgEQAFgDAEgHQAKgNAOgeQAHgSABgIQACgGAAgLQACgZAJgYQAHgSAKgGQAHgFALABQAKABAIAGQAOALAFAbQAIA1ggA+QgkBFg3AYQgNAGgNAAIgCAAg");
	this.shape_74.setTransform(-55,-6.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF3942").s().p("AgdCYQgQgBgagPQgegSgQgTQgWgaAAgbQAAgVAOgVQAMgQAQgEQAWgFASASQAOAMAHAaQAFAOAGAEQAHADAJgEQAGgEAEgIQAMgPAQgkQAJgVABgJIADgUQACgdALgcQAHgVAMgHQAJgGAMABQAMABAJAIQAQAMAGAfQAKA/gmBIQgqBRhAAcQgRAHgOAAIgCAAg");
	this.shape_75.setTransform(-57,-4.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF3A45").s().p("ABdDYQgcgCgVgcIgSgdIgSgTQgIgJgMgUIgVghQgqhAgSgfQgeg4gOgxQgIgdAFgQQADgMAMgPQAKgMALgEQAYgJAaATQAUAQAPAcQAIARALAmQAXBDATArQAIAWAJAOQAIAPAjAnQAcAgAJAYQAGAUgEAOQgFAOgOAIQgMAHgNAAIgEAAg");
	this.shape_76.setTransform(-61.4,-37.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF3A45").s().p("ABEDDQgKgFgKgJIgKgJIgLgMIgTgOQgFgDgDgGIgOgOIgLgMIgOgQIgNgSQgJgOgHgOQgQgcgIgVIgBgDQgKgXgHgZIgDgLQgDgHgFgGQgJgPgGgQIgDgHQgHgWACgPIAAgBQABgMALgPIAIgKQAGgFAGgDQAIgDAJgBQAPgBAOAJIAFACQANAIAMAOQAHAIAGAKIALASQAIAOAGASIAIATIAKAbIAUBCIAIAbIAGAHIAOANQAKAGAMAMIALAHIAMALQANAKAIAMQAFAJADAIIABAEQAEAMgCALIgCAIQgDAKgKAIIgGAEQgLAHgNACIgDAAIgHABQgMAAgKgGg");
	this.shape_77.setTransform(-61.1,-34.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF3A45").s().p("ABIC4QgKgCgLgGIgKgGQgGgDgGgFQgHgBgNgIQgGgBgEgFIgQgLIgMgJQgIgHgHgHQgJgIgGgJQgJgNgGgPQgOgdgEgZIgBgDQgHgVgEgcIgDgKQgDgHgHgGQgKgNgIgOIgEgHQgJgVAAgQIAAAAQgBgOAJgPIAIgKQAGgFAGgEQAIgDAJgCQAQgCANAGIAGACQANAHANANIAQAQIANAQQAKANAHAQQAGAKAEAJQAFANAEAOQAKAnAFAeIAFAbIAHAEIAPAIQAMADAMAIIALAEIANAIQAOAIAJALQAGAIADAIIACAEQADAMgBALIgDAIQgEAKgKAJIgFAEQgMAIgMADIgDABQgIACgIAAQgGAAgGgCg");
	this.shape_78.setTransform(-60.8,-31.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF3A45").s().p("ABNCtQgKAAgMgCIgLgDIgNgEQgIABgNgFQgHAAgEgDQgJgDgJgEIgNgIQgKgFgHgGQgKgIgHgIQgJgNgFgRQgLgbgBgcIAAgEQgFgWgBgdIgCgLQgDgGgJgFQgMgKgKgOIgEgHQgMgTgBgRIgBgBQgCgOAIgPIAHgLQAFgFAHgEQAHgEAKgCQAQgEANAFIAHABQANAGAPALIARAPIAPAOQANAMAHAOQAHAJAEAJQAGANADAPQAJAnACAgIACAbIAHADIAQADQAOgCALAFIAMABIAPAEQAPAFAKALQAHAHADAJIACAEQAEAMgDALIgDAJQgEAJgKAJIgGAFQgKAIgMAFIgDABQgNAGgJAAIgFAAg");
	this.shape_79.setTransform(-60.6,-28);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF3A45").s().p("AAMCjQgIABgFgBQgKgBgKgDIgPgFQgKgEgIgFQgLgHgHgIQgJgNgEgSQgJgaACggIAAgEQgBgVACgfQAAgHgCgFQgDgGgLgEQgOgIgLgNIgGgGQgNgSgDgRIgBgCQgEgPAHgPQACgHAFgFQAEgFAHgEQAHgFAKgDQARgFANADIAHACQANAEARAKIATANIAQAMQAPALAJANQAIAIAEAJQAGAMADARQAHAngCAhIgBAbIAJABIARgCQAQgFAKABIANgCQAIAAAIABQAQACALAKQAIAHAEAKIABADQAEAMgDALIgDAJQgFAJgKAKIgGAFQgKAJgLAGIgDABQgQALgJAAIgYAEIgMACIgNgBQgHACgGAAIgJgBg");
	this.shape_80.setTransform(-60.4,-24.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF3A45").s().p("AgWCiIgRgDQgLgDgJgEQgMgGgHgIQgJgNgDgSQgGgbAFgiIAAgEQACgVAFgiQAAgHgBgEQgDgGgNgEQgQgFgOgMIgGgGQgPgQgFgTIgBgBQgFgRAEgPQADgHAEgFQAEgGAHgEQAHgFAKgEQASgGAMABIAJABQANADARAJIAWALIASAKQAPAKAMALQAJAIAFAJQAFALADASQAFAogFAjIgEAbIAJgBIATgHQARgJALgDIANgFQAJgCAIAAQASAAAMAJQAIAGAEAKIABADQAFAMgDALIgFAKQgFAJgKAKIgFAFQgKAJgLAIIgCACQgRAOgIACQgKAFgPAFIgNAFIgOADQgMAFgLABQgJADgFAAIgHAAIgOAAg");
	this.shape_81.setTransform(-60.2,-20.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF3A45").s().p("AgqCiQgdgDgNgPQgJgMgDgUQgDgZAIgmIAOg9QABgIgCgEQgDgFgPgDQgWgEgSgQQgRgPgIgVQgKgaAMgTQAIgMAUgIQATgIALgBQAQAAAaAKIArASQAjAQALASQAGALACATQAFA3gRAxQANgDARgMIAdgTQAQgJAQgDQATgDANAJQAKAGAFALQAEAMgDALQgEAMgRARIgZAZQgSASgIAGQgOALgZANQgmATgRAFQgOADgOAAIgNgBg");
	this.shape_82.setTransform(-60,-15.8);
	this.shape_82._off = true;

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF3A45").s().p("AgyCNIgEgCQgEgCgDgGIgGgLIgDgGQgEgFAAgGIgCgKIgCgWIAAgEQgCgUABgkIAAgGIgCgFQgEgFgNgEQgQgFgMgLIgJgIQgQgSgEgVQgHgXAMgTQAIgKARgIIACgCQAPgGAKgCQAOgCAXAGIAmALQAeAKALAMQAGAIADANQAIAmgIAjIgBAEQAMgEAPgLIAagSIADgCQANgIAOgCQAJgBAIABQAGABAGAEQALAGAFAMIACADQADALgBALQgBAEgEAGQgEAJgJAKQgJAMgNAMIgCACQgSASgJAHQgQANgYAPQgWAOgRAJIgKAHIgIAEQgIAEgIABIgGAAIgGAAQgIAAgGgCg");
	this.shape_83.setTransform(-59.8,-11.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF3A45").s().p("AgeCBIgJgGIgFgDQgGgCgBgEQgEgDgCgEIgJgUIAAgDQgJgUgFghIgCgFIgCgGQgFgHgMgFQgPgIgLgKIgHgJQgOgUgBgWQgEgUAMgRQAHgKAPgIIACgBQANgHAJgDQANgEATADIAhADQAbAFAJAFQAGAFAEAIQALAXgBAVIAAADQALgFAMgJIAYgQIADgCQAMgHAMgCQAIgCAHABQAHABAFADQALAGAHAMIABADQAFALgBALQAAAGgCAIQgDALgIAKQgIALgOAMIgCACIgcAaQgRAPgXAQIgmAbQgEAFAAAEIgDAHQgCAFgFAEIgCACIgMAIIgCABIgCAAIgFgBg");
	this.shape_84.setTransform(-59.7,-7.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF3A45").s().p("AgcCFQgFgBgFgDQgHgFgHgMIgCgDQgPgTgMgfIgDgFIgDgFQgGgIgJgGQgPgLgJgMIgHgLQgMgUADgXQgBgRAMgQQAHgJALgIIACgBIATgKQALgGAQgBIAcgEIAigCQAEABAFADQAOAJAGAHIAAABIAUgNIAVgPIADgCQALgGALgCIAOAAIAKADQANAFAHANIACADQAFAKABAMIgCAOQgBANgHAKQgHALgPAPIgCACIgdAaQgSARgWASIglAfQgBAEADAHIACAJQACAHAAAFIAAAFIgDASIgCADQgCAFgDABIgKAAIgHAAIgEAAQgFAAgCgBg");
	this.shape_85.setTransform(-59.6,-3.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF3A45").s().p("AgSCgQgJgCgMgLIgCgDQgWgTgSgbIgEgGIgEgFIgPgPQgOgOgIgNIgFgMQgKgZAGgVQACgOAMgPQAGgHAJgIIACgCIAQgLQAKgHAMgFIAXgLIAdgOIAMgFQAPgFANgHIABAAIARgOQAKgJAIgEIADgCQAKgFAJgBIAMgBIAKACQANAFAJANIABADQAHAKABANQABAHAAAHQAAAPgGALQgGAKgQARIgCACIgeAdIgoAkIgkAjQACAFAGAIIAIAMQAHAJADAHIAEAHQAFAMAAAPIAAAHQgBAIgFAEQgEADgKAEIgJACQgJAEgDgBIgFAAIgJgBg");
	this.shape_86.setTransform(-59.5,-0.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF3A45").s().p("AAAC+QgLgBgRgMQgggVgbgcQgbgdgKgYQgPgiAMgdQAHgOAXgZIB7iAQAWgVANgHQAOgHANABQAUABANAUQAMAQABAXQAAARgEALQgEAKgSASQg4A1g0A6QAHAJAUAUQATASAIAMQAKAQADAVQADASgHAKQgGAIgVAKIgSAHQgIADgHAAIgDAAg");
	this.shape_87.setTransform(-59.5,2.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF3A45").s().p("AAACtIgFAAQgKgCgLgJIgGgGQgRgPgOgSQgIgKgIgMIgNgVIgFgJQgEgHgGgFIgIgLQgHgMgDgMQgFgTAFgQQADgRATgWIAEgEIATgSIAVgSQAOgLAQgKIAdgWIAhgWIAIgFQALgIAHgCIAFgCQAMgCALADQARAFAKAVQAFAIABAKQAEAIADAIIABAFQACAJgCAGQgBADgDAFIgJANIgDAEIgNATIgLARIgNARIgWAWIgVAXIgGAHQACAIAJAKIAHALQAHAKAEAJIAEAJQAGAPAAASIgBAHQgCALgHAHQgEAEgIAEIgPAGIgSAFIgFABIgFgBg");
	this.shape_88.setTransform(-60.3,0.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF3A45").s().p("AABCgIgIgBIgGgBQgJgEgJgKIgGgIQgOgPgJgVQgGgLgFgNQgGgLgEgMIgEgKQgEgHgHgEIgJgKQgJgKgFgMQgIgQADgTIAAAAQAAgTASgVIAEgEQAJgJALgIIAXgRQAOgJASgGIAggOQAUgGAOgHIAIgCQAKgDAGABIAEAAQAKABAIAGQAOAJAHAVQADAJABALIAJAKIADADQADAGAAAEQABABgCAEQAAACgCAFIgBAEIgEAQIgGARQgDAJgHAJQgIAMgOALIgVAYIgHAHQAAAJAFAIIADALQAEAKAAAIIABAJQAAAOgDAQIgCAFQgEAKgIAFQgFAEgIADIgQAEQgJACgFAAIgDAAg");
	this.shape_89.setTransform(-61.1,-2.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF3A45").s().p("AgMCXIgJgDIgGgCQgIgGgIgLIgEgIQgLgSgFgXIgHgaIgFgZIgDgLQgEgGgJgEIgLgIQgKgHgGgMQgKgRgBgTIAAgBQgCgUARgVIADgEQAJgJAMgIIAZgOQAPgHAUgCIAigGIAkgEIAHABQAJAAAGAGIADACQAIAFAGAIQAKANADAVQACAKAAAKIANAFIADABIAHAFQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQADAAABADIACACQAEAEABAKQABAHgCAKQgBAKgGAKQgHAJgPAPIgWAYIgHAHQgDAJACAIIgBAKQAAAKgDAIIgDAIIgLAaIgEAFQgGAHgIAFIgPAEIgPADIgJABIgHgBg");
	this.shape_90.setTransform(-61.3,-4.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF3A45").s().p("AghCUIgJgFIgFgDQgIgIgFgMIgDgJQgIgUgBgZIgCgcIgBgbQgBgHgCgEQgDgEgMgEIgLgGQgLgIgJgLQgMgRgDgTIAAgBQgFgWAPgVIAEgEQAIgJAOgHQAQgJAKgEQAQgFAWADIAmABQAWADAOAEIAHADQAIAEAEAKIADAEQAFAIAEALQAGAQAAAWQABAKgCAKQAIACAJgBIAFgBIAKgBIAFgCQAGgCAFABIAEAAQAJABAFAKQAEAHAAALQAAAKgEAJQgHALgPAQIgXAYIgHAHQgHAKAAAHIgFAKQgEAJgHAIIgGAHIgTAWIgGAEQgIAGgJADIgOADIgPABQgMAAgGgCg");
	this.shape_91.setTransform(-60.9,-8.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF3A45").s().p("AgkCaQgLgBgGgEIgJgFIgEgFQgIgJgDgOIgDgKQgEgVADgcIADgdIACgcQAAgHgBgEQgEgGgNgDQgGgCgGgEQgNgGgKgLQgPgQgGgTIAAgBQgHgZAOgTIADgEQAJgJAOgHQASgJALgCQAQgDAYAHIAoAJQAYAIAOAIIAGAGQAHAIADAOIACAGQADAMACANQACAUgCAWIgEAVQAJAAALgFIAGgDIAOgGIAIgFQAJgFAIgBIAGgBQAOgBAJAJQAHAHADAMQACAJgEALQgFALgQARIgYAYIgHAIQgKALgDAFIgJAKQgHAIgMAHIgIAHIgcATIgHADQgKAFgJABQgIACgIAAIgQgCg");
	this.shape_92.setTransform(-60.5,-11.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF3A45").s().p("AhCCCQgLgHgEgOIAAgCQgIgQABgbIgBgNQgCgOABgXQgBgHgCgEQgCgDgEAAQgFgCgGgCQgWgGgQgQQgPgQgFgWIAAAAQgDgQAHgOQACgGAFgGQAKgLASgIIAHgDQAOgFAJgCQAQgDAZAFIASAEIAXAEQAgAIANAJQAHAHAEAMIADANQADAQAAAMQABAGgEANIgCAIQAMgGAQgLQATgNAMgFQARgHAPAAQARAAAKALIADADQAFAHADAKQADAMgEAMIgEAIQgFAIgLAMIgXAaIgYAaQgPANgXAOIgaARIgbANQgRAHgTABIgHAAQgWAAgLgHg");
	this.shape_93.setTransform(-59.7,-9.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF3A45").s().p("AgwB0QgLgBgGgJIgBgBQgNgHgGgSIgGgJQgHgKgEgUQgCgFgEgEIgGgEIgKgFQgWgJgOgOQgNgSgBgWIAAAAQgBgPALgMIAJgLQAMgLARgHIAHgDIAXgJQAQgFAXAAIASgBIAWgCIAsACQAIACAFAFIAGAGQAFAJADACQAEgCgEALIAAADIAbgTQASgNAOgCQASgFAOADQAPADAIAOIACADQADAIABAKQABAMgDAMIgEAIQgFALgKAMIgVAaIgXAbQgOAPgWAQIgZATIgYAQQgSAKgPAFQgRAEgMAAIgKgBg");
	this.shape_94.setTransform(-59.5,-2.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF3A45").s().p("AgxCJIgBgBQgSACgNgJQgFgCgFgDQgMgGgLgPQgDgFgEgDIgHgFIgKgFQgVgLgLgRQgMgSAEgYIAAAAQABgMAPgLIAKgJQAOgKAQgHIAHgDIAWgKQAQgHAXgGIARgFIAVgIQAZgGASgJQAJgCAHgBIAIgBQAGACAHgIQAIgLgEAJIACgCQALgLAOgKQARgMAQgBQATgCAMAGQAOAHAFAQIABADQACAJgBAKQAAAMgDAMIgEAJQgFALgIANQgJAOgLAPIgXAbQgNARgTASIgYAWIgWASQgRANgQAHQgUAMgPADQgHACgGAAIgHgBg");
	this.shape_95.setTransform(-59.4,0.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF3A45").s().p("AhcCoQgSgCgQgLIgKgHIgGgEIgKgFQgVgOgJgSQgJgTAHgYIAAgBQAEgKASgMIANgIQAQgJAOgHIAGgDIAWgLIAmgTIAQgJIAVgOQAVgNAVgSIATgOIAKgIQAIgFALgSIAHgNIADgHQAKgOANgJQARgLATABQATAAALAKQAMAJADATIAAADIgCAVIgGAYIgDAJIgMAZIgSAeIgWAdQgNASgRAUIgWAZIgVAVQgPAPgOALQgVARgMAJQgOAIgKAEIgBAAQgXALgUgBIgFAAIgJgBg");
	this.shape_96.setTransform(-59.2,4.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF3A45").s().p("AidDBQg4gjAXg0QAHgJAWgLIAzgYQAcgOAugpQAmgkA4hFQALgMAOgcQAOgcgEAEQAWgyAqAGQApAHgBAuIgQA3QgZBBhIBdQhDBYglAcQgmAbgkAEIgLAAQgbAAgZgOg");
	this.shape_97.setTransform(-59,9.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF3A45").s().p("AiUCrIgHgEQgZgNgKgSQgOgWALgdQAGgKAUgMIAegQIASgLQATgJAZgSIAfgVQAUgQAYgWQAcgYAbgdIAFgEIAWgZQAOgWgCAFQAXgmAoALQAeAHAIAbQADAIABAKQgDAbgGAZIgDAKQgEAKgFAKQgIANgKAMQgYAhgrAjIgGAFQgfAegbATQgNAMgNAJIgYAVIgEADQgbATgcAHIgNACIgQACQgVAAgSgJg");
	this.shape_98.setTransform(-60.1,3.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF3A45").s().p("AiUCSIgHgEQgZgMgKgQQgPgVAJgdQAFgLARgMIAcgTIASgLQASgKAZgOIAhgUIAtggQAhgVAagWIAEgCQAJgHAPgJQANgPABAGQAXgaAnAPQAbAJALAaQADAIACAJQACAagDAXIgCAKQgDAKgGAJQgIAMgMAHQgXAcgwASIgHADQgfAUgdAKIgbARIgZATIgEADQgYASgeAJIgMADQgKABgJAAQgTAAgRgGg");
	this.shape_99.setTransform(-61.1,-1.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF3A45").s().p("AiVB6IgHgDQgZgLgLgPQgQgUAHgdQAFgMAOgNIAagTIASgKIAqgZIAigSIAvgaQAmgSAYgPIAEgBQAJgEARgBQAMgKAEAIQAXgOAlATQAZALANAZQAFAHACAIQAHAagBAUIgBAKQgBAIgHAJQgIALgPAHQgVAUg2ACIgHABQggAJgeABIgcANQgPAIgMAJIgEAEQgUARggAKIgMADQgNADgLAAQgQAAgOgFg");
	this.shape_100.setTransform(-62,-7.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF3A45").s().p("AiYBpIgHgCQgZgJgMgPQgRgSAGgeQADgNANgMQAKgKAOgKIAQgMQATgMAXgMIAjgPIAxgVIBBgWIAEAAQAJAAATAGQALgEAHAJQAXgCAkAXQAWANAQAXIAJAOQAMAZABARQABAFgBAEQgBALgHAIQgJAKgQAEQgVANg7gPIgHgBQgggBgggIQgNACgQAGQgRAHgLAKIgEADQgSARghALIgLADQgPAEgOAAQgNAAgMgEg");
	this.shape_101.setTransform(-62.7,-14.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF3A45").s().p("AiaBgIgIgDQgZgHgNgNQgSgSAFgdQACgOAKgMQAJgMANgLQAIgHAIgGQASgMAXgKQARgHAUgGQAXgHAcgHQAvgMAUAAIAEABQAJACAWAOQAKACAJAKQAXAKAjAcQAUAPASAUIAKAMQARAZAEAQQABAFAAAEQAAALgHAHQgKAJgSACQgUAGhBggIgHgDQgggLgigRQgNgCgRAGQgSAFgLAJIgEAEQgPAQgjAMIgKAEQgSAFgQAAQgKAAgJgCg");
	this.shape_102.setTransform(-63.4,-21.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF3A45").s().p("AC4BwQgTgBhGgxIhMg0QgNgFgSAEQgWAEgMAOQgMAPgkANQglAPgagGQgggGgOgOQgTgQACgcQADgcAbgaQAXgWAhgMQAkgMA2gHQA7gJAQAKQAYAOB8B5QApAoABASQABALgIAHQgJAHgRAAIgEAAg");
	this.shape_103.setTransform(-64.1,-26.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF3A45").s().p("AiABPQgMgCgJgEIgGgDQgOgKgDgTIAAgCQgBgVANgXIACgEQANgRASgMIACgCQAVgPAogLQAYgJAPgDQAMgBAEABQAJAAAbAVQAQAHAYAQIAlAYQALAGALAGIAFAEQAaASAKAMQAEAEABAEIACAHIgCAFIgBADQgFAHgMACIgCAAQgHADgWgIQgNgCgTgIIgVgJIgGgCQgIgGgOgDQgRgFgLgHIgHgGQgHgDgMAFQgKADgFAHIgFAHQgDAKgOAJQgFAEgIAEIgCABQgQALgQAFIgMACIgUgBg");
	this.shape_104.setTransform(-60.4,-20.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF3A45").s().p("AhlBNQgPgEgGgNIgBgCQgGgPABgYIgBgEQAGgPAHgNIABgCQAIgTAXgPQAOgMAKgIIALgFQAGgHAWAKQAOgCAWAIQARADAUAHQAMAEAKAFIAFABQAZALAOAHIAIAGQACADABADIAAADIAAADQAAAGgHADIgBABQgDAFgTAAQgOADgRgDIgWgDIgGgBQgGgDgPABQgSABgBgBIgCgBQgDgBgFAEQgFADgBAGIgBAGQACAKgIAIQgBAFgEAEIgBABQgJAMgLAKIgJAFIgQAFIgVABIgGgBg");
	this.shape_105.setTransform(-56.9,-11.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF3A45").s().p("AhABWIgCgBQgLgJgLgYIgCgEIgGgfIAAgCQgHgVAJgSQADgRAFgLQAEgGACgEQACgOARgBQAMgLAWgCQARgCATABQANgBAIACIAGABQAZACAQAEIAKADIAFADIADADIACACQAEAGgCAIIAAABQABAJgSAHQgMAIgRABIgVACIgGABQgFgDgSAHQgQAIAGAEIADABIAEAHQAAAEABAEIACAFQAIAJAAAIQACAFgBAEIAAABQAAANgGAQIgGAHIgLAMQgIAEgMAEIgGABIgGAAQgNAAgIgGg");
	this.shape_106.setTransform(-54.2,-3.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF3A45").s().p("AAKB/IgDgBQgNgDgYgXIgFgEIgXggIgBgCQgWgbgGgWQgIgSAAgQIABgPQgBgVALgMQAKgUAVgKQAQgJAWgGIAUgEIAFgCQAZgFAUgBIALABIAIACIAEABIADACQAJAFAEALIAAABQAFAMgPAPQgMANgQAGIgWAIIgGACQgCgCgVANQgQANAMAKIAJAEIAQAJIANAJIAFAFQAOAIAFAHQAGAFADAEIABACQAIAOgCAVIgDAKQgDAKgFAIQgHAIgNAHIgGADQgOAGgMAAIgGAAg");
	this.shape_107.setTransform(-53.3,2.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF3A45").s().p("AgqBwQhJg9gKgpQgKglAHggQAHgdAUgTQARgPAVgMIAcgOQAZgNAUgFQASgEAMACQAQADALAQQALAQgOAXQgLATgQALIgcARIgVAQQgTAUAWAPQAPALAwASQAtARANAMQARAQADAaQACAVgHAQQgGANgTAOQgVAOgUADIgGABQghAAhAg6g");
	this.shape_108.setTransform(-50.3,9.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF3A45").s().p("AAYCkQgIgCgIgFQgQgIgTgNIgTgNQgugigXgiQgQgXgFgUQgKgnAGgkQAGgaASgTQAOgOASgMQATgKAFgEQAVgNAUgGQAPgFAIABQAKABAHAFIAHAKQAKATgKAXQgFATgKALIgEAEIgRAVQACABgLALIgGAHQgLAWAWAOIABAAQAMAGAaAIQAPAFAPACIADABIATACQAOACALAEQAKAEAGAEQATAOAEAeIAAAFQACAUgGAQQgHAQgTAOQgNAKgOAGQgIADgJACIgLABQgPAAgTgIg");
	this.shape_109.setTransform(-47.7,9.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF3A45").s().p("AAdCqIgSgFQgSgHgWgMIgVgMQgygggagpQgPgYgGgWQgLgpAGgpQAFgXAOgSQAMgOAPgMQAQgJAEgFQASgMAQgIQANgFAJgBQAIAAAGADIAGAJQAKAWgGAYQgCAVgHAMIgCAFQgGAMgEANQACADgHAKIgCAJQgEAXAWALIABAAQAPAJAbAGQATADAOgBIADgBIATgDQAPgBANACQAKADAHAEQAVANAFAiIABAFQACAWgGARQgHASgUAQQgNAKgPAHQgJAEgJACQgJADgKAAQgNAAgQgFg");
	this.shape_110.setTransform(-45.1,10);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF3A45").s().p("AAiCxIgUgEQgVgFgXgLQgMgFgLgGQg3gfgbguQgQgagGgZQgMgrAFgtQAEgVAMgRQAJgNAMgMQAMgJAEgGQAPgMANgJIARgIQAHgCAFABIAGALQAKAYgDAYQAAAZgDAMIgBAGQgCANABAQQAEAFgEAKIABAJQADAXAXAMIAAAAQATAIAcAFQAWACANgFIADgBIATgJQAQgFAOABQAMABAIAEQAWAMAHAmIABAGQADAXgGATQgHAUgUARQgOALgQAIQgKAFgJACQgPAFgQAAQgKAAgLgCg");
	this.shape_111.setTransform(-42.6,10.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF3A45").s().p("AAnC4IgWgCQgXgEgZgKQgOgEgMgHQg8gdgcg0QgQgbgHgbQgMguAEgxQADgSAJgQQAGgMAKgMQAIgJAEgHQALgMAKgKIANgKIAKgFIAFALQAJAcABAXQAEAcAAANIAAAHQACAPAGATQAFAFAAALIAEAKQALAZAWAKIABAAQAVAIAeADQAZABAMgIIADgDQAGgGAOgIQAQgIAQAAQAMAAAJADQAYALAJAqIABAGQAEAYgGAVQgHAWgVATQgOALgSAJIgUAJQgWAIgZAAIgIgBg");
	this.shape_112.setTransform(-40,10.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF3A45").s().p("AAUC+QgZgCgcgJQgOgEgNgGQhBgcgeg6QgPgcgIgeQgNgwAEg1QABgQAGgPQAEgMAGgMIAJgPIAOgYIAKgMIAHgIIAEALQAJAfAEAYIAKAsIADAIQAFAQAMAVQAFAIAEAKIAHALQASAbAXAIIAAABQAYAIAgABQAdgBAKgLIADgEQAFgJAPgKQARgKASgCQANgCAKAEQAaAIAKAuIABAGQAFAbgHAWQgHAYgVAUQgOAMgUAKIgVAKQgcALgeABIgYgBg");
	this.shape_113.setTransform(-37.5,11.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF3A45").s().p("AgiC9QhcgWgnhNQgnhNAFhdQACgvAdhGQAYBaAMAcQAMAcAgApQAgAnAbAJQAaAJAigCQAkgBAIgUQAEgMAQgMQASgOATgEQAzgLAPBMQAQBQhRArQgpAVgrAGIgZAAQgdAAgdgIg");
	this.shape_114.setTransform(-34.9,11.6);

	this.instance_3 = new lib.handbookright();
	this.instance_3.setTransform(-52,-2.9,1,1,0,0,0,3,5.3);
	this.instance_3._off = true;

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF3A45").s().p("AhkCeQhwg7AihcQA5h5AqgtQAjgVAvAbQAcAcgRAbQhOA0gLBKQBkAUBLgqQA0gGAhA4QAIA6gkASQiIAlhDAAQgkAAgSgLg");
	this.shape_115.setTransform(-41.9,15.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF3A45").s().p("Ag5CjQg1gMgTgtQgghBgti+QABguAjgBQAYAEARAmIA+C5QAOAhArAOQB1gFAdAGQBPAUgJAtQgGAwheAFQhJgEhageg");
	this.shape_116.setTransform(-22.4,25.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF3A45").s().p("AhFErQgZgWAAgYQgBgPAMgfIAsg+QAigxgCgxQgDgwgvh5QgXg8gWgzQABgBgGgcQgFgdAKgLQAMgOAMAEQANAFAWAdQA9BPAtB2QAhBWALBGQAJAygbBEQgXA6gaAYQgoAnghAAQgTAAgRgPg");
	this.shape_117.setTransform(54.2,2.8);
	this.shape_117._off = true;

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FF3A45").s().p("Ah5DRQgOgIgFgOQgEgOAGgUQAJgYAcggQAjgnAIgPQAJgOAIgWQATgrAWhDQAMgmAIgRQAPgcAUgQQAagTAYAJQALAEAKAMQAMAPADAMQAFAQgIAdQgOAxgeA4QgSAfgqBAIgVAhQgNAUgHAJIgSATIgSAdQgVAcgcACIgEAAQgNAAgMgHg");
	this.shape_118.setTransform(57.1,-41);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF3A45").s().p("AhgBEIgthEQgFgGgCgJQgFgRAMgIQAMgIARADQAJACAGADIBHBIIAkgXQAngdAIgjQAKgqAWgYQAVgYAOAOQAoAlgVBFQgLAkhMBBQhFA8gVABIAAAAQgOAAgwhFg");
	this.shape_119.setTransform(57.7,2.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FF3A45").s().p("ABLDCQg5gLhGgjQhHgjgzgoQgsgjgihKQgcg9gBggQgBgaAJgVQALgYASAAQANABAVAmQAcAwAfAZQAxAmBhAwQBnAyBAANQBUARAPAIQAdAOgMAnQgMAohDAPQgfAHgfAAQgfAAgfgHg");
	this.shape_120.setTransform(-12.8,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_71}]},12).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},7).to({state:[{t:this.shape_76}]},7).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_82}]},5).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},4).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_108}]},7).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},6).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},17).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},6).to({state:[{t:this.shape_120}]},6).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(36).to({_off:false},0).wait(1).to({_off:true},1).wait(10).to({_off:false},0).wait(6).to({_off:true},1).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({_off:false},0).to({regX:2.9,rotation:-14.7,x:-52.1},6).to({_off:true},1).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.shape_117).wait(120).to({_off:false},0).wait(1).to({y:1.9},0).wait(1).to({y:1.1},0).wait(1).to({y:0.3},0).wait(1).to({y:-0.5},0).wait(1).to({y:-1.3},0).wait(1).to({y:-2.2},0).wait(1).to({y:-1.3},0).wait(1).to({y:-0.5},0).wait(1).to({y:0.3},0).wait(1).to({y:1.1},0).wait(1).to({y:1.9},0).wait(1).to({y:2.8},0).wait(1).to({y:1.9},0).wait(1).to({y:1.1},0).wait(1).to({y:0.3},0).wait(1).to({y:-0.5},0).wait(1).to({y:-1.3},0).wait(1).to({y:-2.2},0).wait(1).to({y:-1.3},0).wait(1).to({y:-0.5},0).wait(1).to({y:0.3},0).wait(1).to({y:1.1},0).wait(1).to({y:1.9},0).wait(1).to({y:2.8},0).to({_off:true},1).wait(37));

	// book
	this.instance_4 = new lib.a08();
	this.instance_4.setTransform(-19,13);

	this.instance_5 = new lib.book();
	this.instance_5.setTransform(53.6,-1.7,0.998,0.998,-55.9,0,0,0.1,0.1);
	this.instance_5._off = true;

	this.instance_6 = new lib.a12();
	this.instance_6.setTransform(-5.8,-43,1,1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},102).to({state:[{t:this.instance_5}]},18).to({state:[{t:this.instance_5}]},6).to({state:[{t:this.instance_5}]},6).to({state:[{t:this.instance_5}]},6).to({state:[{t:this.instance_5}]},6).to({state:[]},1).to({state:[{t:this.instance_6}]},12).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120).to({_off:false},0).to({y:-4.1},6).to({y:-1.7},6).to({y:-4.1},6).to({y:-1.7},6).to({_off:true},1).wait(37));

	// rightleg
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FF868C").s().p("AAGAdQgEgCgBgEIgBgFIgCgFIgIgNIgCAJIgCAHQgBADgDACQgCACgEgBQgDAAgCgCIgEgFIAAgIIABgHIACgJIABgHIACgGQABgDADgDQADgCADAAIAHABQAFACACACIADAGIAGAJIAGAJQAAgFACgFIAEgGQADgCADAAIAFAAIAEAEIACAFIgBAGIgEALIgGALIgEAIQgDAEgEABIgCAAQgDAAgCgCg");
	this.shape_121.setTransform(1.4,21.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FF868C").s().p("AAJAxQgFgEgDgGIgBgJIgEgJIgOgVQgCAHgBAIIgDAMQgCAFgFADQgEADgGgBQgFAAgEgDQgEgEgCgEQgBgFAAgJIADgNIADgPIACgLQABgGACgFQACgFAFgEQAEgEAGAAQAEAAAHACQAIADAEADIAGAKIAKAPQAGAIADAHQABgIADgJQAEgHADgDQAEgDAFAAQAFgBAEACQAEACADAEQADAFAAAEQAAAEgCAGQgDAMgDAHIgKASIgHAOQgEAGgHACIgDAAQgFAAgFgDg");
	this.shape_122.setTransform(-0.1,23.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FF868C").s().p("AANBEQgHgFgEgJIgCgMIgGgMIgTgeIgFAUQgCAPgCADQgDAHgGAEQgGAEgIgBQgHAAgGgFQgGgEgDgHQgCgGACgNQAAgIADgLIAEgVIADgPQACgJADgGQADgIAGgFQAGgFAIgBQAGAAAJADQAMADAFAFQAEADAGALIAOAVQAIAMAEAJQABgLAFgMQAFgKAFgEQAFgFAHAAQAGgBAHADQAGADADAFQAEAGAAAHQAAAFgCAIQgFARgEAKIgNAbIgKASQgHAJgJADIgEAAQgHAAgHgFg");
	this.shape_123.setTransform(-1.7,24.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF868C").s().p("AARBYQgJgHgFgMIgDgPIgIgQIgZgnQgEAOgBANQgDATgCAEQgEAIgJAFQgIAFgJAAQgJAAgIgHQgIgFgDgJQgDgIACgQIAEgZIAFgbIAEgUQACgLAEgIQAEgKAIgGQAIgHAKgBQAHgBAMAFQAPAEAHAGQAFAEAIAPIATAZQAKAQAFAMQABgOAGgQQAGgNAHgFQAHgFAJgBQAIgBAIADQAIAEAEAHQAFAIAAAIQAAAGgDAMQgGAWgFANIgRAiQgJASgDAFQgJAMgMADIgGABQgJAAgIgGg");
	this.shape_124.setTransform(-3.2,26.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FF868C").s().p("AAVBsQgLgIgGgPIgEgTQgCgFgIgOIgegwQgFARgCAQQgEAXgCAFQgFAKgKAHQgKAGgMgBQgLAAgJgIQgKgHgEgKQgDgKACgUIAFgfIAHggIAEgZQADgOAEgJQAFgMAKgIQAKgJAMgBQAJAAAPAFQASAFAIAIQAGAEAKASIAXAgQANATAGAOQABgRAIgTQAHgQAIgGQAJgHAKgBQALgBAJAEQAKAFAFAJQAGAJAAAKQABAIgEAOQgIAbgGAQQgGAOgPAbQgKAXgFAGQgKAPgPADIgHABQgLAAgKgHg");
	this.shape_125.setTransform(-4.8,27.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#EE000C").s().p("AihB3QgJgJgHgYQgLglABgXQAAgQAHgdQAIgeALgLQAMgMATgCQARgBARAHQAOAGARAMIAcAUQAMAKALACQANACAOgHQAagLAjgqQANgRALgHIARgLIAXgOQANgFANAGQAOAFAGAMQAKAUgOAfQgSAogmAdQgjAdgvAQQgYAJgTACQgPABgYgDIhAgGQAHAbgEAOQgHAUgSAFQgGABgFAAQgNAAgLgJg");
	this.shape_126.setTransform(-35.9,36.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EE000C").s().p("AiQB0QgHgHgHgNIgDgKQgMgiAAgWQgBgQAHgbIADgLQAGgSAJgJIABgBQAKgKARgCIACABQARgBAQAHQANAFAQAMIASANIAIAEIAAAAIAHADQAGADAGAAIAAAAQAFAAAFgBQAFgCAIgEQAGgEAHgFQAHgGAIgIQANgNAOgSIAEgGQAJgMAIgGIAEgCIAMgIIAEgCIAPgIIADgBIACgBQAMgDAMAFIAGAEQAIAFAFAIQADAIABAJQABAOgHARIgBACIgKAVIgLAQQgMAQgQAPIgQAOQgLAKgNAHQgOAKgQAIQgPAIgPAEIgJACIgUACIgMAAIgNAAQgRAAgSgDIgNgCQADAXgGAKQgGAMgLAFIgHACIgIABQgOAAgLgKg");
	this.shape_127.setTransform(-36.3,34.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#EE000C").s().p("Ah/ByQgIgHgGgMIgEgJQgNgegBgWIAAAAQgBgQAHgZIACgLQAGgRAJgIIABgBQAJgJARAAIACAAQAQABAPAGQANAGAPAKIARAMIAHACIAFABQAFABAGgBIAHgDIALgHIALgKIANgOQALgNANgRIAEgGQAIgMAHgFIADgCIAMgIIAEgCQAJgFAGgBIACgBIACAAQALgDAMAGIAGADQAHAFAEAIQAEAHABAJQABANgFARIgBACQgEAJgFAKIgKAQIgXAfIgOAQQgJAKgKAIQgMALgNAJQgNAJgMAFIgIADQgIADgMACIgIACIgMACQgPAAgTgDIgMgCQAAAQgIAHQgHAJgLADIgGABIgEAAQgPAAgMgJg");
	this.shape_128.setTransform(-36.8,33);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#EE000C").s().p("AhuBvQgIgGgHgLIgEgIQgOgbgCgVIAAAAQgCgQAHgYIACgKQAGgQAIgHIABgBQAJgHARAAIACABQAPABAOAGQANAFAOAKIAQAMIAGgBIAAAAIADgBIAIgEIAAAAIAGgEIAIgJIAJgKIALgOIAVgeIAEgGQAHgLAGgFIADgDIALgHIAEgCQAJgEAGAAIACAAIACAAQAKgCALAFIAGAEQAHAFAEAHQADAHACAIQACANgFAPIAAACIgIATIgJAQQgIANgLATIgLAQQgHAKgIAJQgJAMgLAKQgKAKgKAHIgHAEIgQAIIgJADQgGADgDAAQgOACgSgEIgMgCQgDALgLADQgHAGgKABIgGAAQgQAAgNgKg");
	this.shape_129.setTransform(-37.3,31.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#EE000C").s().p("Ag8B3IgGAAQgPgDgMgIQgJgHgGgJIgFgGQgPgYgDgVIAAAAQgCgQAGgYIADgIQAFgPAIgGIABAAQAJgHAQACIACABQAOABAOAGQAMAFANAJIAPALIAFgCIAAgBIACgEIAFgGIAAgBIADgFIAHgKIAHgLIAJgOIASgeIADgGQAHgKAFgFIACgDIALgGIAEgCQAIgDAGABIACAAIACAAQAKgBAKAFIAFAEQAGAFAFAHIAFANQADANgEAOIAAACIgHATIgIAQQgGALgJAVIgHAQIgLAVQgHANgIALQgIALgIAIIgFAGIgOAKIgHAFQgFADgFABQgNADgQgFIgLgCQgGAGgNgBQgGACgJAAIgCAAg");
	this.shape_130.setTransform(-37.8,30);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EE000C").s().p("AAEB6IgIgDQgKAAgPgEQgIgBgJgCIgGgBQgNgFgLgHQgKgGgGgIIgGgGQgPgUgFgUIAAgBQgCgQAGgVIACgIQAGgOAHgFIABAAQAIgGAQADIADABQANACAMAGQANAFAMAIIAOAIIADgDIAAAAIABgGIADgKIAAAAIAAgHIAFgMIAFgLQACgGAFgIIAQgdIACgGQAGgLAEgEIACgDQAFgEAFgCIAEgBQAHgDAHACIACAAIACABQAJgBAJAGIAFAEQAGAEAEAHQADAGACAGQAEANgDANIAAACQgBAIgEAJIgHAQQgEALgGAWIgFARIgHAWQgEAOgGAMIgLAWIgEAHQgEAGgHAHIgFAGQgFAEgFACQgEACgGAAQgIAAgLgDg");
	this.shape_131.setTransform(-38.2,29);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EE000C").s().p("AAXCAQgWgIghgQQgdgPgPgMQgXgTgFgXQgEgUAJgXQAFgNAIgEQAIgFAQAEQAiAJAcAUIAAgFIAAgJIABgMIgBgJIAGgZQABgGAEgIIAPgjQAGgNAEgEQAFgFAIgCQAHgBAGACIAEACQALAAALAJQAKAJAFANQAFANgCAOIgEAQIgGAQQgEAMgEAnIgDAXQgEAfgHAWQgEALgGAMQgGAMgHAEQgEACgGAAQgIAAgKgDg");
	this.shape_132.setTransform(-38.7,28.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#EE000C").s().p("AAZCDIgEgBQgMABgLgEQgMgCgPgFIgGgDQgQgGgOgIIgLgIQgNgJgJgLQgHgKgDgKQgDgKADgNQABgLAFgMQAEgIAGgDIAFgDQAJgFAQAEIAIACIAXADQAJABAJACIABgCIABgDQgBgFABgEIACgNIABgJIAEgKIAEgOIAGgOIASghQAHgMAFgFIAHgFIAGgCQAHgCAHABIAEACIAEAAQAJABAJAHIAEADQAJAHAEAJIABACQAEAJgBALIAAAHQgBAHgEAKIgFALIgBAEIgKAjIgFAOIgFAUIAAABIgEAMIgEALIgEAWIgBAJQgCAJgDAKIgCAFQgEAMgGAFIgCACQgGAEgLAAIgFAAg");
	this.shape_133.setTransform(-34.4,31.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EE000C").s().p("AgaCEIgHgCQgQgFgQgJIgMgHQgMgIgLgKQgKgKgDgJQgDgKADgOQADgMAFgKQAFgJAHgFIAEgDQALgFAPAEIAJACQAKgDAGgFQAFgCAHAAIABgFIABgDQgBgFACgFIADgMIACgJIAFgKIAHgOIAGgNIAWggQAIgLAHgFIAHgFIAFgCQAIgDAGAAIAEABIAFAAQAJAAAKAHIAEADQAKAGAFAJIABACQAEAJAAALIgBAHQgBAIgEAKIgGALIgBAEIgOAhIgHANIgJATIAAABIgGALIgFAKQgDAKAAANIAAAKIgDAUIgBAGQgCAMgFAGIgCACQgGAHgMADIgEABQgLAFgMgBIgFAAQgKAAgLgDg");
	this.shape_134.setTransform(-30.1,35.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EE000C").s().p("AgXCOIgHgCQgQgEgTgJIgLgGQgOgIgMgKQgLgIgDgKQgFgKAFgOQADgMAGgKQAFgIAHgFIAGgDQALgFAPACIAJADQAHgGACgNQACgIAEgDIABgFIABgEIABgKIAFgMIAEgJIAGgKIAIgOIAKgMIAXgfQAJgKAIgGIAHgEIAGgDQAHgDAHgBIAFAAIAEAAQAJAAALAGIAFACQALAGAFAIIACACQAEAJgBAMIAAAHQgCAJgEAKIgGALIgCADIgSAgIgJAOIgLAQIgBABIgIAJQgEAGgCAFQgDAKABAOIAAAKIAAAVIAAAHQgBAMgDAHIgBADQgFAIgLAHIgDADQgLAJgLACQgGACgJAAIgMAAg");
	this.shape_135.setTransform(-25.8,39.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EE000C").s().p("AgUCXIgIgBQgQgDgVgKIgMgGQgNgGgOgJQgOgJgDgIQgFgKAFgQQAEgMAHgJQAGgIAIgFIAFgDQANgGAPADIAIACQAFgKgCgTQgCgNACgIIABgGIAAgDIADgLIAGgMIAFgJIAHgJIAKgOIALgMIAbgdQAKgJAKgGIAHgFIAFgDQAIgEAHgBIAEgBIAFgBQAJAAAMAFIAFADQANAFAFAHIACADQAEAIAAANIgBAHQgCAKgEAKIgHAKIgCADIgWAfIgLANIgPAQIgBABIgJAHQgGAFgCAFQgEAJADAQIABALIACAWIABAHQABAMgCAIIgBAEQgDAKgJALIgDAFQgKANgLAFQgIAGgNAAIgGAAg");
	this.shape_136.setTransform(-21.5,43.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EE000C").s().p("AgZCfQgQgBgXgKQgTgIgXgMQgPgIgEgIQgFgKAGgQQAIgXATgLQAVgMAVAHQADgNgHgaQgHgYACgNQACgUAYgZQAmgrAtgcQARgLANgCQAKgBARAHQAPAFAFAGQAIAJgCAPQgBATgNATQgIANgUATQgXAVgJAGIgMAJQgHAFgDAGQgDAGADARIAHAiQAFAVgCANQgBAOgLATQgJASgJAHQgMAKgSAAIgHAAg");
	this.shape_137.setTransform(-17.3,48.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EE000C").s().p("AgUCYIgHgBQgQgCgWgKIgLgGQgOgGgOgJQgOgJgDgIQgFgKAFgQQAEgMAHgJQAGgIAIgFIAFgDQANgFAPACIAIACQAFgKgDgUQgDgPACgJIAAgFIABgEIADgKIAGgNIAGgIIAHgKIAKgNIALgMQANgPAPgOQAKgJAKgGIAHgFIAGgDIAOgGIAEAAIAFgBQAJAAAMAFIAFACQANAFAGAHIACADQAEAIgBANIAAAIQgCAJgFAKIgGAKIgCAEQgIALgPATIgLANIgQAQIgBABIgKAHQgFAEgDAGQgDAJACAQIACALIACAWIABAHQABAMgBAJIgBADQgDALgJAMIgDAEQgKAOgKAFQgJAHgPAAIgEAAg");
	this.shape_138.setTransform(-20.8,44.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#EE000C").s().p("AgWCRIgIgCQgPgDgUgJIgMgHQgNgHgNgKQgMgIgDgJQgEgKAEgPQADgMAHgKQAFgIAIgFIAFgDQAMgFAPADIAIACQAHgIAAgOQABgKAEgFIAAgFIABgEQAAgFACgFIAFgMIAFgJIAGgKIAJgNIAKgNIAZgeQAIgJAJgHIAHgEIAGgDQAHgDAHgBIAFgBIAEAAQAJAAAMAGIAEACQAMAGAFAIIACACQAEAJAAAMIgBAHQgCAJgEAKIgGALIgCADIgTAfIgKAOIgNAPIAAABIgJAJQgEAGgDAFQgDAJABAPIABALIABAVIAAAHQAAAMgDAHIgBADQgEAJgKAJIgEADQgKALgLADQgHADgLAAIgJAAg");
	this.shape_139.setTransform(-24.4,41.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EE000C").s().p("AgYCJIgHgCQgQgEgRgJIgMgHQgNgIgLgKQgLgJgDgKQgEgKAEgOQADgLAGgLQAFgIAGgFIAFgDQALgFAQADIAIACQAJgEAEgJQADgFAGgCIABgFIABgDQgBgFACgFIAEgMIADgJIAFgKIAIgOIAJgNIAWgfQAIgKAHgGIAHgFIAGgCQAHgDAHAAIAEAAIAFAAQAJAAALAGIAEADQALAGAFAIIABACQAEAJgBAMIAAAHQgCAJgEAJIgFALIgCAEIgQAgIgIAPIgKAQIgBABIgGAKQgEAGgCAFQgDAKAAAOIAAAKIgBAUIgBAGQgBAMgEAHIgCACQgFAIgMAFIgDACQgLAHgMAAIgKABQgIAAgIgBg");
	this.shape_140.setTransform(-28,37.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#EE000C").s().p("AAACEQgMABgPgFIgGgCQgRgGgPgIIgLgHQgNgJgKgKQgJgKgDgKQgDgKADgNQACgMAGgLQAEgIAGgFIAFgDQAKgEAQACIAIADQALgBAIgEQAGAAAHAAIABgDIABgDIABgKIADgMIACgJIAEgKIAHgOIAFgNIAVghQAHgLAHgFIAHgFIAFgCQAIgDAGABIAEABIAFAAQAJAAAKAHIAEADQAJAGAFAJIABACQAEAJgBALIAAAHQgBAIgEAKIgFALIgCAEIgNAiIgGANIgHAUIgBABIgFALQgDAFgBAFQgDALgBAMIgBAJQAAAKgDAKIgBAGQgDAMgFAGIgCACQgGAGgOABIgEABQgGACgIAAIgIgBg");
	this.shape_141.setTransform(-31.5,34.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#EE000C").s().p("AAZCCIgFAAQgLgBgMgEQgMgCgPgGIgGgCQgQgHgNgIIgMgIQgMgJgIgLQgIgKgDgKQgCgKACgNQACgLAFgMQAEgGAFgFIAFgDQAJgFAQAEIAIACIAYAEQAKACAJAEIABgDIABgDQgBgEABgFIACgMIABgJIADgKIADgPIAGgOIASghQAHgMAFgFIAHgFIAGgCQAHgCAHACIAEABIAEAAQAJABAJAHIAEAEQAIAGAFAKIAAABQAEAKAAALIgBAGIgEARIgFAMIgCAEQgDAKgGAZIgEAOIgFAVIAAABIgEALIgDALIgFAWIgBAJQgCAJgDAKIgCAFQgFAMgFAFIgDABQgGAEgJAAIgHgBg");
	this.shape_142.setTransform(-35.1,31.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EE000C").s().p("AAaB4QgogWg5guQgXgRgEgOQgFgSAMgQQALgUATgBQAMgBAXAOIAiAVQgMgnAEgXQABgMAKgRQAMgYAPgJQAMgHAOADQAPADAJAKQAJALgBAPQAAAOgJALIgHAGQgDAEgBAEQgCAGAFAMQAFAMAEARQAEAMAFAfQAGAfgFASQgDARgLALQgMAMgQABIgBAAQgMAAgRgKg");
	this.shape_143.setTransform(-33.2,32.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#EE000C").s().p("AAVB5IgFgCQgWgLgZgOIgFAAQgHABgHgCIgUgEIgNgFIgHgEQgJgGgHgHQgJgLgCgNQgDgLADgOIAIgVIABgCQAEgKAHgIIABgBQAHgHANAAIADAAIAVABQALAAAKAEQAMADAMAJIABgCIADgCIABgFIAAgBIACgHIAAgBIABgEIAIgMIACgDIAHgIIAGgGIADgDIAEgHIADgIIADgJQAFgNAEgHQAEgGAGgDIAEgCQAEgBAEAAIADAAQAHgDAHACIAHACQAHADAGAGQAEADADAFQAEAHACAIQABAGAAAHIgBAKIgCAIIgEASIgCAQIgCATIgDAUIAAACIgEAXIgDAOQgGAZgJAQQgEAJgIAHIgEAEQgHAIgHAEIgCAAIgHABQgJAAgOgFg");
	this.shape_144.setTransform(-36.8,31.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#EE000C").s().p("AAUB2IgHgDQgagOgWgPIgFACQgIAEgFABQgMADgKAAIgOgCIgJgDQgKgEgJgIQgLgLgDgNQgCgNAEgPIAKgYIABgCQAEgIAIgMIABgBQAHgKALgDIADAAIAVgGQAMgEAKACQANABAOAKIACgBIAEAAIADgCIAAAAIAFgCIAAgBIACAAIALgEIACgBQAFAAAFgDIAHgCIAFgCQADgCADgFIADgJIACgKIAIgXQAEgHAEgFIAEgDQADgDADgCIADgBQAGgGAHAAQADgBAEABQAIgBAIAFQAFADAEAEQAFAGADAJQACAGAAAIIAAALIgBAKIgDASIgBASIgBAUQgBAIgDAOIAAACIgFAZIgEAOQgIAdgMAPQgGAHgLAGIgGADQgJAHgHABIgDABIgDAAQgMAAgQgHg");
	this.shape_145.setTransform(-34.9,33.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#EE000C").s().p("AAzB+QgOAAgTgKIgHgEQgfgQgUgRIgFAFQgHAIgGACQgLAIgLADQgIABgIgBIgJgBQgNgDgKgIQgNgKgDgPQgEgNAHgQIAMgbIABgBIAMgXIABgDQAHgMAKgFIACgCIAVgMQANgHAKgBQAPgBAQALIACAAIAFABIAFADQADAAAFADIABAAIACACIAOAEIAEABQAGADAGAAIAJABIAGAAQAEgCADgFQACgEABgGIACgLIAHgaQACgIAEgHIACgEIAGgIIACgCQAFgJAGgDIAIgDQAJgDAKADQAGACAFAEQAHAGAEAJQADAFABAKIAAAMIAAALIgBATIgBATQABAMgBALIgEAXIgBADIgGAaIgFAPQgKAggQAOQgHAGgPAEIgHADQgLAEgJAAIgCAAg");
	this.shape_146.setTransform(-33,36.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EE000C").s().p("AA1CAIgDAAQgPgCgUgLIgIgEQgjgUgRgSIgFAHQgIAMgEAEQgMANgMAFQgIADgJABIgLgBQgOgBgMgIQgPgLgEgPQgDgOAIgSIAOgbIABgCIANgbIABgCQAHgPAIgIIACgCIAVgTQANgMALgCQAQgEASAMIADABIAGAEIAHAGIAKAIIACABIADAFIARAMIAEADIAPAJIAKAEQAEACAEgBQAFgBADgGQACgEABgHIACgMIAGgdIAEgSIACgFIAEgLIABgEQAFgMAGgEQAEgEAEgCQAKgGALACQAIABAGADQAIAFAFAKQAEAGABAKIABAOIABAMIAAAUIABAUQABANgBALQgBAIgEARIgBADIgHAcIgGAQQgMAjgTANQgJAFgSADIgIABIgQACIgHgBg");
	this.shape_147.setTransform(-31.1,38.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EE000C").s().p("AAzCCQgUgFgcgRQgogWgPgUQgLAXgGAIQgLARgOAIQgNAIgRAAQgQAAgOgIQgRgLgDgQQgEgPAJgTIASgfIANgeQAIgUAHgLQAGgKAQgSQAOgQALgEQATgHAWAQQAIAFAIAKIAPAQIAYAbQAUARAPAIQAEADAEAAQAHgBADgHQACgEABgGIAKhIQAEgdAJgMQANgRATABQAVAAALARQAGAKACAWIAFA4QABAPAAALQgBAJgGAVQgJAggGAPQgOAmgXALQgLAFgUABIgLAAQgPAAgKgCg");
	this.shape_148.setTransform(-29,40.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#EE000C").s().p("AiGCBQgNgBgKgFIgGgDQgQgLgDgSQgDgOAJgTIAFgIIANgWIAPgdIAIgRIAIgMQAGgHAKgKIAJgIQAPgOALgCIAIgBQAQABARALQAIAFAJAIIAQAOIAFAGIAVAPQAUANAPAFIACABQADABAEgBQAFgBAEgGIAEgKIAHgcQAGgUAEgTIAGgRQAFgNAGgHIAFgEQAHgHALgCQAFgBAGABQAMAAAIAHQAGAFAEAHQAEAIAAAOIAAAJQgBAagCAbIAAAFIgCATQgDAJgHATIgMAeIgGAOQgQAjgYAKQgLAFgUACQgVABgPgCQgNgDgPgHQgKgEgIgGIgEgCQgTgKgOgJIgUgNIgCAFIgMAUIgEAGQgLAPgPAHIgEADQgLAEgMAAIgDAAg");
	this.shape_149.setTransform(-27.2,41.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#EE000C").s().p("AiUB+QgMgBgKgFIgGgEQgPgLgBgSQgCgPAIgTIAFgHIANgWQAGgJAKgSIAKgRIAJgLQAGgHALgIIAKgHQAPgLAMAAIAIAAQAPADASAKIASAMQAHAEAKAHIAGAFIAWAKQAVALAPABIABABQADAAAEAAQAFgCAEgFQADgEACgHIALgaIAOglIAHgPQAHgMAHgGIAEgEQAIgGALgBQAGgBAGABQALACAIAHQAFAFADAHQADAJgBANIgBAIQgEAYgHAbIgBAEIgEASIgNAaQgHAQgHAMIgIANQgSAggZAKQgLAFgSACQgVACgPgDQgNgCgPgGIgTgJIgEgCQgUgKgOgIQgKgGgJABIgCAFQgGALgHAIIgDAFQgMAOgQAHIgFABQgKAEgKAAIgGgBg");
	this.shape_150.setTransform(-25.1,41.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#EE000C").s().p("AihB8QgNgBgKgGIgFgEQgOgLAAgTQgBgPAIgTIAEgHIAOgWIARgZIALgQQAFgGAFgEQAIgHALgHIALgFQAQgJAMACIAIACQAPAEARAKIATAKIASAJIAHAEIAYAFQAVAFAPgBIABAAQADABAEgCQAEgCAEgFIAGgJIAOgZQALgSAIgPIAJgPQAJgKAHgFIAFgEQAIgFALAAQAGgBAGACQAKACAIAIQAFAGADAHQACAJgDAMIgDAIQgHAWgLAaIgCAEIgHAQIgPAYIgRAaIgJAMQgUAdgZAKQgMAFgRACQgUACgQgCQgOgBgMgFIgWgJIgEgCIgigRQgJgDgJAGIgDAFQgGAKgHAIIgEAFQgLANgSAFIgEABQgKADgJAAIgHgBg");
	this.shape_151.setTransform(-22.9,42.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#EE000C").s().p("AivB6QgNgCgJgGIgFgEQgNgMAAgUQAAgPAJgSIAEgIQAGgLAHgKIATgXIAMgPQAFgGAGgEQAJgGAMgGIAMgEQAQgGAMAEIAJADIAgAPIATAIIATAHIAIADIAZAAQAWABAPgFIABABIAGgDQAEgCAFgEIAHgJIARgXIAXgeIALgNQAKgJAIgFIAFgDQAIgDAMgBQAHAAAGADQAJADAHAHQAFAHACAHQABAJgFAMIgEAHQgKAVgQAYIgCAEIgKAPIgRAWIgUAYIgKALQgXAZgZAKQgNAFgQADQgTACgRgBQgLgBgPgEQgMgEgKgEIgEgCIgjgQQgHAAgKAKIgDAFQgFAKgIAIIgEAFQgMALgTAEIgEABIgPACIgLgBg");
	this.shape_152.setTransform(-20.8,42.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#EE000C").s().p("Ai+B3QgNgCgIgGIgFgEQgLgMABgVQABgQAIgRIAEgIQAFgKAIgLIAUgVIAOgOQAFgGAHgDQAJgGANgEIANgEQAQgDANAFIAJAFQAOAJARAHIAVAHIAUAEIAJACIAagFQAWgDAQgIIAGgDQAEgCAEgEIAIgIIAVgWIAbgbQAIgIAGgDQALgIAIgEIAGgCQAIgDANAAQAGAAAGADQAJAEAGAIQAFAHABAIQAAAJgGALIgFAHQgNASgUAYIgEADIgMAOIgUAUIgXAWIgLALQgZAVgaAKQgNAFgOADQgTADgQgBQgNgBgOgDIgXgHIgEgCIgkgPQgFACgLAQIgDAFQgFAIgJAJIgEAEQgMAKgUADIgFABIgMABIgOgCg");
	this.shape_153.setTransform(-18.6,43);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EE000C").s().p("AjhBsQgPgNACgZQADgUALgVQANgZAkgcQAPgMAWgFQAggHAVARQAgAaA1gBQAogLAZgSIAuglQAggaAPgIQATgJAJgCQAIgCANABQAQACALAPQALASgPARQgRATgiAeQghAbgeAXQhQA9hLgPQgRgEgLgEQgWgJgOgFIgSAeQgFAIgJAJQgOAMgdADIgJAAQgZAAgNgLg");
	this.shape_154.setTransform(-16.4,43.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EE000C").s().p("Ai4B1IgRgEQgPgFgIgLQgMgOADgYIAAAAQADgVAMgTQAHgLAOgKQAPgMASgKIAKgEQALgDANABIAJABIATAGIAVAFQAfASA0gIQAngNAcgTIApgeIAHgGIAWgQQARgLALgFQAPgGAJgBIADgBQAIAAAMADIAFABQAHAFAEAIIACAGQAHAQgRAQQgOAPgZAVIgNAMIg5ArIgIAGIgTAOQgkAYgjAKQgZAIgeABIgHAAIgXgDIgFgBIgkgIIgFAFIgQARQgGAGgIAEIgKAEIgNAAIgPAAg");
	this.shape_155.setTransform(-16,43.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#EE000C").s().p("AinB2IgYgHIgNgHQgNgIgGgMQgJgQADgXIAAAAQADgWAOgRQAIgJAPgKQATgKARgEQAFgBAFABQAJABALAEIAIAEQAKAIAGACQAHACAPgCQAeAIA0gNQAmgOAegVQAMgIAegWIAIgGIAXgPQARgKAMgEQAQgGAJABIACAAQAJACAJADIAEAEQAGAGABAIQABACgCAEQADAOgSAQIgpAjIgNALIg7ArIgHAGIgUAOQgkAYgiANQgYAJgdAGIgIABIgWABIgEgBQgYgBgOgCIgEAEIgTALQgGADgJABIgDAAIgGgBg");
	this.shape_156.setTransform(-15.7,44.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EE000C").s().p("AisB5IgIgFQgJgIgLgGIgLgLQgKgKgEgOQgGgRADgXIAAAAQAEgWAOgOQALgKAPgHQAXgIAQAAIAKAEQAIAEAJAJIAGAGQAIALAFABQAGABARgDQAdABA1gWQAjgQAhgVIArgeIAIgFQAMgJANgGQASgKAMgDQAQgEAJADIADAAQAJADAHAFIADAEQAEAIgCAJIgDAGQgCALgTARIgqAhIgPALIg7AqIgHAGIgVAOQglAZgeAPQgZALgdALIgIACIgWAFIgDAAQgYACgOAAIgFADIgVAFQgHgBgIgDg");
	this.shape_157.setTransform(-15,45.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#EE000C").s().p("AisCEQgHgDgIgHIgHgJQgIgNgIgIIgIgPQgHgNgDgPQgDgTAEgWIAAAAQAEgVAQgOQALgKARgFQAagGAPAGQAGADAEAEQAHAJAHAMIAFAJQAHAPADABQADABAVgKQAbgFA2gdQAhgRAjgXIAtgeIAJgFQAMgIANgGQASgIAOgDQAQgDAJAEIACABQAKAFAFAGIACAGQADAJgGAJIgGAGQgFAKgVAQIgsAgIgOALIg9ApIgHAGIgVAOQglAZgeASIg0AcIgIAEQgMAFgJADIgDAAQgZAHgOABIgFABIgKABQgHAAgHgCg");
	this.shape_158.setTransform(-14.3,46.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#EE000C").s().p("AjQBsQgPgmgDgJQgJgjAJglQAJgqArgGQAogGANAYQAIAPAHAZQAFATACABQAEACDYiJQAQgKATgJQAogQATALQAQAJABANQAAALgJAJQgHAIhOA1QhOA0ACgCIgdAVIhDAuQgVANgeAVQgPALgNAGQggAOgPAAIgCAAQgfAAgPglg");
	this.shape_159.setTransform(-13.6,47.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#EE033C").s().p("AjQBsQgPgmgDgJQgJgjAJglQAJgqArgGQAogGANAYQAIAPAHAZQAFATACABQAEACDYiJQAQgKATgJQAogQATALQAQAJABANQAAALgJAJQgHAIhOA1QhOA0ACgCIgdAVIhDAuQgVANgeAVQgPALgNAGQggAOgPAAIgCAAQgfAAgPglg");
	this.shape_160.setTransform(-13.6,47.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#EE0234").s().p("AihCRQgHgHgGgJIgXgnQgEgJgCgJQgHgXAFgcIAAgBQAHgdAbgMQAIgEAKgBQALgCAJAAQAXACALAOIAEAGQAFAJADALQADAQABgCIAEgDQAQgWBVg/QAcgZAmgdIAMgKQAPgLARgKIAGgCQARgIAOgCQAMgBAJAEQAIAEAFAGQAEAFABAGQACAKgIAKIgFAFQgFAHgMAJQgTAVggAZIgKAJQgiAdgNANIgHAGIgXAYQgPANgNAOIgYAYIgRARIgWAWIgCABQgMAMgMAFIgFADQgYAKgPACIgDAAIgCAAQgUAAgRgNg");
	this.shape_161.setTransform(-14.8,47.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#EE022C").s().p("Ah9ChQgIgFgHgHQgVgYgIgHQgGgHgCgIQgLgUAFgcIAAgBQAGgfAcgNQAIgDAJgCQALgCAJAAQAXABAMAKIAFAFQAEAJgBADIACAHIADgDQAIghBEg/QAXgcAiggIALgKQANgNAQgLIAFgDQAPgJAPgDQAMgCAKAEQAIAEAFAFQAEAFACAGQACAKgFAKIgEAFQgEAIgKAKQgRAZgaAZIgJAKQgcAdgKASQgGAGABACIgSAZQgMAPgJAPQgJAQgJAMQgFAJgHAJQgEALgKANIgBACQgKANgMAGIgFACQgWAKgRADIgEAAIgFAAQgRAAgSgKg");
	this.shape_162.setTransform(-15.9,48.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#EE0224").s().p("AhZCzQgJgEgHgFQgZgRgLgGQgHgFgDgHQgPgRAEgdIAAgBQAGgfAcgNQAJgEAJgCQALgCAIAAQAXAAANAIIAFACIABgCQAAgqAzg/QASgfAdgkIAKgKQAMgPAOgLIAFgEQAOgLAPgDQAMgDAKAEQAIADAGAFQAEAFADAFQADAKgEALIgDAFQgDAJgIAKQgOAfgVAXIgGALQgXAegHAXQgEAGAAACQgHAOgFAPQgIAQgFARIgLAeQgDAKgEAJQgCANgHAOIgBACQgIAOgLAHIgEADQgVAJgSADIgEAAIgHAAQgQAAgTgFg");
	this.shape_163.setTransform(-17.1,48.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#EE011C").s().p("Ag1DDQgJgBgJgEIgpgOQgIgEgFgFQgTgPAEgeIAAAAQAFgfAdgNQAJgFAJgCQAKgDAIAAQAXAAAPAEIAGACIgFgKQgBABgDgIIABgEQgHg0Akg/QAKgiAZgnIAIgLQALgQANgNIAEgEQANgMAPgEQAMgDALADQAHADAHAEQAFAFADAFQAEAJgCALIgCAGQgCAKgGAKQgMAkgPAXIgFAMQgQAdgFAfQgDAEABADIgHAfQgEASgBATIgEAgIgBAVQACAOgGAQIAAABQgGAQgMAIIgEACQgUAJgSADIgFABIgLABQgOAAgSgDg");
	this.shape_164.setTransform(-18.3,48.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#EE0114").s().p("AgRDTIgUgBIgvgGQgKgCgGgEQgXgNAEgeQAFgfAdgOIARgGQALgDAIgBIAmAAIAHAAIgJgTIgHgPIAAgEQgPg+ATg/QAHgmAUgqIAGgLQAJgSAMgNIADgFQAMgNAQgFQALgEAMADQAHACAHAEQAFAEAEAFQAFAJAAAMIgBAGQAAALgFAKQgKApgJAWIgDANQgKAegCAjQgCAFABAEQgCAQAAARQAAATACAVIAEAjIAFAWQAFAQgDARIAAACQgDARgMAIIgFACQgSAJgVAEIgGAAQgNACgUAAIgJAAg");
	this.shape_165.setTransform(-19.4,49.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#EE000C").s().p("AhXDhQgbgKADgeQAEgfAegOQAWgLANAAQAbgBATgEQAAgBgYg4QgVhGAChAQABgqASgtQAMgeAMgUQAKgPAQgGQAUgIASAMQARAKABAZQABAMgDAKIgNBSQgDAeAAAoQABAmANAzQALApALAUQAJASgBATQgBAWgQAIQgRAIgXAEQgPADglAEQgjAFgYAAQgVAAgKgEg");
	this.shape_166.setTransform(-19.2,50);

	this.instance_7 = new lib.legbookleft();
	this.instance_7.setTransform(-15.3,32.5,1,1,0,0,0,15.1,5.5);
	this.instance_7._off = true;

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#EE000C").s().p("AjdAXQgvhnA3gYQAtgIAnA2IAaAvIB4g/ICPgyQA3gKAVAjQAXAmgtAZIkHB4Qg8AmgpAEIgDABQgSAAgyhog");
	this.shape_167.setTransform(-28.7,43.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#EE000C").s().p("Ag4C4QhLgZANgtQATgtAtACIBBAQQgmgrAbhnIAlh0QAZgiAiAMQAXAOABAhIgmBeQgKAXgEAeQgDAdAFAXQARArARAQQAxBYhbAFg");
	this.shape_168.setTransform(-22.7,49.6);

	this.instance_8 = new lib.legshape();
	this.instance_8.setTransform(-10.8,34.5,1,1,19.7,0,0,10.1,6.2);
	this.instance_8._off = true;

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#EE000C").s().p("ABtCcQg/gMgFhvIhVBeQhKAeglhVQgXgpgMh6IAAgFQALg0AhgHQArgDAKAsQADA+AbBBIBzh6QCFhCAGDiQABBphKAAIgJAAg");
	this.shape_169.setTransform(32.8,41.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#EE000C").s().p("ABaCcQgIgBgGgEQgvgagChZQgkAqgiAuIgIAEQg9AQgfhOIgBgEQgSgrgIhiIgBgPIAAgEQALgyAggIQArgDAKAsQABAQACAQQAFAvATAvIBmhjQAugUAdATQAtAggCB+IgBAOQgHBKg7AAIgPgBg");
	this.shape_170.setTransform(30.5,41.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#EE000C").s().p("ABHCcQgHgCgGgDQgtgfAAhTQgeAlgYAvIgHAEQg4AKgahMIgCgEQgPgtgGhdIAAgOIAAgEQAMgxAggHQAqgDAKAsIADAgQAEAuAQAvIBbhNQAogOAaATQAmAngJBtIgCAMQgIA9gyAAQgKAAgLgCg");
	this.shape_171.setTransform(28.2,42.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#EE000C").s().p("AAzCcIgMgGQgpgkAChLQgaAggOAuIgGAEQgyAFgXhKIgBgEQgNgvgDhYIAAgNIAAgEQAOgwAfgHQApgCAKAsIADAfQADAuAOAuIBOg2QAkgJAXAVQAdAqgOBgIgDAKQgKAwgqAAQgLAAgPgEg");
	this.shape_172.setTransform(26,43.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#EE000C").s().p("AAfCbIgMgHQgngoAFhEQgVAbgFAuIgDAFQgtgBgThIIgBgEQgKgwgBhUIABgNIAAgEQAPguAegHQAogBAKArIADAfQACAuALAtIBDgfQAfgFAUAYQAVAvgUBQIgEAIQgLAkghAAQgOAAgSgHg");
	this.shape_173.setTransform(23.8,44.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#EE000C").s().p("AAKCaIgKgIQgngsAIg+QgPAXAEAtIgBAFQgogGgQhGIAAgEQgIgzAChOIABgMIABgEQAPgtAegGQAogBAKArIACAeQABAuAHAtIA5gJQAbABAQAWQANA3gaBAIgFAGQgMAZgZAAQgQAAgVgKg");
	this.shape_174.setTransform(21.8,45);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#EE000C").s().p("AgKCYIgKgIQgngxALg3QgKASAOAtIABAGQgigMgNhFIAAgEQgFg0AEhJIACgMIABgDQAQgsAdgGQAngBAIArIADAeQgBAtAHAuIAtAKQAWAGANAbQAGA8ghAwIgFAEQgMAPgSAAQgSAAgXgPg");
	this.shape_175.setTransform(19.8,45.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#EE000C").s().p("AghCWIgJgJQgZglgCghQgJgVgEgfIAAgEQgCg2AGhDIADgMIABgEQASgqAbgGQAlAAAKAqIADAeQgCAtAEAuIAiAgQARALAKAdQgDBBgmAgIgGACQgKAHgMAAQgTAAgdgVg");
	this.shape_176.setTransform(17.9,46.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#EE000C").s().p("AgxCSIgIgKQgjg7AQgoQABAHAZAiQgMgZgEgtIAAgEQABg5AIg9IAEgLIABgEQASgoAbgGQAlAAAJAqQACAOABAQQgDAsACAtIAWA3QAMARAHAdQgLBHgsARIgHAAQgFABgGAAQgYAAgigeg");
	this.shape_177.setTransform(15.3,48);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#EE000C").s().p("AAKC3QgegDglgpIgHgKQgihAATgiQAHAEAqAsIAGAHQgSgcgBg9IAAgEQADg9ALg5IAEgKIACgDQATgoAZgFQAlABAKApQACAOAAAQQgEArAAAtIAKBOQAHAVAEAfQgTBNgyAAIgIgBg");
	this.shape_178.setTransform(11.9,49.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#EE000C").s().p("AAGDAIgHgEQgjgNghgtIgGgLQgghEAVgbQANgBAzAsIAIAHQgMghACg8IAAgEQAGhAAOgyIAEgKIAAgEQAVglAZgGQAlACAKApQACANAAAQQgFAsgDArIgCBlQADAaAAAiQgWBFgrAAQgIAAgJgDg");
	this.shape_179.setTransform(8.9,51.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#EE000C").s().p("AgNDGIgKgGQglgYgcgxIgGgLQgehJAXgUQASgGA+AsIAKAHQgHgnAFg5IABgEQAIhDAOgsIAGgKIABgDQAWglAZgFQAkACAJApQADANAAAQIgMBWIgNB8IgFBCQgZBBgpAAQgOAAgPgJg");
	this.shape_180.setTransform(6.7,52.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#EE000C").s().p("AgrDEQgugngYg9Qg5iaChBoQgBguAKg6QAJhFASgnQAbguAcgGQAvADAABEIg1ExQgdA9gnAAQgXAAgcgXg");
	this.shape_181.setTransform(4.5,54.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#EE000C").s().p("AgIDRQgPgFgPgLQgPgMgNgRQgZgfgQguIgCgFQg0iOCVBeQgBgoAJg4QAJhAARgkQAZgrAagFQAXABALAQQAOAVACAoIAAAJIgEBBQABA3gKBOQgHAsgNAjIgDAGQgRAcgSAHQgUAQgWAAQgKAAgIgCg");
	this.shape_182.setTransform(5.8,53.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#EE000C").s().p("AgHDLQgRgCgQgMQgRgMgNgUQgZgfgPg1IgCgFQgviDCHBUQAAglAJgzQAKg7APghQAXgnAYgFQAYAAAMATQANAZAEApIAAAJIAHAwQANAsgJBbQgFAzgUAfIgFAFQgUAXgQgCQgYAWgdAAIgJgBg");
	this.shape_183.setTransform(7.8,52);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#EE000C").s().p("AgtC6QgSgMgOgXQgZgggPg9IgCgEQgqh3B7BJQAAgiAIguQAKg2AQgeQATgkAXgEQAaAAALAVQAMAbAGArIAAAKIATAfQAYAigHBoQgFA5gaAbIgGAEQgWASgQgKQgeAcgiAAQgSgCgRgKg");
	this.shape_184.setTransform(10.2,50.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#EE000C").s().p("Ag0C1QgTgMgPgZQgZgigOhDIgCgFQglhrBuBCQAAghAJgqQAJgwAPgcQATggATgEQAcAAALAYQALAeAHAtIACAKIAdAOQAlAWgGB2QgEA/ghAXIgIADQgYAOgOgUQggAegjAFIgDAAQgSAAgRgKg");
	this.shape_185.setTransform(12.7,49.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#EE000C").s().p("Ag6CwQgVgMgPgcQgZgigOhKIgBgFQgghgBgA4QABgeAIglQAJgrAOgZQARgcATgEQAcgBALAbQAKAhAJAvIACALIAogEQAxALgECEQgEBFgmAUIgKABQgbAJgNgdQghAggjALIgIAAQgSAAgPgJg");
	this.shape_186.setTransform(15.2,48.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#EE000C").s().p("AhBCrQgXgMgPgeQgZgkgNhRIgCgFQgbhVBUAvQACgbAHghQAIglANgWQAQgZARgEQAegBALAeIAUBUIADAMIAygVQA9AAgCCSQgDBKguAQQgGABgFgBQgdAEgLglQgjAiglAQIgMACQgQAAgPgJg");
	this.shape_187.setTransform(17.8,47.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#EE000C").s().p("AhICmQgXgMgRghQgYgkgNhXIgBgEQgWhMBHAlQACgYAHgcQAIggALgTQAPgVAPgEQAigBAJAgQAHAnANAyIAEANIA9gnQBJgKgBCeQgCBRg0AMQgHABgGgCQgfgBgKguQglAlglAVQgJACgIAAQgQAAgOgIg");
	this.shape_188.setTransform(20.2,46);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#EE000C").s().p("AhPCiQgZgNgRgjQgXglgNheIgBgFQgRhAA6AbQACgUAHgYQAHgbALgQQAMgSAOgDQAkgCAKAjQAHAqANA0IAEANIBIg3QBVgWAACsQgBBXg6AJQgIgBgHgCQghgGgJg2QgmAmgmAaQgLADgKAAQgPAAgOgGg");
	this.shape_189.setTransform(22.8,44.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#EE000C").s().p("ABYCfQgkgKgHhAQgoApgmAfQgdAJgYgLQgagMgSgmQgXgmgNhlIgBgFQgLg0AtARQACgRAHgUQAHgWAJgMQALgPAMgCQAlgCALAkQAFAuARA1IAFAOIBRhIQBhghACC6QgBBdhAAEQgKAAgHgEg");
	this.shape_190.setTransform(25.3,43.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#EE000C").s().p("ABYCcQgmgPgHhJQgpArgnAkQgfALgYgLQgcgMgSgpQgYgngMhsIgBgEQgGgpAgAGQADgNAGgPQAGgRAJgKQAJgKAKgDQAogCAKAnQAEAxATA2IAFAPIBchZQBugsADDHQgBBjhGABQgKgBgIgEg");
	this.shape_191.setTransform(27.8,42.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#EE000C").s().p("ABrCfQgLgCgJgFQgogUgFhRQgqAtgpApQggANgagLQgdgNgTgrQgXgogMhzIAAgEQgCgeATgDQAEgLAFgKQAGgLAIgHQAIgHAIgCQApgDALAqQADA0AUA4IAGANIBnhpQB5g3AFDVQAABnhJAAIgEAAg");
	this.shape_192.setTransform(30.3,42);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#EE000C").s().p("AhWCEQgUgBgLgFQgXgLgOgmQgGgPgJggQgGgVgBgJQAAgLABgPIAFg4QACgWAGgKQALgRAVAAQATgBANARQAJAMAEAdIAKBIQABAGACAEQADAHAHABQAEAAAEgDQAPgIAUgRIAYgbIAPgQQAIgKAIgFQAWgQATAHQALAEAOAQQAQASAGAKQAHALAIAUIANAeIASAfQAJATgEAPQgDAQgRALQgOAIgQAAQgRAAgNgIQgOgIgLgRQgGgIgLgXQgPAUgoAWQgcARgUAFQgKACgPAAIgLAAg");
	this.shape_193.setTransform(31.9,44.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_121}]},11).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},8).to({state:[{t:this.shape_126}]},7).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_132}]},5).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_148}]},4).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},7).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},6).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_8}]},8).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_193}]},6).to({state:[{t:this.instance_8}]},6).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_8}]},5).to({state:[{t:this.instance_8}]},8).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(89).to({_off:false},0).to({rotation:-7.5,x:-15.4},6).to({_off:true},1).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(103).to({_off:false},0).to({regY:6.3,rotation:38.5,x:-10.7,y:34.6},3).to({regY:6.2,rotation:-29.7,y:34.5},5).to({rotation:19.7,x:-10.8},8).to({_off:true},1).wait(37).to({_off:false,rotation:19.7},0).to({regY:6.3,rotation:38.5,x:-10.7,y:34.6},3).to({regY:6.2,rotation:-29.7,y:34.5},5).to({rotation:19.7,x:-10.8},8).wait(9));

	// leftleg
	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FF868C").s().p("AgKAnQgDgCgDgDQgCgDAAgEQABgDADgGQAIgNAJgTQgDADgGAEIgDACIgEACQgFABgFgCQgFgDAAgFQgBgFAFgFIAJgGIAGgEQAJgFADgBIAHgBIAHAAQADAAAEADIAEAHQACAHgDAIQgCAGgFAIIgHANIAIACQADACABAEQABADgBAEQgBADgDACQgDACgDAAIgGABIgGACQgDACgDAAIgHgBg");
	this.shape_194.setTransform(11,26.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FF868C").s().p("AgQA/QgGgDgEgFQgDgFAAgGQABgFAGgKQAMgUAQghQgFAFgLAGIgFAEIgGADQgIADgIgEQgIgFgBgIQgBgJAIgHQADgEALgGIAKgGQAOgJAHgBIALgCIALAAQAFABAGAFQAEAEACAGQAEAMgEANQgDAKgJANIgLAVQAIABAFADQAFADABAGQACAGgCAFQgBAFgFAEQgFADgFAAIgKABQgCAAgIAEQgFADgGAAQgGAAgEgCg");
	this.shape_195.setTransform(12.5,28);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FF868C").s().p("AgXBXQgIgDgFgHQgFgHAAgJQABgHAIgOQASgbAWguQgHAHgQAIIgHAFIgIAEQgLAEgLgFQgLgGgBgMQgBgMAKgKQAFgFAPgJIANgIQAUgMAKgCIAQgCQAJgBAFABQAIABAHAHQAHAGADAIQAFAQgGATQgFAMgLATQgNAVgDAJQAMACAGADQAGAFADAIQACAHgCAIQgCAHgHAFQgHAFgHAAQgJgBgEABQgEABgKAFQgIAEgJAAQgHAAgGgDg");
	this.shape_196.setTransform(14,29.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FF868C").s().p("AgeBvQgKgEgGgJQgHgJABgLQABgJALgSQAVgiAeg8QgJAJgVALIgJAGIgKAFQgPAGgNgHQgOgIgCgPQgBgPANgNQAGgHATgLIARgKQAagPAMgDQAJgDAMAAQAMgBAGABQAKABAJAJQAIAIAEAKQAHAVgIAXQgFARgPAXQgQAbgEAMQAPACAHAFQAJAGADAKQADAKgDAJQgDAJgJAGQgIAGgJABQgMgBgFABQgEABgNAGQgLAGgLAAQgKAAgIgEg");
	this.shape_197.setTransform(15.5,31.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FF868C").s().p("AglCHQgMgFgIgLQgIgLABgNQABgMANgVQAbgqAkhIQgLAKgaANIgLAIIgMAGQgSAHgQgIQgRgKgCgSQgCgTAQgPQAIgJAXgOIAVgMQAfgSAPgEQALgCAPgBQAOgBAHABQANACALAKQAKAKAEANQAIAYgJAdQgHAUgSAdQgTAhgFAOQASADAJAGQAKAHAEAMQAEAMgEALQgDALgLAIQgKAHgLABQgOgBgGABQgGABgPAIQgOAHgOAAQgLAAgKgFg");
	this.shape_198.setTransform(17.1,33.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#EE000C").s().p("AhLB9QgPgEgJgPQgIgOABgRQABgSANgdIAVgoQAIgOAHgLQAJgKAAgGQAAgEgDgFIgEgIQgHgNAEgOQADgOAMgIQALgIAPABQAPABAIAKQAMAMAFAbQAFATgBAMQgBAYgYAhIAogMQAagGALAEQASAEAHAWQAGAVgKAPQgHANgbALQhDAdgsALQgMADgIAAQgHAAgEgCg");
	this.shape_199.setTransform(21.1,41.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#EE000C").s().p("AhHCDIgEgCQgMgFgHgMQgHgNABgQQAAgKAEgNQADgMAGgMIACgEIALgRIAOgTIACgDIAIgNIAGgMIABgCIACgFQAEgHAAgHQAAgEgCgFIgCgGIgCgDQgFgOADgOIABgDQAEgNAKgIIADgDQAIgGAJAAIAIABIAHACQAKADAHAGIABACQAIAJAEAPIAFAQQAEAUgBAOQAAAOgGARQgFAOgLAQIAEAAIASgEIAEAAQAIgCAGABQAKAAAHAEQAGADAEAFIAEAEQAFAHADAKQAEASgIAPIgBABQgHAMgVAKIgDABQgOAGgPAEQggAKgZAGIgUADIgPACQgIAAgGgCg");
	this.shape_200.setTransform(16.7,42.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#EE000C").s().p("AhDCIIgDgCQgLgFgHgLQgHgNAAgPQAAgJAEgPQAEgOAHgLIACgEQAGgKAHgIIARgTIADgDQAGgHADgGIAFgMIABgDIABgGQADgHAAgIQAAgEgCgGIgCgGIgBgDQgEgQADgNIABgEQADgPAKgJIADgCQAJgHAIgBIAIABIAJACQALAEAHAHIACACQAHAJAFAQIAEASQAEAUAAAPQAAAQgFASQgEARgLAQIACABIAJABIABABIAHADQALACAGAFQAGADAEAGIADAFQAFAHABAJQAEARgHAOIgBACQgHAMgUAIIgCABQgOAGgOACQgfAHgXADIgSABIgJAAQgLAAgIgDg");
	this.shape_201.setTransform(12.3,44.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#EE000C").s().p("AglCSQgQgBgJgFIgEgCQgKgFgGgKQgHgMAAgOQgBgLAFgPQAFgPAHgMIACgEQAHgJAJgJIAUgUIADgCQAHgGADgHQADgGABgGIAAgFIABgFQACgIAAgJIgCgKIgCgHIAAgEQgEgRADgOIABgDQAEgQAKgKIADgDQAHgJAKAAIAJABIAKADQAMAFAHAGIABACQAIAKAEAQIAEAUQAEAUABASQAAAQgEAUQgEATgKARIABABQADADgFAEIgBACQgBADABAEQALADAHAHQAFAEAEAGIADAGQADAGABAJQADAQgHANIgBACQgHAMgRAIIgDAAQgMAFgOABQgdACgWABIgRAAg");
	this.shape_202.setTransform(7.9,46.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#EE000C").s().p("AAaCbQgagBgWgCIgQgCQgOgCgJgFIgDgDQgJgFgGgJQgHgMgBgNQAAgLAFgQQAFgSAIgLIADgEQAHgJALgJIAWgTIAFgEQAIgFACgHQADgGABgHIgBgFIAAgHQABgHAAgLIgCgKIgBgIIAAgDQgDgTADgOIABgDQAEgSAIgLIADgDQAJgKAKAAIAKABIAKAEQAOAFAGAHIACACQAIAJAEASIAEAVQAEAVABATQAAASgDAUQgDAWgKARIAAACQgBAFgLAIIgEADQgGAFgBAGQAMAEAGAIQAGAFADAIIACAFQADAHABAIQABAOgHANIgBABQgHAOgOAGIgDABQgIACgKAAIgHAAg");
	this.shape_203.setTransform(3.7,47.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#EE000C").s().p("AANClQgYgEgUgFIgPgEQgNgEgIgFIgDgDQgIgGgGgIQgHgLgBgMQAAgLAFgSQAGgTAIgLIADgEQAIgJANgJIAZgTIAFgDQAJgGADgHQADgGgBgIIAAgGIgCgHIAAgUIgCgLIAAgIIAAgDQgBgUACgOIABgEQADgTAIgMIADgDQAKgLALAAQAFgBAGACIAKAEQAOAGAHAHIACACQAHAJAFATIAEAXQAEAVABAVQAAAUgCAUQgBAZgKARIgCADQgEAIgRAKIgHAEQgLAIgDAIQAMAFAGAKQAFAFADAJIACAFQACAHAAAHQAAANgGANIgBABQgHAOgMAEIgCABIgLABIgOgBg");
	this.shape_204.setTransform(0.4,50);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#EE000C").s().p("AABCvQgXgHgTgJQgYgJgLgKQgTgQgCgTQgBgMAGgSQAGgWAJgLQAIgKATgLIAcgTQAPgIADgIQADgHgBgIIgDgPQgCgKgBgfQAAgcADgPQAEgXAKgOQAKgMAMAAQAIgBAOAHQARAHAGAJQAIAKAEATQAMA1gCA7QgBAggNAQQgIAKgXAOQgXAMgIAMQAUAKAGAXQAGAVgKAWQgIAQgKADIgIABQgHAAgKgDg");
	this.shape_205.setTransform(-3,52.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#EE000C").s().p("AAYChIgKgBIgfgGIgKgCQgRgEgKgGQgMgGgGgIQgFgFgCgGQgCgDAAgFIAAgEIABgPIAAgBQADgQAFgLIACgDQAGgLAOgMIAPgPIAHgGQAHgGACgGQAEgDABgDQABgGAAgIIgDgPIgDgWIgBgRIAAgDIAAgRQAAgMABgJIACgJQAFgQAKgLIACgBQADgGAGgDIAHgCQAGgBAJAEIAFACIAGACQAKAFAFAFIAEAEQAFAIADANQAFAQADATQAFAfAAAhIAAAJQgBAQgFALIgDAHQgDAGgFAFIgFAGIgIAIIgDADIgBABIgEAEQgMAHgBAGQANADAJAKQAFAEADAHIACAHQADAHAAAJQgBAKgDAJQgDAMgHAGIgEADQgGAEgKAAIgIAAg");
	this.shape_206.setTransform(2.5,49);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#EE000C").s().p("AgKCSQgRgBgLgDQgNgDgIgFQgFgDgDgEQgEgDgBgEIgBgEIgBgOIgBgBQABgPADgLIABgDQAEgMAJgNIALgQIAFgHIAHgMIADgIQABgFgBgHIgDgOIgCgWIgDgQIAAgDIgCgRQAAgLACgJIACgJQAFgPAJgKIACgCQAGgFAFgDIAHgBQADgBAHACIAFABIAEACQAJADAGAEIADADQAGAHAEALQAEANAEARQAFAbACAdIAAAHQABAQgEAIIgCAIQgBAGgDAGIgEAGIgHAKIgCAEIgBABIgCAFQgEABADADQANABALAGQAGADAEAFIAEAGQADAGABAKQABAKgCAKQgCAMgFAHIgFAFQgHAHgOACIgKABIgfABIgKAAg");
	this.shape_207.setTransform(8.6,46.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#EE000C").s().p("Ag0CHQgHgBgEgDQgFgBgDgEIgCgDQgCgGgBgIIAAgBQgCgOABgLIAAgDQABgMAGgOIAFgSIADgHQADgHABgGIACgJIAAgLIgDgOIgDgUIgDgQIgBgCIgCgRQgBgLACgJIADgIQAEgOAKgKIABgBQAGgGAGgCIAFgCQAFgBAGACIADABIAEAAQAIACAFADIABACQAHAFAEAJQAFAKAEAQQAFAXAEAYIABAHQABANgCAIIAAAIIgCAMIgDAHIgEAKIgCAFIAAACIgBAFQACgCAIgBQAOgCAMADQAHABAFADIAFAFQAFAGADALQABAKAAAKQgBAMgFAJIgDAFQgGAKgOAFIgJAEIghAHIgJACIgdACQgNAAgJgCg");
	this.shape_208.setTransform(15.4,43.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#EE000C").s().p("Ag1CDQgGAAgEgEIgDgDIgFgMIgBgBQgEgNgBgMIgBgDQgBgMABgPIABgTIABgIIACgOIAAgJIgBgLIgCgNIgDgTIgFgPIAAgCIgEgRQgBgKACgJIADgJQAEgNAJgJIACgBQAGgFAFgDIAFgBQAEgBAEABIADAAIADAAQAGAAAGABIADACQAHADAFAHQAEAHAFAOIAJAnIABAGQADAKAAAHIAAAJIACAPIgCAIIgCAJQABADgCADIAAACIABAGQAJgHAMgFQAOgEAOgBQAIAAAGACQAEABADACQAGAFADAMQADALABAKQAAAMgDAKIgDAHQgGALgMAJIgJAHIghAOIgLAEIgcAHIgZAEIgGABIgHgBg");
	this.shape_209.setTransform(21.6,42);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#EE000C").s().p("AgyCBQgHgEgGgMQgGgMgEgLQgHgWgEgfIgDgXQgEgngEgMIgGgQIgEgQQgCgOAFgNQAFgNAKgJQALgJALAAIAEgCQAGgCAHABQAIACAFAFQAEAEAGANIAPAjQAEAIABAGIAFAZIAAAJIAAAMQAAAFAAAEIABAFQAcgUAigJQAQgEAIAFQAIAEAFANQAJAXgEAUQgFAXgXATQgPAMgdAPQghAQgWAIQgKADgIAAQgGAAgEgCg");
	this.shape_210.setTransform(27.4,40.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#EE000C").s().p("Ag3CAIgFgDIgCgCQgDgFgEgJIgCgHQgCgIgBgIIgBgNIAAgcIAAgIQABgIgBgJIAAgGIgBgIIgCgLIgFghIgBgDIgEgNIgDgRIAAgKQAAgJAEgIQADgJAGgHIAGgGQAHgGAHgCQAEgBAGABIABgBIAEAAQAGAAAFABIADABQAHADAFAHIABABQAEAGAEANIALAqQAEAKAAAGIADAYIAAABIgBAIIgBAKIgCAIQABADAAAEIABgBQALgJAPgFQALgDALgBQAKAAAGABIAGADQAHAFAEANIADARQABAPgEALQgEALgJAJQgHAHgLAHQgIAFgMAFIgZAJIgLADQgTAFgOACIgGABIgHABQgGAAgFgCg");
	this.shape_211.setTransform(22.6,41.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#EE000C").s().p("AgwCDIgFgBQgIAAgFgGIgDgDIgCgCQgCgGgCgIIAAgIQgCgHACgIIABgMIAGgaIABgIQADgIAAgIIAAgGIgBgIIgCgMIgFghIAAgDIgDgOIgDgRIAAgKQABgJADgIQAEgKAHgHIAFgGQAHgGAHgBQAGgCAGACIACAAIAFABIAMADIADACQAHAEADAIIAAABQAEAJAEANQAGAYAFAZQACAMAAAIIABAUIgBABIgCAIIgCALIgEAIIAAAFIABAAQADgFALgBQALgBALABQAIABAGADIAFAEQAFAGADAMQACAJgBAIQAAAPgFAKQgFAJgLAGQgIAFgKAFIgVAGIgWAFIgMABIgOAAQgKAAgIgBg");
	this.shape_212.setTransform(17.8,42.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#EE000C").s().p("AgbCKQgUgDgJgHIgEgCQgGgDgDgHIgCgEIgBgDIgBgOIABgHQAAgHADgIIAFgLIALgYIADgIQAEgHABgIIAAgGIgBgIIgCgMIgEgiIgBgEIgCgOIgBgRIAAgKQABgJADgIQAEgKAHgIIAGgGQAHgGAHgBQAGgBAIADIACAAIAFACQAGACAFADIADADQAHAFAEAKIAAABQAEAKAEAPQAGAbADAdIAAAAQACANgBAJIgCAUIgBABIgDAHIgEAKIgEAHIgCAFQgBAAAAAAQAAABABAAQAAAAABAAQABAAABABQAMAAAJAEQAIACAFAGIAEAFQAEAGACALQABAJgCAIQgCAQgGAHQgGAIgMADIgUAGIgUADIgXAAIgLgBg");
	this.shape_213.setTransform(12.3,44.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#EE000C").s().p("AgBCUIgZgDIgLgEQgUgHgGgLIgDgEQgEgFAAgJIgBgEIAAgEIABgOIADgHQACgHAEgHIAIgLIARgWIAFgHQAFgIABgHIABgGIgBgGIgCgOIgEgjIAAgEIgCgOIAAgRIABgLQABgJADgIQAEgLAHgHIAGgGQAHgGAGgBQAGgBAJADIADABIAGADQAJADAEAEIAEAEQAGAGAEALIAAABQAEANADAQQAGAeABAgIAAABQABAOgCAIQgBAMgDAKIgBABIgEAGIgFAJIgGAHIgDAFIgBAAQgJAEABAFQAMACAIAHQAHADAEAHIADAGQAEAHAAALQAAAIgCAJQgEAPgIAGQgGAHgOAAIgUACIgTgCg");
	this.shape_214.setTransform(6.5,47);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#EE000C").s().p("AATCiIgTgCIgVgFIgZgIIgLgGQgTgLgEgPIgBgHQgCgGACgLIABgFIAAgEIAEgPIAEgHQADgHAHgGIAKgKIAXgVIAGgGQAHgHACgFIABgGIAAgIIgDgPQgCgMgCgYIAAgEIAAgOIAAgRIABgLQACgJADgIQAEgLAHgIIAEgGQAHgGAIgBQAHgBALAFIACABIAIADQAJAFAFAEIADAFQAGAIADANIABABQAEAPACAQQAGAiAAAkIAAABQAAAPgDAKQgCAMgFAIIgBABIgEAGIgIAIIgHAGIgFAEIAAABQgRAJgDAIQAMAEAIAJQAFAFAEAIIACAHQACAIAAAKQgBAJgDAIQgGAPgJAFQgEADgJAAIgKgBg");
	this.shape_215.setTransform(1.8,49.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#EE000C").s().p("ABQCdQgQgJgCgVQAAgPAOgZIhAgKQgWgEgOgEQgUgIgVgOQgpgdgagiQgdgogHgsQgFghAPgRQAIgKAPgBQAOgCAMAIIASAUIAOAOQAIAKAJATQAWAyAXASQAOAKALACQALABAOgHIAhgMQATgHAPgCQASgCARAFQARAGAJAPQAHANAAAeQgBAggEAPQgFAWgUAhQgNAWgMAGQgIAFgIAAQgJAAgKgGg");
	this.shape_216.setTransform(27.1,45.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#EE000C").s().p("AABCyQgQgEgPgFIgNgFQgYgJgMgMIgIgIQgJgMgBgNIgBgDQAAgIAFgMIADgKQAGgNAGgJIAGgJQAKgMARgMIAIgGIATgPQANgJAEgKQABgGAAgJIAAgDIgBgNIAAgIIgDgWIgCgLIgCghIABgKIABgLIAEgKQACgFACgEIAGgIIACgBIAIgFQAGgDAHAAIAIABIAKAFIAFADIAEACQANAIAGAIIAFAJQAFAJADANIADANIADAQQACAOABANQAAAYgCAXIAAALIgBAGIgBADQgDAagKAQIgBABQgBAGgIAGIgHAIIgEAEQgJAIgFAIIgDAHIAKALQAFAJABAMIAAADQABATgOATQgGAIgHAEQgEADgEAAIgJACQgHAAgJgDg");
	this.shape_217.setTransform(0.5,51.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#EE000C").s().p("AAAC2QgRgDgPgFIgNgFQgYgIgNgOIgIgJQgJgNAAgNIAAgCQABgJAGgMIAEgJQAHgMAHgKIAHgJQALgNAQgMIAHgHIASgRQAMgKADgLQACgHAAgJIAAgDIAAgNIgBgIIgCgWIgDgMIgFgiIgBgKIABgLIADgKQACgGAEgEQACgEAFgCIACgBIAIgEQAHgDAHACIAIACQAGACAEADIAFADIAEADQAMAKAGAJIAGAJQAFAKAEAMIADAOIADAQQADAQAAAMIgEAxIgBAKIgBAFIgBAFQgEAagKASIgBABQADAFgDAFIgCAHIgBAFQgFAIgDAKIgCAIQAEAGACAGQADAKgCALIgBADQgDAQgSAQQgHAHgIADIgJADIgLACQgHAAgIgCg");
	this.shape_218.setTransform(4,51.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#EE000C").s().p("AAAC6QgSgCgPgEIgPgFQgXgJgNgOIgJgKQgJgPACgNIAAgBQABgIAIgNIAGgJIAPgVIAIgJQANgPANgMIAHgHIARgTQALgLACgMQADgIABgJIAAgEIABgNIgBgIQgBgKgEgNIgCgLIgJgiIgCgLQAAgHABgFQAAgFACgFQADgGAFgEQACgDAGgDIABgBIAKgCQAGgCAJADIAHACIAKAGIAFAFIAEADQAMAMAGAJIAGAJQAGALAEAMIAEAOIADAQQADASgBAMQgCAZgDAYIgCAJIgCAHIgBAFQgFAbgKATIgBACQAIADAAAEQADADABAEIACAFIgCAUIgBAJQADAIAAAGQABAKgHAKIgBADQgHAOgWANQgIAFgJADIgKACIgPACIgLgBg");
	this.shape_219.setTransform(7.5,51.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#EE000C").s().p("AgCC+QgUgBgPgEIgPgEQgYgJgNgPQgFgGgEgGQgJgQADgMIAAgBQACgIAKgNIAHgIIARgVIAJgKIAagcIAGgIQAJgKAIgKQAIgMADgOQADgIACgJIAAgEIACgNIAAgJQgCgKgGgNIgDgLIgMgjIgDgMQgBgGABgGQAAgFADgFQADgGAFgFQAEgCAGgCIABgBIALgBQAGgBAJAEIAHADQAGADAEADIAGAGIADAEQALANAHAKIAGAJQAHAMAEAMIAEAOIADARQAEATgBALIgIAyIgDAKIgCAHIgBAFQgGAbgKAWIgBABQAMACAFAEQAGACAEAEIAEAFQAEAJAAAOIAAAKQABAIgBAHQgCAKgKAKIgBACQgNAMgaAKQgIADgLADIgKACIgVABIgFAAg");
	this.shape_220.setTransform(11.2,50.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#EE000C").s().p("AgwC/QgsgJgSggQgJgSAFgNQACgIAMgMIAbgdQAcgcAOgUQAYgfAIgpQADgOgBgJQgCgKgFgMQgKgUgLgcQgHgOABgKQABgFACgFQADgHAHgEQAEgDAKgCIAKAAQAIABAOAIIAKAHIAJALQARAXAHAMQAMAUAEATIAEARQAEAVgCAKIgKAyQgEAPgCAEIgCAFQgGAcgLAYQARABAJACQAOAEAIAIQAIAJACAPQADARgFALQgFAKgNAKQgWAPgwAHQgYADgSAAQgSAAgOgDg");
	this.shape_221.setTransform(15.6,50.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#EE000C").s().p("AgeCxQgUgDgPgFQgLgFgHgJQgHgIgCgIIAAgGIgBgBQAAgHAHgLIACgHIAJgQIADgGIAOgcQAGgLACgJQAFgNADgOQADgKABgLQADgKgCgNQABgNgEgJIgHgPIgFgHQgPgVgMgZQgGgLgCgHIgBgGQAAgFABgEIABgCQACgFADgEIAFgDIAGgDIAIgCIALAAQAJABAOAHIAKAHIAEADIAGAGIAPAVIAKANQANASAGARIAGAQQAFATABAKIgBAuIgCASIgBAEQAAAbgHAVIAZAFIAFABIAPAFQAHAEADALIACAHQAAAGgBAGQgCAIgIAIIgFAEQgMAKgfALIgIACQgeAKgXABIgEAAg");
	this.shape_222.setTransform(17.2,49.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#EE000C").s().p("AgUCeQgHgFgEgGIgDgFIAAAAQgCgGABgLIgBgGQABgHAAgJIABgGIADgcQABgLgBgKIgBgaIgDgWQADgGgIgPQgCgMgFgKIgLgOIgFgHQgTgWgOgXQgIgLgCgGIgCgGQgBgFABgFIABgCQACgFADgEIAFgEIAGgDIAHgCQAGgBAGAAQAJABAPAHQAGADAEADIAEADIAGAFIATAUIAJAMQAOARAIAQIAIAPIAKAaQAFAXADATIABAQIABAEQAFAZgCATIAYAGIAEABQAHACAGgCIABgBQAHAAADAHIACADIACAHQABAFgDAHIgCADQgCAKgXAOIgGAEQgXAQgUAHIgDABQgRgBgNAEQgKgBgIgFg");
	this.shape_223.setTransform(15.1,48.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#EE000C").s().p("AAnCbQgIgBgFgEIgFgDIgBgBQgFgEgEgKIgEgHIgGgQIgBgGIgHgcQgDgLgFgKIgKgaIgJgWQACgFgOgPQgEgKgIgKIgMgPIgGgGQgYgXgPgVQgLgLgCgFIgCgHQgCgFABgGIAAgCQACgFAEgEIAEgEIAGgDIAIgDIAMgBQAJABAPAGIAKAGIAEACIAGAFIAWATIALALQAPAQAJAPIAJANIAOAYQAKAVAHARQADAKADAEIABAEQAMAXACARQASAGAFABIADABQAGABAGgHIAAgBQAHgEADACIADAAIAFACQADACADAFIABADQAIAJgOATIgEAFQgQAVgRAOIgCACQgNABgQANQgGACgGAAIgFgBg");
	this.shape_224.setTransform(13.2,47.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#EE000C").s().p("ABOCWIgHgCIgBAAQgHgEgKgJIgHgGIgNgQIgEgHIgUgbQgHgLgHgKIgTgaIgQgWQACgCgUgRQgGgKgKgKIgPgOIgHgHQgcgXgRgSQgMgMgDgFQgCgDgBgEQgDgGABgFIAAgCQACgGAEgEIAFgFIAGgDIAHgCQAFgCAHAAQAKABAOAFIALAGIADACIAHAEQAOAJAKAIIAMALQARAPANANIAKAMIARAVIAaAkQAEAHAFAEIACAEQASAVAGAPQATAIAEAAIACAAQAEACAGgMIABgCQAFgHAFgEIADgDQADgDAEAAQAHgBAHAEIAEACQASAHgFAZIgCAGQgIAagOAVIgCACQgJAEgQAVQgIAIgIACIgIABIgIgBg");
	this.shape_225.setTransform(12,47.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#EE000C").s().p("AB2CTIgBAAQgJgDgPgIIgLgGQgJgGgMgKIgGgHIgfgcIgYgUIgZgaIgXgVQACAAgagTQgJgIgMgLIgSgNIgHgGQghgZgSgRQgPgMgCgDIgFgHQgDgHAAgGIABgCQABgGAEgEIAFgEIAGgFIAHgCQAFgBAHAAQALAAAOAEIALAFIADACIAIAEIAZAQIANAJIAhAaIANALIAWATIAhAgIANALIAEAEQAXARALAMQATAKADgBIABABQADAAAFgQIABgCQAFgMAFgGIAEgGQAEgGAGgDQAJgDANACIAHACQAcAGADAaIAAAJQABAfgLAcIgCADQgGAGgPAdQgIAMgJAGQgIAFgKABIgJgBg");
	this.shape_226.setTransform(11,47.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#EE000C").s().p("AChCRQgPAAgggOQgNgGgPgLQgegVgVgNIhDguIgdgVQACAChOg0QhOg1gHgIQgJgJAAgLQABgNAQgJQATgLAoAQQATAJAQAKQDYCJAEgCQACgBAFgTQAHgZAIgPQANgYAoAGQArAGAJAqQAJAlgJAjQgDAJgPAmQgPAlgfAAIgCAAg");
	this.shape_227.setTransform(10.5,47.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#EE000C").s().p("ACYCHIgbgKIgRgFIgSgGIgKgFIgOgGIgngUQgegRgmgYIgdgUIgNgJIg8gpIgMgJQgogcgSgPQgKgIgCgDQgIgKACgKIAAgBQACgNAQgHIACgBQAKgEAOACQAMABASAIIACAAQARAIAQALIASALIA0AjQAhAVAbAQQA5AbAXAEQAKAEADgBQADgBAGgPIAIgOQAGgKAGgHQAFgGAIgDQAPgDAXAFQAUAGAMANQAMANAEARIACAIQADAWgEAUQgDALgFAJIgOAYIgJAOQgIALgJAGQgKAGgMAAIgIgBg");
	this.shape_228.setTransform(9.9,46.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#EE000C").s().p("ACWCAIgHgDQgKgHgNgGIgRgCIgTgDIgKgDIgPgDIgogPQgfgNgmgXIgdgUIgMgIIg6gpIgMgJQgmgdgSgQQgJgIgCgEQgHgJADgLIAAAAQAFgOAPgGIACgBQALgDAMACQAMACASAIIABAAQAQAIARALIARAMQAhAYASALQAfAVAeAOQA4AUAZgDQAKABAEgCQAEAAAIgMIAKgKQAHgGAHgEQAGgEAIgBQAPABAUAHQATAIALANQALANAEASIABAIQAEAXgHASQgEAKgHAIIgRASIgLAJQgKAIgKACIgLACIgJgBg");
	this.shape_229.setTransform(9.3,44.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#EE000C").s().p("ACfB6QgKgBgJgEIgFgDQgLgMgKgGIgQABIgTABIgMAAIgOgBQgWgEgUgFQghgKglgXIgdgSIgMgIIg3gqIgMgIQglgegRgRQgJgHgCgGQgEgJADgKIAAgBQAHgOAPgFIACAAQAMgCAKABQALACATAJIABAAQAPAHAQAMIARANQAjAaAPAKQAcATAiANQA3ANAbgJQAJgBAGgCQAGgCAJgIQAFgEAHgCQAJgEAIgBQAHgBAHACQAPAEARAJQASALAKALQAKAPAEASIABAIQADAYgKAQQgFAJgIAGQgIAEgNAIIgMAGQgJADgHAAIgGgBg");
	this.shape_230.setTransform(8.7,43.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#EE000C").s().p("ACTBzQgJgFgHgGIgFgFQgKgQgHgFIgQAEIgUAEIgLACIgQABQgWABgVgEQghgGgmgWIgcgSIgLgIIg2gpIgLgJQgkgegRgRQgIgIgBgHQgEgJAFgKQAJgOAOgEIACAAQANgCAJABQAKACATAJIABABQANAHARANIARANIAwAkQAbASAlAMQA1AHAegRIAQgGIARgHQAHgCAHAAQALAAAJACQAHABAHAEQAQAIAOALQAQALAJAOQAKAQADASIABAHQADAYgMAPQgHAIgKAEIgYAHIgOACQgPAAgKgFg");
	this.shape_231.setTransform(8.1,42.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#EE000C").s().p("ACzB3QgdgDgOgMQgJgJgFgIIgSgeQgOAFgWAJQgLAEgRAEQhLAPhQg9QgegXghgbQgigegRgTQgPgRALgSQALgPAPgCQAOgBAIACQAJACATAJQAPAIAgAaIAuAlQAZASAoALQA1ABAggaQAVgRAgAHQAWAFAPAMQAkAcANAZQALAVADAUQACAZgPANQgNALgZAAIgJAAg");
	this.shape_232.setTransform(7.4,42.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#EE033C").s().p("ACzB3QgdgDgOgMQgJgJgFgIIgSgeQgOAFgWAJQgLAEgRAEQhLAPhQg9QgegXghgbQgigegRgTQgPgRALgSQALgPAPgCQAOgBAIACQAJACATAJQAPAIAgAaIAuAlQAZASAoALQA1ABAggaQAVgRAgAHQAWAFAPAMQAkAcANAZQALAVADAUQACAZgPANQgNALgZAAIgJAAg");
	this.shape_233.setTransform(7.4,42.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#EE0234").s().p("ACMCCQgKgCgIgDQgMgFgGgHQgIgJgEgIIgJgWIgDgHQgKABgRAGIgBABIgWADQgbABgbgMQgdgLgegaIgNgLQgTgRgVgUIgQgPIgYgaIgTgYQgMgQALgQQAEgGAGgEQAIgFAJgBQAIgBAHABIAGABQAKADAQAKIABAAQAPAIAdAeIAIAIQAbAbAGAHQAIAIAJAHIAkAWQAgAFAWgFIARgGIAJgFQANgEAQACQAHABAHADQAPAFAIAHIAHAHQALAPAGALQAJAMACAMQAGASgCAQQgBALgFAHIAAABQgFAIgHAFIgHADIgEABQgHACgIAAQgIAAgKgCg");
	this.shape_234.setTransform(7.7,43.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#EE022C").s().p("ABiCOQgJgDgGgFQgJgFgFgIQgGgJgDgIQgEgNgCgIIgCgGQgFgDgNAEIgBABIgPgDQgSgEgWgOQgWgPgZgbIgLgMQgQgPgTgXIgNgPIgVgbQgKgNgFgKQgJgQALgPQAEgFAGgEQAIgFAJgBIAPABIAHABQAKAEAPAKIABAAQAOAKAaAhIAHAJQAYAbAFALQAHAKAGAIIAcAbQAYALAPAEIASgEIAKgDQAMgDAQAEQAIACAHAEQAMAHAFAKIAEAIQAHAQgBAJQAEAKgDAKQAAAOgGAOQgDAIgGAHIAAAAQgHAGgIAEIgGABIgFABIgGAAQgLAAgMgEg");
	this.shape_235.setTransform(8.3,44.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#EE0224").s().p("ABKCgQgOgBgNgHQgHgEgFgGQgGgGgEgIQgEgJgBgIQgDgMAAgIIAAgGQgBgGgJABIgBABQgCgEgEgDQgLgKgQgRQgQgSgVgcIgJgLQgNgRgQgYIgLgPIgRgbQgIgOgDgKQgGgQAKgNQAFgFAFgDQAJgFAJAAQAIgBAHACIAHABQALAEAOALIABAAQANALAXAlIAGAJQATAdAEANIALAVQAKAOAKAUQAQAQAJAOIASgCIAKgBQANgBAQAGQAIADAFAFQALAIACANIABAIQACARgHAHQgCAIgHAIQgFALgLAKQgFAHgIAFIAAAAQgIAEgIACIgHABIgEgBg");
	this.shape_236.setTransform(9.7,45.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#EE011C").s().p("AAUCvIgEgBQgNgDgJgKQgFgFgDgHQgFgHgBgIQgCgJAAgIQgBgKABgIIABgGQAEgKgFgBIgBAAQABgGgCgFQgEgQgJgUQgJgVgQgcIgHgNIgYgqIgJgPIgOgcQgFgNgCgKQgCgQAKgMQAEgEAFgDQAJgFAKAAQAIAAAHACIAHACQALAEAOAMQANALAUApIAFAKQAOAeAEAQIAJAYQAGAPAEAZQAJAVACAXIATACIAKAAQANABAQAIQAIAEAFAGQAIAKgBAOIgBAKQgEASgMAFQgHAFgNAGQgKAHgPAIQgIAEgJAEIAAAAIgBAAQgJADgIAAIgHgBg");
	this.shape_237.setTransform(11.5,47.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#EE0114").s().p("AgeC/IgHgCIgEgCQgNgGgHgLQgEgGgCgIQgCgIAAgJQAAgIABgIQABgJADgJIACgFQAIgNgBgEIAAABQAEgJABgIQAFgVgDgXQgDgXgLgeIgFgOIgSgrIgHgQIgLgcQgDgNABgKQAAgQAKgKQAEgEAGgCQAJgFAJAAQAIAAAIACIAHACQAMAGAMAMQAMAMAPAsIAEALQANAfAEATIAGAbQACARgBAdQABAagFAhIAUAFIAKACQANACAQAKQAJAFAEAIQAGALgFAQQgBAGgCAEQgJATgSADIgeAHIgkAJIgRAFIgBAAIgBAAIgIAAIgLgBg");
	this.shape_238.setTransform(13.4,48.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#EE000C").s().p("Ag0DRIgBAAQgRgBgLgGQgYgNABgbQAAgcANgXIATgcQAXglAFglQAEgYgGghQgDgSgNgpQgMgjAAgJQgBgqAZgLQARgHASAFQAPAGAOAPQANAOAPA7QAQA5gBAbQAAAggaBeQAJAFAXAHQANAEAQALQAVAQgNAeQgOAegfACIhqAGIgBAAg");
	this.shape_239.setTransform(13.8,50.1);

	this.instance_9 = new lib.legbookright();
	this.instance_9.setTransform(7.9,30.7,1,1,0,0,0,4.7,1.6);
	this.instance_9._off = true;

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#EE000C").s().p("AAvEJIiEgYQg7gfAagsQA4g3ANhhQgCiGgyg1QgQhDAegPQAhgRAiAQQBAAiAECxQgHBzgpBOQAtgKAtARQAxAlgQAiQgMAng5AAIgHAAg");
	this.shape_240.setTransform(19.6,56.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#EE000C").s().p("AAWDRIhXgMQhRgTAag6IBDhqQANgXgFgdIgdiEQgHgeAmgKQAqgEANAmIAVB/QAQAygYArIgbBBQAygGATAIQBGATgMAqQgLAng8AAQgOAAgSgCg");
	this.shape_241.setTransform(11,53);

	this.instance_10 = new lib.legshape();
	this.instance_10.setTransform(8.4,37.9,1,1,-38.7,0,0,10.1,6.1);
	this.instance_10._off = true;

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#EE000C").s().p("Ah/B6Qgcg1ABhCQAHijBtCfQAdhMBDg+QAqghAdAGQAqAVgaA/IiSDXQglAjgeAAQgjAAgYgug");
	this.shape_242.setTransform(-29.7,43.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#EE000C").s().p("AhqCDQgMgSgJgTQgNgcgDglIgBgbQAGhOAxAZQAQAPAYAoIADAEQAIgmAdgoQAVggAjggIAUgPIADgBQAdgRAWAFQAiATgOAuIgHATIhABbIhBBzIgLAMQgMAMgMAFQgMAHgMAAQgbAAgZghg");
	this.shape_243.setTransform(-28.9,42.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#EE000C").s().p("AhUCLQgNgOgLgPQgSgUgGgkIgEgbQADhLA0APQAJANAQAkIACADQACgmAegrQAWghAlgjIAVgQIACgBQAfgSAWAHQAiAUgPAtIgIASQghAuggAuIgtBpIgKAMQgHALgKAGQgMAKgPAAQgUAAgYgWg");
	this.shape_244.setTransform(-28.1,41.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#EE000C").s().p("Ag9CTIgcgVQgWgOgKgiQgEgNgCgOQgBhKA4AIQABALAJAfIABADQgEgnAfgvQAWggAngmIAVgRIADgCQAhgSAWAJQAhAVgQAsIgJASQghAsggAuIgaBhIgHAKQgHALgHAGQgJAPgSAAQgPAAgVgLg");
	this.shape_245.setTransform(-27.4,40.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#EE000C").s().p("AgmCaIgggNQgagHgOggQgFgNgEgPQgDhGA1gEQAFgXASgbQAVghAqgpIAWgSIADgBQAigTAXAKQAgAWgRArIgKASQgiArgfAvIgHBXIgDAKQgFALgFAGQgJAWgZAAQgKAAgNgDg");
	this.shape_246.setTransform(-26.7,39.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#EE000C").s().p("AgzCaQgfAAgQgfQgHgMgFgQQgFg2AigTQgCgeAYgmQAVghAtgtIAXgTIACgBQAlgUAXAMQAgAXgTAqIgLARQgiArgfAvIAMBPIAAAIQgCALgDAGQgCAhgyABIgjgEg");
	this.shape_247.setTransform(-26,39.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#EE000C").s().p("AhXCLQgIgLgGgRQgHgrAXgXQgUgoAig0QAUgiAygvIAWgUIACgCQAmgUAYANQAfAZgUApIgLARQgjAqgfAvIAfBFIADAIQABAKgBAHQAHAkg3ANIgkAEIgNABQgbAAgQgYg");
	this.shape_248.setTransform(-25.3,39.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#EE000C").s().p("AhHCYQgKgLgHgRQgOhDBFgcQgbADgYAQIgBAAQgegpAlg6QATgiA1gyIAWgVIADgCQAngVAYAPQAfAZgWApIgMAQQgjApgfAwIAzA8IAGAHQADAJACAIQAQAmg7AZIgoANQgNAEgLAAQgXAAgQgTg");
	this.shape_249.setTransform(-25.1,39.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#EE000C").s().p("Ag2ClQgLgKgJgSQgQhCBIgkQgiABggAMIgDgBQgkgpAmg9QATgjA4g1IAWgWIADgCQApgVAZAQQAfAagYAoIgNAPQgjApgfAyIBGAxIAJAGQAGAJAEAIQAZApg/AlQgTAKgaALQgRAJgQAAQgUAAgQgPg");
	this.shape_250.setTransform(-25,39.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#EE000C").s().p("AgvCyQgNgKgKgTQgUg/BMguQgqAAgoAHIgDgBQgqgpAnhBQASgjA7g5IAZgXIABgCQArgVAZARQAeAcgZAmIgNAPQglAogdAzIBYAoIAMAFQAJAJAGAIQAjAshDAxQgUAOgdAPQgZAPgSAAQgTAAgOgMg");
	this.shape_251.setTransform(-23.8,40);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#EE000C").s().p("AgpC+QgPgJgLgUQgWg9BPg2QgxgCgwACIgEgCQgxgpAphEQARgkA+g7IAagYIADgCQAqgXAaATQAdAegaAlIgOAPQglAmgdAzIBrAfIAPAEQAMAJAIAJQAsAuhGA+QgWARgfAUQgfAUgXAAQgQAAgOgJg");
	this.shape_252.setTransform(-22.6,40.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#EE000C").s().p("AgjDKQgQgJgMgUQgag7BSg/Qg4gEg4gCIgFgDQg3gpAqhIQARgjBAg/IAbgZIADgCQAsgXAaAUQAdAfgcAkIgOAOQgkAmgfA0IB+AYIATADQAOAGAKAJQA2AxhKBKQgXAWghAYQglAbgbAAQgPAAgNgIg");
	this.shape_253.setTransform(-21.3,40.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#EE000C").s().p("Ag8C4Qgdg5BWhIIiAgMQhEgpAthPQATgrBchUIADgDQAugXAaAWQAdAfgeAkQgtAoglA+ICnARQCGBBizCPQgrAigfAAQgiAAgXgkg");
	this.shape_254.setTransform(-20.1,41.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#EE000C").s().p("Ag3C3Qgeg0BMhFIgVgCIhigOQg/goAphLQAOgrA8gnQASgVAYgXIAEgCQANgIAMgEQAXgIARAHIAKAHQAcAegcAiQgXAWgWAcQgQAWgQAbICVAWQB3A/imCIIgOALQghAXgZAAQgfAAgWggg");
	this.shape_255.setTransform(-21.3,41.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#EE000C").s().p("AgzC2QgeguBDhDIgUgDIhbgRQg6goAmhHQANg2BAgUQASgYAZgZIAEgDQAOgJALgFQAagLATAIIALAHQAZAdgZAhQgWAVgUAbQgRAWgNAaICDAZQBpA/ibCAIgOALQggAXgZAAQgcAAgVgcg");
	this.shape_256.setTransform(-22.6,41.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#EE000C").s().p("AguC1QgfgpA5hAIgSgEIhTgUQg2gnAihEQANhBBEgDQATgaAagbIAEgDQAMgKAOgHQAbgMAUAHQAHADAFAFQAYAbgXAgQgUAVgTAaQgQAVgPAYIBzAeQBbA+iPB5IgNALQggAXgYAAQgaAAgTgYg");
	this.shape_257.setTransform(-23.8,41.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#EE000C").s().p("AgqC0QgfgkAwg9IgRgFQgngLgmgMQgwgnAehAQAMhMBJAQQATgdAbgdIAEgEQANgLAOgIQAdgPAVAIQAHADAFAGQAXAZgVAfQgSAUgRAZQgQAUgOAXIBhAjQBNA9iEByIgMAKQgfAXgXAAQgYAAgSgUg");
	this.shape_258.setTransform(-25,41.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#EE000C").s().p("AglCzQghgeAng7IgQgGQgjgMgigOQgrgmAag8QAMhYBNAiQATggAageIAEgEQAPgMAPgKQAfgRAWAHQAIAEAFAGQAVAYgSAeQgQATgRAYQgOATgOAWIBPAnQA+A9h3BqIgMALQgfAWgWAAQgVAAgQgQg");
	this.shape_259.setTransform(-26.2,41.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#EE000C").s().p("AghCyQghgZAdg4IgOgHQgggOgegPQgmglAXg5QAKhjBSA0QATgjAcggIAEgEQAPgNAQgLQAggTAXAGQAIAFAGAGQATAXgQAcQgOATgPAXQgOASgNAVIA9AsQAwA7hsBjIgLALQgeAWgXAAQgSAAgOgMg");
	this.shape_260.setTransform(-27.4,41.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#EE000C").s().p("AggCxQgigTAUg2IgMgHQgdgQgagRQgiglAUg1QAJhuBXBGQASglAegjIAEgEQAPgOARgMQAigWAYAHQAIAEAGAHQASAVgOAcIgZAoQgOASgMATIArAuQAiA8hhBcIgKALQgeAXgWAAQgPAAgNgJg");
	this.shape_261.setTransform(-28.3,42);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#EE000C").s().p("AgkCwQgjgOAKg0IgLgIQgZgRgWgSQgdgkAQgyQAJh5BbBXQASgnAfgkIAEgFQAQgPARgNQAkgYAZAGQAJAFAGAHQAQAUgMAaIgWAnQgMARgMASIAZAyQATA8hUBUIgKALQgfAXgWAAQgLAAgKgFg");
	this.shape_262.setTransform(-28.6,42.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#EE000C").s().p("AgqCuQgjgIABgxIgKgJQgWgSgSgVQgYgjAMguQAJiEBfBpQATgqAfgmIAFgFQAQgRASgOQAlgaAaAGQAKAFAGAIQAOASgJAZIgTAmIgWAgIAGA3QAGA7hJBNIgJAKQgdAZgYAAQgJAAgIgDg");
	this.shape_263.setTransform(-28.9,42.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#EE000C").s().p("AgvCsQgkgDgIguIgJgJQgTgUgOgXQgSgiAIgrQAIiPBkB7QASgsAhgpIAFgFQAQgRATgQQAngcAaAGQALAFAGAIQANARgHAYQgGAQgKAUIgVAeIgLA8QgJA5g9BHIgIAKQgeAagZAAIgKgBg");
	this.shape_264.setTransform(-29.1,42.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#EE000C").s().p("AhqCAIgHgKQgQgVgKgYQgOgiAFgnQAHiaBoCNQATgvAigqIAFgGQARgTATgQQAogfAcAGQALAFAHAJQALAPgFAXQgEAQgIATIgUAcIgdBAQgXA5gyA+IgHAKQghAegbAAIgDAAQgiAAgRgqg");
	this.shape_265.setTransform(-29.4,42.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#EE000C").s().p("AgZC/QgwgHgWgPQgNgKgFgKQgFgLADgRQACgPAIgJQAIgIAOgEQAJgCARgBQgLgYgGgcIgCgFQgCgEgEgPIgKgyQgCgKAEgVIAEgRQAEgTAMgUQAHgMARgXIAJgLIAKgHQAOgIAIgBIAKAAQAKACAEADQAHAEADAHQACAFAAAFQABAKgGAOQgLAcgKAUQgFAMgCAKQgBAJADAOQAIApAYAfQAOAUAcAcIAbAdQAMAMACAIQAFANgJASQgSAggsAJQgOADgSAAQgSAAgYgDg");
	this.shape_266.setTransform(-16.1,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_194}]},10).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},9).to({state:[{t:this.shape_199}]},7).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_205}]},5).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_221}]},4).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},7).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},6).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},8).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_266}]},6).to({state:[{t:this.instance_10}]},6).to({state:[{t:this.instance_10}]},8).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_10}]},5).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(89).to({_off:false},0).to({rotation:-7.2},6).to({_off:true},1).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(103).to({_off:false},0).to({regX:10.2,rotation:13.8,y:38},8).to({rotation:30.9,y:38.1},3).to({regX:10.1,rotation:-38.7,y:37.9},5).to({_off:true},1).wait(37).to({_off:false,rotation:-38.7},0).to({regX:10.2,rotation:13.8,y:38},8).to({rotation:30.9,y:38.1},3).to({regX:10.1,rotation:-38.7,y:37.9},5).wait(9));

	// heartbody
	this.instance_11 = new lib.heartbody();

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(103).to({y:-0.9},4).to({y:0},4).to({y:-1.8},4).to({y:0},4).wait(1).to({y:-4.9},6).to({y:0},6).to({y:-4.9},6).to({y:0},6).wait(13).to({y:-0.9},4).to({y:0},4).to({y:-1.8},4).to({y:0},4).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-54,-43,108,87);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-54,-43,110.3,87), new cjs.Rectangle(-54,-43,114.8,87), new cjs.Rectangle(-54,-43,119.2,87), new cjs.Rectangle(-54.9,-43,124.6,87), new cjs.Rectangle(-58.9,-43,133.1,87), new cjs.Rectangle(-62.9,-43,137.1,90.3), new cjs.Rectangle(-67,-43,141.1,90.3), rect=new cjs.Rectangle(-71,-43,145.1,90.3), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-75.7,-59.1,157.5,154.1), new cjs.Rectangle(-75.7,-59.1,159.5,155.3), new cjs.Rectangle(-76.8,-59.1,162.6,156.5), new cjs.Rectangle(-79.1,-59.1,167.1,157.7), new cjs.Rectangle(-81.5,-59.1,171.5,158.9), new cjs.Rectangle(-83.9,-59.1,175.9,160.1), new cjs.Rectangle(-86.2,-59.1,180.3,161.3), new cjs.Rectangle(-75.7,-59.1,135.8,113.1), new cjs.Rectangle(-75.7,-54.4,136.9,110.6), new cjs.Rectangle(-75.8,-49.8,138.3,108.2), new cjs.Rectangle(-75.9,-45.3,139.9,106.1), new cjs.Rectangle(-76.1,-43,141.6,106.5), new cjs.Rectangle(-76.4,-43,143.5,109.7), rect=new cjs.Rectangle(-76.7,-43,145.4,113), rect, new cjs.Rectangle(-75.7,-43,144.5,108.2), new cjs.Rectangle(-74.8,-43,144.6,103.9), new cjs.Rectangle(-73.9,-43,145.7,100.7), new cjs.Rectangle(-73.4,-43,147.3,102), new cjs.Rectangle(-72.9,-43,149.2,107.1), new cjs.Rectangle(-73.2,-43,147.5,102.9), new cjs.Rectangle(-73.7,-43,146.1,99.2), new cjs.Rectangle(-74.3,-43,145,101.8), new cjs.Rectangle(-75,-43,144.4,105), new cjs.Rectangle(-75.8,-43,144.5,108.9), new cjs.Rectangle(-76.7,-43,145.4,113), rect=new cjs.Rectangle(-76.7,-43,145.4,105), rect, rect, rect, rect, new cjs.Rectangle(-76.7,-43,145.4,113), new cjs.Rectangle(-76.7,-43,147.6,113), new cjs.Rectangle(-77,-43,151.4,113), new cjs.Rectangle(-77.5,-43,156.7,112.9), new cjs.Rectangle(-78.1,-43,162.7,112.9), rect=new cjs.Rectangle(-78.8,-43,169.2,113), rect, rect, rect, rect, new cjs.Rectangle(-80,-43,166.2,109.9), new cjs.Rectangle(-81.2,-43,163.3,107.6), new cjs.Rectangle(-82.4,-43,160.7,106.2), new cjs.Rectangle(-83.7,-43,158.3,105.5), new cjs.Rectangle(-84.9,-43,156.4,105.2), rect=new cjs.Rectangle(-86.2,-43,155.2,105), rect, new cjs.Rectangle(-77.8,-43,147.9,102.8), new cjs.Rectangle(-69.9,-43,141.9,100.7), new cjs.Rectangle(-64.3,-43,139.9,100.7), new cjs.Rectangle(-62.9,-43,146.6,102.7), rect=new cjs.Rectangle(-63.5,-43,155.9,105.1), rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-83.6,-47.1,179.9,109.2), new cjs.Rectangle(-83.6,-47.1,179.9,110.9), new cjs.Rectangle(-83.6,-47.1,179.9,112.5), new cjs.Rectangle(-83.6,-47.1,179.9,114.2), new cjs.Rectangle(-83.6,-47.1,179.9,115.8), new cjs.Rectangle(-83.6,-47.1,179.9,117.6), rect=new cjs.Rectangle(-83.6,-47.1,179.9,120.1), rect, new cjs.Rectangle(-83.6,-47.1,179.9,120.3), new cjs.Rectangle(-83.6,-47.1,179.9,120.5), new cjs.Rectangle(-83.6,-47.1,179.9,120.6), new cjs.Rectangle(-83.6,-47.1,179.9,120.8), new cjs.Rectangle(-83.6,-47.1,179.9,121), new cjs.Rectangle(-77.1,-47,175.6,121.6), rect=new cjs.Rectangle(-73.5,-43,188.6,125.7), rect, rect, rect, rect, rect, new cjs.Rectangle(-73.5,-64.9,162.4,139.1), new cjs.Rectangle(-73.5,-64.9,162.4,138.7), new cjs.Rectangle(-73.5,-64.9,162.4,136.7), new cjs.Rectangle(-73.5,-64.9,162.4,136.4), new cjs.Rectangle(-73.5,-64.9,162.4,137.3), new cjs.Rectangle(-73.5,-64.9,162.4,137.8), new cjs.Rectangle(-73.5,-64.9,162.4,138.3), new cjs.Rectangle(-73.5,-64.9,162.4,139.2), new cjs.Rectangle(-73.5,-64.9,162.4,140), new cjs.Rectangle(-73.5,-64.9,162.4,141.8), new cjs.Rectangle(-73.5,-64.9,162.4,140.6), new cjs.Rectangle(-73.5,-64.9,162.4,140.4), new cjs.Rectangle(-73.5,-64.9,162.4,142), new cjs.Rectangle(-73.5,-64.9,162.4,140.6), new cjs.Rectangle(-73.5,-64.9,162.4,139.6), new cjs.Rectangle(-73.5,-64.9,162.4,138), new cjs.Rectangle(-73.5,-64.9,162.4,136.9), new cjs.Rectangle(-73.5,-64.9,162.4,138.7), new cjs.Rectangle(-61.1,-43,141.6,102.9), new cjs.Rectangle(-61.1,-43.8,141.6,102.4), new cjs.Rectangle(-61.1,-44.6,141.6,103.2), new cjs.Rectangle(-61.1,-45.4,141.6,104.9), new cjs.Rectangle(-61.1,-46.3,141.6,106.7), new cjs.Rectangle(-61.1,-47.1,141.6,108.6), new cjs.Rectangle(-61.1,-47.9,141.6,110.6), new cjs.Rectangle(-61.1,-47.1,141.6,111.2), new cjs.Rectangle(-61.1,-46.3,141.6,112), new cjs.Rectangle(-61.1,-45.4,141.6,113.4), new cjs.Rectangle(-61.1,-44.6,141.6,115.3), new cjs.Rectangle(-61.1,-43.8,141.6,117.4), new cjs.Rectangle(-61.1,-43,141.6,119.7), new cjs.Rectangle(-61.1,-43.8,141.6,118.4), new cjs.Rectangle(-61.1,-44.6,141.6,117.2), new cjs.Rectangle(-61.1,-45.4,141.6,116), new cjs.Rectangle(-61.1,-46.3,141.6,115), new cjs.Rectangle(-61.1,-47.1,141.6,114), new cjs.Rectangle(-61.1,-47.9,141.6,113.1), new cjs.Rectangle(-61.1,-47.1,141.6,110.5), new cjs.Rectangle(-61.1,-46.3,141.6,108), new cjs.Rectangle(-61.1,-45.4,141.6,105.6), new cjs.Rectangle(-61.1,-44.6,141.6,104.5), new cjs.Rectangle(-61.1,-43.8,141.6,103.6), new cjs.Rectangle(-61.1,-43,141.6,102.9), rect=new cjs.Rectangle(-65.5,-62.6,137,132.6), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-67.4,-43,140.2,113), rect, rect, rect, rect, rect, new cjs.Rectangle(-73.5,-64.9,177.6,138.7), rect=new cjs.Rectangle(-73.5,-64.9,177.6,137.5), rect, rect, new cjs.Rectangle(-73.5,-64.9,177.6,137.8), new cjs.Rectangle(-73.5,-64.9,177.6,138.3), new cjs.Rectangle(-73.5,-64.9,177.6,139.2), new cjs.Rectangle(-73.5,-64.9,177.6,140), new cjs.Rectangle(-73.5,-64.9,177.6,141.8), new cjs.Rectangle(-73.5,-64.9,177.6,140.6), new cjs.Rectangle(-73.5,-64.9,177.6,140.4), new cjs.Rectangle(-73.5,-64.9,177.6,142), new cjs.Rectangle(-73.5,-64.9,177.6,140.6), new cjs.Rectangle(-73.5,-64.9,177.6,139.6), new cjs.Rectangle(-73.5,-64.9,177.6,138), new cjs.Rectangle(-73.5,-64.9,177.6,137.5), rect=new cjs.Rectangle(-73.5,-64.9,177.6,138.7), rect, rect, rect, rect, rect, rect, rect, rect];


(lib.conts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p16
	this.p16 = new lib.muban_16();
	this.p16.setTransform(0,8586.8);

	this.timeline.addTween(cjs.Tween.get(this.p16).wait(1));

	// p15
	this.p15 = new lib.p15copy();
	this.p15.setTransform(0,8307.8);

	this.timeline.addTween(cjs.Tween.get(this.p15).wait(1));

	// p14
	this.p14 = new lib.muban_14();
	this.p14.setTransform(0,6993.2);

	this.timeline.addTween(cjs.Tween.get(this.p14).wait(1));

	// p13
	this.p13 = new lib.muban_13();
	this.p13.setTransform(0,6413.9);

	this.timeline.addTween(cjs.Tween.get(this.p13).wait(1));

	// p3_1
	this.p3_1 = new lib.p3_1();
	this.p3_1.setTransform(0,396.3);

	this.timeline.addTween(cjs.Tween.get(this.p3_1).wait(1));

	// p1
	this.p1 = new lib.muban();

	this.timeline.addTween(cjs.Tween.get(this.p1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,642,9899.3);
p.frameBounds = [rect];


// stage content:
(lib.moments = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{station1:264,station1_1:293,station1a:316,station1a_1:349,station1b:374,station1b_1:406,station2:431,station2_1:464,station3:487,station4:511,station5:639,station6:814});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.conts.p1.likes.play();
	}
	this.frame_94 = function() {
		this.heart.gotoAndPlay(1);
	}
	this.frame_113 = function() {
		//this.heart.gotoAndPlay("standjump");
	}
	this.frame_116 = function() {
		this.heart.alpha=0;
	}
	this.frame_165 = function() {
		this.heart.alpha=1;
		this.heart.gotoAndPlay("walkloop");
	}
	this.frame_240 = function() {
		this.heart.gotoAndStop("jump");
		this.heart.mouth.gotoAndStop("laugh");
		
		this.stationY=-this.conts.p3_1.y-130;
		moveContY(this.stationY,"station1");
	}
	this.frame_264 = function() {
		this.heart.gotoAndStop("land2");
		
		moveContY(this.stationY-25,"station1_1");
	}
	this.frame_293 = function() {
		this.heart.gotoAndStop("jump");
		
		this.stationY=-this.conts.p3_1.y-950;
		moveContY(this.stationY,"station1a");
	}
	this.frame_316 = function() {
		this.heart.gotoAndStop("land2");
		moveContY(this.stationY-20,"station1a_1");
	}
	this.frame_349 = function() {
		this.heart.gotoAndStop("jump");
		
		this.stationY=-this.conts.p3_1.y-2000;
		moveContY(this.stationY,"station1b");
	}
	this.frame_374 = function() {
		this.heart.gotoAndStop("land2");
		moveContY(this.stationY-20,"station1b_1");
	}
	this.frame_406 = function() {
		exportRoot.conts.addChild(ContsArr[2]);//增加p13
		this.heart.gotoAndPlay("jump2");
		
		this.stationY=-this.conts.p3_1.y-2800;
		moveContY(this.stationY,"station2");
	}
	this.frame_431 = function() {
		this.heart.gotoAndStop("land2");
		
		moveContY(this.stationY-20,"station2_1");
	}
	this.frame_464 = function() {
		this.heart.gotoAndPlay("jump3");
		exportRoot.conts.removeChild(exportRoot.conts.p1);//移除p1
		exportRoot.conts.addChild(ContsArr[3]);//增加p14
		align();
		
		moveContY(-this.conts.p13.y+520,"station3",createjs.Ease.sineIn);
	}
	this.frame_487 = function() {
		this.heart.gotoAndPlay("land3");
		this.heart.eyel1.gotoAndStop(0);
		this.heart.mouth.gotoAndStop("laugh");
		
		moveContY(-this.conts.p13.y,"station4",createjs.Ease.sineOut);
	}
	this.frame_523 = function() {
		exportRoot.conts.removeChild(exportRoot.conts.p3_1);//移除p3_1
		this.heart.gotoAndPlay("book");
		this.conts.p13.photo.gotoAndStop(1);
	}
	this.frame_538 = function() {
		this.heart.gotoAndStop("jump4");
	}
	this.frame_558 = function() {
		this.heart.gotoAndStop("land4");
	}
	this.frame_569 = function() {
		this.heart.gotoAndPlay("walk4");
	}
	this.frame_607 = function() {
		moveContY(-this.conts.p14.y+150-19,"station5",createjs.Ease.quartInOut);
	}
	this.frame_639 = function() {
		this.heart.gotoAndPlay("backrun");
	}
	this.frame_683 = function() {
		this.heart.gotoAndStop("stopcar");
		this.conts.p14.car.carimg.gotoAndStop("opendoor");
	}
	this.frame_693 = function() {
		this.heart.alpha=this.shadow.alpha=0;
		this.conts.p14.car.alpha=0;
		this.car.gotoAndPlay(1);
		this.car.carimg.gotoAndStop("incar");
	}
	this.frame_738 = function() {
		moveContY(-this.conts.p16.y,"station6");
		
		exportRoot.conts.addChild(ContsArr[4]);//增加p15
		exportRoot.conts.addChild(ContsArr[5]);//增加p16
		align();
	}
	this.frame_743 = function() {
		this.car.carimg.gotoAndStop("speed");
	}
	this.frame_814 = function() {
		exportRoot.conts.removeChild(exportRoot.conts.p13);
		exportRoot.conts.removeChild(exportRoot.conts.p14);
		exportRoot.conts.removeChild(exportRoot.conts.p15);
	}
	this.frame_840 = function() {
		this.car.gotoAndStop(0);
		this.car.carimg.gotoAndStop(0);
		this.heart.alpha=this.shadow.alpha=1;
		this.heart.gotoAndPlay("walk4");
	}
	this.frame_849 = function() {
		this.car.carimg.gotoAndStop("cargo");
	}
	this.frame_858 = function() {
		this.heart.gotoAndStop("backcar");
	}
	this.frame_868 = function() {
		this.heart.gotoAndPlay("takebook");
	}
	this.frame_889 = function() {
		this.car.carimg.gotoAndStop(0);
	}
	this.frame_900 = function() {
		this.car.gotoAndPlay(1);
	}
	this.frame_927 = function() {
		this.conts.p16.photo.gotoAndPlay(1);
		this.conts.p16.photo.addEventListener("mousedown",vClick);
		videoInit();
	}
	this.frame_939 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(81).call(this.frame_94).wait(19).call(this.frame_113).wait(3).call(this.frame_116).wait(49).call(this.frame_165).wait(75).call(this.frame_240).wait(24).call(this.frame_264).wait(29).call(this.frame_293).wait(23).call(this.frame_316).wait(33).call(this.frame_349).wait(25).call(this.frame_374).wait(32).call(this.frame_406).wait(25).call(this.frame_431).wait(33).call(this.frame_464).wait(23).call(this.frame_487).wait(36).call(this.frame_523).wait(15).call(this.frame_538).wait(20).call(this.frame_558).wait(11).call(this.frame_569).wait(38).call(this.frame_607).wait(32).call(this.frame_639).wait(44).call(this.frame_683).wait(10).call(this.frame_693).wait(45).call(this.frame_738).wait(5).call(this.frame_743).wait(71).call(this.frame_814).wait(26).call(this.frame_840).wait(9).call(this.frame_849).wait(9).call(this.frame_858).wait(10).call(this.frame_868).wait(21).call(this.frame_889).wait(11).call(this.frame_900).wait(27).call(this.frame_927).wait(12).call(this.frame_939).wait(1));

	// postmoment
	this.postmoment = new lib.postmoment();

	this.timeline.addTween(cjs.Tween.get(this.postmoment).wait(1).to({y:-58.5,alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(927));

	// 图层 4
	this.instance = new lib.wenhao();
	this.instance.setTransform(578.4,102.6,1,1,0,0,0,18.5,25);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(146).to({_off:false},0).to({x:588.8,y:95.4,alpha:1},6).wait(13).to({x:596.3,y:87.9,alpha:0},5).to({_off:true},1).wait(769));

	// 图层 5
	this.instance_1 = new lib.wenhao();
	this.instance_1.setTransform(550.1,117.2,1,1,0,0,0,18.5,25);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144).to({_off:false},0).to({x:560.5,y:110.1,alpha:1},6).wait(17).to({x:568,y:102.6,alpha:0},5).to({_off:true},1).wait(767));

	// 图层 3
	this.instance_2 = new lib.wenhao();
	this.instance_2.setTransform(522.1,134.2,1,1,0,0,0,18.5,25);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(142).to({_off:false},0).to({x:532.5,y:127,alpha:1},6).wait(21).to({x:540,y:119.5,alpha:0},5).to({_off:true},1).wait(765));

	// 图层 2
	this.instance_3 = new lib.x1();
	this.instance_3.setTransform(171,244);

	this.instance_4 = new lib.x2();
	this.instance_4.setTransform(182,250);

	this.instance_5 = new lib.x3();
	this.instance_5.setTransform(232,192);

	this.instance_6 = new lib.x4();
	this.instance_6.setTransform(307,150);

	this.instance_7 = new lib.x5();
	this.instance_7.setTransform(334,130);

	this.instance_8 = new lib.x6();
	this.instance_8.setTransform(421,147);

	this.instance_9 = new lib.x7();
	this.instance_9.setTransform(420,144);

	this.instance_10 = new lib.x8();
	this.instance_10.setTransform(420,145);

	this.instance_11 = new lib.x9();
	this.instance_11.setTransform(422,143);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3,p:{x:171}}]},116).to({state:[{t:this.instance_3,p:{x:172}}]},1).to({state:[{t:this.instance_3,p:{x:173}}]},1).to({state:[{t:this.instance_4,p:{x:182,y:250}}]},1).to({state:[{t:this.instance_4,p:{x:187,y:237}}]},1).to({state:[{t:this.instance_4,p:{x:199,y:227}}]},1).to({state:[{t:this.instance_5,p:{x:232,y:192}}]},1).to({state:[{t:this.instance_5,p:{x:251,y:173}}]},1).to({state:[{t:this.instance_5,p:{x:276,y:154}}]},1).to({state:[{t:this.instance_6,p:{x:307,y:150}}]},1).to({state:[{t:this.instance_6,p:{x:316,y:144}}]},1).to({state:[{t:this.instance_6,p:{x:322,y:140}}]},1).to({state:[{t:this.instance_7,p:{x:334,y:130}}]},1).to({state:[{t:this.instance_7,p:{x:346,y:130}}]},1).to({state:[{t:this.instance_7,p:{x:359,y:137}}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).to({state:[]},25).to({state:[]},57).wait(718));

	// heart
	this.heart = new lib.heart();
	this.heart.setTransform(206.4,326.1,0.184,0.184,-27.2);
	this.heart._off = true;

	this.timeline.addTween(cjs.Tween.get(this.heart).wait(48).to({_off:false},0).to({regY:0.1,scaleX:1,scaleY:1,rotation:-34.7,y:326},8).to({regY:0,rotation:-27.2,y:325.9},4).wait(3).to({regX:0.1,regY:0.1,rotation:-10,x:206.6,y:326},5).to({regX:0,regY:0,rotation:-27.2,x:206.4,y:325.9},5).wait(2).to({scaleX:0.64,scaleY:0.64,y:326},5).to({scaleX:1,scaleY:1,y:325.9},6).wait(3).to({regX:0.1,regY:0.1,scaleX:0.64,scaleY:0.64,rotation:-11,x:206.5,y:326.1},5).to({regX:0,regY:0.2,scaleX:0.76,scaleY:0.76,rotation:-47.6,x:206.6,y:326},4).to({regY:0,scaleX:1,scaleY:1,rotation:-27.2,x:206.4,y:325.9},4).wait(4).to({regX:-0.1,regY:0.1,scaleY:0.91,x:208.1,y:329.5},4).wait(3).to({scaleX:1,scaleY:1,rotation:-27.1,x:202.5,y:321.2},0).wait(1).to({x:207.8,y:310.7},0).wait(1).to({rotation:-20.6,x:215.3,y:293.5},0).wait(1).to({rotation:-27.1,x:202.5,y:321.2},0).wait(49).to({regX:0.1,scaleX:1,scaleY:1,rotation:1.2,x:483.8,y:185.8},0).wait(1).to({regX:14.4,regY:18.6,rotation:1.1,x:497.8,y:205.3},0).wait(1).to({rotation:0.9,x:498.4,y:209.7},0).wait(1).to({rotation:0.7,x:499.1,y:215.3},0).wait(1).to({rotation:0.4,x:499.9,y:222.1},0).wait(1).to({rotation:0.1,x:501,y:230.2},0).wait(1).to({rotation:-0.4,x:502.2,y:239.5},0).wait(1).to({rotation:-0.8,x:503.6,y:250.1},0).wait(1).to({rotation:-1.3,x:505.2,y:261.9},0).wait(1).to({rotation:-1.9,x:506.8,y:274.9},0).wait(1).to({rotation:-2.5,x:508.7,y:289.1},0).wait(1).to({rotation:-3.2,x:510.7,y:304.4},0).wait(1).to({rotation:-3.9,x:512.8,y:320.6},0).wait(1).to({rotation:-4.6,x:515,y:337.9},0).wait(1).to({rotation:-5.4,x:517.4,y:355.9},0).wait(1).to({rotation:-6.2,x:519.8,y:374.6},0).wait(1).to({rotation:-7.1,x:522.3,y:393.8},0).wait(1).to({rotation:-7.9,x:524.8,y:413.3},0).wait(1).to({rotation:-8.8,x:527.4,y:433.2},0).wait(1).to({rotation:-9.7,x:530,y:453.1},0).wait(1).to({rotation:-10.5,x:532.5,y:472.9},0).wait(1).to({rotation:-11.4,x:535,y:492.6},0).wait(1).to({rotation:-12.2,x:537.5,y:511.9},0).wait(1).to({rotation:-13.1,x:539.9,y:530.8},0).wait(1).to({rotation:-13.9,x:542.3,y:549.2},0).wait(1).to({rotation:-14.7,x:544.6,y:567},0).wait(1).to({rotation:-15.4,x:546.8,y:584.1},0).wait(1).to({rotation:-16.1,x:548.8,y:600.6},0).wait(1).to({rotation:-16.8,x:550.9,y:616.3},0).wait(1).to({rotation:-17.5,x:552.8,y:631.3},0).wait(1).to({rotation:-18.1,x:554.6,y:645.5},0).wait(1).to({rotation:-18.7,x:556.2,y:658.8},0).wait(1).to({rotation:-19.2,x:557.9,y:671.4},0).wait(1).to({rotation:-19.7,x:559.3,y:683.3},0).wait(1).to({rotation:-20.2,x:560.7,y:694.3},0).wait(1).to({rotation:-20.7,x:562,y:704.6},0).wait(1).to({rotation:-21.1,x:563.3,y:714.1},0).wait(1).to({rotation:-21.5,x:564.3,y:723},0).wait(1).to({rotation:-21.8,x:565.3,y:731},0).wait(1).to({rotation:-22.2,x:566.3,y:738.4},0).wait(1).to({rotation:-22.5,x:567.1,y:745.2},0).wait(1).to({rotation:-22.7,x:568,y:751.3},0).wait(1).to({rotation:-23,x:568.6,y:756.7},0).wait(1).to({rotation:-23.2,x:569.2,y:761.5},0).wait(1).to({regX:0.1,regY:0.1,rotation:-23.4,x:549.3,y:754.5},0).wait(32).to({regY:0.2,scaleX:1,scaleY:1,rotation:-21.1,x:537.2,y:706.2},0).wait(1).to({rotation:-19.1,x:525.3,y:663.5},0).wait(1).to({rotation:-17.3,x:513.8,y:625.2},0).wait(1).to({rotation:-15.8,x:502.7,y:590.6},0).wait(1).to({rotation:-14.3,x:492.1,y:559.8},0).wait(1).to({rotation:-12.8,x:482,y:532.5},0).wait(1).to({regY:0.1,rotation:-11.6,x:472.1,y:507.7},0).wait(1).to({regY:0.2,rotation:-10.5,x:462.4,y:485.3},0).wait(1).to({regY:0.1,rotation:-9.5,x:452.7,y:464.7},0).wait(1).to({rotation:-8.5,x:443.1,y:446},0).wait(1).to({rotation:-7.5,x:433.3,y:429.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-6.8,x:423.2,y:414.1},0).wait(1).to({regY:0.2,rotation:-6,x:412.7,y:400.7},0).wait(1).to({regY:0.1,rotation:-5.3,x:401.3,y:389},0).wait(1).to({regY:0.2,rotation:-4.5,x:388.9,y:379.8},0).wait(1).to({rotation:-3.8,x:375.6,y:373.3},0).wait(1).to({regY:0.1,rotation:-3.3,x:361.5,y:369.4},0).wait(1).to({regY:0.2,rotation:-2.5,x:346.8,y:369},0).wait(1).to({rotation:-1.8,x:332.1,y:372},0).wait(1).to({rotation:-1.3,x:317.3,y:378.4},0).wait(1).to({regY:0.1,rotation:-0.3,x:302.4,y:388.5},0).wait(1).to({regY:0.2,rotation:0.3,x:286.7,y:403.1},0).wait(1).to({rotation:1.6,x:268.9,y:425.2},0).wait(1).to({rotation:3.9,x:244.3,y:467.1},0).wait(29).to({regX:0,regY:0.3,rotation:0,skewX:3.5,skewY:-176.5},0).wait(1).to({regX:-0.1,x:255.5,y:438.2},0).wait(1).to({regX:0,x:263.9,y:417.8},0).wait(1).to({x:271.3,y:401},0).wait(1).to({x:278.1,y:386.3},0).wait(1).to({x:284.7,y:373},0).wait(1).to({x:291.2,y:360.8},0).wait(1).to({x:297.7,y:349.2},0).wait(1).to({x:304.3,y:338.1},0).wait(1).to({x:311.2,y:327.4},0).wait(1).to({regX:-0.1,x:318.5,y:316.9},0).wait(1).to({regY:0.4,x:326.1,y:306.8},0).wait(1).to({x:334.4,y:296.8},0).wait(1).to({x:343.4,y:287},0).wait(1).to({x:353.5,y:277.4},0).wait(1).to({x:364.9,y:268.3},0).wait(1).to({regX:0,x:378,y:260},0).wait(1).to({x:393.1,y:253.1},0).wait(1).to({x:410.6,y:248.4},0).wait(1).to({x:430.6,y:247.6},0).wait(1).to({x:452.7,y:251.5},0).wait(1).to({regX:-0.1,x:476.6,y:261.1},0).wait(1).to({x:501.9,y:277.3},0).wait(1).to({regX:0.1,regY:0.5,rotation:3.5,skewX:0,skewY:0,x:530,y:302},0).wait(33).to({regY:0.2,rotation:3.9},0).wait(1).to({rotation:1.3,x:513.5,y:272.8},0).wait(1).to({regY:0.3,rotation:-0.1,x:500.8,y:253.3},0).wait(1).to({rotation:-1.5,x:489.5,y:238.2},0).wait(1).to({regY:0.2,rotation:-2.8,x:478.8,y:225.6},0).wait(1).to({regX:0.2,regY:0.3,rotation:-3.8,x:468.3,y:215},0).wait(1).to({regX:0.1,regY:0.2,rotation:-4.8,x:457.4,y:205.9},0).wait(1).to({rotation:-5.8,x:446.4,y:198.4},0).wait(1).to({rotation:-6.5,x:434.7,y:192.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7.5,x:422.5,y:188.6},0).wait(1).to({rotation:-8.3,x:409.8,y:186.8},0).wait(1).to({rotation:-9.3,x:396.8,y:187.3},0).wait(1).to({regY:0.3,rotation:-10,x:383.9,y:190.2},0).wait(1).to({regY:0.2,rotation:-11,x:371.6,y:195},0).wait(1).to({regY:0.3,rotation:-11.8,x:359.8,y:201.7},0).wait(1).to({regY:0.2,rotation:-12.8,x:348.6,y:209.7},0).wait(1).to({regY:0.3,rotation:-13.6,x:338,y:219},0).wait(1).to({rotation:-14.6,x:327.8,y:229.3},0).wait(1).to({rotation:-15.6,x:317.8,y:240.6},0).wait(1).to({rotation:-16.6,x:308,y:253.1},0).wait(1).to({rotation:-17.8,x:298.1,y:266.8},0).wait(1).to({rotation:-19,x:288.2,y:282.1},0).wait(1).to({regY:0.2,rotation:-20.3,x:277.7,y:299.2},0).wait(1).to({rotation:-22,x:266.7,y:319},0).wait(1).to({regY:0.3,rotation:-23.8,x:254.5,y:342.4},0).wait(1).to({rotation:0,skewX:-26.1,skewY:153.9,x:240.4,y:372.1},0).wait(32).to({regY:0.2,scaleX:1,scaleY:1,rotation:3.9,skewX:0,skewY:0,x:240.3},0).wait(1).to({rotation:5,x:253.9,y:366},0).wait(1).to({regY:0.3,rotation:6.3,x:267.8,y:361.1},0).wait(1).to({regX:0.2,rotation:7.3,x:282.6,y:357.5},0).wait(1).to({regY:0.2,scaleX:1,scaleY:1,rotation:8.6,x:297.6,y:355.3},0).wait(1).to({regY:0.3,rotation:9.8,x:313,y:355.2},0).wait(1).to({regX:0.1,rotation:11,x:328.5,y:357.3},0).wait(1).to({rotation:12.3,x:343.6,y:361.7},0).wait(1).to({regY:0.2,rotation:13.3,x:358,y:368.5},0).wait(1).to({regY:0.1,rotation:14.6,x:371.4,y:377.4},0).wait(1).to({regY:0.2,rotation:15.8,x:383.6,y:388},0).wait(1).to({rotation:17,x:394.5,y:399.7},0).wait(1).to({regY:0.1,rotation:18.3,x:404.4,y:412.2},0).wait(1).to({regX:0.2,regY:0.2,rotation:19.3,x:413.5,y:425.4},0).wait(1).to({rotation:20.6,x:421.6,y:439},0).wait(1).to({rotation:21.8,x:428.9,y:453},0).wait(1).to({regX:0.1,regY:0.1,rotation:23.1,x:435.6,y:467},0).wait(1).to({regY:0.2,rotation:24.3,x:441.7,y:481.5},0).wait(1).to({regY:0.1,rotation:25.3,x:447.4,y:495.8},0).wait(1).to({regX:0.2,regY:0.3,rotation:26.6,x:452.6,y:510.6},0).wait(1).to({regX:0.1,regY:0.2,rotation:27.8,x:457.4,y:525.3},0).wait(1).to({regY:0.1,scaleX:1,scaleY:1,rotation:29.1,x:462,y:539.9},0).wait(1).to({regY:0.2,rotation:30.3,x:466.1,y:554.7},0).wait(1).to({rotation:31.4,x:470.1,y:569.6},0).wait(1).to({rotation:32.6,x:473.7,y:584.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:33.9,x:477.2,y:599.3},0).wait(33).to({regY:0.3,rotation:-26.1,y:599.4},0).wait(1).to({regY:0.4,scaleX:1,scaleY:1,rotation:-24.6,x:457.9,y:593.5},0).wait(1).to({regX:0.2,regY:0.3,rotation:-23.3,x:437.1,y:589.9},0).wait(1).to({rotation:-22,x:415.7,y:589.4},0).wait(1).to({regX:0.1,rotation:-20.6,x:394.2,y:591.9},0).wait(1).to({rotation:-19.3,x:373.2,y:597.1},0).wait(1).to({rotation:-17.8,x:353,y:604.8},0).wait(1).to({regX:0.2,rotation:-16.5,x:333.7,y:614.5},0).wait(1).to({rotation:-15.1,x:315.2,y:625.7},0).wait(1).to({rotation:-13.8,x:297.6,y:638.2},0).wait(1).to({regX:0.1,rotation:-12.3,x:280.9,y:651.6},0).wait(1).to({regX:0.2,rotation:-11,x:265.1,y:665.9},0).wait(1).to({regX:0.1,rotation:-9.6,x:249.8,y:680.8},0).wait(1).to({regX:0.2,rotation:-8.3,x:235.4,y:696},0).wait(1).to({regX:0.1,rotation:-7,x:221.3,y:711.9},0).wait(1).to({regX:0.2,scaleX:1,scaleY:1,rotation:-5.5,x:207.9,y:728},0).wait(1).to({regY:0.2,rotation:-4.3,x:195,y:744.3},0).wait(1).to({regX:0.1,regY:0.3,rotation:-2.8,x:182.3,y:761.1},0).wait(1).to({regX:0.2,rotation:-1.5,x:170.2,y:777.9},0).wait(1).to({rotation:-0.1,x:158.3,y:795},0).wait(1).to({regX:0.1,rotation:1,x:146.8,y:812.2},0).wait(1).to({rotation:2.5,x:135.5,y:829.6},0).wait(1).to({rotation:3.9,x:124.6,y:847.2},0).wait(1).to({x:111.6},0).to({regX:0.3,rotation:-5.1,x:111.8,y:308.2},24,cjs.Ease.get(0.88)).wait(12).to({regX:0.1,rotation:3.9,x:111.6},6).wait(9).to({rotation:3.9},0).to({regX:0.2,regY:0.2,rotation:-4.5,x:291.6,y:252.1},8,cjs.Ease.get(0.5)).to({regX:0.3,regY:0.4,rotation:0,x:396.1,y:400.5},12,cjs.Ease.get(-0.5)).wait(11).to({x:724.4,y:402.3},31,cjs.Ease.get(-0.5)).wait(39).to({x:700.4,y:482.3},0).to({regY:0.5,scaleX:0.7,scaleY:0.7,x:258.3,y:492.5},44).wait(157).to({regX:0.4,scaleX:1,scaleY:1,x:66.1,y:478.3},0).to({x:156.1},18).wait(10).to({scaleX:1,scaleY:1,rotation:-12.6},0).to({x:331.6,y:452.8},21).to({x:361.6,y:437.8},11).to({regX:0.6,regY:0.6,scaleX:0.23,scaleY:0.23,x:288.7,y:365.2},17).to({_off:true},1).wait(22));

	// speed
	this.instance_12 = new lib.speedline();
	this.instance_12.setTransform(432,590.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(475).to({_off:false},0).to({x:293.7,y:689.5},9).to({_off:true},2).wait(454));

	// car
	this.car = new lib.car();
	this.car.setTransform(344.8,454.4);
	this.car.alpha = 0;
	this.car._off = true;

	this.timeline.addTween(cjs.Tween.get(this.car).wait(692).to({_off:false},0).wait(1).to({alpha:1},0).wait(15).to({regX:-0.1,regY:0.1,scaleX:0.41,scaleY:0.43,rotation:-3.7,x:-52.9,y:374.9},30).wait(5).to({regY:0.3,scaleX:1,scaleY:1,rotation:0,skewX:16,skewY:-164,x:-174.9,y:375},0).to({skewX:24.2,skewY:-155.8,x:756.7,y:502.9},34).wait(1).to({y:579.9,alpha:0},0).wait(36).to({regX:0,regY:0,skewX:0,skewY:0,x:782.3,y:504.6,alpha:1},0).to({x:121.9,y:436.1},26).wait(60).to({x:-149.7,y:344.6},27).wait(13));

	// shadow
	this.shadow = new lib.shadow();
	this.shadow.setTransform(479.4,255.1,0.437,0.437,0,0,0,0.1,0);
	this.shadow._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shadow).wait(165).to({_off:false},0).wait(1).to({regX:0,scaleX:0.44,scaleY:0.44,y:255.9},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:480,y:260.3},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:480.7,y:265.9},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:481.6,y:272.7},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:482.7,y:280.8},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:483.9,y:290.1},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:485.3,y:300.7},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:486.8,y:312.6},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:488.5,y:325.6},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:490.4,y:339.8},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:492.4,y:355.1},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:494.5,y:371.5},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:496.8,y:388.7},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:499.1,y:406.8},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:501.6,y:425.5},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:504.1,y:444.8},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:506.6,y:464.4},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:509.2,y:484.3},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:511.8,y:504.3},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:514.5,y:524.2},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:517,y:543.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:519.6,y:563.3},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:522,y:582.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:524.5,y:600.8},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:526.8,y:618.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:529,y:635.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:531.2,y:652.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:533.3,y:668.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:535.2,y:683.3},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:537.1,y:697.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:538.8,y:711},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:540.5,y:723.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:542.1,y:735.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:543.5,y:746.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:544.9,y:757},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:546.1,y:766.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:547.3,y:775.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:548.3,y:783.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:549.3,y:791.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:550.2,y:797.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:551,y:803.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:551.7,y:809.4},0).wait(1).to({scaleX:1,scaleY:1,x:552.3,y:814.3},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,x:553,y:818.6},0).wait(31).to({x:244.5,y:529.2},24).wait(29).to({x:532.6,y:361.4},23).wait(33).to({x:533.6},0).to({rotation:-30,x:270.9,y:436.5},25).wait(32).to({rotation:0,x:239.9},0).to({rotation:45,x:438.7,y:649.6},25).wait(33).to({rotation:-45,x:469.5,y:655.6},0).to({rotation:0,x:123.9,y:925.6},22).wait(1).to({x:98.8,y:917.3},0).to({y:378.3},24,cjs.Ease.get(0.88)).wait(27).to({scaleX:0.58,scaleY:0.58,x:285.5,y:432.6},8,cjs.Ease.get(0.5)).to({scaleX:1,scaleY:1,x:392.3,y:473.5},12,cjs.Ease.get(-0.5)).wait(11).to({x:720.3},31,cjs.Ease.get(-0.5)).wait(39).to({x:696.3,y:553.5},0).to({regX:0.3,regY:0.2,scaleX:0.67,scaleY:0.67,rotation:20.2,x:259.2,y:541},44).wait(157).to({regX:0.4,regY:0.4,scaleX:1,scaleY:1,rotation:0,x:68.4,y:541.6},0).to({x:156.9},18).wait(10).to({x:332.4,y:516.1},21).to({x:362.4,y:501.1},11).to({regX:0.5,regY:0.5,scaleX:0.21,scaleY:0.21,x:288.4,y:380.9},17).to({_off:true},1).wait(22));

	// conts
	this.conts = new lib.conts();

	this.timeline.addTween(cjs.Tween.get(this.conts).wait(940));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(319,620.5,642,9970.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(319,624.5,642,9966.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(319,691.5,642,9899.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(319,624.5,642,9966.3), rect, rect, rect=new cjs.Rectangle(319,576.5,642,10014.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(319,576.5,650.1,10014.3), new cjs.Rectangle(319,576.5,663,10014.3), new cjs.Rectangle(319,576.5,676.4,10014.3), new cjs.Rectangle(319,576.5,690,10014.3), new cjs.Rectangle(319,576.5,704,10014.3), new cjs.Rectangle(319,576.5,718.4,10014.3), new cjs.Rectangle(319,576.5,733.1,10014.3), new cjs.Rectangle(319,576.5,748.1,10014.3), new cjs.Rectangle(319,576.5,763.5,10014.3), rect=new cjs.Rectangle(319,576.5,779.1,10014.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(319,576.5,755.1,10014.3), new cjs.Rectangle(319,576.5,744.6,10014.3), new cjs.Rectangle(319,576.5,734.2,10014.3), new cjs.Rectangle(319,576.5,723.8,10014.3), new cjs.Rectangle(319,576.5,713.4,10014.3), new cjs.Rectangle(319,576.5,703,10014.3), new cjs.Rectangle(319,576.5,692.6,10014.3), new cjs.Rectangle(319,576.5,682.1,10014.3), new cjs.Rectangle(319,576.5,671.8,10014.3), new cjs.Rectangle(319,576.5,661.4,10014.3), new cjs.Rectangle(319,576.5,650.9,10014.3), rect=new cjs.Rectangle(319,576.5,642,10014.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(319,624.5,642,9966.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(311.9,624.5,649.1,9966.3), new cjs.Rectangle(301.1,624.5,659.9,9966.3), new cjs.Rectangle(290.1,624.5,670.9,9966.3), new cjs.Rectangle(279.4,624.5,681.7,9966.3), new cjs.Rectangle(268.4,624.5,692.7,9966.3), new cjs.Rectangle(257.7,624.5,703.4,9966.3), new cjs.Rectangle(246.7,624.5,714.3,9966.3), new cjs.Rectangle(236,624.5,725.1,9966.3), new cjs.Rectangle(225,624.5,736.1,9966.3), rect=new cjs.Rectangle(214,624.5,747,9966.3), rect, rect, rect, rect, new cjs.Rectangle(0.3,624.5,960.7,9966.3), new cjs.Rectangle(27.8,624.5,933.2,9966.3), new cjs.Rectangle(54.9,624.5,906.2,9966.3), new cjs.Rectangle(81.9,624.5,879.1,9966.3), new cjs.Rectangle(109.1,624.5,851.9,9966.3), new cjs.Rectangle(136.2,624.5,824.8,9966.3), new cjs.Rectangle(163.3,624.5,797.7,9966.3), new cjs.Rectangle(190.4,624.5,770.7,9966.3), new cjs.Rectangle(217.5,624.5,743.5,9966.3), new cjs.Rectangle(244.7,624.5,716.3,9966.3), new cjs.Rectangle(271.8,624.5,689.3,9966.3), new cjs.Rectangle(299,624.5,662,9966.3), rect=new cjs.Rectangle(319,624.5,642,9966.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(319,624.5,662.4,9966.3), new cjs.Rectangle(319,624.5,690.1,9966.3), new cjs.Rectangle(319,624.5,717.5,9966.3), new cjs.Rectangle(319,624.5,745.1,9966.3), new cjs.Rectangle(319,624.5,772.7,9966.3), new cjs.Rectangle(319,624.5,800.4,9966.3), new cjs.Rectangle(319,624.5,827.9,9966.3), new cjs.Rectangle(319,624.5,855.5,9966.3), new cjs.Rectangle(319,624.5,883.1,9966.3), rect=new cjs.Rectangle(319,624.5,911.1,9966.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(319,624.5,904.4,9966.3), new cjs.Rectangle(319,624.5,879,9966.3), new cjs.Rectangle(319,624.5,853.6,9966.3), new cjs.Rectangle(319,624.5,828.2,9966.3), new cjs.Rectangle(319,624.5,802.8,9966.3), new cjs.Rectangle(319,624.5,777.4,9966.3), new cjs.Rectangle(319,624.5,752,9966.3), new cjs.Rectangle(319,624.5,726.6,9966.3), new cjs.Rectangle(319,624.5,701.2,9966.3), new cjs.Rectangle(319,624.5,675.8,9966.3), new cjs.Rectangle(319,624.5,650.4,9966.3), rect=new cjs.Rectangle(319,624.5,642,9966.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(310,624.5,651.1,9966.3), new cjs.Rectangle(299.9,624.5,661.1,9966.3), new cjs.Rectangle(289.8,624.5,671.2,9966.3), new cjs.Rectangle(279.8,624.5,681.3,9966.3), new cjs.Rectangle(269.7,624.5,691.3,9966.3), new cjs.Rectangle(259.7,624.5,701.4,9966.3), new cjs.Rectangle(249.6,624.5,711.4,9966.3), new cjs.Rectangle(239.6,624.5,721.5,9966.3), new cjs.Rectangle(229.5,624.5,731.6,9966.3), new cjs.Rectangle(219.4,624.5,741.6,9966.3), new cjs.Rectangle(209.4,624.5,751.7,9966.3), new cjs.Rectangle(199.3,624.5,761.7,9966.3), new cjs.Rectangle(189.3,624.5,771.8,9966.3), new cjs.Rectangle(179.2,624.5,781.9,9966.3), new cjs.Rectangle(169.1,624.5,791.9,9966.3), new cjs.Rectangle(159.1,624.5,802,9966.3), new cjs.Rectangle(149,624.5,812,9966.3), new cjs.Rectangle(139,624.5,822.1,9966.3), new cjs.Rectangle(128.9,624.5,832.2,9966.3), new cjs.Rectangle(118.8,624.5,842.2,9966.3), new cjs.Rectangle(108.8,624.5,852.3,9966.3), new cjs.Rectangle(98.7,624.5,862.3,9966.3), new cjs.Rectangle(88.7,624.5,872.4,9966.3), new cjs.Rectangle(78.6,624.5,882.4,9966.3), new cjs.Rectangle(68.5,624.5,892.5,9966.3), new cjs.Rectangle(58.4,624.5,902.6,9966.3), rect=new cjs.Rectangle(48.4,624.5,912.6,9966.3), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;