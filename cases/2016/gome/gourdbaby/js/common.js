var font = new FontFaceObserver('04b25');
font.load('1234567890').then(function(){
  document.documentElement.className+=" fonts-loaded";
  console.log('font load completed!');
},function(){
  console.log('font load failed');
})

"undefined" != typeof jQuery && !function (a) {
    "use strict";
    a.imgpreload = function (b, c) {
        c = a.extend({}, a.fn.imgpreload.defaults, c instanceof Function ? {all: c} : c), "string" == typeof b && (b = [b]);
        var d = [];
        a.each(b, function (e, f) {
            var g = new Image, h = f, i = g;
            "string" != typeof f && (h = a(f).attr("src") || a(f).css("background-image").replace(/^url\((?:"|')?(.*)(?:'|")?\)$/gm, "$1"), i = f), a(g).bind("load error", function (e) {
                d.push(i), a.data(i, "loaded", "error" == e.type ? !1 : !0), c.each instanceof Function && c.each.call(i, d.slice(0)), d.length >= b.length && c.all instanceof Function && c.all.call(d), a(this).unbind("load error")
            }), g.src = h
        })
    }, a.fn.imgpreload = function (b) {
        return a.imgpreload(this, b), this
    }, a.fn.imgpreload.defaults = {each: null, all: null}
}(jQuery);

var manifest=['img/a00.gif'];
for(var i=1;i<=18;i++){
  var _i=i<10?("0"+i):i;
  manifest.push("img/a"+_i+".png");
  if(i<=5) manifest.push("img/a"+_i+".jpg");
}

var load_img_progress=0;
var load_img_total = manifest.length;

var stageH;
function loading(){
	//_hmt.push(['_trackEvent', '页面加载', '状态', '页面加载开始']);
	$.imgpreload(manifest,{
	 	each:function(){
	 		var status=$(this).data('loaded')?'success':'error';
	 		if(status=='success'){
	 			load_img_progress++;
	      var percent = Math.ceil(load_img_progress / load_img_total * 100);
	      $('#loading .percent').html(percent);
	 		}
	 	},
	 	all:function(){
	 		//_hmt.push(['_trackEvent', '页面加载', '状态', '页面加载完成']);
	 		$("img").each(function(){
	      if($(this).data("src")){
	        $(this).attr("src",$(this).data("src"));
	      }
	    })

	 		$('#loading').fadeOut(function(){
	 			$('.p0').addClass('active');
	 		})
 		}
 	})
}

$(function(){
  stageH=$(window).height();
  if(stageH>1040) $('section').css({'bottom':(stageH-1040)/2});

	Control.load();
	$('body').on('touchmove', function (e) {
    e.preventDefault()
  })
	$('body').on('touchend','.playbtn',function(){
		$('.p0').hide();
		$('.p1').show();
		Control.videoPlay();
	})
	$('body').on('touchend','.p1btn',function(){
		$('.p1').hide();
		$('.p2').addClass('active');
		$('#audio2')[0].play();
	})
	$('.p2fribtn').click(function(){
		$('.blankMask').show();
		$('.bm').hide();
		$('.bm1').show();
		$('.blankMask').bind('click',function(){
			$('.blankMask').hide().unbind();
		})
		//_hmt.push(['_trackEvent', '页面button', '状态', '二维码']);
	})
	$('.p2shbtn').click(function(){
		$('.blankMask').show();
		$('.bm').hide();
		$('.bm2').show();
		$('.blankMask').bind('click',function(){
			$('.blankMask').hide().unbind();
		})
		//_hmt.push(['_trackEvent', '页面button', '状态', '分享']);
	})
})

function endDo() {
	//alert('播放完！')
	if(isIphone){
    setTimeout(function(){
      $('.video').hide();
    },0)
  }else{
    $('.video').hide();
  }
	
	$(".vend").show();
	$('#audio1')[0].play();
}


var Control;
!(function () {
    Control = {
      init: function () {
        //判断是否微信  is_weixn()
      },
      load: function () {
        loading();
      },
      videoPlay: function () {
        if(is_weixn()){
          if(isIphone){
            $('.js-video')[0].play();
          }else{
            //$('.js-video').attr({'controls': 'controls'}); // 添加视频控制条
          	//$('.js-video').removeAttr('webkit-playsinline');
            $('.js-video')[0].play();
            //alert($('.js-video')[0])
          }

        }else {
          if (canvasVideo) {
            canvasVideo.play();
          } else {
            $('.js-video')[0].play();
          }
        }
  		}
    }
}())

