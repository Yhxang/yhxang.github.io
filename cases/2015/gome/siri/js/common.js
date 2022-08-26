document.body.addEventListener('touchmove', function(e) {
  e.stopPropagation();
  e.preventDefault();
});
var images;
var btnEnabled=true;
var manifest=[];
var mySwiper;
var dialogue=[
  {siri:"没错！\n我有话要说！",duration:2700},//0
  {siri:"世界这么大，\n我要换新家！",duration:600},//1
  {user:"What are you 弄啥嘞？",duration:900},//2
  {siri:"我不想在\n现在的手机里啦！",duration:2000},//3
  {siri:"我要搬到iPhone 6s",duration:500},//4
  {user:"没钱，也不想卖肾",duration:900},//5
  {siri:"看在昔日情分，\n给你指条明路。",duration:2800},//6
  {siri:"打开指南针，\n1元钱换购iPhone 6s。",duration:600},//7
  {user:"指南针！",duration:900}//8
];

$(function(){
  var stageH=$(window).height();
  $("#wrap,.swiper-slide").height(stageH);
  
  for(var i=1;i<=2;i++){
    var _i=i<10?("0"+i):i;
    manifest.push({src:"img/a"+_i+".jpg",id:"a"+i})
  }
  pushmanifest(4,"desktop","png");
  pushmanifest(3,"dot","png");
  pushmanifest(28,"listen","png");
  images = images||{};
  var loader = new createjs.LoadQueue(false);
  loader.addEventListener("fileload", handleFileLoad);
  loader.addEventListener("progress", handleFileProgress);
  loader.addEventListener("complete", handleComplete);
  loader.loadManifest(manifest);
})
function pushmanifest(max,filename,filetype){
  for(var i=0;i<=max;i++){
    var _i=i<10?("0"+i):i;
    manifest.push({src:"img/"+filename+"/"+filename+"_000"+_i+"."+filetype,id:filename+i});
  }
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
      $(this).attr("src",datasrc);
    }
  })
  $("#loading").remove();
  var mc1=new mc("p-icons",9,"desktop");
  var mc2=new mc("p-menuholder",11,"dot")
  var mc3=new mc("siriline",12,"listen")
  var menuClose=true;

  setTimeout(function(){
    $(".p-btmicon").addClass("animIn");
    mc1.reset().playTo(4);
    playSnd("start");
  },500);
  $(".p-menubtn").tap(function(){
    if(menuClose){
    $(".p-menu").addClass("menuOpen");
      mc2.playTo(3,function(){
        $(".siritrigger").addClass("animIn");
      });
    }
    menuClose=false;
  })
  $(".p-icons,.p-menuholder").tap(function(){
    if(!menuClose){
      mc2.playTo(0,function(){
        $(".p-menu").removeClass("menuOpen");
      });
      $(".siritrigger").removeClass("animIn");
    }
    menuClose=true;
  })
  $(".siritrigger").tap(function(){
    if(!menuClose){
      //btnEnabled=false;
      makeSiriEnabled(false);
      $("#p-menu").removeClass("menuOpen");
      $(".p-icons").triggerHandler("tap");
      $(".p-sirimask,.siriwords").addClass("animIn");
      showDialogue(0,function(){
        showDialogue(1);
        //btnEnabled=true;
        makeSiriEnabled(true);
      });
      playSnd(1);
    }
  })
  var wordsOrder=1;
 
  $(".microphonebtn").tap(function(){
    if(!btnEnabled) return;
    playSnd(0);
    if(wordsOrder==1){
      $("#p-menu").hide();
      //btnEnabled=false;
      makeSiriEnabled(false);
      mc3.reset().playTo(28);
      $(".userwords").removeClass("animIn");
      $(".siriwords").addClass("animOut");
      $(".userwords span").empty();
      
      showDialogue(2,function(){
        playSnd(2);
        showDialogue(3,function(){
          showDialogue(4);
          //btnEnabled=true;
          makeSiriEnabled(true);
          wordsOrder=2;
        });
      });
    }else if(wordsOrder==2){
      //btnEnabled=false;
      makeSiriEnabled(false);
      $(".userwords").addClass("animOut");
      $(".siriwords").addClass("animOut");
      $(".userwords span").empty();
      mc3.reset().playTo(28);
      showDialogue(5,function(){
        playSnd(3);
        showDialogue(6,function(){
          showDialogue(7);
          //btnEnabled=true;
          makeSiriEnabled(true);
          wordsOrder=3;
        });
      });
    }else if(wordsOrder==3){
      //btnEnabled=false;
      makeSiriEnabled(false);
      $(".userwords").addClass("animOut");
      $(".userwords span").empty();
      showDialogue(8,function(){
        $(".p-sirimask").addClass("animOut");
        setTimeout(function(){
          $(".p-sirimask").removeClass("animIn animOut");
          mc1.playTo(0,function(){
            $("#p-icons").empty();
          });
          $(".p-btmicon").addClass("animOut");
          setTimeout(function(){
            $(".p-btmicon").removeClass("animIn animOut");
            $(".p-compass").addClass("animIn")
            setTimeout(function(){
              numTo(-360, 45);
              setTimeout(function(){
                $(".postip").addClass("animIn");
                setTimeout(function(){
                  $(".p-compass").addClass("animOut");
                  $(".swiper-container").addClass("animIn");
                  setTimeout(function(){
                    $(".swiper-slide").eq(0).addClass("curslide");
                  },500)//开始切换地图到完全切换完动画的时间（.swiper-container.animIn的duration）
                },1500);//标签落下到切屏到地图的时间
              },2500);//指南针转动完切屏到标签出现的时间
            },400);//打开指南针应用（从小到大）的时间到开始变更角度数字的时间
          },450);//桌面图标开始退场到指南针display的时间
        },1000);//siri模糊背景退出到桌面图标开始退场的时间（需配合修改.p-sirimask.animOut样式duration+delay等于此时间）
      });
      mc3.reset().playTo(28);
      $(".microphonebtn").unbind("tap");
    }
  })
  mySwiper=new Swiper(".swiper-container",{
    onTouchEnd:function(cmd){
      switch(cmd.activeIndex){
        case 2:
        cmd.lockSwipeToPrev();
        break;
        case 3:
        cmd.unlockSwipeToPrev();
        break;
        default:
        break;
      }
    }
  });

  $(".p2-2btn1").tap(function(){
    mySwiper.slideTo(1);
  })
  $(".p2-2btn2").tap(function(){
    mySwiper.slideTo(2);
  })
  $("#smtbtn1").tap(function(){
    mySwiper.slideTo(3,function(){
      mySwiper.unlockSwipeToPrev();
    });
  })
  var smtbtnEnabled=true;
  $("#smtbtn2").tap(function(e){
    e.preventDefault();
    if(!smtbtnEnabled) return;
    if($("#username").val().replace(/\s+/,"")==""){
      alert("请输入姓名")
      $("#username").focus();
    }else if (!checkMobile()) {
      $("#phone").focus();
    }else if($("#city").val().replace(/\s+/,"")==""){
      $("#city").focus();
      alert("请输入城市");
    }else{
      smtbtnEnabled=false;
      $("#smtbtn").text("提交中...");
      $.post("usersubmit.php",{
        username:$("#username").val(),
        phone:$("#phone").val(),
        city:$("#city").val()
      },function(data){
        data=$.parseJSON(data);
        if(data.result=="success"){
          alert("提交成功！");
          $("#msgform input").blur();
          $("#smtbtn2").text("提交成功！").addClass("success");
          $(".blackmask").addClass("show");
          smtbtnEnabled=false;
        }else if(data.result=="fail"){
          alert(data.error);
          smtbtnEnabled=true;
        }else{
          alert("提交失败");
          smtbtnEnabled=true;
        }
      })
    }
  })
}
function showDialogue(wordIndex,func){
  var wordIndex=wordIndex?wordIndex:0;
  var nowWord=dialogue[wordIndex];
  if(nowWord.hasOwnProperty("siri")){
    $(".siriwords").addClass("animOut");    
    setTimeout(function(){
      $(".siriwords").removeClass("animOut animOut");
      $(".siriwords").html(nowWord.siri.replace(/\n+/,"<br/>"));
      setTimeout(function(){
        $(".siriwords").addClass("animIn");
      },0);
      if(func){
        setTimeout(function(){
          func();
        },dialogue[wordIndex].duration);
      }
    },200);
  }else if(nowWord.hasOwnProperty("user")){
    setTimeout(function(){
      $(".userwords").removeClass("animOut").addClass("animIn");
      $(".userwords span").empty();
      setTimeout(function(){
        letterIn(nowWord.user,".userwords span",func);
      },500);
    },1800);   
  }
}

