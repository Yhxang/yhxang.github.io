document.body.addEventListener('touchmove', function(e) {
  e.stopPropagation();
  e.preventDefault();
});
var canvas,stage, exportRoot;
var images;
var stageW,stageH,stageT;
var mySwiper;
var p3moveready,p4moveready,p5moveready;
var p6showprc,p7showprc;
var mc1_1,mc3_1,mc3_2,mc3_3,mc4_1,mc4_2,mc4_3,mc5_1,mc5_2;
var version=1.81;
$(function(){
  var rate=640/1008;
  $(window).resize(function(){
    stageW=$(window).width();
    stageH=$(window).height();
    $('body').height(stageH)
    var stageRate=stageW/stageH;
    if(stageRate>rate&&stageRate<rate*1.4){
      scalebody(1,1,-(1008-stageH)/2,'center');
    }else{
      scalebody(stageH/1008,stageH/1008,0,'top');
    }
  }).triggerHandler('resize');
  
  function scalebody(xr,yr,z,pos){
    var cssresize={
      '-webkit-transform':'scale3d('+xr+','+yr+',1) translate3d(0,'+z+'px,0)',
      'transform':'scale3d('+xr+','+yr+',1) translate3d(0,'+z+'px,0)',
      '-webkit-transform-origin':'center '+pos,
      'transform-origin':'center '+pos
    }
    $("#loading,#wrap").css(cssresize);
  }
  init();
})
function init(){
  images = images||{};
  var bxmanifest=[{src:"img/a01.jpg?ver="+version,id:"aj1"},{src:"img/a02.jpg?ver="+version,id:"aj2"}];
  
  for(var i=0;i<=22;i++){
    var _i=i<10?("0"+i):i;
    bxmanifest.push({src:"img/a"+_i+".png?ver="+version,id:"a"+i});
  }
  pushmanifest(4,"grass","jpg",version);
  pushmanifest(34,"kt","jpg",version);
  pushmanifest(9,"kth","png",version);
  pushmanifest(9,"kta","png",version);
  pushmanifest(17,"bx","jpg",version);
  pushmanifest(13,"bxw","png",version);
  pushmanifest(9,"bxa","png",version);
  pushmanifest(18,"xyj","jpg",version);
  pushmanifest(17,"xyjc","png",version);

  function pushmanifest(max,filename,filetype,_ver){
    for(var i=0;i<=max;i++){
      var _i=i<10?("0"+i):i;
      bxmanifest.push({src:"img/"+filename+"/"+filename+"_000"+_i+"."+filetype+"?ver="+_ver,id:filename+i});
    }
  }
  var loader = new createjs.LoadQueue(false);
  loader.addEventListener("fileload", handleFileLoad);
  loader.addEventListener("progress", handleFileProgress);
  loader.addEventListener("complete", handleComplete);
  loader.loadManifest(bxmanifest);

  var audio=document.getElementById("pageaudio");
  var sndplay=true;
  $("html").one("touchstart",function(){
    audio.play();
  })
  $("body").one("touchstart",function(){
    audio.play();
  })
  audio.addEventListener("ended",function(e){
    audio.play();
  },false);
  $(".sndCtrl").click(function(){
    if(sndplay){
      audio.pause();
      $(".sndCtrl").addClass("muted");
    }else{
      audio.play();
      $(".sndCtrl").removeClass("muted");
    }
    sndplay=!sndplay;
  })
}

