$(function(){
  var AstroArr=["水瓶座","双鱼座","白羊座","金牛座","双子座","巨蟹座","狮子座","处女座","天秤座","天蝎座","射手座","摩羯座"];
  var copywriting=["1","2","3"];
  var stageH=$(window).height();
  $("#wrap,.swiper-container,.swiper-slide").height(stageH);
  var loadingImages=[];
  var mySwiper;
  var dadbirth={
    year:1900,
    month:1,
    day:1,
    astro:null
  }
  var mybirth={
    year:1900,
    month:1,
    day:1,
    astro:null
  }

  for(var i=1;i<=10;i++){
    loadingImages.push("a"+(i<10?"0"+i:i)+".png");
  }
  loadResources(loadingImages,function (n, i, img) {
    $("#loading p").html("loading&nbsp;" + Math.round(i * 100 / n) + "%");
    if (n != i) return;
    $("#loading").remove();
    $("#wrap").show();
    init();
  })
  var audio=document.getElementById("snd");
  var sndplay=false;
  $("html,body").one("touchstart",function(){
    sndplay=true;
    audio.play();
  })
  audio.addEventListener("ended",function(e){
    sndplay=true;
    audio.play();
  },false)
  $(".sndctrl").click(function(){
    if(sndplay){
      $(".sndctrl").addClass("muted");
      audio.pause();
      sndplay=false;
    }else{
      $(".sndctrl").removeClass("muted");
      audio.play();
      sndplay=true;
    }
  })
  function init(){
    mySwiper = new Swiper ('.swiper-container', {
      direction: 'vertical',
      onSlideChangeEnd:function(_this){
        if(_this.activeIndex==1){
          //mySwiper.lockSwipes();
          $(".nexttip").removeClass("show");
          mySwiper.destroy(false);
        }
      }
    })
    initdatesel();

    for(var i=1900;i<=new Date().getFullYear();i++){
      $(".year").append('<div class="item" data-value="' + i + '">' + i + "</div>")
    }
    for(i=1;i<=12;i++){
      $(".month").append('<div class="item" data-value="' + i + '">' + i + "</div>")
    }
    setDaysel($(".day"),31);
    initdatesel();

    $(".p2-btn").click(function(){
      if($(".text").hasClass("default")){
        alert("请选择完整日期");
      }else{
        dadbirth.astro=getAstro(dadbirth.month,dadbirth.day);
        mybirth.astro=getAstro(mybirth.month,mybirth.day);
        $(".p3-subres").attr("src","img/sub/s_"+dadbirth.astro+".png");
        $(".p3-resdad").attr("src","img/sub/d_"+dadbirth.astro+".png");
        $(".p3-resme").attr("src","img/sub/u_"+mybirth.astro+".png");
        $(".p3-lastres").addClass("bgc"+dadbirth.astro);
        mySwiper.slideNext();
        $(".p3-dad").attr("src","img/sub/a_"+dadbirth.astro+".png");
        $(".p3-child").attr("src","img/sub/c_"+mybirth.astro+".png");
      }
    })

    $(".p3-btn").click(function(){
      $(".p3").addClass("p3-1");

      mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        //onlyExternal:true,
        onTouchStart:function(){
          $(".p3-lastres").addClass("cir");
          $(".nexttip").removeClass("show");
          mySwiper.destroy(false);
          //ran=Math.floor(Math.random()*copywriting.length+1)-1;
          //$("#regards").val(copywriting[ran]);
        }
      })
      //setTimeout(function(){mySwiper.unlockSwipes();},50)
      $(".nexttip").addClass("show")

      $(".p3-btn-2").click(function(){
        if($("#regards").val().replace(/\s+/,"")==""){
          alert("请输入内容");
        }else{
          $(".nexttip").removeClass("show");

          //shareto($("#regards").val())
          $(".blankmask").addClass("show");
          
            $(".blankmask").removeClass("show");
            mySwiper = new Swiper ('.swiper-container', {
              direction: 'vertical',
              initialSlide:3
            })
            mySwiper.destroy(false);

            $("#smt").click(function(e){
              e.preventDefault();
              if($("#username").val().replace(/\s+/,"")==""){
                alert("请填写姓名")
                $("#username").focus();
              }else if(!checkMobile()){

              }else if($("#address").val().replace(/\s+/,"")==""){
                alert("请填写地址")
                $("#address").focus();
              } else{
                $.post("submit.php",{
                  username:$("#username").val(),
                  phone:$("#phone").val(),
                  address:$("#address").val(),
                  regards:$("#regards").val()
                },function(data){
                  if(data.result=="success"){
                    $(".blankmask").addClass("suc show");
                    setTimeout(function(){
                      window.location.href="http://mp.weixin.qq.com/s?__biz=MjM5ODE0NzU0MA==&mid=207565916&idx=1&sn=c20e212cae2cd991001eb58e1da036ac#rd";
                    },3000)
                  }else if(data.result=="fail"){
                    alert(data.errmsg);
                  }
                },'json')
                
              }
            })
          
        }
      })
    })

  }
  
  function setDaysel(sel,num){
    var dayhtml="";
    for(var i=1;i<=num;i++){
      dayhtml+='<div class="item" data-value="' + i + '">' + i + "</div>";
    }
    sel.html(dayhtml);
  }
  
  function initdatesel(){
    $('.year1').dropdown({
      transition: 'drop',
      onChange:function(value,text,_t){
        dadbirth.year=value;
        setDaysel($(".day1 .day"),new Date(dadbirth.year,dadbirth.month,0).getDate());
        //initdatesel();
      }
    });
    $('.month1').dropdown({
      transition: 'drop',
      onChange:function(value,text,_t){
        dadbirth.month=value;
        setDaysel($(".day1 .day"),new Date(dadbirth.year,dadbirth.month,0).getDate());
        //initdatesel();
      }
    });
    $('.day1').dropdown({
      transition: 'drop',
      onChange:function(value,text,_t){
        dadbirth.day=value;
      }
    })
    $('.year2').dropdown({
      transition: 'drop',
      onChange:function(value,text,_t){
        mybirth.year=value;
        setDaysel($(".day2 .day"),new Date(mybirth.year,mybirth.month,0).getDate());
        //initdatesel();
      }
    });
    $('.month2').dropdown({
      transition: 'drop',
      onChange:function(value,text,_t){
        mybirth.month=value;
        setDaysel($(".day2 .day"),new Date(mybirth.year,mybirth.month,0).getDate());
        //initdatesel();
      }
    });
    $('.day2').dropdown({
      transition: 'drop',
      onChange:function(value,text,_t){
        mybirth.day=value;
      }
    })
  }
})

