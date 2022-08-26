/**
 * 
 * @authors Yhxang (yhxang@163.com)
 * @date    2015-02-10 20:09:29
 * @version 1.0.0
 */
$(function(){
	var stageW=$(window).width();
	var stageH=$(window).height();
	var isPageend=true;
	var mc=new Hammer(document.getElementById("wrap"),{
		recognizers: [
		[Hammer.Pan]
		]
	})
	var loadingImages=[];
	var resourceDir="img/";
	var usernum=0;
	for(var i=1;i<=87;i++){
		loadingImages.push("a"+(i<10?"0"+i:i)+".png");
	}
	loadResources(loadingImages,function (n, i, img) {
		$("#loading p").html("loading&nbsp;" + Math.round(i * 100 / n) + "%");
		if (n != i) return;
		$("#loading").remove();
		$("#wrap").show();
		playP1();

		$.post("usersearch.php",{},function(data){
			var _data=$.parseJSON(data);
			if(_data.result=="success"){
				usernum=parseInt(_data.usernum);
			}else if(_data.result=="fail"){
				alert("search error");
			}
		})
	})
	$(".wrap,.section").height(stageH).width(stageW);

	var audio=document.getElementById("bgmusic");
	$("html").one("touchstart",function(){
		audio.play();
	})
	$("body").one("touchstart",function(){
		audio.play();
	})
	audio.addEventListener("ended",function(e){
		audio.play();
	},false);

	var isMuted=false;
	$("#sndctrl").tap(function(){
		if(isMuted){
			audio.play();
			$(this).removeClass("muted");
		}else{
			audio.pause();
			$(this).addClass("muted");
		}
		isMuted=!isMuted;
	})

	var UA;
	checkPlatform();

	function playP1(){
		setTimeout(function(){
			$(".p1_tt").addClass("animIn");

			mc.on("pan",function(ev){
				outP1();
				mc.off("pan");

				setTimeout(function(){
					playP2();
				},1000);
			})
		},50);
	}
	function outP1(){
		$(".p1_tt").removeClass("animIn").addClass("animOut");
		$(".p1_bg_a,.p1_bg_b").addClass("animOut");
		$(".p1_btm").addClass("animOut");
	}

	function playP2(){
		$("body").addClass("act1");
		$(".p2_t1").addClass("animIn");
		setTimeout(function(){
			$(".daytop").addClass("animIn");
			setTimeout(function(){
				$("#page-flip").addClass("animIn");
				$(".act1_role").addClass("animIn");
				setTimeout(function(){
					$(".act1_bg_r1,.act1_bg_m1,.act1_bg_d1").addClass("animIn");
					setTimeout(function(){
						$(".act1_bg_r2,.act1_bg_m2,.act1_bg_d2").addClass("animIn");
						setTimeout(function(){
							$(".act1_bg_r3,.act1_bg_m3,.act1_bg_d3").addClass("animIn");
							setTimeout(function(){
								$(".act1_bg_r4,.act1_bg_m4,.act1_bg_d4").addClass("animIn");

								mc.on("pan",function(ev){
									mc.off("pan");
									outP2();
									playP3();
								});

							},450);
						},500);
					},550);
				},800);
			},800);
		},200);
	}
	
	function outP2(){
		$(".p2_t1").addClass("animOut_2");
		flipPage();
	}
	
	function playP3(){
		$(".act2_layer2,.act2_layer1").addClass("animIn");
		$(".p3_t1").addClass("animIn");

		setTimeout(function(){
			addPanEvent(function(){
				flipNextPage(2);
				$(".p3_t1").addClass("animOut_2");
				playP4();
			})
		},150);
	}

	function playP4(){
		$("body").addClass("act3");
		$(".p2_dt_bg").addClass("act3");
		$(".p2_d_num").addClass("act3");

		$(".p4_t1").addClass("animIn");
		$(".act3_layer2").addClass("animIn");
		$(".daytop").addClass("num_dou day3");

		setTimeout(function(){
			addPanEvent(function(){
				flipNextPage(3);
				$(".p4_t1").addClass("animOut_2");
				setTimeout(function(){
					playP5();
				},100)
			})
		},550)
	}

	function playP5(){
		$(".act4_layer2,.act4_layer3").addClass("animIn");
		$(".p5_t1").addClass("animIn");

		setTimeout(function(){
			addPanEvent(function(){
				flipNextPage(4);
				$(".p5_t1").addClass("animOut_2");
				playP6();
				$(".daytop").removeClass("num_dou");
			})
		},150)
	}
	var PO_1;
	function playP6(){
		$("body").addClass("act5")
		$(".p2_dt_bg").addClass("act5");
		$(".p2_d_num").addClass("act5");
		$(".act5_layers").addClass("animIn");
		$(".daytop").addClass("day2");
		$(".p6_t1").addClass("animIn");	
		PO_1=playFrame($(".mouth5"),13,0,50,"on");

		setTimeout(function(){
			addPanEvent(function(){
				flipNextPage(5);
				$(".p6_t1").addClass("animOut_2");
				playP7();
			})
		},150)
	}

	function playP7(){
		$(".act6_layer1").addClass("animIn");
		$(".p7_t1").addClass("animIn");	
		clearTimeout(PO_1);
		setTimeout(function(){
			$(".act6_layer2").addClass("animIn");

			addPanEvent(function(){
				flipNextPage(6);
				$(".p7_t1").addClass("animOut_2");	
				playP8();
			})
		},2300);	
	}

	function playP8(){
		$("body").addClass("act7");
		$(".p2_dt_bg").addClass("act7");
		$(".p2_d_num").addClass("act7");
		$(".daytop").addClass("day1");
		$(".daytop").addClass("num_dou")
		$(".act7_layer1").addClass("animIn");
		$(".p8_t1").addClass("animIn");	
		setTimeout(function(){
			addPanEvent(function(){
				flipNextPage(7);
				playP9();
				$(".p8_t1").addClass("animOut_2");
			})
		},10);
		
	}

	function playP9(){
		$(".p9_t1").addClass("animIn");	
		$(".p9_t2").addClass("animIn");	
		$(".daytop").removeClass("animIn");
		setTimeout(function(){
			$(".act8_layer1,.act8_layer2").addClass("animIn");
		},150)
		setTimeout(function(){
			addPanEvent(function(){
				flipNextPage(8);
				playP10();
				$(".p9_t1").addClass("animOut_2");	
				$(".p9_t2").addClass("animOut_2");	
			})
		},10)
		
	}

	function playP10(){
		$(".p10_t1").addClass("animIn");
		$("body").addClass("act9");
		setTimeout(function(){
			addPanEvent(function(){
				flipNextPage(9);
				playP11();
				$(".p10_t1").addClass("animOut_2");
			})
		},10)
		
	}

	function playP11(){
		$(".p11_t1").addClass("animIn");
		$("body").addClass("act10");
		setTimeout(function(){
			addPanEvent(function(){
				flipNextPage(10);
				playP12();
				$(".p11_t1").addClass("animOut_2");
			})
		})
	}

	function playP12(){
		$("body").addClass("act11");
		setTimeout(function(){
			$(".camera11").addClass("animIn");
			setTimeout(function(){
				$(".p12_t1").addClass("animIn");
				setTimeout(function(){
					$(".p12_t2").addClass("animIn");

					addPanEvent(function(){
						playP13();
						$(".p12_t1").addClass("animOut_2");
						$(".p12_t2").addClass("animOut_2");
						$(".camera11").addClass("animOut");
					})
				},200)
			},300);
		},500);
	}

	function playP13(){
		$(".arrow").hide();
		$("body").addClass("act12");

		$(".tongji span").text(usernum);				

		setTimeout(function(){
			$(".swiper-container").show();
			$(".swiper-container,.swiper-slide").height(stageH);
			var mySwiper;
			initPage1();
			function initSwiper(){
				mySwiper=new Swiper(".swiper-container",{
					mode:'vertical',
					onFirstInit:function(){
						initPage1();
					},
					onSlideChangeEnd:function(e){
						$(".swiper-container .animIn").removeClass("animIn");
						switch(mySwiper.activeIndex){
							case 0:
							initPage1()
							break;
							case 1:
							initPage2();
							break;
							default:
							break;
						}
					}
				})
			}
			var isFingerTouched=false;
			function initPage1(){
				$(".dlarea1").css({
					"background":"url(img/a77.png)"
				}).addClass("animIn");

				$(".finger1").one("touchstart",function(){
					$(this).addClass("big");
					$(".finger1").removeClass("doudong");
				});
				$(".finger1").one("touchend",function(){
					$(this).removeClass("big");
					$(".touchcolor1").addClass("animIn");
					if(!isFingerTouched){
						++usernum;
						$(".tongji span").text(usernum);
						$.post("usersubmit.php",{},function(data){
							var _data=$.parseJSON(data);
							if(_data.result=="success"){

							}else if("fail"==_data.result){
								alert("submit fail");
							}
						})
						isFingerTouched=true;
					}
					
					setTimeout(function(){
						if(!mySwiper){
							initSwiper();
						}
						mySwiper.swipeTo(1, 550);
					},810);
				});

				$(".logo1,.dlarea1,.finger1,.redbgtxt1").addClass("animIn");
				setTimeout(function(){
					$(".finger1").addClass("doudong");
				},20);
				
			}
			function initPage2(){
				$(".doudong").removeClass("doudong");
				$(".redarea2,.logo2").addClass("animIn");
				$(".redarea2").css({
					'background-image':'url(img/a80.png)'
				});
				// $(".invent").tap(function(){
				// 	$(".shareMask").show();
				// })
				// $(".shareMask").tap(function(){
				// 	$(".shareMask").hide();
				// })
			}
		},500)
	}
	//var isFilpNext=false;
	function flipPage(func){
		isPageend=false;
		//isFilpNext
		if(UA=="iOS"){
			$("#page-flip").addClass("flip");
			setTimeout(function(){
				isPageend=true;
				if(func){
					func();
				}
			},1000);
			//800是翻页动画完成的安全时间
		}else if(UA=="Android"){
			console.log(11111)
			$("#page-flip").addClass("flipFix");
			setTimeout(function(){
				isPageend=true;
			},500)

			
		}
	}

	var NowPage=0;
	function flipNextPage(n,func){
		isPageend=false;
		isFilpNext=true;

		resetAnim();

		var p1src=$("#page-flip").find("#p1>div").find(".boxbg").attr("src");
		var p1cont=$("#page-flip").find("#p1>div").html();
		var p2cont=$("#page-flip").find("#p2>div").html();
		var p3cont=$("#page-flip").find("#p3>div").html();

		$("#page-flip").addClass("reset")
		if(UA=="iOS"){
			$("#page-flip").removeClass("flip");
		}else if(UA=="Android"){
			$("#page-flip").removeClass("flipFix");
		}

		$("#page-flip").find("#p1>div").empty().html($("#dom"+(n+1)).html());
		$("#page-flip").find("#p2>div").empty().html(p1cont);
		$("#page-flip").find("#p3>div").empty().html("<img class='boxbg' src='"+p1src+"'>");
		setTimeout(function(){
			$("#page-flip").removeClass("reset");
			setTimeout(function(){
				flipPage(func);
			},50)
		},5)
	}

	function filpPrevPage(n){
		$("#page-flip").removeClass("flip");
		resetAnim();
		setTimeout(function(){
			//$("")
		},800)
	}
	// setInterval(function(){
	// 	console.log(isPageend)
	// },20)
	function resetAnim(){
		$("#doms .animIn").removeClass("animIn");
	}
	function addPanEvent(PanDownEvent,PanUpEvent){
		mc.on("pan",function(ev){
			if(!isPageend)return;

			PanDownEvent(ev);

			mc.off("pan")
		})
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
	
	console.log("UA:   "+UA)
	

	function checkPlatform(){  
    if(/android/i.test(navigator.userAgent)){  
      console.log("This is Android'browser.");//这是Android平台下浏览器  
    	UA="Android";
    	//UA="iOS";
    }  
    if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){  
      console.log("This is iOS'browser.");//这是iOS平台下浏览器  
      UA="iOS";
    }  
    if(/Linux/i.test(navigator.userAgent)){  
      console.log("This is Linux'browser.");//这是Linux平台下浏览器  
    }  
    if(/Linux/i.test(navigator.platform)){  
      console.log("This is Linux operating system.");//这是Linux操作系统平台  
    }  
    if(/MicroMessenger/i.test(navigator.userAgent)){  
      console.log("This is MicroMessenger'browser.");//这是微信平台下浏览器  
    }  
	}  
})

