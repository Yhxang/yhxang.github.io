$(function(){
	var resourceDir="img/";
	var stageW=$(window).width();
	var stageH=$(window).height();
	var loadingImages=[];
	var rateh=stageH/832;
  var j_version=0;
  var selid=-1;
  var district=["北京","青岛","长沙","成都","长春","南京","公司楼下","街边小道","小区公园"];
	
  $("#wrap,.swiper-container,.swiper-container-h,.swiper-container2").height(stageH);
	for(var i=1;i<=2;i++){
		loadingImages.push("a"+(i<10?"0"+i:i)+".png");
	}
	loadingImages.push("a07.png");
	loadingImages.push("a01.jpg");
	loadResources(loadingImages,function (n, i, img) {
      $("#loading p").html("loading&nbsp;" + Math.round(i * 100 / n) + "%");
      if (n != i) return;
      $("#loading").remove();
      $("#wrap").show();
      init();
  })
	function init(){
		var mySwiper_h= new Swiper('.swiper-container-h',{
	  	pagination: '.pagination',
	    paginationClickable: true,
	    loop: true
	  })
		var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'vertical',
	    onSlideChangeEnd:function(){
	    	switch (mySwiper.activeIndex){
	    		case 0:
	    		$(".nexttip").removeClass("w");
	    		break;
	    		case 1:
	    		$(".nexttip").addClass("w").removeClass("n");
	    		break;
	    		case 2:
	    		$(".nexttip").addClass("n");
	    		mySwiper_h.slideTo(4,800);
	    		break;
	    		default:
	    		break;
	    	}
	    }
	  })
	  var BigImgLoaded=false;
  	$(".p3-area").click(function(){
  		var h_index;
  		if(mySwiper_h.activeIndex>3){
  			h_index=1;
  		}else	if(mySwiper_h.activeIndex<1){
  			h_index=3;
  		}else{
  			h_index=mySwiper_h.activeIndex;
  		}
  		selid=(h_index-1)*3+$(this).index();
      
  		$(".p4-pic").attr("src",'img/a03_'+(selid+1)+"b.jpg");
  		$(".p5-sub").attr("src","img/ticket/m"+(selid+1)+".png");
  		$(".p5-to").attr("src","img/ticket/t"+(selid+1)+".png");
  		$(".p4-pic")[0].onload=function(){
  			BigImgLoaded=true;
		  }
  		
  		$(this).addClass("wider").siblings().addClass("narrow");
  		setTimeout(function(){
  			$(".p4-section").addClass("active");
        setTimeout(function(){
          $(".p4-tit2,.p4-tit3").addClass("animIn");
          setTimeout(function(){
            $(".p4-tip1,.p4-tip3").removeClass("on");
            $(".p4-tip2").addClass("animIn");
          },2500);
        },10);
  			//setTimeout(function(){$(".p4-fog").removeClass("blow");},100);
  		},400);
  	})
  	$(".p4-fog").css({
  		"-webkit-transform":"scale3d(1,"+rateh+",1)",
  		"transform":"scale3d(1,"+rateh+",1)"
  	})

  	var intervalid;
  	var t1,t2,timegap;
  	var mySwiper2;
  	$(".p4-circ").on('touchstart',function(e){
  		$(".p4-tip1,.p4-tip2,.p4-tip3").addClass("on");
  		$(".p4-fog,.p4-tit").addClass("blow");
      $(".p4-tit2,.p4-tit3").addClass("trsnone");
  		t1=new Date();
  		window.clearTimeout(intervalid);
  		intervalid=window.setTimeout(function(){
  			$(".p4-tip2").removeClass("on").addClass("out");
  			$(".p4-airconarea").addClass("show");
  			mySwiper2 = new Swiper ('.swiper-container2', {
			    direction: 'vertical',
			    onTouchMove:function(){
			    	$(".nexttip").removeClass("low");
			    },
			    onSlideChangeEnd:function(){
			    	if(mySwiper2.activeIndex==0){
			    		$(".nexttip").addClass("low");
			    	}
			    	if(mySwiper2.activeIndex==1){
			    		$(".nexttip").removeClass("low");
			    	}
			    }
			  })
			  $(".nexttip").addClass("low");

			  if(BigImgLoaded){
			  	setTimeout(function(){$(".swiper-container").hide();},350);
			  }
			  $(".p4-pic")[0].onload=function(){
			  	BigImgLoaded=true;
			  	setTimeout(function(){$(".swiper-container").hide();},350);
			  }
  		},2300);
  	})
  	$(".p4-circ").on('touchend',function(e){
  		t2=new Date();
  		timegap=t2.getTime()-t1.getTime();
  		if(timegap<2300){
  			$(".p4-tip1,.p4-tip2,.p4-tip3").removeClass("on");
  			$(".p4-fog,.p4-tit").removeClass("blow");
  		}
  		window.clearTimeout(intervalid);
  	})

  	$(".p5-go").tap(function(){
  		$(this).addClass("out");
  		$(".p5-blackmask").addClass("show");
  		mySwiper2.destroy();
  	})
  	$(".p5-btn").tap(function(){
  		$(".blankmask").addClass("show");
  	})
  	$(".blankmask").tap(function(){
  		$(this).removeClass("show");
  	})

    var audio=document.getElementById("snd");
    var sndplay=false;
    $("html,body").one("touchstart",function(){
      sndplay=true;
      audio.play();
    })
    audio.addEventListener("ended",function(e){
      sndplay=true;
      audio.play();
    },false);

    $(".sndctrl").tap(function(){
      if(sndplay){
        audio.pause();
        $(this).find("i").show();
      }else{
        audio.play();
        $(this).find("i").hide();
      }
      sndplay=!sndplay;
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
})
