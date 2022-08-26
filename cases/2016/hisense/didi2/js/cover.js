(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"img/c01.png", id:"c01"},
		{src:"img/c02.png", id:"c02"},
		{src:"img/c03.png", id:"c03"},
		{src:"img/c04.jpg", id:"c04"}
	]
};



// symbols:



(lib.c01 = function() {
	this.initialize(img.c01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1049,538);


(lib.c02 = function() {
	this.initialize(img.c02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,826,568);


(lib.c03 = function() {
	this.initialize(img.c03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,612,1081);


(lib.c04 = function() {
	this.initialize(img.c04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.symbol46 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("A68JuIAAzbMA15AAAIAATbg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-172.5,-62.2,345,124.6);


(lib.symbol45 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c03, null, new cjs.Matrix2D(1,0,0,1,-61.1,-430.1)).s().p("AnxhrIIXlMIHMD7IAAGXIp+Ddg");
	this.shape.setTransform(49.9,44);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99.8,88);


(lib.symbol43 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c03, null, new cjs.Matrix2D(1,0,0,1,-468.1,-263.1)).s().p("AxVPeIAA+7MAirAAAIAAe7g");
	this.shape.setTransform(111,99);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,222.1,198.1);


(lib.symbol42 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF7403").ss(3,1,1).p("AB6kwIlDE/ICyA5IieDpIF/ksIi+g2g");
	this.shape.setTransform(20.3,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD300").s().p("AgXBIIiyg5IFDk/IhuD/IC+A1Il/Etg");
	this.shape_1.setTransform(20.3,30.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,43.6,64);


(lib.symbol41 = function() {
	this.initialize();

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3B272B","#3A2527","rgba(48,35,42,0)"],[0,0.365,1],-116.5,-22,56.6,24.4).s().p("Ak0ByIuhkeQKriUGeirIViGhImzI2g");
	this.shape.setTransform(1239.1,275.9);

	// 图层 4
	this.instance = new lib.c04();
	this.instance.setTransform(670,0);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1980,1136);


(lib.symbol40 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2F04").s().p("AliBMIKxi3IAUCZIrAA+g");
	this.shape.setTransform(35.5,10.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71.1,21.8);


(lib.symbol37 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c01, null, new cjs.Matrix2D(1,0,0,1,-989.6,-282)).s().p("ApRFxIAjnjICvAPIDWtRIL7E/Io5Yqg");
	this.shape.setTransform(59.4,95);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,118.9,190);


(lib.symbol36 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c01, null, new cjs.Matrix2D(1,0,0,1,-937.1,-202)).s().p("AjRKdIkT1XIPJAaIlaVbg");
	this.shape.setTransform(48.6,70);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,97.1,140);


(lib.symbol35 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c01, null, new cjs.Matrix2D(1,0,0,1,-545,-137.5)).s().p("Atb1eIe7AAIrRc4I3uOFg");
	this.shape.setTransform(112.1,137.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,224.1,275);


(lib.symbol34 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c01, null, new cjs.Matrix2D(1,0,0,1,-723.6,-128.2)).s().p("ApmAbIGkvxIE0AfICgQOIFVKKIvqD2g");
	this.shape.setTransform(61.6,98.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123.1,196.7);


(lib.symbol33 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c01, null, new cjs.Matrix2D(1,0,0,1,-497.5,-342)).s().p("AtqgdIDmp/IXuuFMgBkAqmI3jGdg");
	this.shape.setTransform(87.5,157);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,175,314.1);


(lib.symbol32 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c01, null, new cjs.Matrix2D(1,0,0,1,-754.7,-356.3)).s().p("A78MqIAz1aIJGl+ICgjcICwhyIB5gUIPqj1ISUgPICKKsICvAQIgjHlIpOYqI1ZFeg");
	this.shape.setTransform(178.9,155.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,357.9,311.6);


(lib.symbol31 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c01, null, new cjs.Matrix2D(1,0,0,1,-287.5,-269)).s().p("Egs6AqCMAAAhUDMBHtAAAMgEFAq9IjlJ/ICMZAIXmmcIgdMjg");
	this.shape.setTransform(287.5,269);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,575.1,538);


(lib.symbol23 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c03, null, new cjs.Matrix2D(1,0,0,1,-214,-398.1)).s().p("AwFEYIAAovIfjAAIAoG2IhTB5g");
	this.shape.setTransform(103,28);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,206.1,56.1);


(lib.symbol22 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c03, null, new cjs.Matrix2D(1,0,0,1,-209.8,-439.1)).s().p("AvcCBIAAkBIe5AAIiyEBg");
	this.shape.setTransform(98.9,13);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,197.8,26);


(lib.symbol19 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c03, null, new cjs.Matrix2D(1,0,0,1,-305.3,-786.6)).s().p("AV6Y8IgHjmIiCgpIAej+Mg3sAAEIk2gOIjuAUIAA4KIHZARIAZhAIFGgGIAFDEICHgGIAeibIKUAAIAKBBIHEgKIAmjXIGBAGIHbu+IAAF0IShAAIWcP8IAAcHg");
	this.shape.setTransform(281.8,159.7);

	// 图层 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#021C01").s().p("AXVDdIgugoIAPiAIpOgGIglgxIgfAwMgp2gAeIiYhTIgoBsIkegUIgbhnIAlhBMAwbgBQIZXBkIgtERIhzBNIkrg6IhTA/g");
	this.shape_1.setTransform(263.6,274.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,563.7,319.3);


(lib.symbol18 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c03, null, new cjs.Matrix2D(1,0,0,1,-174.2,-661.2)).s().p("AqrLfIlFAFIgZBBInZgRIAA61MAvFAAAIAAJMIndO8ImBgFIgmDXInEAKIgKhBIqSAAIgeCbIiHAFg");
	this.shape.setTransform(150.8,93);

	// 图层 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A2C0C").s().p("Aw0AfMAhpgE0Ih6ISI9PAZg");
	this.shape_1.setTransform(149.8,158.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,301.6,186.3);


(lib.symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		App.chooseSlogan(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c03, null, new cjs.Matrix2D(1,0,0,1,-230.6,-919.5)).s().p("AoyELIhzAAI1yAAIAAoBIDugUIE3APMA4JgAFIAAILg");
	this.shape.setTransform(207.2,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.c03, null, new cjs.Matrix2D(1,0,0,1,-39.6,-919.5)).s().p("ABvELIkPAAIAAoBIDsgUIBVAEIAAAKIgFAAIAAIHg");
	this.shape_1.setTransform(65.2,26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.c03, null, new cjs.Matrix2D(1,0,0,1,-306.3,-920)).s().p("A0dEGIgFAAIAAoHIAFAAMApAgAEIAAILg");
	this.shape_2.setTransform(212.4,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,414.4,53.6);


(lib.symbol15 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c03, null, new cjs.Matrix2D(1,0,0,1,-296.5,-1004.3)).s().p("A3+JEIAAyHMAv9AAAIAASHg");
	this.shape.setTransform(153.6,58);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,307.2,116.1);


(lib.symbol13 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c03, null, new cjs.Matrix2D(1,0,0,1,-531.3,-616.1)).s().p("AkoHgIAAu/IJRAAIAAO/g");
	this.shape.setTransform(29.8,48);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59.5,96);


(lib.symbol12 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c03, null, new cjs.Matrix2D(1,0,0,1,-472.6,-616.1)).s().p("AkhHgIAAu/IJDAAIAAO/g");
	this.shape.setTransform(29,48);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.1,96);


(lib.symbol11 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c03, null, new cjs.Matrix2D(1,0,0,1,-414.5,-616.1)).s().p("AkhHgIAAu/IJCAAIAAO/g");
	this.shape.setTransform(29,48);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58,96);


(lib.symbol10 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c03, null, new cjs.Matrix2D(1,0,0,1,-355.3,-616.1)).s().p("AktHgIAAu/IJbAAIAAO/g");
	this.shape.setTransform(30.3,48);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.6,96);


(lib.symbol9 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c03, null, new cjs.Matrix2D(1,0,0,1,-232,-500.6)).s().p("A85KjIAAurIKAjcIcHAAICBi+IRrAAIAAVFg");
	this.shape.setTransform(185.1,67.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,370.1,135.1);


(lib.symbol7 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c03, null, new cjs.Matrix2D(1,0,0,1,-61.1,-430.1)).s().p("AnxhrIIXlMIHMD7IAAGXIp+Ddg");
	this.shape.setTransform(49.9,44);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99.8,88);


(lib.symbol4 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c03, null, new cjs.Matrix2D(1,0,0,1,-468.1,-263.1)).s().p("AxVPeIAA+7MAirAAAIAAe7g");
	this.shape.setTransform(111,99);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,222.1,198.1);