function handleFileLoad(evt){
  if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
function handleFileProgress(evt){
 $("#loading p").text(Math.floor(evt.progress*100)+'%');
}
function handleComplete(evt){
  $("#wrap").show();
  $("img").each(function(){
    var datasrc=$(this).data("src");
    if(datasrc){
      $(this).attr("src",datasrc+"?ver="+version);
    }
  })
  mc1_1=new mc("p1-vbg",8,"grass")
  mc3_1=new mc("p3-vbg",6,"kt");
  mc3_2=new mc("p3-hair",7,"kth");
  mc3_3=new mc("p3-air",6,"kta");
  mc4_1=new mc("p4-vbg",6,"bx");
  mc4_2=new mc("p4-water",7,"bxw");
  mc4_3=new mc("p4-air",6,"bxa");
  mc5_1=new mc("p5-vbg",6,"xyj");
  mc5_2=new mc("p5-cloth",7,"xyjc");
  mc1_1.loopTo(0,4);
  mc3_1.reset(true);
  mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    onSlideChangeEnd:function(cmd){
      console.log(mySwiper.activeIndex)
      if(mySwiper.activeIndex==1){
        
        cmd.lockSwipes();
        $(".p3").removeClass("played");
        mc4_1.reset(true); mc4_2.reset(); mc4_3.reset(); mc5_1.reset(true); mc5_2.reset();
        p3moveready=false;
        setTimeout(function(){
          p3moveready=true;
        },2000);
      }else if(cmd.activeIndex==2){
        cmd.lockSwipes();
        $(".p4").removeClass("played");
        mc3_1.reset(true); mc3_2.reset(); mc3_3.reset(); mc5_1.reset(true); mc5_2.reset();
        p4moveready=false;
        setTimeout(function(){
          p4moveready=true;
        },2000);
      }else if(cmd.activeIndex==3){
        cmd.lockSwipes();
        $(".p5").removeClass("played");
        mc3_1.reset(true); mc3_2.reset(); mc3_3.reset(); mc4_1.reset(true); mc4_2.reset(); mc4_3.reset();
        p5moveready=false;
        setTimeout(function(){
          p5moveready=true;
        },2000);
      }else if(cmd.activeIndex==0){
        mc3_1.reset(true); mc3_2.reset(); mc3_3.reset(); 
      }else if(cmd.activeIndex==4){
        mc5_1.reset(true); mc5_2.reset();
        mySwiper.lockSwipes();
      }else if(cmd.activeIndex==5){
        mySwiper.lockSwipes();
      }
      $(".swiper-slide").removeClass("played");
    },
    onTouchMove:function(cmd){   
      var startX=cmd.touches.startX;
      var startY=cmd.touches.startY;
      var currentX=cmd.touches.currentX;
      if(cmd.activeIndex==1){
        if(!$(".p3").hasClass("played")&&cmd.touches.currentX-cmd.touches.startX>=30&&p3moveready){
          mc3_1.playTo(34,function(){
            mc3_2.loopTo(0,9);
            mc3_3.loopTo(0,9);
            cmd.unlockSwipes();
          });
          $(".p3").addClass("played");
        }
      }else if(cmd.activeIndex==2){
        if(!$(".p4").hasClass("played")&&cmd.touches.currentX-cmd.touches.startX>=30&&p4moveready){
          mc4_3.loopTo(0,9);
          mc4_1.playTo(17,function(){
            mc4_2.loopTo(0,13);
            cmd.unlockSwipes();
          });
          $(".p4").addClass("played");
        }
      }else if(cmd.activeIndex==3){
        if(!$(".p5").hasClass("played")&&cmd.touches.currentX-cmd.touches.startX>=30&&p5moveready){
          mc5_1.playTo(18,function(){
            mc5_2.loopTo(0,17);
            cmd.unlockSwipes();
          });
          $(".p5").addClass("played");
        }
      }else if(cmd.activeIndex==4){
        p6showprc=false;
        resetprice($(".p6 .price li"),4999);
         $(".p6").removeClass("showprc");
        if(!p6showprc&&startY>90&&startY<320&&currentX-startX>=30){
          $(".p6").addClass("showprc");
          reduction($(".p6 .price li").eq(1),5,130);
          p6showprc=true;
          mySwiper.unlockSwipes();
        }
      }else if(cmd.activeIndex==5){
        p7showprc=false;
        resetprice($(".p7 .price li"),19999);
        $(".p7").removeClass("showprc");
        if(!p7showprc&&startY>90&&startY<320&&currentX-startX>=30){
          $(".p7").addClass("showprc");
          reduction($(".p7 .price li").eq(1),6,130);
          reduction($(".p7 .price li").eq(2),7,90);
          p7showprc=true;
          mySwiper.unlockSwipes();
        }
      }
    }
  });
  setTimeout(function(){$("#wrap").css({opacity:1})},150)
  $(".p1-bighi").click(function(){
    mySwiper.slideTo(1);
  })
}

function resetprice(obj,num){
  var _num=String(num);
  obj.each(function(){
    $(this).text(_num[$(this).index()]);
  })
}
function reduction(obj,toNum,interval){
  var now=parseInt(obj.text());
  var _interval;
  rollnum();
  function rollnum(){
    window.clearTimeout(_interval);
    _interval=window.setTimeout(function(){
      if(--now>=toNum){
        obj.text(now);
        rollnum();
      }else{
        window.clearTimeout(_interval);
      }
    },interval);
  }
}
function mc(id,FPS,nameidx){
  this.ele=$("#"+id);
  this.FPS=FPS;
  this.intervalFrame=Math.floor(1000/FPS);
  this.curframe=0;
  this.intervalId=null;
  this.nameidx=nameidx;
}
mc.prototype.interval=function(func_1,lastFrame,func_2,loopframe){
  var _this=this;
  var _arg=arguments;
  window.clearTimeout(this.intervalId);
  this.intervalId=window.setTimeout(function(){   
    func_1(); 
    if(_this.curframe<lastFrame){
      _this.curframe++;
      _this.interval.apply(_this,_arg);
    }else if(_this.curframe>=lastFrame){
      if(typeof loopframe!=="undefined"){
        _this.curframe=loopframe;
        _this.interval.apply(_this,_arg);
      }else{
        if(func_2){
          func_2();
        }
        window.clearTimeout(_this.intervalId);
      }
    }
  },this.intervalFrame);
  return this;
}
mc.prototype.playTo=function(lastFrame,func){
  var _this=this;
  this.interval.call(this,function(){
    _this.ele.html(images[_this.nameidx+_this.curframe]);
  },lastFrame,func);
  return this;
}
mc.prototype.loopTo=function(loopFrame,lastFrame){
  var _this=this;
  this.interval.call(this,function(){
    _this.ele.html(images[_this.nameidx+_this.curframe]);
  },lastFrame,null,loopFrame);
  return this;
}
mc.prototype.stop=function(frame){
  window.clearTimeout(this.intervalId);
  if(typeof frame=="number"){
    this.curframe=frame;
    this.ele.html(images[this.nameidx+this.curframe]);
  }
  return this;
}
mc.prototype.reset=function(hasFrame){
  if(hasFrame){
     this.stop(0);
  }else{
    this.curframe=0;
    this.ele.empty();
    this.stop();
  }
  return this;
}