$(function(){
	var videoplay=false;
	var sndplay=false;
	var resourceDir="img/";
	var stageW=$(window).width();
	var stageH=$(window).height();
	$(".swiper-container").height(stageH);
	var loadingImages=[];
	for(var i=1;i<=41;i++){
		loadingImages.push("a"+(i<10?"0"+i:i)+".png");
	}
	loadResources(loadingImages,function (n, i, img) {
      $("#loading p").html("loading&nbsp;" + Math.round(i * 100 / n) + "%");
      if (n != i) return;
      $("#loading").remove();
      $("img").each(function(n){
        if($(this).data("src")){
          $(this).attr("src",$(this).data("src"));
        }
      })
      $("#wrap").show();
      init();
  })
  function init(){
  	var audio=document.getElementById("snd");
		$("html").one("touchstart",function(){
			sndplay=true;
			audio.play();
		})
		$("body").one("touchstart",function(){
			sndplay=true;
			audio.play();
		})
		audio.addEventListener("ended",function(e){
			sndplay=true;
			audio.play();
		},false)
		$(".sndctrl").click(function(){
			if(sndplay){
				audio.pause();
				$(this).find("i").show();
			}else{
				audio.play();
				$(this).find("i").hide();
			}
			sndplay=!sndplay;
		})

  	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'vertical',
	    onSlideChangeEnd:function(cmd){
	    	if(videoplay){
	    		if(mySwiper.activeIndex==2){
	    			$("#vid")[0].play();

	    		}else{
	    			$("#vid")[0].pause();
	    		}
	    	}
	    	if(mySwiper.activeIndex==7){
    			$(".nexttip").hide();
    		}else{
    			$(".nexttip").show();
    		}
    		if(sndplay){
    			audio.play();
    		}
	    }
	  })

		$(".p3-vcover").on("touchstart",function(e){
			if(sndplay){
				$(".sndctrl").trigger('tap');
			}

			$(this).hide();
			videoplay=true;
			$("#vid").css("display","block");
			$("#vid")[0].play();
		})
		$("#vid")[0].addEventListener("ended",function(e){
			videoplay=false;
			if(sndplay){
				audio.play();
			}
		},false);

		

		// $(".p9-qr").css({
		// 	left:$(".p8-qr").parent().position().left,
		// 	top:$(".p8-qr").parent().position().top

		// })
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