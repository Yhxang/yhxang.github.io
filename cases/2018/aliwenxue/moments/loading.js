(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 172,
	height: 230,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/loading_atlas_.png?1522402989768", id:"loading_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"loading_atlas_", frames: [[0,109,148,106],[154,0,115,107],[150,109,107,118],[259,219,114,96],[271,0,109,104],[259,109,105,108],[0,217,107,117],[0,0,152,107],[109,317,134,26],[382,0,21,444]]}
];


// symbols:



(lib.l1 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.l2 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.l3 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.l4 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.l5 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.l6 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.l7 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.l8 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.lo1 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.no1 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.num = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// 图层 1
	this.instance = new lib.no1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-40},0).wait(1).to({y:-83},0).wait(1).to({y:-124},0).wait(1).to({y:-166},0).wait(1).to({y:-208},0).wait(1).to({y:-251},0).wait(1).to({y:-294},0).wait(1).to({y:-335},0).wait(1).to({y:-378},0).wait(1).to({y:-418},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,444);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7200").s().p("AgQCqIAAlTIAhAAIAAFTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-17,3.5,34);


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.l1();
	this.instance.setTransform(12,11);

	this.instance_1 = new lib.l2();
	this.instance_1.setTransform(29,21);

	this.instance_2 = new lib.l3();
	this.instance_2.setTransform(28,6);

	this.instance_3 = new lib.l4();
	this.instance_3.setTransform(24,1);

	this.instance_4 = new lib.l5();
	this.instance_4.setTransform(27,13);

	this.instance_5 = new lib.l6();
	this.instance_5.setTransform(33,19);

	this.instance_6 = new lib.l7();
	this.instance_6.setTransform(30,10);

	this.instance_7 = new lib.l8();
	this.instance_7.setTransform(5,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12,11,148,106);


(lib.lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.line();
	this.instance.setTransform(66.9,0,1,1.047,0,17.2,0);

	this.instance_1 = new lib.line();
	this.instance_1.setTransform(54.9,0,1,1.047,0,17.2,0);

	this.instance_2 = new lib.line();
	this.instance_2.setTransform(42.9,0,1,1.047,0,17.2,0);

	this.instance_3 = new lib.line();
	this.instance_3.setTransform(30.9,0,1,1.047,0,17.2,0);

	this.instance_4 = new lib.line();
	this.instance_4.setTransform(18.9,0,1,1.047,0,17.2,0);

	this.instance_5 = new lib.line();
	this.instance_5.setTransform(6.9,0,1,1.047,0,17.2,0);

	this.instance_6 = new lib.line();
	this.instance_6.setTransform(-5.1,0,1,1.047,0,17.2,0);

	this.instance_7 = new lib.line();
	this.instance_7.setTransform(-17.1,0,1,1.047,0,17.2,0);

	this.instance_8 = new lib.line();
	this.instance_8.setTransform(-30.8,0,1,1.047,0,17.2,0);

	this.instance_9 = new lib.line();
	this.instance_9.setTransform(-42.8,0,1,1.047,0,17.2,0);

	this.instance_10 = new lib.line();
	this.instance_10.setTransform(-54.8,0,1,1.047,0,17.2,0);

	this.instance_11 = new lib.line();
	this.instance_11.setTransform(-66.8,0,1,1.047,0,17.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.8,-17,147.8,34);


(lib.loadline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.lines();
	this.instance.setTransform(-12,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.8,-17,147.8,34);


// stage content:



(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(85.9,203.5);

	// 图层 9
	this.pct = new lib.num();
	this.pct.setTransform(113.5,-7.5,1,1,0,0,0,10.5,222);

	this.sin = new lib.num();
	this.sin.setTransform(92.5,411.5,1,1,0,0,0,10.5,222);

	this.ten = new lib.num();
	this.ten.setTransform(70.5,412.5,1,1,0,0,0,10.5,222);
	this.ten.alpha = 0;

	this.hun = new lib.num();
	this.hun.setTransform(51,371,1,1,0,0,0,10.5,222);
	this.hun.alpha = 0;

	this.pct.mask = this.sin.mask = this.ten.mask = this.hun.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hun},{t:this.ten},{t:this.sin},{t:this.pct}]}).wait(1));

	// 图层 7
	this.instance = new lib.heart();
	this.instance.setTransform(95,116.5,1,1,0,0,0,95,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(55,124,200,0.698)").s().p("AlGBJQiHgeAAgrQAAgqCHgfQCIgeC+gBQC/ABCIAeQCHAfAAAqQAAAriHAeQiIAfi/AAQi+AAiIgfg");
	this.shape.setTransform(85.8,122.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AoSBdQgmAAgcgbQgbgcgBgmIAAAAQABglAbgcQAcgbAmAAIQlAAQAmAAAcAbQAbAcABAlIAAAAQgBAmgbAcQgcAbgmAAg");
	mask_1.setTransform(84.6,155.5);

	// 图层 5
	this.instance_1 = new lib.loadline();
	this.instance_1.setTransform(87.6,156.9);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 4
	this.instance_2 = new lib.lo1();
	this.instance_2.setTransform(18,143);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98,126,148,212.6);

})(lib0 = lib0||{}, images0 = images0||{}, createjs = createjs||{}, ss = ss||{});
var lib0, images0, createjs, ss;