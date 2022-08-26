var canvas, stage, exportRoot0, exportRoot, w, h, game;
var initinfo={};
//var AjaxUrl="//gsactivity.diditaxi.com.cn/gulfstream/activity/v2/h5activity/submitActivity";
var AjaxUrl='submit_activity.php'
var AjaxFlag=1;
var querystr=getQueryString('logo');
var nohslogo=false;
if(querystr!=null) nohslogo=true; 
if(nohslogo){
  document.getElementById("logor").style.display="none";
}
document.addEventListener("DOMContentLoaded",function(event){
  if(nohslogo){ $(".sndbtn").addClass("nologo"); }
  w=$(window).width();
  h=$(window).height();
  init();
  $.ajax({
    //url:"//gsactivity.diditaxi.com.cn/gulfstream/activity/v2/h5activity/initInfo",
    url: "init_info.php",
    type:"get",
    data:{
      g_channel:"hxFootball"
    },
    dataType:"json",
    success:function(data){
      initinfo.timestamp = data.data.timestamp;
      initinfo.rand_num = data.data.rand_num;
      initinfo.g_channel = data.data.g_channel;
      initinfo.sign = data.data.sign
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      alert("对不起，由于网络原因请稍后重试");
    }
  });
  window.onorientationchange = function(e) {
    if (window.orientation != 0) {
      $("#orientLayer").addClass("show");
    } else {
      $("#orientLayer").removeClass("show");
    }
  };
})
function init() {
  document.getElementById("wrapper").style.height = h + "px";
  createjs.MotionGuidePlugin.install();
  canvas = document.getElementById("canvas");
  canvas.setAttribute("width", w);
  canvas.setAttribute("height", h);
  images = images||{};

  var loader = new createjs.LoadQueue(false);
  loader.addEventListener("fileload", handleFileLoad);
  loader.addEventListener("complete", handleComplete);
  loader.loadManifest(lib0.properties.manifest);
  loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
  if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
  var _num=Math.floor(100 * evt.target._numItemsLoaded / evt.target._numItems);
  $("#num").text(_num<10?("0"+_num):_num);
}