(lib.symbol3 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.c03, null, new cjs.Matrix2D(1,0,0,1,-247,-263.1)).s().p("AxLQuMAAAghbMAiXAAAMAAAAgLIjxBQg");
	this.shape.setTransform(110.1,107);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,220.1,214.1);


(lib.symbol1 = function() {
	this.initialize();

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00451D").s().p("ACZOoQ2PmhkVlqQh9ihDhjQQL5q+KIgOQNkh/K0GXQEDFWqxMeQmWHTlxAAQhTAAhRgXg");
	this.shape.setTransform(181.4,151.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,399.1,281.1);


(lib.symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 7
	this.instance = new lib.symbol40("synched",0);
	this.instance.setTransform(678.3,354.1,1.084,1.161,0,0,0,3.3,18.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({startPosition:0},0).to({rotation:-8.5,x:678.2},4).to({rotation:0,x:678.3},5).wait(11));

	// 图层 6
	this.instance_1 = new lib.symbol40("synched",0);
	this.instance_1.setTransform(655,349.7,0.771,1,0,45,-135,1.2,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({startPosition:0},0).to({regY:19.6,skewX:53.3,skewY:-126.7,x:654.9,y:349.8},4).to({regY:19.5,skewX:45,skewY:-135,x:655,y:349.7},5).wait(11));

	// 右手
	this.instance_2 = new lib.symbol37();
	this.instance_2.setTransform(806.5,331.1,1,1,0,0,0,25.4,116);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:116.1,rotation:26.7},5).to({regY:116,rotation:0},6,cjs.Ease.get(1)).wait(19));

	// 图层 2
	this.instance_3 = new lib.symbol31();
	this.instance_3.setTransform(793.6,263,1,1,0,0,0,287.5,269);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30));

	// 图层 8
	this.instance_4 = new lib.symbol35();
	this.instance_4.setTransform(725.7,228.9,1,1,0,0,0,29.6,231.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30));

	// 图层 9
	this.instance_5 = new lib.symbol33();
	this.instance_5.setTransform(725.7,228.9,1,1,0,0,0,66.5,253);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30));

	// 图层 3
	this.instance_6 = new lib.symbol34();
	this.instance_6.setTransform(717.8,227.6,1,1,0,0,0,61.6,196.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30));

	// 图层 1
	this.instance_7 = new lib.symbol32();
	this.instance_7.setTransform(754.7,356.3,1,1,0,0,0,178.9,155.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

	// 左手
	this.instance_8 = new lib.symbol36();
	this.instance_8.setTransform(647.7,293,1,1,0,0,0,43.1,92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:43,regY:92.4,rotation:-27,x:647.6},5).to({regX:43.1,regY:92.5,rotation:0,x:647.7},6,cjs.Ease.get(1)).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(506.1,-24.1,575.1,556.1);


