//
function UploadPic() {
  this.sw = 0;
  this.sh = 0;
  this.tw = 0;
  this.th = 0;
  this.scale = 0;
  this.maxWidth = 1000;
  this.maxHeight = 800;
  this.maxSize = 0;
  this.fileSize = 0;
  this.fileDate = null;
  this.fileType = '';
  this.fileName = '';
  this.input = null;
  this.canvas = null;
  this.mime = {};
  this.type = '';
  this.callback = function () {};
  this.loading = function () {};
}

UploadPic.prototype.init = function (options) {
  this.maxWidth = options.maxWidth || 800;
  this.maxHeight = options.maxHeight || 600;
  this.maxSize = options.maxSize || 3 * 1024 * 1024;
  this.input = options.input;
  this.mime = {'png': 'image/png', 'jpg': 'image/jpeg', 'jpeg': 'image/jpeg', 'bmp': 'image/bmp'};
  this.callback = options.callback || function () {};
  this.loading = options.loading || function () {};
    
  this._addEvent();
};


UploadPic.prototype._addEvent = function () {
  var _this = this;
    
  function tmpSelectFile(ev) {
    _this._handelSelectFile(ev);
  }
    
  this.input.addEventListener('change', tmpSelectFile, false);
};

UploadPic.prototype._handelSelectFile = function (ev) {
  var file = ev.target.files[0];
  
  this.type = file.type
  
  if (!this.type) {
    this.type = this.mime[file.name.match(/\.([^\.]+)$/i)[1]];
  }
  
  if (!/image.(png|jpg|jpeg|bmp)/.test(this.type)) {
    return;
  }
    
  if (file.size > this.maxSize) {
    alert('文件超过' + this.maxSize / 1024 / 1024 + 'M请另选一张照片,谢谢！');
    return;
  }

  this.fileName = file.name;
  this.fileSize = file.size;
  this.fileType = this.type;
  this.fileDate = file.lastModifiedDate;
    
  this._readImage(file);
};


UploadPic.prototype._readImage = function (file) {
  var _this = this;
    
  function tmpCreateImage(uri) {
    _this._createImage(uri);
  }
  
  this.loading();
    
  this._getURI(file, tmpCreateImage);
};


UploadPic.prototype._getURI = function (file, callback) {
  var reader = new FileReader();
  var _this = this;

  function tmpLoad() {
    var re = /^data:base64,/;
    var ret = this.result + '';
        
    if (re.test(ret)) ret = ret.replace(re, 'data:' + _this.mime[_this.fileType] + ';base64,');
        
    callback && callback(ret);
  }
    
  reader.onload = tmpLoad;
    
  reader.readAsDataURL(file);
    
  return false;
};

UploadPic.prototype._createImage = function (uri) {
  var img = new Image();
  var _this = this;
    
  function tmpLoad() {
    _this._drawImage(this);
  }
    
  img.onload = tmpLoad;
    
  img.src = uri;
};


UploadPic.prototype._drawImage = function (img, callback) {
  this.sw = img.width;
  this.sh = img.height;
  this.tw = img.width;
  this.th = img.height;
    
  this.scale = (this.tw / this.th).toFixed(2);

  if (this.sw > this.maxWidth) {
    this.sw = this.maxWidth;
    this.sh = Math.round(this.sw / this.scale);
  }
  
  if (this.sh > this.maxHeight) {
    this.sh = this.maxHeight;
    this.sw = Math.round(this.sh * this.scale);
  }
  
  this.canvas = document.createElement('canvas');
  var ctx = this.canvas.getContext('2d');
  this.canvas.width = this.sw;
  this.canvas.height = this.sh;
    
  ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, this.sw, this.sh);
    
  this.callback(this.canvas.toDataURL(this.type));
    
  ctx.clearRect(0, 0, this.tw, this.th);
  this.canvas.width = 0;
  this.canvas.height = 0;
  this.canvas = null;
};

function $id (id) { return document.getElementById(id)} 
// android
function initForAndroid( id,callback ) {
  var u = new UploadPic();
	  u.init({
		input:$id(id),
		callback: function ( data ) {
			callback (data);	
		},
		loading: function () {
		
		}
	  });
}

function _initUpLoad ( id ,callbacks  ) {
	var _UA = navigator.userAgent.toLowerCase();
	// ios
	if ( /ipad|iphone|ipod|mac/i.test( _UA ) ) {
		
		Zepto('#'+id).makeThumb({
		  width:800,
		  //height:800,
		  success: function(dataURL, tSize, file, sSize, fEvt) {
			callbacks (dataURL);
		  }
		});	

	} else if ( /android/gi.test( _UA ) && /MicroMessenger/gi.test(_UA)  ) {
		initForAndroid ( id,callbacks);
    //alert(1)
	}  else {
		 Zepto('#'+id).makeThumb({
		  width:800,
		  height:800,
		  success: function(dataURL, tSize, file, sSize, fEvt) {
			callbacks (dataURL);
		  }
		});		
	}	
};