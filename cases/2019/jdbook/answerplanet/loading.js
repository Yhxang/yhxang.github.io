(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"loading_atlas_", frames: [[451,0,493,561],[0,0,449,818]]},
		{name:"loading_atlas_2", frames: [[0,774,377,95],[0,570,202,202],[0,927,30,28],[22,957,20,18],[0,957,20,24],[0,871,105,33],[0,906,131,19],[0,0,397,568],[107,871,77,19]]}
];


// symbols:



(lib.lbtn = function() {
	this.spriteSheet = ss["loading_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.licon = function() {
	this.spriteSheet = ss["loading_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.licon2 = function() {
	this.spriteSheet = ss["loading_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.licon3 = function() {
	this.spriteSheet = ss["loading_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.licon5 = function() {
	this.spriteSheet = ss["loading_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.lline = function() {
	this.spriteSheet = ss["loading_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.lramp1 = function() {
	this.spriteSheet = ss["loading_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ls1 = function() {
	this.spriteSheet = ss["loading_atlas_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ls2 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ls3 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ltxt = function() {
	this.spriteSheet = ss["loading_atlas_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ufo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.licon2();
	this.instance.parent = this;
	this.instance.setTransform(-15,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ufo, new cjs.Rectangle(-15,-14,30,28), null);


(lib.rampl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.lramp1();
	this.instance.parent = this;
	this.instance.setTransform(-131,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rampl, new cjs.Rectangle(-131,-9.5,131,19), null);


(lib.moon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.licon3();
	this.instance.parent = this;
	this.instance.setTransform(-10,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.moon, new cjs.Rectangle(-10,-9,20,18), null);


(lib.ls3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.ls3();
	this.instance.parent = this;
	this.instance.setTransform(-224.5,-409);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ls3_1, new cjs.Rectangle(-224.5,-409,449,818), null);


(lib.ls2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.ls2();
	this.instance.parent = this;
	this.instance.setTransform(-246.5,-280.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ls2_1, new cjs.Rectangle(-246.5,-280.5,493,561), null);


(lib.ls1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.ls1();
	this.instance.parent = this;
	this.instance.setTransform(-198.5,-284);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ls1_1, new cjs.Rectangle(-198.5,-284,397,568), null);


(lib.licon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.licon();
	this.instance.parent = this;
	this.instance.setTransform(-101,-101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.licon_1, new cjs.Rectangle(-101,-101,202,202), null);


(lib.lbtn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.lbtn();
	this.instance.parent = this;
	this.instance.setTransform(-189,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("A/bHTIAAulMA+3AAAIAAOlg");
	this.shape.setTransform(0.4,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lbtn_1, new cjs.Rectangle(-200.8,-48,402.4,95), null);


(lib.glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.lline();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glow, new cjs.Rectangle(-52.5,-16.5,105,33), null);


(lib.book = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.licon5();
	this.instance.parent = this;
	this.instance.setTransform(-10,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.book, new cjs.Rectangle(-10,-12,20,24), null);


(lib.stars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ls3
	this.instance = new lib.ls3_1();
	this.instance.parent = this;
	this.instance.setTransform(-224.7,-32.4,4.665,4.665,0,0,0,91.3,-200.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({regX:91.5,scaleX:0.16,scaleY:0.16,x:0.1,y:-120.5,alpha:0.199},31,cjs.Ease.quadOut).wait(1));

	// ls2
	this.instance_1 = new lib.ls2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2,-118.4,6.938,6.938,0,0,0,18.2,-158.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({regX:18.4,regY:-158.4,scaleX:0.12,scaleY:0.12,x:0,y:-120.5,alpha:0.199},34,cjs.Ease.quadOut).to({_off:true},1).wait(16));

	// ls1
	this.instance_2 = new lib.ls1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1,-120.5,5.044,5.044,0,0,0,-11.3,-217);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-11.6,regY:-217.1,scaleX:0.27,scaleY:0.27,x:0,alpha:0.199},35,cjs.Ease.quadOut).to({_off:true},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-943.2,-458.4,2002.5,2865);


(lib.process = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al1A5QgXAAgQgRQgRgQAAgYIAAAAQAAgXARgQQAQgRAXAAILqAAQAYAAAQARQARAQAAAXIAAAAQAAAYgRAQQgQARgYAAg");

	// rampl
	this.rampl = new lib.rampl();
	this.rampl.name = "rampl";
	this.rampl.parent = this;
	this.rampl.setTransform(-42.9,0,0.656,1,0,0,0,0.1,0);

	var maskedShapeInstanceList = [this.rampl];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.rampl).wait(17));

	// 图层_3
	this.instance = new lib.glow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.578},8).to({alpha:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-238.8,-16.5,392,33);


(lib.liconpos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_4
	this.instance = new lib.book();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,-65,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.2},6).to({rotation:4.5},9).to({rotation:0},7).wait(1));

	// 图层_3
	this.instance_1 = new lib.moon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,67,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.97,scaleY:0.97,y:0.1},6).to({scaleX:0.96,scaleY:1.06,y:0},10).to({scaleX:1,scaleY:1},6).wait(1));

	// 图层_2
	this.instance_2 = new lib.ufo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,1,0,0,0,40,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.93,scaleY:0.93},8).to({scaleX:1.04,scaleY:1.04},7).to({scaleX:1,scaleY:1},7).wait(1));

	// 图层_1
	this.instance_3 = new lib.licon_1();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-101,202,202);


// stage content:
(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// lbtn
	this.lbtn = new lib.lbtn_1();
	this.lbtn.name = "lbtn";
	this.lbtn.parent = this;
	this.lbtn.setTransform(379.2,975.4);
	this.lbtn.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.lbtn).wait(1));

	// num
	this.num = new cjs.Text("100%", "20px 'Arial'", "#C2D1D3");
	this.num.name = "num";
	this.num.textAlign = "center";
	this.num.lineHeight = 24;
	this.num.lineWidth = 84;
	this.num.parent = this;
	this.num.setTransform(378.3,777.8);

	this.timeline.addTween(cjs.Tween.get(this.num).wait(1));

	// process
	this.process = new lib.process();
	this.process.name = "process";
	this.process.parent = this;
	this.process.setTransform(375.7,759.5,1.22,1.22,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.process).wait(1));

	// loading
	this.instance = new lib.ltxt();
	this.instance.parent = this;
	this.instance.setTransform(345,724);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// liconpos
	this.liconpos = new lib.liconpos();
	this.liconpos.name = "liconpos";
	this.liconpos.parent = this;
	this.liconpos.setTransform(375,582,0.23,0.23,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.liconpos).wait(1));

	// star2
	this.star2 = new lib.stars();
	this.star2.name = "star2";
	this.star2.parent = this;
	this.star2.setTransform(375,726.5);

	this.timeline.addTween(cjs.Tween.get(this.star2).wait(1));

	// star1
	this.star1 = new lib.stars();
	this.star1.name = "star1";
	this.star1.parent = this;
	this.star1.setTransform(375,726.5);

	this.timeline.addTween(cjs.Tween.get(this.star1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.2,726.5,2002.5,3133.1);
// library properties:
lib.properties = {
	id: '909A3DC7DC05B64E9C3F4003D3406CCA',
	width: 750,
	height: 1453,
	fps: 24,
	color: "#071126",
	opacity: 1.00,
	manifest: [
		{src:"images/loading_atlas_.png?1555649377167", id:"loading_atlas_"},
		{src:"images/loading_atlas_2.png?1555649377167", id:"loading_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['909A3DC7DC05B64E9C3F4003D3406CCA'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;