/**
 * 判断是否微信
 * @returns {boolean}
 */

function is_weixn() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}
/**
 * Video player
 * @type {{canvasClickHandler: null, videoTimeUpdateHandler: null, videoCanPlayHandler: null, windowResizeHandler: null}}
 */

var cvpHandlers = {
  canvasClickHandler: null,
  videoTimeUpdateHandler: null,
  videoCanPlayHandler: null,
  windowResizeHandler: null
};

var CanvasVideoPlayer = function (options, fn) {
  var i;

  this.options = {
    framesPerSecond: 25,
    hideVideo: true,
    autoplay: false,
    audio: false,
    timelineSelector: false,
    endFn: fn
  };

  for (i in options) {
    this.options[i] = options[i];
  }

  this.video = document.querySelectorAll(this.options.videoSelector)[0];
  this.canvas = document.querySelectorAll(this.options.canvasSelector)[0];
  this.timeline = document.querySelectorAll(this.options.timelineSelector)[0];
  this.timelinePassed = document.querySelectorAll(this.options.timelineSelector + '> div')[0];

  if (!this.options.videoSelector || !this.video) {
    console.error('No "videoSelector" property, or the element is not found');
    return;
  }

  if (!this.options.canvasSelector || !this.canvas) {
    console.error('No "canvasSelector" property, or the element is not found');
    return;
  }

  if (this.options.timelineSelector && !this.timeline) {
    console.error('Element for the "timelineSelector" selector not found');
    return;
  }

  if (this.options.timelineSelector && !this.timelinePassed) {
    console.error('Element for the "timelinePassed" not found');
    return;
  }

  if (this.options.audio) {
    if (typeof(this.options.audio) === 'string') {
      this.audio = document.querySelectorAll(this.options.audio)[0];
      if (!this.audio) {
        console.error('Element for the "audio" not found');
        return;
      }
    } else {
      this.audio = document.createElement('audio');
      this.audio.innerHTML = this.video.innerHTML;
      this.video.parentNode.insertBefore(this.audio, this.video);
      this.audio.load();
    }

    var iOS = /iPad|iPhone|iPod/.test(navigator.platform);
    if (iOS) {
      this.options.autoplay = false;
    }
  }

  this.ctx = this.canvas.getContext('2d');

  this.playing = false;

  this.resizeTimeoutReference = false;
  this.RESIZE_TIMEOUT = 1000;

  this.init();
  this.bind();
};

CanvasVideoPlayer.prototype.init = function () {
  this.video.load();

  this.setCanvasSize();

  if (this.options.hideVideo) {
    this.video.style.display = 'none';
  }
};

CanvasVideoPlayer.prototype.getOffset = function (elem) {
  var docElem, rect, doc;

  if (!elem) {
    return;
  }

  rect = elem.getBoundingClientRect();

  if (rect.width || rect.height || elem.getClientRects().length) {
    doc = elem.ownerDocument;
    docElem = doc.documentElement;

    return {
      top: rect.top + window.pageYOffset - docElem.clientTop,
      left: rect.left + window.pageXOffset - docElem.clientLeft
    };
  }
};

CanvasVideoPlayer.prototype.jumpTo = function (percentage) {
  this.video.currentTime = this.video.duration * percentage;

  if (this.options.audio) {
    this.audio.currentTime = this.audio.duration * percentage;
  }
};

CanvasVideoPlayer.prototype.bind = function () {
  var self = this;

  this.video.addEventListener('timeupdate', cvpHandlers.videoTimeUpdateHandler = function () {
    self.drawFrame();
    if (self.options.timelineSelector) {
      self.updateTimeline();
    }
  });

  this.video.addEventListener('canplaythrough', cvpHandlers.videoCanPlayHandler = function () {
    self.drawFrame();
  });

  if (self.options.autoplay) {
    self.play();
  }

  if (self.options.timelineSelector) {
    this.timeline.addEventListener('click',
      function (e) {
        var offset = e.clientX - self.getOffset(self.canvas).left;
        var percentage = offset / self.timeline.offsetWidth;
        self.jumpTo(percentage);
      });
  }

  this.unbind = function () {
    this.canvas.removeEventListener('click', cvpHandlers.canvasClickHandler);
    this.video.removeEventListener('timeupdate', cvpHandlers.videoTimeUpdateHandler);
    this.video.removeEventListener('canplay', cvpHandlers.videoCanPlayHandler);
    window.removeEventListener('resize', cvpHandlers.windowResizeHandler);

    if (this.options.audio) {
      this.audio.parentNode.removeChild(this.audio);
    }
  };
};