function handleComplete(evt) {
  $("#loading").remove();
  exportRoot0= new lib0.cover();
  exportRoot = new lib.game();

  stage = new createjs.Stage(canvas);
  createjs.Touch.enable(stage);
  stage.addChild(exportRoot0);
  exportRoot0.y=2*(h-1136)/3;
  stage.update();

  createjs.Ticker.setFPS(lib.properties.fps);
  createjs.Ticker.addEventListener("tick", stage);
  
  App.btnsInit();
  game=new Game(exportRoot);

  createjs.Sound.alternateExtensions = ["mp3"];
  createjs.Sound.on("fileload", loadHandler);
  createjs.Sound.registerSound("media/bgm.mp3", "sound");
  function loadHandler(event) {
    App.data.bgm = createjs.Sound.play("sound");
    App.data.bgm.on("complete",function(e) {
        App.data.bgm.play();
    });
    App.data.bgm.volume = 0.5;
  }
  $(".sndbtn").click(function(){
    if(App.data.bgm.muted){
      App.data.bgm.muted=false;
      $(this).removeClass("muted");
    }else {
      App.data.bgm.muted = true;
      $(this).addClass("muted");
    }
  })
}
var App={
  game:game,
  data:{
    username: null,
    mobile: null,
    address: null,
    vercode:null,
    hasplayed: false,
    bgm: null,
    award:null
  },
  showGame:function(){
    stage.removeChild(exportRoot0);
    stage.addChild(exportRoot);
    exportRoot.gholder.y=h/2+(1136-h)/2/2;
    exportRoot.panel=(1136-h)/2+75;
  },
  showLogin:function(){
    var mobile = getCookie("mobile");
    if (mobile != null && mobile != "") {
      $(".mobile0").val(mobile);
    }
    $(".pops,.login").show();
  },
  showRule:function(){
    $(".pops,.rule").show();
  },
  showRst:function(score){
    $(".pops,.result").show();
    $(".score").text(score);
    if(App.data.hasplayed){
      $(".hadplay").show();
    }else{
      if(game.score>=5){
        $(".lucky").show();
        AjaxFlag=1;
      }else if(game.score<5){
        $(".pity").show();
      }
    }
  },
  btnsInit:function(){
    $(".ruleclose").click(function(){
      $(".pops,.rule,.rule2").hide();
      $(".rule1").show();
    })
    $(".next").click(function(){
      $(".rule2").show();
      $(".rule1").hide();
    })
    $(".prev").click(function(){
      $(".rule1").show();
      $(".rule2").hide();
    })
    $(".codebtn").click(function(){
      var mobile=$(".mobile0").val();
      if(mobile.replace(/\s+/,"").length!=11){
        $(".loginnomal").hide();
        $(".logincodeerr").hide();
        setTimeout(function(){
          $(".logincodeerr").text("请输入正确的手机号").show();
        },0);
      }else{
        $(".codebtn").hide();
        $.ajax({
          //url:"//gsactivity.diditaxi.com.cn/gulfstream/activity/v2/h5activity/createCode",
          url:"create_code.php",
          type:"get",
          data:{
            g_channel:"hxFootball",
            phone:mobile
          },
          dataType: "json",
          // jsonpCallback: "jsonp",
          success:function(data){
            var totaltime=20;
            $("#codesecnum").text(totaltime);
            $(".CodeBtnArea").addClass("cd");
            $(".codesec").show();
            setTimeout(function(){
              if(--totaltime>=0){
                $("#codesecnum").text(totaltime);
              }else{
                $(".codebtn").show();
                $(".codesec").hide();
                $(".CodeBtnArea").removeClass("cd");
                return;
              }
              setTimeout(arguments.callee,1000);
            },1000);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("对不起，由于网络原因请稍后重试");
            $(".codebtn").show();
          }
        })
      }
    })
    $(".loginbtn").click(function(){
      var mobile=$(".mobile0").val();
      var vercode=$(".vertifycode").val();
      if(mobile.length!==11){
        $(".loginnomal").hide();
        $(".logincodeerr").hide();
        setTimeout(function(){
          $(".logincodeerr").text("请输入正确的手机号").show();
        },0);
        return;
      }else if(vercode.length!=4){
        $(".loginnomal").hide();
        $(".logincodeerr").hide();
        setTimeout(function(){
          $(".logincodeerr").text("请输入正确的验证码").show();
        },0);
      }else{
        $(".logincodeerr").hide();
        App.data.mobile=mobile;
        setCookie("mobile",mobile);
        
        var loginData=App.copyData(initinfo);
        loginData.func="login";
        loginData.phone=mobile;
        loginData.code=vercode;

        if(AjaxFlag){
          ajaxlogin(loginData);
        }
      } 
    })
    function ajaxlogin($data){
      $.ajax({
        url: AjaxUrl,
        type: "get",
        data: $data,
        dataType: "json",
        // jsonpCallback: "jsonp",
        beforeSend: function() {
          AjaxFlag = 0;
        },
        success: function(data) {
          console.log('------', data)
          AjaxFlag = 1;
          if(data.errno==0){
            App.data.vercode=$data.code;
            if(data.count==0){
              $(".login").addClass("animOut");
              setTimeout(function() {
                $(".login").removeClass("animOut").hide();
                $(".pops").hide();
                App.showGame();
                game.config();
              }, 100);
            }else if(data.count==1){
              App.data.hasplayed=true;
              $(".logincodeerr").hide();
              setTimeout(function(){
                $(".logincodeerr").text("此手机号可参与游戏，但无法中奖").show();
              },0);
              $(".loginnomal").hide();
              $(".loginbtn").addClass("douyixia").unbind('click').click(function(){
                $(".login").addClass("animOut");
                setTimeout(function() {
                  $(".login").removeClass("animOut").hide();
                  $(".pops").hide();
                  App.showGame();
                  game.config();
                }, 100);
              });
            }
          }else if(data.errno=="32708"){
            $(".vertifycode").val("");
            $(".logincodeerr").hide();
            setTimeout(function(){
              $(".logincodeerr").text("短信验证码验证失败").show();
            },0);
          }else if(data.errno=="32710"){
            $(".vertifycode").val("");
            $(".logincodeerr").hide();
            setTimeout(function(){
              $(".logincodeerr").text("短信验证码失败太多,请稍后再试").show();
            },0);
          }else if(data.errno=="70001"){
            $(".vertifycode").val("");
            $(".logincodeerr").hide();
            setTimeout(function(){
              $(".logincodeerr").text("手机号错误").show();
            },0);
          }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          AjaxFlag = 1;
          alert("对不起，由于网络原因请稍后重试");
        }
      })
    }

    $(".goluck").click(function(){
      $(".goluck").hide();
      var fetchActivityData=App.copyData(initinfo);
      fetchActivityData.func="fetchActivity";
      fetchActivityData.phone = App.data.mobile;
      fetchActivityData.code = App.data.vercode;
      if(AjaxFlag==1){
        ajaxFetch(fetchActivityData);
      }
    })

    function ajaxFetch($data){
      $.ajax({
        url:AjaxUrl,
        type:"get",
        data:$data,
        dataType: "json",
        // jsonpCallback: "jsonp",
        beforeSend: function() {
          AjaxFlag = 0;
        },
        success: function(data) {
          AjaxFlag=1;
          App.data.award=data.award;
          if(data.errno==0){
            switch(data.award) {
              case 1:$(".award").attr("src", "img/b21.png");
              break;
              case 2:$(".award").attr("src", "img/b22.png");
              break;
              case 3:$(".award").attr("src", "img/b26.png");
              break;
              case 4:$(".award").attr("src", "img/b24.png");
              break;
              case 5:$(".award").attr("src", "img/b23.png");
              break;
              case 6:$(".award").attr("src", "img/b28.png");
              break;
              case 7:$(".award").attr("src", "img/b27.png");
              break;
              default: 
              App.data.award=8;
              $(".prize").addClass("unlucky");
              break;
            } 
          }else{
            $(".prize").addClass("unlucky");
          }
          $(".result,.rescont").hide();
          $(".pops,.prize").show();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          AjaxFlag=1;
          alert("对不起，由于网络原因请稍后重试");
        }
      })
    }

    $(".getprize").click(function(){
      if(App.data.award==7){
        location.href="https://gsactivity.diditaxi.com.cn/gulfstream/activity/v2/giftpackage/index?g_channel=bd6d9a8f909e53de9100d72110b40925";//滴滴券
      }else if(App.data.award==8){
        location.href="//"+location.host+location.pathname+"?ran="+Math.random();
      }else{
        $(".mobile").val(App.data.mobile);
        $(".prize").hide();
        AjaxFlag=1;
        $(".form").show();
      }
    })
    $("#smtbtn").click(function(){
      var _username=$(".username").val();
      var _address=$(".address").val();
      if(_username.replace(/\s+/,"")==""){
        alert("请输入姓名");
      }else if(_address.replace(/\s+/,"")==""){
        alert("请输入收奖地址");
      }else{
        App.data.username = _username;
        App.data.address = _address;
        var submitUserInfoData = App.copyData(initinfo);
        submitUserInfoData.func = "submitUserInfo";
        submitUserInfoData.phone = App.data.mobile;
        submitUserInfoData.data = {
          username: _username,
          address: _address
        };
        if(AjaxFlag==1){
          ajaxForm(submitUserInfoData);
        }
      }
    })

    function ajaxForm($data){
      $.ajax({
        url:AjaxUrl,
        type: "get",
        data: $data,
        dataType: "json",
        // jsonpCallback: "jsonp",
        beforeSend: function() {
          AjaxFlag = 0;
        },
        success: function(data) {
          AjaxFlag = 1;
          $(".form").hide();
          $(".subsuc").show();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          AjaxFlag = 1;
          alert("对不起，由于网络原因请稍后重试");
        }
      })
    }

    $(".hadplayok,.playagain,.subok").click(function(){
      location.href="//"+location.host+location.pathname+"?ran="+Math.random();
    })
  },
  chooseSlogan:function(slgmc){
    if(nohslogo) { slgmc.gotoAndStop(1); } 
  },
  copyData: function(fromData) {
    var toData = {};
    for (var i in fromData) {
      toData[i] = fromData[i];
    }
    return toData;
  }
}


