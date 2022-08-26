(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/f01.png", id:"f01"},
		{src:"images/f02.png", id:"f02"},
		{src:"images/f03.png", id:"f03"},
		{src:"images/f04.png", id:"f04"},
		{src:"images/f05.png", id:"f05"},
		{src:"images/f06.png", id:"f06"},
		{src:"images/f07.png", id:"f07"},
		{src:"images/f08.png", id:"f08"},
		{src:"images/f09.png", id:"f09"},
		{src:"images/f10.png", id:"f10"},
		{src:"images/f11.png", id:"f11"}
	]
};



// symbols:



(lib.f01 = function() {
	this.initialize(img.f01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,323);


(lib.f02 = function() {
	this.initialize(img.f02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,432,378);


(lib.f03 = function() {
	this.initialize(img.f03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,548,279);


(lib.f04 = function() {
	this.initialize(img.f04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,114);


(lib.f05 = function() {
	this.initialize(img.f05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,115);


(lib.f06 = function() {
	this.initialize(img.f06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,473);


(lib.f07 = function() {
	this.initialize(img.f07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,546,323);


(lib.f08 = function() {
	this.initialize(img.f08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,62);


(lib.f09 = function() {
	this.initialize(img.f09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,29);


(lib.f10 = function() {
	this.initialize(img.f10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,76);


(lib.f11 = function() {
	this.initialize(img.f11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,621,893);


(lib.元件32 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#162200","#407000","#172400"],[0,0.533,1],-96.3,0,96.4,0).s().p("AOUBcIABgGQAAhBkNgtQkNgtl7AAQl7AAkMAtQkNAtAABBIABAGQADAPAMAOQg2gfgHgjIgBgHQAAhEEagzQEbgxGNAAQGPAAEaAxQEaAzAABEIgBAHQgGAkg4AeQANgOADgPg");
	this.shape.setTransform(96.3,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AqoBkQiVgfhHgnQgMgOgDgPIgBgEQAAhBENgvQEMgtF7AAQF7AAENAtQENAvAABBIgBAEQgDAPgNAOQhGAniVAfQkaA9mPAAQmNAAkbg9g");
	this.shape_1.setTransform(96.3,21.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,192.7,37.4);


(lib.元件15 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.f10();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,196,76);


(lib.元件14 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(138,202,0,0)").s().p("AvIHkIAAvHIeRAAIAAPHg");
	this.shape.setTransform(97,48.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,193.9,97);


(lib.元件10 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.f08();
	this.instance.setTransform(-111.5,-31);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.5,-31,223,62);


(lib.元件9 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.f07();
	this.instance.setTransform(-273,-161.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-273,-161.5,546,323);


(lib.元件8 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.f04();
	this.instance.setTransform(-145.5,-57);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-145.5,-57,291,114);


(lib.元件7 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.f03();
	this.instance.setTransform(-274,-139.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-274,-139.5,548,279);


(lib.元件4 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.f05();
	this.instance.setTransform(-66,-57.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66,-57.5,132,115);


(lib.元件3 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.f06();
	this.instance.setTransform(-94,-465);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94,-465,249,473);


(lib.元件2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.f02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,432,378);


(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.f01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,323);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件15();
	this.instance.setTransform(98,38,1,1,0,0,0,98,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.09,scaleY:1.09},7).to({scaleX:1,scaleY:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196,76);


(lib.元件12 = function() {
	this.initialize();

	// btn
	this.btn = new lib.元件13();
	this.btn.setTransform(-123.1,287.3,1,1,0,0,0,98,38);

	// 图层 1
	this.instance = new lib.f11();
	this.instance.setTransform(-310.5,-446.5);

	this.addChild(this.instance,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-310.5,-446.5,621,893);


(lib.元件11 = function() {
	this.initialize();

	// 图层 3
	this.instance = new lib.元件14();
	this.instance.setTransform(-83.8,-42.4,1,1,0,0,0,97,48.5);
	this.instance.cache(-2,-2,198,101);

	// 图层 1
	this.instance_1 = new lib.f09();
	this.instance_1.setTransform(-127.8,-29);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8ACA00").s().p("Ag/AGIgphmIDTBgIjVBhg");
	this.shape.setTransform(-10.8,-12.6);

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-180.8,-90.9,193.9,97);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件3();
	this.instance.setTransform(-30.5,228.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:0.6},12).to({skewX:0},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.5,-236.5,249,473);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件4();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:1.07,x:10,y:-12},10).to({scaleX:1,scaleY:1,x:0,y:0},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-57.5,132,115);


(lib.guize = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{pout:11});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
		this.guizeye.btn.addEventListener("mousedown",md.bind(this));
		function md(e){
			this.gotoAndPlay('pout')
		}
	}
	this.frame_17 = function() {
		exportRoot.removeChild(exportRoot.guize)
		exportRoot.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(7).call(this.frame_17).wait(1));

	// 图层 1
	this.guizeye = new lib.元件12();
	this.guizeye.setTransform(321.3,-33.2,1,0.571);

	this.timeline.addTween(cjs.Tween.get(this.guizeye).to({scaleY:1,y:633.2},5,cjs.Ease.get(1)).to({y:558.2},5,cjs.Ease.get(1)).to({y:83.2},6).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.8,-288.3,621,510.1);


// stage content:



(lib.ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{p1out:58,introout:74});

	// timeline functions:
	this.frame_42 = function() {
		this.dianji="likecanyu";
		var _this=this;
		this.introbtn.mouseChildren=false;
		this.introbtn.addEventListener('mousedown',function(e){
			_this.dianji="huodongguize";
			this.gotoAndPlay('p1out')
			}.bind(this))
		this.p1btn.addEventListener("mousedown",function(e){
			_this.dianji="lijicanyu"
			this.gotoAndPlay('p1out')
		}.bind(this))
	}
	this.frame_57 = function() {
		this.stop()
	}
	this.frame_66 = function() {
		if(this.dianji=="huodongguize"){
			this.guize=new lib.guize()
			this.addChild(this.guize); 
		}else{
			App.initSwiper();
		}
	}
	this.frame_73 = function() {
		this.stop();
	}
	this.frame_80 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(15).call(this.frame_57).wait(9).call(this.frame_66).wait(7).call(this.frame_73).wait(7).call(this.frame_80).wait(1));


	// 图层 13
	this.introbtn = new lib.元件11();
	this.introbtn.setTransform(551.8,973,1,1,0,0,0,-64,-14.5);
	this.introbtn.alpha = 0;
	this.introbtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.introbtn).wait(42).to({_off:false},0).to({x:563.8,alpha:1},4).wait(12).to({x:713.8},3).to({_off:true},1).wait(19));

	// 图层 12
	this.p1btn = new lib.元件10();
	this.p1btn.setTransform(320,871.3,0.695,0.695);
	this.p1btn.alpha = 0;
	this.p1btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.p1btn).wait(42).to({_off:false},0).to({scaleX:1,scaleY:1,y:940.8,alpha:1},4,cjs.Ease.get(1)).to({y:935.3},4).wait(8).to({y:920.3},3).to({y:1135.3},4).to({_off:true},1).wait(15));

	// 图层 9
	this.instance_1 = new lib.元件8();
	this.instance_1.setTransform(295,446.4,0.605,0.605);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({_off:false},0).to({scaleX:1.15,scaleY:1.15,x:422.5,y:417.1},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:385.1,y:427.1},4).wait(14).to({x:663.6,y:365,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(15));

	// 图层 7
	this.instance_2 = new lib.元件7();
	this.instance_2.setTransform(50.6,357.5,0.277,0.277);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).to({scaleX:1.12,scaleY:1.12,x:354.7,y:244.4},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:316.7,y:272.4},4).wait(16).to({x:557.9,y:187.9,alpha:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(17));

	// 图层 8
	this.instance_3 = new lib.元件5();
	this.instance_3.setTransform(147.1,750.2,0.889,0.889);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({scaleX:2.37,scaleY:2.37,rotation:360,x:195.1,y:574.2,alpha:0.199},2).to({scaleX:1.17,scaleY:1.17,rotation:720,x:378.1,y:463.2,alpha:1},4).to({scaleX:1,scaleY:1,rotation:1080,x:574.1,y:586.2},3).to({rotation:1440,x:539.1,y:747.2},4).to({rotation:1800},8).to({rotation:2160},9,cjs.Ease.get(1)).wait(1).to({x:725.5,y:732.3,alpha:0},7).to({_off:true},1).wait(15));

	// 图层 10
	this.instance_4 = new lib.元件9();
	this.instance_4.setTransform(275,689.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36).to({_off:false},0).to({alpha:1},5).wait(17).to({alpha:0},3).to({_off:true},1).wait(19));

	// 图层 6
	this.instance_5 = new lib.元件3();
	this.instance_5.setTransform(-69,831.8,0.619,0.606,0,-32.3,0);
	this.instance_5.alpha = 0.102;
	this.instance_5._off = true;

	this.instance_6 = new lib.元件6();
	this.instance_6.setTransform(124.5,626.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({scaleX:1.03,scaleY:1.03,skewX:0,x:94,y:854.8,alpha:1},4,cjs.Ease.get(1)).to({scaleX:1.04,scaleY:1.04,skewX:3.1,x:112,y:846.8},2).to({scaleX:1,scaleY:1,skewX:0,x:94,y:854.8},3).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({_off:false},0).wait(24).to({x:-4.7,alpha:0},5).to({_off:true},1).wait(17));

	// 图层 5
	this.instance_7 = new lib.元件2();
	this.instance_7.setTransform(332.2,851.7,0.116,0.116,0,0,0,215.9,189.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).to({regX:216,regY:189,scaleX:1,scaleY:1,x:374.7,y:650.7},7).to({y:684.7},4).to({y:689.7},2).to({y:684.7},2).wait(30).to({alpha:0},7).to({_off:true},1).wait(15));

	// 图层 1
	this.instance_8 = new lib.元件32();
	this.instance_8.setTransform(332.3,822.8,0.175,0.175,0,0,0,96.5,18.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({regX:96.4,regY:18.8,scaleX:1.55,scaleY:1.55,y:823},5,cjs.Ease.get(-1)).to({scaleX:1.41,scaleY:1.41},6,cjs.Ease.get(1)).to({regX:96.5,regY:18.7,scaleX:0.27,scaleY:0.27,y:822.8},3,cjs.Ease.get(-1)).to({_off:true},1).wait(58));

	// 图层 3
	this.instance_9 = new lib.元件1("synched",0);
	this.instance_9.setTransform(320,1091.3,1,1,0,0,0,320,161.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:943.3,alpha:1},5,cjs.Ease.get(-1)).to({y:951.3},4,cjs.Ease.get(1)).wait(15).to({startPosition:0},0).to({y:956.3},2).to({y:951.3},2).wait(30).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,279.7,640,1541.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;