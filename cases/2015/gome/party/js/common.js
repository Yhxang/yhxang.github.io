document.body.addEventListener('touchmove', function(e) {
  e.stopPropagation();
  e.preventDefault();
});
$(function(){
  var stageH=$(window).height();
  $(".wrapholder").height(stageH)
  if(stageH<1136){
    $(".wrap").css({
      "-webkit-transform":"translate3d(0,"+(stageH-1136)/2+"px,0)",
      "transform":"translate3d(0,"+(stageH-1136)/2+"px,0)"
    })
  }
  var manifest=[];
  for(var i=1;i<=25;i++){
    var _i=i<10?("0"+i):i;
    if(i!=6&&i!=11&&i!=15&&i!=23){
      manifest.push("img/a"+_i+".png");
    }
    if(i<=3){
      manifest.push("img/a"+_i+".jpg");
    }
  }
  loadResources(manifest,function (n, i, img) {
    $("#loading p").html("loading&nbsp;" + Math.round(i * 100 / n) + "%");
    if (n != i) return;
    $("#loading").remove();
    $(".wrapholder").show();
    $("img").each(function(){
      $(this).attr("src",$(this).data("src"));
    })
    initBgm();
    // $(".sndctrl").click(function(){
    //   if(bgm.paused){
    //     isMute=false;
    //     bgm.play();
    //     $(this).find("i").hide();
    //   }else{
    //     isMute=true;
    //     bgm.pause();
    //     $(this).find("i").show();
    //   }
    // })
    init();
    setTimeout(function(){
      $(".wrap").css({opacity:1});
    },35);
  })
})