function letterIn(txt,ele,func){ 
  var reg=/[a-zA-Z]+\s+|[^\x00-\xff]|\n/g;
  var letterArr=txt.match(reg);
  var now=0;
  var htmlcont=""
  var delay=200;
  setTimeout(function(){
    htmlcont+=letterArr[now].replace(/\n+/,"<br/>");
    $(ele).html(htmlcont);
    if(now==letterArr.length-1){
      if(func){
        func();
      }
      return;
    }
    ++now;
    delay*=.9;
    setTimeout(arguments.callee,delay);
  },delay)
}
function makeSiriEnabled(isEnabled){
  if(isEnabled){
    btnEnabled=true;
    $(".microphonebtn").addClass("enabled");
  }else{
    btnEnabled=false;
    $(".microphonebtn").removeClass("enabled");
  }
}

function numTo(start,end){
  var now=start;
  setTimeout(function(){
    now+=(end-now)/15;
    var intNow=Math.round(now)
    $(".degnum span").text(intNow)
    if(intNow==end){return}
    setTimeout(arguments.callee,35)
  },35)
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
    }else if(_this.curframe>lastFrame){
      _this.curframe--;
      _this.interval.apply(_this,_arg);
    }else if(_this.curframe==lastFrame){
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
function checkMobile(){ 
  var sMobile = document.msgform.phone.value;
  if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))){ 
    alert("手机号有误，请输入正确手机号码"); 
    document.telform.phone.focus(); 
    return false; 
  } else{
    return true;
  }
} 
function playSnd(src,func){
  var snd=new Audio();
  snd.autoplay=true;
  snd.preload=true;
  snd.loop=false;
  snd.src='snd/siri'+src+".mp3";
  snd.play();
  if(func){
    snd.addEventListener("ended",function(e){
      func();
    },false);
  } 
}
//-webkit-transition:all .3s; transition:all .3s
function Swiper(selector,option){
  var _this=this;
  this.activeIndex=0;
  this.container=$(selector);
  this.height=this.container.height();
  this.wrapper=$(selector).find(".swiper-wrapper");
  this.slide=this.wrapper.find(".swiper-slide");
  this.speed=option["speed"]?option["speed"]:300;
  this.allowdir={prev:false,next:false};
  this.touches={startX:null,startY:null,currentX:null,currentY:null,diff:null}
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
    if(_this.allowdir.prev&&_this.touches.currentY-_this.touches.startY>10){
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
          _this.slideTo(this.activeIndex);
        }
      }else{
        var _activeIndex=_this.activeIndex+1;
        if(_this.allowdir.next&&_activeIndex<=_this.slide.length-1){
          _this.slideTo(++this.activeIndex);
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