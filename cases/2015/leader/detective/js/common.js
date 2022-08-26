document.body.addEventListener('touchmove', function(e) {
  e.stopPropagation();
  e.preventDefault();
});
$(function(){
  var stageW=$(window).width();
  var stageH=$(window).height();
  var stageT=0
  var mySwiper;
  var userasw=[];
  var loadingImages=[];
  var restxt=["嘻，我是深藏不漏的毛利小五郎，认真起来我自己都觉得可怕","哇！我是智商过人的工藤新一，完美逻辑思维，不服来测","哇！我是无与伦比的福尔摩斯，才智与美貌的化身，不服单挑"];
  for(var i=1;i<=20;i++){
    var _i=i<10?("0"+i):i;
    loadingImages.push("img/a"+_i+".png");
    if(i<=8){
      loadingImages.push("img/a"+_i+".jpg");
    }
  }
  var rate=640/1136;
  $(window).resize(function(){
    stageW=$(window).width();
    stageH=$(window).height();
    $(".wrapholder").height(stageH);
    var stageRate=stageW/stageH;
    if(stageRate>rate&&stageRate<rate*1.4){
      scalebody(1,1,-(1136-stageH)/2,'center');
      stageT=(1136-stageH)/2;
      $(".btn").css('bottom',stageT+15);
    }else{
      scalebody(stageH/1136,stageH/1136,0,'top');
      stageT=0;
      $(".btn").css('bottom',80);
    }
  }).triggerHandler('resize');

  loadResources(loadingImages,function (n, i, img) {
    $("#loading p").html("loading&nbsp;" + Math.round(i * 100 / n) + "%");
    if (n != i) return;
    $("#loading").remove();
    $("#wrap").show();
    $("img").each(function(){
      $(this).attr("src",$(this).data("src"));
    })
    init();
  })

  function scalebody(xr,yr,z,pos){
    var cssresize={
      '-webkit-transform':'scale3d('+xr+','+yr+',1) translate3d(0,'+z+'px,0)',
      'transform':'scale3d('+xr+','+yr+',1) translate3d(0,'+z+'px,0)',
      '-webkit-transform-origin':'center '+pos,
      'transform-origin':'center '+pos
    }
    $("#wrap").css(cssresize);
  }
  function init(){
    mySwiper=new Swiper ('.swiper-container', {
      direction: 'vertical',
      onlyExternal : true
    });
    $(".p1-figure").tap(function(){
      $(".p1-snow,.p1-figure").addClass("drop")
      $(".p1-tit1,.p1-tit2").addClass("fly")
      $(".p1-zoomglass").addClass("zoomglassout")
      $(".p1-txt").hide()
      $(".p1,.p2").addClass("open");
      setTimeout(function(){
        $(window).tap(function(){
          $(".p3").addClass("show");
          $(window).unbind("tap");
        })
      },1200);
      $(".p1-figure").unbind("tap");
    })

    $(".p3-btn").tap(function(){
      mySwiper.slideTo(1);
    })
    $(".p4-sel li").tap(function(n){
      $(".p4-btn").show();
      var _n=$(this).index();
      if(_n!=1){
        $(this).find(".rightasw").show()
        $(this).find(".asw").hide()
        storeResult(0,0);
        return;
      }
      storeResult(0,1);
      $(".p4-btn").triggerHandler("tap");
    })
    $(".p4-btn").tap(function(){
      mySwiper.slideTo(2);
    })
    $(".p5-btn").tap(function(){
      mySwiper.slideTo(3);
    })
    $(".p6-sel li").tap(function(n){
      $(".p6-btn").show();
      var _n=$(this).index();
      if(_n!=2){
        $(this).find(".rightasw").show()
        $(this).find(".asw").hide()
        storeResult(1,0);
        return;
      }
      storeResult(1,1);
      $(".p6-btn").triggerHandler("tap");
    })
    $(".p6-btn").tap(function(){
      mySwiper.slideTo(4);
    })

    $(".p7-sel li").tap(function(n){
      $(".p7-btn").show();
      var _n=$(this).index();
      if(_n!=2){
        $(this).find(".rightasw").show()
        $(this).find(".asw").hide()
        storeResult(2,0);
        return;
      }
      storeResult(2,1);
      $(".p7-btn").triggerHandler("tap");
    })
    $(".p7-btn").tap(function(){
      mySwiper.slideTo(5);
      var _res=userasw[0]+userasw[1]+userasw[2];
      _res=_res<=1?1:_res;
      result(_res);
      $(".p9").addClass("rst"+_res);
      if(shareObj){
        shareObj.title=restxt[_res-1];
        shareInit();
      }
    })
    $(".p8-btn").tap(function(){
      mySwiper.slideTo(6);
    })

    $(".p9-btn").tap(function(){
      $(".black-mask").show();
    })
    $(".black-mask").tap(function(){
      $(this).hide();
    })
  }
  // var audio=document.getElementById("snd");
  // var sndplay=false;
  // $("html,body").one("touchstart",function(){
  //   sndplay=true;
  //   audio.play();
  // })
  // audio.addEventListener("ended",function(e){
  //   sndplay=true;
  //   audio.play();
  // },false);

  // $(".sndctrl").tap(function(){
  //   if(sndplay){
  //     audio.pause();
  //     $(this).find("i").show();
  //   }else{
  //     audio.play();
  //     $(this).find("i").hide();
  //   }
  //   sndplay=!sndplay;
  // })

  function result(idx){
    $(".p9-tit1").attr("src","img/a"+(49-(idx-1)*4)+".png");
    $(".p9-tit2").attr("src","img/a"+(50-(idx-1)*4)+".png");
    $(".p9-role").attr("src","img/a"+(51-(idx-1)*4)+".png");
    $(".p9-arrow").attr("src","img/a"+(52-(idx-1)*4)+".png");
  }
  function storeResult(idx,score){
    if(typeof userasw[idx]=="undefined"){
      userasw[idx]=score;
    }
  }
})
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
    img.src =  urls[i];
  }
}