function init(){
  tl.add("start")
  .set(".bg",{css:{z:-800,scale:1.2}})
  .set(".p1-black",{css:{z:-300,scale:1.1}})
  .set(".p1-yellow",{css:{z:-100,scale:1.05}})
  .set(".p1-glass",{css:{z:-50,scale:1}})
  .set(".p-water1,.p-water2",{css:{z:-280}})
  .set(".p-sub",{css:{z:0,scale:.95}})
  .set(".p-tit",{css:{z:100,scale:.95}})
  .set(".p1-box",{css:{z:500,scale:1}})
  .set(".p1-book",{css:{z:520,scale:1}})

  .fromTo(".p1-yellow",.4,{css:{width:0}},{css:{width:640}},"start")
  .fromTo("#trans3D",.5,{css:{rotationY:0}},{css:{rotationY:90},ease:Power2.easeIn},"start+=3")
  .fromTo(".p1-yellow",.1,{css:{width:640}},{css:{width:0},onComplete:function(){
    $(".p-water1,.p-water2").addClass("animIn")
  }},"-=.5")
  .add("trans1")
  .set(".p1",{css:{display:"none"}})
  .set(".p2",{css:{display:"block"}})
  .set(".p2-role",{css:{z:200,scale:1.05}})
  .set("#trans3D",{css:{rotationY:-90}})
  .to("#trans3D",.8,{css:{rotationY:0},ease:Elastic.easeOut})

  .fromTo(".p1-yellow",.4,{css:{width:0}},{css:{width:640}},"-=1")
  .to(".p2-bg",.4,{autoAlpha:1},"trans1")
  .fromTo("#trans3D",.5,{css:{rotationY:0}},{css:{rotationY:90},ease:Power2.easeIn},"+=3")
  .fromTo(".p1-yellow",.1,{css:{width:640}},{css:{width:0}},"-=.5")
  .set(".p2",{css:{display:"none"}})
  .set(".p3",{css:{display:"block"}})
  .set(".p3-role",{css:{z:200,scale:1.05}})
  .set("#trans3D",{css:{rotationY:-90}})
  .to("#trans3D",.8,{css:{rotationY:0},ease:Elastic.easeOut})
  .to(".p3-bg",.4,{autoAlpha:1},"-=.5")
  .fromTo(".p1-yellow",.4,{css:{width:0}},{css:{width:640}})

  .fromTo("#trans3D",.5,{css:{rotationY:0}},{css:{rotationY:90},ease:Power2.easeIn},"+=3")
  .fromTo(".p1-yellow",.1,{css:{width:640}},{css:{width:0},onComplete:function(){
    $(".p1-bg,.p2-bg").hide()
  }},"-=.5")
  .set(".p3-bg",{css:{display:"none"}})
  .set(".p4-bg",{css:{display:"block",z:-210,scale:1.1}})
  .set(".p-water1,.p-water2,.p1-black",{css:{display:"none"}})
  .set(".p4-tit",{css:{z:100}})
  .set('.stroke1',{css:{z:200}})
  .set('.stroke2',{css:{z:-100}})
  .set('.stroke3',{css:{z:0}})
  .set('.stroke4',{css:{z:-200}})
  .set(".p3",{css:{display:"none"}})
  .set(".p4",{css:{display:"block"}})
  .set("#trans3D",{css:{rotationY:-90,rotationZ:30}})

  .add("p4In")
  .to("#trans3D",.8,{css:{rotationY:0,rotationZ:0},onComplete:function(){
    tl2.to(".strokeholder",.07,{css:{x:"+=5",y:"-=3",rotationX:1,rotationY:-1},repeat:-1,yoyo:true})
  }},"p4In")
  .fromTo(".stroke1",.35,{x:1500},{x:0,ease:Power2.easeOut},"p4In+=.3")
  .fromTo(".stroke2",.35,{x:1500},{x:0,ease:Power2.easeOut},"p4In+=.4")
  .fromTo(".stroke3",.35,{x:-1500},{x:0,ease:Power2.easeOut},"p4In+=.45")
  .fromTo(".stroke4",.35,{x:-1500},{x:0,ease:Power2.easeOut},"p4In+=.5")
  .to("#trans3D",.4,{autoAlpha:0,scale:0,ease:Power2.easeIn,onStart:function(){
    tl2.kill().clear();
  }},"+=.55").add("explode")
  .set(".p4",{css:{display:"none"}})
  
  .set("#trans3D",{autoAlpha:1,scale:1})
  tl.set(".p100",{css:{transformPerspective:300, perspective:300, z:-200, transformStyle:"preserve-3d"}})
  $(".diamond").each(function(index,element){
    tl.fromTo(element,1,{css:{z:300, rotationX:getRandom(-360, 600), rotationY:getRandom(-360, -600), autoAlpha:0}},{css:{z:0, rotationX:0, rotationY:0, autoAlpha:1}},"explode")
  })
  tl.fromTo(".p100",1,{css:{rotationY:180, z:300}},{css:{rotationY:45, z:-400}, ease:Power2.easeOut},"explode")
  .to(".p100",1,{css:{rotationY:0, z:0}, ease:Power1.easeInOut},"explode+=.5").add("explode1")
  .staggerTo(".diamond",0.4,{css:{y:-1136},ease:Power2.easeIn},.05,"+=1",function(){
    $(".p100").hide();
  })
  .to(".p5-bg",.3,{autoAlpha:1,onComplete:function(){
    $(".p5-bg").addClass("animIn");
  }},"-=.8")

  .set(".p5",{css:{display:"block"}})
  .set(".p5-water1,.p5-water2",{css:{z:0}})
  .set(".p5-black",{css:{z:-400,scale:1.2}})
  .set(".p5-subblackbg",{css:{z:-350}})
  .set(".p5-subtxt",{css:{z:-200}})
  .set(".p5-role",{css:{z:-650,scale:1.2}})
  .set(".p5-pop",{css:{z:-600,scale:0}})
  .fromTo(".p5-tit",.3,{scale:2,autoAlpha:0},{scale:1,autoAlpha:1,ease:Power3.easeIn},"+=.2")
  .fromTo(".p5-subblack",.3,{css:{alpha:0,x:"+=50"}},{css:{alpha:1,x:0}})
  .to(".p5-role",.5,{alpha:1})
  .to(".p5-pop",.15,{scale:1,ease:Back.easeOut,onComplete:function(){
    tl2.to(".p5-pop",.08,{css:{scale:.98},yoyo:true,repeat:-1})
  }},"-=.5")
  
  .to(".p5-role",1,{css:{alpha:0}},"+=1").add("p6")
  .to(".p5-tit",.2,{scale:0,ease:Power2.easeIn},"p6")
  .to(".p5-subblack",.3,{css:{alpha:0,x:"-=50"}},"p6")
  .to(".p5-pop",.3,{css:{scale:1.2,autoAlpha:0},onStart:function(){
    tl2.kill().clear();
  }},"p6")

  .to(".p6-bg",.5,{alpha:1},"-=.5")
  .set(".p6",{css:{display:"block"}})
  .set(".p6-hand",{css:{z:-700,scale:1.2}})
  .to(".p6-hand",.5,{alpha:1,onStart:function(){
    tl2.to(".p6-stroke1,.p6-stroke2",.08,{css:{rotationZ:-1},ease:Power1.easeInOut,yoyo:true,repeat:-1})
  }})
  .fromTo(".p6-tit",.3,{scale:2,autoAlpha:0},{scale:1,autoAlpha:1,ease:Power3.easeIn})
  .fromTo(".p6-subblack",.3,{css:{alpha:0,x:"+=50"}},{css:{alpha:1,x:0}})

  .to(".p6-hand",.5,{autoAlpha:0},"+=1").add("p7")
  .to(".p6-tit",.2,{scale:0,ease:Power2.easeIn},"p7")
  .to(".p6-subblack",.3,{css:{alpha:0,x:"-=50"}},"p7")
  .set(".p7",{css:{display:"block"}})
  .to(".p6-stroke1,.p6-stroke2",.3,{autoAlpha:0,onStart:function(){
    tl2.kill().clear();
  }},"p7")
 
  .to(".p7-bg",.5,{alpha:1})
  .set(".p6-bg,.p5-bg",{css:{display:"none"}})
  .fromTo(".p7-tit",.3,{scale:2,autoAlpha:0},{scale:1,autoAlpha:1,ease:Power3.easeIn},"+=.2")
  .fromTo(".p7-subblack",.3,{css:{alpha:0,x:"+=50"}},{css:{alpha:1,x:0}})

  .from(".p7-pop",.5,{scale:0,ease:Back.easeOut},"-=.1")

  .to(".p7-tit",.2,{scale:0,ease:Power2.easeIn},"+=.8").add("p8")
  .to(".p7-subblack",.3,{css:{alpha:0,x:"-=50"}},"p8")
  .to(".p7-pop",.2,{alpha:0},"p8")
  .set(".p8",{css:{display:"block"}})
  .set(".p4-bg",{autoAlpha:1})
  .to(".p7-bg",.3,{autoAlpha:0})
  .to(".p5-water1,.p5-water2",.3,{autoAlpha:0},"-=.3").add("last")
  .to(".p8",.5,{autoAlpha:1})
  .from(".p8_wrapbg",.8,{scale:1.5,ease:Power2.easeOut},"last")
  .from(".p8_tit2",.3,{css:{scale:2.5,alpha:0}},"last")
  .from(".p8_tit1",.5,{css:{y:"-=100",alpha:0}},"last+=.2")
  .from(".p8_line",.5,{css:{y:"+=100",alpha:0}},"last+=.2")
  .from(".p8_info",.5,{css:{y:"+=130",alpha:0}},"last+=.4")

  //tl.play("explode")
  deviceRotate();
}
var tl=new TimelineMax();
var tl2=new TimelineMax();
function getRandom(max, min){
  return Math.floor(Math.random() * (1 + max - min) + min);
} 
function deviceRotate(){
  if (window.DeviceMotionEvent) {
    window.addEventListener('deviceorientation', deviceOrientationHandler, false);　　　　　
  } else {
    //alert("您的设备不支持运动传感");
  } 
}
function deviceOrientationHandler(eventData){
  if(eventData.gamma){
    //var angle=eventData.gamma/15>4?4:eventData.gamma/15
    var angle=eventData.gamma/15;
    angle=angle>4?4:(angle<-4?-4:angle);
    TweenMax.to("#stage3D",.2,{css:{rotationY:-angle}});
  }
}
var bgm,isMute=false;
function initBgm(){
  bgm=new Audio();
  bgm.autoplay=true;
  bgm.preload=true;
  bgm.loop=false;
  bgm.src='media/bgm.mp3';
  bgm.play();
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
　