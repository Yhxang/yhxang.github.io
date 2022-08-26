document.body.addEventListener('touchmove', function(e) {
  e.stopPropagation();
  e.preventDefault();
});
var mySwiper,mySwiperInner;
var snd;
var isMuted=false;
var manifest=[];
var version="1.1";
for(var i=1;i<=14;i++){
  var _i=i<10?("0"+i):i;
  if(i!=7&&i!=5){
    manifest.push("img/a"+_i+".png?ver="+version);
  }
  if(i<=2){
    manifest.push("img/a"+_i+".jpg?ver="+version);
  }
}
$(function(){
  var stageH=$(window).height();
  $(".wrapholder").height(stageH);
  $(".wrap").css({
    "margin-top":stageH<1136?(stageH-1136)/2:0
  })
  loadResources(manifest,function (n, i, img) {
    $("#loading p").html("loading&nbsp;" + Math.round(i * 100 / n) + "%");
    if (n != i) return;
    $("#loading").remove();
    $(".wrapholder").show();
    $("img").each(function(){
      var _datasrc=$(this).data('src');
      if(_datasrc){
        $(this).attr("src",_datasrc+"?ver="+version);
      }
    })
    mySwiper = new Swiper ('.swiper-container', {
      direction: 'vertical',
      onlyExternal: true
    });
  })
  $(".sndctrl").tap(function(){
    if(!snd)return;
    if(!isMuted){
      snd.pause();
      $(this).find("i").show();
      isMuted=true;
    }else{
      snd.play();
      $(this).find("i").hide();
      isMuted=false;
    }
  })
  $(".alertbtn").tap(function(e){
    $(".blankmask").addClass("animOut");
    playSnd("tida");
    setTimeout(function(){
      $(".blankmask").hide();
      timerstart();
    },300);
  });
  $("#inputnum").on("keyup",function(e){
    if (!/^\d+$/.test(e.value)){
      $(e.target).val(/^\d+/.exec($(e.target).val()));
    }
    $(e.target).val(String($(e.target).val()).substr(0,4));
    numtoimg($("#inputnum").val());
    
    var numval=$(e.target).val();
    if(numval.length==4){
      if(numval=="0929"){
        $(".p2-success").addClass("show");
        $(".p2-boardarea,.p2-tit").addClass("animOut");
        $("#inputnum").blur().hide();
        $(".p2-warningmsg").removeClass("show");
        setTimeout(function(){
          $(".p2-1").show();
          snd.pause();
          playSnd("bgm2");
          if(isMuted){snd.pause();}
          mySwiperInner=new Swiper(".swiper-container-inner",{
            direction: 'vertical',
            slideActiveClass:'curslide'
          });
        },1200)
      }else{
        $(".p2-warningmsg").addClass("show");
        $(".p2-boardareainner").addClass("wrong");
        setTimeout(function(){
          $(".p2-boardareainner").removeClass("wrong");
        },1000)
      }
    }
    return false;
  })
  $(".p2-warningmsg").tap(function(){
    $(this).removeClass("show");
    snd.pause();
    mySwiper.slideTo(0);
    $(".blankmask").removeClass("animOut").show();
    $("#inputnum").val("");
    $(".imgtxt").empty();
    $(".num3 .numsprite").css({
      "-webkit-transform":"translate3d(0,-1179px,0)",
      "transform":"translate3d(0,-1179px,0)"
    })
    $(".num4 .numsprite").css({
      "-webkit-transform":"translate3d(0,0,0)",
      "transform":"translate3d(0,0,0)"
    })
  })
  $(".p-move").tap(function(){
    $(".lastmask").show();
  })
  $(".lastmask").tap(function(){
    $(this).hide();
  })
  $(".sharelt,.sndctrl").css({
    top:(1136-stageH)/2+10
  })
})
function numtoimg(str){
  var numimghtml=""
  for(var i=0;i<str.length;i++){
    numimghtml+="<img src='img/numfont/n"+str[i]+".png' >";
  }
  $(".imgtxt").html(numimghtml);
}
function timerstart(){
  var alltime=10;
  var max=alltime;
  var millpersec=700;
  $(".colon").css({
    "-webkit-animation": "secondcolon "+millpersec+"ms "+max,
    "animation": "secondcolon "+millpersec+"ms "+max
  });
  $(".num3 .numsprite").css({
    "-webkit-transform":"translate3d(0,-1310px,0)",
    "transform":"translate3d(0,-1310px,0)"
  })
  function secstart(){
    alltime--;
    $(".num4 .numsprite").css({
      "-webkit-transform":"translate3d(0,"+(-0-131*(max-alltime))+"px,0)",
      "transform":"translate3d(0,"+(-0-131*(max-alltime))+"px,0)"
    })
  }

  secstart();
  setTimeout(function(){
    secstart();
    if(alltime==0) return;
    setTimeout(arguments.callee,millpersec);
  },millpersec);

  var nowremeber=1;
  function remeberChange (){
    $(".rem"+nowremeber).addClass("show").siblings(".remeber").removeClass("show");
    $(".p1-bg").addClass("anim");
    setTimeout(function(){
      $(".p1-bg").removeClass("anim");
    },390);
    nowremeber+=1;
  }
  remeberChange();
  setTimeout(function(){
    remeberChange();
    if(nowremeber>4) {
      setTimeout(function(){
        mySwiper.slideTo(1);
        snd.pause();
        playSnd("bgm");
        if(isMuted){snd.pause();}
        $(".rem4").removeClass("show");
        $(".p1-glow").hide();
      },max*millpersec/4+400);
      return;
    }
    setTimeout(arguments.callee,max*millpersec/4);
  },max*millpersec/4);
}
function playSnd(src,func){
  snd=new Audio();
  snd.autoplay=true;
  snd.preload=true;
  snd.loop=true;
  snd.src='snd/'+src+".mp3";
  snd.play();
  if(func){
    snd.addEventListener("ended",function(e){
      func();
    },false);
  } 
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
    img.src =  urls[i];
  }
}