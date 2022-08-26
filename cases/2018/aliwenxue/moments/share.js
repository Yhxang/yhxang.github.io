(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1028,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/share_atlas_.png?1523459003114", id:"share_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"share_atlas_", frames: [[330,1030,302,48],[0,1030,328,136],[330,1080,142,41],[0,1168,359,48],[0,0,640,1028]]}
];


// symbols:



(lib.a14 = function() {
	this.spriteSheet = ss["share_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.a15 = function() {
	this.spriteSheet = ss["share_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.a16 = function() {
	this.spriteSheet = ss["share_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.a17 = function() {
	this.spriteSheet = ss["share_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.a26 = function() {
	this.spriteSheet = ss["share_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.rt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a14();
	this.instance.setTransform(-302,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302,0,302,48);


(lib._img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AmPGQIAAsfIMfAAIAAMfg");
	this.shape.setTransform(40,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.btm_qd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a16();
	this.instance.setTransform(-71,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-21,142,41);


(lib.btm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a16();
	this.instance.setTransform(-5,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.a15();
	this.instance_1.setTransform(-164,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-68,328,136);


(lib.bgimg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.a26();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1028);


(lib.userphoto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.instance = new lib.a17();
	this.instance.setTransform(97,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// txtline1
	this.txtline1 = new cjs.Text("我是“益起读书”第XXXX个参与者", "22px 'SimHei'", "#303032");
	this.txtline1.name = "txtline1";
	this.txtline1.lineHeight = 24;
	this.txtline1.lineWidth = 399;
	this.txtline1.setTransform(96,-3.7);

	this.timeline.addTween(cjs.Tween.get(this.txtline1).wait(1));

	// userid
	this.userid = new cjs.Text("抓取用户id", "20px 'SimHei'", "#3E5586");
	this.userid.name = "userid";
	this.userid.lineHeight = 22;
	this.userid.lineWidth = 339;
	this.userid.setTransform(94,-37.3);

	this.timeline.addTween(cjs.Tween.get(this.userid).wait(1));

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai9mOIF7AAQAjAAAfAKQAgALAaATQAaATATAaQATAaALAgQAKAfABAjIAAF7QgBAjgKAfQgLAggTAaQgTAagaATQgaATggALQgfAKgjAAIl7AAQgsAAgmgQQglgQgdgdQgdgdgQglQgQgmgBgsIAAl7QABgjAKgfQALggATgaQATgaAagTQAagTAggLQAfgKAjAAg");
	mask.setTransform(40,1);

	// img
	this.nickimg = new lib._img();
	this.nickimg.setTransform(0,-39);

	this.nickimg.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.nickimg).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEDEDE").s().rr(-40,-40,80,80,21);
	this.shape.setTransform(40,1);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-39.3,496.5,120.8);


// stage content:
(lib.share = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btm_qd
	this.btm_qd = new lib.btm_qd();
	this.btm_qd.setTransform(320,988);
	this.btm_qd.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.btm_qd).wait(1));

	// btm
	this.btm = new lib.btm();
	this.btm.setTransform(325.5,922.3);
	this.btm.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.btm).wait(1));

	// txt
	this.tit = new lib.userphoto();
	this.tit.setTransform(95.3,115.2);

	this.timeline.addTween(cjs.Tween.get(this.tit).wait(1));

	// rt
	this.rt = new lib.rt();
	this.rt.setTransform(613,15);

	this.timeline.addTween(cjs.Tween.get(this.rt).wait(1));

	// bgimg
	this.bgimg = new lib.bgimg();
	this.bgimg.setTransform(320,514,1,1,0,0,0,320,514);

	this.timeline.addTween(cjs.Tween.get(this.bgimg).wait(1));

	// 图层 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx/B1MMAAAjqXMBj+AAAMAAADqXg");
	this.shape.setTransform(320,750);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,514,640,1500);

})(lib1 = lib1||{}, images1 = images1||{}, createjs = createjs||{}, ss = ss||{});
var lib1, images1, createjs, ss;