CanvasVideoPlayer.prototype.updateTimeline = function () {
  var percentage = (this.video.currentTime * 100 / this.video.duration).toFixed(2);
  this.timelinePassed.style.width = percentage + '%';
};

CanvasVideoPlayer.prototype.setCanvasSize = function () {
  this.width = this.canvas.clientWidth;
  this.height = this.canvas.clientHeight;

  this.canvas.setAttribute('width', this.width);
  this.canvas.setAttribute('height', this.height);
};

CanvasVideoPlayer.prototype.play = function () {
  this.lastTime = Date.now();
  this.playing = true;
  this.loop();

  if (this.options.audio) {
    // Resync audio and video
    this.audio.currentTime = this.video.currentTime;
    this.audio.play();
  }
};

CanvasVideoPlayer.prototype.pause = function () {
  this.playing = false;

  if (this.options.audio) {
    this.audio.pause();
  }
};

CanvasVideoPlayer.prototype.playPause = function () {
  if (this.playing) {
    this.pause();
  } else {
    // this.play();
  }
};

CanvasVideoPlayer.prototype.loop = function () {
  var self = this;

  var time = Date.now();
  var elapsed = (time - this.lastTime) / 1000;

  // Render
  if (elapsed >= (1 / this.options.framesPerSecond)) {
    this.video.currentTime = this.video.currentTime + elapsed;
    this.lastTime = time;
    // Resync audio and video if they drift more than 300ms apart
    if (this.audio && Math.abs(this.audio.currentTime - this.video.currentTime) > .3) {
      this.audio.currentTime = this.video.currentTime;
    }
  }

  // If we are at the end of the video stop
  if (this.video.currentTime >= this.video.duration) {
    this.playing = false;
    // 监听iPhone浏览器视频结束事件
    console.log('视频播放结束（iPhone）');
    this.options.endFn()
  }
  if (this.playing) {
    this.animationFrame = requestAnimationFrame(function () {
      self.loop();
    });
  } else {
    cancelAnimationFrame(this.animationFrame);
  }
};

CanvasVideoPlayer.prototype.drawFrame = function () {
  this.ctx.drawImage(this.video, 0, 0, this.width, this.height);
};

var isIphone = navigator.userAgent.toLowerCase().indexOf('iphone') >= 0; // 判断是否是iPhone浏览器
var canvasVideo;

if(is_weixn()){
  console.log('是微信')
  $('canvas').remove(); // 删掉canvas
  $('.js-video').removeAttr('muted');
  if(isIphone){
  	console.log('iphone')
    $('.js-video')[0].load();
    //$('.js-video').attr({'controls': 'controls'}); // 添加视频控制条
  }else{
  	console.log('android')
    $('.js-video').removeAttr('webkit-playsinline');
    //$('.js-video')[0].load();
  }
  $('.js-video').on('ended', function () {
    endDo()
  });
}else{
  console.log('不是微信');
  if (isIphone) { // 如果是iPhone浏览器，使用canvas方式播放视频
    console.log('iphone');
    canvasVideo = new CanvasVideoPlayer({
      videoSelector: '.js-video',
      canvasSelector: '.js-canvas',
      hideVideo: true,
      audio: true,
      endFn: function () {
        endDo()
      }
    });
  } else { // 如果非iPhone浏览器，使用video方式播放视频
    console.log('android')
    $('canvas').remove(); // 删掉canvas
    $('.js-video').removeAttr('muted'); // 取消静音
    $('.js-video').removeAttr('webkit-playsinline');
    //$('.js-video').attr({'controls': 'controls'}); // 添加视频控制条
    $('.js-video').on('ended', function () {
      endDo()
    });
  };
};