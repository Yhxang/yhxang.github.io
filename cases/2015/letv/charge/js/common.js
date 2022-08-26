var mySwiper;
var stageH;
var _count=0;
var TotalCount=120;//达到满分需要摇的总数
var CurCount=0;//目前的总分
var shakemax=18;//单次成绩上限
var replay=false;//true 需要重摇
var status="Self_First";
var isShaking=false;
var ScrocePct=0;
var numposted=false;//号码已发送
var changeToSelf=false;
if(gamedata.currentid==gamedata.createrid||gamedata.createrid==""){//自己进入
  if(-1==gamedata.result){
    status="Self_Yestoday";//自己点进昨天的过期链接
  }else{//自己未过期
    if(gamedata.gameid){
      status="Self_Today_Old";//自己当天二次从分享进入（玩过）
    }else{
      status="Self_First";//自己当天第一次进入
    }
  }
}else if(gamedata.currentid!=gamedata.createrid){//朋友进入
  if(-1==gamedata.result){
    status="Friend_Yestoday";//朋友过期
  }else{//朋友未过期
    if(checkdata(gamedata.currentid)){//gamedata.gameid
      status="Friend_Today_Old";//朋友当天二次进入（玩过）
    }else{
      status="Friend_First";//朋友当天第一次从分享进入
    }
  }
}else{
  status="Self_First";//意外情况，第一次自己进入
}

//alert(status);

if(gamedata.createrscore){
  CurCount+=parseInt(gamedata.createrscore);
  if(CurCount>TotalCount){
    CurCount=TotalCount;
  }
}
ScrocePct=CurCount/TotalCount;

function checkdata(curid){
  for(var i=0;i<gamedata.data.length;i++){
    if(gamedata.data[i].friendid==curid){
      return true;
    }
  }
}