(lib.symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 7
	this.instance = new lib.symbol40("synched",0);
	this.instance.setTransform(678.3,354.1,1.084,1.161,0,0,0,3.3,18.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-8.5,x:678.2},4).to({rotation:0,x:678.3},5).wait(7));

	// 图层 6
	this.instance_1 = new lib.symbol40("synched",0);
	this.instance_1.setTransform(655,349.7,0.771,1,0,45,-135,1.2,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:19.6,skewX:53.3,skewY:-126.7,x:654.9,y:349.8},4).to({regY:19.5,skewX:45,skewY:-135,x:655,y:349.7},5).wait(7));

	// 右手
	this.instance_2 = new lib.symbol37();
	this.instance_2.setTransform(806.5,331.1,1,1,26.7,0,0,25.4,116.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:116,rotation:0},9,cjs.Ease.get(1)).wait(7));

	// 图层 2
	this.instance_3 = new lib.symbol31();
	this.instance_3.setTransform(793.6,263,1,1,0,0,0,287.5,269);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({alpha:1},9).wait(1));

	// 图层 8
	this.instance_4 = new lib.symbol42("synched",0);
	this.instance_4.setTransform(744.5,209.5,1,1,0,0,0,20.3,30.5);

	this.instance_5 = new lib.symbol35();
	this.instance_5.setTransform(732.5,221.1,1.142,1.054,0,-1.8,0,29.5,231.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:1.71,skewX:-20.2,x:726.5,y:191},2).to({_off:true},2).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({regX:29.6,scaleX:1,scaleY:1,skewX:0,x:725.7,y:228.9},7).wait(5));

	// 图层 9
	this.instance_6 = new lib.symbol33();
	this.instance_6.setTransform(715.6,236.8,0.849,0.921,0,-16.7,-15,66.5,253.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({regY:253,scaleX:1,scaleY:1,skewX:0,skewY:0,x:725.7,y:228.9},2).wait(12));

	// 图层 3
	this.instance_7 = new lib.symbol34();
	this.instance_7.setTransform(717.7,227.6,0.756,0.764,0,-23.1,-15,61.6,196.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:717.8},2).wait(13));

	// 图层 1
	this.instance_8 = new lib.symbol32();
	this.instance_8.setTransform(754.7,356.3,1,1,0,0,0,178.9,155.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16));

	// 左手
	this.instance_9 = new lib.symbol36();
	this.instance_9.setTransform(647.6,293,1,1,-27,0,0,43,92.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:43.1,regY:92.5,rotation:0,x:647.7},9,cjs.Ease.get(1)).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(567.4,177.5,374.8,334.5);