function loadResources(urls, progress) {
  var loadedCount = 0;
  var resourceDir ="img/";
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
function checkMobile(){ 
  var sMobile = document.usermsg.phone.value 
  if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))){ 
    alert("手机号有误，请输入正确手机号码"); 
    //document.telform.mobile.focus(); 
    return false; 
  } else{
    return true;
  }
} 
function getAstro(_m,_d) {
  var month = _m;
  var date = _d;
  var value=0;
  if (month == 1 && date >= 20 || month == 2 && date <= 18) {
    value = 1;
  }
  if (month == 1 && date > 31) {
    value = "Huh?";
  }
  if (month == 2 && date >= 19 || month == 3 && date <= 20) {
    value = 2;
  }
  if (month == 2 && date > 29) {
    value = "Say what?";
  }
  if (month == 3 && date >= 21 || month == 4 && date <= 19) {
    value = 3;
  }
  if (month == 3 && date > 31) {
    value = "OK. Whatever.";
  }
  if (month == 4 && date >= 20 || month == 5 && date <= 20) {
    value = 4;
  }
  if (month == 4 && date > 30) {
    value = "I'm soooo sorry!";
  }
  if (month == 5 && date >= 21 || month == 6 && date <= 21) {
    value = 5;
  }
  if (month == 5 && date > 31) {
    value = "Umm ... no.";
  }
  if (month == 6 && date >= 22 || month == 7 && date <= 22) {
    value = 6;
  }
  if (month == 6 && date > 30) {
    value = "Sorry.";
  }
  if (month == 7 && date >= 23 || month == 8 && date <= 22) {
    value = 7;
  }
  if (month == 7 && date > 31) {
    value = "Excuse me?";
  }
  if (month == 8 && date >= 23 || month == 9 && date <= 22) {
    value = 8;
  }
  if (month == 8 && date > 31) {
    value = "Yeah. Right.";
  }
  if (month == 9 && date >= 23 || month == 10 && date <= 23) {
    value = 9;
  }
  if (month == 9 && date > 30) {
    value = "Try Again.";
  }
  if (month == 10 && date >= 24 || month == 11 && date <= 22) {
    value = 10;
  }
  if (month == 10 && date > 31) {
    value = "Forget it!";
  }
  if (month == 11 && date >= 23 || month == 12 && date <= 21) {
    value = 11;
  }
  if (month == 11 && date > 30) {
    value = "Invalid Date";
  }
  if (month == 12 && date >= 22 || month == 1 && date <= 19) {
    value = 12;
  }
  if (month == 12 && date > 31) {
    value = "No way!";
  }
  return value;
}