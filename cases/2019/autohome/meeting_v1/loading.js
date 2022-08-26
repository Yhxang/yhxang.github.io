(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"loading_atlas_", frames: [[505,638,150,41],[0,0,750,636],[0,638,503,32],[657,638,148,37],[657,677,17,17]]}
];


// symbols:



(lib.lbg = function() {
	this.initialize(img.lbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1453);


(lib.lcar = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lglow = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lglowline = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lltxt = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.lwheel = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(4);
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


(lib.wheelimg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.lwheel();
	this.instance.parent = this;
	this.instance.setTransform(-8.5,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wheelimg, new cjs.Rectangle(-8.5,-8.5,17,17), null);


(lib.loadtxt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// r (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ap9ETIAAolIT7AAIAAIlg");
	var mask_graphics_4 = new cjs.Graphics().p("AqlETIAAolIVLAAIAAIlg");
	var mask_graphics_8 = new cjs.Graphics().p("ArUETIAAolIWpAAIAAIlg");
	var mask_graphics_12 = new cjs.Graphics().p("AsVETIAAolIYrAAIAAIlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-13.8,y:2.2}).wait(4).to({graphics:mask_graphics_4,x:-9.8,y:2.2}).wait(4).to({graphics:mask_graphics_8,x:-5.1,y:2.2}).wait(4).to({graphics:mask_graphics_12,x:1.4,y:2.2}).wait(5));

	// 图层_1
	this.instance = new lib.lltxt();
	this.instance.parent = this;
	this.instance.setTransform(-74,-18.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-18.5,124,37);


(lib.glowline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.lglowline();
	this.instance.parent = this;
	this.instance.setTransform(-251.5,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glowline, new cjs.Rectangle(-251.5,-16,503,32), null);


(lib.lwheel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.wheelimg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-8.5,17,17);


(lib.lcar_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.lwheel_1();
	this.instance.parent = this;
	this.instance.setTransform(48.8,-5.5);

	this.instance_1 = new lib.lwheel_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-48.5,-5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层_1
	this.instance_2 = new lib.lcar();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-75,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.lcar_1, new cjs.Rectangle(-75,-41,150,44), null);


(lib.glowlineani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:14});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(Math.ceil(Math.random()*15));
	}
	this.frame_24 = function() {
		this.gotoAndPlay("loop")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// 图层_1
	this.instance = new lib.glowline();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.312,0.471);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({x:-30,alpha:1},2).to({x:-100},5,cjs.Ease.get(0.7)).to({x:-150,alpha:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.speed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glowlineani
	this.instance = new lib.glowlineani();
	this.instance.parent = this;
	this.instance.setTransform(92.5,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// glowlineani
	this.instance_1 = new lib.glowlineani();
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.5,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// glowlineani
	this.instance_2 = new lib.glowlineani();
	this.instance_2.parent = this;
	this.instance_2.setTransform(45.5,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// glowlineani
	this.instance_3 = new lib.glowlineani();
	this.instance_3.parent = this;
	this.instance_3.setTransform(78.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.speed, null, null);


// stage content:
(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// vv
	this.instance = new lib.loadtxt();
	this.instance.parent = this;
	this.instance.setTransform(375,809.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_6
	this.instance_1 = new lib.lcar_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(359,744);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层_2
	this.speed = new lib.speed();
	this.speed.name = "speed";
	this.speed.parent = this;
	this.speed.setTransform(368.5,693);

	this.timeline.addTween(cjs.Tween.get(this.speed).wait(1));

	// 图层_5
	this.instance_2 = new lib.glowline();
	this.instance_2.parent = this;
	this.instance_2.setTransform(372.5,749);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层_3
	this.instance_3 = new lib.lglow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,251);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 图层_1
	this.instance_4 = new lib.lbg();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,726.5,750,1453);
// library properties:
lib.properties = {
	id: '45707DE201D4814EBEAC6C0CA6C92692',
	width: 750,
	height: 1453,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/lbg.jpg?1562665108566", id:"lbg"},
		{src:"images/loading_atlas_.png?1562665108555", id:"loading_atlas_"}
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
an.compositions['45707DE201D4814EBEAC6C0CA6C92692'] = {
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