(lib.symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.symbol15();
	this.instance.setTransform(159.1,67.3,1,1,0,0,0,159.1,67.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({regY:67.5,scaleX:1.09,scaleY:1.09,x:159.2,y:67.5},5,cjs.Ease.get(1)).to({regX:159,regY:67.3,scaleX:0.93,scaleY:0.93,x:159,y:67.3},2,cjs.Ease.get(-1)).to({regX:159.1,scaleX:1,scaleY:1,x:159.1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,307.2,116.1);


(lib.symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.instance = new lib.symbol10();
	this.instance.setTransform(70.3,48,1,1,0,0,0,30.3,48);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-720,x:30.3,alpha:1},5,cjs.Ease.get(1)).wait(15));

	// 图层 3
	this.instance_1 = new lib.symbol11();
	this.instance_1.setTransform(129.6,48,1,1,0,0,0,29,48);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({rotation:-720,x:89.6,alpha:1},6,cjs.Ease.get(1)).wait(11));

	// 图层 2
	this.instance_2 = new lib.symbol12();
	this.instance_2.setTransform(187.6,48,1,1,0,0,0,29,48);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({rotation:-720,x:147.6,alpha:1},7,cjs.Ease.get(1)).wait(7));

	// 图层 1
	this.instance_3 = new lib.symbol13();
	this.instance_3.setTransform(246.4,48,1,1,0,0,0,29.8,48);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({rotation:-720,x:206.4,alpha:1},8,cjs.Ease.get(1)).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40,0,60.6,96);


(lib.symbol14 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.symbol19();
	this.instance.setTransform(281.8,218.5,1,1,0,0,0,281.8,159.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,58.8,563.7,319.3);


(lib.symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.symbol45("synched",0);
	this.instance.setTransform(49.9,44,1,1,0,0,0,49.9,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:40},24).to({y:44},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.8,88);


(lib.symbol6 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.symbol23();
	this.instance.setTransform(103,28,1,1,0,0,0,103,28);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,206.1,56.1);


(lib.symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.symbol43("synched",0);
	this.instance.setTransform(111,99,1,1,0,0,0,111,99);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:90},20).to({y:99},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222.1,198.1);


(lib.symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// 图层 1
	this.btn = new lib.symbol24();
	this.btn.setTransform(152.6,-57.8,1.208,1.208,0,0,0,153.6,58);
	this.btn.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.btn).to({scaleX:0.91,scaleY:0.91,alpha:1},3).to({scaleX:1,scaleY:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-127.9,371.2,140.2);


(lib.symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.symbol39();
	this.instance.setTransform(18.4,293.1,1,1,0,0,0,524.5,269);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.96,y:304.5},5).to({scaleY:1,y:293.1},5).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,575.1,556.1);


