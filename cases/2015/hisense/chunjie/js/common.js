/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-02-13 16:30:17
 * @version $Id$
 */
$(function(){

	/*=============需要插入的值==================
	
	var oldnhIndex=2;//前人年画id
	var isSelf=0;// 是不是自己分享的链接，0不是(有跳转按钮)，1是(无跳转按钮)
	var oldavatar="url.jpg";//前人头像url
	var oldwxid="张三";//前人微信用户名
	var newavater="newurl.jpg";//现用户头像url
	var newwxid="李四";//现用户微信用户名

	===========================================*/
	var stageW,stageH;
	stageW=$(window).width();
	stageH=$(window).height();


	var luckIndex=0;//中奖id  0为默认未中奖
	var nhindex=0;//年画id 
	var resourceDir="img/";

	$("#wrap,body,section,.slider").height(stageH);
	var touchmc=new Hammer($("#wrap")[0],{
		recognizers:[
			[Hammer.Pan]
		]
	})
	var loadingImages=[];
	for(var i=1;i<=27;i++){
		loadingImages.push("a"+(i<10?"0"+i:i)+".png");
		if(i<=5){
			loadingImages.push("a"+(i<10?"0"+i:i)+".jpg");
		}
	}
	for(var i=1;i<=6;i++){
		loadingImages.push("/pic/m"+i+".png");
		loadingImages.push("/pic/p"+i+".jpg");
	}
	for(var i=1;i<=5;i++){

	}
	loadResources(loadingImages,function (n, i, img) {
		$("#loading").html("loading&nbsp;&nbsp;" + Math.round(i * 100 / n) + "%");
		if (n != i) return;
		$("#loading").remove();
		$("#wrap").show();
		initStart();

	})
	var nhtxtArr=['三“羊”开泰'，'“羊”眉吐气','“羊”年大吉','“羊”运当头','“羊”气十足','“羊”洋得意']
	var olduserid=getQueryString("userid");

	//console.log(olduserid)
	function initStart(){
		if(olduserid){
			$(".s3avator img").attr("src",oldavatar);
			$(".c-info span").text(nhtxtArr[nhindex-1]);
			$(".username").text(oldwxid);
			$(".c-pic img").attr("src","img/pic/m"+oldnhIndex+".png")
			$(".sct3").show();
			$(".sct1,.sct2").hide();


			if(isSelf){
				$(".btn-nhzf").hide();
			}else{
				$(".btn-nhzf").show();

				$(".btn-nhzf").tap(function(){
					$(".sct3").hide();
					$(".sct1,.sct2").show();
					enableHammer();
				})
			}
			
		}else{
			enableHammer();
		}
	}

	var tl=new TimelineMax({
		paused:true
	});
	tl.to(".sct1-2",.6,{alpha:1})
		.to(".sct1-3",.8,{alpha:1},"-=.2")
		.set(".white1",{css:{display:'block'}})
		.call(function(){
			$(".bg2").addClass("animIn")
		})
		.to(".sct1",.8,{scale:5,y:250,ease:Power1.easeIn})

		.to(".sct1",.5,{autoAlpha:0},"-=.5").add("p1")
		.set(".sct1",{display:"none"})
		.set(".sct2",{css:{display:"block"}})
		.from(".tvarea",1.05,{y:1500,ease:Power2.easeOut},"+=.2")
		.from(".telectrlarea",1.5,{y:1500,ease:Power2.easeOut},"-=.8")
		.from(".title2",1,{y:"-=250",ease:Bounce.easeOut})
		//.to(".title2-2",.5,{width:546,ease:Bounce.easeOut})
		.to(".title2-2",.8,{width:546,ease:Bounce.easeOut},"-=.6")
		.to(".title2-3-1,.title2-3-2",.2,{width:100},"-=.1")

		//.from(".telectrl",.5,{y:-50,alpha:0,scale:1.2})
		.from(".tip2",.2,{alpha:0, y:10})
		.from(".tiptxt2",.4,{alpha:0,y:15},"+=.2")

		.set(".rule2",{css:{display:"block"}})
		.to(".rule2",.4,{width:154},"-=.2")
		.call(telectrlinit).addPause()
		.to(".tiptxt2-holder",.2,{y:-29,ease:Power1.easeIn})
		.to(".giftup",.1,{x:5,y:5,rotation:5})
		.to(".giftup",.3,{x:60,y:-40,rotation:10,ease:Power1.easeOut},"+=.15")
		.to(".giftup",.7,{x:140,y:80,rotation:40,ease:Power1.easeInOut})
		.to(".giftup,.giftdown",.1,{alpha:0,y:"+=10"},"-=.1")
		.to(".picsmall",.5,{scale:1,ease:Power1.easeInOut},"-=.5")
		.to(".tiptxt2-holder",.2,{y:-58,ease:Power1.easeOut})
		.call(ctrlimg)
		.addPause().add("next2")

		.to(".title2",.8,{y:"-300",ease:Back.easeIn},"+=.2")
		
		.to(".telectrlarea",.5,{y:"+=700",ease:Power1.easeIn},"-=.5")
		.to(".rule2",.3,{x:300},"-=.3")
		.to(".tvarea",.6,{y:"+=180",ease:Power1.easeInOut},"-=.5")
		.from(".target",.7,{scale:0,ease:Power1.easeInOut},"-=.3")
		.set(".handtip2",{css:{display:"block"}})
		.to(".handtip2",.1,{alpha:1})
		.call(handfunc)
		.addPause()
		
		.to(".targetimg",.5,{y:"-=370",x:"-=12"})
		.set(".handtip2",{css:{display:"none"}})
		.to(".targetimg",.1,{scale:.9,ease:Power1.easeOut},"+=.08")
		.to(".targetimg",.5,{scale:1.6,ease:Power3.easeOut})
		.to(".tvarea",.7,{y:"+=800",ease:Power3.easeIn},"-=.3")
		.set(".tvarea,.rule2,.telectrlarea",{css:{display:"none"}})

		.to(".target",.05,{autoAlpha:0})
		.to(".targetimg",.8,{scale:1.21,y:"-=45",ease:Power2.easeInOut})
		.from(".bagtxt2",.4,{scale:0,ease:Power2.easeOut},"-=.2")
		.from(".redbag",1,{y:550,ease:Power3.easeOut},"-=.5")
		.call(bagfunc)
		.addPause()

		.to(".redbag",.8,{y:"+=500",ease:Power3.easeIn})
		.to(".bagtxt2",.5,{y:"+=100",autoAlpha:0},"-=.5")
		.to(".targetimg",.8,{scale:2.073,x:"+=10",y:"+=65",ease:Power2.easeInOut},"-=.5")
		//.set(".phonetxt2",{css:{display:"block"}})
		//.to(".phonetxt2",.3,{alpha:1},"-=.3")
		.from(".phonetxt2",.3,{scale:0},"-=.3")
		.set("#telform",{css:{display:"block"}})
		.from("#mobile",.5,{y:"+=80",alpha:0},"-=.3")
		.from("#smt",.5,{y:"+=80",alpha:0},"-=.2")
		.call(phonesmt)
		.addPause()

		//.set(".sct3",{css:{display:"block"}})
		.to(".sct3 .title2",.3,{y:0})
		.to(".sct2",.3,{alpha:0})
		.set(".sct2",{display:"none"});


	

	function enableHammer(){
		touchmc.on("panend",function(ev){
			tl.play()
			touchmc.off("panend");
		})
	}
	var click1=false;
	function telectrlinit(){
		if(click1)return;

		$(".rule2").tap(function(){
			TweenMax.to($(".slider").eq(0),1.2,{y:-stageH,ease:Power3.easeInOut})
			TweenMax.to($(".slider").eq(1),1.2,{y:-stageH,ease:Power3.easeInOut})
		})
		$(".closebtn").tap(function(){
			TweenMax.to($(".slider").eq(0),1.2,{y:0,ease:Power3.easeInOut})
			TweenMax.to($(".slider").eq(1),1.2,{y:0,ease:Power3.easeInOut})
		})

		$(".telectrl img").one("touchend",function(e){
			if(tl.paused()){
				nhindex=Math.ceil(Math.random()*6);

				//console.log(nhindex)
				$("img.picsmall").attr("src","img/pic/m"+nhindex+".png");
				$("img.picbig").attr("src","img/pic/p"+nhindex+".jpg");

				TweenMax.to(".telectrl",.1,{scale:.95,onComplete:function(){
					TweenMax.to(".telectrl",.1,{scale:1})
				}})
				tl.play();

				$(".rule2,.closebtn").off("tap");
				click1=true;
				$(".telectrl img").off("tap");
				
			}
		})	
	}
	var click2=false;
	function ctrlimg(){
		if(click2)return;
		$(".telectrl").on("tap",function(e){
			if(tl.paused()){
				$(".hb2").css({"background-image":"url(img/a05.jpg)"})
				$(".picbigarea").show().find(".picbig").width(stageW).height(stageH);
				$(".hb2").tap(function(){
					$(".picbigarea").hide();
					tl.play();
				})
				click2=true;
				$(".telectrl").off("tap");
			}
		})
	}
	var click3=false;
	function handfunc(){
		var touchmc2=new Hammer($(".picsmall")[0],{
			recognizers:[
				[Hammer.Pan]
			]
		})
		touchmc2.on("panup",function(ev){
			if(click3)return;
			$(".targetimg").css({
				left:$(".picsmall").offset().left,
				top:$(".picsmall").offset().top,
				display:"block"
			}).attr("src","img/pic/m"+nhindex+".png")
			$(".picsmall").hide();
			$(".bag").css({
				top:470-stageH
			})
			tl.play();
			click3=true;
		})
	}

	function bagfunc(){
		$(".bag").tap(function(){
			$(".fingertip").hide();

			$.post("hisense_luck2.php",{
				nhindex:nhindex
			},function(data){
				//alert("result__"+data)
				var _rst=data.result;
				alert(_rst)
				if(_rst=="success"){
					luckIndex=data.price;
					showresult();
				}else if(_rst=="fail"){
					alert(data.errmsg)
				}
			})

			function showresult(){
				$(".resultMask").show();
				if(luckIndex==0){
					$(".resultMask").css({
						"background-color":"rgba(0,0,0,.75)"
					})
					$(".resultlose").show();
					$(".resultlucky").hide();
				}else{
					$(".resultlose").hide();
					$(".resultlucky").show();
					TweenMax.from($(".resultlucky"),.4,{scale:0,ease:Back.easeOut})
					$(".resultlucky span").text("￥"+luckIndex+".00");

					$(".inviteBtn").tap(function(){
						TweenMax.to($(".resultlucky"),.2,{scale:0,onComplete:function(){
							$(".resultMask").hide();
							tl.play();
						}});
					})
				}
				
			}
			

			
			$(".bag").off("tap");
		})
	}
	var ThisUserID;
	function phonesmt(){
		$("#smt").tap(function(e){
			e.preventDefault();
			var telqualified=true;
			var telqualified=checkMobile();
			if(!telqualified){
				telqualified=true;
				return;
			}
			ThisUserID=uuid(16,16);
			// $.post(" hisense_submit.php",{
			// 	userid:ThisUserID,
			// 	phone: document.telform.phone.value,
			// },function(data){
			// 	switch(data.result){
			// 		case "success":
			// 		console.log("phone No. send success");
			// 		break;
			// 		case "fail":
			// 		console.log(data.errmsg);
			// 		break;
			// 		default:
			// 		console.log(data.result);
			// 		break;
			// 	}
			// })
			TweenMax.set(".sct3",{css:{display:"block"}})
			$("#smt").off("tap");
		})
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

	function checkMobile(){ 
    var sMobile = document.telform.phone.value;
    if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))){ 
        alert("手机号有误，请输入正确手机号码"); 
        //不是完整的11位手机号或者正确的手机号前七位
        document.telform.mobile.focus(); 
        return false; 
    } else{
        return true;
    }
	} 
	function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;
    if (len) {
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
      var r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random()*16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    return uuid.join('');
	}
	function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	};

})