function Game(root){
  this.root=root;
  this.gholder=this.root.gholder;
  this.car=this.gholder.car;
  this.footballs=this.gholder.footballs;
  this.panel=this.root.panel;
  this.mc=null;
  this.timer=this.maxtimer=25;//倒计时
  this.score=0;//得分
  this.index=0;//第几个球
  this.TperN=2.5;//单个球花费时间
  this.serveID=null;
  this.touchdir=0;//操作的方向 0未动 1正中 2向左 3向右
  this.ranRst=0;//游戏随机的情况种类 1正中 2向左 3向右
  this.touchSwipe=false;//是否可以touch
}
Game.prototype={

  config:function(){
    this.setNum(this.panel.numt,this.timer);
    createjs.Tween.get(this.gholder.intro).wait(2500).to({alpha:0},200).call(function(){
       this.start(); 
    }.bind(this))
  },
  start:function(){
    this.touchInit();
    this.timing();
    this.serve();
    this.interPlay();
  },
  moveReset:function(onlymove){
    this.touchdir=0;
    if(!onlymove) this.car.gotoAndStop(0);
    createjs.Tween.get(this.car).to({
      x:0
    },150,createjs.Ease.backOut);
  },
  moveUp:function(onlymove){
    this.touchdir=1;
    if(!onlymove) this.car.gotoAndStop(1);
    createjs.Tween.get(this.car).to({
      x:0
    },150,createjs.Ease.backOut);
  },
  moveLeft:function(onlymove){
    this.touchdir=2;
    if(!onlymove) this.car.gotoAndStop(2);
    createjs.Tween.get(this.car).to({
      x:-100
    },250,createjs.Ease.backOut);
  },
  moveRight:function(onlymove){
    this.touchdir=3;
    if(!onlymove) this.car.gotoAndStop(3);
    createjs.Tween.get(this.car).to({
      x:100
    },250,createjs.Ease.backOut);
  },
  touchInit:function(){
    mc=new Hammer($("#canvas")[0]);
    mc.get("pan").set({direction: Hammer.DIRECTION_ALL});
    mc.on("panleft",function (e){
      if(this.touchSwipe) this.moveLeft();
    }.bind(this)).on("panright",function (e){
      if(this.touchSwipe) this.moveRight();
    }.bind(this)).on("panup pandown",function (e){
      if(this.touchSwipe) this.moveUp();
    }.bind(this));
  },
  timing:function(){
    setTimeout(function(){
      if(--this.timer>=0) {
        this.setNum(this.panel.numt,this.timer);
        this.panel.p1.gotoAndPlay(0);
        this.timing();
      }else{
        window.clearTimeout(this.serveID);
      }    
    }.bind(this),1000);
  },
  setNum:function(mc,num){
    var _str=num<10?("0"+num):String(num);
    mc.n1.gotoAndStop(_str.substr(0,1));
    mc.n2.gotoAndStop(_str.substr(-1));
  },
  interPlay:function(){
    this.serveID=setTimeout(function(){
      this.moveReset();
      this.serve();
      this.interPlay();
    }.bind(this),this.TperN*1000);
  },
  judge:function(fb){
    this.touchSwipe=false;
    if(this.touchdir==this.ranRst||(this.touchdir==0&&this.ranRst==1)){
      this.setNum(this.panel.nums,++this.score);
      this.panel.p2.gotoAndPlay(2);
      this.gholder.flash.gotoAndPlay(2);
      this.car.boom.gotoAndPlay(2);
      fb.gotoAndPlay("suc"); 
    }else{
      fb.gotoAndPlay("fail");
    }
    if(this.touchdir==0&&this.ranRst==1){
      this.moveUp();
    }
  },
  serve:function(){
    if(++this.index>this.maxtimer/this.TperN) {
      App.showRst(this.score);
      return;
    }
    this.ranRst=Math.ceil(Math.random()*3);
    this.touchSwipe=true;
    this.footballs.gotoAndStop(0);
    this.footballs.gotoAndStop(this.ranRst);
  }
}
function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "": ";expires=" + exdate.toGMTString());
}
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
};
function getQueryString(name) {  
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
  var r = location.search.substr(1).match(reg);  
  if (r != null) return unescape(decodeURI(r[2])); return null;  
}  