(lib.symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 游戏规则
	this.instance = new lib.symbol6();
	this.instance.setTransform(165.6,68,1,1,0,0,0,103,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({x:173.6},9).to({x:165.6},8).wait(1));

	// HOWTOPLAY
	this.instance_1 = new lib.symbol22();
	this.instance_1.setTransform(163.5,98.1,1,1,0,0,0,98.9,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({x:171.5},9).to({x:163.5},8).wait(1));

	// 底
	this.instance_2 = new lib.symbol9();
	this.instance_2.setTransform(185.1,67.5,1,1,0,0,0,185.1,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({x:193.1},9).to({x:185.1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,370.1,135.1);


(lib.symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// 扑球大赛
	this.instance = new lib.symbol20("synched",0,false);
	this.instance.setTransform(419.7,48,1,1,0,0,0,118.1,48);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(36));

	// 利益点
	this.instance_1 = new lib.symbol17();
	this.instance_1.setTransform(211,338.3,1,0.14,0,0,0,211,26.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({scaleY:1.13,y:354.9},4,cjs.Ease.get(-1)).to({scaleY:1,y:351.4},3,cjs.Ease.get(1)).wait(22).to({regX:211.1,scaleX:1.08,scaleY:1.08,x:205.4,y:362},3,cjs.Ease.get(1)).to({regX:211,scaleX:0.92,scaleY:0.92,x:216.6,y:341},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:211,y:351.4},3,cjs.Ease.get(1)).wait(10));

	// 趣现场
	this.instance_2 = new lib.symbol14();
	this.instance_2.setTransform(281.8,218.5,1.368,1.368,0,0,0,281.8,218.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({scaleX:0.95,scaleY:0.95,alpha:1},3,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(29).to({regX:281.9,regY:218.4,scaleX:1.08,scaleY:1.08},3,cjs.Ease.get(1)).to({regX:281.8,regY:218.5,scaleX:0.92,scaleY:0.92},2,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},3,cjs.Ease.get(1)).wait(10));

	// 快
	this.instance_3 = new lib.symbol18();
	this.instance_3.setTransform(330.9,93,1,1.008,0,7.3,0,150.8,93);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.02,skewX:-12.1,x:124.8,alpha:1},4,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:150.8},8,cjs.Ease.get(1)).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(168.1,0,325.5,186.3);


(lib.symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// 车
	this.instance = new lib.symbol38("single",0);
	this.instance.setTransform(141.4,375.4,0.755,0.755,0,0,0,524.5,269);
	this.instance._off = true;

	this.instance_1 = new lib.symbol44();
	this.instance_1.setTransform(301.9,387.1,0.812,0.812,0,0,0,287.4,278.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},6).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:0.81,scaleY:0.81,x:83.5,y:399.2,mode:"synched",loop:false},4,cjs.Ease.get(1)).to({_off:true},6).wait(6));

	// 车
	this.instance_2 = new lib.symbol38("single",0);
	this.instance_2.setTransform(185.8,358.8,0.419,0.453,0,-24.4,155.6,524.5,269);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:524.4,scaleX:0.59,scaleY:0.64,skewX:0,skewY:180,x:461.8,y:378.3,alpha:1},8,cjs.Ease.get(-1)).to({_off:true},1).wait(16));

	// 图层 3
	this.instance_3 = new lib.symbol1();
	this.instance_3.setTransform(147.7,476.9,0.43,0.436,0,-15,165,199.7,140.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:199.5,scaleX:0.45,scaleY:0.46,skewX:-12.8,skewY:167.2,x:148,y:472.3,alpha:0.5},3,cjs.Ease.get(-1)).to({regX:199.6,scaleX:0.47,scaleY:0.48,skewX:-11.3,skewY:168.7,x:168.3,y:468.8,alpha:0.602},1).to({regY:140.6,scaleX:0.5,scaleY:0.51,skewX:-8.3,skewY:171.7,x:198.3,y:464.4,alpha:0.699},1).to({regX:199.5,scaleX:0.54,scaleY:0.54,skewX:-5.5,skewY:174.5,x:230.4,y:459.8,alpha:0.801},1).to({regX:199.4,scaleX:0.57,scaleY:0.58,skewX:-2.8,skewY:177.2,x:270.7,y:457.1,alpha:0.898},1).to({regX:199.6,regY:140.5,scaleX:0.6,scaleY:0.61,skewX:0,skewY:180,x:314.3,y:470.5,alpha:1},1).wait(1).to({regY:140.6,scaleX:0.77,scaleY:0.77,skewY:0,x:324,y:475.9},0).to({regY:140.5,scaleX:0.81,scaleY:0.81,x:280.1,y:504.3},4,cjs.Ease.get(1)).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.7,348.2,204.9,189.5);