$(function(){
  // $(window).resize(function(){
  stageH=$(window).height();
  $(".wrapholder").height(stageH);
  var allH;
  if(stageH<1136&&stageH>=960){
    allH=1136;
  }else if(stageH<960){
    allH=stageH*1136/960;
  }
  $(".wrap").css({
    "-webkit-transform":"translate3d(0,"+(stageH-allH)/2+"px,0) scale("+allH/1136+")",
    "transform":"translate3d(0,"+(stageH-allH)/2+"px,0) scale("+allH/1136+")"
  })
  $(".logo").css({top:-(stageH-allH)/2+25});

  if(stageH>=1136){
    $(".wrap").css({
      "-webkit-transform":"none",
      "transform":"none"
    })
    $(".logo").css({top:25})
    //return;
  }

  // }).triggerHandler("resize");
  
  var manifest=[];
  for(var i=1;i<=45;i++){
    var _i=i<10?("0"+i):i;
    if(i<=3){
      manifest.push("img/a"+_i+".jpg");
    }
    manifest.push("img/a"+_i+".png");
  }

  loadResources(manifest,function (n, i, img) {

    $("#loading p").html("loading&nbsp;" + Math.round(i * 100 / n) + "%");
    if (n != i) return;
    $("#loading").remove();
    $(".wrapholder").show();
    $("img").each(function(){
      var datasrc=$(this).data("src");
      if(datasrc){
        $(this).attr("src",datasrc+"?ver=1.12");
      }
    })
    //initBgm();

    //status="Friend_First"//记得删除
    if("Friend_First"==status){
      $(".p7").removeClass("s1 s1-1 s2 s2-1 s3").addClass("s2").show();
      $(".pn-phonepct").show();
      reflushFlow();
      p6listContInit();
      $(".p-chip").removeClass("c2").addClass("c3");
      $(".pn-battery").addClass("green");

      $(".p6-ct-t1").text(gamedata.creatername);
      $(".p6-ct-t2 span").text(100-Math.floor(100*ScrocePct));

      $(".p7-btn1").unbind("tap").tap(function(){
        initp1();
        $(".p-chip").removeClass("c2 c3");
        $(".p7").removeClass("s1 s1-1 s2 s2-1 s3").hide();
        $(".p1-btn").triggerHandler("tap");
      })
      $(".p7-btn3").unbind("tap").tap(function(){
        status="Self_First";
        changeToSelf=true;
        $(".p-chip").removeClass("c2 c3");
        $(".p7").removeClass("s1 s1-1 s2 s2-1 s3").hide();
        initp1();
        $(".p6-list").empty();
        //$(".p1-btn").triggerHandler("tap");
      })
    }else if("Self_Yestoday"==status||"Friend_Yestoday"==status||"Friend_Today_Old"==status){
      $(".p7").removeClass("s1 s1-1 s2 s2-1 s3").addClass("s2 s2-1").show();
      $(".pn-phonepct").show();
      reflushFlow();
      p6listContInit();
      $(".p-chip").removeClass("c2").addClass("c3");
      $(".pn-battery").addClass("green");

      $(".p7-btn3").unbind("tap").tap(function(){
        status="Self_First";
        changeToSelf=true;
        $(".p-chip").removeClass("c2 c3");
        $(".p7").removeClass("s1 s1-1 s2 s2-1 s3").hide();
        initp1();
        $(".p6-list").empty();
        //$(".p1-btn").triggerHandler("tap");
      })
    }else if("Self_Today_Old"==status){
      if(gamedata.data.length==0){
        $(".p7").removeClass("s1 s1-1 s2 s2-1 s3").addClass("s1").show();
      }else{
        $(".p7").removeClass("s1 s1-1 s2 s2-1 s3").addClass("s1 s1-1").show();
      }
      $(".p-chip").removeClass("c2").addClass("c3"); 
      $(".pn-battery").addClass("green");
      initp7();
    }else if("Self_First"==status){
      initp1();
    }else{
      initp1();
    }
  })
})
function p6listContInit(){
  var friendNum=gamedata.data.length;
  var p6listhtml="";
  for(var i=0;i<friendNum;i++){
    p6listhtml+="<li>";
    p6listhtml+='<img src="'+gamedata.data[i].friendphoto+'" width="32" height="32" alt="" class="p6-item-icon">';
    //if(gamedata.data[i].friendscore>0){
    p6listhtml+='<p><span class="p6-item-t1">'+trimName(gamedata.data[i].friendname)+'</span>已把手摇断，多贡献了<span class="p6-item-t2">'+Math.floor(100*gamedata.data[i].friendscore/TotalCount)+'%</span>的电量</p>';
    // }else{
    //   p6listhtml+='<p><span class="p6-item-t1">'+trimName(gamedata.data[i].friendname)+'</span>不小心摔坏了手机，减少了<span class="p6-item-t2">'+Math.floor(100*gamedata.data[i].friendscore/TotalCount)+'%</span>的电量</p>';
    // }
    p6listhtml+="</li>"
  }
  $(".p6-list").html(p6listhtml);
  if(friendNum>3){
    $(".p6-list").removeClass("hide");
    $(".p6-listHolder").addClass("loop").css({
      "-webkit-animation-duration":(1.8+(friendNum-3)*.3)+"s",
      "animation-duration":(1.8+(friendNum-3)*.3)+"s"
    })
  }else{
    $(".p6-list").eq(1).addClass("hide");
    $(".p6-listHolder").removeClass("loop");
  }
}
function trimName(str){
  if(str.length>6){
    var newstr=str.replace(/(^\S{3})([\s\S]+)(\S{3}$)/,function(){
      return arguments[1]+"…"+arguments[3];
    })
    return newstr;
  }else{
    return str;
  }
}
function initp1(){
  $(".p0").show();
  mySwiper=mySwiper?mySwiper:new Swiper(".swiper-container",{
    initSlide:1,
    onTouchEnd:function(cmd){
      switch(cmd.activeIndex){
        case 0:
        cmd.unlockSwipeToNext();
        break;
        case 1:
        cmd.lockSwipeToNext();
        $(".p-chip").removeClass("c3");
        break;
        default:
        break;
      }
    }
  });
  $(".p1-gift").unbind("tap").tap(function(){
    $(".p-chip").addClass("c3");
    mySwiper.slideTo(0,function(){
      mySwiper.unlockSwipeToNext();
    })
  })
  $(".p1-btn").unbind("tap").tap(function(){
    $(".p2").show()
    $(".p0").hide()
    $(".p-chip").removeClass("c2 c3").hide();
    initp2();
  }) 
}
function initp2(){
  $(".p-chip").removeClass("c3").addClass("c2");
  if("Self_First"==status){
    $(".pn-battery").removeClass("green")
  }else{
    $(".pn-battery").addClass("green")
  }
  setTimeout(function(){
    setTimeout(function(){
      setTimeout(function(){
        setTimeout(function(){
          setTimeout(function(){
            setTimeout(function(){
              setTimeout(function(){
                setTimeout(function(){
                  setTimeout(function(){
                    setTimeout(function(){
                      flowTo(ScrocePct);
                      $(".p2-checkbty").show();
                    },400);//电量上涨
                    $(".p2-pacelight").hide();
                    $(".p2-phone").addClass("charge");
                  },150)//电击光灭 电话被电击
                  $(".p2-pace").removeClass("electric").addClass("electricOut");
                  $(".pn-timertip3").addClass("show");
                },1100)//电击光闪
                bgm.pause();
                playSnd("ding");

                _count=count>shakemax?shakemax:count;
                //_count=2;//记得删除
                //alert(_count+"__"+(TotalCount*.1))
                if(!("Self_First"==status&&_count<TotalCount*.1)){
                  if("Self_First"==status){
                    CurCount=_count;
                  }else{
                    if(CurCount+_count>TotalCount){
                      _count=TotalCount-CurCount;
                    }
                    //alert("_count: "+_count+",CurCount: "+CurCount)
                    gamedata.data.push({
                      friendid: gamedata.currentid,//朋友微信id
                      friendname: gamedata.currentname,//昵称
                      friendphoto: gamedata.currentphoto,//头像
                      friendscore: _count //游戏成绩
                    });
                    
                    var _postObj={
                      gameid:gamedata.gameid,//游戏id【唯一】 非必填. //未填写代表创建者，由服务器创建后回传供分享用， //填写代表朋友
                      userid:gamedata.currentid,//微信id 必填 
                      username:gamedata.currentname,//微信昵称: 必填
                      userphoto:gamedata.currentphoto,//头像 必填
                      usermobile: null,//手机号，11位  必填
                      userscore:_count,//摇晃次数: 必填
                      userrandom:0
                    }
                    $.post("submit_project.php",_postObj,function(data){
                      //alert("_postObj_helpOthers: "+JSON.stringify(_postObj))
                      //alert("friendDataLoad_helpOthers: "+JSON.stringify(data));
                      data=$.parseJSON(data)
                      if(data.result==1){
                        var _gameid=data.gameid; //服务器创建，供分享用
                      }else if(data.result==0){}
                    })
                    
                    CurCount+=_count;
                  }
                  if(CurCount>TotalCount){
                    CurCount=TotalCount;
                  }
                  ScrocePct=CurCount/TotalCount;
                  replay=false;
                }else{
                  replay=true;//如果自己的成绩没过10%；
                }

              },1000)//STOP 起搏器上 充电线上
            },1000)//1
          },1000)//2
          deviceShake();
          $(".pn-timertip2").removeClass("show");
          $(".pn-processor").addClass("timeStart");
          $(".p2-pace").addClass("electric");
          setTimeout(function(){$(".p2-pacelight").show();},600);
        },1000)//3
        $(".pn-timertip2").addClass("show");
        $(".pn-timertip1").removeClass("show");
      },2500)//GO!
      setTimeout(function(){$(".pn-timertip1").addClass("show");},1000)
      $(".p2-helper").addClass("animOut");
      $(".p2-view,.p2-pacemaker1,.p2-pacemaker2,.pn-chargeline").show();
    },1500)//ready,helper
    $(".p-chip").show();
    flowTo(0,"",0);
  },200)//碎片

  $(".p2-checkbty").unbind("tap").tap(function(){
    if(!replay){
      resetp2();
      $(".p2").hide();
      initp7();
      $(".p7").show();
    }else{
      $(".p3container,.pm").show();
      replay=false;
    }
  })
  $(".p3-btn").unbind("tap").tap(function(){
    resetp2();
    $(".p-chip").removeClass("c1 c2");
    $(".p2,.p7,.p3container,.pm").hide();
    //$(".p0").show();
    setTimeout(function(){
      $(".p1-btn").triggerHandler("tap");
      replay=false;
      _count=count=0;
    },10);
    
  })
}
function resetp2(){
  $(".pn-processor").removeClass("timeStart");
  $(".pn-timertip3").removeClass("show");
  $(".p2-pacemaker1,.p2-pacemaker2,.p2-checkbty,.pn-chargeline").hide();
  $(".p2-helper").removeClass("animOut");
  $(".p2-phone").removeClass("charge");
  $(".p2-pace").removeClass("electricOut");
}
function reflushFlow(){
  window.clearTimeout(timeoutId);
  timeoutId=window.setTimeout(function(){
    flowTo(0,"",0);
    setTimeout(function(){flowTo(ScrocePct);},10);
    pctTo(Math.floor(100*ScrocePct));
  },800)
}
var timeoutId;
function initp7(){
  if("Friend_First"==status){
    $(".p7").removeClass("s1 s1-1 s2 s2-1 s3").addClass("s3");
    $(".p6-phone").addClass("p7-phone");
    $(".p6-phone .pn-phonepct").hide();

    $(".p7-btn3").unbind("tap").tap(function(){
      status="Self_First";
      changeToSelf=true;
      $(".p6-phone").removeClass("p7-phone");
      $(".p7").removeClass("s1 s1-1 s2 s2-1 s3").hide();
      $(".p-chip").removeClass("c2 c3");
      $(".p0").show();
      $(".p6-list").empty();
      //$(".p1-btn").triggerHandler("tap");
    })
  }else{
    //$(".p7").removeClass("s1 s1-1 s2 s2-1 s3").addClass("s1");
    
    //if("Self_First"==status)
    if(gamedata.data.length==0){
      $(".p7").removeClass("s1 s1-1 s2 s2-1 s3").addClass("s1").show();
    }else{
      $(".p7").removeClass("s1 s1-1 s2 s2-1 s3").addClass("s1 s1-1").show();
    }
    if(changeToSelf){
      $(".p7").removeClass("s1 s1-1 s2 s2-1 s3").addClass("s1").show();
    }
    $(".pn-phonepct").show();
  }
  reflushFlow();
  p6listContInit();
  
  if("Self_First"==status){
    $(".p6-ct-t1").text(gamedata.currentname);
    $(".p6-ct-t2 span").text(100-Math.floor(100*ScrocePct));
  }else{
    $(".p6-ct-t1").text(gamedata.creatername);
    //alert("_count: "+_count+",CurCount: "+CurCount+",TotalCount:"+TotalCount)
    $(".p6-ct-t2 span").text(100-Math.floor(100*ScrocePct));
  }

  $(".p-chip").removeClass("c2").addClass("c3");
  $(".p7-btn-1").unbind("tap").tap(function(){
    if(numposted){
      $(".p4container,.p-chip,.pm").show();
    }else{
      $(".pm,.p5container").show();
      $(".p-chip").removeClass("c3").addClass("c2").hide();
    }
  })
  $(".p5-btn").unbind("tap").tap(function(){
    if(checkMobile()){
      $(".p5-posting").show();
      $(".p5-btn").hide();
      var _postObj={
        gameid:null,//游戏id【唯一】 非必填. //未填写代表创建者，由服务器创建后回传供分享用， //填写代表朋友
        userid:gamedata.currentid,//微信id 必填 
        username:gamedata.currentname,//微信昵称: 必填
        userphoto:gamedata.currentphoto,//头像 必填
        usermobile: $(".p5-phone").val(),//手机号，11位  必填
        userscore:_count,//摇晃次数: 必填
        userrandom:null
      };
      $.post("submit_project.php",_postObj,function(data){
        data=$.parseJSON(data);
        if(data.result==1){
          $(".p5container").hide();
          $(".p4container,.p-chip").show();
          numposted=true;
          var _gameid=data.gameid; //服务器创建，供分享用
          shareObj.link=timelineShareObj.link="http://game.m.lemall.com/?gameid="+_gameid;
        }else if(data.result==0){}
        
      })
    }
  })
  $(".p4container").unbind("tap").tap(function(){
    $(".p4container,.pm,.p5-posting").hide();
    $(".p6-link,.p5-btn").show();
    location.href="//"+location.hostname+location.pathname+"?userid=404";//自己服务器演示用
  });
}

