$.fn.extend({
  mctap:function(func){
    var _this=this;
    this.on('touchstart',function(e){
      tiptimer=new Date();
    }).on('touchend',function(e){
      if(new Date()-tiptimer<150) {func.bind(this,e)();}
    })
  }
})
var canvas, stage, exportRoot0, exportRoot, w, h, game, loader,bgimg;
document.addEventListener("DOMContentLoaded",function(event){
  w=$(window).width();
  h=$(window).height();
  init();
  $("#msgbtn").mctap(function(evt){
    var _mobile=$("#phone").val();
    $("#phone").blur();
    if(!(/^1\d{10}$/.test(_mobile))){
      alert("请输入正确的手机号")
    }else{
      // $.post('submit.php',{
      //   mobile:_mobile,
      //   media:querymedia()
      // },function(data){
      //   if(1==data.result){
      //     $(".pop").hide();
      //     $(".bmask,.pop2").show();
      //     $(".sharetip").show();
      //   }else if(2==data.result){
      //     $('.pop').hide();
      //     $(".bmask,.pop4").show();
      //   }
      // },'json');
      $(".pop").hide();
      $(".bmask,.pop2").show();
      $(".sharetip").show();
    }
  })
  $(".pop2close").mctap(function(){
    $(".bmask,.pop").hide();
  })
  $(".pop4close").mctap(function(){
    $(".bmask,.pop").hide();
  })
  $(".pop2link").mctap(function(){
    $(".pop").hide();
    $(".bmask,.pop3").show();
  })

  $(".pop3close").mctap(function(){
    $(".pop").hide();
    $(".bmask,.pop2").show();
    $(".sharetip").show();
  })

  $(".pop2surprise").mctap(function(){
    $("#canvas,.bmask,.pop2,.logol,.logor").hide();
    $(".youhuiquan").show().scrollTop(0);
    $(".sharetip").hide();
  })
  // $(".yhq-link-holder").mctap(function(){
  //   createjs.Tween.get(exportRoot.p2).to({y:0},450,createjs.Ease.getPowInOut(4)).call(function(){
  //     exportRoot.removeChild(exportRoot.p1);
  //   });
  //   $(".youhuiquan,.yhq-link-holder").hide();
  //   initP2();
  //   exportRoot.p2.role.gotoAndPlay(2);
  // })
  window.onorientationchange = onorifun;
  function onorifun(e) {
    if(typeof window.orientation=='undefined'||window.orientation==0){
      $("#orientLayer").removeClass("show");
    } else {
      $("#orientLayer").addClass("show");
    }
  };
  onorifun();
})
var __numItems;
function init(){
  document.getElementById('wrapper').style.height=h+'px';
  //createjs.MotionGuidePlugin.install();//路径动画
  canvas = document.getElementById("canvas");
  canvas.setAttribute("width", w);
  canvas.setAttribute("height", h);
  images = images||{};
  ss=ss||{};
  loader = new createjs.LoadQueue(false);
  loader.addEventListener("fileload", handleFileLoad);
  loader.addEventListener("complete", handleComplete);
  // for(var i=0;i<lib.properties.manifest.length;i++){
  //   lib.properties.manifest[i].src="../../"+lib.properties.manifest[i].src;
  //   if(lib.properties.manifest[i].id=="a09"){
  //     __numItems=i+1;
  //   }
  // }
  loader.loadManifest(lib.properties.manifest);
  bgimg=new Image();
  bgimg.src="images/a07.png";
}

function handleFileLoad(evt) {
  if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
  var _num=Math.floor(100 * evt.target._numItemsLoaded / evt.target._numItems);
  //var _num=Math.floor(100 * evt.target._numItemsLoaded / __numItems);
  $("#lnum").text(_num<10?("0"+_num+"%"):(_num+"%"))
  //if(_num==100) showCont();
}
function handleComplete(evt) {
  showCont(evt);
  $("img").each(function(){
    $(this).attr("src",$(this).data("src"));
  })
}
function showCont(evt){
  $(".loadingarea").remove();
  $(".wrap").show();

  var queue = evt.target;
  var ssMetadata = lib.ssMetadata;
  for(i=0; i<ssMetadata.length; i++) {
    ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
  }

  exportRoot = new lib.conts();
  stage = new createjs.Stage(canvas);

  createjs.Touch.enable(stage);
  stage.addChild(exportRoot);
  exportRoot.p2.y= -h;
  exportRoot.p2.bg.height=h;
  stage.update();

  createjs.Ticker.setFPS(lib.properties.fps);
  createjs.Ticker.addEventListener("tick", stage);
}
function drawline(){
  var p1=exportRoot.p1;
  var pt1=exportRoot.p1.p1_toppoint;
  var pt2=exportRoot.p1.p1_switch;
  var shape = new createjs.Shape();
  
  shape.graphics.beginStroke("#fff").setStrokeStyle(5).moveTo(pt1.x, pt1.y).lineTo(pt2.x, pt2.y);
  p1.addChild(shape);

  pt2.addEventListener('mousedown',function(evt){
    createjs.Tween.get(exportRoot.p1).to({y:10},400);
    //createjs.Tween.get(exportRoot.p2).to({y:-h+20},500,createjs.Ease.getPowInOut(4));
    createjs.Tween.get(exportRoot.p1.p1_arrow).to({alpha:0},200);
    createjs.Tween.get(exportRoot.p1.p1_tiptxt).to({alpha:0},200);
  })
  pt2.addEventListener('pressmove',function(evt){
    evt.currentTarget.x=evt.stageX;
    evt.currentTarget.y = evt.stageY;
    shape.graphics.clear().beginStroke("#fff").setStrokeStyle(5).moveTo(pt1.x, pt1.y).lineTo(pt2.x, pt2.y);
    stage.update();
  })
  pt2.addEventListener("pressup", function (evt) {
    var target = pt2.getObjectUnderPoint(evt.rawX, evt.rawY, 0);
    createjs.Tween.get(p1).to({y:h},520,createjs.Ease.getPowInOut(4));
    //$(".youhuiquan").show();
    createjs.Tween.get(exportRoot.p2).to({y:0},450,createjs.Ease.getPowInOut(4)).call(function(){
      exportRoot.removeChild(exportRoot.p1);
    });
    initP2();
    exportRoot.p2.role.gotoAndPlay(2);
  });
}
function initP2(){
  var s=new createjs.Shape();
  //var bgimg=loader.getResult("a07");
  s.graphics.beginBitmapFill(bgimg,'repeat').drawRect(0,0,640,h);
  exportRoot.p2.bg.addChild(s);
  exportRoot.p2.role.y=.5*h;
}
function resizep3(){
  if(h<(1136-60*2)){
    exportRoot.p2.role.p3.title.y= (1136-h)/2;
  }
  $('.wrap').addClass("border");
}
function clkfun(evt){
  $(".bmask,.pop1").show();
}
function checkMobile(){ 
  var sMobile = document.msgform.phone.value;
  if(!(/^1\d*$/.test(sMobile))){ 
    alert("手机号有误，请输入正确手机号码"); 
    document.msgform.phone.focus(); 
    return false; 
  } else{
    return true;
  }
}
function querymedia(){
  var _mediatype=location.pathname.match(/shuangshiyi(\w*)\//)[1];
  _mediatype=_mediatype==''?0:_mediatype;
  return _mediatype;
}