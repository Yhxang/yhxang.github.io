$(function(){
  var resourceDir="img/";
  var loadingImages=[];
  var sndplay=false;
  var stageH=$(window).height();
  var mySwiper;
  var isShare=false;
  $(window).resize(function(){
    $("#wrap,.subsec-mask").height(stageH);
  })
  $(window).triggerHandler("resize");
  for(var i=0;i<=4;i++){
    loadingImages.push("a"+(i<10?"0"+i:i)+".png");
  }
  var buchong=["a01.jpg"]
  loadingImages=loadingImages.concat(buchong);
  loadResources(loadingImages,function (n, i, img) {
      $("#loading p").html("loading&nbsp;" + Math.round(i * 100 / n) + "%");
      if (n != i) return;
      $("#loading").remove();
      $("#wrap").show();
      init();
  })
  function init(){
    mySwiper = new Swiper ('.swiper-container', {
      direction: 'vertical',
      slideActiveClass:'slide-active',
      onSlideChangeEnd:function(_this){
        if(_this.activeIndex==3||_this.activeIndex==4||_this.activeIndex==5||_this.activeIndex==7){
          $(".logo").addClass("w");
        }else{
          $(".logo").removeClass("w");
        }
        if(_this.activeIndex==9){
          $(".nexttip").addClass("hide");
        }else if(_this.activeIndex==8){
          $(".nexttip").removeClass("hide");
        }
      }
    })  
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

    $("#smt").click(function(e){
      e.preventDefault();
      if($("#province").val()==0){
        alert("请选择所在省份");
      }else if($("#city").val()==0){
        alert("请选择所在城市");
      }else if($("#district").val()==0){
        alert("请选择所在区县");
      }else if($("#name").val()==''){
        alert("请输入姓名");
      }else if(!checkMobile()){
        alert("错误的手机号码");
      }else{
        $("input").blur();
         $("#subsec-mask").addClass("show");
        $.post("userinfo_submit.php",{
          user_province:$("#province").val(),
          user_city:$("#city").val(),
          user_area:$("#district").val(),
          user_name:$("#name").val(),
          user_mobile:$("#phone").val(),
          user_type:2
        },function(data){
          data=$.parseJSON(data);
          if(data.result=="success"){
            //alert("提交成功！");
           
            $(".whitetiparea h1").text("提交成功！");
            $("#subsec-mask").addClass("subsec");
            $(".subsec-1").click(function(){
              e.preventDefault();
              window.location.href="http://c.haojv.com/gz/hisense/20150408a/index.html";
            });

            $(".subsec-2").click(function(){
              e.preventDefault();
              $("#subsec-mask").addClass("share");
              setTimeout(function(){
                isShare=true;
              },50)
            });

            $("#subsec-mask").click(function(e){
              if(isShare){
                $("#subsec-mask").removeClass("share");
              }
              isShare=false;
            });

            $(".subsec-3").click(function(){
              e.preventDefault();
              mySwiper.slideTo(0,0);
              $(".subsec-mask").removeClass("show");
            })

          }else{
            alert("提交失败！");
          }
        });
      }
    })
  }
  function checkMobile(){ 
    var sMobile = document.msgform.phone.value 
    if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))){ 
      alert("手机号有误，请输入正确手机号码"); 
      document.telform.mobile.focus(); 
      return false; 
    } else{
      return true;
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
      img.src = resourceDir + urls[i];//+ "?ver=" + j_version;
    }
  }    
})