// stage content:



(lib.cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.playbtn.addEventListener("mousedown",function (e){
			e.currentTarget.btn.stop();
			App.showLogin();	
		}.bind(this));
		
		this.rulebtn.addEventListener("mousedown",function (e){
			App.showRule();	
		}.bind(this));
	}
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(51).call(this.frame_79).wait(1));

	// rulebtn
	this.rulebtn = new lib.symbol46();
	this.rulebtn.setTransform(454.5,706.7);
	this.rulebtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rulebtn).wait(28).to({_off:false},0).wait(52));

	// butten
	this.playbtn = new lib.symbol48();
	this.playbtn.setTransform(161,1060.3);
	this.playbtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.playbtn).wait(28).to({_off:false},0).wait(52));

	// slogan
	this.slogan = new lib.symbol16();
	this.slogan.setTransform(338,757.3,1,1,0,0,0,292.8,189.1);

	this.timeline.addTween(cjs.Tween.get(this.slogan).wait(80));

	// 游戏规则
	this.instance = new lib.symbol21();
	this.instance.setTransform(254.2,700.5,1,1,0,0,0,185.1,67.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({x:453.2},5,cjs.Ease.get(-1)).to({x:446.2},4,cjs.Ease.get(1)).wait(52));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A300E").s().p("AkXGZIAAsyIIvAAIAAMyg");
	this.shape.setTransform(310,705.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(28).to({_off:false},0).wait(52));

	// ball1
	this.instance_1 = new lib.symbol7();
	this.instance_1.setTransform(-81.6,517.5,0.789,0.789,-15,0,0,49.9,44);
	this.instance_1._off = true;

	this.instance_2 = new lib.symbol8();
	this.instance_2.setTransform(112.2,426.1,1,1,0,0,0,49.9,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},26).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({regY:44.1,scaleX:0.86,scaleY:0.86,rotation:0,x:124.2,y:425.2},6,cjs.Ease.get(-1)).to({regY:44,scaleX:1,scaleY:1,x:112.2,y:426.1},3).to({_off:true},1).wait(44));

	// ball2
	this.instance_3 = new lib.symbol4();
	this.instance_3.setTransform(638.3,317.4,0.483,0.483,30,0,0,111,98.9);
	this.instance_3._off = true;

	this.instance_4 = new lib.symbol5();
	this.instance_4.setTransform(500.1,291.9,0.788,0.788,0,0,0,111,99);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},18).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},1).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({regX:111.1,regY:99,scaleX:0.88,scaleY:0.88,rotation:0,x:489.1,y:291.9},3,cjs.Ease.get(-1)).to({regX:111,scaleX:0.86,scaleY:0.86,x:491.8},1).to({scaleX:0.79,scaleY:0.79,x:500.1},3).to({_off:true},1).wait(54));

	// pong!!
	this.instance_5 = new lib.symbol3();
	this.instance_5.setTransform(449.2,276.9,0.958,0.958,0,0,0,110.1,107);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).wait(4).to({scaleX:0.79,scaleY:0.79,x:467.8,y:280.9},0).wait(55));

	// car
	this.instance_6 = new lib.symbol2();
	this.instance_6.setTransform(539.1,287.1,1,1,0,0,0,413,284);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(80));

	// bg
	this.instance_7 = new lib.symbol41("synched",0);
	this.instance_7.setTransform(320,568,1,1,0,0,0,990,568);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,568,693.1,1136);

})(lib0 = lib0||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib0, images, createjs, ss;