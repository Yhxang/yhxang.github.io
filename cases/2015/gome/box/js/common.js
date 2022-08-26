/**
 * 
 * @authors Yhxang (yhxang@163.com)
 * @date    2015-02-10 21:32:09
 * @version 1.0.0
 */
 $(function(){
	var sndhome=document.getElementById("sndhome"),
	sndbj=document.getElementById("sndbeijing"),
	snddb=document.getElementById("snddongbei"),
	sndgd=document.getElementById("sndguangdong"),
	sndsh=document.getElementById("sndshanghai"),
	sndsch=document.getElementById("sndsichuan"),
	sndend=document.getElementById("sndend");

	var stageW,stageH;
	var resourceDir="img/";
	var loadingImages=[];
	var isSwiperInited=false;
	var root=location.href.split("?")[0].replace(/\/[^\/]+\.(php|html)/im,'');
	var oldhash=location.hash;
	$(window).resize(function(){
		stageW=$(window).width();
		stageH=$(window).height();
		$('.swiper-container,.swiper-slide,.swiper-container section').height(stageH);
		var rateY,offsetY
		if(stageH<960){
			rateY=stageH/960;
			offsetY=(stageH-960)/2;
			$('.swiper-container,.swiper-slide,.swiper-container section').height(960);
			$("#wrap").css({
				"-webkit-transform":"scale3d(1,"+rateY+",1)",
				"transform":"scale3d(1,"+rateY+",1)",
				"-webkit-transform-origin":"left top",
				"transform-origin":"left top"
			})
		}else{
			$('.swiper-container,.swiper-slide,.swiper-container section').height(stageH);
			$("#wrap").css({
				"-webkit-transform":"none",
				"transform":"none"
			})
		}
	})
	$(window).triggerHandler("resize");
	
	var isMuted=false;

	for(var i=1;i<=84;i++){
		loadingImages.push("a"+(i<10?"0"+i:i)+".png");
	}
	loadResources(loadingImages,function (n, i, img) {
		$("#loading p").html("loading&nbsp;" + Math.round(i * 100 / n) + "%");
		if (n != i) return;
		$("#loading").remove();
		$("#wrap").show();
		if(oldhash==""){
			
		}else{

		}
		initP1();
	})
	var mySwiper;
	var isSlide=false;
	function initSwiper(){
		mySwiper=$('.swiper-container').swiper({
			mode:'vertical',
			onFirstInit:function(){
				//initP1();
			},
			onTouchStart:function(e){
				$("#shadow").addClass("rollsmall");
			}, 
			onTouchMove:function(){
				isSlide=true;
			},
			onTouchEnd:function(e){
				$("#shadow").removeClass("rollsmall");
				//console.log(mySwiper.activeIndex,mySwiper.previousIndex )
				var _isSlide=isSlide;
				isSlide=false;
				if(mySwiper.activeIndex==mySwiper.previousIndex) return;
				if(!_isSlide) return;
				//console.log(mySwiper.activeIndex,mySwiper.previousIndex)
				sndCtrl("pause");
				setTimeout(function(){
					switch(mySwiper.activeIndex){
						case 0:
						sndhome.play();
						break;
					 	case 1:
					 	snddb.play();
					 	break;
					 	case 2:
					 	sndsh.play();
					 	break;
					 	case 3:
					 	sndgd.play();
					 	break;
					 	case 4:
					 	sndsch.play();
					 	break;
					 	case 5:
					 	sndbj.play();
					 	break;
					 	case 6:
					 	sndend.play();
					 	break;
					 	default:
					 	break;
					}
				},350)
			},
			onSlideChangeStart:function(e){

			},
			onSlideChangeEnd:function(e){
				if(mySwiper.activeIndex==mySwiper.previousIndex) return;
				switch(mySwiper.activeIndex){
					case 0:
					initP1();
					break;
					case 1:
					initP2();
					break;
					case 2:
					initP3();
					break;
					case 3:
					initP4();
					break;
					case 4:
					initP5();
					break;
					case 5:
					initP6();
					break;
					case 6:
					initP7();
					break;
					case 7:
					initP8();
					break;
					default:
					break;
				}
			}
		})
	}
	var PO_1,PO_2,PO_3,PO_4,PO_5,PO_6,PO_7,PO_8,PO_9,PO_10,PO_11;

	var DelayTime=3500;
	function initP1(){
		
		$(".box1_1").addClass("on");
		$(".box1_2,.box1_3").removeClass("on");
		resetPage();
		location.hash="p1";
		
		PO_1=playFrame($(".eyes1"),6,0,0,"on",null);

		$("body").removeClass().addClass("color1");
		$("#shadow").removeClass().addClass("color1");

		$(".box1,.mouth1,.tiptxt1").addClass("animIn");
		setTimeout(function(){
			$(".dialogue1,.tip1,.arrow1").addClass("animIn");
		},800)

		var sndhomeplaytimes=0;

		if(sndhomeplaytimes!=1){
			sndhome.play();//fix：iOS7+可以自动播放，android不可以自动播放导致ios播放两次的问题
		}
		sndhome.addEventListener("ended",function(e){
			sndhomeplaytimes=1;
		},false);

		$(".box1").one("touchstart",function tssnd (e){
			if(sndhomeplaytimes!=1){
				sndhome.play();
			}
		})
		$(".box1").tap(function(){
			
			$(".nexttip").addClass("animIn_s")

			$(".box1").removeClass("animIn").addClass("rubberBand");
			$(".tiptxt1").addClass("animOut");
			$(".tip1").addClass("animOut");
			$(".arrow1").addClass("animOut");
			$(".dialogue1").removeClass("animIn");
			setTimeout(function(){
				playFrame($(".box1_1,.box1_2,.box1_3"),8,1,0,"on");
				setTimeout(function(){
					$(".firework1").addClass("animIn");
					
					setTimeout(function(){
						if(!isSwiperInited){
							initSwiper();
							isSwiperInited=true;
						}
						//mySwiper.swipeTo(1, 800);
						//$("#shadow").addClass("rollsmall color2");
					},650)
					
				},450)
			},350);
			$(".box1").off("tap");
		})
	}
	function initP2(){
		$("#shadow").removeClass("rollsmall");

		resetPage();
		location.hash="p2";

		PO_5=playFrame($(".mouth2"),7,0,80,"on",null);
		$("body").removeClass().addClass("color2");
		$("#shadow").removeClass().addClass("color2");
		snddb.play();
		$(".diaozhui2,.box2,.gold2,.glass2,.hand2").addClass("animIn");
		setTimeout(function(){
			$(".popo2 .popbody").addClass("animIn");
			setTimeout(function(){
				$(".popo2 p").addClass("animIn");
			},800)
		},DelayTime)
	}
	function initP3(){
		resetPage();
		location.hash="p3";

		PO_10=playFrame($(".mouth3"),9,0,80,"on",null);
		$("body").removeClass().addClass("color3");
		$("#shadow").removeClass().addClass("color3");
		sndsh.play();

		$(".box3,.leg3,.bag3,.hand3").addClass("animIn");
		PO_2=playFrame($(".eyes3_1,.eyes3_2"),9,0,0,"on");
		setTimeout(function(){
			$(".popo3 .popbody").addClass("animIn");
			setTimeout(function(){
				$(".popo3 p").addClass("animIn");
			},800)
		},DelayTime)
	}
	function initP4(){
		resetPage();
		location.hash="p4";

		PO_6=playFrame($(".eyes4"),9,0,1000,"on",null);
		PO_11=playFrame($(".mouth4"),9,0,200,"on",null);
		$("body").removeClass().addClass("color4");
		$("#shadow").removeClass().addClass("color4");

		$(".hand4,.tie4,.glass4,.fog4").addClass("animIn");
		sndgd.play();

		setTimeout(function(){
			$(".popo4 .popbody").addClass("animIn");
			setTimeout(function(){
				$(".popo4 p").addClass("animIn");
			},800)
		},DelayTime)
	}
	function initP5(){
		resetPage();
		location.hash="p5";

		PO_7=playFrame($(".ear5"),10,0,600,"on",null);//熊猫耳朵动
		PO_8=playFrame($(".mouth5"),4,0,0,"on",null);
		$("body").removeClass().addClass("color5");
		$("#shadow").removeClass().addClass("color5");
		sndsch.play();
		$(".eyes5,.bamboo5,.nose5,.hand5").addClass("animIn");

		setTimeout(function(){
			$(".popo5 .popbody").addClass("animIn");
			setTimeout(function(){
				$(".popo5 p").addClass("animIn");
			},800)
		},DelayTime)
	}
	function initP6(){
		resetPage();
		location.hash="p6";

		$("body").removeClass().addClass("color6");
		$("#shadow").removeClass().addClass("color6");
		sndbj.play();
		$(".mouth6,.box6,.music6,.bird6").addClass("animIn");

		setTimeout(function(){
			$(".popo6 .popbody").addClass("animIn");
			setTimeout(function(){
				$(".popo6 p").addClass("animIn");
			},800)
		},DelayTime)
	}
	function initP7(){
		resetPage();
		location.hash="p7";

		$("body").removeClass().addClass("color7");
		$("#shadow").removeClass().addClass("color7");
		sndend.play();
		$(".mouth7").addClass("animIn");
		$(".nexttip").addClass("animIn_s");
		playFrame($(".boxs7"),8,1,"on");
		PO_3=playFrame($(".eyes7"),9,0,0,"on");
		setTimeout(function(){
			$(".popo7 .popbody").addClass("animIn");
			setTimeout(function(){
				$(".popo7 p").eq(0).addClass("animIn");
				setTimeout(function(){
					$(".popo7 p").eq(1).addClass("animIn");
					setTimeout(function(){
						$(".popo7 p").eq(2).addClass("animIn");
						setTimeout(function(){
							$(".popo7 p").eq(3).addClass("animIn");
							setTimeout(function(){
								$(".popo7 p").eq(4).addClass("animIn");
							},1399)
						},1399)
					},1399)
				},1399)
			},800)
		},DelayTime)
	}
	function initP8(){
		resetPage();
		location.hash="p8";

		PO_9=playFrame($(".play7_1,.play7_2"),8,0,0,"on",null);
		$("body").removeClass().addClass("color8");
		$("#shadow").removeClass().addClass("color8");
		$("#shadow").addClass("small");
		$(".link8").addClass("animIn");
		$(".nexttip").removeClass("animIn_s");
		PO_3=playFrame($(".eyes8"),9,0,0,"on");	

		$(".video7").one("touchstart",function(){
			var vd=$(this).find("video")
			vd.show();
			vd[0].play();
			$(this).find("img").hide();
		})
	}

	function resetPage(){
		$(".animIn,.animOut").removeClass("animIn animOut");
		stopFrame(PO_1);
		stopFrame(PO_2);
		stopFrame(PO_3);
		stopFrame(PO_4);
		stopFrame(PO_5);
		stopFrame(PO_6);
		stopFrame(PO_7);
		stopFrame(PO_8);
		stopFrame(PO_9);
		stopFrame(PO_10);
		stopFrame(PO_11);
	}
	$(".sndbtn").tap(function(){
		if(isMuted){
			sndCtrl("noMute")
		}else{
			sndCtrl("mute")
		}
		isMuted=!isMuted;
	})

	function sndCtrl(str){
		var snds=[sndhome,sndbj,sndsh,sndsch,sndgd,snddb,sndend];
		if(str=="pause"){
			for(var i=0;i<snds.length;i++){
				snds[i].pause();
			}
		}else if(str=="mute"){
			for(var i=0;i<snds.length;i++){
				snds[i].muted=true;
				snds[i].volume=0;
			}
		}else if(str="noMute"){
			for(var i=0;i<snds.length;i++){
				snds[i].muted=false;
				snds[i].volume=1;
			}
		}	
	}

	function playFrame(FrameQuery,FrameRate,LoopTime,Delay,DisplayClass,Func){
		var timeinterval=Math.round(1000/FrameRate);
		var PlayOBJ=new Object();
		var cur=0;
		var curTime=0;
		var totalFrame=FrameQuery.length-1;
		var orginInterval=timeinterval;
		loopinterval();

		function loopinterval(){
			PlayOBJ.intervalId=setTimeout(function(){
				if(DisplayClass){
					FrameQuery.removeClass(DisplayClass).eq(cur).addClass(DisplayClass);
				}else{
					FrameQuery.hide().eq(cur).show();
				}
				timeinterval=orginInterval;
				++cur;
				if(cur>totalFrame){
					cur=0;
					++curTime;
					if(Delay){
						timeinterval=orginInterval+Delay;
					}
				}
				if(LoopTime>0&&curTime>=LoopTime){
					if(Func){
						Func()
					}
					return;
				}
				loopinterval();
			},timeinterval);
		}
		return PlayOBJ;
	}
	function stopFrame(PlayOBJ){
		if(!PlayOBJ)return;
		clearTimeout(PlayOBJ.intervalId);
	}

	function loadResources(urls, progress) {
    var loadedCount = 0;
    var loaded = function () {
        ++loadedCount;
        if (progress) progress(urls.length, loadedCount, this);
    };
    for (var i = 0; i < urls.length; ++i) {
        if (!urls[i]) {
            loaded();
            return;
        }
        var img = new Image();
        img.onload = loaded;
        img.onabort = loaded;
        img.onerror = loaded;
        img.src = resourceDir + urls[i];//+ "?ver=" + j_version;
    }
	}
})

