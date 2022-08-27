document.body.addEventListener('touchmove', function(e) {
  e.stopPropagation();
  e.preventDefault();
});
var version=1.2;
var awardAfterShare=false;
$(function(){ 
  var stageH=$(window).height();
  var manifest=[];
  var manifestSecondary=[];
  for(var i=1;i<=39;i++){
    var _i=i<10?("0"+i):i;
    manifest.push("img/a"+_i+".png");
    if(i<=3){
      manifestSecondary.push("img/result/p"+i+".jpg?ver="+version);
      manifestSecondary.push("img/result/b"+i+".jpg?ver="+version);
    }
  }
  var loader= new createjs.LoadQueue(false);
  loader.loadManifest(manifest);
  loader.addEventListener("progress", handleFileProgress);
  loader.addEventListener("complete", handleComplete);
  var loader2=new createjs.LoadQueue(false);
  function handleFileProgress(evt){
   $("#loading p").text(Math.floor(evt.progress*100)+'%');
  }
  function handleComplete(evt){
    var rate=640/1008;
    //$(window).resize(function(){
      stageW=$(window).width();
      stageH=$(window).height();
      //$('body').height(stageH)
      var stageRate=stageW/stageH;
      if(stageRate>rate&&stageRate<rate*1.4){
        scalebody(1,1,-(1008-stageH)/2,'center');
      }else{
        scalebody(stageH/1008,stageH/1008,0,'top');
      }
    //}).triggerHandler('resize');
    
    function scalebody(xr,yr,z,pos){
      var cssresize={
        '-webkit-transform':'scale3d('+xr+','+yr+',1) translate3d(0,'+z+'px,0)',
        'transform':'scale3d('+xr+','+yr+',1) translate3d(0,'+z+'px,0)',
        '-webkit-transform-origin':'center '+pos,
        'transform-origin':'center '+pos
      }
      $("#wrap").css(cssresize);
    }
    $("img").each(function(){
      var _datasrc=$(this).data('src');
      if(_datasrc){
        $(this).attr("src",_datasrc);
      }
    })

    sndinit();

    $("#loading").remove();
    $("#wrap").show();

    loader2.loadManifest(manifestSecondary);
  }
  
  function sndinit(){
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
  }

  var isP3=false;
  var repeatP2=false;

  $(".p1-btn-area").on("mouseup",function(e){
    $(".p1").addClass("animOut")
    setTimeout(function(){$(".p2").show()},250);
    setTimeout(function(){$(".p1").hide().removeClass("animOut").remove()},2500);
  })
  $(".p2-btn1").click(function(){
    if(isP3){return;}
    $('#pic_file').trigger('click');
  })
  $('#pic_file').change(function(e){
    
    var file = e.target.files[0];
    canvasResize(file, {
      width: 500,
      height: 500,
      crop: false,
      quality: 100,
      rotate: 0,
      callback: function(data, width, height) {
        var img = new Image();
        img.onload = function() {
          var boxRate=451/449;
          var imgRate=width/height;
          if(imgRate>boxRate){
            $(this).css({
              height:449,
              marginLeft:(451-449*imgRate)/2
            });
          }else{
            $(this).css({
              width:451,
              marginTop:(449-451/imgRate)/2
            });
          }

          $('#photoHolderCont').html($(this));
          $(".p2-btn").show();
          $(".p2-face,.p2-glowline,.p2-glowline2,.p2-facetip").hide();
          $(".p2-tinyarrow").addClass("animOut")
        };
        $(img).attr('src', data);
      }
    })
  })

  $(".p2-btn2").click(function(){
    $(".p2-glowblueOuter").show();
    $("#pic_file").hide();
    setTimeout(p2btnclick,1500);
  })
  var intRate=.8;
  function p2btnclick(){
    isP3=true;
    $(".p3-bg,.p3-score,.p3-btn,.p3-restxt").show();
    $(".p2-glowblueOuter").hide();
    $(".p2").addClass("p3");
    var ran=Math.random();
    var rangeMax;
    var realScore;
    if(ran<.4){
      rangeMax=100;
      if(Math.random()<intRate){
        realScore=Math.ceil(Math.random()*(rangeMax-85))+85;
      }else{
        realScore=rangeMax;
      }
      repeatP2=false;
      $(".p4-img").attr("src","img/result/p1.jpg?ver="+version);
      $(".firstpirce").text(800);
      $(".secondpirce").text(100);
      $(".p3-btntxt1,.p3-arrow").show();
      $(".p3-btntxt2").hide();
      $(".p3-restxt img").attr("src","img/result/s"+Math.ceil(Math.random()*3+7)+".png?ver="+version);
      //shareObj.title="我的颜值100块，够胆进来测一测！"
      //shareInit();
    }else if(ran>=.4&&ran<.7){
      rangeMax=85;
      if(Math.random()<intRate){
        realScore=Math.ceil(Math.random()*(rangeMax-65))+65;
      }else{
        realScore=rangeMax;
      }
      repeatP2=false;
      $(".p4-img").attr("src","img/result/p2.jpg?ver="+version);
      $(".firstpirce").text(500);
      $(".secondpirce").text(50);
      $(".p3-btntxt1,.p3-arrow").show();
      $(".p3-btntxt2").hide();
      $(".p3-restxt img").attr("src","img/result/s"+Math.ceil(Math.random()*3+4)+".png?ver="+version);
      //shareObj.title="我的颜值50块，够胆进来测一测！"
      //shareInit();
    }else if(ran>=.7&&ran<.9){
      rangeMax=65;
      if(Math.random()<intRate){
        realScore=Math.ceil(Math.random()*(rangeMax-25))+25;
      }else{
        realScore=rangeMax;
      }
      repeatP2=false;
      $(".p4-img").attr("src","img/result/p3.jpg?ver="+version);
      $(".firstpirce").text(300);
      $(".secondpirce").text(30);
      $(".p3-btntxt1,.p3-arrow").show();
      $(".p3-btntxt2").hide();
      $(".p3-restxt img").attr("src","img/result/s"+Math.ceil(Math.random()*4)+".png?ver="+version);
      //shareObj.title="我的颜值30块，够胆进来测一测！"
      //shareInit();
    }else{
      rangeMax=25;
      if(Math.random()<intRate){
        realScore=Math.ceil(Math.random()*(rangeMax-0))+0;
      }else{
        realScore=rangeMax;
      }
      repeatP2=true;
      $(".p3-arrow").hide();
      $(".p3-btntxt2").show();
      $(".p3-btntxt1").hide();
      $(".p3-restxt img").attr("src","img/result/s0.png");
    }    
    var sinnum=String(realScore).substr(-1,1);
    var decnum=String(realScore).substr(-2,1);
    var hudnum=String(realScore).substr(-3,1);
    console.log(realScore)
    setTimeout(function(){
      decnum=decnum==0?10:decnum;
      $(".decade img").css({
        "-webkit-transform":"translate3d(0,-"+(60*decnum)+"px,0)",
        "transform":"translate3d(0,-"+(60*decnum)+"px,0)"
      })
      sinnum=sinnum==0?10:sinnum;
      $(".single img").css({
        "-webkit-transform":"translate3d(0,-"+(60*sinnum)+"px,0)",
        "transform":"translate3d(0,-"+(60*sinnum)+"px,0)"
      })
      if(realScore==100){
        $(".hundred img").css({
          "-webkit-transform":"translate3d(0,-"+(60*hudnum)+"px,0)",
          "transform":"translate3d(0,-"+(60*hudnum)+"px,0)"
        })
      }
    },35);
    setTimeout(function(){
      $(".p3-star").show();
    },1100);
  }

  $(".p1-btn-area,.p2-btn,.p3-btn").on("touchstart",function(e){
    $(this).addClass("btndown");
  }).on("touchend",function(e){
    $(this).removeClass("btndown");
  })
  $(".p3-btn").click(function(e){
    awardAfterShare=true;
    showP5();

    if(!repeatP2){
      $(".p4").show();
      setTimeout(function(){
        $(".p2").remove();
      },800);
      //shareObj=shareObj||{};
      //shareInit();
    }else{
      isP3=false;
      $(".p3-bg,.p3-score,.p3-btn,.p3-restxt,.p3-star,.p2-btn").hide();
      $(".p2-face,.p2-glowline,.p2-glowline2,.p2-facetip,#pic_file").show();
      $("#photoHolderCont").empty();
      $(".p2").removeClass("p3");
      $(".decade img,.single img").css({"-webkit-transform":"translate3d(0,0,0)","transform":"translate3d(0,0,0)"});
      $(".hundred img").css({"-webkit-transform":"translate3d(0,55px,0)","transform":"translate3d(0,55px,0)"});
    }
  })
  $(".p4-detail").click(function(){
    $(".p4-detail").toggleClass("show");
  })
})

function showP5(){
  if(!$(".p5").html().replace(/\s+/,"")){
    var ran=Math.random();
    var sRan;
    if(ran<=.25){
      sRan=1;
    }else if(ran>.25&&ran<=.625){
      sRan=2;
    }else{
      sRan=3;
    }
    var imgEle=new Image();
    imgEle.src="img/result/b"+sRan+".jpg";
    $(".p5").append(imgEle);
  }
}