document.body.addEventListener('touchmove', function(e) {
  e.stopPropagation();
  e.preventDefault();
});
requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(callback) {
  setTimeout(callback, 1000 / 60);
};

function flowTo(pct,ele,dur){
  var minh=43;
  var maxh=423;
  var t=0;
  var d=dur?dur:50;//步长
  var parent=ele?(ele+" "):"";
  var curH=$(parent+".pn-flowbody").height()
  var target=(maxh-minh)*pct+minh;
  //alert("target: "+target+",curH: "+curH+" ,"+$(parent+".pn-flowbody"))
  requestAnimationFrame(function(){
    var _curH=QuartInOut(t,curH,target-curH,d)
    ++t;
    // $("#p-flushlayer").text(_curH)
    $(parent+".pn-flowbody").height(_curH);
    $(parent+".pn-flowtop").css({bottom:_curH});
    if(t>d){
      $("#p-flushlayer").text(_curH)
      $(parent+".pn-flowbody").height(_curH);
      $(parent+".pn-flowtop").css({bottom:_curH});
      return;
    }
    requestAnimationFrame(arguments.callee);
  });
}
function pctTo(num,ele){
  var t=0;
  var d=50;//步长
  var initpct=0;
  var single=0,tens=-1,hundred=1;
  var parent=ele?(ele+" "):"";

  requestAnimationFrame(function(){
    var _curNum=QuartInOut(t,initpct,num,d);
    var num_Str=String(Math.floor(_curNum));
    if(num_Str.length==1){
      $(parent+".single").show();
      $(parent+".tens").hide();
    }else if(num_Str.length>=2){
      $(parent+".single").show();
      $(parent+".tens").show();
      tens=num_Str.substr(-2,1);
    }
    single=num_Str.substr(-1,1);
    if(num_Str!=100){
      $(parent+".hundred").removeClass("show");
    }else{
      $(parent+".hundred").addClass("show").each(function(){
        $(this).css({
          "background-position":"0 -"+parseInt($(this).css("height"))+"px"
        });
      });
    }
    $(parent+".tens").each(function(){
      $(this).css({
        "background-position":"0 "+(-parseInt($(this).css("height"))*parseInt(tens))+"px"
      })
    });
    $(parent+".single").each(function(){
      $(this).css({
        "background-position":"0 "+(-parseInt($(this).css("height"))*parseInt(single))+"px"
      })
    })
    ++t;
    if(t>d){
      return;
    }
    requestAnimationFrame(arguments.callee);
  });
}
function QuartInOut (t,b,c,d){
  if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
  return -c/2 * ((t-=2)*t*t*t - 2) + b;
}
var bgm,isMute=false;
function playSnd(sndname){
  bgm=new Audio();
  bgm.autoplay=true;
  bgm.preload=true;
  bgm.loop=false;
  bgm.src='media/'+sndname+'.mp3';
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

function Swiper(selector,option){
  var _this=this;
  this.container=$(selector);
  this.height=parseInt(this.container.css("height"));
  this.wrapper=$(selector).find(".swiper-wrapper");
  this.slide=this.wrapper.find(".swiper-slide");
  this.speed=option["speed"]?option["speed"]:300;
  this.activeIndex=option["initSlide"]?option["initSlide"]:0;
  this.allowdir={prev:false,next:false};
  this.touches={startX:null,startY:null,currentX:null,currentY:null,diff:null}
  this.wrapper.css({
    "-webkit-transform":"translate3d(0,"+(-this.activeIndex*this.height)+"px,0)",
    "transform":"translate3d(0,"+(-this.activeIndex*this.height)+"px,0)" 
  });
  this.wrapper.on("touchstart",function(e){
    _this.touches.currentX=_this.touches.startX=e.touches[0].clientX;
    _this.touches.currentY=_this.touches.startY=e.touches[0].clientY;
    $(".swiper-wrapper").css({
      "-webkit-transition":"all 0ms",
      "transition":"all 0ms"
    })
  });
  this.wrapper.on("touchmove",function(e){
    _this.touches.currentX=e.touches[0].clientX;
    _this.touches.currentY=e.touches[0].clientY;
    if((_this.allowdir.prev&&_this.touches.currentY-_this.touches.startY>10)||(_this.allowdir.next&&-_this.touches.currentY+_this.touches.startY>10)){
      $(".swiper-wrapper").css({
        "-webkit-transform":"translate3d(0,"+(-_this.activeIndex*_this.height+_this.touches.currentY-_this.touches.startY-10)+"px,0)",
        "transform":"translate3d(0,"+(-_this.activeIndex*_this.height+_this.touches.currentY-_this.touches.startY-10)+"px,0)" 
      });
    }
  }); 
  this.wrapper.on("touchend",function(e){
    if(Math.abs(_this.touches.currentY-_this.touches.startY)>50){
      if(_this.allowdir.prev&&_this.touches.currentY>_this.touches.startY){
        var _activeIndex=_this.activeIndex-1;
        if(_activeIndex>=0){
          _this.slideTo(--_this.activeIndex);
        }else{
          _this.slideTo(_this.activeIndex);
        }
      }else if(_this.allowdir.next&&_this.touches.currentY<_this.touches.startY){
        var _activeIndex=_this.activeIndex+1;
        if(_activeIndex<=_this.slide.length-1){
          _this.slideTo(++_this.activeIndex);
        }else{
          _this.slideTo(_this.activeIndex);
        }
      } else{
        if(_this.allowdir.next&&_this.activeIndex+1<=_this.slide.length-1){
          //_this.slideTo(++_this.activeIndex);
        }else if(_this.allowdir.prev&&_this.activeIndex-1>=0){
          //_this.slideTo(--_this.activeIndex);
        }else{
          _this.slideTo(_this.activeIndex);
        }
      } 

      if(option["onTouchEnd"]){
        option["onTouchEnd"](_this);
      } 
    }
  });
}
Swiper.prototype.lockSwipeToPrev=function(){
  this.allowdir.prev=false;
}
Swiper.prototype.unlockSwipeToPrev=function(){
  this.allowdir.prev=true;
}
Swiper.prototype.lockSwipeToNext=function(){
  this.allowdir.next=false;
}
Swiper.prototype.unlockSwipeToNext=function(){
  this.allowdir.next=true;
}
Swiper.prototype.slideTo=function(idx,func){
  var perH=this.container.height();
  var _this=this;
  _this.activeIndex=idx;
  $(".swiper-wrapper").css({
    "-webkit-transform":"translate3d(0,"+(-idx*perH)+"px,0)",
    "transform":"translate3d(0,"+(-idx*perH)+"px,0)", 
    "-webkit-transition":"all "+_this.speed +"ms",
    "transition":"all "+_this.speed +"ms"
  });
  setTimeout(function(){
    $(".swiper-slide").eq(idx).addClass("curslide").siblings().removeClass("curslide");
    if(func){
      func();
    }
  },this.speed);
}
function deviceRotate(){
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', deviceOrientationHandler, false);
  } else {
    //alert("您的设备不支持运动传感");
  } 
}
var cur=0;
function deviceOrientationHandler(eventData){
  if(eventData.gamma){
    var angle=eventData.gamma/5;
    var maxangle=10;
    targetAngle=angle>maxangle?maxangle:(angle<-maxangle?-maxangle:angle);
    cur+=(targetAngle-cur)/5
    $(".p-chiproll").css({
      "-webkit-transform":"rotateY("+(-cur)+"deg)",
      "transform":"rotateY("+(-cur)+"deg)"
    })
  }
}
var isShakeListening=false;
function deviceShake() {　　
  count=0;
  isShaking=true;
  playSnd("kaka");
  
  /* 运动失灵polyfill */
  $('.p2-phone').click(function(){
    count++;
  })
  /* 运动失灵polyfill */

  if(!isShakeListening){
    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', deviceMotionHandler, false);　
      isShakeListening=true;　　　　
    } else {
      alert("您的设备不支持运动传感");
    }
  }
}

var SHAKE_THRESHOLD = 1150;
var last_update = 0;
var x;
var y;
var z;
var last_x;
var last_y;
var last_z;
var onyaoyao = false;
var count = 0;

function deviceMotionHandler(eventData) {
  var acceleration = eventData.accelerationIncludingGravity;
  var curTime = new Date().getTime();　　
  var diffTime = curTime - last_update;

  if (diffTime > 100) {　　　　
    last_update = curTime;　　
    x = acceleration.x;
    y = acceleration.y;
    z = acceleration.z;
    var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;　　　
    if (speed > SHAKE_THRESHOLD) {　　　
      count++;
      //$("#h1").text(count)
    }　　　
    last_x = x;　　　　
    last_y = y;　　　　
    last_z = z;　　
  }
}
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
};
function checkMobile(){ 
  var sMobile =$(".p5-phone").val(); //document.msgform.phone.value 
  //if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))){ 
  if(!(/^1\d{10}$/.test(sMobile))){ 
    alert("手机号有误，请输入正确手机号码"); 
    $(".p5-phone").focus(); 
    return false; 
  } else{
    return true;
  }
} 